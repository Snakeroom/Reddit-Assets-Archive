// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.3b8bcda7574d9eb4495c.js
// Retrieved at 8/10/2021, 3:40:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost", "Reddit~StandalonePostPage~reddit-components-MediumPost"], {
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
						c = /nexus\s*[0-6]\s*/i.test(t),
						a = !c && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						_ = !o && !l && /macintosh/i.test(t),
						h = !i && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !O && /[^-]mobi/i.test(t),
						x = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: E || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: E || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || E
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
						version: E || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, E && (r.version = E)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, E && (r.version = E)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && E && (r.version = E)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : _ ? (r.mac = e, r.osname = "macOS") : x ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : h && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var S = "";
					r.windows ? S = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? S = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? S = (S = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? S = (S = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? S = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? S = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? S = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? S = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (S = s(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (r.osversion = S);
					var y = !r.windows && S.split(".")[0];
					return O || a || "ipad" == o || i && (3 == y || y >= 4 && !g) || r.silk ? r.tablet = e : (g || "iphone" == o || "ipod" == o || i || c || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
					var c = "" + i.version;
					for (var a in e)
						if (e.hasOwnProperty(a) && i[a]) {
							if ("string" != typeof e[a]) throw new Error("Browser version in the minVersion map should be a string: " + a + ": " + String(e));
							return o([c, e[a]]) < 0
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
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				c = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var a = c(e) ? n : i,
					d = arguments.length < 3;
				return a(e, o(t, 4), s, d, r)
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
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = (e, t, s) => (n = (() => {})) => r => {
				const o = m(r.target, r.currentTarget),
					c = p(r.target, r.currentTarget);
				o && s && t && (u(r.target, r.currentTarget, l.anchors) ? s(t(e, o, c)) : s(s => {
					const n = t(e, o, c)(s);
					let r;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						r = t
					}
					return {
						...n,
						actionInfo: Object(i.previousPageActionInfo)(s, r)
					}
				})), u(r.target, r.currentTarget, l.anchorsAndButtons) && n(r)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, l = Object(n.useCallback)(a(i, o, s), [i, o, s]);
					return r.a.createElement(e, c({}, d, {
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
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
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
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: r
				} = e;
				let i = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = r || Object(n.D)(e)
				} else i = Object(n.D)(e);
				const c = o.a.parse(i),
					a = c.path || "",
					d = a.length > 7 ? a.substring(0, 7) + "..." : a;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function c(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function a(e) {
				const [t, s] = Object(r.useState)(null), [i, a] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), f = Object(r.useCallback)(() => m(!u), [u]), _ = Object(r.useMemo)(() => {
					const t = c(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: v,
					update: E
				} = Object(o.a)(t, i, _);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: v.arrow,
						...h.arrow
					},
					hide: b,
					popperProps: {
						ref: a,
						style: v.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: s
					},
					toggle: f,
					visible: u,
					update: E
				}), [l, h, a, b, p, v, t, s, f, u, E])
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
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
				return (...n) => (null !== t && n.length === t.length && r()(n, (e, s) => e === t[s]) || (t = n, s = e(...n)), s)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.kc, r.nb, r.z, r.O, r.ib, r.Nb],
				i = {
					[r.Nb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.ib]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.O]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.z]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.nb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.kc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[r.Nb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.ib]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.O]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.z]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.nb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.nb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e, t = !1, s = !1) {
				const a = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.kc]: "",
						[r.nb]: "",
						[r.z]: "",
						[r.O]: "",
						[r.ib]: "",
						[r.Nb]: ""
					};
				let u = d - a;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? c : i)[n](e).toString()), u -= e * n
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
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
				return c
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
				return c
			})), s.d(t, "f", (function() {
				return a
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
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
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
				return c
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				a = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "i", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return a
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
				c = Object(n.a)(r("createCommunityAward")),
				a = Object(n.a)(r("createGlobalAward")),
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
				return _
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "f", (function() {
				return y
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/postParentMessage/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/selectors/gild.ts"),
				a = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts"),
				f = s("./src/reddit/actions/gold/constants.ts");
			const _ = Object(n.a)(f.L),
				h = Object(n.a)(f.f),
				v = () => async (e, t) => {
					const n = t();
					e(h()), Object(a.b)(a.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(r()(n))
				}, E = Object(n.a)(f.K), O = ({
					awardId: e,
					correlationId: t,
					thingId: s
				}) => async (n, r) => {
					const c = r(),
						a = e ? Object(u.a)(c, e) : void 0;
					n(E({
						award: a && a.isEnabled ? a : void 0,
						thingId: s,
						correlationId: t
					})), n(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const b = Object(p.J)(c, {
						thingId: s
					});
					let f = null;
					if (b) f = b.id;
					else if (Object(o.a)(s)) {
						const e = Object(m.G)(c, {
							postId: s
						});
						e && (f = e.belongsTo.id)
					}
					f && Object(d.a)(f, s)
				}, g = Object(n.a)(f.e), x = Object(n.a)(f.J), S = () => async (e, t) => {
					const n = t(),
						o = Object(c.d)(n);
					if (Object(c.g)(n)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(g()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(n)), Object(a.b)(a.a.GildingFlow)
				}, y = () => async () => {
					Object(r.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return n
			})), s.d(t, "g", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "l", (function() {
				return i
			})), s.d(t, "k", (function() {
				return c
			})), s.d(t, "j", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				o = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "IMAGE_OCR_ALT_TEXT__LOADED",
				r = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "e", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/discoveryUnit.ts"),
				d = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				l = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/inFeedChaining.ts"),
				p = s("./src/reddit/constants/page.ts"),
				b = s("./src/reddit/helpers/localStorage/index.ts"),
				f = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/inFeedChaining.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts");
			const O = "FEED_CHAINING__CHAIN_LOADED",
				g = Object(i.a)(O),
				x = e => {
					const t = Date.now() - e,
						s = Object(b.G)();
					return Object.keys(s).filter(e => s[e].when >= t).map(e => s[e])
				},
				S = ({
					listingName: e,
					listingKey: t,
					postId: s
				}) => async (n, i, u) => {
					if (!s) return;
					const _ = Object(v.T)(i(), {
						postId: s
					});
					if (!_) return;
					const O = _.name.toLowerCase(),
						S = e === O;
					if (!(e === p.f || e === p.b || S)) return;
					if (S) return void C(_, t, s)(n, i, u);
					0 === x(o.nb).length && Object(b.Gb)(!1);
					let y = i();
					if (Object(h.d)(y, {
							listingKey: t,
							postId: s
						}) || Object(h.a)(y).length >= m.a || Object(b.U)() || x(o.z).length >= m.a) return;
					const I = Object(v.w)(y, {
						listingKey: t,
						postId: s
					});
					if (I && I.isSponsored) return;
					await n(Object(a.g)()), y = i();
					const j = Object(h.b)(y, {
						listingName: e
					});
					if (!j) return;
					if (!_ || Object(h.e)(y, {
							subredditId: _.id
						}) || (e => {
							return x(o.z).some(t => t.subredditId === e)
						})(_.id)) return;
					const T = {
						subredditIds: [_.id],
						count: m.b
					};
					await n(Object(d.b)(T));
					const w = Object(d.a)(T);
					y = i();
					const P = Object(E.u)(y, {
						key: w
					});
					0 !== P.length ? (await n((e => async (t, s) => {
						const n = o.bc.DAY.toUpperCase(),
							r = e.filter(e => {
								const t = Object(c.a)(e, o.U.TOP, {
										t: n
									}),
									r = s();
								return 0 === Object(v.z)(r, {
									listingKey: t
								}).length
							});
						await t(Object(l.b)({
							first: 1,
							range: n,
							sort: o.N.TOP,
							subredditNames: r
						}))
					})(P.map(e => e.name))), y = i(), Object(h.f)(y, {
						postId: s
					}).length < m.c ? Object(r.a)(Object(f.c)(j, "other", _)(y)) : (Object(b.b)(s, _.id), Object(r.a)(Object(f.d)(j, _)(y)), n(g({
						listingKey: t,
						postId: s
					})))) : Object(r.a)(Object(f.c)(j, "no_chaining", _)(y))
				}, y = "FEED_CHAINING__CHAIN_TOGGLED", I = (Object(i.a)(y), "FEED_CHAINING__CHAINING_TOGGLED"), j = Object(i.a)(I), T = () => async e => {
					Object(b.Gb)(!0), e(j({
						isDismissed: !0
					})), e(Object(u.f)(Object(u.e)(n.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), _.b.Undo, n.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(b.Gb)(!1), e(j({
							isDismissed: !1
						}))
					})))
				}, C = (e, t, s) => async (e, t, s) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED",
				o = "LINKED_POSTS__ELIGIBILITY_LOADED"
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "NSFW_LINKED_POSTS__POSTS_LOADED",
				r = "NSFW_LINKED_POSTS__POSTS_FAILED"
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
				return c
			})), s.d(t, "a", (function() {
				return a
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
				return _
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return g
			})), s.d(t, "o", (function() {
				return x
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				a = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				_ = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				h = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				g = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				x = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "k", (function() {
				return R
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "h", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				_ = Object(r.a)(b),
				h = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				v = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				O = Object(r.a)(v),
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				x = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				y = Object(r.a)(x),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				T = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				C = Object(r.a)(j),
				w = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				P = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				A = Object(r.a)(P),
				N = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				L = Object(r.a)(k),
				D = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(p.T)(o, {
							subredditId: e
						}).name;
					s(f());
					const c = await Object(a.k)(r(), i, t);
					if (c.ok) {
						s(_({
							subredditId: e,
							isEnabled: t
						}))
					} else s(h());
					return c.ok
				}, R = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(p.T)(o, {
							subredditId: e
						}).name;
					s(E());
					const c = await Object(a.j)(r(), t, l.d.LinkFlair, i);
					if (c.ok) {
						s(O({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(g());
					return c.ok
				}, F = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const d = r(),
						m = Object(p.T)(d, {
							subredditId: t
						}).name;
					s(S());
					const b = await Object(a.f)(o(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const n = b.body;
						if (s(y({
								subredditId: t,
								template: n
							})), n.id) {
							const r = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[n.id];
							r ? f = await s(Object(i.d)(t, n.id, r)) : o && (f = await s(Object(i.c)(t, n.id)))
						}
					}
					if (f) {
						const e = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(c.f)(e))
					} else {
						s(I());
						const r = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						s(Object(c.f)(r))
					}
					return f
				}, U = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						d = Object(p.T)(i, {
							subredditId: t
						}).name;
					if (s(T()), (await Object(a.b)(o(), e, d)).ok) {
						s(C({
							subredditId: t,
							templateId: e
						}));
						const r = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(c.f)(r))
					} else {
						s(w());
						const r = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(c.f)(r))
					}
				}, M = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						d = Object(m.d)(i, {
							subredditId: t
						}).templateIds,
						b = Object(p.T)(i, {
							subredditId: t
						}).name;
					if (s(A({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(o(), b, l.d.LinkFlair, e)).ok) {
						s(N());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(c.f)(e))
					} else {
						s(L({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(c.f)(r))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (n, r, {
					apiContext: i
				}) => {
					const c = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && c.unshift(t), n(Object(o.R)({
							[e.id]: {
								flair: c
							}
						})), t) {
						const n = Object(d.g)(t);
						Object(a.h)(i(), e.id, s, n)
					} else Object(a.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "c", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				c = s("./node_modules/lodash/values.js"),
				a = s.n(c),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var _ = s("./src/reddit/helpers/trackers/blade.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/telemetry/index.ts");
			const O = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: n
			}) => async (r, o, i) => {
				const c = o(),
					a = Object(v.T)(c, {
						subredditId: e
					});
				if (!a) return !1;
				r(Object(l.k)(n));
				const d = await (async (e, t, s, n, r, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: m.hb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), a.name, t, n.file.name, s, await Object(u.g)(n.file));
				let _ = !1;
				try {
					const e = await Object(l.g)(o(), d, n, h.a.FlairTemplates);
					e && r(Object(l.j)(e)), _ = !0
				} catch (E) {
					if (E instanceof Error) throw E;
					r(Object(l.i)(E))
				}
				return _
			}, g = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", x = Object(d.a)(g), S = (e, t, s) => async (n, o, c) => {
				const {
					apiContext: d
				} = c;
				let u = o();
				const {
					pendingImages: g,
					...S
				} = s;
				let y = S;
				const I = Object(v.T)(u, {
					subredditId: e
				});
				if (!I) return !1;
				const j = u.structuredStyles.flairTemplate.models[t];
				if (j && i()(j, y)) return !0;
				if (g) {
					const s = [];
					if (r()(g, (r, o) => {
							r && s.push(n(O({
								flairId: t,
								imageData: Object(h.m)(r),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					y = ((e, t, s) => {
						const n = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && s.imageUploads[e.id];
							r && r.kind === h.b.TempUploaded && (n[t] = r.url)
						}), n
					})(y, g, o())
				}
				u = o();
				let T = null,
					C = null;
				const w = [];
				try {
					(T = await Object(l.f)(u, h.a.FlairTemplates)) && (C = Object(l.m)(T)(n, o, c), w.push(...a()(T.imagesByKey)))
				} catch (N) {
					return !1
				}
				const P = await (async (e, t, s, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.hb.PUT,
						data: n
					}))(d(), I.name, t, y),
					k = j ? "edit_post_flair_template" : "save_post_flair_template",
					A = Object(_.e)(u, k);
				if (P.ok) {
					let e;
					if (C) try {
						await C, e = ((e, t, s) => {
							const n = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === h.b.Uploaded && (e.url === n.postBackgroundImage ? n.postBackgroundImage = t.url : e.url === n.postPlaceholderImage && (n.postPlaceholderImage = t.url))
							}), n
						})(y, w, o())
					} catch (N) {
						e = null
					} else e = y;
					n(x({
						flairId: t,
						template: e || y
					}))
				} else T && T.websocket.close();
				return Object(E.a)({
					...A,
					actionInfo: {
						...A.actionInfo,
						success: P.ok
					}
				}), P.ok
			}, y = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", I = Object(d.a)(y), j = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const o = n(),
					i = Object(v.T)(o, {
						subredditId: e
					});
				if (!i) return !1;
				const c = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.hb.DELETE
					}))(r(), i.name, t),
					a = Object(_.e)(o, "delete_flair_template");
				return c.ok && s(I({
					flairId: t
				})), Object(E.a)({
					...a,
					actionInfo: {
						...a.actionInfo,
						success: c.ok
					}
				}), c.ok
			}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/telemetry/index.ts"),
				r = s("./src/reddit/actions/login.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/users.ts"),
				c = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const s = t();
				Object(n.a)(Object(a.f)(s)), e(Object(i.r)({
					forceFetch: !0
				})), await e(Object(o.g)(c.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, s) => {
					const {
						clickSource: i,
						share: l,
						source: u
					} = e, m = s();
					i && Object(n.a)(Object(a.b)(i)(m)), Object(d.J)(m) ? await t(Object(o.h)(c.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(r.h)())
				}
			}
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return _
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/endpoints/category/subreddits.ts"),
				c = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			! function(e) {
				e.Factorization = "factorization", e.CustomModRelevant = "custom_mod_relevant"
			}(n || (n = {}));
			var u = s("./src/reddit/selectors/subreddit.ts");
			const m = e => {
					let t = e.subredditIds.join(",");
					return e.count && (t += `--[count:'${e.count}']`), e.variant && (t += `--[variant:'${e.variant}']`), t.toLowerCase()
				},
				p = Object(r.a)(o.p),
				b = Object(r.a)(o.o),
				f = Object(r.a)(o.n),
				_ = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						o = m(e),
						_ = Object(u.t)(r, {
							key: o
						}),
						h = Object(u.s)(r, {
							key: o
						});
					if (_ || h.length > 0) return;
					t(p({
						key: o
					}));
					const v = await ((e, t) => Object(a.a)(Object(d.a)(e, [l.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: c.hb.GET
					}))(n(), e);
					if (v.ok) {
						const e = Object(i.b)(v.body);
						t(b({
							key: o,
							...e
						}))
					} else {
						const e = v.error;
						t(f({
							key: o,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return K
			})), s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				i = s("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(i.b),
				a = Object(r.a)(i.a);
			var d = s("./src/reddit/actions/linkedPosts/constants.ts");
			const l = Object(r.a)(d.a),
				u = Object(r.a)(d.c),
				m = Object(r.a)(d.b);
			var p = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				b = s("./src/lib/makeGqlRequest/index.ts"),
				f = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				_ = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/Post/index.ts");
			var O = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: n,
				response: r
			}) => {
				if (!r.ok) return void t(r.error);
				const i = r.body,
					{
						post: c
					} = i && i.data,
					a = e(),
					d = Object(o.a)(n, null, {
						isOtherDiscussions: !0
					});
				if (c) {
					if (c.otherDiscussions && c.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = c, {
							postFlair: r,
							postIds: o,
							posts: i,
							profiles: l,
							subreddits: u
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(_.e)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === E.a.Post && n.postInfo) {
										const e = Object(_.e)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(E.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(h.a)(e.profile)) : Object(E.m)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(v.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						s({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: r,
							postId: n,
							postIds: o,
							posts: i,
							profiles: l,
							subreddits: u
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: n,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const g = Object(r.a)(p.a),
				x = Object(r.a)(p.b),
				S = Object(r.a)(p.c);
			var y = s("./src/reddit/actions/subreddit/constants.ts"),
				I = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json"),
				j = (s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json"));
			var T = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						t({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: n
						})
					} catch (o) {
						s(o)
					}
				},
				C = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var w = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						const s = [],
							o = {},
							i = {};
						if (!r || !r.linked) return;
						const c = e(),
							a = c.posts && c.posts.models,
							d = Object(C.a)(n),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !a.hasOwnProperty(e.id)) {
								const t = Object(_.a)(e);
								o[e.id] = t.post, t.crosspost && !a.hasOwnProperty(t.crosspost.id) && (o[t.crosspost.id] = t.crosspost)
							}
							if (Object(E.m)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(v.a)(t)
							}
						}
						t({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: d,
							meta: c.meta,
							posts: o,
							postIds: s,
							subreddits: i
						})
					} catch (o) {
						s(o)
					}
				},
				P = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var k = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var A = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: r,
					options: i,
					postId: c,
					subreddit: a
				}) => {
					try {
						if (!a) return;
						const r = a.elements || a.posts,
							d = t(),
							l = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(r, d.posts && d.posts.models),
							u = Object(P.a)(l),
							m = k(u),
							p = r.edges.reduce((e, t) => (t.node.id && t.node.id !== c && e.push(t.node.id), e), []),
							{
								range: b,
								sort: f,
								subredditName: _
							} = i,
							h = e && c ? Object(C.a)(c, !0) : Object(o.a)(_, n.U[f], {
								t: b
							});
						s({
							dist: r.dist,
							key: h,
							meta: d.meta,
							postIds: p,
							posts: m
						})
					} catch (d) {
						r(d)
					}
				},
				N = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var F = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						const s = [],
							o = {},
							i = {};
						if (!r || !r.nsfwLinked) return;
						const c = e(),
							a = c.posts && c.posts.models,
							d = Object(R.a)(n),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !a.hasOwnProperty(e.id)) {
								const t = Object(_.a)(e);
								o[e.id] = t.post, t.crosspost && !a.hasOwnProperty(t.crosspost.id) && (o[t.crosspost.id] = t.crosspost)
							}
							if (Object(E.m)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(v.a)(t)
							}
						}
						t({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: d,
							meta: c.meta,
							posts: o,
							postIds: s,
							subreddits: i
						})
					} catch (o) {
						s(o)
					}
				},
				U = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const M = Object(r.a)(U.b),
				B = Object(r.a)(U.a);
			var G = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const V = Object(r.a)(G.b),
				W = Object(r.a)(G.a),
				Y = Object(r.a)(y.j),
				q = Object(r.a)(y.i),
				H = Object(r.a)(y.r),
				z = Object(r.a)(y.q),
				K = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = (await ((e, t) => Object(b.a)(e, {
							...j,
							variables: t
						}))(n(), e)).body,
						{
							subredditNames: o,
							...i
						} = e,
						c = [];
					try {
						for (const e of r.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(E.m)(t.node) && A({
								getState: s,
								onFailure: e => {
									throw e
								},
								onSuccess: e => c.push(e),
								options: {
									...i,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(H(c))
					} catch (a) {
						t(z(a))
					}
				}, Q = e => async (t, s, {
					gqlContext: r
				}) => {
					var i, d, p, f;
					const {
						includeNSFWListingBelowExperiment: _,
						includeListingBelowExperiment: h,
						includeOtherDiscussions: v,
						includePostFeed: E,
						includePostQASchemaEligibilityFlag: y,
						listingBelowExperimentVariant: j,
						postId: C,
						range: P,
						sort: k,
						subredditName: R
					} = e, U = Object(o.a)(C, null, {
						isOtherDiscussions: !0
					}), G = s(), H = Object(D.z)(G, {
						listingKey: U
					}), z = v && (!H || 0 === H.length), K = Object(o.a)(R, n.U[k], {
						t: P
					}), Q = Object(D.z)(G, {
						listingKey: K
					}), J = E && (h || !Q || 0 === Q.length), Z = h, X = _, $ = Object(D.G)(G, {
						postId: C
					}), ee = !!$ && !!$.media && (Object(N.H)($.media) || Object(N.F)($.media)) && !$.media.altText;
					if (!(z || J || Z || X || ee || y)) return;
					z && t(S({
						key: U
					}));
					const te = await ((e, t) => Object(b.a)(e, {
							...I,
							variables: t
						}))(r(), e),
						se = te.body,
						ne = Object(L.a)(j),
						re = Z && !!(null === (p = null === (d = null === (i = se.data) || void 0 === i ? void 0 : i.post) || void 0 === d ? void 0 : d.linked) || void 0 === p ? void 0 : p.isEligible),
						oe = Z && (ne || !re);
					y && (te.ok ? se.data && se.data.post && t(c({
						postId: C,
						isEligibleForQASchema: null !== (f = se.data.post.isEligibleForQASchema) && void 0 !== f && f
					})) : t(a())), z && O({
						getState: s,
						onFailure: e => t(g(e)),
						onSuccess: e => t(x(e)),
						postId: C,
						response: te
					}), (J && !Z || oe) && (te.ok ? se.data && A({
						getState: s,
						isLinkedPostsFallback: oe,
						onFailure: e => t(q(e)),
						onSuccess: e => t(Y(e)),
						options: e,
						postId: C,
						subreddit: se.data.subreddit
					}) : t(q(te.error))), Z && re && !ne && te.ok && se.data && w({
						getState: s,
						onFailure: e => t(m(e)),
						onSuccess: e => t(u(e)),
						postId: C,
						post: se.data.post
					}), X && te.ok && F({
						getState: s,
						onFailure: e => t(W(e)),
						onSuccess: e => t(V(e)),
						postId: C,
						post: se.data.post
					}), ee && te.ok && se.data && T({
						getState: s,
						onFailure: e => t(B(e)),
						onSuccess: e => t(M(e)),
						postId: C,
						post: se.data.post
					}), Z && t(l({
						postId: C,
						isEligibleForLinkedPosts: re
					}))
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
			const i = (e, t = !0) => async (s, i, {
				routes: c
			}) => {
				const a = i();
				Object(n.a)(e, c, a) ? s(Object(o.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
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
				return c
			})), s.d(t, "c", (function() {
				return a
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
				return _
			})), s.d(t, "m", (function() {
				return h
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "k", (function() {
				return O
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				O = "USERFLAIR_FETCH_SUCCESS"
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
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
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
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(a);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: a,
					callToAction: l,
					caption: u
				} = t;
				if (!a || !a.url) return null;
				let m = a.displayText;
				return a.displayText.length >= 40 && (m = a.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(c.a, {
					href: a.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a,
					className: d.a.displayUrl
				}, m)), l && o.a.createElement(i.a, {
					className: d.a.callToAction,
					href: a.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement(i.b, d({
				className: Object(o.a)(a.a.CallToActionButton, e, {
					[a.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const c = 5;

			function a(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, a = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= c && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(i.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = a[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
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
				c = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => r.a.createElement(c.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(c.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
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
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts");
			var c = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~RealtimeGQLSubscriptionAsync"), s.e("RealtimeGQLSubscriptionAsync")]).then(s.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
				}),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/usePrevious.ts");
			const l = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var u = s("./src/reddit/components/CountAnimation/index.m.less"),
				m = s.n(u);
			var p;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(p || (p = {}));
			const b = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: s,
					incrementDelta: o,
					initialDelay: i,
					initialDisplayCount: u,
					inViewPortAnimatingCallbackOnce: p,
					isLoadTestOnly: f,
					onDataCB: _,
					postId: h,
					queryKey: v,
					queryVariables: E,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: g
				} = e, [x, S] = Object(n.useState)(!1), [y, I] = Object(n.useState)(!0), [j, T] = Object(n.useState)([]), [C, w] = Object(n.useState)(l(u).reverse()), P = Object(n.useRef)(!1), k = Object(n.useRef)(null), A = Object(n.useRef)(e => {}), N = Object(n.useRef)();
				A.current = Object(n.useCallback)(e => {
					let s = e || o();
					const n = [...C].reverse().join("");
					let r = parseInt(n) + s;
					r > t && (s = t - parseInt(n), r = t);
					const i = l(r).reverse();
					S(!1), T(C), w(i), I(!1), N.current = setTimeout(() => {
						S(!0)
					}, 0)
				}, [t, o, C]);
				const L = Object(n.useRef)(() => {}),
					D = Object(n.useRef)(),
					R = Object(n.useRef)();
				L.current = Object(n.useCallback)(() => {
					R.current = setTimeout(() => {
						A.current();
						const e = [...j].reverse().join("");
						parseInt(e) < t && L.current()
					}, g())
				}, [t, g, j]);
				const F = Object(n.useRef)(0),
					U = Object(n.useRef)(!1),
					M = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, n = 1 !== s;
							t ? (U.current = !0, P.current || (P.current = !0, D.current = setTimeout(() => {
								A.current(), L.current()
							}, i())), F.current > 0 && (A.current(F.current), F.current = 0)) : n && (U.current = !1)
						})
					}, []);
				Object(a.a)(k, M);
				const [B, G] = Object(n.useState)(!1), V = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, n = 1 !== s;
						t ? G(!0) : n && G(!1)
					})
				}, []), W = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(k, V, W.current);
				const Y = Object(d.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== Y && Y !== t) {
						const e = t - Y;
						U.current ? (A.current(e), p && p()) : F.current += e
					}
					return () => {
						clearTimeout(D.current), clearTimeout(R.current), clearTimeout(N.current)
					}
				}, [t]);
				const q = Object(n.useCallback)(() => I(!0), [I]),
					H = 0 === j.length,
					z = y || H,
					K = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, s));
				return r.a.createElement(r.a.Fragment, null, !f && r.a.createElement("div", {
					className: m.a.countAnimation
				}, C.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const n = Math.abs(t),
							r = [s];
						if (s === n) return r;
						let o = !0;
						for (; o;) ++s > 9 && (s = 0), r.push(s), s === n && (o = !1);
						return r
					})(j[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: m.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: q,
						style: x && j.length > 0 && !y ? {
							transform: `translateY(-${O&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, z ? r.a.createElement("span", {
						className: m.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!O || O && n) return r.a.createElement("span", {
							className: m.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: m.a.srOnly,
					role: "screen-reader"
				}, [...C].reverse().join(""))), r.a.createElement("span", {
					ref: k
				}), B && r.a.createElement(c, {
					variables: E,
					onData: f ? b : _,
					queryKey: v,
					uniqueKey: K.current
				}))
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: o.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				a = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				d = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === c.a.Live,
					r = t.status === c.a.Closed;
				return o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, t.name), o.a.createElement("div", {
					className: d.a.label
				}, l._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), s && o.a.createElement("span", {
					className: Object(n.a)(d.a.badge, d.a.live)
				}, l._("Live", null, {
					hk: "1G2P1W"
				})), r && o.a.createElement("span", {
					className: Object(n.a)(d.a.badge, d.a.ended)
				}, l._("Ended", null, {
					hk: "4s3hco"
				}))), o.a.createElement(i.a, {
					className: d.a.awards,
					thing: e
				}))
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
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = c.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const n = s && s.eventInfo,
					c = Object(l.a)(s),
					m = n && Object(i.c)(n.eventStart, n.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(a.a, {
					post: s
				}), !c && m && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => r.a.createElement("i", {
				className: Object(c.a)(Object(a.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => r.a.createElement("i", {
					className: Object(c.a)(Object(a.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = s.n(b),
				_ = s("./src/lib/lessComponent.tsx");
			const h = _.a.span("PostEventFutureText", f.a),
				v = _.a.span("PostEventPastText", f.a),
				E = _.a.span("PostEventNowText", f.a),
				O = _.a.span("Container", f.a),
				g = _.a.wrapped(u, "CalendarIcon", f.a),
				x = _.a.wrapped(m, "LiveIcon", f.a),
				S = _.a.div("LoadingState", f.a);
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
						eventIsLive: c,
						eventStart: a
					} = s, d = Object(o.e)(a, n);
					let l, u;
					if (this.state.mounted || d === o.a.Live) l = r.a.createElement(p.c, {
						startTime: a,
						endTime: n,
						isLive: c
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = r.a.createElement(S, {
							className: e
						})
					}
					if (c) u = r.a.createElement(E, null, r.a.createElement(x, null), l);
					else if (d === o.a.Future) u = r.a.createElement(h, null, r.a.createElement(g, null), l);
					else {
						if (d !== o.a.Past) return null;
						u = r.a.createElement(v, null, r.a.createElement(g, null), l)
					}
					return r.a.createElement(O, {
						className: e
					}, u)
				}
			}
			t.a = y
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
				c = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => i.a.createElement(c.i, {
				className: l.a.modalHeader
			}, i.a.createElement(c.q, null, e.title), i.a.createElement(a.a, {
				onClick: e.onClosePressed || r.a
			}, i.a.createElement(c.b, null)))
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
				c = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(a);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(c.b, "FlairComponent", d.a);
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
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(a.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = r()((e = p) => Object(c.a)({
					getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
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
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				_ = s("./src/reddit/components/Flair/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				E = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = s("./src/reddit/icons/svgs/Search/index.tsx"),
				g = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				x = s.n(g);
			class S extends o.a.Component {
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
						searchQuery: r
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), c = !!s && i.some(e => e.id === s);
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement("div", {
						className: x.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: x.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(O.a, {
						className: x.a.searchIcon
					})), o.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							r = s === e.id || !c && 0 === t;
						return o.a.createElement(v.a, {
							className: x.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(_.b, {
							className: x.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(E.a, {
							className: x.a.pencil
						}))
					})))
				}
			}
			var y = s("./src/reddit/components/FlairSearch/index.m.less"),
				I = s.n(y);
			const j = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(c.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				C = Object(i.b)(T);
			t.a = C(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: r,
					onChange: i,
					subredditId: c,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: _
				} = e, h = Object(p.a)(), v = d && s && s.templateId && d[s.templateId] || void 0, E = Object(f.a)(), O = s || j(v);
				return o.a.createElement("div", {
					className: Object(a.a)(r, I.a.container)
				}, d && l && o.a.createElement(S, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), i(s)
						}
					},
					selectedTemplateId: v ? v.id : "",
					templateIds: l,
					templates: d
				}), O && v && (_ || v.textEditable) && o.a.createElement("div", {
					className: I.a.flairEditSection
				}, o.a.createElement("div", {
					className: I.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: I.a.restrictionHintText
				}, Object(u.k)(v)), o.a.createElement(E, {
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
					subredditId: c
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				c = s.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.memo((function({
				visible: e,
				...t
			}) {
				const [s, i] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? r.a.createElement("div", a({
					className: Object(o.a)(c.a.tooltip, {
						[c.a.visible]: s
					})
				}, t.popperProps), t.children, s && r.a.createElement("div", a({
					className: c.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
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
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				_ = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				h = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/experiments/econ/index.ts"),
				y = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				I = s("./src/reddit/selectors/inFeedChaining.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/ads/index.ts"),
				P = s("./src/lib/classNames/index.ts"),
				k = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				A = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = s("./src/reddit/components/AwardBadges/index.tsx"),
				L = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				F = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				U = s("./src/reddit/components/Flatlist/index.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				G = s("./src/reddit/components/ModModeReports/helpers.ts"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostContainer/index.tsx"),
				Y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				q = s("./src/reddit/components/PostMedia/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				z = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				K = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				Q = s.n(K);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Z = () => r.a.createElement("div", {
					className: Q.a.container
				}, r.a.createElement(z.a, {
					className: Q.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: Q.a.metaText
				}, J._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				X = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/components/PostTopLine/index.tsx"),
				te = s("./src/reddit/components/SourceLink/index.tsx"),
				se = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ne = s("./src/reddit/contexts/PageLayer/index.tsx"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				oe = s("./src/reddit/helpers/isCrosspost.ts"),
				ie = s("./src/reddit/helpers/postEvent.ts"),
				ce = s("./src/reddit/constants/experiments.ts"),
				ae = s("./src/reddit/helpers/chooseVariant/index.ts"),
				de = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const le = Object(c.a)(T.M, e => e.some(de.c)),
				ue = Object(c.a)(le, e => e),
				me = (e, t) => Object(ae.c)(e, {
					experimentName: ce.xb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ue(e, {
							listingKey: s
						})
					}
				});
			var pe = s("./src/reddit/selectors/postFlair.ts"),
				be = s("./src/reddit/selectors/showPromotedCTA.ts"),
				fe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_e = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(_e),
				ve = s("./src/reddit/selectors/i18n/index.ts"),
				Ee = s("./src/reddit/components/LargePost/index.m.less"),
				Oe = s.n(Ee);
			const ge = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(T.M)(e, {
						listingKey: s
					}) : void 0
				},
				xe = Object(o.b)(() => Object(c.c)({
					autoplayPref: C.b,
					activeModalId: x.a,
					hideNSFWPref: C.B,
					flairStyleTemplate: ne.S,
					isCurrentUserProfilePost: T.l,
					isLoggedIn: C.J,
					isActive: T.j,
					isPostChainDismissed: I.c,
					isPostChained: I.d,
					showPromotedCTA: be.a,
					moderatorPermissions: j.k,
					modModeEnabled: ne.Q,
					posts: ge,
					postHeightVariant: me,
					shouldShowNsfwListingBelow: ve.b,
					showEditFlair: pe.a,
					showAwardsPlaque: y.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(S.t)(e)
				}), (e, {
					listingKey: t,
					listingName: s,
					postId: n
				}) => ({
					chainPost: () => {
						s && t && e(Object(m.d)({
							listingKey: t,
							listingName: s,
							postId: n
						}))
					},
					handleVote: t => {
						const s = t === g.a.upvoted ? Object(p.db)(n) : Object(p.w)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(p.Z)(n)),
					onOpenReportsDropdown: t => e(Object(b.h)({
						tooltipId: t
					}))
				})),
				Se = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: c,
						currentUser: m,
						eventFactory: p,
						flairStyleTemplate: b,
						forceLoadMedia: g,
						hideNSFWPref: x,
						hostPostData: S,
						imageGalleryCurrentItem: y,
						inSubredditOrProfile: I = !1,
						isCommentsPage: j,
						isCurrentUserProfilePost: T,
						isFrontpage: C,
						isGalleryTileLayoutDefault: z,
						isLoggedIn: K,
						isOverlay: Q,
						isPostChainDismissed: J,
						isPostChained: se,
						isTopicPage: ne,
						isTournamentPost: re,
						isCommentCountAnimationEnabled: ae,
						isVoteCountAnimationEnabled: de,
						isCountAnimShadowTestEnabled: le,
						listingIndex: ue,
						listingKey: me,
						listingName: pe,
						moderatorPermissions: be,
						modModeEnabled: _e,
						onClickPost: ve,
						onIgnoreReports: Ee,
						onOpenReportsDropdown: ge,
						post: xe,
						postHeightVariant: Se,
						scrollerItemRef: ye,
						shouldShowGalleryTileOption: Ie,
						shouldShowNsfwListingBelow: je,
						showAwardsPlaque: Te,
						showEditFlair: Ce,
						subredditOrProfile: we,
						userIsOp: Pe,
						postId: ke,
						postIds: Ae,
						onceInViewport: Ne,
						showPromotedCTA: Le
					} = e, De = !!e.redditStyle || !!e["data-redditstyle"], Re = De ? void 0 : b, Fe = Object(l.a)(be), Ue = _e && Fe, Me = Object(a.a)(be), Be = Object(d.a)(be), Ge = Object(G.c)(xe), Ve = !!xe.media && xe.media.type === E.o.RTJSON, We = Pe && Ve, Ye = s ? s - Y.a : void 0, qe = !(C && K || ne), He = (e => e === ce.id.OnlyTitles)(Se) && !Object(oe.a)(xe), ze = (e => e === ce.id.MediumHeight)(Se) && !Object(oe.a)(xe), Ke = (e => {
						const {
							post: t,
							postIds: s,
							posts: n
						} = e;
						if (!Object(O.q)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							o = s && 1 === s.indexOf(t.id),
							i = n && n[1] && Object(O.q)(n[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: o,
							showPinnnedHeader: r
						}
					})(e), Qe = !!(null == S ? void 0 : S.shouldShowLinkedPosts), Je = (!I || Qe || je) && !xe.isSponsored, Ze = Object(w.t)(xe, y), {
						source: Xe
					} = Ze, $e = Object(n.useRef)(null), et = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ne || Ne(ue))
						})
					}, [Ne, ue]);
					Object(v.a)($e, et);
					const tt = r.a.createElement(W.a, {
						className: Object(P.a)(Oe.a.container, c, he.a.largeAndMediumPostStyles, he.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[he.a.mUseRedditTheme]: De,
							promotedvideolink: xe.isSponsored && !(xe.media && E.a.has(xe.media.type)),
							[Oe.a.topCompactPost]: Ke && Ke.hasTopCompactPostStyles,
							[Oe.a.bottomCompactPost]: Ke && Ke.hasBottomCompactPostStyles
						}),
						isOverlay: Q,
						style: Object(u.b)(e.flairStyleTemplate),
						post: xe,
						onClick: ve,
						onPostContentClick: o,
						eventFactory: p
					}, r.a.createElement("div", {
						ref: $e
					}), r.a.createElement(X.a, {
						model: xe,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: le,
						isVoteCountAnimation: de,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Re,
						redditStyle: De,
						postId: ke
					}), r.a.createElement(V.a, {
						className: Object(P.a)(Oe.a.backgroundWrapper, {
							[Oe.a.isEvent]: Object(ie.a)(xe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Re,
						post: xe,
						redditStyle: De
					}, r.a.createElement(F.a, {
						post: xe
					}), Ke && Ke.showPinnnedHeader && r.a.createElement(Z, null), re && Object(i.c)(xe) && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.a, {
						post: xe
					}), r.a.createElement(f.a, {
						post: xe
					})), !re && r.a.createElement(r.a.Fragment, null, r.a.createElement(ee.a, {
						className: Oe.a.postTopLine,
						hideAwards: Te,
						hideNSFWPref: x,
						hostPostData: S,
						iconClassName: Oe.a.postTopLineIcon,
						inSubredditOrProfile: I,
						isCommentsPage: !!j,
						isCompactPinnedPost: !!Ke,
						isCurrentUserProfilePost: T,
						isOverlay: !!Q,
						isTopicPage: !!ne,
						listingKey: me,
						post: xe,
						shouldShowSubscribeButton: qe,
						showSubreddit: Je,
						showSubredditIcon: !0,
						subredditOrProfile: we
					}), r.a.createElement($.c, {
						className: Oe.a.postTitle,
						post: xe,
						redditStyle: De,
						size: $.b.Large,
						titleColor: Re && Re.postTitleColor,
						isOverlay: Q
					}), xe.source && !xe.isSponsored && !(xe.media && Object(E.G)(xe.media)) && r.a.createElement(te.a, {
						className: Oe.a.sourceLink,
						post: xe
					})), r.a.createElement("div", {
						className: Oe.a.postMediaWrapper
					}, !Ke && r.a.createElement(q.a, {
						isGalleryTileLayoutDefault: z,
						isListing: !0,
						isMediumHeight: ze,
						isNotCardView: !!Q,
						isTitleOnly: He,
						showCentered: !0,
						flairStyleTemplate: Re,
						post: xe,
						availableWidth: Ye,
						shouldLoad: g,
						scrollerItemRef: ye,
						autoplayPref: t,
						shouldShowGalleryTileOption: Ie
					})), Le && Xe && Xe.url && r.a.createElement(k.a, {
						className: Oe.a.adLinkWrapper
					}, r.a.createElement(A.a, {
						post: xe,
						adLinkContent: Ze
					})), _e && Fe && Ge && r.a.createElement(B.a, {
						onIgnoreReports: Ee,
						reportable: xe
					}), r.a.createElement(M.d, null), Te && r.a.createElement(N.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: xe,
						tooltipType: Q ? fe.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: Oe.a.flatListContainer
					}, r.a.createElement(D.a, {
						className: Oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Re,
						model: xe,
						onVoteClick: e.handleVote
					}), r.a.createElement(U.c, {
						currentUser: m,
						hasModFlairPerms: Me,
						hasModFullPerms: Be,
						hasModPostPerms: Fe,
						hostPostData: S,
						isCommentCountAnimation: ae,
						isCountAnimShadowTestEnabled: le,
						isLargePost: !0,
						isOverlay: !!Q,
						listingKey: me,
						modModeEnabled: _e,
						onIgnoreReports: Ee,
						onOpenReportsDropdown: ge,
						post: xe,
						showEditPost: We,
						showEditFlair: Ce,
						useFlatlistBreakpoints: Object(H.b)({
							editPost: !1,
							save: !Ue,
							hide: !1,
							report: !1
						})
					}))), C && r.a.createElement(L.a, {
						post: xe,
						postIds: null != Ae ? Ae : [],
						subredditId: null == we ? void 0 : we.id
					}));
					return r.a.createElement(h.b, null, tt, se && !J && r.a.createElement(R.a, {
						className: Oe.a.chain,
						listingKey: me,
						listingName: pe,
						postId: xe.id
					}))
				});
			Se.displayName = "LargePostMemoized";
			t.default = Object(re.b)(xe(Object(se.b)(Se)))
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/ModModeReports/index.m.less"),
				a = s.n(c);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", a.a), u = i.a.div("Placeholder", a.a), m = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
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
				fallback: o.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
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
				c = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(c.a)(),
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
				}, r.a.createElement(a.a, {
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				o = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i);
			const {
				fbt: a
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: e.className
				}, t ? a._("Voting closed {timeAgo}", [a._param("timeAgo", c.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Nb
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
				c = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(a);

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
					post: a,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(c.c)(n, e),
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
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
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
								n >= .5 && s(a.d(e.postId))
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
				_ = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				E = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(O);
			const x = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(v.a)((e, {
						post: t
					}) => Object(f.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(f.i)(e, {
						postId: t.id
					}),
					pageType: e => Object(_.actionInfo)(e).pageType
				})),
				S = e => {
					const t = Object(E.d)(e.target, e.currentTarget),
						s = Object(E.b)(e.target, e.currentTarget, E.a.buttons);
					return "subreddit" !== t && s
				};
			class y extends r.a.Component {
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
						onPostContentClick: p,
						pageType: f,
						sendEvent: _,
						style: v,
						ref: E,
						shouldAddGalleryViewability: O = !0
					} = this.props, x = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => m && m(s, l, t, o, f))(s), p && S(s) && p(s, l)), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && _(Object(a.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(g.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), y = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || y ? r.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, x) : l.media && Object(b.E)(l.media) && O ? r.a.createElement(u, {
						postId: l.id
					}, x) : x
				}
			}
			t.a = x(Object(E.c)(Object(m.c)(y)))
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/flair.ts"),
				i = s("./src/reddit/helpers/flair.ts"),
				c = s("./src/reddit/models/Flair/index.ts");
			const a = e => (e || []).find(e => e.type === c.f.Text || e.type === c.f.Image || e.type === c.f.Richtext);
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
				const c = Object(i.g)(t).length;
				return 0 === c ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : c > o.g ? {
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
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
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
					let c = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (c = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(a.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, c)
				}
			}
			const f = Object(i.b)(() => Object(c.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function c(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
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
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				a = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				l = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(l);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: b,
					redditStyle: f,
					isOverlay: _,
					isVoteCountAnimation: h,
					postId: v
				} = e, E = `upvote-button-${t.id}${_?"-overlay":""}`;
				return r.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(a.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && r.a.createElement(c.a, {
					className: u.a.checkbox,
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), r.a.createElement(i.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: E,
					isVoteCountAnimation: h,
					isCountAnimShadowTestEnabled: m,
					postId: v,
					scoreClassName: u.a.score
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
				return A
			})), s.d(t, "a", (function() {
				return q
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				C = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				P = s.n(w);
			const k = Object(a.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var A, N = Object(i.b)(k)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, P.a.proposalMetaData)
					}, o.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(T.a)(n)), j.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(C.a, {
						className: P.a.proposalExpiry,
						poll: t
					}))
				})),
				L = s("./src/reddit/components/SEOTitle/index.tsx"),
				D = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/PostTitle/index.m.less"),
				F = s.n(R),
				U = s("./src/config.ts"),
				M = s("./src/reddit/hooks/useClickSourceData.ts"),
				B = s("./src/reddit/hooks/useExperimentVariant.ts"),
				G = s("./src/reddit/hooks/usePostContext.ts"),
				V = s("./src/reddit/hooks/useTheme.ts"),
				W = s("./src/telemetry/models/Outbound.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(A || (A = {}));
			const q = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: r,
					className: i,
					redditStyle: c
				}) => {
					const a = Object(V.a)();
					let d = "";
					switch (e) {
						case A.ExtraLarge:
							d = F.a.ExtraLarge;
							break;
						case A.Large:
							d = F.a.Large;
							break;
						case A.Medium:
							d = F.a.Medium;
							break;
						case A.Small:
							d = F.a.Small;
							break;
						case A.ExtraSmall:
							d = F.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(F.a.Title, i, d, {
							[F.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(S.a)({
								redditStyle: c,
								theme: a
							}).titleText
						}
					}, s ? o.a.createElement(L.b, {
						type: s
					}, r) : r)
				},
				H = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: n,
					...r
				}) => o.a.createElement(c.a, Y({}, r, {
					className: Object(l.a)(e, F.a.styledLink, {
						[F.a.isVisitedEnabled]: !t
					})
				}), n),
				z = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: n
				}) => o.a.createElement("div", {
					className: Object(l.a)(F.a.titleContainer, s, {
						[F.a.isNoWrap]: t,
						[F.a.isVisitedEnabled]: !e
					})
				}, n),
				K = Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: D.bb
				}),
				Q = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(M.a)(), i = Object(B.a)(m.pc) === m.tc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(z, {
						nowrap: e.nowrap
					}, o.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(J, e)); {
						const c = t.media && Object(x.G)(t.media) ? Object(E.c)(t.id, s.name) : t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(c) : i ? Object(_.a)(c, void 0, r) : Object(_.a)(c);
						return o.a.createElement(z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement(J, t)) : o.a.createElement(J, t)
						})(t, e) : o.a.createElement(H, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a
						}, o.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const i = e.isCommentsPage ? L.a.PostComments : L.a.PostItem;
					return o.a.createElement(q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				Z = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = e.isCommentsPage ? W.SourceElement.PostLink : W.SourceElement.ListingPostLink, i = !t && !e.isCrosspost && e.size !== A.Large && !s.isSponsored && !(s.media && Object(x.G)(s.media)) && (s.source || s.media && (s.media.type === x.o.GIFVIDEO || s.media.type === x.o.IMAGE || s.media.type === x.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return o.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(x.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(y.a)(s), !s.isSponsored && o.a.createElement(O.a, {
							name: "external_link",
							className: F.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== A.Large && e.size !== A.ExtraLarge) return o.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(y.a)(s), !s.isSponsored && o.a.createElement(O.a, {
						name: "external_link",
						className: F.a.outboundLinkIcon
					}));
					return null
				};
			class X extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${F.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(S.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(S.a)(this.props).titleText,Object(S.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isOverlay: r,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: a
					} = this.props, d = s === g.b.Left, u = Object(I.b)(c), m = a ? u.filter(e => e.type === g.f.Nsfw || e.type === g.f.Spoiler) : d ? u.filter(e => Object(h.q)(e.type)) : [], p = a ? [] : d ? u.filter(e => !Object(h.q)(e.type)) : u, b = !r && !n, f = !t && m && m.length > 0 && b, _ = !t && p && p.length > 0 && b;
					return o.a.createElement("div", {
						className: Object(l.a)(F.a.Component, e, c.id)
					}, !a && f && o.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(Q, Y({}, this.props, {
						leftFlair: a ? m : void 0
					})), i && o.a.createElement(N, {
						className: F.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(Z, this.props), _ && o.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: F.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.ab)(),
					s = Object(p.v)(t),
					n = Object(G.a)(),
					r = Object(i.e)(r => K(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					c = Object(V.a)(),
					a = Object(u.b)();
				return o.a.createElement(X, Y({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: c,
					sendEvent: a
				}))
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/components/PostTopLine/index.m.less"),
				S = s.n(x);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: r,
				hideNSFWPref: x,
				hostPostData: y,
				iconClassName: I,
				inSubredditOrProfile: j,
				isCommentsPage: T,
				isCompactPinnedPost: C,
				isCurrentUserProfilePost: w,
				isOverlay: P,
				isTopicPage: k,
				listingKey: A,
				post: N,
				shouldShowSubscribeButton: L,
				showCornerOutboundLink: D,
				showSubreddit: R,
				showSubredditIcon: F,
				subredditOrProfile: U,
				isFollowed: M,
				shouldShowFollowButton: B,
				onFollowPostClick: G
			}) => {
				const V = r || k;
				return o.a.createElement("div", {
					className: Object(i.a)(S.a.container, e)
				}, R && U && o.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: U.url
				}, F && o.a.createElement(m.b, {
					className: Object(i.a)(S.a.subredditIcon, I),
					shouldHideNsfwIcon: x,
					subredditOrProfile: U
				}))), o.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, R && o.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), o.a.createElement(u.d, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: P ? u.c.Lightbox : void 0,
					post: N,
					showSub: R,
					subredditOrProfile: U
				}), o.a.createElement(l.a, {
					className: S.a.postBadges,
					displayText: U ? U.displayText : null,
					inSubredditOrProfile: j,
					isCompactPinnedPost: C,
					post: N,
					tooltipType: P ? u.c.Lightbox : void 0
				}), !V && o.a.createElement(c.a, {
					isPostDetail: T,
					thing: N,
					tooltipType: P ? u.c.Lightbox : void 0
				})), U && R && L && !w && o.a.createElement(b.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(v.h)(N.id, e ? "unsubscribe" : "subscribe", "post", A, y),
					identifier: {
						name: U.name,
						type: Object(g.h)(U) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: N.id,
					size: _.c.XS
				}), D && o.a.createElement(h.b, {
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(O.D)(N),
					source: N.source
				}, o.a.createElement(E.a, {
					className: S.a.outboundLinkIcon
				})), B && o.a.createElement(d.a, {
					isFilled: !!M,
					onClick: G,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
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
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/VerticalVotes/index.m.less"),
				v = s.n(h);
			const E = Object(c.c)({
					isNightMode: _.V,
					isAnimatingUpvotePostId: f.k
				}),
				O = Object(i.b)(E),
				g = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class S extends o.a.Component {
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
							isVoteCountAnimation: c,
							shouldShowScore: d = !0,
							upvoteButtonClassName: p,
							containerRef: f,
							model: _,
							postId: h
						} = e,
						E = g(e),
						O = x(e),
						S = _.voteState,
						y = i === h;
					return o.a.createElement("div", {
						className: Object(a.a)(v.a.votesContainer, e.className),
						id: `vote-arrows-${_.id}`,
						ref: f
					}, E ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": S === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: S
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": S === b.a.upvoted,
						className: Object(a.a)(l.n, p, {
							[v.a.bounceUp]: y
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: S
					})), !e.compact && d && o.a.createElement(u.a, {
						className: Object(a.a)(v.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: S,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!c,
						isCountAnimShadowTestEnabled: !!s,
						postId: h
					}), O ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": S === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: S
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": S === b.a.downvoted,
						className: Object(a.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: S
					})))
				}
			}
			const y = Object(d.a)(O(S));
			t.a = y
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
				return P
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "d", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, s) => n => {
				const r = e(n),
					i = t(n),
					c = !r && i;
				return Object(o.a)(s.baseClassName, n.className, {
					[s.mIsInteractive]: i,
					[s.mIsActive]: r,
					[s.mIsVoteable]: c
				})
			};
			var a = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = s("./src/reddit/models/Vote/index.ts"),
				l = s("./src/reddit/controls/Downvote/index.m.less"),
				u = s.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === d.a.downvoted,
				b = c(p, ({
					interactive: e
				}) => !1 !== e, m);
			var f = e => r.a.createElement(a.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				_ = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				h = s("./src/reddit/controls/Upvote/index.m.less"),
				v = s.n(h);
			const E = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				O = ({
					voteState: e
				}) => e === d.a.upvoted,
				g = c(O, ({
					interactive: e
				}) => !1 !== e, E);
			var x = e => r.a.createElement(_.a, {
					className: g(e),
					compact: e.compact,
					isFilled: O(e)
				}),
				S = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				T = s.n(j);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => Object(o.a)({
					[T.a.compact]: e.compact,
					[T.a.dark]: Object(y.b)(Object(S.a)(e)),
					[T.a.nightmode]: e.isNightMode
				}),
				P = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), s = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...i
					} = e;
					return r.a.createElement("button", C({}, i, {
						className: Object(o.a)(T.a.customDownvote, w(e), {
							[T.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				k = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), s = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...i
					} = e;
					return r.a.createElement("button", C({}, i, {
						className: Object(o.a)(T.a.customUpvote, w(e), {
							[T.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				A = f,
				N = x
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = 3,
				r = 5,
				o = 10
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
				c = s("./src/reddit/controls/Checkbox/index.m.less"),
				a = s.n(c);
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
					[a.a.redditStyle]: e.redditStyle,
					[a.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				a = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
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
					}, e.showButton && (e.selected ? r.a.createElement(a.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(c.a, {
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
							c = null !== t ? i ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: i,
							tabIndex: c
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./node_modules/react/index.js"),
				a = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/constants/colors.ts"),
				p = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/controls/Score/index.m.less"),
				x = s.n(g);
			const S = e => e.voteState === v.a.downvoted ? Object(h.a)(e).voteText.downvote : e.voteState === v.a.upvoted ? Object(h.a)(e).voteText.upvote : Object(b.a)(Object(p.a)(e)),
				y = () => 0,
				I = Object(d.b)(e => ({
					locale: Object(O.i)(e)
				})),
				j = Object(o.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : S(e)
						},
						{
							score: s,
							postId: o = "",
							locale: p,
							isVoteCountAnimation: b,
							isCountAnimShadowTestEnabled: h
						} = e,
						v = Object(d.d)(),
						O = null == p ? void 0 : p.startsWith("en"),
						g = e.isScoreHidden ? O ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : a.a.createElement("span", {
							className: x.a.dot
						}, "•") : Object(i.b)(s),
						I = Object(c.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && v(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [v, o]),
						j = Object(c.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						T = Object(_.a)(),
						C = Object(c.useCallback)(() => {
							T(Object(f.m)(o))
						}, [T, o]),
						w = !e.isScoreHidden && b && s < E.a;
					return a.a.createElement("div", {
						className: Object(r.a)(x.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, (w || h) && a.a.createElement(a.a.Fragment, null, a.a.createElement(u.b, {
						initialDisplayCount: s,
						countToUpperBound: s,
						initialDelay: y,
						subsequentRecurringDelay: y,
						incrementDelta: y,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: C,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: j.current,
						onDataCB: I,
						isLoadTestOnly: h && !w
					})), !w && g)
				});
			t.a = I(j)
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
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/featureFlags/index.ts");

			function a(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => c.d[e](t)
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(n.e)(s));
				return t
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
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.G.NO_STRIPE_SUBSCRIPTION:
							case n.G.USER_DOESNT_EXIST:
							case n.G.USER_REQUIRED_ERROR:
							case n.G.VALIDATION_ERROR:
								return e;
							case n.G.NO_USER:
							case n.G.NO_TEXT:
							case n.G.NO_URL:
								return n.G.VALIDATION_ERROR;
							case n.G.CREDIT_CARD_FAILURE:
							case n.G.CREDIT_CARD_FAILURE_GENERIC:
								return n.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.G.VALIDATION_ERROR
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "d", (function() {
				return h
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(c.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.l)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				_ = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
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
				return _
			})), s.d(t, "i", (function() {
				return h
			}));
			var n = s("./src/reddit/models/Gold/Award.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				a = e => ({
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
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? a(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, s) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s
				}),
				m = (e, t, s, n) => r => ({
					...c(r),
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
					...c(n),
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
					goldPurchase: s ? a(s) : null
				}),
				b = (e, t, s) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s ? a(s) : null
				}),
				f = (e, t, s) => n => ({
					...c(n),
					source: "awards",
					action: "click",
					noun: s,
					goldPurchase: a(e),
					profile: r.profileById(n, t),
					subreddit: r.subredditById(n, t)
				}),
				_ = (e, t) => f(e, t, "disable_in_community"),
				h = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return v
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "E", (function() {
				return y
			})), s.d(t, "F", (function() {
				return I
			})), s.d(t, "M", (function() {
				return T
			})), s.d(t, "B", (function() {
				return C
			})), s.d(t, "C", (function() {
				return w
			})), s.d(t, "D", (function() {
				return P
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "w", (function() {
				return A
			})), s.d(t, "x", (function() {
				return N
			})), s.d(t, "L", (function() {
				return L
			})), s.d(t, "K", (function() {
				return D
			})), s.d(t, "I", (function() {
				return R
			})), s.d(t, "v", (function() {
				return F
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "z", (function() {
				return M
			})), s.d(t, "A", (function() {
				return B
			})), s.d(t, "N", (function() {
				return G
			})), s.d(t, "J", (function() {
				return V
			})), s.d(t, "t", (function() {
				return W
			})), s.d(t, "H", (function() {
				return Y
			})), s.d(t, "d", (function() {
				return q
			})), s.d(t, "c", (function() {
				return H
			})), s.d(t, "b", (function() {
				return z
			})), s.d(t, "f", (function() {
				return K
			})), s.d(t, "e", (function() {
				return Q
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "m", (function() {
				return $
			})), s.d(t, "r", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "l", (function() {
				return se
			})), s.d(t, "n", (function() {
				return ne
			})), s.d(t, "p", (function() {
				return re
			})), s.d(t, "q", (function() {
				return oe
			})), s.d(t, "o", (function() {
				return ie
			})), s.d(t, "j", (function() {
				return ce
			})), s.d(t, "u", (function() {
				return ae
			})), s.d(t, "G", (function() {
				return de
			}));
			var n, r = s("./src/lib/stringInterpolate/index.ts"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/models/Widgets/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/reddit/selectors/widgets.ts"),
				b = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const f = "discovery_unit",
				_ = (e, t, s) => ({
					...m.defaults(e),
					source: f,
					screen: m.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && s ? Object(r.a)(t.title, {
							subredditName: s.name
						}) : t.title,
						name: t.unitName
					}
				}),
				h = (e, t, s) => ({
					..._(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				v = (e, t) => {
					Object(b.a)(E(t)(e))
				},
				E = (e, t) => s => h(s, e, t),
				O = (e, t, s, n) => "unitName" in t ? _(e, t, n) : ((e, t, s) => ({
					...m.defaults(e),
					source: "search",
					screen: m.screen(e),
					search: s ? {
						...m.search(e, s),
						structureType: m.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				g = (e, t, s, r, o) => ({
					...O(e, t, r, o),
					action: "view",
					noun: n.ITEM_POST,
					post: m.post(e, s)
				}),
				x = ({
					post: e,
					rawQuery: t,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? m.StructureType.PromotedTrend : m.StructureType.Trending
				});
			var S;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(S || (S = {}));
			const y = (e, t, s) => {
					Object(b.a)(j(e, t, s, i.c.CLICK))
				},
				I = (e, t, s) => {
					Object(b.a)(j(e, t, s, i.c.VIEW))
				},
				j = (e, t, s, n) => {
					const r = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...m.defaults(e),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: x(t),
						discoveryUnit: s === S.POPULAR_CAROUSEL ? {
							name: d.m,
							id: d.m,
							title: d.m,
							type: "query"
						} : void 0,
						actionInfo: m.actionInfo(e, {
							paneName: s,
							position: r
						}),
						search: {
							originPageType: e.platform.currentPage ? m.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: m.StructureType.Trending,
							queryId: n === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				T = (e, t, s, n, r, o, c) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(a.f)(e, s, n, r, o, t),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				C = (e, t, s, n) => {
					Object(b.a)(g(e, t, s, n))
				},
				w = (e, t, s, n) => r => g(r, e, t, s, n),
				P = (e, t, s, r) => {
					const o = O(e, t, r);
					Object(b.a)({
						...o,
						...Object(p.b)(e, s),
						action: "view",
						noun: n.ITEM_SUBREDDIT
					})
				},
				k = (e, t) => {
					Object(b.a)({
						..._(e, t),
						source: f,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				A = (e, t, s, n) => {
					Object(b.a)(N(t, s, n)(e))
				},
				N = (e, t, s, r) => o => {
					return {
						...O(o, e, s, r),
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_POST,
						post: m.post(o, t)
					}
				},
				L = (e, t, s, n) => r => o => Object(a.f)(o, r, e, t, s, n),
				D = (e, t, s, n) => r => o => Object(a.e)(o, e, t, void 0, s, r, n),
				R = (e, t, s, n) => r => o => ({
					...Object(a.f)(o, r, e, t, s, n),
					noun: "ad"
				}),
				F = (e, t) => s => r => ({
					...e ? _(r, e, t) : {},
					source: f,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: m.post(r, s)
				}),
				U = (e, t, s, n) => {
					Object(b.a)(M(t, s, n)(e))
				},
				M = (e, t, s, n) => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						c = o ? Object(p.b)(r, o) : void 0;
					return {
						...O(r, e, s, n),
						...c,
						source: f,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: m.post(r, t)
					}
				},
				B = (e, t, s) => n => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						c = o ? Object(p.b)(r, o) : void 0;
					return {
						...O(r, e, void 0, s),
						...c,
						source: f,
						action: i.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: m.post(r, t)
					}
				},
				G = (e, t, s) => {
					const n = O(e, t);
					Object(b.a)({
						...n,
						...Object(p.b)(e, s),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				V = (e, t, s, n, r, o) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(a.e)(e, t, s, n, r, void 0, o)
					})
				},
				W = (e, t, s) => {
					const n = O(e, t);
					Object(b.a)({
						...n,
						...Object(p.b)(e, s),
						source: f,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				Y = (e, t) => s => {
					const n = Object(l.j)(t);
					return {
						..._(s, e, t),
						...Object(p.b)(s, n),
						source: f,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				q = (e, t) => s => ({
					..._(s, e, t),
					action: "status",
					actionInfo: m.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				H = (e, t, s) => n => ({
					..._(n, e, s),
					action: "status",
					actionInfo: m.actionInfo(n, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				z = (e, t) => s => ({
					..._(s, e, t),
					action: "click",
					noun: "close"
				}),
				K = (e, t, s) => n => ({
					...O(n, e, t, s),
					action: "click",
					noun: "scroll"
				}),
				Q = (e, t) => s => ({
					..._(s, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				J = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Z = (e, t, s) => m.actionInfo(e, {
					position: s
				}),
				X = (e, t, s) => {
					const n = J();
					return e => ({
						...h(e, n),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t)
					})
				},
				$ = (e, t, s) => {
					const n = J();
					return e => ({
						...g(e, n, t),
						actionInfo: Z(e, 0, s)
					})
				},
				ee = (e, t, s) => {
					const r = J();
					return e => ({
						..._(e, r),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: i.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				te = (e, t, s) => {
					const r = J();
					return e => ({
						..._(e, r),
						actionInfo: Z(e, 0, s),
						post: m.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				se = (e, t, s, r) => {
					const o = J();
					return e => ({
						..._(e, o),
						actionInfo: Z(e, 0, r),
						subreddit: m.subredditById(e, s) || null,
						post: m.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				ne = (e, t, s) => {
					const r = J();
					return e => ({
						..._(e, r),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				re = (e, t, s, r) => {
					const o = J();
					return e => ({
						..._(e, o),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t) || null,
						post: r ? m.post(e, r) : null,
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				oe = (e, t, s, r) => {
					const o = J();
					return e => ({
						..._(e, o),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t) || null,
						post: r ? m.post(e, r) : null,
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, s) => {
					const r = J();
					return e => ({
						..._(e, r),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, s) => {
					const r = J();
					return e => ({
						..._(e, r),
						actionInfo: Z(e, 0, s),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				ae = (e, t) => s => ({
					..._(s, e),
					...t && Object(p.b)(s, t),
					source: f,
					action: i.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					..._(t, e),
					source: f,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), s.d(t, "clickGildEvent", (function() {
				return m
			})), s.d(t, "clickRpanGiveAward", (function() {
				return p
			})), s.d(t, "clickAddAward", (function() {
				return b
			})), s.d(t, "clickHideAward", (function() {
				return f
			})), s.d(t, "clickConfirmHideAward", (function() {
				return _
			})), s.d(t, "clickCancelHideAward", (function() {
				return h
			})), s.d(t, "clickAwardReportFlow", (function() {
				return E
			})), s.d(t, "clickCancelAwardReportFlow", (function() {
				return O
			})), s.d(t, "clickFlagAwardUsage", (function() {
				return g
			})), s.d(t, "clickCancelFlagAwardUsage", (function() {
				return x
			})), s.d(t, "clickConfirmFlagAwardUsage", (function() {
				return S
			})), s.d(t, "clickReportAward", (function() {
				return y
			})), s.d(t, "clickCancelReportAward", (function() {
				return I
			})), s.d(t, "clickConfirmReportAward", (function() {
				return j
			})), s.d(t, "viewGildModalEvent", (function() {
				return T
			})), s.d(t, "clickSelectAwardEvent", (function() {
				return C
			})), s.d(t, "triggerAnonymousEvent", (function() {
				return w
			})), s.d(t, "clickMessageInputEvent", (function() {
				return P
			})), s.d(t, "typeMessageInputEvent", (function() {
				return k
			})), s.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), s.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), s.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), s.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), s.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), s.d(t, "clickNextButtonEvent", (function() {
				return F
			})), s.d(t, "clickCloseGildModalEvent", (function() {
				return U
			})), s.d(t, "viewKarmaSuccessEvent", (function() {
				return M
			})), s.d(t, "clickFilterEvent", (function() {
				return B
			})), s.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), s.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var n = s("./src/reddit/models/Gold/Award.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/telemetry/models/GoldPurchase.ts"),
				i = s("./src/reddit/helpers/correlationIdTracker.ts"),
				c = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...r.defaults(e),
					comment: t ? r.comment(e, t) : void 0,
					correlationId: Object(a.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? r.post(e, t) : void 0,
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				b = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				f = (e, t) => s => ({
					...u(s, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				_ = (e, t) => s => ({
					...u(s, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => s => ({
					...u(s, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				v = e => (t, s) => n => ({
					...u(n, s),
					source: Object(c.a)(s) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				E = v("award_hovercard_report"),
				O = v("cancel_award_hovercard_report"),
				g = v("flag_award"),
				x = v("cancel_flag_award"),
				S = v("confirm_flag_award"),
				y = v("report_community_award"),
				I = v("cancel_report_community_award"),
				j = v("confirm_report_community_award"),
				T = (e, t, s) => n => ({
					...u(n, s),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				C = (e, t, s) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, s)
				}),
				w = (e, t) => s => ({
					...u(s, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				k = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				U = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				M = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: s,
					numberCoins: n,
					thingId: r
				}) => o => ({
					...u(o, r),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(c.a)(r) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: s,
						numberCoins: n,
						...l(e)
					}
				}),
				B = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "i", (function() {
				return S
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				o = s("./src/reddit/selectors/gold/giveAwards.ts"),
				i = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
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
					} = t, f = !!s, _ = o.b(e), h = _ ? Object(u.getAwardTypeFromAward)(_) : null, v = f ? h : c.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, E = s ? Object(p.a)(s) ? "comment" : "post" : void 0, O = l || c.t(e), g = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === O)[0], x = t.offerContext || (_ && 0 === _.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(g, f)), S = g ? Math.round(1e4 * (g.baselinePennies - g.pennies) / g.baselinePennies) / 100 : 0, y = g ? Math.round(1e4 * (g.coins - g.baselineCoins) / g.coins) / 100 : 0, I = g ? g.baselinePennies !== g.pennies ? `${S}_percent_price` : g.baselineCoins !== g.coins ? `${y}_percent_bonus` : void 0 : void 0, j = v === d.GoldPurchaseType.Premium ? n.vb : g ? g.pennies : void 0;
					return {
						...a.defaults(e),
						comment: s ? a.comment(e, s) : null,
						correlationId: c.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: s ? a.post(e, s) : null,
						screen: a.screen(e),
						subreddit: s ? a.subreddit(e) : null,
						goldPurchase: {
							..._ ? Object(b.a)(_) : null,
							type: v,
							gildedContent: f,
							contentType: E,
							numberCoins: g ? g.coins : void 0,
							offerContext: x,
							offerType: I
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: j
						},
						purchase: {
							priceMicros: j
						}
					}
				},
				_ = (e, t, s) => n => ({
					...f(n, {
						packageId: t,
						thingId: e,
						offerContext: s
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
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
					noun: "credit_card"
				}),
				E = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = (e, t) => s => ({
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
				x = (e, t, s) => n => {
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
							source: e ? d.GiveGold : c.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				S = e => t => {
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
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				c = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: c.profile(e),
					screen: c.screen(e),
					subreddit: c.subreddit(e)
				}),
				d = (e, t, s) => n => ({
					source: Object(i.h)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(n),
					post: c.post(n, e)
				}),
				l = (e, t, s, n) => r => {
					const i = s ? c.comment(r, s) : null,
						{
							sortToUse: a
						} = Object(o.a)(r, e);
					return {
						...d(e, t, n)(r),
						comment: i,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => s => {
					const n = c.currentPost(s);
					return n ? d(n.id, e, t)(s) : {
						source: Object(i.h)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(s)
					}
				},
				m = (e, t) => s => Object(r.a)({
					...d(e, t)(s),
					...c.defaults(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...a(t),
					post: c.currentPost(t),
					userSubreddit: c.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "j", (function() {
				return c
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "l", (function() {
				return h
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(r.screen)(e),
					profile: Object(r.profile)(e),
					subreddit: Object(r.subreddit)(e),
					userSubreddit: Object(r.userSubreddit)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				c = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					...o(s)
				}),
				a = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				l = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				u = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				m = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				p = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					...o(s)
				}),
				b = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					...o(s)
				}),
				f = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				}),
				_ = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				}),
				h = (e, t, s, n) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.post)(o, s),
					subreddit: Object(r.subredditByPostOrCommentId)(o, s),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(r.comment)(o, s)
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "y", (function() {
				return a
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
				return _
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "t", (function() {
				return y
			})), s.d(t, "j", (function() {
				return I
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "u", (function() {
				return C
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "s", (function() {
				return P
			})), s.d(t, "v", (function() {
				return k
			})), s.d(t, "w", (function() {
				return A
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.p)(e)
				}),
				c = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				a = () => e => ({
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
				_ = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				h = () => e => ({
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
				E = () => e => ({
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
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				g = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				x = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : g[e],
					...o(t)
				}),
				S = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				y = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.l)(e),
					...o(i),
					actionInfo: r.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				I = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				C = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				w = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				P = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				k = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				A = () => (e, t) => {
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
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "e", (function() {
				return h
			}));
			var n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				r = s("./src/reddit/selectors/avatarMarketing.ts"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				a = e => t => {
					const s = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(r.a)(t) && Object.assign(s, c), s
				},
				d = (e, t) => s => {
					const {
						id: n
					} = Object(i.mb)(s, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.defaults(s),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...o.defaults(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...o.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					...o.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.defaults(e),
					...c
				}),
				b = e => t => s => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.defaults(s),
					snoovatar: o.snoovatarActiveForBuilderEvent(s),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				f = b("view"),
				_ = b("click"),
				h = b("dismiss")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				i = s("./src/reddit/selectors/telemetry.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				a = s("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = i.subreddit(e),
					s = null == t ? void 0 : t.id;
				if (!s) return;
				const r = Object(a.c)(e, {
						subredditId: s
					}),
					d = Object(c.h)(e),
					l = d ? Object(o.d)(e, {
						subredditId: s,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == r ? void 0 : r.displaySettings.isUserEnabled) || !(null == r ? void 0 : r.applied)) return {
					isActive: !1,
					...u
				};
				const m = r.applied.templateId,
					p = Object(n.g)(r.applied);
				return p ? {
					id: m,
					title: p,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...i.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: s,
						achievementFlair: r
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...i.defaults(t),
						userFlair: {
							id: null == s ? void 0 : s.id,
							title: s && Object(n.g)(s),
							isActive: s && !!s,
							achievementFlairId: null == r ? void 0 : r.type,
							achievementFlairTitle: null == r ? void 0 : r.name,
							isLocked: null == r ? void 0 : r.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...i.defaults(e)
				}),
				p = (e, t, s) => c => {
					const a = Object(r.e)(c, {
							commentId: e
						}),
						d = Object(o.d)(c, {
							subredditId: t,
							userId: s
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...i.defaults(c),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == a ? void 0 : a.templateId,
							title: a ? Object(n.g)(a) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...i.defaults(e)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = r.a) {
				return Object(n.e)(s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
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

			function c(e) {
				const t = Object(r.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, s) {
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), a.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", d({}, s, {
				className: Object(o.a)(a.a.compactDownvoteWrapper, s.className)
			}), r.a.createElement(l, {
				className: a.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, s, {
				className: Object(o.a)(a.a.downvoteWrapper, s.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", c.a);
			t.a = a
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
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), a.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", d({}, s, {
				className: Object(o.a)(a.a.compactUpvoteWrapper, s.className)
			}), r.a.createElement(l, {
				className: a.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, s, {
				className: Object(o.a)(a.a.upvoteWrapper, s.className)
			}), r.a.createElement(l, {
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
				c = s.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({}, e, {
				className: Object(o.a)(c.a.icon, e.className),
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
				return c
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
				c = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return a
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const o = {
				[n.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var i, c;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(i || (i = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(c || (c = {}));
			const a = (e, t) => {
				const s = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === s,
					r = "new_purchaser" === s,
					o = "repeat_purchaser" === s;
				return t ? c.GildFlow : n ? c.LowCoinBalance : r ? c.NewUserTargetedOffer : o ? c.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "q", (function() {
				return h
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "l", (function() {
				return I
			})), s.d(t, "p", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, a, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(c || (c = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(a || (a = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === r.a.Subreddit;
			var p, b, f, _;
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
			}(_ || (_ = {}));
			const h = e => b[_[e]],
				v = e => _[b[e]],
				E = e => f[b[e]],
				O = e => b[f[e]],
				g = e => _[f[e]];
			var x;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const S = e => {
					switch (e) {
						case x.Hourly:
						case x.Daily:
						case x.Weekly:
						case x.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				I = e => {
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
			var n, r = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
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
				c = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts");
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
						(o = e.placement ? e.placement === c.a.First ? n[a.a.Loyalty][r] : n[a.a.Achievement][r] : l(e) ? n[a.a.Cosmetic][a.c.MyBadges][r] : n[a.a.Cosmetic][a.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
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
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
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
					t[a.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][s] = {
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
						[a.a.Loyalty]: p(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: p(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: p(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: p(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
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
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/constants/modals.ts");
			const c = {
				active: !1,
				assetUrls: null
			};
			var a = (e = null, t) => {
				var s;
				switch (t.type) {
					case r.o:
						const {
							avatarMarketingEvent: n
						} = t.payload;
						return n ? function(e) {
							const {
								startsAt: t,
								endsAt: s,
								webAssetUrls: n
							} = e, r = t && new Date(t) <= new Date, o = !!s && new Date(s) < new Date, i = n || null;
							return {
								active: !!r && !o && !!i,
								assetUrls: i
							}
						}(n) : c;
					case o.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === i.a.SNOOVATAR_MODAL ? c : e;
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				marketing: a
			})
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var i = s("./node_modules/icepick/icepick.js"),
				c = s("./src/reddit/actions/economics/powerups/constants.ts");
			const a = {},
				d = {};
			t.a = Object(n.c)({
				subredditAchievements: (e = o, t) => {
					switch (t.type) {
						case r.pb:
							const {
								subredditId: s, subredditAchievementFlairs: n
							} = t.payload, o = n.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[s] || {});
							return {
								...e, [s]: o
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = a, t) => {
					var s, n, r;
					switch (t.type) {
						case c.d: {
							const {
								id: o,
								userAchievementFlairsByRedditorIds: i
							} = t.payload;
							let c = e[o] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of i) {
								const o = t.map(({
										type: e
									}) => e),
									i = (null === (s = t.find(({
										isPreferred: e
									}) => e)) || void 0 === s ? void 0 : s.type) || (null === (n = t[0]) || void 0 === n ? void 0 : n.type),
									a = null === (r = t.find(({
										type: e
									}) => e.startsWith("POWERUPS_SUPPORTER"))) || void 0 === r ? void 0 : r.type;
								c = {
									...c,
									[e]: {
										achievementTypes: o,
										preferredType: i,
										supporterType: a
									}
								}
							}
							return {
								...e,
								[o]: c
							}
						}
						case c.f: {
							const {
								subredditId: s,
								userId: n,
								achievementType: r
							} = t.payload;
							return Object(i.setIn)(e, [s, n, "pendingPreferredType"], r)
						}
						case c.g: {
							const {
								subredditId: s,
								userId: n,
								achievementType: r
							} = t.payload;
							return Object(i.updateIn)(e, [s, n], e => ({
								...e,
								preferredType: r,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return Object(i.setIn)(e, [s, n, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = d, t) => {
					switch (t.type) {
						case c.h: {
							let s = {};
							return t.payload.forEach(e => {
								const t = e.id,
									n = e.powerups;
								if (!t || !n) return;
								const r = n.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								s = {
									...s,
									[t]: r.reduce((e, t) => (e[t] = !0, e), {})
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
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				o = s("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = s("./src/reddit/actions/modQueue/constants.ts"),
				c = s("./src/reddit/actions/pages/constants.ts"),
				a = s("./src/reddit/actions/pages/postCreation.ts"),
				d = s("./src/reddit/actions/pages/postDraft.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				u = s("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case a.PAGE_LOADED:
					case d.PAGE_LOADED:
					case c.b:
					case c.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.m:
					case i.p:
					case i.v: {
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
								applied: n,
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
							subredditId: s,
							canAssignOwn: n
						} = t.payload, r = {
							...e[s].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[s]: {
								...e[s],
								permissions: r
							}
						}
					}
					case u.q: {
						const s = t.payload,
							n = e[s.subredditId],
							r = e[s.subredditId].templates,
							o = e[s.subredditId].templateIds,
							i = {
								...r,
								[s.template.id]: s.template
							},
							c = [...o];
						return c.includes(s.template.id) || c.push(s.template.id), {
							...e,
							[s.subredditId]: {
								...n,
								templates: i,
								templateIds: c
							}
						}
					}
					case u.g: {
						const s = t.payload,
							n = e[s.subredditId],
							o = e[s.subredditId].templates,
							i = e[s.subredditId].templateIds,
							c = r()(o, s.templateId),
							a = i.filter(e => e !== s.templateId);
						return {
							...e,
							[s.subredditId]: {
								...n,
								templates: {
									...c
								},
								templateIds: a
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
			const n = (e, {
					post: t
				}) => {
					const s = t.belongsTo.id;
					if (!s) return null;
					const n = e.authorFlair.models[s];
					if (!n) return null;
					const r = t.author;
					return r && n[r] || null
				},
				r = (e, {
					subredditId: t
				}) => {
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[s] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts"),
				i = s("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing)
				},
				a = Object(n.a)(i.c, e => {
					var t, s;
					const n = null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing;
					return (null == n ? void 0 : n.active) ? n.assetUrls && n.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.Gb
				});
				return !(!t || Object(n.he)(t))
			}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				a = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.l
					});
					return t === n.q.VoteCountOnly || t === n.q.CommentCountOnly || t === n.q.VoteAndCommentCount
				},
				d = e => {
					if (Object(i.c)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.l
					});
					return t === n.q.VoteCountOnly || t === n.q.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.c)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.l
					});
					return t === n.q.CommentCountOnly || t === n.q.VoteAndCommentCount
				},
				u = (e, {
					post: t
				}) => m(e, {
					postId: t.id
				}),
				m = (e, {
					postId: t
				}) => {
					const s = e.posts.models[t];
					if (Object(i.c)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= c) return !1;
					const r = Object(o.d)(e, {
							experimentName: n.l
						}),
						a = null == r ? void 0 : r.variant;
					return a === n.q.VoteCountOnly || a === n.q.VoteAndCommentCount
				},
				p = (e, {
					postId: t
				}) => {
					const s = e.posts.models[t];
					if (Object(i.c)(e) || !s || s.isSponsored || s.numComments >= c) return !1;
					const r = Object(o.d)(e, {
							experimentName: n.l
						}),
						a = null == r ? void 0 : r.variant;
					return a === n.q.CommentCountOnly || a === n.q.VoteAndCommentCount
				},
				b = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.db
					}) === n.pb.Enabled
				}
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
				return c
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				c = e => e.gild.message,
				a = e => e.gild.api.pending,
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
				return _
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Gold/Award.ts"),
				o = s("./src/reddit/selectors/commentSelector.ts"),
				i = s("./src/reddit/selectors/gold/giveAwards.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, s) => {
					const n = t ? e[`staticIcon${s}`] : e[`icon${s}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) => e.awardSubType === r.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) => {
					let r = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						r = e.tiers.reduce((e, s) => t >= s.awardingsRequired ? s : e)
					}
					return u(r, s, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) : u(e, s, t),
				p = Object(n.a)((e, {
					awards: t,
					minSize: s,
					postOrCommentId: n
				}) => {
					const r = Object(d.c)(e),
						i = l.find(e => e >= s),
						a = n ? Object(c.G)(e, {
							postId: n
						}) || Object(o.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: i,
						prefersReducedMotion: r,
						postOrComment: a
					})), e), {})
				}),
				b = (e, {
					award: t,
					minSize: s,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: s,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: s
				}) => {
					const n = Object(a.mb)(e, {
						userName: s
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return b(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				_ = e => {
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
		"./src/reddit/selectors/gold/powerups/achievements.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/powerups/index.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts"),
				c = s("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					powerups: o.a
				}
			});
			const a = (e, {
					subredditId: t
				}) => {
					var s;
					return t ? null === (s = e.features.powerups.subredditAchievements) || void 0 === s ? void 0 : s[t] : null
				},
				d = (e, {
					subredditId: t,
					userId: s
				}) => {
					var n, r;
					return t && s ? null === (r = null === (n = e.features.powerups.subredditUserAchievements) || void 0 === n ? void 0 : n[t]) || void 0 === r ? void 0 : r[s] : null
				},
				l = Object(n.a)(d, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.preferredType)),
				u = Object(n.a)([a, l], (e, t) => e && t ? e[t] : null),
				m = Object(n.a)(d, e => null == e ? void 0 : e.supporterType),
				p = Object(n.a)([a, m], (e, t) => e && t ? e[t] : null),
				b = Object(n.a)([a, d], (e, t) => {
					if (!e) return [];
					const s = t ? t.achievementTypes : [],
						n = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.preferredType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !s.includes(e.type),
						isPreferred: e.type === n
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				f = (e, {
					commentId: t
				}) => {
					const s = Object(i.a)(e, {
							commentId: t
						}),
						n = null == s ? void 0 : s.subredditId,
						r = null == s ? void 0 : s.authorId;
					return !(!n || !r) && !(!((e, {
						subredditId: t,
						userId: s
					}) => {
						var n, r, o;
						return t && s ? null === (o = null === (r = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === r ? void 0 : r[s]) || void 0 === o ? void 0 : o[t] : null
					})(e, {
						subredditId: n,
						userId: r
					}) || !Object(c.i)(e))
				}
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "q", (function() {
				return i
			})), s.d(t, "s", (function() {
				return c
			})), s.d(t, "r", (function() {
				return a
			})), s.d(t, "u", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "y", (function() {
				return x
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "i", (function() {
				return I
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "j", (function() {
				return T
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return P
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
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				a = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.j)(e),
						s = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && s && t.find(e => e.mobileId === s) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				_ = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				v = e => e.features.goldPurchase.payment.postalCode,
				E = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				g = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				S = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				I = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				j = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				C = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				P = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const c = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.he)(t)
				},
				a = Object(n.a)(c, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "b", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				i = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = s("./src/reddit/constants/inFeedChaining.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = s("./src/reddit/selectors/discoveryUnit.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");
			const m = [],
				p = (e, t) => {
					const s = e.posts.chained.idToListingKey[t.postId];
					return t.listingKey === s
				},
				b = (e, t) => {
					const s = e.posts.chained.dismissedIdToListingKey[t.postId];
					return (e => e.posts.chained.dismissed)(e) || t.listingKey === s
				},
				f = Object(n.a)(e => e.posts.chained.idToListingKey, e => Object.keys(e).filter(t => e[t])),
				_ = (e, {
					subredditId: t
				}) => {
					return f(e).some(s => {
						const n = Object(l.T)(e, {
							postId: s
						});
						return !!n && n.id === t
					})
				},
				h = (e, {
					subredditName: t
				}) => {
					const s = r.bc.DAY.toUpperCase(),
						n = Object(o.a)(t, r.U.TOP, {
							t: s
						}),
						i = Object(l.z)(e, {
							listingKey: n
						});
					if (0 !== i.length)
						for (const r of i) {
							const t = Object(l.G)(e, {
								postId: r
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				v = (e, {
					postId: t
				}) => {
					const s = ((e, {
							postId: t
						}) => {
							const s = Object(l.G)(e, {
								postId: t
							});
							if (!s) return m;
							const n = Object(i.a)({
								subredditIds: [s.belongsTo.id],
								count: c.b
							});
							return Object(u.u)(e, {
								key: n
							})
						})(e, {
							postId: t
						}),
						n = [];
					for (const {
							name: r
						} of s) {
						const t = h(e, {
							subredditName: r
						});
						t && n.push(t.id)
					}
					return n
				},
				E = (e, {
					listingName: t
				}) => {
					const s = a.b;
					return Object(d.c)(e, {
						unitName: s
					})
				}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const c = Object(n.a)(e => Object(o.c)(e, {
				experimentName: r.fd,
				experimentEligibilitySelector: o.a
			}), i.G, (e, t) => e === r.pd.Enabled && (null == t ? void 0 : t.isCreatedFromAdsUi) || (null == t ? void 0 : t.isSponsored))
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/reddit/reducers/features/userFlair/index.ts");
			Object(i.a)({
				features: {
					userFlair: c.a
				}
			});
			const a = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : r.b.Right,
				u = Object(n.a)((e, {
					subredditId: t
				}) => {
					const s = a(e, {
						subredditId: t
					});
					if (s) return {
						type: r.d.UserFlair,
						displaySettings: s.displaySettings,
						permissions: s.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const s = d(e, {
							subredditId: t
						}),
						n = u(e, {
							subredditId: t
						}),
						r = a(e, {
							subredditId: t
						});
					if (!s || !n || !r) return !1;
					if (r.applied) return !0;
					const i = Object(o.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: c
						} = n.permissions;
					return !!r.templateIds.find(e => {
						return !r.templates[e].modOnly || i
					}) && c
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Jb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				o = s("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				c = "jsapi.consumer",
				a = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${c}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === c && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${n.a.redditUrl}${a}`, e))
					} catch (s) {
						return void console.error(i, `${n.a.redditUrl}${a}`, s)
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
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"2235f6ea21db"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"57a00f39b82d"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"5331d6d26cc7"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"dea2650df7b5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.3b8bcda7574d9eb4495c.js.map