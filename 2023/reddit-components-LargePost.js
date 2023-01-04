// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.52dae180ce80269d8da8.js
// Retrieved at 1/4/2023, 10:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost", "Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba", "Reddit~StandalonePostPage~reddit-components-MediumPost"], {
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						v = !a && !u && !m && !p && /linux/i.test(t),
						O = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !g && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, O ? (o.msedge = e, o.version = O) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: O
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, x && (o.version = x)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, x && (o.version = x)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && x && (o.version = x)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : y ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var C = !o.windows && j.split(".")[0];
					return g || c || "ipad" == r || a && (3 == C || C >= 4 && !_) || o.silk ? o.tablet = e : (_ || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function a(e, s, o) {
					var a = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (a = t(o));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = r, n.check = function(e, t, n) {
					return !a(e, t, n)
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
		"./node_modules/lodash/map.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayMap.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseMap.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? s : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : a,
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
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, n) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, n) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, n) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(o);
			t.a = function(e) {
				var t;
				const {
					source: n,
					isSponsored: o,
					domainOverride: a,
					callToAction: i
				} = e;
				let c = "";
				if (o) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					c = a || Object(s.E)(e)
				} else c = Object(s.E)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [a, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), f = Object(o.useCallback)(() => m(!u), [u]), h = Object(o.useMemo)(() => {
					const t = i(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: v,
					styles: O,
					update: x
				} = Object(r.a)(t, a, h);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: O.arrow,
						...v.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: O.popper,
						...v.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: x
				}), [l, v, c, b, p, O, t, n, f, u, x])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/lodash/every.js"),
				o = n.n(s);

			function r(e) {
				let t = null,
					n = null;
				return function() {
					for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
					return null !== t && r.length === t.length && o()(r, (e, n) => e === t[n]) || (t = r, n = e(...r)), n
				}
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/domUtils/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				a = n("./src/reddit/constants/elementIds.ts");
			const i = () => {
					o.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: s,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.yc, o.ub, o.E, o.U, o.pb, o.Xb],
				a = {
					[o.Xb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.pb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.U]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.E]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.ub]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.yc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[o.Xb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.U]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.E]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.ub]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.ub]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.yc]: "",
						[o.ub]: "",
						[o.E]: "",
						[o.U]: "",
						[o.pb]: "",
						[o.Xb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? i : a)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				a = Object(s.a)(o.b),
				i = Object(s.a)(o.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return be
			})), n.d(t, "r", (function() {
				return ve
			})), n.d(t, "p", (function() {
				return Oe
			})), n.d(t, "t", (function() {
				return _e
			})), n.d(t, "w", (function() {
				return ye
			})), n.d(t, "q", (function() {
				return je
			})), n.d(t, "v", (function() {
				return ke
			})), n.d(t, "o", (function() {
				return Se
			})), n.d(t, "m", (function() {
				return Pe
			})), n.d(t, "b", (function() {
				return Ie
			})), n.d(t, "c", (function() {
				return Re
			})), n.d(t, "s", (function() {
				return Me
			})), n.d(t, "g", (function() {
				return Le
			})), n.d(t, "h", (function() {
				return De
			})), n.d(t, "k", (function() {
				return Fe
			})), n.d(t, "e", (function() {
				return Ue
			})), n.d(t, "d", (function() {
				return Ke
			})), n.d(t, "a", (function() {
				return qe
			})), n.d(t, "j", (function() {
				return He
			})), n.d(t, "i", (function() {
				return Je
			})), n.d(t, "l", (function() {
				return Ze
			})), n.d(t, "u", (function() {
				return Xe
			})), n.d(t, "n", (function() {
				return $e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/lib/scroll/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/onboarding/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCreation/editorContent.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/constants/adEvents.ts"),
				h = n("./src/reddit/constants/localStorage.ts"),
				v = n("./src/redditGQL/operations/CommentToxicity.json"),
				O = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/makeGqlRequest/index.ts"),
				_ = n("./src/lib/omitHeaders/index.ts"),
				y = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				P = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				T = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				I = n("./src/reddit/helpers/graphql/helpers.ts"),
				N = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				A = n("./src/redditGQL/operations/CreateComment.json");
			const R = (e, t, n, s) => {
					let o, r;
					if (s === w.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = y.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(g.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				M = async (e, t, n, s) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === w.i.MARKDOWN ? o.text = n.text : (o.text = null, o.richtext_json = s), Object(x.a)(Object(_.a)(e, [j.a]), {
						method: O.ob.POST,
						endpoint: Object(C.a)(Object(P.a)(Object(T.a)(`${e.apiUrl}/api/comment.json`))),
						data: o
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(E.a)()
					})
				}, L = async (e, t, n, s, o) => {
					const r = s.commentMode === w.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: r ? s.text : null,
								richText: r ? null : o
							}
						};
					return Object(g.a)(e, {
						...A,
						variables: {
							input: a
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(I.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(I.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(N.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(E.a)()
						}
					})
				};
			var D = n("./src/redditGQL/operations/UpdateComment.json");
			var F = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = n("./src/reddit/endpoints/post/index.tsx"),
				U = n("./src/reddit/endpoints/post/convert.ts"),
				V = n("./src/reddit/featureFlags/index.ts"),
				G = n("./src/reddit/helpers/comment/index.ts"),
				W = n("./src/reddit/helpers/correlationIdTracker.ts"),
				K = n("./src/reddit/helpers/dom/index.ts"),
				q = n("./src/reddit/helpers/localStorage/index.ts"),
				H = n("./src/reddit/helpers/sessionStorage/index.ts"),
				z = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				Y = n("./src/reddit/models/Comment/index.ts"),
				Q = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RichTextJson/index.ts"),
				Z = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				X = n("./src/reddit/models/Toast/index.ts"),
				$ = n("./src/reddit/selectors/chatPost.ts"),
				ee = n("./src/reddit/selectors/comments.ts"),
				te = n("./src/reddit/selectors/commentSelector.ts"),
				ne = n("./src/reddit/selectors/experiments/chat.ts"),
				se = n("./src/reddit/constants/experiments.ts"),
				oe = n("./src/reddit/helpers/chooseVariant/index.ts"),
				re = n("./node_modules/reselect/es/index.js");
			const ae = Object(re.a)(e => Object(oe.c)(e, {
				experimentEligibilitySelector: oe.a,
				experimentName: se.Ab
			}), e => e === se.Od);
			var ie = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ce = n("./src/reddit/selectors/platform.ts"),
				de = n("./src/reddit/selectors/posts.ts"),
				le = n("./src/reddit/selectors/user.ts"),
				ue = n("./src/reddit/actions/comment/index.ts"),
				me = n("./src/reddit/actions/comment/constants.ts");
			const pe = Object(o.a)(me.m),
				be = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(le.U)(o) && t) {
								const s = pe({
									hasFocus: t,
									draftKey: n
								});
								e(Object(i.startChangeUsernameFlow)(s))
							} else e(pe({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				fe = Object(o.a)(me.L),
				he = Object(o.a)(me.H),
				ve = Object(o.a)(me.N),
				Oe = Object(o.a)(me.M),
				xe = Object(o.a)(me.K),
				ge = async (e, t, n, s, o) => {
					const r = s.ok && s.body,
						a = r && r.comment && r.comment.id;
					await z.g(e, n, t, o, a)
				}, _e = "Toxicity_Warning__Modal", ye = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						a = Object(ce.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (V.d.enableToxicityWarning(r)) {
						if (!(await R(o(), i, c, l))) return void t(Object(d.i)(_e))
					}
					t(je(e))
				}, je = e => async (t, n) => {
					t(Object(d.g)(_e));
					const s = n(),
						o = Object(ie.a)(s),
						r = Object(ie.c)(s);
					if (!s.user.account && o) {
						const n = Object(G.e)(e.formData, s.uploads),
							o = Object(G.d)(e.formData, s.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(H.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Ee(e, !1))
				};

			function Ce(e, t) {
				return e === w.i.MARKDOWN && ae(t)
			}
			const Ee = (e, t, n, o) => {
					let {
						postId: r,
						commentsPageKey: i,
						draftKey: c,
						formData: d,
						editorMode: l,
						disableAutofocus: m
					} = e;
					return async (e, h, v) => {
						let {
							apiContext: O,
							gqlContext: x
						} = v;
						var g;
						const _ = h(),
							y = Object($.d)(_, {
								postId: r
							}),
							j = y ? Object(G.b)() : c,
							C = Object(te.f)(_, {
								commentId: j
							}),
							E = Object(le.m)(_);
						if (!E) return;
						if (C && !y) return;
						t || e(fe({
							draftKey: j,
							draft: d,
							commentsPageKey: i,
							optimisticComment: y ? Object(G.c)({
								temporalId: j,
								draft: d,
								post: Object(de.G)(_, {
									postId: r
								}),
								author: E,
								subredditId: (null === (g = Object(ce.e)(_)) || void 0 === g ? void 0 : g.id) || ""
							}) : void 0
						}));
						const k = d.commentMode;
						let S;
						const P = t && n ? n : Object(G.e)(d, _.uploads),
							T = Object(G.f)(P, _.uploads);
						if ((S = Ce(k, _) ? await L(x(), r, null, d, P) : await M(O(), r, d, P)).ok) {
							const n = S.body;
							if (e(ve({
									...n,
									headCommentId: Object(ee.w)(_, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: j,
									upload: T
								})), t) {
								const e = Object(ce.j)(_);
								Object(a.a)(!!e)
							}
							const s = Object(de.G)(h(), {
								postId: r
							});
							e(Object(u.y)(s, f.a.CommentSubmitted))
						} else {
							if (S.error) {
								const e = t && o ? o : Object(G.d)(d, _.uploads);
								z.f({
									state: _,
									bodyText: e,
									postId: r,
									error: S.error,
									uploadMetadata: null == T ? void 0 : T.metadata
								})
							}
							const n = S.error && S.error.fields && S.error.fields[0] ? S.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(xe({
								draftKey: j,
								error: S.error
							})), y || e(Object(b.f)({
								duration: b.a,
								kind: X.b.Error,
								text: n
							}))
						}
						ge(h(), i, l, S, null == T ? void 0 : T.metadata).then(() => S.ok && l === w.i.RICH_TEXT ? Object(W.b)(W.a.CommentComposer) : void 0), m || Object(p.d)(), t && Object(H.a)()
					}
				},
				ke = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(ce.e)(m);
					let b = "";
					if (p && (b = p.name), V.d.enableToxicityWarning(m)) {
						if (!(await R(o(), b, l, u))) return void t(Object(d.i)(_e))
					}
					t(Se({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, Se = e => async (t, n) => {
					t(Object(d.g)(_e));
					const s = n(),
						o = Object(ie.a)(s),
						r = Object(ie.c)(s);
					if (!s.user.account && o) {
						const n = Object(G.e)(e.formData, s.uploads),
							o = Object(G.d)(e.formData, s.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(H.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(we(e, !1))
				}, we = (e, t, n, s) => async (o, r, i) => {
					let {
						apiContext: c,
						gqlContext: d
					} = i;
					var l;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: b,
						draftKey: f,
						formData: h,
						editorMode: v
					} = e, O = r(), x = Object(te.c)(O, {
						commentId: u
					}), g = x && Object($.d)(O, {
						postId: x.postId
					}) && Object(ne.d)(O), _ = x && Object($.d)(O, {
						postId: x.postId
					}), y = _ ? Object(G.b)() : f, j = Object(te.f)(O, {
						commentId: y
					}), C = Object(le.m)(O);
					if (!C) return;
					if (j && !_) return;
					t || o(fe({
						draftKey: y,
						draft: h,
						commentsPageKey: m,
						optimisticComment: _ && x ? Object(G.c)({
							temporalId: y,
							draft: h,
							post: Object(de.G)(O, {
								postId: x.postId
							}),
							author: C,
							subredditId: (null === (l = Object(ce.e)(O)) || void 0 === l ? void 0 : l.id) || "",
							parentId: x.id
						}) : void 0
					})), g || o(Ie({
						parentCommentId: u,
						commentsPageKey: m
					}));
					const E = h.commentMode,
						k = t && n ? n : Object(G.e)(h, O.uploads),
						S = Object(G.f)(k, O.uploads);
					let w;
					if ((w = Ce(E, O) ? await L(d(), null, u, h, k) : await M(c(), u, h, k)).ok) {
						if (o(Oe({
								...w.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: y,
								depth: b + 1,
								upload: S
							})), t) {
							const e = Object(ce.j)(O);
							Object(a.a)(!!e)
						}
					} else {
						if (w.error) {
							if (!x) return;
							const e = t && s ? s : Object(G.d)(h, O.uploads);
							z.f({
								state: O,
								bodyText: e,
								postId: x.postId,
								parentId: u,
								error: w.error,
								uploadMetadata: null == S ? void 0 : S.metadata
							})
						}
						o(xe({
							draftKey: y,
							error: w.error
						}))
					}
					ge(r(), m, v, w, null == S ? void 0 : S.metadata), g || Object(p.d)(), t && Object(H.a)()
				}, Pe = () => async e => {
					const t = Object(H.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: o,
								richTextJSONData: r,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(l.skipOnboardingModal)()), o ? await e(Ee({
							...t.comment,
							postId: o
						}, !0, r, a)) : s && void 0 !== n && await e(we({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, a))
					}
				}, Te = Object(o.a)(me.s), Ie = Object(o.a)(me.r), Ne = Object(o.a)(me.n), Ae = (Object(o.a)(me.i), Object(o.a)(me.o)), Re = (Object(o.a)(me.v), (e, t, n) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === w.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.H)(t)) o(Ae({
						editorMode: e,
						draftKey: n,
						content: c ? J.i : ""
					})), o(Object(m.c)(e));
					else {
						o(Object(m.b)(n));
						const r = await Object(U.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(m.a)(n)), o(Ae({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(m.c)(e))
						} else o(Object(m.a)(n)), o(Object(b.f)({
							duration: b.a,
							kind: X.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Me = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const a = o(),
							l = Object(r.a)(Q.c.replyToComment, n);
						if (!Object(le.S)(o()) && !Object(ie.a)(a)) return e(Object(c.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ee.m)(o(), {
								commentId: n
							})
						}));
						const u = a.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Ie({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const f = a.user.prefs.commentMode,
							h = Object(K.d)();
						if (h) {
							const e = h.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === w.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Z.s(e, null)).map(e => Z.l([e])),
									n = Z.s("", null),
									s = Z.l([n]);
								b = {
									document: [Z.c(t), s]
								}
							}
						}
						const v = a.features.comments.drafts[l];
						let O;
						if (O = h ? {
								commentMode: f,
								draftType: Q.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : v || {
								commentMode: f,
								draftType: Q.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(le.U)(a)) {
							const s = Te({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: l,
								formData: O
							});
							e(Object(i.startChangeUsernameFlow)(s))
						} else e(Te({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: l,
							formData: O
						}))
					}
				}, Le = e => async t => {
					t(Object(ue.r)(e)), t(Ue(e))
				}, De = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Ie({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Me({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(ue.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Fe = (e, t) => n => n(Ne({
					draftKey: e,
					formData: t
				})), Be = Object(o.a)(me.u), Ue = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (z.c(i), e(Be({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: Q.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ve = Object(o.a)(me.F), Ge = Object(o.a)(me.E), We = Object(o.a)(me.G), Ke = Object(o.a)(me.j), qe = Object(o.a)(me.f), He = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: o
					} = e;
					return async (e, r, a) => {
						let {
							apiContext: i,
							gqlContext: c
						} = a;
						const d = r();
						if (!d.user.account) return;
						e(Ve({
							draftKey: s
						})), z.d(d);
						const l = Object(G.e)(o, d.uploads),
							u = o.commentMode;
						let m;
						if ((m = Ce(u, d) ? await (async (e, t, n, s, o) => {
								const r = o === w.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? n.text : null,
											richText: r ? null : s
										}
									};
								return Object(g.a)(e, {
									...D,
									variables: {
										input: a
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(I.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(I.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(N.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(E.a)()
									}
								})
							})(c(), t, o, l, u) : await (async (e, t, n, s, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === w.i.MARKDOWN ? r.text = n.text : (r.text = null, r.richtext_json = s), Object(x.a)(Object(_.a)(e, [j.a]), {
									endpoint: Object(C.a)(Object(T.a)(Object(P.a)(`${e.apiUrl}/api/editusertext`))),
									method: O.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(S.a)(e)
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(E.a)()
								})
							})(i(), t, o, l, u)).ok) {
							const o = m.body;
							e(We({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(ue.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(Ge({
							draftKey: s,
							error: m.error
						}))
					}
				}, ze = Object(o.a)(me.C), Ye = Object(o.a)(me.B), Qe = Object(o.a)(me.D), Je = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s();
					n(ze({
						id: e
					})), z.a(e, a);
					const i = await ((e, t) => Object(x.a)(Object(_.a)(e, [j.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/del`),
						method: O.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(E.a)()
					}))(r(), e);
					i.ok ? n(Qe({
						id: e,
						postId: t
					})) : n(Ye({
						id: e,
						error: i.error
					}))
				}, Ze = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(ue.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(B.q)(o(), e, r)).ok || t(Object(ue.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Xe = (e, t) => async (n, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c, d, l, u, m;
					n(Object(ue.c)());
					const p = e => Object(b.f)(Object(b.e)(e, X.b.Error));
					if (((null === (c = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === h.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Y.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(ue.p)(i)), (await ((e, t) => Object(g.a)(e, {
								...F,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(q.pb)(null !== (u = null === (l = null === (d = o().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(b.f)({
								kind: X.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(ue.p)(i)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function $e(e) {
				let {
					commentId: t,
					commentsPageKey: n
				} = e;
				return async (e, s) => {
					const o = s(),
						r = Object(te.c)(o, {
							commentId: t
						});
					if (!r) return;
					e(he({
						commentId: t,
						commentsPageKey: n
					}));
					const a = {
						commentMode: r.media.rteMode,
						draftType: r.parentId ? Q.c.replyToComment : Q.c.replyToPost,
						rtJson: r.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (r.parentId) {
						const t = Object(te.c)(o, {
								commentId: r.parentId
							}),
							s = Object(ee.j)(o, {
								commentId: r.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === s) return;
						await e(Se({
							commentsPageKey: n,
							draftKey: r.id,
							parentCommentDepth: s,
							parentCommentId: t.id,
							formData: a,
							editorMode: r.media.rteMode
						}))
					} else await e(je({
						postId: r.postId,
						commentsPageKey: n,
						draftKey: r.id,
						formData: a,
						editorMode: r.media.rteMode,
						disableAutofocus: !0
					}))
				}
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "b", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				m = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				O = n("./src/reddit/actions/comment/constants.ts");
			const x = Object(r.a)(O.p),
				g = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(x({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(h.S)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = n().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? u.l : u.f;
					t(Object(v.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, y = Object(r.a)(O.J), j = e => async (t, n, o) => {
					let {
						apiContext: r,
						gqlContext: a
					} = o;
					const i = n(),
						l = i.features.comments.models[e],
						m = i.user.account ? i.user.account.displayText : null;
					l && m && (t(Object(v.j)({
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
					})), (await Object(u.a)(a(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(v.j)({
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
				}, C = (e, t) => async (n, o, r) => {
					let {
						apiContext: a,
						gqlContext: i
					} = r;
					const l = o(),
						m = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					m && p && (n(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(i(), e, t)).ok ? n(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(v.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam,
							numReports: m.numReports
						}
					})), Object(c.d)())
				}, E = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? u.k : u.e;
					a.ignoreReports || t(j(e)), t(Object(v.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, k = (e, t, n) => async (r, a, i) => {
					let {
						gqlContext: c
					} = i;
					const l = Object(f.c)(a(), {
						commentId: e
					});
					if (!l) return;
					const u = n === o.kc.Snoozed,
						h = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(c(), {
							input: h
						})).ok) r(Object(v.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(d.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, S = (e, t, n) => async (s, r, i) => {
					let {
						apiContext: c,
						gqlContext: d
					} = i;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					s(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.J.ADMIN,
							isMod: t === o.J.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(v.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(u.c)(d(), e, t),
						h = Object(u.d)(d(), e, !!n),
						O = [f];
					(n || !n && e === b) && O.push(h), (await Promise.all(O)).every(e => e.ok) ? n && s(y({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: o.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(v.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(v.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			}));
			const s = "ECON__MARKETPLACE_ITEM_CLAIMED",
				o = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK",
				r = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD",
				a = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD_BANNER",
				i = "X__MARKETPLACE_VIEW_AVATAR_PUSHCARD"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				r = Object(s.a)(o("awardSheetInfoRequested")),
				a = Object(s.a)(o("manageableAwardsRequested")),
				i = Object(s.a)(o("createCommunityAward")),
				c = Object(s.a)(o("createGlobalAward")),
				d = Object(s.a)(o("createModAward")),
				l = Object(s.a)(o("createAwardFailed")),
				u = Object(s.a)(o("createAwardSuccessful")),
				m = Object(s.a)(o("removeCommunityAward")),
				p = Object(s.a)(o("disableAwardinCommunity")),
				b = Object(s.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "f", (function() {
				return C
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/postParentMessage/index.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts"),
				f = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(s.a)(f.J),
				v = Object(s.a)(f.f),
				O = () => async (e, t) => {
					const s = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(o()(s))
				}, x = Object(s.a)(f.I), g = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: s
					} = e;
					return async (e, o) => {
						const i = o(),
							c = t ? Object(u.a)(i, t) : void 0;
						e(x({
							award: c && c.isEnabled ? c : void 0,
							thingId: s,
							correlationId: n
						})), e(Object(l.h)(a.a.GOLD_GILD_MODAL));
						const b = Object(p.O)(i, {
							thingId: s
						});
						let f = null;
						if (b) f = b.id;
						else if (Object(r.a)(s)) {
							const e = Object(m.G)(i, {
								postId: s
							});
							e && (f = e.belongsTo.id)
						}
						f && Object(d.a)(f, s)
					}
				}, _ = Object(s.a)(f.e), y = Object(s.a)(f.H), j = () => async (e, t) => {
					const s = t(),
						r = Object(i.d)(s);
					if (Object(i.g)(s)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(_()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(r)(s)), Object(c.b)(c.a.GildingFlow)
				}, C = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "b", (function() {
				return R
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = (n("./src/redditGQL/operations/LastModActionInSubreddit.json"), n("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				r = n("./src/redditGQL/operations/SingleCommentById.json"),
				a = n("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/users.ts"),
				m = n("./src/reddit/endpoints/redditor/index.ts"),
				p = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = n("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				f = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = n("./src/reddit/helpers/isPost.ts"),
				v = n("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				O = n("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				x = n("./src/reddit/actions/modQueue/constants.ts");
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.o:
							return t.payload;
						default:
							return e
					}
				},
				_ = n("./src/reddit/reducers/pages/modHub/index.ts"),
				y = n("./src/reddit/selectors/modQueue.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				C = n("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: _.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: v.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: O.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: g
				}
			});
			const E = Object(c.a)(x.l),
				k = e => async (t, n, r) => {
					let {
						gqlContext: a
					} = r;
					const i = await ((e, t) => Object(s.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						c = Object(b.a)(i.body.data.subredditInfoById);
					t(E(c))
				}, S = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					e && t(k(e))
				}, w = Object(c.a)(x.m), P = (e, t) => {
					const n = (e => {
							var t, n;
							const {
								subredditName: s,
								pageName: o
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, r = (null === (n = e.platform.currentPage) || void 0 === n ? void 0 : n.queryParams) || {};
							return {
								page: (null == r ? void 0 : r.page) || "1",
								pageName: o,
								subredditName: s || (null == r ? void 0 : r.subreddit),
								queryParams: r
							}
						})(e),
						s = Object(y.d)(e, n);
					return null == s ? void 0 : s.includes(t)
				}, T = [C.y.ApproveComment, C.y.ApproveLink, C.y.RemoveComment, C.y.RemoveLink, C.y.SpamComment, C.y.SpamLink], I = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					var r, a;
					const {
						moderatorID: i,
						targetID: c,
						action: d
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = n(), p = Object(j.k)(l), b = T.includes(d), f = i === p, h = P(l, c);
					if (!b || f || !h) return;
					const v = await Object(m.b)(o(), {
						id: i
					}) || (null === (a = Object(j.Bb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					v && t(Object(u.z)(v)), t(w({
						targetID: c
					}))
				}, N = Object(c.a)(x.p), A = Object(c.a)(x.o), R = e => async (t, n, o) => {
					let {
						gqlContext: i
					} = o;
					var c, u, m, b, v, O;
					const x = Object(h.a)(e),
						g = n(),
						_ = null === (u = null === (c = null == g ? void 0 : g.features) || void 0 === c ? void 0 : c.realtimeModqueue) || void 0 === u ? void 0 : u.toUpdate.includes(e),
						y = P(g, e);
					if (!_ || !y) return;
					const j = x ? () => ((e, t) => Object(s.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(s.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						C = await j();
					if (C.ok) {
						if (x) {
							const n = null === (b = null === (m = null == C ? void 0 : C.body) || void 0 === m ? void 0 : m.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(f.f)(n)
							}))
						} else {
							const n = null === (O = null === (v = null == C ? void 0 : C.body) || void 0 === v ? void 0 : v.data) || void 0 === O ? void 0 : O.commentById;
							t(Object(d.j)({
								[e]: Object(p.a)(n)
							}))
						}
						t(A(e)), t(N({
							targetID: e
						}))
					}
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "o", (function() {
				return y
			}));
			const s = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				v = "REORDER_COLLECTION_PENDING",
				O = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				g = "UPDATE_COLLECTION_LAYOUT_PENDING",
				_ = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				y = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				f = Object(o.a)(m.Q),
				h = (e, t, n) => async (o, i, h) => {
					let {
						apiContext: O
					} = h;
					c.m(i(), t);
					const x = t === d.i.MARKDOWN,
						g = t === d.i.RICH_TEXT,
						_ = m.k;
					if (x && Object(l.H)(n)) return o(f({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(v(t));
					if (g && !n) return o(f({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void o(v(t));
					o(p(_));
					const y = await Object(a.a)(O(), t, x ? JSON.stringify(n) : n);
					y.ok ? (o(b(_)), o(f({
						editorKey: e,
						editorMode: t,
						content: y.body.output
					})), o(v(t))) : (o(b(_)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, v = e => async (t, n) => {
					const o = Object(i.j)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === a) return;
					const c = e === d.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.nb)(o + 1)
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return $
			})), n.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), n.d(t, "removalReasonsFailed", (function() {
				return te
			})), n.d(t, "removalReasonsRequested", (function() {
				return ne
			})), n.d(t, "removalReasonAddedPending", (function() {
				return se
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), n.d(t, "addRemovalReason", (function() {
				return ae
			})), n.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ce
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), n.d(t, "editRemovalReason", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), n.d(t, "deleteRemovalReason", (function() {
				return be
			})), n.d(t, "removedItemsSelected", (function() {
				return fe
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return ve
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return xe
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ge
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ye
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return je
			})), n.d(t, "submitRemovalReason", (function() {
				return Ce
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
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
					case a:
					case i:
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
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case a:
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
				O = Object(r.c)({
					error: h,
					pending: v
				});
			const x = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case c:
					case u: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case b: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const _ = {};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: o
						} = s;
						return {
							...e,
							[n]: o
						}
					}
					case c: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, o = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: o
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
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				C = Object(r.c)({
					api: O,
					models: g,
					reasonOrder: y,
					removedItemIds: j
				}),
				E = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/makeActionCreator/index.ts"),
				S = n("./src/lib/makeCommentsPageKey/index.ts"),
				w = n("./src/lib/makeDraftKey/index.ts"),
				P = n("./src/reddit/actions/bulkActions/index.ts"),
				T = n("./src/reddit/actions/comment/index.ts"),
				I = n("./src/reddit/actions/comment/authoring.ts"),
				N = n("./src/reddit/actions/comment/moderation.ts"),
				A = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/post.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				D = n("./src/lib/makeApiRequest/index.ts"),
				F = n("./src/lib/omitHeaders/index.ts"),
				B = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				V = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const G = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: E.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`)),
					method: E.ob.POST,
					type: "json",
					data: t
				});
			var K = n("./src/reddit/helpers/isPost.ts"),
				q = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = n("./src/reddit/helpers/routeKey/index.ts"),
				z = n("./src/reddit/models/ModQueue/index.ts"),
				Y = n("./src/reddit/models/PostDraft/index.ts"),
				Q = n("./src/reddit/models/RemovalReason/index.ts"),
				J = n("./src/reddit/models/Toast/index.ts"),
				Z = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: C
				}
			});
			const $ = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(k.a)(a),
				te = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				ne = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().subreddits.models[e].name;
					t($());
					const a = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.ob.GET
					}))(o(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, se = Object(k.a)(i), oe = Object(k.a)(c), re = Object(k.a)(d), ae = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					n(se());
					const c = await ((e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: E.ob.POST,
						data: n
					}))(a(), i, t);
					if (c.ok) {
						const {
							id: o
						} = c.body, r = {
							...t,
							id: o
						};
						n(oe({
							subredditId: e,
							reason: r
						})), n(Object(M.f)({
							kind: J.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(re(c.error))
				}, ie = Object(k.a)(l), ce = Object(k.a)(u), de = Object(k.a)(m), le = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					n(ie());
					const c = await ((e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`),
						method: E.ob.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(a(), i, t);
					c.ok ? (n(ce({
						subredditId: e,
						reason: t
					})), n(Object(M.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(de(c.error))
				}, ue = Object(k.a)(p), me = Object(k.a)(b), pe = Object(k.a)(f), be = (e, t) => async (n, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					n(ue());
					const c = await ((e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`),
						method: E.ob.DELETE
					}))(a(), i, t);
					c.ok ? (n(me({
						subredditId: e,
						reasonId: t
					})), n(Object(M.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(pe(c.error))
				}, fe = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || n(ne(e)), n(fe({
						subredditId: e,
						itemIds: t
					})), n(Object(A.i)(L.a.ADD_REMOVAL_REASON))
				}, ve = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), xe = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ye = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), je = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, n, s, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(K.a)(m) ? Q.e.Post : Q.e.Comment,
						b = p === Q.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === Q.e.Post ? R.Q : T.j;
					if (!b || !u) return !1;
					a(ve()), a(f({
						[m]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						v = await G(d(), h);
					if (v.ok) {
						if (a(Oe()), t) {
							a(ge());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: s
								},
								i = await W(d(), Object(Q.h)(o, p), p);
							if (i.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(s)) {
									if (a(ye()), i.body) {
										const e = Object(q.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(X.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = n && s && Object(H.a)(s, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: E.x,
												hasSortParam: !0
											})), p === Q.e.Post) {
											const n = Object(w.a)(Y.c.replyToPost, m);
											a(Object(I.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[m];
											a(Object(N.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && a(Object(T.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (p === Q.e.Comment) {
											const e = Object(w.a)(Y.c.replyToComment, b.id),
												n = Object(Z.j)(l, {
													commentId: m,
													commentsPageKey: o
												});
											a(Object(I.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else a(_e());
								return !0
							}
							return a(je(i.error)), !1
						}
					} else a(xe(v.error)), a(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, n, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					a(ve());
					const m = Object(M.f)({
							kind: J.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await G(d(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: z.a.RemovalReason,
							username: u,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(P.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await W(d(), Object(Q.h)(s, Q.e.Bulk), Q.e.Bulk);
							r.ok ? (a(_e()), a(m)) : a(je(r.error))
						} else a(m)
					} else a(xe(b.error))
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(o.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				v = Object(o.a)(h),
				O = (e, t, n) => async (s, o, r) => {
					let {
						apiContext: u
					} = r;
					var b, f, h, v;
					const O = Object(m.b)(o()),
						x = await (async (e, t, n, s, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...s
							}
						}))(u(), e, t, n, O);
					if (!x.ok) throw new Error("User avatar failed to save");
					return s(Object(p.y)(x.body)), {
						accountIcon: null === (f = null === (b = x.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (h = x.body) || void 0 === h ? void 0 : h.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, x = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.ob.GET
						}))(s());
						t.ok && e(f(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}, g = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.ob.GET
						}))(s());
						t.ok && e(v(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(i.l)(n)), e(Object(r.s)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: r,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					} = e, h = n();
					r && Object(d.a)(Object(i.g)(r)(h)), Object(c.S)(h) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					})) : await t(Object(s.openLoginModal)())
				}
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
					Object(s.a)(e, c, d) ? n(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AdSupplementaryText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/components/RichTextJson/index.tsx"),
				l = n("./src/reddit/constants/adEvents.ts"),
				u = n("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				m = n("./src/reddit/components/PostTitle/index.tsx"),
				p = n("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = n.n(p);
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
					size: n,
					className: s
				} = e;
				const m = Object(r.d)();
				if (!Object(r.e)(u.a) || !Object(i.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return o.a.createElement("div", {
					className: Object(a.a)(s, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && m(Object(c.y)(t, l.a.Click))
					}
				}, o.a.createElement(d.b, {
					className: Object(a.a)(b.a.Content, f(n)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/CCM/ModPreviousActions/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2-D4Vessy5Hd1e5HAU1PK3",
				wrapperTitle: "aC6WYpmVvQIF_BZRtMI_W",
				row: "ax8JnexGOa4WYNYKwXlQs",
				icon: "_1fiz4BfaOlncADi00qAx_l",
				userIconWrapper: "_1ChqLpIvObEfBbb4d-hyah",
				userIcon: "_3nEX0mG3UGhbY0hR0Kqaag",
				details: "_3jKisheiLDnZzH5J_qln3x",
				title: "_1-LXaYXcvGUA9hhrrw587d",
				meta: "_3w_F6oDd1-ZDKgp3jo94ew",
				time: "_2820zMw8REXxmaotvSTjqt",
				userlink: "_2622vu9WjymZhKkDq78CfF"
			}
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				paddingBottom: "_233thT4kQqtwrHDoMY0Dbv",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				verticalDivider: "_3v-KNQB_UvJqSbWcQZmc0U"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return $
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (n, o, r) => {
				let {
					apiContext: a
				} = r;
				const i = await (async (e, t, n) => Object(f.a)(Object(h.a)(e, [v.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(a(), e, t),
					c = `error-block-${t}`,
					l = `success-block-${t}`;
				if (i.ok) {
					n(Object(p.Q)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: l,
						kind: O.b.SuccessCommunityGreen,
						text: o
					}))
				} else n(b.f({
					id: c,
					kind: O.b.Error,
					text: s.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: x(e, t)
				}))
			};
			var g = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				j = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = n("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				E = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				P = n("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				T = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = n("./src/reddit/helpers/path/index.ts"),
				N = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const A = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.z)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(N.ub)(r)
				}),
				R = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				M = e => ({
					subreddit: Object(N.lb)(e),
					userSubreddit: Object(N.ub)(e)
				}),
				L = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...M
				});
			var D = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				F = n("./src/reddit/icons/svgs/Info/index.tsx"),
				B = n("./src/reddit/selectors/activeModalId.ts"),
				U = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				G = n("./src/reddit/selectors/moderatorPermissions.ts"),
				W = n("./src/reddit/selectors/posts.ts"),
				K = n("./src/reddit/selectors/tooltip.ts"),
				q = n("./src/reddit/selectors/user.ts"),
				H = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				z = n.n(H),
				Y = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const Q = Object(j.a)(S.a),
				J = e => e === Y.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === Y.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== Y.a.None) {
							e(t === Y.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", Y.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", Y.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", Y.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: n,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: z.a.HighlightWrapper
					}, r.a.createElement(w.b, {
						className: Object(c.a)(z.a.HighlightPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(o)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(D.b, {
						className: z.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(Q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(w.b, {
						displayText: J(Y.a.First),
						isSelected: o === Y.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(w.b, {
						displayText: J(Y.a.Last),
						isSelected: o === Y.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(w.b, {
						displayText: J(Y.a.None),
						isSelected: o === Y.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = Z;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				ne = Object(j.a)(S.a),
				se = Object(k.v)(),
				oe = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(U.m)(e, {
							commentId: n
						})
					},
					commentSearchPdp: e => Object(V.a)(e),
					contestModeModalIsOpen: Object(B.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(K.b)($),
					highlightIsOpen: Object(K.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(G.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: W.G,
					postPermalink: W.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(q.x)(e),
							o = !!Object(G.m)(e, {
								postId: n
							}),
							r = Object(W.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: U.p
				}),
				re = Object(a.b)(oe, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: $
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: ee
							})), t()
						},
						onSetSuggestedSort: t => e(x(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.V)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class ae extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(A(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(R("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(L(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return s.fbt._("{sort name} (suggested)", [s.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentId: n,
						commentPermalink: o,
						commentSearchPdp: a,
						contestModeModalIsOpen: i,
						dropdownIsOpen: l,
						elementRef: u,
						hideTooltip: m,
						highlightIsOpen: p,
						hasModeratorPostPermissions: b,
						isOverlay: f,
						location: h,
						pageLayer: v,
						post: O,
						postPermalink: x,
						selectedHighlightSort: j,
						showCommentHighlighter: E,
						sort: k,
						suggestedSort: S,
						showTooltip: N,
						toggleContestModeModal: A
					} = this.props, M = O.contestMode, L = null == n, B = a.bucketed && Object(C.a)(v) && Object(C.b)(O), U = a.bucketed && Object(C.b)(O) && L, V = !h.search.includes(d.w.CONFIDENCE), G = k === d.w.CONFIDENCE && V, W = b && !G, K = d.y[k], q = K ? K() : "", H = S && k === S && !G ? this.addSuggestedLabel(q) : q, Y = M ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), Q = M ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), J = M ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), Z = M && !b, se = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.DropdownContainer
					}, r.a.createElement(w.b, {
						className: Object(c.a)(z.a.SortPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${H}`,
						id: $,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(D.b, {
						className: z.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(ne, {
						isOpen: l,
						tooltipId: $
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = o || x,
							n = Object(I.b)(t),
							s = d.y[e],
							a = s ? s() : "";
						return r.a.createElement(y.a, {
							className: z.a.ViewFullLinkOrOverlayLink,
							isOverlay: f,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(w.b, {
							displayText: a,
							isSelected: k === e,
							skipRoleAttr: !0
						}))
					})));
					return r.a.createElement("div", {
						className: Object(c.a)(t, z.a.container, {
							[z.a.hideCommentSort]: !E && Z,
							[z.a.paddingBottom]: B
						}),
						ref: u
					}, B || U ? r.a.createElement("div", {
						className: z.a.containerRow
					}, !B && r.a.createElement(r.a.Fragment, null, se, r.a.createElement("span", {
						className: z.a.verticalDivider
					}, "|")), r.a.createElement("div", null, r.a.createElement(P.c, {
						experiment: a,
						commentId: n,
						prevLocation: h,
						postId: this.props.postId
					}))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.containerRow
					}, !Z && se, W && !Z && (S ? r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: k !== S ? this.setSortOnClick : this.clearSortOnClick
					}, k !== S ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: z.a.SetSort
					}, r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: te,
						onMouseEnter: N,
						onMouseLeave: m
					}, r.a.createElement(_.c, {
						className: z.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(F.a, {
						className: z.a.Info
					})))), b && r.a.createElement("button", {
						className: z.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(T.a, {
						className: z.a.ToggleSwitch,
						on: M
					}))), E && r.a.createElement("div", {
						className: z.a.containerRow
					}, r.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: j,
						trackHighlight: R
					})), i && r.a.createElement(g.a, {
						actionText: Q,
						headerText: Y,
						modalText: J,
						onConfirm: this.setContestMode,
						toggleModal: A,
						withOverlay: !0
					})))
				}
			}
			t.b = se(re(Object(E.c)(ae)))
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
				a = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= i && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(a.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function p(e) {
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
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
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
			const u = Object(a.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(i.a, l({}, n, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(i.b)(n) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(d.a, null, r.a.createElement(i.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(i.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(i.g, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/hooks/usePrevious.ts"),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: b,
					onDataCB: f,
					postId: h,
					queryKey: v,
					queryVariables: O,
					shouldDisjointAnimation: x,
					subsequentRecurringDelay: g
				} = e, [_, y] = Object(s.useState)(!1), [j, C] = Object(s.useState)(!0), [E, k] = Object(s.useState)([]), [S, w] = Object(s.useState)(c(p).reverse()), P = Object(s.useRef)(!1), T = Object(s.useRef)(null), I = Object(s.useRef)(e => {}), N = Object(s.useRef)();
				I.current = Object(s.useCallback)(e => {
					let n = e || d();
					const s = [...S].reverse().join("");
					let o = parseInt(s) + n;
					o > t && (n = t - parseInt(s), o = t);
					const r = c(o).reverse();
					y(!1), k(S), w(r), C(!1), N.current = setTimeout(() => {
						y(!0)
					}, 0)
				}, [t, d, S]);
				const A = Object(s.useRef)(() => {}),
					R = Object(s.useRef)(),
					M = Object(s.useRef)();
				A.current = Object(s.useCallback)(() => {
					M.current = setTimeout(() => {
						I.current();
						const e = [...E].reverse().join("");
						parseInt(e) < t && A.current()
					}, g())
				}, [t, g, E]);
				const L = Object(s.useRef)(0),
					D = Object(s.useRef)(!1),
					F = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, s = 1 !== n;
							t ? (D.current = !0, P.current || (P.current = !0, R.current = setTimeout(() => {
								I.current(), A.current()
							}, u())), L.current > 0 && (I.current(L.current), L.current = 0)) : s && (D.current = !1)
						})
					}, []);
				Object(i.a)(T, F);
				const [B, U] = Object(s.useState)(!1), V = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? U(!0) : s && U(!1)
					})
				}, []), G = Object(s.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(i.a)(T, V, G.current);
				const W = Object(r.a)(t);
				Object(s.useEffect)(() => {
					if (void 0 !== W && W !== t) {
						const e = t - W;
						D.current ? I.current(e) : L.current += e
					}
					return () => {
						clearTimeout(R.current), clearTimeout(M.current), clearTimeout(N.current)
					}
				}, [t]);
				const K = Object(s.useCallback)(() => C(!0), [C]),
					q = 0 === E.length,
					H = j || q,
					z = Object(s.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, n));
				return o.a.createElement(o.a.Fragment, null, !b && o.a.createElement("div", {
					className: l.a.countAnimation
				}, S.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const s = Math.abs(t),
							o = [n];
						if (n === s) return o;
						let r = !0;
						for (; r;) ++n > 9 && (n = 0), o.push(n), n === s && (r = !1);
						return o
					})(E[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: K,
						style: _ && E.length > 0 && !j ? {
							transform: `translateY(-${x&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(x?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, H ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const s = 0 === t || t === n.length - 1;
						if (!x || x && s) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...S].reverse().join(""))), o.a.createElement("span", {
					ref: T
				}), B && o.a.createElement(a.a, {
					variables: O,
					onData: b ? m : f,
					queryKey: v,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = 16374492e5,
				r = 45 * s.E;
			var a;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(a || (a = {}));
			const i = e => {
					return e < Date.now() - r
				},
				c = e => e > o,
				d = (e, t, n, s) => {
					if (!n && !c(e.created)) return a.NotAvailable;
					if (n && !c(e.created) || i(e.created)) return a.Expired;
					if (n && s) return a.Quarantined;
					if (!t) return a.NotAvailableYet;
					const {
						shareAllCountTotals: o,
						shareCopyCountTotals: r,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == o ? void 0 : o.availability.isAvailable) && (null == r ? void 0 : r.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? a.NotAvailableYet : a.Available : a.NotAvailableYet
				}
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				m = n("./src/reddit/components/PostMeta/index.tsx"),
				p = n("./src/reddit/components/PostTitle/index.tsx"),
				b = n("./src/reddit/components/SourceLink/index.tsx"),
				f = n("./src/reddit/components/Thumbnail/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				v = n("./src/reddit/contexts/Post/index.tsx"),
				O = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CrosspostBox/index.m.less"),
				_ = n.n(g),
				y = n("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 8,
				E = 1,
				k = y.a.div("Container", _.a),
				S = y.a.div("PostMetaWrapper", _.a),
				w = y.a.wrapped(p.c, "PostTitle", _.a),
				P = y.a.div("FlatList", _.a),
				T = y.a.div("FlatItem", _.a),
				I = y.a.span("FlatListDotSpacer", _.a),
				N = y.a.wrapped(k, "LinkContainer", _.a),
				A = y.a.div("Content", _.a),
				R = y.a.div("ThumbnailContainer", _.a),
				M = Object(c.c)({
					isCurrentUserProfilePost: O.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Sb.TOPIC),
					shouldOpenPostInNewTab: x.lb
				}),
				L = Object(a.b)(M);
			t.c = Object(v.b)(L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: s,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(N, {
					className: d
				}, r.a.createElement(A, null, r.a.createElement(S, null, r.a.createElement(m.a, c)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), V(e)) : r.a.createElement(k, {
					className: d
				}, r.a.createElement(S, null, r.a.createElement(m.a, c)), D(a), F(e), B(e))
			}));
			const D = e => r.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, s = {
						...t,
						post: n,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, j({}, s, {
						className: _.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(P, null, r.a.createElement(T, null, s.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [s.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(T, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, s.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [s.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				V = e => r.a.createElement(R, null, r.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
				return h
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
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
			var p = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = n.n(p);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					post: t
				} = e;
				const n = t.predictionTournament,
					o = n.status === c.a.Live,
					l = n.status === c.a.Closed,
					u = Object(a.e)(e => Object(d.V)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), o && r.a.createElement("span", {
					className: Object(s.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(s.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== n.totalParticipantsCount && r.a.createElement(m, {
					participantsCount: n.totalParticipantsCount
				}), r.a.createElement(i.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, n.name))
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || o.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(o);
			const a = s.a.div("Wrapper", r.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, s.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = o()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(i.a)({
						getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/index.tsx"),
				x = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				y = n("./src/reddit/icons/svgs/Search/index.tsx"),
				j = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				C = n.n(j);
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(g.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: o
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), i = !!n && a.some(e => e.id === n);
					return r.a.createElement("div", {
						className: C.a.container
					}, r.a.createElement("div", {
						className: C.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: C.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(y.a, {
						className: C.a.searchIcon
					})), r.a.createElement(O.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							o = n === e.id || !i && 0 === t;
						return r.a.createElement(x.a, {
							className: C.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(h.b, {
							className: C.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(_.a, {
							className: C.a.pencil
						}))
					})))
				}
			}
			var k = Object(v.c)(E),
				S = n("./src/reddit/components/FlairSearch/index.m.less"),
				w = n.n(S);
			const P = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				I = Object(a.b)(T);
			t.a = I(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: o,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, v = Object(p.a)(), O = d && n && n.templateId && d[n.templateId] || void 0, x = Object(f.a)(), g = n || P(O);
				return r.a.createElement("div", {
					className: Object(c.a)(o, w.a.container)
				}, d && l && r.a.createElement(k, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							v(Object(m.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: O ? O.id : "",
					templateIds: l,
					templates: d
				}), g && O && (h || O.textEditable) && r.a.createElement("div", {
					className: w.a.flairEditSection
				}, r.a.createElement("div", {
					className: w.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && r.a.createElement("div", {
					className: w.a.restrictionHintText
				}, Object(u.k)(O)), r.a.createElement(x, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: g,
					flairTemplate: O,
					flairTemplateType: t,
					isFlairModOnly: O.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = n("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = a.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
				}
				return r.a.createElement(t, {
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
			}, f = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "3MHgRl"
			}))), m._param("=Content Policy", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), h = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "yMHtU"
			}))), m._param("=Content Policy", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), v = (e, t) => {
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
			}, O = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(f, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", r.a.createElement("a", {
							className: u.a.link,
							href: `${s.a.redditUrl}/r/${t}`,
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
						return r.a.createElement(h, null);
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
			}, x = (e, t, n) => {
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
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", n), m._param("username", t)], {
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
			}, g = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(f, null);
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
						return m._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [m._param("=just ask", r.a.createElement("a", {
							className: u.a.link,
							href: `${s.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return r.a.createElement(h, null);
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
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function(e) {
				let {
					visible: t,
					...n
				} = e;
				const [a, d] = Object(s.useState)(t);
				return Object(s.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? o.a.createElement("div", c({
					className: Object(r.a)(i.a.tooltip, n.className, {
						[i.a.visible]: a
					})
				}, n.popperProps), n.children, a && o.a.createElement("div", c({
					className: i.a.arrow
				}, n.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
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
		"./src/reddit/components/LargePost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/components/Econ/Audio/async.ts"),
				f = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				v = n("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				O = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/experiments/web2x_cta.ts"),
				E = n("./src/reddit/selectors/moderatorPermissions.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				w = n("./src/lib/ads/index.ts"),
				P = n("./src/lib/classNames/index.ts"),
				T = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				I = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				N = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				A = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				R = n("./src/reddit/components/AdSupplementaryText/index.tsx"),
				M = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				D = n("./src/reddit/components/CreatorStats/loader.tsx"),
				F = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = n("./src/reddit/components/Flatlist/index.tsx"),
				U = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				V = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				G = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				W = n("./src/reddit/components/ModModeReports/index.tsx"),
				K = n("./src/reddit/components/ModModeReports/helpers.ts"),
				q = n("./src/reddit/components/ModQueueActionBar/index.tsx"),
				H = n("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				z = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Y = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Q = n("./src/reddit/components/PostContainer/index.tsx"),
				J = n("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = n("./src/reddit/components/PostMedia/index.tsx"),
				X = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				$ = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				ee = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var se = () => o.a.createElement("div", {
					className: te.a.container
				}, o.a.createElement($.a, {
					className: te.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: te.a.metaText
				}, ne._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				oe = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = n("./src/reddit/components/PostTitle/index.tsx"),
				ae = n("./src/reddit/components/PostTopLine/index.tsx"),
				ie = n("./src/reddit/components/SourceLink/index.tsx"),
				ce = n("./src/reddit/constants/postLayout.ts"),
				de = n("./src/reddit/contexts/InsideOverlay.tsx"),
				le = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ue = n("./src/reddit/contexts/Post/index.tsx"),
				me = n("./src/reddit/helpers/isCrosspost.ts"),
				pe = n("./src/reddit/helpers/path/index.ts"),
				be = n("./src/reddit/helpers/postEvent.ts"),
				fe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = n.n(fe),
				ve = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				Oe = n("./src/reddit/hooks/useClickSourceData.ts"),
				xe = n("./src/reddit/models/Audio/index.ts"),
				ge = n("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				_e = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ye = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				je = n("./src/reddit/constants/experiments.ts"),
				Ce = n("./src/reddit/helpers/chooseVariant/index.ts"),
				Ee = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const ke = Object(i.a)(k.N, e => e.some(Ee.c)),
				Se = Object(i.a)(ke, e => e),
				we = (e, t) => Object(Ce.c)(e, {
					experimentName: je.ld,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && Se(e, {
							listingKey: n
						})
					}
				});
			var Pe = n("./src/reddit/selectors/modQueue.ts"),
				Te = n("./src/reddit/selectors/postFlair.ts"),
				Ie = n("./src/reddit/selectors/showPromotedCTA.ts"),
				Ne = n("./src/reddit/selectors/i18n/index.ts"),
				Ae = n("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Re = n("./src/reddit/components/LargePost/index.m.less"),
				Me = n.n(Re);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const De = e => {
					let {
						className: t,
						disableVisited: n,
						children: s,
						...r
					} = e;
					return o.a.createElement(I.a, Le({}, r, {
						className: Object(P.a)(t, Me.a.styledLink, {
							[Me.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				Fe = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(k.N)(e, {
						listingKey: n
					}) : void 0
				},
				Be = Object(r.b)(() => Object(i.c)({
					autoplayPref: S.d,
					isModQueueDisplayEnabled: e => Object(Pe.b)(e, !0),
					activeModalId: j.a,
					hideNSFWPref: S.H,
					flairStyleTemplate: le.Y,
					isBlurredPreview: ye.b,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: S.S,
					isActive: k.j,
					showPromotedCTA: Ie.a,
					moderatorPermissions: E.m,
					modModeEnabled: le.W,
					posts: Fe,
					postHeightVariant: we,
					shouldShowNsfwListingBelow: Ne.b,
					showEditFlair: Te.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(E.i)(e, n.id)
					},
					isOptionalTextEnabled: ge.a,
					showCTAExperimentDesign: C.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: n
						} = t;
						var s, o;
						return !!(null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === o ? void 0 : o.updated.includes(n))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: n
						} = t;
						var s;
						return (null === (s = e.features) || void 0 === s ? void 0 : s.realtimeUpdateAnimationId) === n
					},
					isNightMode: S.fb
				}), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(m.ib)(n) : Object(m.v)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(m.eb)(n)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ue = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: n,
						disableVisited: s,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? o.a.createElement(De, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: s,
						to: n,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, i)
				}),
				Ve = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: i,
						currentUser: p,
						eventFactory: y,
						flairStyleTemplate: j,
						forceLoadMedia: C,
						hideNSFWPref: E,
						hostPostData: k,
						imageGalleryCurrentItem: I,
						inSubredditOrProfile: $ = !1,
						isBlurredPreview: ee,
						isCommentsPage: te,
						isCurrentUserProfilePost: ne,
						isFrontpage: de,
						isGalleryTileLayoutDefault: le,
						isModWithUserNotesPermissions: ue,
						isLoggedIn: fe,
						isOverlay: ge,
						isTopicPage: ye,
						isCommentCountAnimationEnabled: Ce,
						isVoteCountAnimationEnabled: Ee,
						isCountAnimShadowTestEnabled: ke,
						listingIndex: Se,
						listingKey: we,
						moderatorPermissions: Pe,
						modModeEnabled: Te,
						onClickPost: Ie,
						onIgnoreReports: Ne,
						onOpenReportsDropdown: Re,
						post: Le,
						postHeightVariant: De,
						scrollerItemRef: Fe,
						shouldShowGalleryTileOption: Be,
						shouldShowInsightsButton: Ve,
						shouldShowNsfwListingBelow: Ge,
						showEditFlair: We,
						showPromotedCTA: Ke,
						subredditOrProfile: qe,
						userIsOp: He,
						postId: ze,
						postIds: Ye,
						onceInViewport: Qe,
						isOptionalTextEnabled: Je,
						showCTAExperimentDesign: Ze,
						isModQueueDisplayEnabled: Xe,
						showRealtimeUpdateAnimation: $e,
						isUpdatedContent: et,
						isNightMode: tt
					} = e, nt = Object(x.a)(), st = !!e.redditStyle || !!e["data-redditstyle"], ot = st ? void 0 : j, rt = Object(l.a)(Pe), at = Te && rt, it = Object(c.a)(Pe), ct = Object(d.a)(Pe), dt = Object(K.c)(Le), lt = Object(G.a)(Le), ut = !!Le.media && Le.media.type === g.o.RTJSON, mt = He && ut, pt = n ? n - J.a : void 0, bt = !!Le.recommendationContext, ft = !(de && fe || ye) || bt && fe, ht = (e => e === je.hf.OnlyTitles)(De) && !Object(me.a)(Le), vt = (e => e === je.hf.MediumHeight)(De) && !Object(me.a)(Le), Ot = (e => {
						var t;
						const {
							post: n,
							postIds: s,
							posts: o
						} = e;
						if (!Object(_.v)(n) || (null === (t = n.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = s && 0 === s.indexOf(n.id),
							a = s && 1 === s.indexOf(n.id),
							i = o && o[1] && Object(_.v)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), xt = Object(r.d)(), gt = Object(r.e)(_e.b), _t = Object(r.e)(_e.c), yt = Object(r.e)(S.lb), jt = Object(Oe.a)(), Ct = Le.permalink, Et = e.isCommentPermalink ? Object(pe.b)(Ct) : Object(T.a)(Ct, void 0, jt), kt = !!(null == k ? void 0 : k.shouldShowLinkedPosts), St = (!$ || kt || Ge) && !Le.isSponsored, wt = Object(w.t)(Le, I), {
						source: Pt
					} = wt, Tt = Object(s.useRef)(null), It = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Qe || Qe(Se))
						})
					}, [Qe, Se]);
					Object(O.a)(Tt, It);
					const [Nt, At] = Object(s.useState)(!1), Rt = Object(s.useCallback)(() => {
						At(!Nt), nt(Object(ve.d)(ze))
					}, [Nt, nt, ze]), Mt = !!(ee && (null == qe ? void 0 : qe.isNSFW)), Lt = Object(s.useRef)({
						renderingObjectInfo: Le
					}), Dt = Object(s.useCallback)(e => {
						(gt || _t) && (e.preventDefault(), xt(Object(m.Z)(Object(pe.b)(Le.permalink), Le.id)))
					}, [xt, gt, _t, Le.id, Le.permalink]), Ft = Le && Le.media && (Le.media.type === g.o.TEXT || Le.media.type === g.o.RTJSON), Bt = Object(_.r)(Le);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Q.b, {
						className: Object(P.a)(Me.a.container, i, he.a.largeAndMediumPostStyles, he.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[he.a.mUseRedditTheme]: st,
							[Me.a.topCompactPost]: Ot && Ot.hasTopCompactPostStyles,
							[Me.a.bottomCompactPost]: Ot && Ot.hasBottomCompactPostStyles,
							[Me.a.shouldShowOverflow]: Ve,
							[Me.a.realtimeAnimation]: $e,
							[Me.a.realtimeUpdated]: et,
							[Me.a.isNightMode]: tt
						}),
						isOverlay: ge,
						style: Xe && ($e || et) ? tt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(u.b)(e.flairStyleTemplate),
						post: Le,
						onClick: Ie,
						eventFactory: y
					}, o.a.createElement("div", {
						ref: Tt
					}), o.a.createElement(oe.a, {
						model: Le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: ke,
						isVoteCountAnimation: Ee,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ot,
						redditStyle: st,
						postId: ze
					}), o.a.createElement(Y.a, {
						className: Object(P.a)(Me.a.backgroundWrapper, {
							[Me.a.isEvent]: Object(be.a)(Le),
							[Me.a.shouldUseRoundedBorder]: Ve,
							[Me.a.realtimeAnimation]: $e,
							[Me.a.realtimeUpdated]: et,
							[Me.a.isNightMode]: tt
						}),
						"data-click-id": "background",
						flairStyleTemplate: ot,
						post: Le,
						redditStyle: st,
						overrideBackgroundColor: Xe && ($e || et) ? tt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(F.a, {
						post: Le
					}), Ot && Ot.showPinnnedHeader && o.a.createElement(se, null), Object(a.c)(Le) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: Le
					}), o.a.createElement(f.a, {
						post: Le
					})), !Object(a.c)(Le) && o.a.createElement(o.a.Fragment, null, Bt && o.a.createElement(z.a, {
						content: Le.recommendationContext.content,
						layout: ce.g.Large,
						post: Le
					}), o.a.createElement(ae.a, {
						className: Me.a.postTopLine,
						hideNSFWPref: E,
						hostPostData: k,
						iconClassName: Me.a.postTopLineIcon,
						inSubredditOrProfile: $,
						isCommentsPage: !!te,
						isCompactPinnedPost: !!Ot,
						isCurrentUserProfilePost: ne,
						isModWithUserNotesPermissions: ue,
						isOverlay: !!ge,
						isTopicPage: !!ye,
						listingKey: we,
						post: Le,
						shouldShowSubscribeButton: ft,
						showSubreddit: St,
						showSubredditIcon: !0,
						subredditOrProfile: qe
					}), o.a.createElement(re.c, {
						className: Me.a.postTitle,
						post: Le,
						redditStyle: st,
						size: re.b.Large,
						titleColor: ot && ot.postTitleColor,
						isOverlay: ge
					}), o.a.createElement(R.a, {
						className: Me.a.adSupplementaryText,
						post: Le,
						size: re.b.Large
					}), Le.source && !Le.isSponsored && !Mt && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie.a, {
						className: Me.a.sourceLink,
						post: Le
					}), Je && Le.media && Le.media.type !== g.o.TEXT && Le.media.type !== g.o.IMAGE && Le.media.richtextContent && o.a.createElement(v.a, {
						content: Le.media.richtextContent,
						rtJsonElementProps: Lt.current
					}))), o.a.createElement("div", {
						className: Me.a.postMediaWrapper
					}, !Ot && o.a.createElement(Ue, {
						handlePostLinkClick: Dt,
						postPermalink: Et,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: yt,
						shouldStylePostAfterVisitLink: Ft
					}, o.a.createElement(Z.a, {
						isGalleryTileLayoutDefault: le,
						isListing: !0,
						isMediumHeight: vt,
						isNotCardView: !!ge,
						isTitleOnly: ht,
						showCentered: !0,
						flairStyleTemplate: ot,
						post: Le,
						availableWidth: pt,
						shouldLoad: C,
						scrollerItemRef: Fe,
						autoplayPref: t,
						shouldShowGalleryTileOption: Be,
						showPromotedCTA: Ke
					}))), Ke && Pt && Pt.url && !Le.isSurveyAd && o.a.createElement(N.a, {
						className: Me.a.adLinkWrapper,
						ctaExperimentDesign: Ze && "card"
					}, o.a.createElement(A.a, {
						post: Le,
						adLinkContent: wt,
						ctaExperimentDesign: Ze && "card"
					})), Te && rt && lt && !Xe && o.a.createElement("div", {
						className: Me.a.modModeBannerWrapper
					}, o.a.createElement(V.a, {
						thing: Le
					})), Te && rt && dt && !Xe && o.a.createElement("div", {
						className: Me.a.modModeBannerWrapper
					}, o.a.createElement(W.a, {
						onIgnoreReports: Ne,
						reportable: Le
					})), Object(xe.c)(Le) && o.a.createElement(b.a, {
						post: Le
					}), o.a.createElement(U.d, null), Xe && o.a.createElement(H.a, {
						post: Le
					}), Le.discussionType === _.b.Chat && o.a.createElement(Ae.a, {
						postId: Le.id,
						className: Me.a.liveLabel
					}), o.a.createElement("div", {
						className: Me.a.flatListContainer
					}, o.a.createElement(L.a, {
						className: Me.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ot,
						model: Le,
						onVoteClick: e.handleVote
					}), !Le.isSurveyAd && (Xe ? o.a.createElement(q.a, {
						content: Le,
						listingKey: we,
						hostPostData: k
					}) : o.a.createElement(B.c, {
						currentUser: p,
						hasModFlairPerms: it,
						hasModFullPerms: ct,
						hasModPostPerms: rt,
						hostPostData: k,
						isCommentCountAnimation: Ce,
						isCountAnimShadowTestEnabled: ke,
						isLargePost: !0,
						isOverlay: !!ge,
						listingKey: we,
						modModeEnabled: Te,
						onClickInsightsButton: Rt,
						onIgnoreReports: Ne,
						onOpenReportsDropdown: Re,
						post: Le,
						shouldShowInsightsButton: Ve,
						showEditPost: mt,
						showEditFlair: We,
						useFlatlistBreakpoints: Object(X.b)({
							editPost: !1,
							save: !at,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), qe && Nt && o.a.createElement(D.a, {
						className: Me.a.creatorStatsContainer,
						post: Le,
						subreddit: qe,
						isOwnProfileStats: !0
					})), de && o.a.createElement(M.a, {
						post: Le,
						postIds: null != Ye ? Ye : [],
						subredditId: null == qe ? void 0 : qe.id
					})))
				});
			Ve.displayName = "LargePostMemoized";
			t.default = Object(ue.b)(Be(Object(de.b)(Ve)))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, d = Object(i.b)(s);
				return o.a.createElement(a.a, c({
					className: n,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? d : r.a;
				return o.a.createElement(s, l({}, n, {
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}), n.children)
			}
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = n.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = n("./src/lib/LiveLabel/index.m.less"),
				u = n.n(l);
			const m = () => a.a.createElement("span", {
				className: u.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = n("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = n.n(p);
			const f = e => {
				let {
					userCount: t = 0,
					className: n
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(b.a.liveParticipation, n)
				}, a.a.createElement(m, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var h = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/reddit/selectors/chat.ts"),
				O = n("./src/reddit/selectors/experiments/chat.ts");
			const x = e => {
				let {
					postId: t,
					className: n
				} = e;
				const s = Object(h.e)(e => Object(v.a)(e, t));
				return Object(h.e)(O.e) ? a.a.createElement(f, {
					userCount: s,
					className: n
				}) : null
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, n) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = n.n(a);
			const c = e => {
				let {
					post: t
				} = e;
				var n;
				return r.a.createElement("p", {
					className: i.a.postStats
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", s.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [s.fbt._plural((null === (n = t.allAwardings) || void 0 === n ? void 0 : n.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
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
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Le
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/modQueue/realtime.ts"),
				l = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				u = n("./src/reddit/components/ReportFlow/new.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = n("./src/reddit/helpers/isPost.ts"),
				f = n("./src/reddit/helpers/trackers/modTools.ts"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/models/Post/index.ts"),
				_ = n("./src/reddit/actions/comment/moderation.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/actions/postFlair.ts"),
				E = n("./src/reddit/actions/removalReasons/index.ts"),
				k = n("./src/reddit/selectors/activeModal.ts"),
				S = n("./src/reddit/selectors/moderatorPermissions.ts"),
				w = n("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(s || (s = {}));
			const P = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.m && (!Object(w.a)(e) || Object(b.b)(e) && [g.g.AntiEvilOps, g.g.CommunityOps, g.g.ContentTakedown, g.g.CopyrightTakedown, g.g.Reddit].indexOf(e.removedByCategory) > -1) ? s.REMOVED : e.isSpam ? s.SPAM : (e.numReports || 0) > 0 ? s.REPORTED : e.isApproved ? s.APPROVED : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.m ? s.FILTERED : s.UNMODERATED
			};
			var T = n("./src/reddit/components/ModQueueActionBar/index.m.less"),
				I = n.n(T),
				N = n("./src/lib/classNames/index.ts"),
				A = n("./src/lib/constants/icons.ts"),
				R = n("./src/reddit/actions/gold/modals.ts"),
				M = n("./src/reddit/actions/reportFlow/index.ts"),
				L = n("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				D = n("./src/reddit/components/OverflowMenu/index.tsx"),
				F = n("./src/reddit/constants/modals.ts"),
				B = n("./src/reddit/controls/Dropdown/Row.tsx"),
				U = n("./src/reddit/helpers/correlationIdTracker.ts"),
				V = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				G = n("./src/reddit/helpers/trackers/gild.ts"),
				W = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				q = n("./src/reddit/selectors/user.ts");
			const H = (e, t) => Object(f.c)(t, e),
				z = (e, t) => e ? t ? o.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : o.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? o.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : o.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var Y = e => {
					let {
						content: t,
						hostPostData: n,
						listingKey: s,
						moderatorPermissions: d
					} = e;
					var l, u;
					const m = Object(O.a)(),
						p = Object(i.d)(),
						v = Object(b.b)(t),
						g = Object(i.e)(q.k),
						C = Object(i.e)(q.P),
						E = Object(i.e)(K.b),
						k = Object(V.a)(d),
						S = v ? h.k : H,
						w = t.authorId === g,
						P = C && w,
						T = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === c.J.ADMIN,
						Y = (null === (u = t.distinguishType) || void 0 === u ? void 0 : u.toLowerCase()) === c.J.MODERATOR,
						Q = Object(r.useCallback)(() => {
							const e = v ? j.D : _.c;
							p(e(t.id));
							const n = t.isLocked ? "unlock" : "lock";
							m(v ? S(t.id, n) : Object(f.j)(t.id, n, "mod_menu"))
						}, [S, m, p, t, v]),
						J = Object(r.useCallback)(e => {
							m(Object(h.k)(t.id, e, "post", s, n, void 0))
						}, [m, s, n, t]),
						Z = Object(r.useCallback)(() => {
							var e;
							const n = t.isStickied ? "unsticky" : "sticky";
							v ? (p(Object(j.gb)(t.id)), m(Object(f.n)(n, t.id))) : (p(Object(_.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), m(Object(f.j)(t.id, n, "mod_menu")))
						}, [m, p, t, v]),
						X = Object(r.useCallback)(() => {
							v && (p(Object(j.I)(t.id)), m(Object(f.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [m, p, t, v]),
						$ = Object(r.useCallback)(() => {
							v && (p(Object(j.F)(t.id)), Object(f.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, v]),
						ee = Object(r.useCallback)(() => {
							v && (p(Object(y.i)(F.a.CROWD_CONTROL)), p(Object(j.t)(t.id)))
						}, [p, t, v]),
						te = Object(i.e)(e => Object(W.m)(e, {
							commentId: t.id
						})),
						ne = Object(r.useCallback)(() => {
							const e = v ? t.permalink : te;
							e && (p(Object(j.C)(e)), v ? J("copy") : m(Object(f.j)(t.id, "share", "mod_menu")))
						}, [J, p, t, v, te, m]),
						se = Object(r.useCallback)(async () => {
							if (!v) return;
							const e = Object(U.d)(U.a.GildingFlow, !0);
							p(Object(R.d)({
								awardId: null == E ? void 0 : E.id,
								correlationId: e,
								thingId: t.id
							})), m(Object(G.clickGildEvent)(t.id))
						}, [m, p, t, E, v]),
						oe = Object(r.useCallback)(() => {
							p(Object(M.c)(t.id)), v ? J("report") : m(Object(f.j)(t.id, "report", "mod_menu"))
						}, [J, p, t, v, m]),
						re = Object(r.useCallback)(() => {
							var e;
							v && (p(Object(j.db)(t.id, !t.hidden, !1, !0)), J((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [J, p, t, v]),
						ae = Object(r.useCallback)(() => {
							const e = v ? j.S : _.e;
							p(e(t.id, !0)), m(v ? Object(f.n)("spam", t.id) : Object(f.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [m, p, t, v]),
						ie = Object(r.useCallback)(e => {
							const n = v ? j.u : _.b;
							p(n(t.id, e));
							const s = e === c.J.ADMIN ? "distinguish_as_admin" : e === c.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							m(Object(f.j)(t.id, s, "mod_menu"))
						}, [p, t, v, m]);
					return a.a.createElement(D.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: I.a.overflowButton,
						icon: a.a.createElement(x.a, {
							name: A.a.overflow_horizontal,
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: Object(N.a)("text-neutral-content-weak", I.a.overflowHeading)
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ae
					}, a.a.createElement(x.a, {
						name: A.a.spam
					})), v && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: Z
					}, a.a.createElement(x.a, {
						name: t.isStickied ? A.a.unpin : A.a.pin
					}))), a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: Q,
						displayText: z(v, !!(null == t ? void 0 : t.isLocked))
					}, a.a.createElement(x.a, {
						name: A.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), w && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: Y ? o.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : o.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ie(Y ? "" : c.J.MODERATOR)
					}, a.a.createElement(x.a, {
						name: Y ? A.a.distinguish_fill : A.a.distinguish
					})), P && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: T ? o.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : o.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ie(T ? "" : c.J.ADMIN)
					}, a.a.createElement(x.a, {
						name: T ? A.a.distinguish_fill : A.a.distinguish
					})), !v && (T || Y) && w && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : o.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: Z
					}, a.a.createElement(x.a, {
						name: t.isStickied ? A.a.unpin : A.a.pin
					})), v && !t.crosspostParentId && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: X,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(x.a, {
						name: A.a.original
					})), v && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: $,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(x.a, {
						name: A.a.nsfw
					})), v && k && "subreddit" === t.belongsTo.type && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, a.a.createElement(x.a, {
						name: A.a.crowd_control
					})), a.a.createElement("h6", {
						className: Object(N.a)("text-neutral-content-weak", I.a.overflowHeading)
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: ne
					}, a.a.createElement(x.a, {
						name: A.a.share
					})), v && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: se,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(x.a, {
						name: A.a.award
					}), a.a.createElement(L.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: oe
					}, a.a.createElement(x.a, {
						name: A.a.report
					})), v && a.a.createElement(B.b, {
						className: I.a.dropdownRow,
						onClick: re,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(x.a, {
						name: A.a.hide
					})))
				},
				Q = n("./src/reddit/helpers/trackers/modListing.ts"),
				J = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				Z = n("./src/config.ts"),
				X = n("./src/reddit/components/UserIcon/index.tsx"),
				$ = n("./src/reddit/helpers/name/index.ts"),
				ee = n("./src/reddit/constants/intlSupport.ts"),
				te = n("./src/reddit/helpers/graphql/helpers.ts"),
				ne = n("./src/reddit/hooks/useLocale.ts");

			function se(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var oe = function(e) {
					let {
						date: t,
						...n
					} = e;
					const s = Object(ne.a)(),
						r = "string" == typeof t ? Object(te.g)(t) / c.Xb : t,
						i = new Date(r * c.Xb);
					if (!ee.a) return a.a.createElement(a.a.Fragment, null, i.toLocaleString());
					const d = new Intl.DateTimeFormat(s, {
							month: "short",
							day: "numeric",
							year: se(i) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(s, {
							minute: "numeric",
							hour: "numeric"
						}),
						u = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(i) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : d.format(i),
						m = l.format(i);
					return o.fbt._("{date} at {time}", [o.fbt._param("date", u), o.fbt._param("time", m)], {
						hk: "Ot5zO"
					})
				},
				re = n("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				ae = n("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ie = n.n(ae);
			var ce = e => {
				let {
					className: t,
					modAction: n,
					postOrCommentId: s
				} = e;
				var o, r, i, c, d;
				const l = (null === (o = n.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					u = (null === (i = null === (r = n.moderatorInfo) || void 0 === r ? void 0 : r.icon) || void 0 === i ? void 0 : i.url) || "",
					m = !!(null === (d = null === (c = n.moderatorInfo) || void 0 === c ? void 0 : c.profile) || void 0 === d ? void 0 : d.isNsfw),
					p = Object(b.a)(s);
				return a.a.createElement("div", {
					className: Object(N.a)(t, ie.a.row)
				}, a.a.createElement("div", {
					className: ie.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: ie.a.userIcon,
					iconUrl: u,
					userName: l,
					isNSFW: m
				})), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, Object(re.a)(n.action, p ? "SubredditPost" : "")), a.a.createElement("p", {
					className: ie.a.meta
				}, a.a.createElement("a", {
					className: ie.a.userlink,
					href: `${Z.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(l)))), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: n.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: n
				} = e;
				return a.a.createElement("div", {
					className: Object(N.a)(t, ie.a.row)
				}, a.a.createElement(x.a, {
					isFilled: !0,
					name: "report_fill",
					className: ie.a.icon
				}), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, o.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!n.reason && a.a.createElement("p", {
					className: ie.a.meta
				}, n.reason)), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: n.createdAt
				})))
			};
			var le = e => {
					const t = Object(i.e)(t => {
						var n, s;
						const o = null === (s = null === (n = null == t ? void 0 : t.features) || void 0 === n ? void 0 : n.modPreviousActions) || void 0 === s ? void 0 : s.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var n, s;
							return null === (s = null === (n = null == t ? void 0 : t.features) || void 0 === n ? void 0 : n.modPreviousActions) || void 0 === s ? void 0 : s.models[e]
						})
					});
					return t ? a.a.createElement("div", {
						className: Object(N.a)(e.className, ie.a.wrapper)
					}, a.a.createElement("h2", {
						className: ie.a.wrapperTitle
					}, o.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(ce, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(de, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				ue = n("./src/reddit/components/HumanDate/index.tsx"),
				me = n("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				pe = n.n(me);
			const be = e => {
				let {
					content: t
				} = e;
				var n;
				const s = (null == t ? void 0 : t.approvedBy) || "",
					r = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(q.Cb)(e, {
						userName: s
					}) : null),
					c = t.approvedAtUTC ? (null === (n = t.approvedAtUTC) || void 0 === n ? void 0 : n.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(N.a)(pe.a.userIcon),
					iconUrl: null == r ? void 0 : r.accountIcon,
					userName: s,
					isNSFW: !!(null == r ? void 0 : r.isNSFW)
				})), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${Z.a.redditUrl}/user/${s}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(s)), c && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(ue.d, {
					seconds: c
				})))))
			};
			var fe = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const he = e => {
				let {
					content: t
				} = e;
				const n = Object(r.useMemo)(() => {
					var e;
					const n = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || n.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const s of t.modQueueTriggers || []) switch (s.type) {
						case fe.a.AUTOMOD:
							n.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: s.message
							});
							break;
						case fe.a.SHADOWBANNED_SUBMITTER:
							n.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: s.message
							});
							break;
						case fe.a.HATEFUL_CONTENT:
							n.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: s.message
							});
							break;
						case fe.a.CROWD_CONTROL:
							n.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: s.message
							});
							break;
						case fe.a.BAN_EVASION:
							n.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: s.message
							})
					}
					return n
				}, [t.modQueueTriggers, t.bannedBy]);
				return a.a.createElement("div", {
					className: pe.a.filteredWrapper
				}, n.map((e, t) => {
					let {
						heading: n,
						reason: s,
						icon: o
					} = e;
					return a.a.createElement("div", {
						key: `${n}-${s}-${t}`,
						className: pe.a.filteredRow
					}, a.a.createElement(x.a, {
						isFilled: !0,
						name: o,
						className: Object(N.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, n), s && a.a.createElement("p", null, s)))
				}))
			};
			var ve = n("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				Oe = n("./src/reddit/selectors/subreddit.ts");
			const xe = e => {
				let {
					content: t
				} = e;
				var n;
				const s = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(q.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(b.b)(t),
					c = Object(i.e)(e => Object(Oe.Y)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					d = r && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(ve.b)(d) : "clear_fill",
					u = t.bannedAtUTC ? (null === (n = t.bannedAtUTC) || void 0 === n ? void 0 : n.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, s ? a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(N.a)(pe.a.userIcon),
					iconUrl: null == s ? void 0 : s.accountIcon,
					userName: null == s ? void 0 : s.username,
					isNSFW: null == s ? void 0 : s.isNSFW
				})) : a.a.createElement(x.a, {
					isFilled: !0,
					name: l,
					className: Object(N.a)(pe.a.coloredIcon, pe.a.icon)
				}), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, (null == s ? void 0 : s.username) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${Z.a.redditUrl}/user/${s.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(s.username)), u && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(ue.d, {
					seconds: u
				}))) : d && Object(ve.e)(d, (null == s ? void 0 : s.username) || null, c.name))))
			};
			var ge = n("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				_e = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ye = n("./src/reddit/components/TrackingHelper/index.tsx"),
				je = n("./src/reddit/icons/fonts/helpers.tsx");
			n("./src/reddit/icons/fonts/Admin/index.tsx"), n("./src/reddit/icons/fonts/Approve/index.tsx"), n("./src/reddit/icons/fonts/Archived/index.tsx"), n("./src/reddit/icons/fonts/Calendar/index.tsx"), n("./src/reddit/icons/fonts/Clock/index.tsx"), n("./src/reddit/icons/fonts/Clear/index.tsx"), n("./src/reddit/icons/fonts/Coin/index.tsx"), n("./src/reddit/icons/fonts/Comment/index.tsx"), n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), n("./src/reddit/icons/fonts/Downvote/index.tsx"), n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), n("./src/reddit/icons/fonts/Envelope/index.tsx"), n("./src/reddit/icons/fonts/Expand/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), n("./src/reddit/icons/fonts/Gift/index.tsx");
			var Ce = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			n("./src/reddit/icons/fonts/Info/index.tsx"), n("./src/reddit/icons/fonts/Live/index.tsx"), n("./src/reddit/icons/fonts/Lock/index.tsx");
			n("./src/reddit/icons/fonts/ModActions/index.tsx"), n("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var Ee = n("./src/reddit/icons/fonts/Op/index.m.less"),
				ke = n.n(Ee),
				Se = n("./src/lib/lessComponent.tsx");
			Se.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(je.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(je.a, null, e.desc)), "OpIcon", ke.a), n("./src/reddit/icons/fonts/OutboundLink/index.tsx"), n("./src/reddit/icons/fonts/Pencil/index.tsx");
			var we = n("./src/reddit/icons/fonts/Photos/index.m.less"),
				Pe = n.n(we);
			Se.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(je.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Pe.a), n("./src/reddit/icons/fonts/Premium/index.tsx"), n("./src/reddit/icons/fonts/Remove/index.tsx");
			var Te = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Ie = (n("./src/reddit/icons/fonts/Share/index.tsx"), n("./src/reddit/icons/fonts/Spam/index.tsx"), n("./src/reddit/icons/fonts/Sticky/index.tsx"), n("./src/reddit/icons/fonts/Tag/index.tsx"), n("./src/reddit/icons/fonts/Text/index.m.less")),
				Ne = n.n(Ie);
			Se.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(je.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Ne.a), n("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Ae = e => {
					let {
						content: t
					} = e;
					const n = Object(ye.b)(),
						s = Object(i.d)(),
						c = Object(r.useCallback)(() => {
							const e = Object(b.a)(t.id),
								o = e ? j.eb : _.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(f.l)(r, t.id) : Object(f.k)(r, t.id);
							s(o(t.id)), n(a)
						}, [t.id, t.ignoreReports, n, s]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(N.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [n, s] = e;
						return a.a.createElement("p", {
							key: `${n}-${s}-${t}`
						}, Object($.e)(s), ": ", n)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("div", {
						className: pe.a.reportMeta
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, n] = t;
						return n + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !d && a.a.createElement(_e.c, {
						className: pe.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(Te.a, {
						className: pe.a.ignoreButtonIcon
					}) : a.a.createElement(Ce.a, {
						className: pe.a.ignoreButtonIcon
					}))), t.userReports.map((e, n) => {
						let [s, o, r, i] = e;
						return s ? void 0 !== r && i ? a.a.createElement(ge.a, {
							key: `user-${s}`,
							reason: s,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: pe.a.snoozabledButton,
							dropdownClassName: pe.a.snoozableDropdown,
							iconClassName: pe.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${s}`
						}, s, " (", o, ")") : null
					}))))
				},
				Re = e => {
					let {
						content: t
					} = e;
					const n = P(t),
						o = Object(r.useMemo)(() => {
							switch (n) {
								case s.APPROVED:
									return a.a.createElement(be, {
										content: t
									});
								case s.REMOVED:
								case s.SPAM:
									return a.a.createElement(xe, {
										content: t
									});
								case s.FILTERED:
									return a.a.createElement(he, {
										content: t
									});
								case s.REPORTED:
									return a.a.createElement(Ae, {
										content: t
									});
								default:
									return a.a.createElement(r.Fragment, null)
							}
						}, [n, t]),
						[c, d] = Object(r.useState)(!1),
						l = Object(O.a)(),
						u = Object(r.useCallback)(e => {
							var s;
							e.stopPropagation(), d(!c), l(Object(Q.e)((null === (s = t.belongsTo) || void 0 === s ? void 0 : s.id) || t.subredditId, n, Object(b.a)(t.id), !c))
						}, [l, t, c, d, n]),
						m = Object(i.e)(e => Object(J.d)(e)),
						p = Object(i.e)(e => {
							var n, s;
							return !!(null === (s = null === (n = null == e ? void 0 : e.features) || void 0 === n ? void 0 : n.modPreviousActions) || void 0 === s ? void 0 : s.order[t.id])
						});
					if (n === s.UNMODERATED) return null;
					const f = m && p;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(N.a)(pe.a.wrapper, {
							[pe.a.approved]: n === s.APPROVED,
							[pe.a.reported]: n === s.REPORTED,
							[pe.a.opened]: c,
							[pe.a.openable]: f
						}),
						onClick: f ? u : void 0
					}, o, f && a.a.createElement("button", {
						className: pe.a.caretButton
					}, a.a.createElement(x.a, {
						name: c ? A.a.caret_up : A.a.caret_down,
						className: pe.a.caretIcon
					}))), m && p && c && a.a.createElement(le, {
						className: pe.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Me = (e, t) => Object(f.c)(t, e),
				Le = e => {
					let {
						content: t,
						listingKey: n,
						hostPostData: f
					} = e;
					const w = Object(O.a)(),
						T = Object(i.d)(),
						N = P(t),
						A = Object(i.e)(k.b),
						R = Object(b.b)(t),
						M = Object(i.e)(e => {
							var n, s;
							return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === t.id
						}),
						L = Object(i.e)(e => Object(S.m)(e, {
							postId: t.id
						})),
						D = Object(p.a)(L),
						[F, B] = Object(r.useState)(!1),
						U = Object(i.e)(e => {
							var n, s;
							return null === (s = null === (n = null == e ? void 0 : e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === s ? void 0 : s.toUpdate.includes(t.id)
						}),
						V = Object(r.useRef)(null),
						G = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: n
								} = e;
								n >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					F && U && T(Object(d.b)(t.id));
					const W = Object(r.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(v.a)(V, G, W);
					const K = [s.REPORTED, s.FILTERED, s.UNMODERATED].includes(N),
						q = [s.APPROVED, s.UNMODERATED, s.REPORTED].includes(N),
						H = R && D,
						z = N === s.REMOVED && Object(b.b)(t) && t.removedByCategory === g.g.Reddit && !t.isRemoved && !t.isApproved,
						Q = N === s.FILTERED || z,
						J = N === s.REMOVED && !t.modRemovalReason && !Q,
						Z = [s.REMOVED, s.SPAM].indexOf(N) > -1,
						X = R ? h.k : Me,
						$ = Object(r.useCallback)(() => {
							const e = R ? j.r : _.a;
							T(e(t.id)), w(X(t.id, "approve"))
						}, [w, T, t, R, X]),
						ee = Object(r.useCallback)(() => {
							const e = R ? j.S : _.e;
							T(e(t.id, !1)), t.isRemoved && t.bannedBy === c.m ? w(X(t.id, "confirm_remove")) : w(X(t.id, "remove"))
						}, [w, T, t, R, X]),
						te = Object(r.useCallback)(() => {
							T(Object(E.fetchReasonsAndOpenModal)(R ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, R, T]),
						ne = Object(r.useCallback)(() => {
							T(Object(y.i)(Object(l.b)(t.id, !1))), w(Object(h.k)(t.id, "post_flair_picker"))
						}, [w, T, t]),
						se = Object(r.useCallback)(e => {
							let {
								previewFlair: n,
								selectedTemplateId: s
							} = e;
							R && T(Object(C.h)({
								post: t,
								previewFlair: n,
								selectedTemplateId: s
							}))
						}, [T, R, t]);
					return a.a.createElement("div", {
						className: I.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: V
					}, a.a.createElement(Re, {
						content: t
					}), a.a.createElement("div", {
						className: I.a.actionBar
					}, K && a.a.createElement(m.t, {
						className: [I.a.button, I.a.approve].join(" "),
						Icon: Object(x.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: I.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), q && a.a.createElement(m.t, {
						className: I.a.button,
						Icon: Object(x.b)("close"),
						iconPosition: m.h.L,
						iconClassName: I.a.icon,
						onClick: ee,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), J && a.a.createElement(m.t, {
						className: I.a.button,
						onClick: te,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Q && a.a.createElement(m.t, {
						className: I.a.button,
						Icon: Object(x.b)("close"),
						iconPosition: m.h.L,
						iconClassName: I.a.icon,
						onClick: ee,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), Z && a.a.createElement(m.t, {
						className: I.a.button,
						Icon: Object(x.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: I.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && a.a.createElement(m.t, {
						className: I.a.button,
						Icon: Object(x.b)("tag"),
						priority: m.c.Plain,
						iconPosition: m.h.L,
						iconClassName: I.a.icon,
						onClick: ne,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), R && A === Object(l.b)(t.id, !1) && a.a.createElement(l.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(l.b)(t.id, !1),
						onFlairChanged: se
					}), a.a.createElement(Y, {
						content: t,
						hostPostData: f,
						listingKey: n,
						moderatorPermissions: L
					}), M && a.a.createElement(u.a, {
						withOverlay: !0,
						postId: R ? t.id : void 0,
						commentId: R ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/redditGQL/types.ts");
			const r = (e, t) => {
				switch (e) {
					case o.y.AddNote:
						return s.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.y.AddRemovalReason:
						return s.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.y.AdjustPostCrowdControlLevel:
						return s.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.y.EnablePostCrowdControlFilter:
						return s.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.y.DisablePostCrowdControlFilter:
						return s.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.y.ApproveComment:
						return s.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.y.ApproveLink:
						return s.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.y.BanUser:
						return s.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.y.Collections:
						return s.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.y.DeleteNote:
						return s.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.y.Distinguish:
						return "SubredditPost" === t ? s.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : s.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.y.EditFlair:
						return "SubredditPost" === t ? s.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : s.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.y.IgnoreReports:
						return "SubredditPost" === t ? s.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : s.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.y.Lock:
						return "SubredditPost" === t ? s.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : s.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.y.MarkNsfw:
						return s.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.y.MarkOriginalContent:
						return s.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.y.MuteUser:
						return s.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.y.RemoveComment:
						return s.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.y.RemoveLink:
						return s.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.y.SetContestMode:
						return s.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.y.SetSuggestedsort:
						return s.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.y.ShowComment:
						return s.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.y.SpamComment:
						return s.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.y.SpamLink:
						return s.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.y.Spoiler:
						return s.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.y.Sticky:
						return "SubredditPost" === t ? s.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : s.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.y.UnbanUser:
						return s.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.y.Unlock:
						return "SubredditPost" === t ? s.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : s.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.y.UnmuteUser:
						return s.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.y.UnsetContestMode:
						return s.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.y.UnsnoozeReports:
						return "SubredditPost" === t ? s.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : s.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.y.Unspoiler:
						return s.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.y.Unsticky:
						return "SubredditPost" === t ? s.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : s.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.y.UpdateRemovalReason:
					case o.y.WikiBanned:
					case o.y.WikiContributor:
					case o.y.WikiPageListed:
					case o.y.WikiPermLevel:
					case o.y.WikiRevise:
					case o.y.WikiUnbanned:
					case o.y.AcceptModeratorInvite:
					case o.y.AddCommunityTopics:
					case o.y.AddContributor:
					case o.y.AddModerator:
					case o.y.CreateAward:
					case o.y.CreateScheduledPost:
					case o.y.CreateRemovalReason:
					case o.y.CommunityStyling:
					case o.y.CommunityWidgets:
					case o.y.CreateRule:
					case o.y.DeleteAward:
					case o.y.DeleteRule:
					case o.y.DeleteScheduledPost:
					case o.y.DeleteOverriddenClassification:
					case o.y.DeleteRemovalReason:
					case o.y.DisableAward:
					case o.y.EditPostRequirements:
					case o.y.EditRule:
					case o.y.EditScheduledPost:
					case o.y.EditSettings:
					case o.y.EnableAward:
					case o.y.Events:
					case o.y.HiddenAward:
					case o.y.InviteModerator:
					case o.y.InviteSubscriber:
					case o.y.ModAwardGiven:
					case o.y.ModmailEnrollment:
					case o.y.OverrideClassification:
					case o.y.RemoveCommunityTopics:
					case o.y.RemoveContributor:
					case o.y.RemoveModerator:
					case o.y.RemoveWikiContributor:
					case o.y.ReorderModerators:
					case o.y.ReorderRules:
					case o.y.SetPermissions:
					case o.y.SnoozeReports:
					case o.y.SubmitContentRatingSurvey:
					case o.y.SubmitScheduledPost:
					case o.y.UnignoreReports:
					case o.y.UninviteModerator:
					default:
						return s.fbt._("Last mod action", null, {
							hk: "S9AMb"
						})
				}
			}
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: n,
						onClick: s,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: s
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(a.a, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = n.n(l);
			const m = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: s
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === c.g.Classic,
						[u.a.compactLayout]: n === c.g.Compact,
						[u.a.largeLayout]: n === c.g.Large
					}),
					content: t,
					rtJsonElementProps: m(s),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				r = n("./src/lib/timeUntil/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(o.d, {
					seconds: e.poll.endsAt / s.Xb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, n),
					style: b || Object(i.c)(s, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, f), t)
			}))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/components/PostContent/viewCount.m.less"),
				m = n.n(u);
			t.a = e => {
				let {
					className: t,
					post: n,
					showViewCount: o
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: s.fbt._("{percent upvoted}% Upvoted", [s.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: s.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [s.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(n), b = o && !!n.viewCount, f = Object(a.e)(e => Object(l.a)(e, n.id)), h = Object(a.e)(e => Object(l.c)(e, n.id)), v = Object(d.c)(n, h), O = f && v === d.b.Available;
				return r.a.createElement("div", {
					className: Object(i.a)(m.a.viewCounts, t)
				}, b && r.a.createElement("span", null, p), b && !!n.upvoteRatio && r.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !O && r.a.createElement("span", null, u))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, n) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				i = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ne
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx"),
				i = n("./src/reddit/models/Post/index.ts"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/constants/adEvents.ts"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.wc
			}), e => e === u.Od);
			var f = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/lib/classNames/index.ts"),
				v = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				y = n.n(_);
			const j = e => {
				let {
					postId: t,
					className: n
				} = e;
				const s = Object(c.e)(e => Object(x.G)(e, {
						postId: t
					})),
					r = Object(c.e)(e => "subreddit" === (null == s ? void 0 : s.belongsTo.type) ? Object(g.Y)(e, {
						subredditId: s.belongsTo.id
					}) : null);
				return r ? o.a.createElement(v.a, {
					className: Object(h.a)(y.a.link, n),
					to: r.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(O.b, {
					className: y.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: y.a.subredditName
				}, r.displayText)) : null
			};
			var C = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				E = n("./src/reddit/connectors/PostViewable/index.ts"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/contexts/Post/index.tsx"),
				w = n("./src/reddit/helpers/path/index.ts"),
				P = n("./src/reddit/hooks/useClickSourceData.ts"),
				T = n("./src/reddit/hooks/useIsOverlay.ts"),
				I = n("./src/reddit/hooks/usePageLayer.ts"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				A = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				R = n.n(A);
			const M = e => {
				let {
					post: t
				} = e;
				const n = `${Object(N.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					s = `${Object(N.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: R.a.postInformation
				}, o.a.createElement("h5", {
					className: R.a.title
				}, t.title), o.a.createElement("div", {
					className: R.a.interactions
				}, o.a.createElement("p", null, n), o.a.createElement("p", null, s)))
			};
			var L = n("./src/lib/isUrl/index.ts"),
				D = n("./src/reddit/actions/profile/index.ts"),
				F = n("./src/reddit/components/Thumbnail/index.tsx"),
				B = n("./src/reddit/components/UserIcon/index.tsx"),
				U = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				G = n("./src/reddit/selectors/profile.ts"),
				W = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				K = n.n(W);
			const q = e => {
				let {
					post: t
				} = e;
				var n, r, a, i;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(G.l)(t.author)),
					u = Object(s.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					m = Object(s.useMemo)(() => Object(L.a)(u), [u]);
				Object(s.useEffect)(() => {
					m || d(Object(D.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(V.a)(null === (n = null == l ? void 0 : l.icon) || void 0 === n ? void 0 : n.url),
					b = Object(U.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: K.a.media
				}, m ? o.a.createElement(F.b, {
					post: t,
					url: u,
					className: K.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: K.a.mediaThumbnailContainer
				}) : null, !m && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: K.a.userIconContainer
				}, o.a.createElement(B.a, {
					className: Object(h.a)({
						[K.a.snoovatarUserIcon]: p,
						[K.a.defaultUserIcon]: b
					}, K.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: K.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var H = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				z = n.n(H);
			const Y = Object(E.a)(null);
			var Q = Object(S.b)(Y(e => {
					let {
						post: t
					} = e;
					const n = Object(I.a)(),
						s = Object(T.a)(),
						r = Object(P.a)(),
						a = Object(k.x)(n) && !s;
					return o.a.createElement(v.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(w.b)(t.permalink) : Object(C.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: z.a.container
					}, o.a.createElement(M, {
						post: t
					}), o.a.createElement(q, {
						post: t
					})))
				})),
				J = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Z = n.n(J);
			const X = e => {
				let {
					postIds: t
				} = e;
				const n = t.map(e => o.a.createElement(Q, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: Z.a.container
				}, n)
			};
			var $ = n("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = n.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const n = Object(c.d)();
				if (!Object(c.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [s] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ee.a.container,
					onClick: () => n(Object(d.y)(t, l.a.Click))
				}, o.a.createElement(X, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(j, {
					postId: s,
					className: ee.a.communityLink
				}))
			};

			function ne(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(i.B)(t) && Object(i.A)(t) ? o.a.createElement(te, {
					post: t
				}) : o.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				m = n("./src/reddit/components/PostTopMeta/index.tsx"),
				p = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/models/Subreddit/index.ts"),
				y = n("./src/reddit/components/PostMeta/index.m.less"),
				j = n.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: s,
					isCurrentUserProfilePost: y,
					isOverlay: C,
					isTopicPage: E,
					post: k,
					shouldShowSubscribeButton: S,
					subredditOrProfile: w,
					tooltipType: P
				} = e, T = !!E, I = Object(g.a)(), N = Object(r.e)(e => !!w && Object(a.i)(e, w.id));
				return o.a.createElement("div", {
					className: j.a.metaContainer
				}, !s && !k.isSponsored && w && o.a.createElement(d.a, {
					postId: k.id,
					subredditName: w.name
				}, o.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: I
					}
				}, w.displayText)), w && w.isQuarantined && o.a.createElement(p.a, null), !s && !k.isSponsored && w && S && !y && o.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(x.k)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(_.i)(w) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: k.id,
					size: v.d.XXS,
					small: !0
				}), !s && !k.isSponsored && o.a.createElement(O.b, null), !s && !k.isSponsored && o.a.createElement(l.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(m.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: P,
					isModWithUserNotesPermissions: N
				}), o.a.createElement(u.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!s,
					post: k,
					tooltipType: P
				}), !T && o.a.createElement(i.a, {
					hideCta: n,
					thing: k,
					tooltipType: C ? m.f.Lightbox : void 0
				}), N && o.a.createElement(c.a, {
					postOrComment: k,
					className: j.a.addModNote
				}))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: v,
					isVoteCountAnimation: O,
					postId: x,
					shouldShowUpvoteRatioOnHover: g
				} = e, _ = `upvote-button-${t.id}${v?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, s && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: _,
					isVoteCountAnimation: O,
					isCountAnimShadowTestEnabled: p,
					postId: x,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return F
			})), n.d(t, "a", (function() {
				return J
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				v = n("./src/reddit/actions/post.ts"),
				O = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/helpers/path/index.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				y = n("./src/reddit/hooks/usePostContext.ts"),
				j = n("./src/reddit/hooks/useTheme.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Post/index.ts"),
				w = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				P = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = n("./src/lib/getShortenedLink.ts"),
				I = n("./src/reddit/components/FlairWrapper/index.tsx"),
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				A = n("./src/lib/prettyPrintNumber/index.ts"),
				R = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = n.n(M);
			const D = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, B = Object(i.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return Object(_.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, L.a.proposalMetaData)
					}, a.a.createElement("span", null, N.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [N.fbt._param("count", Object(A.a)(s)), N.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(R.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				U = n("./src/reddit/components/SEOTitle/index.tsx"),
				V = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				G = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				K = n("./src/telemetry/models/Outbound.ts"),
				q = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				H = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = n("./src/reddit/components/PostTitle/index.m.less"),
				Y = n.n(z);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(F || (F = {}));
			const J = e => {
					let {
						size: t,
						titleColor: n,
						titleType: s,
						nowrap: o,
						children: r,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(j.a)();
					let m = "";
					switch (t) {
						case F.ExtraLarge:
							m = Y.a.ExtraLarge;
							break;
						case F.Large:
							m = Y.a.Large;
							break;
						case F.Medium:
							m = Y.a.Medium;
							break;
						case F.Small:
							m = Y.a.Small;
							break;
						case F.ExtraSmall:
							m = Y.a.ExtraSmall;
							break;
						case F.Metadata:
							m = Y.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(Y.a.Title, i, m, {
							[Y.a.isNoWrap]: o,
							[Y.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(P.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, s ? a.a.createElement(U.b, {
						type: s
					}, r) : r)
				},
				Z = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: s,
						children: o,
						...r
					} = e;
					return a.a.createElement(c.a, Q({}, r, {
						className: Object(u.a)(t, Y.a.styledLink, {
							[Y.a.isVisitedEnabled]: !n
						})
					}), o)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: s,
						children: o
					} = e;
					return a.a.createElement("div", {
						className: Object(u.a)(Y.a.titleContainer, s, {
							[Y.a.isNoWrap]: n,
							[Y.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				$ = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(p.r)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: G.e,
					shouldOpenPostInNewTab: W.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: n
					} = t, s = Object(i.d)(), o = Object(g.a)(), r = Object(i.e)(V.b), c = Object(i.e)(V.c), d = e => {
						(r || c) && (e.preventDefault(), s(Object(v.Z)(Object(x.b)(t.permalink), t.id))), t.isSponsored && Object(S.A)(t) && s(Object(v.y)(t, O.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(X, {
						nowrap: e.nowrap
					}, a.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, a.a.createElement(te, e)); {
						const s = t.permalink,
							r = e.isCommentPermalink ? Object(x.b)(s) : Object(h.a)(s, void 0, o);
						return a.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n && !Object(S.A)(t) ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? a.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, a.a.createElement(te, t)) : a.a.createElement(te, t)
						})(t, e) : a.a.createElement(Z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: r,
							onClick: d
						}, a.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const r = e.isCommentsPage ? U.a.PostComments : U.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(J, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && a.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent
					}), o)
				},
				ne = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: s
					} = e, {
						isSponsored: o
					} = s, r = e.isCommentsPage ? K.SourceElement.PostLink : K.SourceElement.ListingPostLink;
					if (Object(_.a)()) return null;
					if (n && s.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== F.Large && !s.isSponsored && (s.source || s.media && (s.media.type === k.o.GIFVIDEO || s.media.type === k.o.IMAGE || s.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(k.E)(s),
							isSponsored: o,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(T.a)(s), !s.isSponsored && a.a.createElement(C.a, {
							name: "external_link",
							className: Y.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: o,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(T.a)(s), !s.isSponsored && a.a.createElement(C.a, {
						name: "external_link",
						className: Y.a.outboundLinkIcon
					}));
					return null
				};
			class se extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Y.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(P.a)(this.props).bodyText,Object(P.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: o,
						isOverlay: r,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = n === E.b.Left, b = Object(I.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(q.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), v = !r && !o && !t, O = v && f && f.length > 0, x = v && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(Y.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": H.a.TITLE,
						onClick: m
					}, !d && O && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(w.b)(c) && a.a.createElement(ee, Q({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && a.a.createElement(B, {
						className: Y.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(ne, this.props), x && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: Y.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${s.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.gb)(),
					n = Object(p.x)(t),
					s = Object(y.a)(),
					o = Object(i.e)(o => $(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					r = Object(j.a)(),
					c = Object(m.b)();
				return s ? a.a.createElement(se, Q({
					pageLayer: t,
					isCommentPermalink: n
				}, s, o, e, {
					theme: r,
					sendEvent: c
				})) : null
			}))
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = n("./src/reddit/components/NotificationButton/index.tsx"),
				m = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				b = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				v = n("./src/reddit/constants/posts.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/post.ts"),
				_ = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = n("./src/reddit/models/Media/index.ts"),
				j = n("./src/reddit/models/Subreddit/index.ts"),
				C = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/PostTopLine/index.m.less"),
				S = n.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: o,
					hideNSFWPref: k,
					hostPostData: w,
					iconClassName: P,
					inSubredditOrProfile: T,
					isCommentsPage: I,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: A,
					isModQueuePage: R,
					isModWithUserNotesPermissions: M,
					isOverlay: L,
					isTopicPage: D,
					listingKey: F,
					post: B,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: V,
					showSubreddit: G,
					showSubredditIcon: W,
					subredditOrProfile: K,
					isFollowed: q,
					shouldShowFollowButton: H,
					onFollowPostClick: z
				} = e;
				const Y = D,
					Q = K && Object(j.i)(K),
					J = Object(a.e)(e => {
						if (!Q) return !0;
						const t = Object(E.Ib)(e, B.author || "");
						return !t || t.enableFollowers
					}),
					Z = Object(a.e)(C.a);
				return r.a.createElement("div", {
					className: Object(i.a)(S.a.container, t)
				}, G && K && r.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: K.url
				}, W && r.a.createElement(b.b, {
					className: Object(i.a)(S.a.subredditIcon, P),
					shouldHideNsfwIcon: k,
					subredditOrProfile: K
				}))), r.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, G && r.a.createElement(l.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: n,
					isModWithUserNotesPermissions: M,
					tooltipType: L ? p.f.Lightbox : void 0,
					post: B,
					showSub: G,
					subredditOrProfile: K
				}), r.a.createElement(m.a, {
					className: S.a.postBadges,
					displayText: K ? K.displayText : null,
					inSubredditOrProfile: T,
					isCompactPinnedPost: N,
					post: B,
					tooltipType: L ? p.f.Lightbox : void 0
				}), !Y && r.a.createElement(c.a, {
					isPostDetail: I,
					thing: B,
					tooltipType: L ? p.f.Lightbox : void 0
				}), M && r.a.createElement(d.a, {
					postOrComment: B,
					className: S.a.addModNote
				})), K && J && G && U && !A && r.a.createElement(h.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(g.k)(B.id, e ? "unsubscribe" : "subscribe", "post", F, w),
					identifier: {
						name: K.name,
						type: Q ? v.a.PROFILE : v.a.SUBREDDIT
					},
					postId: B.id,
					size: O.d.XS,
					priority: Z ? O.c.Secondary : void 0,
					isShredditParityEnabled: Z
				}), V && r.a.createElement(x.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(y.E)(B),
					source: B.source
				}, r.a.createElement(_.a, {
					className: S.a.outboundLinkIcon
				})), H && J && r.a.createElement(u.a, {
					isFilled: !!q,
					onClick: z,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, n) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, n) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, n) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/helpers/isComment.ts"),
				v = n("./src/reddit/helpers/trackers/modTools.ts"),
				O = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				y = n("./src/reddit/selectors/tooltip.ts"),
				j = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				C = n.n(j);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, S = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(y.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, n)) : e(Object(l.fb)(t.reportedThingId, t.reason, n))
				}
			})), w = Object(m.a)(b.a);
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(v.p)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: n,
						openDropdown: s,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = k(e, n);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: m,
						className: Object(i.a)(C.a.DropdownLabelContainer, d),
						onClick: s
					}, o.a.createElement("label", {
						htmlFor: m,
						className: C.a.DropdownLabel
					}, a ? E._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(x.a, null) : o.a.createElement(O.a, null))), o.a.createElement(w, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(C.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: C.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: u
					}), E._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: u
					}), E._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = S(Object(p.c)(P))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = n.n(o);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = a
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
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
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return r[o({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledVoteIcon: "mvlZFfW9BWm1bmljE_0Rg"
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = n("./src/reddit/components/VerticalVotes/index.m.less"),
				x = n.n(O);
			const g = Object(i.c)({
					isNightMode: h.fb,
					isAnimatingUpvotePostId: f.k
				}),
				_ = Object(a.b)(g),
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class C extends r.a.Component {
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
							isCountAnimShadowTestEnabled: n,
							isNightMode: o,
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: i,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: O,
							postId: g
						} = e,
						_ = y(e),
						C = j(e),
						E = O.voteState,
						k = a === g;
					return r.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className),
						id: `vote-arrows-${O.id}`,
						ref: h
					}, _ ? r.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": E === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: E
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": E === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[x.a.bounceUp]: k
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: E
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(x.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: E,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: g
					}), C ? r.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": E === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: E
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": E === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: E
					})))
				}
			}
			const E = Object(d.a)(_(C));
			t.a = E
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: a.kb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
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
					}) : o.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/keycodes.ts");
			class a extends o.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
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
							onChange: n
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const o = e.key === r.b.ArrowUp,
							a = e.key === r.b.ArrowDown;
						if (o || a) {
							const t = this.getValues();
							if (!t.length) return;
							const r = s ? t.indexOf(s) : 0,
								a = t[((o ? r - 1 : r + 1) + t.length) % t.length];
							n(a), this.setState({
								value: a
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
					}), o.a.Children.map(e.children, (n, s) => {
						const r = 0 === s,
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : r ? 0 : -1;
						return o.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_ = n("./src/reddit/selectors/meta.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				j = n("./node_modules/reselect/es/index.js"),
				C = n("./src/reddit/controls/Score/index.m.less"),
				E = n.n(C);
			const k = {
					placement: "right"
				},
				S = e => e.voteState === x.a.downvoted ? Object(O.a)(e).voteText.downvote : e.voteState === x.a.upvoted ? Object(O.a)(e).voteText.upvote : Object(h.a)(Object(f.a)(e)),
				w = Object(j.c)({
					locale: e => Object(_.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: n,
							postId: s
						} = t;
						if (n && s) return Object(y.G)(e, {
							postId: s
						})
					}
				}),
				P = () => 0,
				T = Object(d.b)(w),
				I = Object(r.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : S(e)
						},
						{
							score: n,
							postId: r = "",
							locale: f,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: O,
							shouldShowUpvoteRatioOnHover: x,
							post: _
						} = e,
						y = Object(d.d)(),
						j = null == f ? void 0 : f.startsWith("en"),
						C = e.isScoreHidden ? j ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: E.a.dot
						}, "•") : Object(a.b)(n),
						w = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.H)({
								postId: r,
								delta: t
							}))
						}, [y, r]),
						T = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: r
								}
							}
						}),
						I = !e.isScoreHidden && h && n < g.a,
						N = Object(v.a)(k),
						A = n < 0 ? 0 : n;
					return c.a.createElement("div", {
						className: Object(o.a)(E.a.score, e.className),
						style: t,
						onMouseEnter: x ? N.show : void 0,
						onMouseLeave: x ? N.hide : void 0,
						ref: x ? N.target.ref : void 0
					}, (I || O) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: A,
						countToUpperBound: A,
						initialDelay: P,
						subsequentRecurringDelay: P,
						incrementDelta: P,
						shouldDisjointAnimation: !0,
						postId: r,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: T.current,
						onDataCB: w,
						isLoadTestOnly: O && !I
					})), !I && C, x && _ && c.a.createElement(m.a, N, c.a.createElement(p.a, {
						className: E.a.viewCount,
						post: _,
						showViewCount: !1
					})))
				});
			t.a = T(I)
		},
		"./src/reddit/controls/Search/CommentSearch/index.m.less": function(e, t, n) {
			e.exports = {
				absolute: "_3JOs2fo7GARfPQK9n9uvyr",
				actionFont: "_2GiazGbWQeG84CupoExWj9",
				dismissButton: "_2lSQO1uFdnaWbYRKtLg3H-",
				metadataFont: "_1Vs6ZQxgSSIBCGCe2dcMoA",
				flex: "_1qRmLv2PYGtqa3xyVEYz_R",
				input: "_2WVAyd_SvtylHMe7sKaua9",
				linkTextColor: "_1zG8KFMibgWr8ahovOZAUB",
				paddingIcon: "_2i3sQHj_1l-LDzGfzQTjHM",
				postIcon: "_1rMy-IddyxrWMGR5hH5O1E",
				relative: "_3AIIvG4My2zfaJh7r8TucE",
				verticalDivider: "_34BFzBLxzKlRZTjBIHtnlh",
				dismissIcon: "_1Z_UNdjZZu53GD24SI5BLG",
				searchIcon: "_380giGvmbbYVTkgLoNx7ZP"
			}
		},
		"./src/reddit/controls/Search/CommentSearch/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeSearchKey/index.ts"),
				m = n("./src/reddit/actions/pages/search/index.ts"),
				p = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/constants/parameters.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				O = n("./src/reddit/helpers/search/searchImpressionId.ts"),
				x = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				g = n("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = n("./src/reddit/hooks/usePageLayer.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/platform.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/controls/Search/CommentSearch/index.m.less"),
				S = n.n(k);
			const w = "comment_search-bar",
				P = "comment-search-button",
				T = "search-bar-dismiss-button",
				I = "COMMENT_SEARCH_BAR_TEST_ID";

			function N(e) {
				let {
					searchValue: t,
					post: n,
					subreddit: s
				} = e;
				return {
					[b.z]: t,
					[b.M]: [l.ic.Comments],
					...(null == s ? void 0 : s.isNSFW) ? {
						[b.J]: "1"
					} : {},
					...(null == n ? void 0 : n.isNSFW) ? {
						[b.m]: "1"
					} : {}
				}
			}

			function A(e) {
				const {
					expanded: t,
					bucketed: n,
					collapsed: l
				} = e.experiment, b = Object(_.a)(), k = Object(y.a)(), A = (null == b ? void 0 : b.queryParams.q) || "", [R, M] = Object(o.useState)(A), [L, D] = Object(o.useState)(t), F = Object(a.d)(), B = Object(o.useRef)(null), U = Object(a.e)(e => Object(f.h)(e, {
					pageLayer: b
				})), V = Object(a.e)(e => Object(f.s)(e, {
					pageLayer: b
				})), G = Object(a.e)(e => Object(C.j)(e));
				var W, K, q;

				function H() {
					var t;
					if (!R.trim() || !U) return;
					const n = new URL(U.permalink).pathname,
						s = N({
							searchValue: R,
							post: U,
							subreddit: V
						});
					v.a.set(E.a.CommentSearchBar), k(Object(g.p)(g.a.FULL_SEARCH_BUTTON, s, x.a.PdpCommentSearch, b || void 0));
					const o = Object(u.b)(U.id, void 0, s);
					F(Object(m.d)({
						key: o,
						options: s,
						subredditName: null == V ? void 0 : V.name,
						postId: U.id
					}));
					const r = Object(c.a)(n, s);
					F(Object(i.b)(Object(h.b)(r), {
						...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state,
						isOverlay: G,
						scrollOnLoad: !0
					}))
				}
				return W = B, K = D, q = l, Object(o.useEffect)(() => {
					if (q) return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					};

					function e(e) {
						W.current && !W.current.contains(e.target) && K(!1)
					}
				}, [W]), n ? r.a.createElement("div", {
					className: S.a.flex
				}, R || L ? r.a.createElement("div", {
					"data-testid": w
				}, r.a.createElement("label", {
					className: Object(d.a)(S.a.flex, S.a.relative)
				}, r.a.createElement("div", {
					className: S.a.absolute,
					role: "submit",
					onClick: H
				}, r.a.createElement(j.a, {
					className: Object(d.a)(S.a.postIcon, S.a.paddingIcon),
					name: "search"
				})), r.a.createElement("input", {
					className: Object(d.a)(S.a.metadataFont, S.a.input),
					"data-testid": I,
					id: w,
					type: "search",
					onChange: e => {
						O.a.update(x.a.PdpCommentSearchBar), M(e.target.value)
					},
					onFocus: function() {
						O.a.update(x.a.PdpCommentSearchBar), v.a.set(E.a.CommentSearchBar), k(Object(g.p)(g.a.SEARCH_BAR, N({
							searchValue: R,
							post: U,
							subreddit: V
						}), x.a.PdpCommentSearchBar, b || void 0))
					},
					onKeyPress: function(e) {
						e.key === p.b.Enter && H()
					},
					placeholder: s.fbt._("Search comments", null, {
						hk: "2ObH7B"
					}),
					ref: B,
					value: R
				}), R && r.a.createElement("button", {
					"aria-label": s.fbt._("Remove search bar text", null, {
						hk: "4twCsS"
					}),
					id: T,
					className: S.a.dismissButton,
					"data-testid": T,
					onClick: () => {
						M("")
					}
				}, r.a.createElement(j.a, {
					className: S.a.dismissIcon,
					name: "clear"
				})))) : r.a.createElement("button", {
					className: S.a.linkTextColor,
					"data-testid": P,
					id: P,
					onClick: () => {
						Promise.resolve(D(!0)).then(() => {
							var e;
							return null === (e = B.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, r.a.createElement(j.a, {
					className: Object(d.a)(S.a.searchIcon, S.a.paddingIcon),
					name: "search"
				}), r.a.createElement("span", {
					className: S.a.actionFont
				}, s.fbt._("Search comments", null, {
					hk: "2ObH7B"
				})))) : null
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, {
						[c.a.xs]: n === a.d.XS,
						[c.a.s]: n === a.d.S,
						[c.a.m]: n === a.d.M,
						[c.a.l]: n === a.d.L,
						[c.a.xl]: n === a.d.XL,
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, o.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
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
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/lodash/map.js"),
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
			const a = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				i = () => a() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				c = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				d = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!c(n, e)) return;
					const {
						startContainer: s,
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = n, i = document.createRange();
					i.selectNode(e);
					let d = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, n) && (i.setStart(s, o), d = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, n) && (i.setEnd(r, a), d = !1), d) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
				},
				l = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				u = e => e && e.parentElement && l(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				m = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = e => {
				const {
					moderation: t,
					...n
				} = e, {
					lastModAction: o,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, a = [], i = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: n
					} = e.node;
					if (!n) return;
					const s = null == n ? void 0 : n.id;
					s && (a.push(s), i[s] || (i[s] = {
						info: {},
						lastModAction: {}
					}), i[s].info = n, i[s].lastModAction = {
						...t
					})
				});
				const c = {
					lastModAction: o,
					activeMods: a
				};
				return {
					subreddit: Object(s.a)(n),
					summary: {
						sub: c,
						mods: i
					}
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: o
					} of t) n.push(Object(s.f)(o));
				return n
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				r = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				i = e => !0 === e ? a.a.upvoted : !1 === e ? a.a.downvoted : a.a.notVoted,
				c = n("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === s.H,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: d(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(o.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: i(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(r.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(r.b)(e.associated_award)), t
			};
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== s.H ? null : e.body === s.I ? c.c.User : e.body === s.Qb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.L.NO_STRIPE_SUBSCRIPTION:
							case s.L.USER_DOESNT_EXIST:
							case s.L.USER_REQUIRED_ERROR:
							case s.L.VALIDATION_ERROR:
								return e;
							case s.L.NO_USER:
							case s.L.NO_TEXT:
							case s.L.NO_URL:
								return s.L.VALIDATION_ERROR;
							case s.L.CREDIT_CARD_FAILURE:
							case s.L.CREDIT_CARD_FAILURE_GENERIC:
								return s.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.L.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return i
				})), n.d(t, "c", (function() {
					return c
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(s || (s = {}));
			const o = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => o(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!o(s.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(s.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return C
			}));
			var s = n("./src/lib/makeCommentsPageKey/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/models/Event.ts");
			const d = (e, t) => ({
					...Object(i.o)(e),
					subreddit: Object(i.lb)(e),
					profile: Object(i.T)(e),
					post: Object(i.K)(e, t),
					comment: Object(i.h)({
						state: e,
						commentId: t
					})
				}),
				l = (e, t) => {
					const n = Object(a.c)(e, {
							commentId: t
						}),
						o = n && Object(s.a)(n.postId);
					if (!n || !o) return null;
					const c = {
							commentId: t,
							commentsPageKey: o
						},
						d = t && o && Object(r.j)(e, c) || 0;
					return Object(i.z)(e, void 0, {
						depth: d
					})
				},
				u = e => {
					var t;
					return null !== (t = e.split("chat_reaction_")[1]) && void 0 !== t ? t : ""
				},
				m = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(i.K)(n, t),
					source: c.b.ChatView,
					subreddit: Object(i.lb)(n)
				}),
				p = (e, t) => n => ({
					...d(n, t),
					source: "live_post",
					action: o.c.CLICK,
					noun: e,
					actionInfo: {
						reason: "live_post",
						pageType: "actions_menu"
					},
					listing: l(n, t)
				}),
				b = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "last_message"
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.SUBMIT,
					noun: "reply",
					post: Object(i.K)(t, e),
					comment: Object(i.h)({
						state: t,
						commentId: e
					}),
					actionInfo: Object(i.d)(t, {
						reason: "live_post",
						type: "live_post"
					})
				}),
				h = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLICK,
					noun: "comment",
					actionInfo: Object(i.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.VIEW,
					noun: "warning",
					post: Object(i.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				O = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: o.c.CLOSE,
					noun: "warning",
					post: Object(i.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				x = e => t => ({
					...d(t, e),
					source: "global",
					action: o.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				g = (e, t, n) => s => ({
					...d(s, t),
					source: c.b.Chat,
					action: o.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(s, t)
				}),
				_ = (e, t, n) => s => ({
					...d(s, t),
					source: c.b.Chat,
					action: o.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(s, t)
				}),
				y = () => e => {
					var t;
					return {
						...Object(i.o)(e),
						subreddit: Object(i.lb)(e),
						profile: Object(i.T)(e),
						actionInfo: {
							...Object(i.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: o.c.VIEW,
						noun: "hint"
					}
				},
				j = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.CLICK,
						noun: "chat_thread",
						actionInfo: Object(i.d)(t, {
							pageType: "actions_menu"
						})
					}
				},
				C = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: o.c.SUBMIT,
						noun: "comment",
						actionInfo: Object(i.d)(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "l", (function() {
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts"),
				u = n("./src/reddit/constants/richTextJson.ts");
			const m = e => {
					const t = Object(c.p)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.cb)(e),
						subreddit: Object(d.lb)(e),
						post: t ? Object(d.K)(e, t) : null,
						profile: Object(d.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, s, o, r) => {
					const a = {
							commentId: r,
							commentsPageKey: s
						},
						c = r && Object(i.j)(e, a) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = o ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...m(e),
						comment: r ? Object(d.h)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(d.z)(e, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e),
						media: {
							mimetype: null == o ? void 0 : o.mimetype,
							size: null == o ? void 0 : o.size
						}
					})
				}, b = e => {
					let {
						state: t,
						bodyText: n,
						postId: o,
						error: r,
						parentId: a,
						uploadMetadata: i
					} = e;
					const c = m(t),
						d = r.type === s.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${u.c}`)
						}("string" == typeof n ? n : JSON.stringify(n)) ? "giphy" : void 0;
					return Object(l.a)({
						...c,
						source: r.type === s.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...c.actionInfo,
							reason: d
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: n,
							parentId: a,
							postId: o,
							contentType: p
						},
						media: {
							mimetype: null == i ? void 0 : i.mimetype,
							size: null == i ? void 0 : i.size
						}
					})
				}, f = e => Object(l.a)({
					noun: "cancel",
					...m(e)
				}), h = (e, t) => {
					t === a.c.replyToPost && Object(l.a)({
						noun: "input",
						...m(e)
					})
				}, v = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.cb)(t),
					subreddit: Object(d.lb)(t),
					post: Object(d.K)(t, e)
				}), O = e => Object(l.a)({
					noun: "edit",
					...m(e)
				}), x = e => Object(l.a)({
					noun: "save_edit",
					...m(e)
				}), g = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...m(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, _ = () => e => ({
					...m(e),
					action: "open",
					noun: "gif_tooltip"
				}), y = e => t => ({
					...m(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), j = () => e => ({
					...m(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), C = () => e => ({
					...m(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return v
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...o.o(e),
					screen: o.cb(e),
					subreddit: o.lb(e),
					userSubreddit: o.ub(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === s.e.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: e,
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => o => ({
					...i(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: "image",
					actionInfo: s ? {
						reason: s
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
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: "click",
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
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
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: e,
					correlationId: Object(r.c)(r.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => s => ({
					...i(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: o.U(s, t),
					subreddit: o.mb(s, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				v = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/reddit/components/CreatorStats/helpers.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case s.b.Available:
							return "insights_shown";
						case s.b.NotAvailableYet:
							return "not_enough_views";
						case s.b.NotAvailable:
							return "post_too_old";
						case s.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => n => ({
					...Object(r.o)(n),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(n),
					post: Object(r.K)(n, e),
					userSubreddit: Object(r.ub)(n),
					actionInfo: Object(r.d)(n, {
						reason: a(t)
					})
				}),
				c = (e, t) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(n, t),
					subreddit: Object(r.lb)(n),
					userSubreddit: Object(r.ub)(n)
				}),
				d = e => {
					switch (e) {
						case s.b.Available:
							return "stats";
						case s.b.NotAvailableYet:
							return "not_enough_views";
						case s.b.NotAvailable:
						case s.b.Expired:
							return "no_data";
						case s.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				u = (e, t, n) => s => ({
					...Object(r.o)(s),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(s, {
						reason: d(t)
					}),
					post: Object(r.K)(s, e, void 0, n)
				}),
				m = (e, t, n, s, a, i) => c => ({
					...Object(r.o)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(c, e, void 0, i),
					subreddit: Object(r.lb)(c),
					outbound: {
						postId: n,
						url: t,
						subredditId: s,
						subredditName: a
					}
				}),
				p = (e, t, n) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(s, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.K)(s, e, void 0, n),
					subreddit: Object(r.lb)(s)
				})
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), n.d(t, "clickGildEvent", (function() {
				return b
			})), n.d(t, "clickAddAward", (function() {
				return f
			})), n.d(t, "clickHideAward", (function() {
				return h
			})), n.d(t, "clickConfirmHideAward", (function() {
				return v
			})), n.d(t, "clickCancelHideAward", (function() {
				return O
			})), n.d(t, "clickAwardReportFlow", (function() {
				return g
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return C
			})), n.d(t, "clickReportAward", (function() {
				return E
			})), n.d(t, "clickCancelReportAward", (function() {
				return k
			})), n.d(t, "clickConfirmReportAward", (function() {
				return S
			})), n.d(t, "viewGildModalEvent", (function() {
				return w
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return P
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), n.d(t, "clickMessageInputEvent", (function() {
				return I
			})), n.d(t, "typeMessageInputEvent", (function() {
				return N
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return L
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), n.d(t, "clickNextButtonEvent", (function() {
				return F
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return B
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), n.d(t, "clickFilterEvent", (function() {
				return V
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var s = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/GoldPurchase.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === o.e.Global && e.awardSubType === o.d.Appreciation ? i.GoldPurchaseType.GidAppreciation : e.awardType === o.e.Global && e.awardSubType === o.d.Premium ? i.GoldPurchaseType.GidPremium : e.awardSubType === o.d.Group ? i.GoldPurchaseType.GidGroup : e.awardType === o.e.Community ? i.GoldPurchaseType.GidCommunity : e.awardType === o.e.Moderator ? i.GoldPurchaseType.GidMod : e.awardType === o.e.Global && e.awardSubType === o.d.Global ? i.GoldPurchaseType.GidGlobal : i.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const o = t && Object(r.g)(e, {
						commentId: t
					});
					return {
						...a.o(e),
						actionInfo: a.d(e, {
							reason: o ? "live_post" : void 0,
							...n
						}),
						comment: t ? a.h({
							state: e,
							commentId: t
						}) : void 0,
						correlationId: Object(l.b)(e) || Object(c.d)(c.a.GildingFlow, !1),
						post: t ? a.K(e, t) : void 0,
						screen: a.cb(e),
						subreddit: a.lb(e),
						userSubreddit: a.ub(e),
						listing: t ? Object(s.k)(e, t) : void 0
					}
				},
				b = (e, t) => n => ({
					...p(n, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: a.r(n)
				}),
				f = e => t => ({
					...p(t, e),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: a.r(t)
				}),
				h = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				O = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				x = e => (t, n) => s => ({
					...p(s, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				g = x("award_hovercard_report"),
				_ = x("cancel_award_hovercard_report"),
				y = x("flag_award"),
				j = x("cancel_flag_award"),
				C = x("confirm_flag_award"),
				E = x("report_community_award"),
				k = x("cancel_report_community_award"),
				S = x("confirm_report_community_award"),
				w = (e, t, n) => s => ({
					...p(s, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				P = (e, t, n) => s => ({
					...p(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				T = (e, t) => n => ({
					...p(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				I = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				N = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				R = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				M = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				L = (e, t) => n => ({
					...p(n, e),
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
				F = e => t => ({
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
				U = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: s,
						numberCoins: o,
						thingId: r
					} = e;
					return e => ({
						...p(e, r),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(r) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: s,
							numberCoins: o,
							...m(t)
						}
					})
				},
				V = e => t => ({
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
				W = () => e => ({
					...p(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, f = !!n, h = r.b(e), v = h ? Object(u.getAwardTypeFromAward)(h) : null, O = f ? v : i.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, x = n ? Object(p.a)(n) ? "comment" : "post" : void 0, g = l || i.u(e), _ = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === g)[0], y = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(_, f)), j = _ ? Math.round(1e4 * (_.baselinePennies - _.pennies) / _.baselinePennies) / 100 : 0, C = _ ? Math.round(1e4 * (_.coins - _.baselineCoins) / _.coins) / 100 : 0, E = _ ? _.baselinePennies !== _.pennies ? `${j}_percent_price` : _.baselineCoins !== _.coins ? `${C}_percent_bonus` : void 0 : void 0, k = O === d.GoldPurchaseType.Premium ? s.Db : _ ? _.pennies : void 0;
					return {
						...c.o(e),
						comment: n ? c.h({
							state: e,
							commentId: n
						}) : null,
						correlationId: i.s(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.K(e, n) : null,
						screen: c.cb(e),
						subreddit: n ? c.lb(e) : null,
						goldPurchase: {
							...h ? Object(b.a)(h) : null,
							type: O,
							gildedContent: f,
							contentType: x,
							numberCoins: _ ? _.coins : void 0,
							offerContext: y,
							offerType: E
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: k
						},
						purchase: {
							priceMicros: k
						}
					}
				},
				h = (e, t, n) => s => ({
					...f(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				_ = (e, t) => n => ({
					...f(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				y = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t, n) => s => {
					const o = f(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : i.p(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				C = e => t => {
					var n;
					const s = f(t, {
						thingId: e
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...s.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
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
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.T(e),
					screen: i.cb(e),
					subreddit: i.lb(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(a.j)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: i.K(s, e)
				}),
				l = (e, t, n, s) => o => {
					const a = n ? i.h({
							state: o,
							commentId: n
						}) : null,
						{
							sortToUse: c
						} = Object(r.a)(o, e);
					return {
						...d(e, t, s)(o),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = i.k(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(a.j)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(o.a)({
					...d(e, t)(n),
					...i.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: i.k(t),
					userSubreddit: i.ub(t)
				})
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				r = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				a = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				i = (e, t) => n => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(s.o)(n),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(s.nb)(n, t)
					}
				}),
				c = (e, t, n) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(s.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: n ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(s.nb)(o, t)
					}
				}),
				d = (e, t, n, o) => r => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(s.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: n ? "post" : "comment",
						reason: t
					},
					subreddit: Object(s.mb)(r, e)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return a
			})), n.d(t, "n", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(o.cb)(e),
					profile: Object(o.T)(e),
					subreddit: Object(o.lb)(e),
					userSubreddit: Object(o.ub)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				i = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					...r(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					media: {
						mimetype: Object(o.j)(n, t)
					},
					...r(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: s.c.CLICK,
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...r(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...r(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...r(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...r(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					...r(n)
				}),
				b = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					post: Object(o.K)(n, t),
					...r(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					...r(n)
				}),
				h = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				v = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.h)({
						state: n,
						commentId: t
					}),
					post: Object(o.K)(n, t),
					subreddit: Object(o.ob)(n, t)
				}),
				O = (e, t, n, s) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.K)(r, n),
					subreddit: Object(o.ob)(r, n),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(o.h)({
							state: r,
							commentId: n
						})
					}
				}),
				x = () => e => ({
					...r(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				}),
				g = (e, t, n) => s => ({
					...r(s),
					source: "moderator",
					noun: "action",
					action: "click",
					actionInfo: {
						pageType: "mod_queue",
						paneName: n,
						reason: t
					},
					comment: Object(o.h)({
						state: s,
						commentId: e
					}) || void 0,
					post: Object(o.K)(s, e)
				}),
				_ = (e, t) => n => ({
					...r(n),
					source: "moderator",
					noun: "add_note_mod_queue",
					action: "click",
					comment: Object(o.h)({
						state: n,
						commentId: e
					}) || void 0,
					post: Object(o.K)(n, e),
					modAction: {
						targetUserId: t
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.cb(e),
					subreddit: o.lb(e),
					userSubreddit: o.ub(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.q)(e)
				}),
				i = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				g = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				_ = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				y = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : _[e],
					...r(t)
				}),
				j = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				C = (e, t, n) => a => ({
					source: "post",
					action: "click",
					noun: Object(s.m)(e),
					...r(a),
					actionInfo: o.d(a, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: a(t)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				N = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "o", (function() {
				return P
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...r.o(t)
					};
					return Object(o.a)(t) && Object.assign(n, i), n
				},
				d = (e, t) => n => {
					const {
						id: s
					} = Object(a.Cb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...r.o(n),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				l = e => ({
					...r.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: r.jb(e)
				}),
				u = e => ({
					...r.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.jb(e)
				}),
				m = e => ({
					...r.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.jb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...r.o(e),
					...i
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...r.o(e),
					...i
				}),
				f = e => t => ({
					...r.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				h = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...r.o(n),
					snoovatar: r.jb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				v = h("view"),
				O = h("click"),
				x = h("dismiss"),
				g = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					snoovatar: r.jb(s)
				}),
				_ = g("anniversary_achievement", "view", "anniversary_achievement"),
				y = g("anniversary_achievement", "click", "close"),
				j = g("anniversary_achievement", "click", "equip"),
				C = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				E = C("view"),
				k = C("click"),
				S = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.jb(s)
				}),
				w = e => S("onboarding", "click", e),
				P = () => S("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.o(e)
				}),
				a = e => t => {
					const n = o.lb(t),
						{
							userFlair: r,
							achievementFlair: a
						} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.o(t),
						subreddit: n,
						userFlair: {
							id: null == r ? void 0 : r.id,
							title: r ? Object(s.g)(r) : void 0,
							isActive: !!r || void 0,
							achievementFlairId: null == a ? void 0 : a.type,
							achievementFlairTitle: null == a ? void 0 : a.name,
							isLocked: null == a ? void 0 : a.isLocked
						}
					}
				},
				i = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.o(e)
				}),
				c = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.lb(t),
					...o.o(t)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./src/lib/hooks/useTooltip.ts");
			const a = Object(s.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(r.a)(e);
					return Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, a))
				}, [e]);
				return Object(r.b)(t)
			}
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/removedPosts.ts");
			const r = () => Object(s.e)(e => Object(o.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(s.useContext)(o.b)
			}
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, n) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(c.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, n) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, n) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return o.a.createElement("svg", c({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", c({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(o);
			t.a = s.a.div("inlineRow", r.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const a = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
			const o = 50,
				r = 50,
				a = 1e4,
				i = 100;
			var c, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(s.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
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
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "q", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === o.a.Subreddit;
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
			const v = e => b[h[e]],
				O = e => h[b[e]],
				x = e => f[b[e]],
				g = e => b[f[e]],
				_ = e => h[f[e]];
			var y;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const j = e => {
					switch (e) {
						case y.Hourly:
						case y.Daily:
						case y.Weekly:
						case y.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
				E = e => {
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
							return Object(s.a)(e)
					}
				},
				k = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(a.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(a.b)(s, o)
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
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
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
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
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
					},
					pushcard: null
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_pushcard",
				p = "avatar_promo_archived";
			var b;
			! function(e) {
				e.MaxEventViews = "targeting:max_event_views", e.Title = "copy:pushcard_title", e.Cta = "copy:pushcard_cta", e.BannerTitle = "copy:banner_title", e.BannerBody = "copy:banner_body", e.Deeplink = "deeplink"
			}(b || (b = {}));
			const f = e => {
					let {
						startsAt: t,
						endsAt: n
					} = e;
					const s = t && new Date(t) <= new Date,
						o = !!n && new Date(n) < new Date;
					return !!s && !o
				},
				h = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: s
					} = e, [o, r] = s, a = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(b).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(a[b.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: o,
							title: a[b.BannerTitle],
							body: a[b.BannerBody]
						},
						imageUrl: r,
						title: a[b.Title],
						cta: a[b.Cta],
						deeplink: a[b.Deeplink]
					}
				},
				v = e => {
					const t = {};
					return null == e || e.forEach(e => {
						if (null == e ? void 0 : e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};

			function O(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: s,
						tags: o
					} = e;
					if (!(null == o ? void 0 : o.includes(p))) {
						if ((null == o ? void 0 : o.includes(m)) && s && s.length >= 2 && (t.pushcard = h(e)), null == o ? void 0 : o.includes(l)) {
							const {
								text: n,
								id: r
							} = e, a = s || null, i = v(o);
							t.quickCreateV1 = {
								...i,
								id: r,
								text: n,
								active: f(e) && !!a,
								webAssetUrls: a
							}
						}
						if (null == o ? void 0 : o.includes(u)) {
							const r = s || null,
								a = (null === (n = o.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: f(e) && !!r,
								assetUrls: r,
								experimentRequired: a
							}
						}
					}
				}), t
			}
			var x = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				g = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				y = n("./src/reddit/constants/modals.ts");
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, s;
				switch (t.type) {
					case g.s:
						const {
							avatarMarketingEvents: o
						} = t.payload;
						return o ? {
							...d,
							...O(o)
						} : d;
					case x.a:
					case x.b:
					case x.e:
						return (null == e ? void 0 : e.pushcard) ? {
							...e,
							pushcard: {
								...e.pushcard
							}
						} : e;
					case _.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === y.a.SNOOVATAR_MODAL ? {
							...d,
							pushcard: null !== (s = null == e ? void 0 : e.pushcard) && void 0 !== s ? s : null
						} : e;
					default:
						return e
				}
			};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							image: e,
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				marketing: j,
				avatarUser: c,
				randomAvatar: C
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/creatorStats/constants.ts");
			const r = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							postOtherDiscussions: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const i = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						const {
							postStats: n
						} = t.payload;
						return {
							...e, ...n
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
					case o.a:
						const {
							subredditKarma: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				postOtherDiscussions: a,
				postStats: c,
				subredditKarma: l
			})
		},
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.l: {
						const {
							summary: n,
							subreddit: s
						} = t.payload;
						return {
							...e,
							[s.id]: {
								...e[s.id],
								...n
							}
						}
					}
					case s.i:
					case s.f:
					case s.r:
					case s.u:
					case s.A: {
						const {
							response: n
						} = t.payload;
						return {
							...e,
							...n.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/modQueue/constants.ts");
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								targetID: n
							} = t.payload;
							return e.includes(n) ? e : [...e, n]
						}
						case o.p: {
							const {
								targetID: n
							} = t.payload, s = e.indexOf(n);
							return s > -1 && e.splice(s, 1), e
						}
						default:
							return e
					}
				},
				a = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/comment/constants.ts")),
				i = n("./src/reddit/actions/platform.ts"),
				c = n("./src/reddit/actions/post.ts");
			const d = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.q:
					case c.k: {
						const n = t.payload;
						return Object.keys(n).map(t => {
							const s = Object.keys(n[t]);
							let o = !1;
							s.map(e => {
								d.includes(e) && (o = !0)
							}), !e.includes(t) && o && (e = [...e, t])
						}), e
					}
					case o.p: {
						const {
							targetID: n
						} = t.payload;
						return e.includes(n) ? e : [...e, n]
					}
					case i.f:
						return [];
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				toUpdate: r,
				updated: l
			})
		},
		"./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts");
			var r;
			Object(o.a)("SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION");
			! function(e) {
				e[e.Treatment = 0] = "Treatment", e[e.Control = 1] = "Control", e[e.Off = 2] = "Off"
			}(r || (r = {}));
			const a = r.Off;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION":
						return s.c.captureException("PDP Experiment Header should only be set on the server."), e;
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = (e, t) => {
					let {
						post: n
					} = t;
					const s = n.belongsTo.id;
					if (!s) return null;
					const o = e.authorFlair.models[s];
					if (!o) return null;
					const r = n.author;
					return r && o[r] || null
				},
				o = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					return o ? o[s] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				i = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				i = e => {
					var t, n, s, o;
					const a = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (o = null == a ? void 0 : a.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const i = a.assetUrls[0];
					return !a.experimentRequired || Object(r.a)(a.experimentRequired)(e) ? i : null
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/reselect/es/index.js");
			const o = e => !(e.chat.isInited || e.chat.unread.api.pending),
				r = e => e.chat.liveChatTooltipShowState,
				a = Object(s.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)({
				features: {
					creatorStats: o.a
				}
			});
			const c = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.postOtherDiscussions[t]
				},
				d = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.postStats[t]
				},
				l = (e, t) => {
					var n, s, o;
					const r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!r) return;
					const {
						fromComments: a,
						fromPosts: i
					} = r;
					return {
						fromComments: a,
						fromPosts: i
					}
				},
				u = (e, t, n) => {
					const s = Object(a.G)(e, {
						postId: t
					});
					if (!s || s.isSponsored || s.removedByCategory) return !1;
					const o = Object(a.V)(e, {
						postId: t
					});
					if (o && o.isQuarantined) return !1;
					const c = !n && !!Object(r.m)(e, {
						postId: t
					});
					return Object(i.Fb)(e, {
						postId: t
					}) || c
				}
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const a = Object(r.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.qb
			}), e => ({
				bucketed: e === s.Wc.ExpandedSearch || e === s.Wc.CollapsedSearch,
				collapsed: e === s.Wc.CollapsedSearch,
				expanded: e === s.Wc.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				d = e => i.find(t => !!Object(a.a)(c(e, t))),
				l = Object(s.a)(d, e => !!e),
				u = e => {
					const t = d(e);
					return !!t && c(e, t) === o.Q.SkipOnboarding
				},
				m = e => {
					const t = d(e);
					return !!t && c(e, t) === o.Q.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.h
					});
					return t === s.l.VoteCountOnly || t === s.l.CommentCountOnly || t === s.l.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.h
					});
					return t === s.l.VoteCountOnly || t === s.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.h
					});
					return t === s.l.CommentCountOnly || t === s.l.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(i.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(a.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: s.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.l.VoteCountOnly || l === s.l.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(i.d)(e) || !o || o.isSponsored || o.numComments >= c || Object(a.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: s.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.l.CommentCountOnly || l === s.l.VoteAndCommentCount
				},
				f = e => {
					if (Object(a.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.yc
					}) === s.gd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.cf
				}) === s.Od
			}
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(a.a)(i.S, e => !e),
				d = Object(a.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: s.xf
				}), e => e === s.Od),
				l = Object(a.a)(d, e => e.user.experiments.shredditPDPExperimentHeader, (e, t) => e ? t : r.a.Off),
				u = Object(a.a)(l, e => e === r.a.Treatment),
				m = (e, t) => {
					const n = l(t());
					c(t()) && n !== r.a.Off && e.block(e => {
						if ((e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname))
							if (n === r.a.Control) Object(o.d)(t(), s.yf, s.N.Control1);
							else if (n === r.a.Treatment) return window.location.href = e.pathname, !1
					})
				}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Yf,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(s.a)(a, e => e === o.Sf)
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				r = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const s = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				m = e => {
					let {
						award: t,
						size: n,
						prefersReducedMotion: s,
						postOrComment: r
					} = e;
					return t.awardSubType === o.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: s,
							postOrComment: o
						} = e, r = t;
						if ((null == o ? void 0 : o.awardCountsById) && o.awardCountsById[t.id] && t.tiers) {
							const e = o.awardCountsById[t.id];
							r = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return u(r, s, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: s,
						postOrComment: r
					}) : u(t, s, n)
				},
				p = Object(s.a)((e, t) => {
					let {
						awards: n,
						minSize: s,
						postOrCommentId: o
					} = t;
					const a = Object(d.d)(e),
						c = l.find(e => e >= s),
						u = o ? Object(i.G)(e, {
							postId: o
						}) || Object(r.c)(e, {
							commentId: o
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: c,
						prefersReducedMotion: a,
						postOrComment: u
					})), e), {})
				}),
				b = (e, t) => {
					let {
						award: n,
						minSize: s,
						postOrCommentId: o
					} = t;
					return n ? p(e, {
						awards: [n],
						minSize: s,
						postOrCommentId: o
					})[n.id] : void 0
				},
				f = (e, t) => {
					let {
						minSize: n,
						userName: s
					} = t;
					const o = Object(c.Cb)(e, {
						userName: s
					});
					if (o && o.awardedLastMonth && o.awardedLastMonth.topAward) return b(e, {
						award: o.awardedLastMonth.topAward,
						minSize: n
					})
				},
				h = e => {
					const t = Object(a.b)(e),
						n = Object(a.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
			})), n.d(t, "t", (function() {
				return i
			})), n.d(t, "s", (function() {
				return c
			})), n.d(t, "v", (function() {
				return d
			})), n.d(t, "u", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "y", (function() {
				return g
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "z", (function() {
				return y
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return I
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: r.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(s.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				O = e => e.features.goldPurchase.payment.postalCode,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				g = e => e.features.goldPurchase.payment.savedCards,
				_ = e => e.features.goldPurchase.payment.rememberCard,
				y = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				C = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				E = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				S = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				w = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				I = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(o.mg)(t)
				},
				c = Object(s.a)(i, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(o.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = s.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === n
				}),
				p = Object(o.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = s.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === n
				}),
				b = Object(o.a)(r.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(o.a)(d.m, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = e => {
					const t = Object(o.S)(e);
					if (a(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Sb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
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
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"f474c490e3e9"}')
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"f151b4667f32"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"b8368f5028bb"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.52dae180ce80269d8da8.js.map