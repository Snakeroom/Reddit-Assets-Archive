// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.0091b1e2b7df40d57ccb.js
// Retrieved at 1/4/2023, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
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
						h = !o && !l && /macintosh/i.test(t),
						v = !a && !u && !m && !p && /linux/i.test(t),
						_ = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !O && /[^-]mobi/i.test(t),
						C = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, _ ? (s.msedge = e, s.version = _) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: _
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
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
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? s = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, x && (s.version = x)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, x && (s.version = x)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && x && (s.version = x)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !a && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : C ? (s.xbox = e, s.osname = "Xbox") : f ? (s.windows = e, s.osname = "Windows") : v && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? E = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? E = (E = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? E = (E = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? E = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? E = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? E = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? E = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (E = n(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (s.osversion = E);
					var y = !s.windows && E.split(".")[0];
					return O || c || "ipad" == o || a && (3 == y || y >= 4 && !g) || s.silk ? s.tablet = e : (g || "iphone" == o || "ipod" == o || a || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function a(e, r, s) {
					var a = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (a = t(s));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = o, n.check = function(e, t, n) {
					return !a(e, t, n)
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
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : a,
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
					domainOverride: a,
					callToAction: i
				} = e;
				let c = "";
				if (s) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					c = a || Object(r.E)(e)
				} else c = Object(r.E)(e);
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
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(r.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(s.useState)(null), [a, c] = Object(s.useState)(null), [d, l] = Object(s.useState)(null), [u, m] = Object(s.useState)(!1), p = Object(s.useCallback)(async () => m(!0), []), b = Object(s.useCallback)(() => m(!1), []), f = Object(s.useCallback)(() => m(!u), [u]), h = Object(s.useMemo)(() => {
					const t = i(e);
					return d ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: v,
					styles: _,
					update: x
				} = Object(o.a)(t, a, h);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: _.arrow,
						...v.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: _.popper,
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
				}), [l, v, c, b, p, _, t, n, f, u, x])
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
					for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
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
				a = {
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
				i = {
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
					e && (l[r] = (t ? i : a)[r](e).toString()), u -= e * r
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
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			}));
			const r = "ECON__MARKETPLACE_ITEM_CLAIMED",
				s = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK",
				o = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD",
				a = "X__MARKETPLACE_DISMISS_AVATAR_PUSHCARD_BANNER",
				i = "X__MARKETPLACE_VIEW_AVATAR_PUSHCARD"
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
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
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
			var r = n("./src/lib/loadableAction/index.ts");
			const s = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(r.a)(s("awardSheetInfoRequested")),
				a = Object(r.a)(s("manageableAwardsRequested")),
				i = Object(r.a)(s("createCommunityAward")),
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
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
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
			const h = Object(r.a)(f.J),
				v = Object(r.a)(f.f),
				_ = () => async (e, t) => {
					const r = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(s()(r))
				}, x = Object(r.a)(f.I), O = e => {
					let {
						awardId: t,
						correlationId: n,
						thingId: r
					} = e;
					return async (e, s) => {
						const i = s(),
							c = t ? Object(u.a)(i, t) : void 0;
						e(x({
							award: c && c.isEnabled ? c : void 0,
							thingId: r,
							correlationId: n
						})), e(Object(l.h)(a.a.GOLD_GILD_MODAL));
						const b = Object(p.O)(i, {
							thingId: r
						});
						let f = null;
						if (b) f = b.id;
						else if (Object(o.a)(r)) {
							const e = Object(m.G)(i, {
								postId: r
							});
							e && (f = e.belongsTo.id)
						}
						f && Object(d.a)(f, r)
					}
				}, g = Object(r.a)(f.e), C = Object(r.a)(f.H), E = () => async (e, t) => {
					const r = t(),
						o = Object(i.d)(r);
					if (Object(i.g)(r)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(g()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(r)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
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
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "o", (function() {
				return C
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
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
				_ = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				g = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
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
				_ = (e, t, n) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var b, f, h, v;
					const _ = Object(m.b)(s()),
						x = await (async (e, t, n, r, s) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": s || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...r
							}
						}))(u(), e, t, n, _);
					if (!x.ok) throw new Error("User avatar failed to save");
					return r(Object(p.y)(x.body)), {
						accountIcon: null === (f = null === (b = x.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (h = x.body) || void 0 === h ? void 0 : h.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, x = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.ob.GET
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
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.ob.GET
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
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(i.l)(n)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(s.g)(a.a.SNOOVATAR_MODAL))
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
					o && Object(d.a)(Object(i.g)(o)(h)), Object(c.S)(h) ? await t(Object(s.h)(a.a.SNOOVATAR_MODAL, {
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
				return a
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
					Object(r.a)(e, c, d) ? n(Object(o.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
			}
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
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
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
			const u = Object(a.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return s.a.createElement(i.a, l({}, n, {
					className: Object(o.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(d.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(i.b)(n) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, n) {
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
				ctaExperiment: "_3xMykgG1y_Ln8tQs4ciV4i",
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
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe",
				modModeBannerWrapper: "_1_voPxd0-GKljAjvO7ZcgJ"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Re
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				f = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/User/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/actions/postFlair.ts"),
				E = n("./src/reddit/actions/tooltip.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				j = n("./src/reddit/selectors/moderatorPermissions.ts"),
				S = n("./src/reddit/selectors/postFlair.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				T = n("./src/reddit/components/AwardBadges/index.tsx"),
				I = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				A = n("./src/reddit/components/CommentsLink/index.tsx"),
				N = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				M = n("./src/reddit/components/ExpandoButton/index.tsx"),
				R = n("./src/reddit/components/Flatlist/index.tsx"),
				D = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				F = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				V = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				G = n("./src/reddit/components/ModModeReports/index.tsx"),
				W = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Y = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				q = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				K = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = n("./src/reddit/components/PostBadges/index.tsx"),
				z = n("./src/reddit/components/PostContainer/index.tsx"),
				Z = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				J = n("./src/reddit/components/PostLeftRail/index.tsx"),
				X = n("./src/reddit/components/PostMedia/index.tsx"),
				Q = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				$ = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = n("./src/reddit/components/PostTitle/index.tsx"),
				te = n("./src/reddit/components/PostTopMeta/index.tsx"),
				ne = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				re = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = n("./src/reddit/components/SubredditIcon/index.tsx"),
				oe = n("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = n("./src/reddit/contexts/Post/index.tsx"),
				de = n("./src/reddit/controls/Checkbox/index.tsx"),
				le = n("./src/reddit/controls/MetaData/index.tsx"),
				ue = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				me = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				pe = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				be = n("./src/reddit/helpers/postEvent.ts"),
				fe = n("./src/reddit/hooks/useIsOverlay.ts"),
				he = n("./src/reddit/hooks/useTheme.ts"),
				ve = n("./src/reddit/hooks/useUserContext.ts"),
				_e = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				xe = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Oe = n("./src/reddit/selectors/experiments/web2x_cta.ts"),
				ge = n("./src/reddit/selectors/showPromotedCTA.ts"),
				Ce = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ee = n.n(Ce),
				ye = n("./src/reddit/selectors/experiments/chat.ts"),
				je = n("./src/redditGQL/types.ts"),
				Se = n("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				ke = n("./src/reddit/components/CompactPost/index.m.less"),
				we = n.n(ke);

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Te = e => {
					let {
						isCompact: t,
						...n
					} = e;
					return o.a.createElement(M.a, Pe({
						className: Object(l.a)(we.a.responsiveExpandoButton, {
							[we.a.mHideAboveSmallTablets]: !!t,
							[we.a.mHideBelowSmallTablets]: !t
						})
					}, n))
				},
				Ie = () => Object(c.c)({
					activeModalId: y.a,
					crosspost: k.d,
					flairStyleTemplate: ie.Y,
					isActive: k.j,
					isExpanded: k.m,
					showPromotedCTA: ge.a,
					layout: ie.U,
					moderatorPermissions: j.m,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: S.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(j.i)(e, n.id)
					},
					showCTAExperimentDesign: Oe.a,
					isLiveChatUserCountEnabled: ye.e
				}),
				Ae = (e, t) => {
					let {
						postId: n
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: n,
								previewFlair: r,
								selectedTemplateId: s
							} = t;
							return e(Object(C.h)({
								post: n,
								previewFlair: r,
								selectedTemplateId: s
							}))
						},
						handleVote: t => {
							const r = t === O.a.upvoted ? Object(g.ib)(n) : Object(g.v)(n);
							e(r)
						},
						onIgnoreReports: () => e(Object(g.eb)(n)),
						onOpenReportsDropdown: t => e(Object(E.h)({
							tooltipId: t
						}))
					}
				};
			class Ne extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: r,
						currentUser: s,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: u,
						isCheckboxSelected: m = !1,
						isCommentsPage: O,
						isCommentPermalink: g,
						isExpanded: C,
						isGalleryTileLayoutDefault: E,
						isModWithUserNotesPermissions: y,
						isOverlay: j,
						isProfilePostListing: S,
						inSubredditOrProfile: k = !1,
						layout: M,
						moderatorPermissions: X,
						modModeEnabled: re,
						onClickPost: se,
						onFlairChanged: ie,
						onIgnoreReports: ce,
						poll: le,
						post: fe,
						subredditOrProfile: he,
						userIsOp: ve,
						hideModTools: Oe,
						scrollerItemRef: ge,
						showBulkActionCheckbox: Ce,
						showEditFlair: ye,
						toggleCheckbox: ke,
						tooltipType: Pe,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Ae,
						showPromotedCTA: Ne,
						showCTAExperimentDesign: Me,
						isLiveChatUserCountEnabled: Re
					} = this.props, Fe = !!fe.media && fe.media.type === v.o.RTJSON, Ue = ve && Fe, Be = Object(Z.b)(fe.id, j), Ve = Object(pe.a)(X), Ge = Object(ue.a)(X), We = Object(me.a)(X), Ye = `-mod-actions-menu-${fe.id}`, qe = `voting-arrows-${fe.id}`, Ke = !!s && Object(x.e)(s) === fe.author, He = Object(V.a)(fe), ze = Object(W.c)(fe), Ze = Object(D.a)("View--Reports", fe.id, Pe), Je = Object(W.a)(fe), Xe = !(j || O || g), Qe = e => Ie(Object(h.k)(fe.id, e)), $e = Object(d.t)(fe, u), {
						source: et
					} = $e, tt = Object(_.r)(fe);
					return o.a.createElement(z.b, {
						className: Object(l.a)(Ee.a.compactPostStyles, we.a.postContainer, Object(f.a)(this.props), t),
						isOverlay: j,
						style: {
							...Object(f.d)(this.props),
							...Object(f.b)(this.props.flairStyleTemplate)
						},
						post: fe,
						onClick: se,
						eventFactory: a
					}, o.a.createElement("div", {
						className: we.a.compactWrapper
					}, o.a.createElement("div", {
						className: we.a.leftRailWrapper
					}, o.a.createElement("div", {
						className: we.a.leftRail,
						style: {
							borderColor: Object(J.c)({
								isRemoved: !!fe.bannedBy,
								isReported: Object(b.a)(fe),
								isSponsored: fe.isSponsored,
								theme: this.props.theme
							})
						}
					}, Ce && o.a.createElement(de.a, {
						className: we.a.bulkActionCheckbox,
						isCheckboxSelected: m,
						toggleCheckbox: ke
					}), o.a.createElement(oe.a, {
						className: we.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: fe,
						onVoteClick: c
					}), o.a.createElement(N.a, {
						className: we.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: fe,
						onVoteClick: c,
						upvoteTooltipId: qe
					}))), o.a.createElement(K.a, {
						className: Object(l.a)(we.a.content, {
							[we.a.isEvent]: Object(be.a)(fe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, o.a.createElement(L.a, {
						isCompactMode: !0,
						post: fe
					}), o.a.createElement("div", {
						className: we.a.compactPostRow
					}, !Oe && o.a.createElement(Te, {
						crosspost: r,
						isCommentsPage: O,
						isCompact: !1,
						isExpanded: C,
						post: fe,
						useMediaIcons: !0
					}), !k && !fe.isSponsored && o.a.createElement(F.h, {
						type: fe.belongsTo.type,
						id: fe.belongsTo.id
					}), o.a.createElement("div", {
						className: we.a.topLine,
						"data-click-id": "body"
					}, tt && o.a.createElement(q.a, {
						content: fe.recommendationContext.content,
						layout: p.g.Compact,
						post: fe
					}), o.a.createElement(ee.c, {
						post: fe,
						poll: le,
						size: ee.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), De(fe, he), o.a.createElement(te.g, {
						className: we.a.postTopMeta,
						flairStyleTemplate: i,
						isModWithUserNotesPermissions: y,
						post: fe,
						showSub: !!he && !k && !fe.isSponsored,
						subredditOrProfile: he
					}), o.a.createElement(H.a, {
						className: we.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: k,
						post: fe
					}), o.a.createElement(T.a, {
						thing: fe,
						tooltipType: j ? te.f.Lightbox : void 0
					}), fe.discussionType === je.o.Chat && o.a.createElement(Se.a, {
						postId: fe.id
					})), Xe && !Re && o.a.createElement("div", null, o.a.createElement(I.a, {
						className: we.a.liveDiscussionIcon,
						postId: fe.postId
					})), !fe.isSurveyAd && o.a.createElement("div", {
						className: we.a.flatList
					}, o.a.createElement(A.a, {
						className: we.a.commentsLink,
						hasModPostPerms: Ve,
						isCommentsPage: O,
						isCommentPermalink: g,
						isOverlay: j,
						postId: fe.id,
						modModeEnabled: re,
						numComments: fe.numComments,
						type: p.g.Compact
					}), o.a.createElement(Y.a, {
						className: we.a.modToolsFlatlist,
						isOverlay: !1,
						layout: M,
						modModeEnabled: re,
						post: fe,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Ve && o.a.createElement(U.a, {
						dropdownId: Ye,
						onClick: () => Qe("post_mod_action_menu")
					}, o.a.createElement(R.b, null), o.a.createElement(Q.a, {
						canEditFlair: Ge && ye,
						hasModPostPerms: Ve,
						hasModFullPerms: We,
						isOverlay: !1,
						isPostAuthor: Ke,
						modModeEnabled: re,
						post: fe,
						tooltipId: Ye
					})), Ve && ze && !re && o.a.createElement(ne.c, {
						text: `${Je}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ze), Qe("post_report_menu")
						},
						id: Ze
					}, o.a.createElement(ae.a, {
						model: fe,
						onIgnoreReports: () => {
							ce(), Qe(fe.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ze
					}), fe.ignoreReports ? o.a.createElement(_e.a, null) : o.a.createElement(xe.a, null)), o.a.createElement($.a, {
						currentProfileName: n,
						isCommentsPage: O,
						isOverlay: !1,
						isProfilePostListing: S,
						isRecommendationPost: !!fe.recommendationContext,
						layout: M,
						permalink: fe.permalink,
						sendEvent: Ie,
						showEditPost: Ue,
						showEditFlair: ye,
						dropdownId: `${fe.id}-overflow-menu`,
						useFlatlistBreakpoints: Object($.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1,
							mute: !1
						})
					}), !Oe && o.a.createElement(Te, {
						crosspost: r,
						isCommentsPage: O,
						isCompact: !0,
						isExpanded: C,
						post: fe,
						useMediaIcons: !0
					}))), Ne && et && et.url && !fe.isSurveyAd && o.a.createElement(w.a, {
						className: Object(l.a)(we.a.adLinkWrapper, {
							[we.a.ctaExperiment]: Me
						}),
						ctaExperimentDesign: Me && "compact"
					}, o.a.createElement(P.a, {
						post: fe,
						adLinkContent: $e,
						isCompact: !0,
						ctaExperimentDesign: Me && "compact"
					})), re && Ve && He && o.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, o.a.createElement(B.a, {
						thing: fe
					})), re && Ve && ze && o.a.createElement("div", {
						className: we.a.modModeBannerWrapper
					}, o.a.createElement(G.a, {
						onIgnoreReports: ce,
						reportable: fe
					})), o.a.createElement(F.d, null))), C && o.a.createElement(Le, {
						post: fe,
						scrollerItemRef: ge,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Ae,
						isGalleryTileLayoutDefault: E
					}), e === Be && o.a.createElement(Z.a, {
						flairs: fe.flair,
						subredditId: fe.belongsTo.id,
						modalId: Be,
						onFlairChanged: ie
					}))
				}
			}
			const Le = e => o.a.createElement(K.a, {
					className: Object(l.a)(e.className, we.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? o.a.createElement("div", {
					className: we.a.crosspostMediaWrapper
				}, Me(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Me(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Me = (e, t, n, r) => o.a.createElement(X.a, {
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
					showFull: !0,
					showPromotedCTA: !0
				}),
				Re = e => o.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, o.a.createElement(se.b, {
					className: we.a.subredditIcon,
					subredditOrProfile: e
				})),
				De = (e, t) => o.a.createElement("div", {
					className: we.a.responsiveMeta
				}, o.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), o.a.createElement(le.c, null), Object(le.d)(e.numComments), o.a.createElement(le.c, null), t && o.a.createElement("a", {
					href: t.url
				}, o.a.createElement(le.a, null, t.displayText)), e.isSponsored && [o.a.createElement(re.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), o.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && o.a.createElement(le.a, null, " ", r.fbt._("Posted by", null, {
					hk: "UqFDR"
				}), " "), o.a.createElement(te.d, {
					post: e,
					isDeleted: e.author === u.H
				}));
			t.default = Object(ce.b)(o.a.memo((function(e) {
				const t = Object(ve.a)(),
					n = Object(s.useMemo)(() => Ie(), []),
					r = Object(a.e)(r => n(r, {
						...e,
						...t
					})),
					i = Object(a.d)(),
					c = Ae(i, {
						...e,
						...t
					});
				return o.a.createElement(Ne, Pe({}, e, t, r, c, {
					onFlairChanged: t => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = t;
						return c.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					},
					sendEvent: Object(m.b)(),
					isOverlay: Object(fe.a)(),
					theme: Object(he.a)()
				}))
			})))
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
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => o.a.createElement(i.e, null, o.a.createElement(i.i, null, o.a.createElement(d.a, null, o.a.createElement(i.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(i.b, null)))), o.a.createElement(i.l, null, o.a.createElement(i.p, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(i.g, null, !e.hideCancelButton && o.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(i.u, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/hooks/usePrevious.ts"),
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
					queryVariables: _,
					shouldDisjointAnimation: x,
					subsequentRecurringDelay: O
				} = e, [g, C] = Object(r.useState)(!1), [E, y] = Object(r.useState)(!0), [j, S] = Object(r.useState)([]), [k, w] = Object(r.useState)(c(p).reverse()), P = Object(r.useRef)(!1), T = Object(r.useRef)(null), I = Object(r.useRef)(e => {}), A = Object(r.useRef)();
				I.current = Object(r.useCallback)(e => {
					let n = e || d();
					const r = [...k].reverse().join("");
					let s = parseInt(r) + n;
					s > t && (n = t - parseInt(r), s = t);
					const o = c(s).reverse();
					C(!1), S(k), w(o), y(!1), A.current = setTimeout(() => {
						C(!0)
					}, 0)
				}, [t, d, k]);
				const N = Object(r.useRef)(() => {}),
					L = Object(r.useRef)(),
					M = Object(r.useRef)();
				N.current = Object(r.useCallback)(() => {
					M.current = setTimeout(() => {
						I.current();
						const e = [...j].reverse().join("");
						parseInt(e) < t && N.current()
					}, O())
				}, [t, O, j]);
				const R = Object(r.useRef)(0),
					D = Object(r.useRef)(!1),
					F = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, r = 1 !== n;
							t ? (D.current = !0, P.current || (P.current = !0, L.current = setTimeout(() => {
								I.current(), N.current()
							}, u())), R.current > 0 && (I.current(R.current), R.current = 0)) : r && (D.current = !1)
						})
					}, []);
				Object(i.a)(T, F);
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
				Object(i.a)(T, V, G.current);
				const W = Object(o.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== W && W !== t) {
						const e = t - W;
						D.current ? I.current(e) : R.current += e
					}
					return () => {
						clearTimeout(L.current), clearTimeout(M.current), clearTimeout(A.current)
					}
				}, [t]);
				const Y = Object(r.useCallback)(() => y(!0), [y]),
					q = 0 === j.length,
					K = E || q,
					H = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, n));
				return s.a.createElement(s.a.Fragment, null, !b && s.a.createElement("div", {
					className: l.a.countAnimation
				}, k.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const r = Math.abs(t),
							s = [n];
						if (n === r) return s;
						let o = !0;
						for (; o;) ++n > 9 && (n = 0), s.push(n), n === r && (o = !1);
						return s
					})(j[t] || 0, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: Y,
						style: g && j.length > 0 && !E ? {
							transform: `translateY(-${x&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(x?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, K ? s.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const r = 0 === t || t === n.length - 1;
						if (!x || x && r) return s.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), s.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...k].reverse().join(""))), s.a.createElement("span", {
					ref: T
				}), U && s.a.createElement(a.a, {
					variables: _,
					onData: b ? m : f,
					queryKey: v,
					uniqueKey: H.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = 16374492e5,
				o = 45 * r.E;
			var a;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(a || (a = {}));
			const i = e => {
					return e < Date.now() - o
				},
				c = e => e > s,
				d = (e, t, n, r) => {
					if (!n && !c(e.created)) return a.NotAvailable;
					if (n && !c(e.created) || i(e.created)) return a.Expired;
					if (n && r) return a.Quarantined;
					if (!t) return a.NotAvailableYet;
					const {
						shareAllCountTotals: s,
						shareCopyCountTotals: o,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == s ? void 0 : s.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? a.NotAvailableYet : a.Available : a.NotAvailableYet
				}
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
				return y
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				_ = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/CrosspostBox/index.m.less"),
				g = n.n(O),
				C = n("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				j = 1,
				S = C.a.div("Container", g.a),
				k = C.a.div("PostMetaWrapper", g.a),
				w = C.a.wrapped(p.c, "PostTitle", g.a),
				P = C.a.div("FlatList", g.a),
				T = C.a.div("FlatItem", g.a),
				I = C.a.span("FlatListDotSpacer", g.a),
				A = C.a.wrapped(S, "LinkContainer", g.a),
				N = C.a.div("Content", g.a),
				L = C.a.div("ThumbnailContainer", g.a),
				M = Object(c.c)({
					isCurrentUserProfilePost: _.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Sb.TOPIC),
					shouldOpenPostInNewTab: x.lb
				}),
				R = Object(a.b)(M);
			t.c = Object(v.b)(R(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: r,
					mediaProps: s,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: r,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${s.isListing}`
					},
					d = t;
				return a && !a.media ? o.a.createElement(A, {
					className: d
				}, o.a.createElement(N, null, o.a.createElement(k, null, o.a.createElement(m.a, c)), D(a), a.source && o.a.createElement(b.a, {
					post: a
				}), U(e)), V(e)) : o.a.createElement(S, {
					className: d
				}, o.a.createElement(k, null, o.a.createElement(m.a, c)), D(a), F(e), U(e))
			}));
			const D = e => o.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, r = {
						...t,
						post: n,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(u.a, E({}, r, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return o.a.createElement(P, null, o.a.createElement(T, null, r.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [r.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), o.a.createElement(I, null), o.a.createElement(T, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: s
					} = t;
					return o.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, r.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [r.fbt._plural(s, "comment count", Object(l.b)(s))], {
						hk: "xPYWL"
					}))
				},
				V = e => o.a.createElement(L, null, o.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				_ = n("./src/telemetry/models/Outbound.ts"),
				x = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = n("./src/reddit/components/ExpandoButton/index.m.less"),
				g = n.n(O);
			const C = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(m.b)(t.permalink), t.id))
				})),
				E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 ? arguments[2] : void 0;
					const r = Object(c.a)(g.a.icon, g.a.hideOnHover);
					if (t) return o.a.createElement(b.a, {
						name: "crosspost",
						className: r
					});
					if (n.pollData) return o.a.createElement(b.a, {
						name: "poll_post",
						className: r
					});
					if (n.audioRoom) return o.a.createElement(b.a, {
						name: "audio",
						className: r
					});
					switch (e) {
						case f.o.GIFVIDEO:
							return o.a.createElement(b.a, {
								name: "gif_post",
								className: r
							});
						case f.o.IMAGE:
							return o.a.createElement(b.a, {
								name: "image_post",
								className: r
							});
						case f.o.TEXT:
						case f.o.RTJSON:
							return o.a.createElement(b.a, {
								name: "text_post",
								className: r
							});
						case f.o.VIDEO:
							return o.a.createElement(b.a, {
								name: "video_post",
								className: r
							});
						case f.o.GALLERY:
							return o.a.createElement(b.a, {
								name: "media_gallery",
								className: r
							});
						case f.o.EMBED:
						default:
							return o.a.createElement(b.a, {
								name: "embed",
								className: r
							})
					}
				};
			t.a = C(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isCommentsPage: l,
					isExpanded: m,
					post: f,
					toggle: O,
					useMediaIcons: C
				} = e, y = n || f, j = Object(a.e)(v.b), S = Object(a.e)(v.c), k = t => {
					(j || S) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, w = y.media, P = Object(h.q)(f), T = s && !!n;
				return w && !P && !(("rtjson" === w.type || "text" === w.type || "liveaudio" === w.type) && !Object(p.a)(y)) || !!f.pollData ? o.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					"data-adclicklocation": x.a.MEDIA,
					onClick: O
				}, m ? o.a.createElement(b.a, {
					name: "collapse",
					className: g.a.icon
				}) : C ? o.a.createElement(o.a.Fragment, null, E(y.media && y.media.type, T, f), o.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(g.a.icon, g.a.showOnHover)
				})) : o.a.createElement(b.a, {
					name: "expand",
					className: g.a.icon
				})) : y.source && y.source.url ? o.a.createElement(u.b, {
					"aria-label": r.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: f.isSponsored,
					postId: f.id,
					source: f.source,
					sourceElement: l ? _.SourceElement.PostImage : _.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(g.a.icon, g.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": r.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, g.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow",
					onClick: k
				}, o.a.createElement(b.a, {
					name: "text_post",
					className: g.a.icon
				}))
			})
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
				a = n.n(o),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || s.a
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = n.n(s);
			const a = r.a.div("Wrapper", o.a);
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
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
				a = n.n(o),
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
				b = s()((function() {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				_ = n("./src/reddit/controls/RadioInput/index.tsx"),
				x = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				g = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = n.n(E);
			class j extends o.a.Component {
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
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), i = !!n && a.some(e => e.id === n);
					return o.a.createElement("div", {
						className: y.a.container
					}, o.a.createElement("div", {
						className: y.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: y.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), o.a.createElement(C.a, {
						className: y.a.searchIcon
					})), o.a.createElement(_.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const r = Object(u.c)(e),
							s = n === e.id || !i && 0 === t;
						return o.a.createElement(x.a, {
							className: y.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, o.a.createElement(h.b, {
							className: y.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(g.a, {
							className: y.a.pencil
						}))
					})))
				}
			}
			var S = Object(v.c)(j),
				k = n("./src/reddit/components/FlairSearch/index.m.less"),
				w = n.n(k);
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
					className: s,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, v = Object(p.a)(), _ = d && n && n.templateId && d[n.templateId] || void 0, x = Object(f.a)(), O = n || P(_);
				return o.a.createElement("div", {
					className: Object(c.a)(s, w.a.container)
				}, d && l && o.a.createElement(S, {
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
					selectedTemplateId: _ ? _.id : "",
					templateIds: l,
					templates: d
				}), O && _ && (h || _.textEditable) && o.a.createElement("div", {
					className: w.a.flairEditSection
				}, o.a.createElement("div", {
					className: w.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: w.a.restrictionHintText
				}, Object(u.k)(_)), o.a.createElement(x, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: _,
					flairTemplateType: t,
					isFlairModOnly: _.modOnly,
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
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = n.n(a);

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
				const [a, d] = Object(r.useState)(t);
				return Object(r.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? s.a.createElement("div", c({
					className: Object(o.a)(i.a.tooltip, n.className, {
						[i.a.visible]: a
					})
				}, n.popperProps), n.children, a && s.a.createElement("div", c({
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
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = n.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? s.fbt._("{userCount} here now", [s.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : s.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = n("./src/lib/LiveLabel/index.m.less"),
				u = n.n(l);
			const m = () => a.a.createElement("span", {
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
				return a.a.createElement("div", {
					className: Object(r.a)(b.a.liveParticipation, n)
				}, a.a.createElement(m, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var h = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/reddit/selectors/chat.ts"),
				_ = n("./src/reddit/selectors/experiments/chat.ts");
			const x = e => {
				let {
					postId: t,
					className: n
				} = e;
				const r = Object(h.e)(e => Object(v.a)(e, t));
				return Object(h.e)(_.e) ? a.a.createElement(f, {
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
					post: r
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : s.a.createElement(i.b, {
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
				a = n("./node_modules/react/index.js"),
				i = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(s.d, {
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return s.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, n),
					style: b || Object(i.c)(r, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, f), t)
			}))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				})(n), b = s && !!n.viewCount, f = Object(a.e)(e => Object(l.a)(e, n.id)), h = Object(a.e)(e => Object(l.c)(e, n.id)), v = Object(d.c)(n, h), _ = f && v === d.b.Available;
				return o.a.createElement("div", {
					className: Object(i.a)(m.a.viewCounts, t)
				}, b && o.a.createElement("span", null, p), b && !!n.upvoteRatio && o.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !_ && o.a.createElement("span", null, u))
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
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(r) ? {
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
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ne
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
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
				_ = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				C = n.n(g);
			const E = e => {
				let {
					postId: t,
					className: n
				} = e;
				const r = Object(c.e)(e => Object(x.G)(e, {
						postId: t
					})),
					o = Object(c.e)(e => "subreddit" === (null == r ? void 0 : r.belongsTo.type) ? Object(O.X)(e, {
						subredditId: r.belongsTo.id
					}) : null);
				return o ? s.a.createElement(v.a, {
					className: Object(h.a)(C.a.link, n),
					to: o.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), s.a.createElement(_.b, {
					className: C.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: o
				}), s.a.createElement("span", {
					className: C.a.subredditName
				}, o.displayText)) : null
			};
			var y = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				j = n("./src/reddit/connectors/PostViewable/index.ts"),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/contexts/Post/index.tsx"),
				w = n("./src/reddit/helpers/path/index.ts"),
				P = n("./src/reddit/hooks/useClickSourceData.ts"),
				T = n("./src/reddit/hooks/useIsOverlay.ts"),
				I = n("./src/reddit/hooks/usePageLayer.ts"),
				A = n("./src/lib/prettyPrintNumber/index.ts"),
				N = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				L = n.n(N);
			const M = e => {
				let {
					post: t
				} = e;
				const n = `${Object(A.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					r = `${Object(A.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return s.a.createElement("div", {
					className: L.a.postInformation
				}, s.a.createElement("h5", {
					className: L.a.title
				}, t.title), s.a.createElement("div", {
					className: L.a.interactions
				}, s.a.createElement("p", null, n), s.a.createElement("p", null, r)))
			};
			var R = n("./src/lib/isUrl/index.ts"),
				D = n("./src/reddit/actions/profile/index.ts"),
				F = n("./src/reddit/components/Thumbnail/index.tsx"),
				U = n("./src/reddit/components/UserIcon/index.tsx"),
				B = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				G = n("./src/reddit/selectors/profile.ts"),
				W = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				Y = n.n(W);
			const q = e => {
				let {
					post: t
				} = e;
				var n, o, a, i;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(G.l)(t.author)),
					u = Object(r.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					m = Object(r.useMemo)(() => Object(R.a)(u), [u]);
				Object(r.useEffect)(() => {
					m || d(Object(D.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(V.a)(null === (n = null == l ? void 0 : l.icon) || void 0 === n ? void 0 : n.url),
					b = Object(B.c)(null === (o = null == l ? void 0 : l.icon) || void 0 === o ? void 0 : o.url);
				return s.a.createElement("div", {
					className: Y.a.media
				}, m ? s.a.createElement(F.b, {
					post: t,
					url: u,
					className: Y.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: Y.a.mediaThumbnailContainer
				}) : null, !m && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && s.a.createElement("div", {
					className: Y.a.userIconContainer
				}, s.a.createElement(U.a, {
					className: Object(h.a)({
						[Y.a.snoovatarUserIcon]: p,
						[Y.a.defaultUserIcon]: b
					}, Y.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: Y.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var K = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				H = n.n(K);
			const z = Object(j.a)(null);
			var Z = Object(k.b)(z(e => {
					let {
						post: t
					} = e;
					const n = Object(I.a)(),
						r = Object(T.a)(),
						o = Object(P.a)(),
						a = Object(S.x)(n) && !r;
					return s.a.createElement(v.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(w.b)(t.permalink) : Object(y.a)(t.permalink, !1, o)
					}, s.a.createElement("div", {
						className: H.a.container
					}, s.a.createElement(M, {
						post: t
					}), s.a.createElement(q, {
						post: t
					})))
				})),
				J = n("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				X = n.n(J);
			const Q = e => {
				let {
					postIds: t
				} = e;
				const n = t.map(e => s.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return s.a.createElement("div", {
					className: X.a.container
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
				const [r] = t.adPromotedUserPostIds;
				return s.a.createElement("div", {
					className: ee.a.container,
					onClick: () => n(Object(d.y)(t, l.a.Click))
				}, s.a.createElement(Q, {
					postIds: t.adPromotedUserPostIds
				}), s.a.createElement(E, {
					postId: r,
					className: ee.a.communityLink
				}))
			};

			function ne(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(i.B)(t) && Object(i.A)(t) ? s.a.createElement(te, {
					post: t
				}) : s.a.createElement(a.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
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
				_ = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				O = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/models/Subreddit/index.ts"),
				C = n("./src/reddit/components/PostMeta/index.m.less"),
				E = n.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: r,
					isCurrentUserProfilePost: C,
					isOverlay: y,
					isTopicPage: j,
					post: S,
					shouldShowSubscribeButton: k,
					subredditOrProfile: w,
					tooltipType: P
				} = e, T = !!j, I = Object(O.a)(), A = Object(o.e)(e => !!w && Object(a.i)(e, w.id));
				return s.a.createElement("div", {
					className: E.a.metaContainer
				}, !r && !S.isSponsored && w && s.a.createElement(d.a, {
					postId: S.id,
					subredditName: w.name
				}, s.a.createElement(b.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: I
					}
				}, w.displayText)), w && w.isQuarantined && s.a.createElement(p.a, null), !r && !S.isSponsored && w && k && !C && s.a.createElement(f.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(x.k)(S.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(g.i)(w) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: S.id,
					size: v.d.XXS,
					small: !0
				}), !r && !S.isSponsored && s.a.createElement(_.b, null), !r && !S.isSponsored && s.a.createElement(l.h, {
					type: S.belongsTo.type,
					id: S.belongsTo.id
				}), s.a.createElement(m.g, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: S,
					tooltipType: P,
					isModWithUserNotesPermissions: A
				}), s.a.createElement(u.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!r,
					post: S,
					tooltipType: P
				}), !T && s.a.createElement(i.a, {
					hideCta: n,
					thing: S,
					tooltipType: y ? m.f.Lightbox : void 0
				}), A && s.a.createElement(c.a, {
					postOrComment: S,
					className: E.a.addModNote
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
			var r = n("./src/config.ts"),
				s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				_ = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				C = n("./src/reddit/hooks/usePostContext.ts"),
				E = n("./src/reddit/hooks/useTheme.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				j = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/Post/index.ts"),
				w = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				P = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = n("./src/lib/getShortenedLink.ts"),
				I = n("./src/reddit/components/FlairWrapper/index.tsx"),
				A = n("./node_modules/fbt/lib/FbtPublic.js"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				L = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				R = n.n(M);
			const D = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, U = Object(i.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return Object(g.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, R.a.proposalMetaData)
					}, a.a.createElement("span", null, A.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [A.fbt._param("count", Object(N.a)(r)), A.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(L.a, {
						className: R.a.proposalExpiry,
						poll: t
					}))
				})),
				B = n("./src/reddit/components/SEOTitle/index.tsx"),
				V = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				G = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/telemetry/models/Outbound.ts"),
				q = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				K = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				H = n("./src/reddit/components/PostTitle/index.m.less"),
				z = n.n(H);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						titleType: r,
						nowrap: s,
						children: o,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(E.a)();
					let m = "";
					switch (t) {
						case F.ExtraLarge:
							m = z.a.ExtraLarge;
							break;
						case F.Large:
							m = z.a.Large;
							break;
						case F.Medium:
							m = z.a.Medium;
							break;
						case F.Small:
							m = z.a.Small;
							break;
						case F.ExtraSmall:
							m = z.a.ExtraSmall;
							break;
						case F.Metadata:
							m = z.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(z.a.Title, i, m, {
							[z.a.isNoWrap]: s,
							[z.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(P.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, r ? a.a.createElement(B.b, {
						type: r
					}, o) : o)
				},
				X = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: r,
						children: s,
						...o
					} = e;
					return a.a.createElement(c.a, Z({}, o, {
						className: Object(u.a)(t, z.a.styledLink, {
							[z.a.isVisitedEnabled]: !n
						})
					}), s)
				},
				Q = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: r,
						children: s
					} = e;
					return a.a.createElement("div", {
						className: Object(u.a)(z.a.titleContainer, r, {
							[z.a.isNoWrap]: n,
							[z.a.isVisitedEnabled]: !t
						})
					}, s)
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
					} = t, r = Object(i.d)(), s = Object(O.a)(), o = Object(i.e)(V.b), c = Object(i.e)(V.c), d = e => {
						(o || c) && (e.preventDefault(), r(Object(v.Z)(Object(x.b)(t.permalink), t.id))), t.isSponsored && Object(k.A)(t) && r(Object(v.y)(t, _.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(Q, {
						nowrap: e.nowrap
					}, a.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, a.a.createElement(te, e)); {
						const r = t.permalink,
							o = e.isCommentPermalink ? Object(x.b)(r) : Object(h.a)(r, void 0, s);
						return a.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n && !Object(k.A)(t) ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? a.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, a.a.createElement(te, t)) : a.a.createElement(te, t)
						})(t, e) : a.a.createElement(X, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: d
						}, a.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const o = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(J, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && a.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), s)
				},
				ne = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: r
					} = e, {
						isSponsored: s
					} = r, o = e.isCommentsPage ? Y.SourceElement.PostLink : Y.SourceElement.ListingPostLink;
					if (Object(g.a)()) return null;
					if (n && r.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== F.Large && !r.isSponsored && (r.source || r.media && (r.media.type === S.o.GIFVIDEO || r.media.type === S.o.IMAGE || r.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(S.E)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source,
							sourceElement: o
						}, Object(T.a)(r), !r.isSponsored && a.a.createElement(y.a, {
							name: "external_link",
							className: z.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source,
						sourceElement: o
					}, Object(T.a)(r), !r.isSponsored && a.a.createElement(y.a, {
						name: "external_link",
						className: z.a.outboundLinkIcon
					}));
					return null
				};
			class re extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${z.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(s.c)(.45,Object(P.a)(this.props).bodyText,Object(P.a)(this.props).body)};\n        }\n      `
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
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = n === j.b.Left, b = Object(I.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(q.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), v = !o && !s && !t, _ = v && f && f.length > 0, x = v && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(z.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": K.a.TITLE,
						onClick: m
					}, !d && _ && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(w.b)(c) && a.a.createElement(ee, Z({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && a.a.createElement(U, {
						className: z.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(ne, this.props), x && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: z.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${r.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.gb)(),
					n = Object(p.x)(t),
					r = Object(C.a)(),
					s = Object(i.e)(s => $(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					o = Object(E.a)(),
					c = Object(m.b)();
				return r ? a.a.createElement(re, Z({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: o,
					sendEvent: c
				})) : null
			}))
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
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", o.a);
			t.a = a
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
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
				a = e => {
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
				disabledVoteIcon: "mvlZFfW9BWm1bmljE_0Rg"
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
				_ = n("./src/reddit/components/VerticalVotes/index.m.less"),
				x = n.n(_);
			const O = Object(i.c)({
					isNightMode: h.fb,
					isAnimatingUpvotePostId: f.k
				}),
				g = Object(a.b)(O),
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class y extends o.a.Component {
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
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: i,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: _,
							postId: O
						} = e,
						g = C(e),
						y = E(e),
						j = _.voteState,
						S = a === O;
					return o.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className),
						id: `vote-arrows-${_.id}`,
						ref: h
					}, g ? o.a.createElement(m.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": j === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: s,
						onClick: this.onUpvote,
						voteState: j
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": j === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[x.a.bounceUp]: S
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: j
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(c.a)(x.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: j,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: O
					}), y ? o.a.createElement(m.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": j === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: s,
						onClick: this.onDownvote,
						voteState: j
					}) : o.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": j === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: j
					})))
				}
			}
			const j = Object(d.a)(g(y));
			t.a = j
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: a.jb
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
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				u = e => o.a.createElement(l, e, " · "),
				m = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: s,
						...a
					} = e;
					const c = Object(i.b)(n),
						d = r.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [r.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? r.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? d : r.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [r.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return o.a.createElement(l, a, u)
				},
				p = e => o.a.createElement(l, null, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
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
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
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
					}) : s.a.createElement(i.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/keycodes.ts");
			class a extends s.a.Component {
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
							a = e.key === o.b.ArrowDown;
						if (s || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = r ? t.indexOf(r) : 0,
								a = t[((s ? o - 1 : o + 1) + t.length) % t.length];
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
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return s.a.cloneElement(n, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				g = n("./src/reddit/selectors/meta.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				E = n("./node_modules/reselect/es/index.js"),
				y = n("./src/reddit/controls/Score/index.m.less"),
				j = n.n(y);
			const S = {
					placement: "right"
				},
				k = e => e.voteState === x.a.downvoted ? Object(_.a)(e).voteText.downvote : e.voteState === x.a.upvoted ? Object(_.a)(e).voteText.upvote : Object(h.a)(Object(f.a)(e)),
				w = Object(E.c)({
					locale: e => Object(g.j)(e),
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
				P = () => 0,
				T = Object(d.b)(w),
				I = Object(o.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : k(e)
						},
						{
							score: n,
							postId: o = "",
							locale: f,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: _,
							shouldShowUpvoteRatioOnHover: x,
							post: g
						} = e,
						C = Object(d.d)(),
						E = null == f ? void 0 : f.startsWith("en"),
						y = e.isScoreHidden ? E ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: j.a.dot
						}, "•") : Object(a.b)(n),
						w = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && C(Object(l.H)({
								postId: o,
								delta: t
							}))
						}, [C, o]),
						T = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						I = !e.isScoreHidden && h && n < O.a,
						A = Object(v.a)(S),
						N = n < 0 ? 0 : n;
					return c.a.createElement("div", {
						className: Object(s.a)(j.a.score, e.className),
						style: t,
						onMouseEnter: x ? A.show : void 0,
						onMouseLeave: x ? A.hide : void 0,
						ref: x ? A.target.ref : void 0
					}, (I || _) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: N,
						countToUpperBound: N,
						initialDelay: P,
						subsequentRecurringDelay: P,
						incrementDelta: P,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: T.current,
						onDataCB: w,
						isLoadTestOnly: _ && !I
					})), !I && y, x && g && c.a.createElement(m.a, A, c.a.createElement(p.a, {
						className: j.a.viewCount,
						post: g,
						showViewCount: !1
					})))
				});
			t.a = T(I)
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
				return a
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
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
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
				b = e => Object(r.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(o.a)(Object(s.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return _
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/makeCommentsPageKey/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
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
						s = n && Object(r.a)(n.postId);
					if (!n || !s) return null;
					const c = {
							commentId: t,
							commentsPageKey: s
						},
						d = t && s && Object(o.j)(e, c) || 0;
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
					action: s.c.CLICK,
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
					action: s.c.VIEW,
					noun: "warning",
					post: Object(i.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				_ = e => t => ({
					...d(t, e),
					source: "chat_post",
					action: s.c.CLOSE,
					noun: "warning",
					post: Object(i.K)(t, e),
					actionInfo: {
						pageType: "spam_rate_countdown"
					}
				}),
				x = e => t => ({
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
				g = (e, t, n) => r => ({
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
						...Object(i.o)(e),
						subreddit: Object(i.lb)(e),
						profile: Object(i.T)(e),
						actionInfo: {
							...Object(i.d)(e),
							paneName: (null === window || void 0 === window ? void 0 : window.parent) !== window ? "chat_tab" : (null === (t = null == e ? void 0 : e.platform.currentPage) || void 0 === t ? void 0 : t.locationState.clickSource) || ""
						},
						source: "chat_post",
						action: s.c.VIEW,
						noun: "hint"
					}
				},
				E = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: s.c.CLICK,
						noun: "chat_thread",
						actionInfo: Object(i.d)(t, {
							pageType: "actions_menu"
						})
					}
				},
				y = e => t => {
					const n = d(t, e);
					return n.comment.type = "thread_chat", {
						...n,
						source: "live_post",
						action: s.c.SUBMIT,
						noun: "comment",
						actionInfo: Object(i.d)(t)
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
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...s.o(e),
					screen: s.cb(e),
					subreddit: s.lb(e),
					userSubreddit: s.ub(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.e.Moderator,
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
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
					...i(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => s => ({
					...i(s),
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
					...i(r),
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
					...i(r),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => r => ({
					...i(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: s.U(r, t),
					subreddit: s.mb(r, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				v = (e, t) => f(e, t, "enable_in_community")
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
				return _
			})), n.d(t, "clickAwardReportFlow", (function() {
				return O
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return g
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return C
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickReportAward", (function() {
				return j
			})), n.d(t, "clickCancelReportAward", (function() {
				return S
			})), n.d(t, "clickConfirmReportAward", (function() {
				return k
			})), n.d(t, "viewGildModalEvent", (function() {
				return w
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return P
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), n.d(t, "clickMessageInputEvent", (function() {
				return I
			})), n.d(t, "typeMessageInputEvent", (function() {
				return A
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return L
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return D
			})), n.d(t, "clickNextButtonEvent", (function() {
				return F
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return U
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), n.d(t, "clickFilterEvent", (function() {
				return V
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var r = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/GoldPurchase.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/isComment.ts"),
				l = n("./src/reddit/selectors/gild.ts");
			const u = e => e.awardType === s.e.Global && e.awardSubType === s.d.Appreciation ? i.GoldPurchaseType.GidAppreciation : e.awardType === s.e.Global && e.awardSubType === s.d.Premium ? i.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? i.GoldPurchaseType.GidGroup : e.awardType === s.e.Community ? i.GoldPurchaseType.GidCommunity : e.awardType === s.e.Moderator ? i.GoldPurchaseType.GidMod : e.awardType === s.e.Global && e.awardSubType === s.d.Global ? i.GoldPurchaseType.GidGlobal : i.GoldPurchaseType.GidUnknown,
				m = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: u(e),
					...t
				}),
				p = (e, t, n) => {
					const s = t && Object(o.g)(e, {
						commentId: t
					});
					return {
						...a.o(e),
						actionInfo: a.d(e, {
							reason: s ? "live_post" : void 0,
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
						listing: t ? Object(r.k)(e, t) : void 0
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
				_ = (e, t) => n => ({
					...p(n, t),
					source: Object(d.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: m(e)
				}),
				x = e => (t, n) => r => ({
					...p(r, n),
					source: Object(d.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: m(t)
				}),
				O = x("award_hovercard_report"),
				g = x("cancel_award_hovercard_report"),
				C = x("flag_award"),
				E = x("cancel_flag_award"),
				y = x("confirm_flag_award"),
				j = x("report_community_award"),
				S = x("cancel_report_community_award"),
				k = x("confirm_report_community_award"),
				w = (e, t, n) => r => ({
					...p(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				P = (e, t, n) => r => ({
					...p(r, t),
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
				A = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
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
				R = (e, t) => n => ({
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
				U = e => t => ({
					...p(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = e => {
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
				return _
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
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
					} = t, f = !!n, h = o.b(e), v = h ? Object(u.getAwardTypeFromAward)(h) : null, _ = f ? v : i.p(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, x = n ? Object(p.a)(n) ? "comment" : "post" : void 0, O = l || i.u(e), g = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === O)[0], C = t.offerContext || (h && 0 === h.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(g, f)), E = g ? Math.round(1e4 * (g.baselinePennies - g.pennies) / g.baselinePennies) / 100 : 0, y = g ? Math.round(1e4 * (g.coins - g.baselineCoins) / g.coins) / 100 : 0, j = g ? g.baselinePennies !== g.pennies ? `${E}_percent_price` : g.baselineCoins !== g.coins ? `${y}_percent_bonus` : void 0 : void 0, S = _ === d.GoldPurchaseType.Premium ? r.Db : g ? g.pennies : void 0;
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
							type: _,
							gildedContent: f,
							contentType: x,
							numberCoins: g ? g.coins : void 0,
							offerContext: C,
							offerType: j
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
				_ = e => t => ({
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
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				g = (e, t) => n => ({
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
							source: e ? d.GiveGold : i.p(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				y = e => t => {
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
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.T(e),
					screen: i.cb(e),
					subreddit: i.lb(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(a.i)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(r),
					post: i.K(r, e)
				}),
				l = (e, t, n, r) => s => {
					const a = n ? i.h({
							state: s,
							commentId: n
						}) : null,
						{
							sortToUse: c
						} = Object(o.a)(s, e);
					return {
						...d(e, t, r)(s),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const r = i.k(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(a.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...d(e, t)(n),
					...i.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...c(t),
					post: i.k(t),
					userSubreddit: i.ub(t)
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
				return _
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.cb)(e),
					profile: Object(s.T)(e),
					subreddit: Object(s.lb)(e),
					userSubreddit: Object(s.ub)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => n => ({
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
					subreddit: Object(s.ob)(n, t)
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
					subreddit: Object(s.ob)(n, t)
				}),
				_ = (e, t, n, r) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.K)(o, n),
					subreddit: Object(s.ob)(o, n),
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
				x = () => e => ({
					...o(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				}),
				O = (e, t, n) => r => ({
					...o(r),
					source: "moderator",
					noun: "action",
					action: "click",
					actionInfo: {
						pageType: "mod_queue",
						paneName: n,
						reason: t
					},
					comment: Object(s.h)({
						state: r,
						commentId: e
					}) || void 0,
					post: Object(s.K)(r, e)
				}),
				g = (e, t) => n => ({
					...o(n),
					source: "moderator",
					noun: "add_note_mod_queue",
					action: "click",
					comment: Object(s.h)({
						state: n,
						commentId: e
					}) || void 0,
					post: Object(s.K)(n, e),
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
				return _
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return A
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.o(e),
					screen: s.cb(e),
					subreddit: s.lb(e),
					userSubreddit: s.ub(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.q)(e)
				}),
				i = () => e => ({
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
					scheduledPost: a(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: a(e)
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
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				x = () => e => ({
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
				g = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				C = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : g[e],
					...o(t)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				y = (e, t, n) => a => ({
					source: "post",
					action: "click",
					noun: Object(r.m)(e),
					...o(a),
					actionInfo: s.d(a, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				j = () => e => ({
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
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: a(t)
				}),
				P = () => e => ({
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
					scheduledPost: a(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				A = () => (e, t) => {
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
				return _
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "o", (function() {
				return P
			}));
			var r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = {
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
					return Object(s.a)(t) && Object.assign(n, i), n
				},
				d = (e, t) => n => {
					const {
						id: r
					} = Object(a.Cb)(n, {
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
					snoovatar: o.jb(e)
				}),
				u = e => ({
					...o.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.jb(e)
				}),
				m = e => ({
					...o.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.jb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.o(e),
					...i
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...o.o(e),
					...i
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
					snoovatar: o.jb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				v = h("view"),
				_ = h("click"),
				x = h("dismiss"),
				O = (e, t, n) => () => r => ({
					source: e,
					action: t,
					noun: n,
					...o.o(r),
					snoovatar: o.jb(r)
				}),
				g = O("anniversary_achievement", "view", "anniversary_achievement"),
				C = O("anniversary_achievement", "click", "close"),
				E = O("anniversary_achievement", "click", "equip"),
				y = e => () => t => ({
					...o.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				j = y("view"),
				S = y("click"),
				k = (e, t, n) => r => ({
					source: e,
					action: t,
					noun: n,
					...o.o(r),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: o.jb(r)
				}),
				w = e => k("onboarding", "click", e),
				P = () => k("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
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
				a = e => t => {
					const n = s.lb(t),
						{
							userFlair: o,
							achievementFlair: a
						} = e;
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
					subreddit: s.lb(t),
					...s.o(t)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/lib/hooks/useTooltip.ts");
			const a = Object(r.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(s.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, a))
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
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
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
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
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
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

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
				className: Object(o.a)(i.a.icon, e.className),
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
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const a = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
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
				return _
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "q", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
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
				_ = e => h[b[e]],
				x = e => f[b[e]],
				O = e => b[f[e]],
				g = e => h[f[e]];
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
				y = "custom",
				j = e => {
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
				S = e => "frequency" in e && !!e.frequency
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
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
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
						(o = e.placement ? e.placement === i.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(a.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(a.b)(r, s)
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
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(r || (r = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(s || (s = {}));
			const i = {
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
					const r = t && new Date(t) <= new Date,
						s = !!n && new Date(n) < new Date;
					return !!r && !s
				},
				h = e => {
					const {
						id: t,
						tags: n,
						webAssetUrls: r
					} = e, [s, o] = r, a = n.reduce((e, t) => {
						if (!t) return e;
						const n = Object.values(b).find(e => t.startsWith(e));
						return n ? (e[n] = t.slice(n.length + 1), e) : e
					}, {});
					return {
						id: t,
						maxViews: parseInt(a[b.MaxEventViews], 10),
						banner: {
							id: t,
							iconUrl: s,
							title: a[b.BannerTitle],
							body: a[b.BannerBody]
						},
						imageUrl: o,
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

			function _(e) {
				const t = {};
				return e.forEach(e => {
					var n;
					const {
						webAssetUrls: r,
						tags: s
					} = e;
					if (!(null == s ? void 0 : s.includes(p))) {
						if ((null == s ? void 0 : s.includes(m)) && r && r.length >= 2 && (t.pushcard = h(e)), null == s ? void 0 : s.includes(l)) {
							const {
								text: n,
								id: o
							} = e, a = r || null, i = v(s);
							t.quickCreateV1 = {
								...i,
								id: o,
								text: n,
								active: f(e) && !!a,
								webAssetUrls: a
							}
						}
						if (null == s ? void 0 : s.includes(u)) {
							const o = r || null,
								a = (null === (n = s.find(e => (null == e ? void 0 : e.startsWith("feature:")) && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
							t.marketingEvent = {
								active: f(e) && !!o,
								assetUrls: o,
								experimentRequired: a
							}
						}
					}
				}), t
			}
			var x = n("./src/reddit/actions/economics/marketplace/constants.ts"),
				O = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				g = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/constants/modals.ts");
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n, r;
				switch (t.type) {
					case O.s:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? {
							...d,
							..._(s)
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
					case g.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === C.a.SNOOVATAR_MODAL ? {
							...d,
							pushcard: null !== (r = null == e ? void 0 : e.pushcard) && void 0 !== r ? r : null
						} : e;
					default:
						return e
				}
			};
			var y = function() {
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
			t.a = Object(o.c)({
				marketing: E,
				avatarUser: c,
				randomAvatar: y
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var a = function() {
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
			const i = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
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
				postOtherDiscussions: a,
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
				return a
			})), n.d(t, "c", (function() {
				return i
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
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/avatar/index.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(r.a)({
				features: {
					avatar: s.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				i = e => {
					var t, n, r, s;
					const a = null === (r = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === r ? void 0 : r.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (s = null == a ? void 0 : a.assetUrls) || void 0 === s ? void 0 : s.length)) return null;
					const i = a.assetUrls[0];
					return !a.experimentRequired || Object(o.a)(a.experimentRequired)(e) ? i : null
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/reselect/es/index.js");
			const s = e => !(e.chat.isInited || e.chat.unread.api.pending),
				o = e => e.chat.liveChatTooltipShowState,
				a = Object(r.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
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
				a = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts");
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
						fromComments: a,
						fromPosts: i
					} = o;
					return {
						fromComments: a,
						fromPosts: i
					}
				},
				u = (e, t, n) => {
					const r = Object(a.G)(e, {
						postId: t
					});
					if (!r || r.isSponsored || r.removedByCategory) return !1;
					const s = Object(a.V)(e, {
						postId: t
					});
					if (s && s.isQuarantined) return !1;
					const c = !n && !!Object(o.m)(e, {
						postId: t
					});
					return Object(i.Fb)(e, {
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
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.h
					});
					return t === r.l.VoteCountOnly || t === r.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.h
					});
					return t === r.l.CommentCountOnly || t === r.l.VoteAndCommentCount
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
					if (Object(i.d)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= c || Object(a.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.VoteCountOnly || l === r.l.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const s = e.posts.models[n];
					if (Object(i.d)(e) || !s || s.isSponsored || s.numComments >= c || Object(a.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: r.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === r.l.CommentCountOnly || l === r.l.VoteAndCommentCount
				},
				f = e => {
					if (Object(a.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: r.yc
					}) === r.gd.Enabled
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
					experimentName: r.cf
				}) === r.Od
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Yf,
					experimentEligibilitySelector: o.a
				}), e => e),
				i = Object(r.a)(a, e => e === s.Sf)
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
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
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
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
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
					const a = Object(d.d)(e),
						c = l.find(e => e >= r),
						u = s ? Object(i.G)(e, {
							postId: s
						}) || Object(o.c)(e, {
							commentId: s
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
					const s = Object(c.Cb)(e, {
						userName: r
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return b(e, {
						award: s.awardedLastMonth.topAward,
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
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
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
				return _
			})), n.d(t, "x", (function() {
				return x
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return I
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
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
					const t = Object(r.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				g = e => e.features.goldPurchase.payment.rememberCard,
				C = e => e.features.goldPurchase.payment.useSavedCard,
				E = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				j = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				w = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				P = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				I = e => e.features.goldPurchase.payment.paypal.errorMessage
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
				a = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
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
					let s = Object(a.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (s = e.media.markdownContent), s === n
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
					let s = Object(a.b)(e);
					return s || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (s = e.media.markdownContent), s === n
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
				f = Object(s.a)(d.m, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(s.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(s.S)(e);
					if (a(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Sb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
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
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${r.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${r.a.redditUrl}${c}`, n)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.0091b1e2b7df40d57ccb.js.map