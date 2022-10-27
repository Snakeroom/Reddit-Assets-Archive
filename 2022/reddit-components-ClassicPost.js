// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.5e2b4d7e36b85e750672.js
// Retrieved at 10/27/2022, 1:50:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost", "Reddit~RpanListingUnit~StandalonePostPage~reddit-components-LargePost~reddit-components-MediumPost"], {
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
					var s, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						v = !i && !u && !m && !p && /linux/i.test(t),
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !O && /[^-]mobi/i.test(t),
						C = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: _ || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: _ || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (s.msedge = e, s.version = g) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || _
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: _ || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, _ && (s.version = _)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, _ && (s.version = _)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && _ && (s.version = _)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : C ? (s.xbox = e, s.osname = "Xbox") : f ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var E = "";
					s.windows ? E = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var j = !s.windows && E.split(".")[0];
					return O || c || "ipad" == o || i && (3 == j || j >= 4 && !x) || s.silk ? s.tablet = e : (x || "iphone" == o || "ipod" == o || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, s) {
					var i = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, o) {
					n = r ? (r = !1, e) : t(n, e, s, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? r : i,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, s)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
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
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s);
			t.a = function(e) {
				var t;
				const {
					source: n,
					isSponsored: s,
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (s) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					c = i || Object(r.D)(e)
				} else c = Object(r.D)(e);
				const d = o.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(r.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(s.useState)(null), [i, c] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), f = Object(s.useCallback)(() => m(!u), [u]), h = Object(s.useMemo)(() => {
					const t = a(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: v,
					styles: g,
					update: _
				} = Object(o.a)(t, i, h);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...v.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: g.popper,
						...v.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: _
				}), [l, v, c, b, p, g, t, n, f, u, _])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/lodash/every.js"),
				s = n.n(r);

			function o(e) {
				let t = null,
					n = null;
				return function() {
					for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
					return null !== t && o.length === t.length && s()(o, (e, n) => e === t[n]) || (t = o, n = e(...o)), n
				}
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.yc, s.ub, s.E, s.U, s.pb, s.Xb],
				i = {
					[s.Xb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.pb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.U]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.E]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.ub]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.yc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[s.Xb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.U]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.E]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.ub]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.yc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.yc]: "",
						[s.ub]: "",
						[s.E]: "",
						[s.U]: "",
						[s.pb]: "",
						[s.Xb]: ""
					};
				let u = d - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? a : i)[r](e).toString()), u -= e * r
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "CREATOR_STATS_PENDING",
				s = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
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
			var r = n("./src/lib/loadableAction/index.ts");
			const s = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(r.a)(s("awardSheetInfoRequested")),
				i = Object(r.a)(s("manageableAwardsRequested")),
				a = Object(r.a)(s("createCommunityAward")),
				c = Object(r.a)(s("createGlobalAward")),
				d = Object(r.a)(s("createModAward")),
				l = Object(r.a)(s("createAwardFailed")),
				u = Object(r.a)(s("createAwardSuccessful")),
				m = Object(r.a)(s("removeCommunityAward")),
				p = Object(r.a)(s("disableAwardinCommunity")),
				b = Object(r.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return j
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts"),
				f = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(r.a)(f.J),
				v = Object(r.a)(f.f),
				g = () => async (e, t) => {
					const r = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(s()(r))
				}, _ = Object(r.a)(f.I), O = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, s) => {
						const a = s(),
							c = t ? Object(u.a)(a, t) : void 0;
						e(_({
							award: c && c.isEnabled ? c : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(l.h)(i.a.GOLD_GILD_MODAL));
						const b = Object(p.O)(a, {
							thingId: r
						});
						let f = null;
						if (b) f = b.id;
						else if (Object(o.a)(r)) {
							const e = Object(m.G)(a, {
								postId: r
							});
							e && (f = e.belongsTo.id)
						}
						f && Object(d.a)(f, r)
					}
				}, x = Object(r.a)(f.e), C = Object(r.a)(f.H), E = () => async (e, t) => {
					const r = t(),
						o = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(x()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(r)), Object(c.b)(c.a.GildingFlow)
				}, j = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
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
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return C
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
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
				v = "REORDER_COLLECTION_PENDING",
				g = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				x = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(r.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(s.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				v = Object(s.a)(h),
				g = (e, t, n) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var b, f, h, v;
					const g = Object(m.b)(s()),
						_ = await (async (e, t, n, r, s) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": s || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(u(), e, t, n, g);
					if (!_.ok) throw new Error("User avatar failed to save");
					return r(Object(p.y)(_.body)), {
						accountIcon: null === (f = null === (b = _.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (h = _.body) || void 0 === h ? void 0 : h.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, _ = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.ob.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (s) {
						o.c.captureException(s)
					}
				}, O = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ob.GET
						}))(r());
						t.ok && e(v(t.body))
					} catch (s) {
						o.c.captureException(s)
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
			var r = n("./src/reddit/actions/login.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(a.l)(n)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(s.g)(i.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: o,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					} = e, h = n();
					o && Object(d.a)(Object(a.g)(o)(h)), Object(c.R)(h) ? await t(Object(s.h)(i.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					})) : await t(Object(r.openLoginModal)())
				}
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, a) => {
					let {
						routes: c
					} = a;
					const d = i();
					Object(r.a)(e, c, d) ? n(Object(o.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Thumbnail/index.tsx"),
				a = n("./src/reddit/components/ClassicPost/index.m.less"),
				c = n.n(a);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: n,
					crosspost: r,
					forceShowNSFW: a,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: b,
					url: f,
					usePreview: h
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.thumbnailContainer, t)
				}, s.a.createElement(i.b, {
					className: Object(o.a)(c.a.thumbnail, n),
					containerClassName: b,
					crosspost: r,
					forceShowNSFW: a,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					url: m ? void 0 : f,
					usePreview: h
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, n) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				ctaExperiment: "_17HI1sHAGvXEekFXNNcehn",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				creatorStatsContainer: "_2I70Qhfz-GbGzP54PWXR3P",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
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
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				shouldShowOverflow: "_3FOlcZoWAvyAWZYSVd8-WD",
				shouldUseRoundedBorder: "_2g8Jz2obQVOELSfntlgVsJ",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/ads/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/getShortenedLink.ts"),
				d = n("./src/lib/hooks/usePrevious.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/CreatorStats/loader.tsx"),
				f = n("./node_modules/react-redux/es/index.js"),
				h = n("./src/reddit/models/Audio/index.ts"),
				v = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/components/Econ/Audio/index.m.less"),
				_ = n.n(g),
				O = n("./src/config.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				E = n("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = () => Math.floor(10 * Math.random()) + 1;
			var k = e => {
					let {
						postId: t
					} = e;
					const n = Object(f.e)(x.eb),
						[o, a] = Object(r.useState)(!1),
						[c, d] = Object(r.useState)(y());
					return Object(r.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							a(!0), e = setTimeout(() => a(!1), 3500), d(y())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), s.a.createElement("div", {
						className: _.a.classicSpeaker
					}, o && s.a.createElement(E.a, {
						ringId: `${t}`,
						className: Object(i.a)(_.a.speakerRings, {
							[_.a.nightMode]: n
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), s.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: _.a.snoovatar,
						src: `${O.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: j._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !o && s.a.createElement("div", {
						className: _.a.muteContainer
					}, s.a.createElement(C.a, {
						className: _.a.muteIcon
					})))
				},
				S = n("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: n,
						postId: r,
						author: o
					} = t;
					return Object(f.e)(v.q) && n.roomStatus === h.b.NotStarted ? s.a.createElement(S.a, {
						postId: r,
						author: o,
						roomId: n.roomId,
						isClassicView: !0
					}) : (null == n ? void 0 : n.isLive) ? s.a.createElement("a", {
						href: `https://www.reddit.com/talk/${n.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: _.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, s.a.createElement(k, {
						postId: r
					})) : s.a.createElement("div", {
						className: _.a.endedClassicContainer
					}, s.a.createElement(C.a, {
						className: _.a.muteIcon
					}))
				},
				T = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = n("./src/reddit/components/ExpandoButton/index.tsx"),
				P = n("./src/reddit/components/Flatlist/index.tsx"),
				N = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				L = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				M = n("./src/reddit/components/ModModeReports/index.tsx"),
				D = n("./src/reddit/components/ModModeReports/helpers.ts"),
				F = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				U = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = n("./src/reddit/components/PostContainer/index.tsx"),
				V = n("./src/reddit/components/PostMeta/index.tsx"),
				G = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Y = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				W = n("./src/reddit/components/PostTitle/index.tsx"),
				q = n("./src/reddit/components/PostTopMeta/index.tsx"),
				z = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				K = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				H = n("./src/reddit/models/Media/index.ts"),
				Q = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				X = n("./src/reddit/constants/postLayout.ts"),
				Z = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ee = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				te = n("./src/reddit/helpers/localStorage/index.ts"),
				ne = n("./src/reddit/helpers/search/renderMedia.tsx"),
				re = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = n("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				ie = n.n(oe),
				ae = n("./src/redditGQL/types.ts"),
				ce = n("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				de = n("./src/reddit/components/ClassicPost/index.m.less"),
				le = n.n(de);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(a.a)(e => {
				const {
					className: t,
					crosspost: n,
					currentUser: a,
					handleVote: f,
					isExpanded: v,
					inSubredditOrProfile: g,
					eventFactory: _,
					flairStyleTemplate: O,
					formatTitle: x,
					hostPostData: C,
					isCheckboxSelected: E,
					isCurrentUserProfilePost: j,
					isFrontpage: y,
					isGalleryTileLayoutDefault: k,
					isLoggedIn: S,
					isOverlay: w,
					imageGalleryCurrentItem: J,
					moderatorPermissions: oe,
					modModeEnabled: de,
					onClickPost: me,
					onIgnoreReports: pe,
					onOpenReportsDropdown: be,
					onSizeChanged: fe,
					poll: he,
					post: ve,
					postId: ge,
					redditStyle: _e,
					scrollerItemRef: Oe,
					showBulkActionCheckbox: xe,
					showEditFlair: Ce,
					showMedia: Ee,
					shouldShowInsightsButton: je,
					subredditOrProfile: ye,
					toggleCheckbox: ke,
					userIsOp: Se,
					shouldShowGalleryTileOption: we,
					showPromotedCTA: Ie,
					showCTAExperimentDesign: Te
				} = e, Ae = Object(l.a)(), Pe = Object(d.a)(v);
				Object(r.useEffect)(() => {
					fe && Pe !== v && fe(ve.id)
				}, [v, fe, ve.id, Pe]);
				const Ne = _e ? void 0 : O,
					Re = n || void 0,
					Le = Object(ee.a)(oe),
					Me = Object(Z.a)(oe),
					De = Object($.a)(oe),
					Fe = de && ee.a,
					Ue = Object(L.a)(ve),
					Be = Object(D.c)(ve),
					Ve = !!ve.media && ve.media.type === H.o.RTJSON,
					Ge = Se && Ve,
					Ye = g && !Ee,
					We = !!ve.media && Object(H.H)(ve.media),
					qe = !!ve.recommendationContext,
					ze = {
						flairStyleTemplate: Ne,
						post: ve,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: j,
						isOverlay: w,
						shouldShowSubscribeButton: !(y && S) || qe && S,
						subredditOrProfile: ye
					},
					Ke = Object(o.t)(ve, J),
					{
						source: He
					} = Ke,
					[Qe, Je] = Object(r.useState)(!1),
					Xe = Object(r.useCallback)(() => {
						Je(!Qe), Object(te.Pb)(), Ae(Object(se.d)(ge))
					}, [Qe, ge, Ae]);
				let Ze = s.a.createElement(Q.a, {
					className: le.a.classicThumbnail,
					crosspost: Re && ve,
					isMeta: ve.isMeta,
					post: Re || ve,
					redditStyle: _e,
					templatePlaceholderImage: Ne && Ne.postPlaceholderImage,
					removeLink: We
				});
				Object(h.c)(ve) && (Ze = s.a.createElement(I, {
					post: ve
				}));
				const $e = s.a.createElement(B.b, {
					className: Object(i.a)(ie.a.classicPostStyles, le.a.postContainer, Object(re.a)(e), {
						[le.a.shouldShowOverflow]: je
					}, t),
					isOverlay: w,
					style: {
						...Object(re.d)(e),
						...Object(re.b)(Ne)
					},
					post: ve,
					onClick: me,
					eventFactory: _
				}, s.a.createElement(Y.a, {
					model: ve,
					handleVote: f,
					showBulkActionCheckbox: xe,
					isCheckboxSelected: E,
					toggleCheckbox: ke,
					flairStyleTemplate: Ne,
					redditStyle: _e,
					postId: ge
				}), s.a.createElement(U.a, {
					className: je ? le.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ne
				}, s.a.createElement(T.a, {
					className: le.a.eventMeta,
					post: ve
				}), s.a.createElement("div", {
					className: le.a.mainBody
				}, s.a.createElement("div", {
					className: Ye ? le.a.expandoContainer : le.a.thumbnailContainer
				}, !Ye && Ze, s.a.createElement(A.a, {
					crosspost: Re,
					className: le.a.rightExpando,
					isExpanded: !!v,
					post: ve,
					useMediaIcons: !1
				})), s.a.createElement("div", {
					className: Object(i.a)(le.a.content, {
						[le.a.showBulkActionCheckbox]: xe
					}),
					"data-click-id": "body"
				}, !!ve.recommendationContext && s.a.createElement(F.a, {
					content: ve.recommendationContext.content,
					layout: X.g.Classic,
					post: ve
				}), s.a.createElement(W.c, {
					className: he ? le.a.titleWithPoll : void 0,
					format: x,
					poll: he,
					post: ve,
					redditStyle: _e,
					size: W.b.Medium,
					titleColor: Ne && Ne.postTitleColor,
					isOverlay: w
				}, ve.source && !Re && !ve.isSurveyAd && s.a.createElement(K.a, {
					href: ve.source.url,
					isSponsored: ve.isSponsored,
					postId: ve.id,
					source: ve.source
				}, Object(c.a)(ve))), s.a.createElement(V.a, ue({
					key: "PostMeta"
				}, ze)), de && Le && Ue && s.a.createElement(R.a, {
					thing: ve
				}), de && Le && Be && s.a.createElement(M.a, {
					onIgnoreReports: pe,
					reportable: ve
				}), Ie && He && He.url && !ve.isSurveyAd && s.a.createElement(u.a, {
					ctaExperimentDesign: Te && "classic",
					className: Object(i.a)(le.a.adLinkWrapper, {
						[le.a.ctaExperiment]: Te
					})
				}, s.a.createElement(m.a, {
					post: ve,
					adLinkContent: Ke,
					ctaExperimentDesign: Te && "classic"
				})), ve.discussionType === ae.m.Chat && s.a.createElement(ce.a, {
					postId: ve.id
				}), s.a.createElement("div", {
					className: le.a.flatlistContainer
				}, s.a.createElement(A.a, {
					className: le.a.leftExpando,
					crosspost: Re,
					isExpanded: !!v,
					post: ve,
					useMediaIcons: !1
				}), s.a.createElement(p.a, {
					className: le.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ne,
					model: ve,
					onVoteClick: f
				}), s.a.createElement(P.a, {
					className: le.a.flatlistSeparator
				}), !ve.isSurveyAd && s.a.createElement(P.c, {
					className: le.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Me,
					hasModPostPerms: Le,
					hasModFullPerms: De,
					hostPostData: C,
					isOverlay: !!w,
					modModeEnabled: de,
					onClickInsightsButton: Xe,
					onIgnoreReports: pe,
					onOpenReportsDropdown: be,
					post: ve,
					shouldShowInsightsButton: je,
					showEditPost: Ge,
					showEditFlair: Ce,
					tooltipType: w ? q.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(G.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe,
						mute: !Fe,
						save: !Fe
					})
				})), s.a.createElement(N.d, null))), Object(ne.a)(ve, le.a, Oe, v, we, k), ye && Qe && s.a.createElement(b.a, {
					className: le.a.creatorStatsContainer,
					post: ve,
					subreddit: ye,
					isOwnProfileStats: !0
				})));
				return s.a.createElement(z.b, null, $e)
			});
			t.default = Object(J.a)(me)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return s.a.createElement(a.a, l({}, n, {
					className: Object(o.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(d.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(a.b)(n) ? d.a.customDownvoteStyles : void 0
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.e, null, o.a.createElement(a.i, null, o.a.createElement(d.a, null, o.a.createElement(a.q, null, e.headerText || r.fbt._("Confirm", null, {
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
			}, e.cancelActionText || r.fbt._("Cancel", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/hooks/usePrevious.ts"),
				i = n("./src/realtime/GQLSubscription/async.tsx"),
				a = n("./src/reddit/hooks/useIntersectionObserver.ts");
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
					queryVariables: g,
					shouldDisjointAnimation: _,
					subsequentRecurringDelay: O
				} = e, [x, C] = Object(r.useState)(!1), [E, j] = Object(r.useState)(!0), [y, k] = Object(r.useState)([]), [S, w] = Object(r.useState)(c(p).reverse()), I = Object(r.useRef)(!1), T = Object(r.useRef)(null), A = Object(r.useRef)(e => {}), P = Object(r.useRef)();
				A.current = Object(r.useCallback)(e => {
					let n = e || d();
					const r = [...S].reverse().join("");
					let s = parseInt(r) + n;
					s > t && (n = t - parseInt(r), s = t);
					const o = c(s).reverse();
					C(!1), k(S), w(o), j(!1), P.current = setTimeout(() => {
						C(!0)
					}, 0)
				}, [t, d, S]);
				const N = Object(r.useRef)(() => {}),
					R = Object(r.useRef)(),
					L = Object(r.useRef)();
				N.current = Object(r.useCallback)(() => {
					L.current = setTimeout(() => {
						A.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && N.current()
					}, O())
				}, [t, O, y]);
				const M = Object(r.useRef)(0),
					D = Object(r.useRef)(!1),
					F = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, r = 1 !== n;
							t ? (D.current = !0, I.current || (I.current = !0, R.current = setTimeout(() => {
								A.current(), N.current()
							}, u())), M.current > 0 && (A.current(M.current), M.current = 0)) : r && (D.current = !1)
						})
					}, []);
				Object(a.a)(T, F);
				const [U, B] = Object(r.useState)(!1), V = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? B(!0) : r && B(!1)
					})
				}, []), G = Object(r.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(T, V, G.current);
				const Y = Object(o.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== Y && Y !== t) {
						const e = t - Y;
						D.current ? A.current(e) : M.current += e
					}
					return () => {
						clearTimeout(R.current), clearTimeout(L.current), clearTimeout(P.current)
					}
				}, [t]);
				const W = Object(r.useCallback)(() => j(!0), [j]),
					q = 0 === y.length,
					z = E || q,
					K = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, n));
				return s.a.createElement(s.a.Fragment, null, !b && s.a.createElement("div", {
					className: l.a.countAnimation
				}, S.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const r = Math.abs(t),
							s = [n];
						if (n === r) return s;
						let o = !0;
						for (; o;) ++n > 9 && (n = 0), s.push(n), n === r && (o = !1);
						return s
					})(y[t] || 0, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: W,
						style: x && y.length > 0 && !E ? {
							transform: `translateY(-${_&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(_?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, z ? s.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const r = 0 === t || t === n.length - 1;
						if (!_ || _ && r) return s.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), s.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...S].reverse().join(""))), s.a.createElement("span", {
					ref: T
				}), U && s.a.createElement(i.a, {
					variables: g,
					onData: b ? m : f,
					queryKey: v,
					uniqueKey: K.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = 16374492e5,
				o = 45 * r.E;
			var i;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(i || (i = {}));
			const a = e => {
					return e < Date.now() - o
				},
				c = e => e > s,
				d = (e, t, n, r) => {
					if (!n && !c(e.created)) return i.NotAvailable;
					if (n && !c(e.created) || a(e.created)) return i.Expired;
					if (n && r) return i.Quarantined;
					if (!t) return i.NotAvailableYet;
					const {
						shareAllCountTotals: s,
						shareCopyCountTotals: o,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == s ? void 0 : s.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? i.NotAvailableYet : i.Available : i.NotAvailableYet
				}
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
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, s.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), s.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), s.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${n})`,
					strokeWidth: "2"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${n}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${n})`
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${n}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t,
					ringId: n
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${n})`,
					strokeWidth: "0.5"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${n}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, n) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				a = n.n(i),
				c = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = n("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: n,
					ringId: r,
					isAnimated: i = !1
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(a.a.ringsContainer, t, i ? a.a.animated : "")
				}, s.a.createElement(c.a, {
					ringId: r,
					className: Object(o.a)(a.a.innerRing, `${n}Inner`)
				}), s.a.createElement(d.a, {
					ringId: r,
					className: Object(o.a)(a.a.middleRing, `${n}Middle`)
				}), s.a.createElement(l.a, {
					ringId: r,
					className: Object(o.a)(a.a.outerRing, `${n}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, n) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/helpers/trackers/talkCreation.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				p = n("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				b = n.n(p),
				f = n("./src/config.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/hooks/useGqlContext.ts");
			var O = e => s.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				x = n("./src/reddit/endpoints/talk/index.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/redditGQL/types.ts");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = () => s.a.createElement("span", {
				className: b.a.MicrophoneIcon
			}, s.a.createElement(O, null));
			var S = e => {
				let {
					roomId: t
				} = e;
				const n = Object(o.e)(u.eb),
					[a, c] = Object(r.useState)(!1),
					l = Object(o.d)(),
					m = Object(h.b)(),
					p = Object(_.a)();
				return s.a.createElement(v.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: a ? g.a : k,
					iconClassName: a ? b.a.loadingIcon : "",
					className: Object(i.a)(b.a.StartTalkButton, {
						[b.a.isNightMode]: n
					}),
					priority: v.c.Secondary,
					size: v.d.M,
					iconPosition: v.h.L,
					disabled: a,
					text: s.a.createElement("span", {
						className: b.a.StartTalkButtonText
					}, y._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						m(Object(d.a)()), c(!0);
						const e = await Object(x.l)(p(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return l(Object(C.f)({
							kind: E.b.Error,
							text: x.a[j.k.ServiceError]
						})), void c(!1);
						const n = Object(x.h)(e.body);
						if (null == n ? void 0 : n.errorState) return l(Object(C.f)({
							kind: E.b.Error,
							text: x.a[n.errorState.code] || x.a[j.k.ServiceError]
						})), void c(!1);
						(null == n ? void 0 : n.okState) && (window.location.href = `${f.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: n,
					roomId: p,
					isClassicView: f = !1
				} = e;
				const h = Object(o.d)(),
					v = Object(l.a)(),
					g = Object(o.e)(u.G),
					_ = Object(o.e)(u.eb),
					O = Object(o.e)(e => Object(u.Eb)(e, {
						postId: n
					})),
					x = Object(o.e)(e => Object(u.Bb)(e, {
						userName: t
					}));
				Object(r.useEffect)(() => {
					n && v && v(Object(d.f)(n))
				}, [v, n]), Object(r.useEffect)(() => {
					x || h(Object(a.d)(t))
				}, [h, t, n, x]);
				const C = () => s.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(i.a)(b.a.hostAvatar, {
						[b.a.classicView]: f
					})
				}, s.a.createElement("div", {
					className: b.a.snoovatar
				}, s.a.createElement(c.a, {
					userName: t,
					isNSFW: !g,
					className: b.a.isImage
				})), s.a.createElement(m.a, {
					ringId: `${n}`,
					className: Object(i.a)(b.a.hostRings, {
						[b.a.nightMode]: _
					}),
					ringClassName: "hostRing"
				}));
				return f ? s.a.createElement(C, null) : s.a.createElement("div", {
					className: b.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, s.a.createElement("div", {
					className: b.a.upcomingTalkContainer
				}, s.a.createElement(C, null), s.a.createElement("div", {
					className: b.a.upcomingTalkInfo
				}, s.a.createElement("div", {
					className: b.a.upcomingTalkLabel
				}, w._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), s.a.createElement("div", {
					className: b.a.upcomingTalkHost
				}, "u/", t), O && p && s.a.createElement(S, {
					roomId: p
				}))))
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => i.a.createElement(a.i, {
				className: l.a.modalHeader
			}, i.a.createElement(a.q, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || s.a
			}, i.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = n.n(s);
			const i = r.a.div("Wrapper", o.a);
			t.a = i
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, r.fbt._("No flair selected", null, {
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
			var r = n("./node_modules/lodash/once.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = s()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(a.a)({
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
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
				g = n("./src/reddit/controls/RadioInput/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				x = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				j = n.n(E);
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(O.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: s
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), a = !!n && i.some(e => e.id === n);
					return o.a.createElement("div", {
						className: j.a.container
					}, o.a.createElement("div", {
						className: j.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: j.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), o.a.createElement(C.a, {
						className: j.a.searchIcon
					})), o.a.createElement(g.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, i.map((e, t) => {
						const r = Object(u.c)(e),
							s = n === e.id || !a && 0 === t;
						return o.a.createElement(_.a, {
							className: j.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, o.a.createElement(h.b, {
							className: j.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(x.a, {
							className: j.a.pencil
						}))
					})))
				}
			}
			var k = Object(v.c)(y),
				S = n("./src/reddit/components/FlairSearch/index.m.less"),
				w = n.n(S);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				A = Object(i.b)(T);
			t.a = A(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: s,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, v = Object(p.a)(), g = d && n && n.templateId && d[n.templateId] || void 0, _ = Object(f.a)(), O = n || I(g);
				return o.a.createElement("div", {
					className: Object(c.a)(s, w.a.container)
				}, d && l && o.a.createElement(k, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							v(Object(m.b)({
								userFlair: t
							})), i(n)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), O && g && (h || g.textEditable) && o.a.createElement("div", {
					className: w.a.flairEditSection
				}, o.a.createElement("div", {
					className: w.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: w.a.restrictionHintText
				}, Object(u.k)(g)), o.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(n)
					},
					subredditId: a
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.memo((function(e) {
				let {
					visible: t,
					...n
				} = e;
				const [i, d] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? s.a.createElement("div", c({
					className: Object(o.a)(a.a.tooltip, n.className, {
						[a.a.visible]: i
					})
				}, n.popperProps), n.children, i && s.a.createElement("div", c({
					className: a.a.arrow
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
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = n.n(a);
			const d = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? s.fbt._("{userCount} here now", [s.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : s.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = n("./src/lib/LiveLabel/index.m.less"),
				u = n.n(l);
			const m = () => i.a.createElement("span", {
				className: u.a.LiveLabel
			}, s.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = n("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = n.n(p);
			const f = e => {
				let {
					userCount: t = 0,
					className: n
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(b.a.liveParticipation, n)
				}, i.a.createElement(m, null), i.a.createElement(d, {
					userCount: t
				}))
			};
			var h = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/reddit/selectors/chat.ts"),
				g = n("./src/reddit/selectors/experiments/chat.ts");
			const _ = e => {
				let {
					postId: t,
					className: n
				} = e;
				const r = Object(h.e)(e => Object(v.a)(e, t));
				return Object(h.e)(g.e) ? i.a.createElement(f, {
					userCount: r,
					className: n
				}) : null
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = n.n(l);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: r
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : s.a.createElement(a.b, {
					className: Object(o.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === c.g.Classic,
						[u.a.compactLayout]: n === c.g.Compact,
						[u.a.largeLayout]: n === c.g.Large
					}),
					content: t,
					rtJsonElementProps: m(r),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(s.d, {
					seconds: e.poll.endsAt / r.Xb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return s.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, n),
					style: Object(a.c)(r, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/components/PostContent/viewCount.m.less"),
				m = n.n(u);
			t.a = e => {
				let {
					className: t,
					post: n,
					showViewCount: s
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: r.fbt._("{percent upvoted}% Upvoted", [r.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: r.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [r.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(n), b = s && !!n.viewCount, f = Object(i.e)(e => Object(l.a)(e, n.id)), h = Object(i.e)(e => Object(l.c)(e, n.id)), v = Object(d.c)(n, h), g = f && v === d.b.Available;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.viewCounts, t)
				}, b && o.a.createElement("span", null, p), b && !!n.upvoteRatio && o.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !g && o.a.createElement("span", null, u))
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
			var r = n("./node_modules/lodash/isEqual.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/flair.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
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
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
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
				} : Object(i.n)(t) && !Object(i.r)(r) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : s()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: v,
					isVoteCountAnimation: g,
					postId: _,
					shouldShowUpvoteRatioOnHover: O
				} = e, x = `upvote-button-${t.id}${v?"-overlay":""}`;
				return s.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, r && s.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), s.a.createElement(a.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: x,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: p,
					postId: _,
					scoreClassName: Object(o.a)(m.a.score, {
						[m.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
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
				return D
			})), n.d(t, "a", (function() {
				return Q
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
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
				g = n("./src/reddit/helpers/path/index.ts"),
				_ = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = n("./src/reddit/hooks/useClickSourceData.ts"),
				x = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				C = n("./src/reddit/hooks/usePostContext.ts"),
				E = n("./src/reddit/hooks/useTheme.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/lib/getShortenedLink.ts"),
				T = n("./src/reddit/components/FlairWrapper/index.tsx"),
				A = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				R = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = n.n(R);
			const M = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, F = Object(a.b)(M)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(x.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, L.a.proposalMetaData)
					}, i.a.createElement("span", null, A.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [A.fbt._param("count", Object(P.a)(r)), A.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(N.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				U = n("./src/reddit/components/SEOTitle/index.tsx"),
				B = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/telemetry/models/Outbound.ts"),
				W = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				q = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = n("./src/reddit/components/PostTitle/index.m.less"),
				K = n.n(z);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(D || (D = {}));
			const Q = e => {
					let {
						size: t,
						titleColor: n,
						titleType: r,
						nowrap: s,
						children: o,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(E.a)();
					let m = "";
					switch (t) {
						case D.ExtraLarge:
							m = K.a.ExtraLarge;
							break;
						case D.Large:
							m = K.a.Large;
							break;
						case D.Medium:
							m = K.a.Medium;
							break;
						case D.Small:
							m = K.a.Small;
							break;
						case D.ExtraSmall:
							m = K.a.ExtraSmall;
							break;
						case D.Metadata:
							m = K.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(K.a.Title, a, m, {
							[K.a.isNoWrap]: s,
							[K.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(w.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, r ? i.a.createElement(U.b, {
						type: r
					}, o) : o)
				},
				J = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...o
					} = e;
					return i.a.createElement(c.a, H({}, o, {
						className: Object(u.a)(t, K.a.styledLink, {
							[K.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(K.a.titleContainer, r, {
							[K.a.isNoWrap]: n,
							[K.a.isVisitedEnabled]: !t
						})
					}, s)
				},
				Z = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(p.q)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: V.e,
					shouldOpenPostInNewTab: G.kb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t, s = Object(a.d)(), o = Object(O.a)(), c = Object(a.e)(B.b), d = Object(a.e)(B.c), u = e => {
						!c && !d || t.media && Object(k.H)(t.media) || (e.preventDefault(), s(Object(v.ab)(Object(g.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(X, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const s = t.media && Object(k.H)(t.media) ? Object(_.c)(t.id, n.name) : t.permalink,
							a = e.isCommentPermalink ? Object(g.b)(s) : Object(h.a)(s, void 0, o);
						return i.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? i.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
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
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
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
					}, t && i.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: r
					} = e, {
						isSponsored: s
					} = r, o = e.isCommentsPage ? Y.SourceElement.PostLink : Y.SourceElement.ListingPostLink;
					if (Object(x.a)()) return null;
					if (n && r.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== D.Large && !r.isSponsored && !(r.media && Object(k.H)(r.media)) && (r.source || r.media && (r.media.type === k.o.GIFVIDEO || r.media.type === k.o.IMAGE || r.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(k.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: o
						}, Object(I.a)(r), !r.isSponsored && i.a.createElement(j.a, {
							name: "external_link",
							className: K.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: o
					}, Object(I.a)(r), !r.isSponsored && i.a.createElement(j.a, {
						name: "external_link",
						className: K.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${K.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(w.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(w.a)(this.props).titleText,Object(w.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(s.c)(.45,Object(w.a)(this.props).bodyText,Object(w.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: s,
						isOverlay: o,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = n === y.b.Left, b = Object(T.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(W.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), v = !o && !s && !t, g = v && f && f.length > 0, _ = v && h && h.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(K.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": q.a.TITLE,
						onClick: m
					}, !d && g && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(S.b)(c) && i.a.createElement($, H({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && i.a.createElement(F, {
						className: K.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(te, this.props), _ && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: K.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.eb)(),
					n = Object(p.w)(t),
					r = Object(C.a)(),
					s = Object(a.e)(s => Z(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					o = Object(E.a)(),
					c = Object(m.b)();
				return r ? i.a.createElement(ne, H({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: o,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(s);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
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
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[s({
						type: t
					})][n]()
				}
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
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
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
				g = n("./src/reddit/components/VerticalVotes/index.m.less"),
				_ = n.n(g);
			const O = Object(a.c)({
					isNightMode: h.eb,
					isAnimatingUpvotePostId: f.k
				}),
				x = Object(i.b)(O),
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class j extends o.a.Component {
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
							isNightMode: s,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: g,
							postId: O
						} = e,
						x = C(e),
						j = E(e),
						y = g.voteState,
						k = i === O;
					return o.a.createElement("div", {
						className: Object(c.a)(_.a.votesContainer, e.className),
						id: `vote-arrows-${g.id}`,
						ref: h
					}, x ? o.a.createElement(m.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": y === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: s,
						onClick: this.onUpvote,
						voteState: y
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": y === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[_.a.bounceUp]: k
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: y
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(c.a)(_.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: y,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: O
					}), j ? o.a.createElement(m.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": y === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: s,
						onClick: this.onDownvote,
						voteState: y
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": y === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: y
					})))
				}
			}
			const y = Object(d.a)(x(j));
			t.a = y
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				a = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/contexts/Post/index.tsx"),
				u = n("./src/reddit/selectors/activeModalId.ts"),
				m = n("./src/reddit/selectors/chatPost.ts"),
				p = n("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/showPromotedCTA.ts"),
				g = n("./src/reddit/selectors/user.ts");
			const _ = {
					autoplayPref: g.c,
					activeModalId: u.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: g.R,
					showPromotedCTA: v.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.U,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.W,
					showCTAExperimentDesign: p.a
				},
				O = Object(r.b)(() => Object(s.c)(_), (e, t) => {
					let {
						postId: n
					} = t;
					return {
						handleVote: t => {
							const r = t === a.a.upvoted ? Object(o.jb)(n) : Object(o.v)(n);
							e(r)
						},
						onIgnoreReports: () => e(Object(o.fb)(n)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				}, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(O(Object(c.b)(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: i.kb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "reddit",
				s = "reddit.ready",
				o = "reddit.urlChanged"
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
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
					return e.hidden ? null : s.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(a.a, {
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
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/keycodes.ts");
			class i extends s.a.Component {
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
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: r
						} = this.state;
						if (t) return;
						const s = e.key === o.b.ArrowUp,
							i = e.key === o.b.ArrowDown;
						if (s || i) {
							const t = this.getValues();
							if (!t.length) return;
							const o = r ? t.indexOf(r) : 0,
								i = t[((s ? o - 1 : o + 1) + t.length) % t.length];
							n(i), this.setState({
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
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (n, r) => {
						const o = 0 === r,
							i = n.props.value === t,
							a = null !== t ? i ? 0 : -1 : o ? 0 : -1;
						return s.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: a
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				x = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				E = n("./node_modules/reselect/es/index.js"),
				j = n("./src/reddit/controls/Score/index.m.less"),
				y = n.n(j);
			const k = {
					placement: "right"
				},
				S = e => e.voteState === _.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === _.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(h.a)(Object(f.a)(e)),
				w = Object(E.c)({
					locale: e => Object(x.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: n,
							postId: r
						} = t;
						if (n && r) return Object(C.G)(e, {
							postId: r
						})
					}
				}),
				I = () => 0,
				T = Object(d.b)(w),
				A = Object(o.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : S(e)
						},
						{
							score: n,
							postId: o = "",
							locale: f,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: g,
							shouldShowUpvoteRatioOnHover: _,
							post: x
						} = e,
						C = Object(d.d)(),
						E = null == f ? void 0 : f.startsWith("en"),
						j = e.isScoreHidden ? E ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(i.b)(n),
						w = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && C(Object(l.H)({
								postId: o,
								delta: t
							}))
						}, [C, o]),
						T = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						A = !e.isScoreHidden && h && n < O.a,
						P = Object(v.a)(k),
						N = n < 0 ? 0 : n;
					return c.a.createElement("div", {
						className: Object(s.a)(y.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: _ ? P.show : void 0,
						onMouseLeave: _ ? P.hide : void 0,
						ref: _ ? P.target.ref : void 0
					}, (A || g) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: N,
						countToUpperBound: N,
						initialDelay: I,
						subsequentRecurringDelay: I,
						incrementDelta: I,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: T.current,
						onDataCB: w,
						isLoadTestOnly: g && !A
					})), !A && j, _ && x && c.a.createElement(m.a, P, c.a.createElement(p.a, {
						className: y.a.viewCount,
						post: x,
						showViewCount: !1
					})))
				});
			t.a = T(A)
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return g
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return I
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				a = n("./src/reddit/models/Subreddit/index.ts"),
				c = n("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				d = n("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = n("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				u = n("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				m = n("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				p = n("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = n("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				f = n("./src/redditGQL/operations/ReportTalk.json"),
				h = n("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				v = n("./src/redditGQL/types.ts");
			const g = (e, t) => Object(o.a)(e, {
					...f,
					variables: t
				}),
				_ = async (e, t) => {
					const n = await Object(o.a)(e, {
						...u,
						variables: t
					});
					return !!Object(i.c)(n) && (n.body.data.subredditInfoById.allowedPostTypes || []).includes(v.I.Talk)
				}, O = async (e, t) => {
					var n, r;
					const s = await Object(o.a)(e, {
						...m,
						variables: t
					});
					return !!Object(i.c)(s) && (null !== (r = null === (n = s.body.data.profileByName) || void 0 === n ? void 0 : n.allowedPostTypes) && void 0 !== r ? r : []).includes(v.I.Talk)
				}, x = async e => {
					var t;
					const n = await Object(o.a)(e, l);
					return Object(i.c)(n) && null !== (t = n.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, C = (e, t, n) => t.type === a.g.User ? Object(o.a)(e, {
					...c,
					variables: n
				}) : Object(o.a)(e, {
					...d,
					variables: {
						...n,
						subredditId: t.id
					}
				}), E = (e, t, n) => t.type === a.g.User ? Object(o.a)(e, {
					...b,
					variables: {
						input: n
					}
				}) : Object(o.a)(e, {
					...p,
					variables: {
						input: {
							...n,
							subredditId: t.id
						}
					}
				}), j = () => Object(s.a)(), y = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, k = {
					[v.k.ServiceError]: r.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[v.k.UserNotAuthorized]: r.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[v.k.RoomLimitExceeded]: r.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[v.k.ConcurrentRoomLimitExceeded]: r.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[v.k.SubredditRoomLimitExceeded]: r.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, S = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, w = {
					[v.K.ServiceError]: r.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[v.K.UserNotAuthorized]: r.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, I = (e, t) => Object(o.a)(e, {
					...h,
					variables: t
				})
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} = e;
				return t && n && r && s ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: s
					} of t) n.push(Object(r.f)(s));
				return n
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.L.NO_STRIPE_SUBSCRIPTION:
							case r.L.USER_DOESNT_EXIST:
							case r.L.USER_REQUIRED_ERROR:
							case r.L.VALIDATION_ERROR:
								return e;
							case r.L.NO_USER:
							case r.L.NO_TEXT:
							case r.L.NO_URL:
								return r.L.VALIDATION_ERROR;
							case r.L.CREDIT_CARD_FAILURE:
							case r.L.CREDIT_CARD_FAILURE_GENERIC:
								return r.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.L.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, n, r, o, i) => r ? e.crosspostRootId ? s.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, n, o, i)) : a(e, n, o, i) : null,
				a = (e, t, n, r) => s.a.createElement(o.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: r,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0
				})
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
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
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
				b = e => Object(r.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(o.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
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
				return g
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "k", (function() {
				return C
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/models/Event.ts");
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
					const n = Object(i.b)(e, {
							commentId: t
						}),
						s = n && Object(r.a)(n.postId);
					if (!n || !s) return null;
					const c = {
							commentId: t,
							commentsPageKey: s
						},
						d = t && s && Object(o.j)(e, c) || 0;
					return Object(a.z)(e, void 0, {
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
					post: Object(a.K)(n, t),
					source: c.b.ChatView,
					subreddit: Object(a.kb)(n)
				}),
				p = (e, t) => n => ({
					...d(n, t),
					source: "live_post",
					action: s.c.CLICK,
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
					action: s.c.VIEW,
					noun: "last_message"
				}),
				f = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.SUBMIT,
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
					action: s.c.CLICK,
					noun: "comment",
					actionInfo: Object(a.d)(t, {
						pageType: "user_mention",
						reason: "live_post",
						type: "live_post"
					})
				}),
				v = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.VIEW,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				g = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.CLOSE,
					noun: "warning",
					post: Object(a.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				_ = e => t => ({
					...d(t, e),
					source: "global",
					action: s.c.VIEW,
					noun: "screen",
					actionInfo: {
						reason: "live_post",
						pageType: "given_awards_list"
					},
					listing: l(t, e)
				}),
				O = (e, t, n) => r => ({
					...d(r, t),
					source: c.b.Chat,
					action: s.c.CLICK,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				x = (e, t, n) => r => ({
					...d(r, t),
					source: c.b.Chat,
					action: s.c.DELETE,
					noun: "reaction",
					actionInfo: {
						pageType: n,
						reason: u(e)
					},
					chat: {
						type: "live_post"
					},
					listing: l(r, t)
				}),
				C = () => e => {
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
						action: s.c.VIEW,
						noun: "hint"
					}
				}
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
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...s.o(e),
					screen: s.cb(e),
					subreddit: s.kb(e),
					userSubreddit: s.ub(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.f.Moderator,
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
				u = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => s => ({
					...a(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
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
				p = (e, t, n) => r => ({
					...a(r),
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
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => r => ({
					...a(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: s.U(r, t),
					subreddit: s.lb(r, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				v = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
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
			var r = n("./src/reddit/components/CreatorStats/helpers.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
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
					...Object(o.o)(n),
					action: s.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.kb)(n),
					post: Object(o.K)(n, e),
					userSubreddit: Object(o.ub)(n),
					actionInfo: Object(o.d)(n, {
						reason: i(t)
					})
				}),
				c = (e, t) => n => ({
					...Object(o.o)(n),
					action: s.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.K)(n, t),
					subreddit: Object(o.kb)(n),
					userSubreddit: Object(o.ub)(n)
				}),
				d = e => {
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
					...Object(o.o)(t),
					action: s.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(o.d)(t, {
						pageType: "profile"
					}),
					post: Object(o.K)(t, e, void 0, 0),
					profile: Object(o.T)(t)
				}),
				u = (e, t, n) => r => ({
					...Object(o.o)(r),
					action: s.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(o.d)(r, {
						reason: d(t)
					}),
					post: Object(o.K)(r, e, void 0, n)
				}),
				m = (e, t, n, r, i, a) => c => ({
					...Object(o.o)(c),
					action: s.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.K)(c, e, void 0, a),
					subreddit: Object(o.kb)(c),
					outbound: {
						postId: n,
						url: t,
						subredditId: r,
						subredditName: i
					}
				}),
				p = (e, t, n) => r => ({
					...Object(o.o)(r),
					action: s.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(r, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(o.K)(r, e, void 0, n),
					subreddit: Object(o.kb)(r)
				})
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return u
			})), n.d(t, "clickGildEvent", (function() {
				return b
			})), n.d(t, "clickRpanGiveAward", (function() {
				return f
			})), n.d(t, "clickAddAward", (function() {
				return h
			})), n.d(t, "clickHideAward", (function() {
				return v
			})), n.d(t, "clickConfirmHideAward", (function() {
				return g
			})), n.d(t, "clickCancelHideAward", (function() {
				return _
			})), n.d(t, "clickAwardReportFlow", (function() {
				return x
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return C
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickReportAward", (function() {
				return k
			})), n.d(t, "clickCancelReportAward", (function() {
				return S
			})), n.d(t, "clickConfirmReportAward", (function() {
				return w
			})), n.d(t, "viewGildModalEvent", (function() {
				return I
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return A
			})), n.d(t, "clickMessageInputEvent", (function() {
				return P
			})), n.d(t, "typeMessageInputEvent", (function() {
				return N
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return R
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return L
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return F
			})), n.d(t, "clickNextButtonEvent", (function() {
				return U
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return B
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return V
			})), n.d(t, "clickFilterEvent", (function() {
				return G
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return Y
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/models/GoldPurchase.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const s = t && Object(o.f)(e, {
						commentId: t
					});
					return {
						...i.o(e),
						actionInfo: i.d(e, {
							reason: s ? "live_post" : void 0,
							...n
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
						listing: t ? Object(r.i)(e, t) : void 0
					}
				},
				b = (e, t) => n => ({
					...p(n, e, t),
					source: Object(d.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: i.r(n)
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
				v = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: m(e)
				}),
				g = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: m(e)
				}),
				_ = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				O = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				x = O("award_hovercard_report"),
				C = O("cancel_award_hovercard_report"),
				E = O("flag_award"),
				j = O("cancel_flag_award"),
				y = O("confirm_flag_award"),
				k = O("report_community_award"),
				S = O("cancel_report_community_award"),
				w = O("confirm_report_community_award"),
				I = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				T = (e, t, n) => r => ({
					...p(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: m(e, n)
				}),
				A = (e, t) => n => ({
					...p(n, t),
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
				N = e => t => ({
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
				D = (e, t) => n => ({
					...p(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(d.a)(e) ? "comment" : "post",
						...m(t)
					}
				}),
				F = e => t => ({
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
						awardeeKarmaEarned: n,
						awarderKarmaEarned: r,
						numberCoins: s,
						thingId: o
					} = e;
					return e => ({
						...p(e, o),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(d.a)(o) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: r,
							numberCoins: s,
							...m(t)
						}
					})
				},
				G = e => t => ({
					...p(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				Y = () => e => ({
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
				return g
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return j
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
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
					} = t, f = !!n, h = o.b(e), v = h ? Object(u.getAwardTypeFromAward)(h) : null, g = f ? v : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, _ = n ? Object(p.a)(n) ? "comment" : "post" : void 0, O = l || a.t(e), x = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === O)[0], C = t.offerContext || (h && 0 === h.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(x, f)), E = x ? Math.round(1e4 * (x.baselinePennies - x.pennies) / x.baselinePennies) / 100 : 0, j = x ? Math.round(1e4 * (x.coins - x.baselineCoins) / x.coins) / 100 : 0, y = x ? x.baselinePennies !== x.pennies ? `${E}_percent_price` : x.baselineCoins !== x.coins ? `${j}_percent_bonus` : void 0 : void 0, k = g === d.GoldPurchaseType.Premium ? r.Db : x ? x.pennies : void 0;
					return {
						...c.o(e),
						comment: n ? c.h({
							state: e,
							commentId: n
						}) : null,
						correlationId: a.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.K(e, n) : null,
						screen: c.cb(e),
						subreddit: n ? c.kb(e) : null,
						goldPurchase: {
							...h ? Object(b.a)(h) : null,
							type: g,
							gildedContent: f,
							contentType: _,
							numberCoins: x ? x.coins : void 0,
							offerContext: C,
							offerType: y
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
				h = (e, t, n) => r => ({
					...f(r, {
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
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				_ = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				x = (e, t) => n => ({
					...f(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				C = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				E = (e, t, n) => r => {
					const s = f(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
							source: e ? d.GiveGold : a.o(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				j = e => t => {
					var n;
					const r = f(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
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
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.T(e),
					screen: a.cb(e),
					subreddit: a.kb(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(i.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(r),
					post: a.K(r, e)
				}),
				l = (e, t, n, r) => s => {
					const i = n ? a.h({
							state: s,
							commentId: n
						}) : null,
						{
							sortToUse: c
						} = Object(o.a)(s, e);
					return {
						...d(e, t, r)(s),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const r = a.k(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(i.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...d(e, t)(n),
					...a.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...c(t),
					post: a.k(t),
					userSubreddit: a.ub(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return i
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.cb)(e),
					profile: Object(s.T)(e),
					subreddit: Object(s.kb)(e),
					userSubreddit: Object(s.ub)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					media: {
						mimetype: Object(s.j)(n, t)
					},
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.CLICK,
					noun: e,
					post: Object(s.K)(n, t),
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(s.K)(n, t),
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					...o(n)
				}),
				b = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					post: Object(s.K)(n, t),
					...o(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					...o(n)
				}),
				h = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.K)(n, t),
					subreddit: Object(s.nb)(n, t)
				}),
				v = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.h)({
						state: n,
						commentId: t
					}),
					post: Object(s.K)(n, t),
					subreddit: Object(s.nb)(n, t)
				}),
				g = (e, t, n, r) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.K)(o, n),
					subreddit: Object(s.nb)(o, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(s.h)({
							state: o,
							commentId: n
						})
					}
				}),
				_ = () => e => ({
					...o(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
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
				return g
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "v", (function() {
				return A
			})), n.d(t, "w", (function() {
				return P
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.o(e),
					screen: s.cb(e),
					subreddit: s.kb(e),
					userSubreddit: s.ub(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.q)(e)
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
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: s.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				x = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				C = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : x[e],
					...o(t)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				j = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(r.m)(e),
					...o(i),
					actionInfo: s.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				w = () => (e, t) => ({
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
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				A = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				P = () => (e, t) => {
					const n = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
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
				return g
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "o", (function() {
				return I
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = {
					goldPurchase: {
						offerContext: r.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.o(t)
					};
					return Object(s.a)(t) && Object.assign(n, a), n
				},
				d = (e, t) => n => {
					const {
						id: r
					} = Object(i.Bb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.o(n),
						snoovatar: {
							userGenerated: r
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
				h = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.o(n),
					snoovatar: o.ib(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				v = h("view"),
				g = h("click"),
				_ = h("dismiss"),
				O = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...o.o(r),
					snoovatar: o.ib(r)
				}),
				x = O("anniversary_achievement", "view", "anniversary_achievement"),
				C = O("anniversary_achievement", "click", "close"),
				E = O("anniversary_achievement", "click", "equip"),
				j = e => () => t => ({
					...o.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				y = j("view"),
				k = j("click"),
				S = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...o.o(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.ib(r)
				}),
				w = e => S("onboarding", "click", e),
				I = () => S("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/talkCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/lib/eventTools/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/postCreations.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...i.o(e),
					source: "global",
					action: s.c.VIEW,
					noun: s.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_room"
					}
				}),
				c = () => e => ({
					...i.o(e),
					source: "global",
					action: s.c.VIEW,
					noun: s.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_topic_picker"
					}
				}),
				d = () => e => ({
					...i.o(e),
					source: "liveaudio",
					action: s.c.CLICK,
					noun: "go_live",
					subreddit: i.kb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e),
						topicIds: Object(o.ub)(e).topics.map(e => e.id)
					}
				}),
				l = () => e => ({
					...i.o(e),
					source: "liveaudio",
					action: s.c.CLICK,
					noun: "schedule",
					subreddit: i.kb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e),
						topicIds: Object(o.ub)(e).topics.map(e => e.id)
					}
				}),
				u = () => e => ({
					...i.o(e),
					source: "post_composer",
					action: s.c.CLICK,
					noun: "overflow",
					subreddit: i.kb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e)
					}
				}),
				m = e => t => ({
					...i.o(t),
					source: "global",
					action: s.c.VIEW,
					noun: s.b.SCREEN,
					subreddit: i.kb(t),
					post: i.K(t, e),
					postEvent: {
						eventState: r.a.Future
					}
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...s.o(e)
				}),
				i = e => t => {
					const n = s.kb(t),
						{
							userFlair: o,
							achievementFlair: i,
							supporterFlair: a
						} = e,
						c = i || a;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...s.o(t),
						subreddit: n,
						userFlair: {
							id: null == o ? void 0 : o.id,
							title: o ? Object(r.g)(o) : void 0,
							isActive: !!o || void 0,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name,
							isLocked: null == c ? void 0 : c.isLocked,
							supporterFlairId: null == a ? void 0 : a.type,
							supporterFlairTitle: null == a ? void 0 : a.name
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...s.o(e)
				}),
				c = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: s.kb(t),
					...s.o(t)
				})
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(r.useContext)(s.a);
				return e
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/lib/hooks/useTooltip.ts");
			const i = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/removedPosts.ts");
			const o = () => Object(r.e)(e => Object(s.d)(e))
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.eb
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(r.useContext)(s.b)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", c({}, e, {
				className: Object(o.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
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
				return g
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "q", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
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
				m = e => e.__typename === s.a.Subreddit;
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
				g = e => h[b[e]],
				_ = e => f[b[e]],
				O = e => b[f[e]],
				x = e => h[f[e]];
			var C;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(C || (C = {}));
			const E = e => {
					switch (e) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				j = "custom",
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
							return Object(r.a)(e)
					}
				},
				k = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
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
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
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
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: r.Fetched
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
			var r, s, o = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(s || (s = {}));
			const a = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [r.PREMIUM],
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

			function b(e) {
				if (!e) return d;
				const t = d;
				return e.forEach(e => {
					var n;
					const {
						startsAt: r,
						endsAt: s,
						webAssetUrls: o,
						tags: i
					} = e, a = r && new Date(r) <= new Date, c = !!s && new Date(s) < new Date, d = !!a && !c, b = (i || []).includes(m);
					if (i && i.includes(l) && !b) {
						const {
							text: n,
							id: r
						} = e, s = o || null, a = p(i);
						t && (t.quickCreateV1 = {
							...a,
							id: r,
							text: n,
							active: d && !!s,
							webAssetUrls: s
						})
					}
					if (i && i.includes(u) && !b) {
						const e = o || null,
							r = (null === (n = i.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: d && !!e,
							assetUrls: e,
							experimentRequired: r
						})
					}
				}), t
			}
			var f = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				v = n("./src/reddit/constants/modals.ts");
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case f.s:
						const {
							avatarMarketingEvents: r
						} = t.payload;
						return r ? b(r) : d;
					case h.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === v.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
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
			t.a = Object(o.c)({
				marketing: g,
				avatarUser: c,
				randomAvatar: _
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
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
			const a = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
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
					case s.a:
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
			t.a = Object(r.c)({
				postOtherDiscussions: i,
				postStats: c,
				subredditKarma: l
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = (e, t) => {
					let {
						post: n
					} = t;
					const r = n.belongsTo.id;
					if (!r) return null;
					const s = e.authorFlair.models[r];
					if (!s) return null;
					const o = n.author;
					return o && s[o] || null
				},
				s = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					return s ? s[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const o = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				a = e => {
					var t, n, r, s;
					const i = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (s = null == i ? void 0 : i.assetUrls) || void 0 === s ? void 0 : s.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(o.a)(i.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/reselect/es/index.js");
			Object(r.a)(e => e.chat.unread.count, e => e.unreadMessages);
			const s = e => !(e.chat.isInited || e.chat.unread.api.pending),
				o = e => e.chat.liveChatTooltipShowState,
				i = Object(r.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
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
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts");
			Object(r.a)({
				features: {
					creatorStats: s.a
				}
			});
			const c = (e, t) => {
					var n, r;
					return null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.postOtherDiscussions[t]
				},
				d = (e, t) => {
					var n, r;
					return null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.postStats[t]
				},
				l = (e, t) => {
					var n, r, s;
					const o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === r ? void 0 : r.subredditKarma[t]) || void 0 === s ? void 0 : s.karma;
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
				u = (e, t, n) => {
					const r = Object(i.G)(e, {
						postId: t
					});
					if (!r || r.isSponsored || r.removedByCategory) return !1;
					const s = Object(i.V)(e, {
						postId: t
					});
					if (s && s.isQuarantined) return !1;
					const c = !n && !!Object(o.m)(e, {
						postId: t
					});
					return Object(a.Eb)(e, {
						postId: t
					}) || c
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
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.r
					});
					return t === r.v.VoteCountOnly || t === r.v.CommentCountOnly || t === r.v.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.r
					});
					return t === r.v.VoteCountOnly || t === r.v.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.r
					});
					return t === r.v.CommentCountOnly || t === r.v.VoteAndCommentCount
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
					const s = e.posts.models[n];
					if (Object(a.d)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.r
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.v.VoteCountOnly || l === r.v.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(a.d)(e) || !s || s.isSponsored || s.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.r
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.v.CommentCountOnly || l === r.v.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.Dc
					}) === r.fd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.if
				}) === r.Sd
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.og,
					experimentEligibilitySelector: o.a
				}), e => e),
				a = Object(r.a)(i, e => e === s.fg)
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				a = e => e.gild.message,
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
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const r = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == r ? void 0 : r.url) ? r.url : t ? e.staticIcon.url : e.icon.url
				},
				m = e => {
					let {
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: o
					} = e;
					return t.awardSubType === s.d.Group ? (e => {
						let {
							award: t,
							size: n,
							prefersReducedMotion: r,
							postOrComment: s
						} = e, o = t;
						if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[t.id] && t.tiers) {
							const e = s.awardCountsById[t.id];
							o = t.tiers.reduce((t, n) => e >= n.awardingsRequired ? n : t)
						}
						return u(o, r, n)
					})({
						award: t,
						size: n,
						prefersReducedMotion: r,
						postOrComment: o
					}) : u(t, r, n)
				},
				p = Object(r.a)((e, t) => {
					let {
						awards: n,
						minSize: r,
						postOrCommentId: s
					} = t;
					const i = Object(d.d)(e),
						c = l.find(e => e >= r),
						u = s ? Object(a.G)(e, {
							postId: s
						}) || Object(o.b)(e, {
							commentId: s
						}) : void 0;
					return n.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: c,
						prefersReducedMotion: i,
						postOrComment: u
					})), e), {})
				}),
				b = (e, t) => {
					let {
						award: n,
						minSize: r,
						postOrCommentId: s
					} = t;
					return n ? p(e, {
						awards: [n],
						minSize: r,
						postOrCommentId: s
					})[n.id] : void 0
				},
				f = (e, t) => {
					let {
						minSize: n,
						userName: r
					} = t;
					const s = Object(c.Bb)(e, {
						userName: r
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return b(e, {
						award: s.awardedLastMonth.topAward,
						minSize: n
					})
				},
				h = e => {
					const t = Object(i.b)(e),
						n = Object(i.a)(e);
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
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return i
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return T
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
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
					const t = Object(r.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				_ = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				x = e => e.features.goldPurchase.payment.rememberCard,
				C = e => e.features.goldPurchase.payment.useSavedCard,
				E = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				j = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				S = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
				T = e => e.features.goldPurchase.payment.paypal.errorMessage
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(s.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let s = Object(i.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				p = Object(s.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = r.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let s = Object(i.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (s = e.media.markdownContent), s === n
				}),
				b = Object(s.a)(o.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(s.a)(d.l, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(s.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(s.c)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
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
						e.detail && (t = e.detail.name, console.warn(i, `${r.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${r.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					s.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.5e2b4d7e36b85e750672.js.map