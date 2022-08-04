// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.53b1f309fa71963bd919.js
// Retrieved at 8/4/2022, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
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
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !O && /[^-]mobi/i.test(t),
						C = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: _ || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: _ || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: v
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || _
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
						version: _ || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, _ && (o.version = _)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, _ && (o.version = _)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && _ && (o.version = _)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : C ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var S = "";
					o.windows ? S = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? S = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? S = (S = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? S = (S = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? S = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? S = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? S = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? S = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (S = s(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (o.osversion = S);
					var g = !o.windows && S.split(".")[0];
					return O || c || "ipad" == r || i && (3 == g || g >= 4 && !E) || o.silk ? o.tablet = e : (E || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, o) {
				return o(e, (function(e, o, r) {
					s = n ? (n = !1, e) : t(s, e, o, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				o = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = o(s)) == s ? s : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, s)
			}
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
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(o);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: o,
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (o) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = i || Object(n.D)(e)
				} else c = Object(n.D)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e) {
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
				o = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), f = Object(o.useCallback)(() => m(!u), [u]), h = Object(o.useMemo)(() => {
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
					update: _
				} = Object(r.a)(t, i, h);
				return Object(o.useMemo)(() => ({
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
					update: _
				}), [l, x, c, b, p, v, t, s, f, u, _])
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
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = [o.sc, o.pb, o.B, o.Q, o.kb, o.Sb],
				i = {
					[o.Sb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.kb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.Q]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.B]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.pb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.sc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Sb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.Q]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.B]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.sc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.sc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.sc]: "",
						[o.pb]: "",
						[o.B]: "",
						[o.Q]: "",
						[o.kb]: "",
						[o.Sb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? a : i)[n](e).toString()), u -= e * n
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
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
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
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
				return _
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "o", (function() {
				return C
			}));
			const n = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
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
				_ = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				o = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (s, i, a) => {
					let {
						routes: c
					} = a;
					const d = i();
					Object(n.a)(e, c, d) ? s(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
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
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				a = s.n(i);

			function c(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n
				} = e, i = Object(r.a)(a.a.adLinkWrapper, t, {
					[a.a.ctaExperiment]: !!s,
					[a.a.borders]: "classic" === s,
					[a.a.borderTop]: "compact" === s || "conversation" === s,
					[a.a.borderBottom]: "card" === s
				});
				return o.a.createElement("div", {
					className: i
				}, n)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				u = s.n(l);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: l,
					callToAction: m,
					caption: p
				} = t;
				if (!l || !l.url) return null;
				let b = l.displayText;
				l.displayText.length >= 40 && (b = l.displayText.slice(0, 40 - "...".length) + "...");
				const f = Object(d.s)(s, l.displayText),
					h = Object(d.t)(s) ? b : p,
					x = Object(d.t)(s) ? s.subcaption : l.displayText,
					v = Object(i.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					_ = Object(i.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: v
				}, p && !o && !f && r.a.createElement("span", {
					className: u.a.caption,
					title: p
				}, p), !f && r.a.createElement(c.a, {
					href: l.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: l,
					className: _
				}, b), f && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: u.a.productTitle
				}, h), r.a.createElement("span", {
					className: u.a.subcaption
				}, x))), m && r.a.createElement(a.a, {
					className: u.a.callToAction,
					href: l.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: l,
					showCTAExperiment: !!e.ctaExperimentDesign
				}, m))
			}
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
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
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return o.a.createElement(i.b, d({
					className: Object(r.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: n.isNotCardView,
						[c.a.ctaExperiment]: !!s
					})
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(i.a, {
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
			const o = Object(n.a)({
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
			t.a = o
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
			const u = Object(i.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(a.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
				o = s.n(n),
				r = s("./src/lib/hooks/usePrevious.ts"),
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
					shouldDisjointAnimation: _,
					subsequentRecurringDelay: O
				} = e, [E, C] = Object(n.useState)(!1), [S, g] = Object(n.useState)(!0), [y, j] = Object(n.useState)([]), [T, P] = Object(n.useState)(c(p).reverse()), k = Object(n.useRef)(!1), N = Object(n.useRef)(null), I = Object(n.useRef)(e => {}), w = Object(n.useRef)();
				I.current = Object(n.useCallback)(e => {
					let s = e || d();
					const n = [...T].reverse().join("");
					let o = parseInt(n) + s;
					o > t && (s = t - parseInt(n), o = t);
					const r = c(o).reverse();
					C(!1), j(T), P(r), g(!1), w.current = setTimeout(() => {
						C(!0)
					}, 0)
				}, [t, d, T]);
				const A = Object(n.useRef)(() => {}),
					L = Object(n.useRef)(),
					M = Object(n.useRef)();
				A.current = Object(n.useCallback)(() => {
					M.current = setTimeout(() => {
						I.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && A.current()
					}, O())
				}, [t, O, y]);
				const D = Object(n.useRef)(0),
					F = Object(n.useRef)(!1),
					R = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, n = 1 !== s;
							t ? (F.current = !0, k.current || (k.current = !0, L.current = setTimeout(() => {
								I.current(), A.current()
							}, u())), D.current > 0 && (I.current(D.current), D.current = 0)) : n && (F.current = !1)
						})
					}, []);
				Object(a.a)(N, R);
				const [B, U] = Object(n.useState)(!1), V = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, n = 1 !== s;
						t ? U(!0) : n && U(!1)
					})
				}, []), W = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(N, V, W.current);
				const H = Object(r.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== H && H !== t) {
						const e = t - H;
						F.current ? I.current(e) : D.current += e
					}
					return () => {
						clearTimeout(L.current), clearTimeout(M.current), clearTimeout(w.current)
					}
				}, [t]);
				const Y = Object(n.useCallback)(() => g(!0), [g]),
					q = 0 === y.length,
					G = S || q,
					z = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, s));
				return o.a.createElement(o.a.Fragment, null, !b && o.a.createElement("div", {
					className: l.a.countAnimation
				}, T.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const n = Math.abs(t),
							o = [s];
						if (s === n) return o;
						let r = !0;
						for (; r;) ++s > 9 && (s = 0), o.push(s), s === n && (r = !1);
						return o
					})(y[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: Y,
						style: E && y.length > 0 && !S ? {
							transform: `translateY(-${_&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(_?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, G ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!_ || _ && n) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...T].reverse().join(""))), o.a.createElement("span", {
					ref: N
				}), B && o.a.createElement(i.a, {
					variables: v,
					onData: b ? m : f,
					queryKey: x,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
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
			const o = 16374492e5,
				r = 45 * n.B;
			var i;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(i || (i = {}));
			const a = e => {
					return e < Date.now() - r
				},
				c = e => e > o,
				d = (e, t, s, n) => {
					if (!s && !c(e.created)) return i.NotAvailable;
					if (s && !c(e.created) || a(e.created)) return i.Expired;
					if (s && n) return i.Quarantined;
					if (!t) return i.NotAvailableYet;
					const {
						shareAllCountTotals: o,
						shareCopyCountTotals: r,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == o ? void 0 : o.availability.isAvailable) && (null == r ? void 0 : r.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? i.NotAvailableYet : i.Available : i.NotAvailableYet
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
				return g
			})), s.d(t, "a", (function() {
				return y
			}));
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
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				E = s.n(O),
				C = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = 8,
				y = 1,
				j = C.a.div("Container", E.a),
				T = C.a.div("PostMetaWrapper", E.a),
				P = C.a.wrapped(p.c, "PostTitle", E.a),
				k = C.a.div("FlatList", E.a),
				N = C.a.div("FlatItem", E.a),
				I = C.a.span("FlatListDotSpacer", E.a),
				w = C.a.wrapped(j, "LinkContainer", E.a),
				A = C.a.div("Content", E.a),
				L = C.a.div("ThumbnailContainer", E.a),
				M = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Nb.TOPIC),
					shouldOpenPostInNewTab: _.jb
				}),
				D = Object(i.b)(M);
			t.c = Object(x.b)(D(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
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
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return i && !i.media ? r.a.createElement(w, {
					className: d
				}, r.a.createElement(A, null, r.a.createElement(T, null, r.a.createElement(m.a, c)), F(i), i.source && r.a.createElement(b.a, {
					post: i
				}), B(e)), V(e)) : r.a.createElement(j, {
					className: d
				}, r.a.createElement(T, null, r.a.createElement(m.a, c)), F(i), R(e), B(e))
			}));
			const F = e => r.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, S({}, n, {
						className: E.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(k, null, r.a.createElement(N, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(N, null, U(e)))
				},
				U = e => {
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
				V = e => r.a.createElement(L, null, r.a.createElement(f.a, {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
					o = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					u = Object(i.e)(e => Object(d.V)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(m, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
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
					f = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !m && f && o.a.createElement(d.a, {
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
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => o.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", f.a),
				v = h.a.span("PostEventPastText", f.a),
				_ = h.a.span("PostEventNowText", f.a),
				O = h.a.span("Container", f.a),
				E = h.a.wrapped(u, "CalendarIcon", f.a),
				C = h.a.wrapped(m, "LiveIcon", f.a),
				S = h.a.div("LoadingState", f.a);
			class g extends n.Component {
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
					} = s, d = Object(r.e)(c, n);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(S, {
							className: e
						})
					}
					if (a) u = o.a.createElement(_, null, o.a.createElement(C, null), l);
					else if (d === r.a.Future) u = o.a.createElement(x, null, o.a.createElement(E, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(v, null, o.a.createElement(E, null), l)
					}
					return o.a.createElement(O, {
						className: e
					}, u)
				}
			}
			t.a = g
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
			t.a = e => i.a.createElement(a.i, {
				className: l.a.modalHeader
			}, i.a.createElement(a.q, null, e.title), i.a.createElement(c.a, {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				_ = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = s("./src/reddit/icons/svgs/Search/index.tsx"),
				S = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				g = s.n(S);
			class y extends r.a.Component {
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
						selectedTemplateId: s
					} = this.props, {
						searchQuery: o
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), a = !!s && i.some(e => e.id === s);
					return r.a.createElement("div", {
						className: g.a.container
					}, r.a.createElement("div", {
						className: g.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: g.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), r.a.createElement(C.a, {
						className: g.a.searchIcon
					})), r.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							o = s === e.id || !a && 0 === t;
						return r.a.createElement(_.a, {
							className: g.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, r.a.createElement(h.b, {
							className: g.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(E.a, {
							className: g.a.pencil
						}))
					})))
				}
			}
			var j = Object(x.c)(y),
				T = s("./src/reddit/components/FlairSearch/index.m.less"),
				P = s.n(T);
			const k = Object(d.a)(e => e && Object(u.c)(e)),
				N = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				I = Object(i.b)(N);
			t.a = I(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: o,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, x = Object(p.a)(), v = d && s && s.templateId && d[s.templateId] || void 0, _ = Object(f.a)(), O = s || k(v);
				return r.a.createElement("div", {
					className: Object(c.a)(o, P.a.container)
				}, d && l && r.a.createElement(j, {
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
				}), O && v && (h || v.textEditable) && r.a.createElement("div", {
					className: P.a.flairEditSection
				}, r.a.createElement("div", {
					className: P.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && r.a.createElement("div", {
					className: P.a.restrictionHintText
				}, Object(u.k)(v)), r.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
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
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				_ = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				w = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				A = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/CreatorStats/loader.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				U = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				V = s("./src/reddit/components/ModModeReports/index.tsx"),
				W = s("./src/reddit/components/ModModeReports/helpers.ts"),
				H = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = s("./src/reddit/components/PostContainer/index.tsx"),
				G = s("./src/reddit/components/PostLeftRail/index.tsx"),
				z = s("./src/reddit/components/PostMedia/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				K = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				Z = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Q = s.n(Z);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = () => o.a.createElement("div", {
					className: Q.a.container
				}, o.a.createElement(K.a, {
					className: Q.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: Q.a.metaText
				}, X._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ee = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				te = s("./src/reddit/components/PostTitle/index.tsx"),
				se = s("./src/reddit/components/PostTopLine/index.tsx"),
				ne = s("./src/reddit/components/SourceLink/index.tsx"),
				oe = s("./src/reddit/constants/postLayout.ts"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/contexts/Post/index.tsx"),
				ce = s("./src/reddit/helpers/isCrosspost.ts"),
				de = s("./src/reddit/helpers/localStorage/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				ue = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				me = s("./src/reddit/models/Audio/index.ts"),
				pe = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				be = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				fe = s("./src/reddit/constants/experiments.ts"),
				he = s("./src/reddit/helpers/chooseVariant/index.ts"),
				xe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ve = Object(a.a)(T.N, e => e.some(xe.d)),
				_e = Object(a.a)(ve, e => e),
				Oe = (e, t) => Object(he.c)(e, {
					experimentName: fe.Sc,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && _e(e, {
							listingKey: s
						})
					}
				});
			var Ee = s("./src/reddit/selectors/postFlair.ts"),
				Ce = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ge = s.n(Se),
				ye = s("./src/reddit/selectors/i18n/index.ts"),
				je = s("./src/reddit/selectors/experiments/adblockAcceptableAdsMitigationExperiment.ts"),
				Te = s("./src/reddit/components/LargePost/index.m.less"),
				Pe = s.n(Te);
			const ke = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(T.N)(e, {
						listingKey: s
					}) : void 0
				},
				Ne = Object(r.b)(() => Object(a.c)({
					autoplayPref: P.b,
					activeModalId: g.a,
					hideNSFWPref: P.F,
					flairStyleTemplate: ie.W,
					isBlurredPreview: be.b,
					isCurrentUserProfilePost: T.l,
					isLoggedIn: P.Q,
					isActive: T.j,
					showPromotedCTA: Ce.a,
					moderatorPermissions: j.m,
					modModeEnabled: ie.U,
					posts: ke,
					postHeightVariant: Oe,
					shouldShowNsfwListingBelow: ye.b,
					showEditFlair: Ee.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(j.i)(e, s.id)
					},
					isAdblockAAMitigationEnabled: je.a,
					isOptionalTextEnabled: pe.a,
					showCTAExperimentDesign: y.a
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === S.a.upvoted ? Object(m.kb)(s) : Object(m.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(m.gb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ie = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						currentUser: a,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: S,
						hideNSFWPref: g,
						hostPostData: y,
						imageGalleryCurrentItem: j,
						inSubredditOrProfile: T = !1,
						isBlurredPreview: P,
						isCommentsPage: K,
						isCurrentUserProfilePost: Z,
						isFrontpage: Q,
						isGalleryTileLayoutDefault: X,
						isModWithUserNotesPermissions: re,
						isLoggedIn: ie,
						isOverlay: ae,
						isTopicPage: pe,
						isCommentCountAnimationEnabled: be,
						isVoteCountAnimationEnabled: he,
						isCountAnimShadowTestEnabled: xe,
						listingIndex: ve,
						listingKey: _e,
						moderatorPermissions: Oe,
						modModeEnabled: Ee,
						onClickPost: Ce,
						onIgnoreReports: Se,
						onOpenReportsDropdown: ye,
						post: je,
						postHeightVariant: Te,
						scrollerItemRef: ke,
						shouldShowGalleryTileOption: Ne,
						shouldShowInsightsButton: Ie,
						shouldShowNsfwListingBelow: we,
						showEditFlair: Ae,
						showPromotedCTA: Le,
						subredditOrProfile: Me,
						userIsOp: De,
						postId: Fe,
						postIds: Re,
						onceInViewport: Be,
						isAdblockAAMitigationEnabled: Ue,
						isOptionalTextEnabled: Ve,
						showCTAExperimentDesign: We
					} = e, He = Object(O.a)(), Ye = !!e.redditStyle || !!e["data-redditstyle"], qe = Ye ? void 0 : p, Ge = Object(l.a)(Oe), ze = Ee && Ge, Je = Object(c.a)(Oe), Ke = Object(d.a)(Oe), Ze = Object(W.c)(je), Qe = Object(U.a)(je), Xe = !!je.media && je.media.type === E.o.RTJSON, $e = De && Xe, et = s ? s - G.a : void 0, tt = !!je.recommendationContext, st = !(Q && ie || pe) || tt && ie, nt = (e => e === fe.We.OnlyTitles)(Te) && !Object(ce.a)(je), ot = (e => e === fe.We.MediumHeight)(Te) && !Object(ce.a)(je), rt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(C.u)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							i = n && 1 === n.indexOf(s.id),
							a = o && o[1] && Object(C.u)(o[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: i,
							showPinnnedHeader: r
						}
					})(e), it = !!(null == y ? void 0 : y.shouldShowLinkedPosts), at = (!T || it || we) && !je.isSponsored, ct = Object(k.t)(je, j), {
						source: dt
					} = ct, lt = Object(n.useRef)(null), ut = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Be || Be(ve))
						})
					}, [Be, ve]);
					Object(_.a)(lt, ut);
					const [mt, pt] = Object(n.useState)(!1), bt = Object(n.useCallback)(() => {
						pt(!mt), Object(de.Mb)(), He(Object(ue.d)(Fe))
					}, [mt, He, Fe]), ft = je.isSponsored && !(je.media && E.a.has(je.media.type)) && !Ue, ht = !!(P && (null == Me ? void 0 : Me.isNSFW)), xt = Object(n.useRef)({
						renderingObjectInfo: je
					});
					return o.a.createElement(v.b, null, o.a.createElement(q.a, {
						className: Object(N.a)(Pe.a.container, r, ge.a.largeAndMediumPostStyles, ge.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[ge.a.mUseRedditTheme]: Ye,
							promotedvideolink: ft,
							[Pe.a.topCompactPost]: rt && rt.hasTopCompactPostStyles,
							[Pe.a.bottomCompactPost]: rt && rt.hasBottomCompactPostStyles,
							[Pe.a.shouldShowOverflow]: Ie
						}),
						isOverlay: ae,
						style: Object(u.b)(e.flairStyleTemplate),
						post: je,
						onClick: Ce,
						eventFactory: m
					}, o.a.createElement("div", {
						ref: lt
					}), o.a.createElement(ee.a, {
						model: je,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: xe,
						isVoteCountAnimation: he,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: qe,
						redditStyle: Ye,
						postId: Fe
					}), o.a.createElement(Y.a, {
						className: Object(N.a)(Pe.a.backgroundWrapper, {
							[Pe.a.isEvent]: Object(le.a)(je),
							[Pe.a.shouldUseRoundedBorder]: Ie
						}),
						"data-click-id": "background",
						flairStyleTemplate: qe,
						post: je,
						redditStyle: Ye
					}, o.a.createElement(D.a, {
						post: je
					}), rt && rt.showPinnnedHeader && o.a.createElement($, null), Object(i.c)(je) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: je
					}), o.a.createElement(f.a, {
						post: je
					})), !Object(i.c)(je) && o.a.createElement(o.a.Fragment, null, !!je.recommendationContext && o.a.createElement(H.a, {
						content: je.recommendationContext.content,
						layout: oe.g.Large,
						post: je
					}), o.a.createElement(se.a, {
						className: Pe.a.postTopLine,
						hideNSFWPref: g,
						hostPostData: y,
						iconClassName: Pe.a.postTopLineIcon,
						inSubredditOrProfile: T,
						isCommentsPage: !!K,
						isCompactPinnedPost: !!rt,
						isCurrentUserProfilePost: Z,
						isModWithUserNotesPermissions: re,
						isOverlay: !!ae,
						isTopicPage: !!pe,
						listingKey: _e,
						post: je,
						shouldShowSubscribeButton: st,
						showSubreddit: at,
						showSubredditIcon: !0,
						subredditOrProfile: Me
					}), o.a.createElement(te.c, {
						className: Pe.a.postTitle,
						post: je,
						redditStyle: Ye,
						size: te.b.Large,
						titleColor: qe && qe.postTitleColor,
						isOverlay: ae
					}), je.source && !je.isSponsored && !(je.media && Object(E.H)(je.media)) && !ht && o.a.createElement(o.a.Fragment, null, o.a.createElement(ne.a, {
						className: Pe.a.sourceLink,
						post: je
					}), Ve && je.media && je.media.type !== E.o.TEXT && je.media.type !== E.o.IMAGE && je.media.richtextContent && o.a.createElement(x.a, {
						content: je.media.richtextContent,
						rtJsonElementProps: xt.current
					}))), o.a.createElement("div", {
						className: Pe.a.postMediaWrapper
					}, !rt && o.a.createElement(z.a, {
						isGalleryTileLayoutDefault: X,
						isListing: !0,
						isMediumHeight: ot,
						isNotCardView: !!ae,
						isTitleOnly: nt,
						showCentered: !0,
						flairStyleTemplate: qe,
						post: je,
						availableWidth: et,
						shouldLoad: S,
						scrollerItemRef: ke,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ne,
						showPromotedCTA: Le
					})), Le && dt && dt.url && !je.isSurveyAd && o.a.createElement(I.a, {
						className: Pe.a.adLinkWrapper,
						ctaExperimentDesign: We && "card"
					}, o.a.createElement(w.a, {
						post: je,
						adLinkContent: ct,
						ctaExperimentDesign: We && "card"
					})), Ee && Ge && Qe && o.a.createElement("div", {
						className: Pe.a.modModeBannerWrapper
					}, o.a.createElement(B.a, {
						thing: je
					})), Ee && Ge && Ze && o.a.createElement("div", {
						className: Pe.a.modModeBannerWrapper
					}, o.a.createElement(V.a, {
						onIgnoreReports: Se,
						reportable: je
					})), Object(me.b)(je) && o.a.createElement(b.a, {
						post: je
					}), o.a.createElement(R.d, null), o.a.createElement("div", {
						className: Pe.a.flatListContainer
					}, o.a.createElement(L.a, {
						className: Pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: qe,
						model: je,
						onVoteClick: e.handleVote
					}), !je.isSurveyAd && o.a.createElement(F.c, {
						currentUser: a,
						hasModFlairPerms: Je,
						hasModFullPerms: Ke,
						hasModPostPerms: Ge,
						hostPostData: y,
						isCommentCountAnimation: be,
						isCountAnimShadowTestEnabled: xe,
						isLargePost: !0,
						isOverlay: !!ae,
						listingKey: _e,
						modModeEnabled: Ee,
						onClickInsightsButton: bt,
						onIgnoreReports: Se,
						onOpenReportsDropdown: ye,
						post: je,
						shouldShowInsightsButton: Ie,
						showEditPost: $e,
						showEditFlair: Ae,
						useFlatlistBreakpoints: Object(J.b)({
							editPost: !1,
							save: !ze,
							hide: !1,
							report: !1
						})
					})), Me && mt && o.a.createElement(M.a, {
						className: Pe.a.creatorStatsContainer,
						post: je,
						subreddit: Me,
						isOwnProfileStats: !0
					})), Q && o.a.createElement(A.a, {
						post: je,
						postIds: null != Re ? Re : [],
						subredditId: null == Me ? void 0 : Me.id
					})))
				});
			Ie.displayName = "LargePostMemoized";
			t.default = Object(ae.b)(Ne(Object(re.b)(Ie)))
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
				return o
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
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
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(i.a, {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
					seconds: e.poll.endsAt / n.Sb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
				}, p), t)
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
						role: "presentation"
					}, o.a.createElement("div", {
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
				_ = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(O);
			const C = Object(p.a)(() => Object(r.c)({
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
				S = "post-container";
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: h,
						ref: v,
						shouldAddGalleryViewability: _ = !0
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(E.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": S,
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), C = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && _ ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || C ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(O))
				}
			}
			t.a = C(Object(_.a)(Object(m.c)(g)))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
					showViewCount: o
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
				})(s), b = o && !!s.viewCount, f = Object(i.e)(e => Object(l.a)(e, s.id)), h = Object(i.e)(e => Object(l.c)(e, s.id)), x = Object(d.c)(s, h), v = f && x === d.b.Available;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.viewCounts, t)
				}, b && r.a.createElement("span", null, p), b && !!s.upvoteRatio && r.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!s.upvoteRatio && !v && r.a.createElement("span", null, u))
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
				} : Object(i.n)(t) && !Object(i.r)(n) ? {
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
			const f = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.A)(s.isSponsored ? s.postId : s.id))
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
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
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
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				C = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: E,
					isOverlay: S,
					isTopicPage: g,
					post: y,
					shouldShowSubscribeButton: j,
					subredditOrProfile: T,
					tooltipType: P
				} = e, k = !!g, N = Object(_.a)(), I = Object(r.e)(e => !!T && Object(i.i)(e, T.id));
				return o.a.createElement("div", {
					className: C.a.metaContainer
				}, !n && !y.isSponsored && T && o.a.createElement(c.a, {
					postId: y.id,
					subredditName: T.name
				}, o.a.createElement(p.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: T.url,
						state: N
					}
				}, T.displayText)), T && T.isQuarantined && o.a.createElement(m.a, null), !n && !y.isSponsored && T && j && !E && o.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: T.name,
						type: Object(O.h)(T) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: y.id,
					size: h.d.XXS,
					small: !0
				}), !n && !y.isSponsored && o.a.createElement(x.b, null), !n && !y.isSponsored && o.a.createElement(d.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), o.a.createElement(u.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					post: y,
					tooltipType: P,
					isModWithUserNotesPermissions: I
				}), o.a.createElement(l.a, {
					displayText: T ? T.displayText : null,
					inSubredditOrProfile: !!n,
					post: y,
					tooltipType: P
				}), !k && o.a.createElement(a.a, {
					hideCta: s,
					thing: y,
					tooltipType: S ? u.c.Lightbox : void 0
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
					postId: _,
					shouldShowUpvoteRatioOnHover: O
				} = e, E = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: E,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: _,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
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
				return F
			})), s.d(t, "a", (function() {
				return J
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
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
				_ = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				E = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				C = s("./src/reddit/hooks/usePostContext.ts"),
				S = s("./src/reddit/hooks/useTheme.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				P = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/lib/getShortenedLink.ts"),
				N = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				L = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = s.n(L);
			const D = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, R = Object(a.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(E.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, M.a.proposalMetaData)
					}, i.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(w.a)(n)), I.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(A.a, {
						className: M.a.proposalExpiry,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				U = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/telemetry/models/Outbound.ts"),
				Y = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				G = s.n(q);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(F || (F = {}));
			const J = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: r,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(S.a)();
					let m = "";
					switch (t) {
						case F.ExtraLarge:
							m = G.a.ExtraLarge;
							break;
						case F.Large:
							m = G.a.Large;
							break;
						case F.Medium:
							m = G.a.Medium;
							break;
						case F.Small:
							m = G.a.Small;
							break;
						case F.ExtraSmall:
							m = G.a.ExtraSmall;
							break;
						case F.Metadata:
							m = G.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(G.a.Title, a, m, {
							[G.a.isNoWrap]: o,
							[G.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(P.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? i.a.createElement(B.b, {
						type: n
					}, r) : r)
				},
				K = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: o,
						...r
					} = e;
					return i.a.createElement(c.a, z({}, r, {
						className: Object(u.a)(t, G.a.styledLink, {
							[G.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: o
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(G.a.titleContainer, n, {
							[G.a.isNoWrap]: s,
							[G.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				Q = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: V.e,
					shouldOpenPostInNewTab: W.jb
				}),
				X = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, o = Object(a.d)(), r = Object(O.a)(), c = Object(a.e)(U.b), d = Object(a.e)(U.c), u = e => {
						!c && !d || t.media && Object(j.H)(t.media) || (e.preventDefault(), o(Object(x.bb)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement($, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement($, e)); {
						const o = t.media && Object(j.H)(t.media) ? Object(_.c)(t.id, s.name) : t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(o) : Object(h.a)(o, void 0, r);
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
							}, i.a.createElement($, t)) : i.a.createElement($, t)
						})(t, e) : i.a.createElement(K, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: u
						}, i.a.createElement($, e)))
					}
				},
				$ = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let o = e.format ? e.format(n) : n.title;
					s && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const r = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(J, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && i.a.createElement(N.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), o)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: o
					} = n, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(E.a)()) return null;
					if (s && n.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== F.Large && !n.isSponsored && !(n.media && Object(j.H)(n.media)) && (n.source || n.media && (n.media.type === j.o.GIFVIDEO || n.media.type === j.o.IMAGE || n.media.type === j.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(j.D)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(k.a)(n), !n.isSponsored && i.a.createElement(g.a, {
							name: "external_link",
							className: G.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(k.a)(n), !n.isSponsored && i.a.createElement(g.a, {
						name: "external_link",
						className: G.a.outboundLinkIcon
					}));
					return null
				};
			class te extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${G.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: o,
						isOverlay: r,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					} = this.props, m = s === y.b.Left, p = Object(N.b)(c), {
						leftFlair: b,
						rightFlair: f
					} = Object(Y.a)({
						flair: p,
						isFlairPositionedLeft: m,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), h = !r && !o && !t, x = h && b && b.length > 0, v = h && f && f.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(G.a.Component, e, c.id),
						ref: this.props.innerRef
					}, !d && x && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(T.b)(c) && i.a.createElement(X, z({}, this.props, {
						leftFlair: d ? b : void 0
					})), a && i.a.createElement(R, {
						className: G.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(ee, this.props), v && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: G.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.fb)(),
					s = Object(p.w)(t),
					n = Object(C.a)(),
					o = Object(a.e)(o => Q(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(S.a)(),
					c = Object(m.b)();
				return n ? i.a.createElement(te, z({
					pageLayer: t,
					isCommentPermalink: s
				}, n, o, e, {
					theme: r,
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/PostTopLine/index.m.less"),
				y = s.n(g);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: g,
					hostPostData: j,
					iconClassName: T,
					inSubredditOrProfile: P,
					isCommentsPage: k,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: I,
					isModWithUserNotesPermissions: w,
					isOverlay: A,
					isTopicPage: L,
					listingKey: M,
					post: D,
					shouldShowSubscribeButton: F,
					showCornerOutboundLink: R,
					showSubreddit: B,
					showSubredditIcon: U,
					subredditOrProfile: V,
					isFollowed: W,
					shouldShowFollowButton: H,
					onFollowPostClick: Y
				} = e;
				const q = L,
					G = V && Object(C.h)(V),
					z = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(S.Gb)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(y.a.container, t)
				}, B && V && r.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, U && r.a.createElement(p.b, {
					className: Object(a.a)(y.a.subredditIcon, T),
					shouldHideNsfwIcon: g,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, B && r.a.createElement(d.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), r.a.createElement(m.d, {
					className: y.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: w,
					tooltipType: A ? m.c.Lightbox : void 0,
					post: D,
					showSub: B,
					subredditOrProfile: V
				}), r.a.createElement(u.a, {
					className: y.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: N,
					post: D,
					tooltipType: A ? m.c.Lightbox : void 0
				}), !q && r.a.createElement(c.a, {
					isPostDetail: k,
					thing: D,
					tooltipType: A ? m.c.Lightbox : void 0
				})), V && z && B && F && !I && r.a.createElement(f.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(_.k)(D.id, e ? "unsubscribe" : "subscribe", "post", M, j),
					identifier: {
						name: V.name,
						type: G ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: D.id,
					size: x.d.XS
				}), R && r.a.createElement(v.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(E.D)(D),
					source: D.source
				}, r.a.createElement(O.a, {
					className: y.a.outboundLinkIcon
				})), H && z && r.a.createElement(l.a, {
					isFilled: !!W,
					onClick: Y,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
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
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				f = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, o) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									o && n(s, o), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(f))
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
				return C
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
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/VerticalVotes/index.m.less"),
				v = s.n(x);
			const _ = Object(a.c)({
					isNightMode: h.db,
					isAnimatingUpvotePostId: f.k
				}),
				O = Object(i.b)(_),
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class S extends r.a.Component {
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
							isNightMode: o,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: x,
							postId: _
						} = e,
						O = E(e),
						S = C(e),
						g = x.voteState,
						y = i === _;
					return r.a.createElement("div", {
						className: Object(c.a)(v.a.votesContainer, e.className),
						id: `vote-arrows-${x.id}`,
						ref: h
					}, O ? r.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": g === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: g
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": g === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[v.a.bounceUp]: y
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: g
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(v.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: g,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!s,
						postId: _
					}), S ? r.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": g === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: g
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": g === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: g
					})))
				}
			}
			const g = Object(d.a)(O(S));
			t.a = g
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				i = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/experiments/emailEnablement.ts"),
				c = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: c.hb,
				emailEnablementJoinFollowVoteVariant: a.a
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(i.d([s], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([s], !1)),
					toggleEmailVerificationTooltip: () => e(Object(r.c)("user_follow"))
				}
			})
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				_ = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				E = s("./src/reddit/selectors/meta.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				S = s("./node_modules/reselect/es/index.js"),
				g = s("./src/reddit/controls/Score/index.m.less"),
				y = s.n(g);
			const j = {
					placement: "right"
				},
				T = e => e.voteState === _.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === _.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(h.a)(Object(f.a)(e)),
				P = Object(S.c)({
					locale: e => Object(E.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: s,
							postId: n
						} = t;
						if (s && n) return Object(C.G)(e, {
							postId: n
						})
					}
				}),
				k = () => 0,
				N = Object(d.b)(P),
				I = Object(r.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : T(e)
						},
						{
							score: s,
							postId: r = "",
							locale: f,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: v,
							shouldShowUpvoteRatioOnHover: _,
							post: E
						} = e,
						C = Object(d.d)(),
						S = null == f ? void 0 : f.startsWith("en"),
						g = e.isScoreHidden ? S ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(i.b)(s),
						P = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && C(Object(l.I)({
								postId: r,
								delta: t
							}))
						}, [C, r]),
						N = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: r
								}
							}
						}),
						I = !e.isScoreHidden && h && s < O.a,
						w = Object(x.a)(j),
						A = s < 0 ? 0 : s;
					return c.a.createElement("div", {
						className: Object(o.a)(y.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: _ ? w.show : void 0,
						onMouseLeave: _ ? w.hide : void 0,
						ref: _ ? w.target.ref : void 0
					}, (I || v) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: A,
						countToUpperBound: A,
						initialDelay: k,
						subsequentRecurringDelay: k,
						incrementDelta: k,
						shouldDisjointAnimation: !0,
						postId: r,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: N.current,
						onDataCB: P,
						isLoadTestOnly: v && !I
					})), !I && g, _ && E && c.a.createElement(m.a, w, c.a.createElement(p.a, {
						className: y.a.viewCount,
						post: E,
						showViewCount: !1
					})))
				});
			t.a = N(I)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, i = r;
					return n ? o.a.createElement(t, i) : void 0 !== s ? o.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: o
				} = e;
				return t && s && n && o ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
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

			function o(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
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
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
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
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
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
				b = e => Object(n.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
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
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
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
					...Object(r.n)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.hb)(s),
					post: Object(r.I)(s, e),
					userSubreddit: Object(r.rb)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.n)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.I)(s, t),
					subreddit: Object(r.hb)(s),
					userSubreddit: Object(r.rb)(s)
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
					...Object(r.n)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.I)(t, e, void 0, 0),
					profile: Object(r.R)(t)
				}),
				u = (e, t, s) => n => ({
					...Object(r.n)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: d(t)
					}),
					post: Object(r.I)(n, e, void 0, s)
				}),
				m = (e, t, s, n, i, a) => c => ({
					...Object(r.n)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.I)(c, e, void 0, a),
					subreddit: Object(r.hb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.n)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.I)(n, e, void 0, s),
					subreddit: Object(r.hb)(n)
				})
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
				o = s("./src/telemetry/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.R(e),
					screen: a.Z(e),
					subreddit: a.hb(e)
				}),
				d = (e, t, s) => n => ({
					source: Object(i.i)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(n),
					post: a.I(n, e)
				}),
				l = (e, t, s, n) => o => {
					const i = s ? a.h(o, s) : null,
						{
							sortToUse: c
						} = Object(r.a)(o, e);
					return {
						...d(e, t, n)(o),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => s => {
					const n = a.j(s);
					return n ? d(n.id, e, t)(s) : {
						source: Object(i.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(s)
					}
				},
				m = (e, t) => s => Object(o.a)({
					...d(e, t)(s),
					...a.n(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...c(t),
					post: a.j(t),
					userSubreddit: a.rb(t)
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
				return _
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(o.Z)(e),
					profile: Object(o.R)(e),
					subreddit: Object(o.hb)(e),
					userSubreddit: Object(o.rb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				a = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					...r(s)
				}),
				c = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: n.c.CLICK,
					noun: e,
					post: Object(o.I)(s, t),
					comment: Object(o.h)(s, t),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...r(s)
				}),
				l = (e, t) => s => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(o.I)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				u = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				m = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				p = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					comment: Object(o.h)(s, t),
					...r(s)
				}),
				b = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.h)(s, t),
					post: Object(o.I)(s, t),
					...r(s)
				}),
				f = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					...r(s)
				}),
				h = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.I)(s, t),
					subreddit: Object(o.kb)(s, t)
				}),
				x = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.h)(s, t),
					post: Object(o.I)(s, t),
					subreddit: Object(o.kb)(s, t)
				}),
				v = (e, t, s, n) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.I)(r, s),
					subreddit: Object(o.kb)(r, s),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(o.h)(r, s)
					}
				}),
				_ = () => e => ({
					...r(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				})
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
				return _
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "u", (function() {
				return P
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return w
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.n(e),
					screen: o.Z(e),
					subreddit: o.hb(e),
					userSubreddit: o.rb(e)
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
					scheduledPost: i(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
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
				C = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...r(t)
				}),
				S = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				g = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...r(i),
					actionInfo: o.d(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				P = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				w = () => (e, t) => {
					const s = r(e);
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
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				o = s("./src/reddit/selectors/gold/powerups/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.n(e)
				}),
				a = e => t => {
					const s = r.hb(t),
						i = Object(o.t)(t, {
							subredditId: null == s ? void 0 : s.id
						}),
						{
							userFlair: a,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.n(t),
						subreddit: s,
						userFlair: {
							id: null == a ? void 0 : a.id,
							title: a ? Object(n.g)(a) : void 0,
							isActive: !!a || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: i
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.n(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.hb(t),
					...r.n(t)
				})
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/removedPosts.ts");
			const r = () => Object(n.e)(e => Object(o.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(n.useContext)(o.b)
			}
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			var n, o, r = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[n.Loyalty]: r.a.First,
					[n.Achievement]: r.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? n.Loyalty : e === r.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function o(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
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
				return _
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "q", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
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
			const x = e => b[h[e]],
				v = e => h[b[e]],
				_ = e => f[b[e]],
				O = e => b[f[e]],
				E = e => h[f[e]];
			var C;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(C || (C = {}));
			const S = e => {
					switch (e) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				g = "custom",
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
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, o = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const r = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
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
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
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
							error: t.payload.error, status: n.Failure
						};
					case o.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case o.d:
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
			var n, o = s("./src/lib/constants/specialMembership.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
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
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? n[c.a.Loyalty][o] : n[c.a.Achievement][o] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][o] : n[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
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
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, s) => {
					const n = t[e.id],
						o = t[s.id];
					return Object(i.b)(n, o)
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
						o = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...o,
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
					case r.a: {
						const {
							subredditId: s
						} = t.payload, o = e[s];
						return o && o.status === n.Fetched ? {
							...e,
							[s]: {
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
							subredditId: s
						} = t.payload, o = e[s];
						return o && o.status === n.Fetched ? {
							...e,
							[s]: {
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
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/creatorStats/constants.ts");
			const r = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
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
					case o.a:
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
					case o.a:
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
				o = s("./src/reddit/reducers/features/creatorStats/index.ts"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: o.a
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
					var s, n, o;
					const r = null === (o = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!r) return;
					const {
						fromComments: i,
						fromPosts: a
					} = r;
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
					const o = Object(i.V)(e, {
						postId: t
					});
					if (o && o.isQuarantined) return !1;
					const c = !s && !!Object(r.m)(e, {
						postId: t
					});
					return Object(a.Db)(e, {
						postId: t
					}) || c
				}
		},
		"./src/reddit/selectors/experiments/loggedOutOneFeed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/countrySites.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts"),
				c = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(n.a)(a.f, i.f, (e, t) => e && !t),
				l = e => Object(r.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: o.gc
				}),
				u = e => !!Object(c.a)(l(e))
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
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts"),
				a = s("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.s
					});
					return t === n.x.VoteCountOnly || t === n.x.CommentCountOnly || t === n.x.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.s
					});
					return t === n.x.VoteCountOnly || t === n.x.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.s
					});
					return t === n.x.CommentCountOnly || t === n.x.VoteAndCommentCount
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
					const o = e.posts.models[s];
					if (Object(a.c)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: n.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.x.VoteCountOnly || l === n.x.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: s
					} = t;
					const o = e.posts.models[s];
					if (Object(a.c)(e) || !o || o.isSponsored || o.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: n.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.x.CommentCountOnly || l === n.x.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.uc
					}) === n.Nc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Qe
				}) === n.Dd
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.Rf,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(n.a)(i, e => e === o.If)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.ag)(t)
				},
				c = Object(n.a)(a, r.d, (e, t) => e && !t)
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
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
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
					const s = n.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				p = Object(o.a)(r.a, e => {
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
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === s
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
				f = Object(o.a)(d.k, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.Te,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => t === o.bf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(i.G, a, (e, t) => c(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const r = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(o.a)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Nb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
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
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.53b1f309fa71963bd919.js.map