// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.e7fabc6752d940cc0f7f.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
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
						x = !a && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = s(/version\/(\d+(\.\d+)?)/i),
						E = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !E && /[^-]mobi/i.test(t),
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
					} : a ? o = {
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
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && _ && (o.version = _)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : C ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var g = "";
					o.windows ? g = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? g = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? g = (g = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? g = (g = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? g = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? g = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? g = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? g = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (g = s(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (o.osversion = g);
					var S = !o.windows && g.split(".")[0];
					return E || c || "ipad" == r || a && (3 == S || S >= 4 && !O) || o.silk ? o.tablet = e : (O || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function a(e, n, o) {
					var a = s;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (a = t(o));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
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
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : a,
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
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const i = e => (e, t, s) => ({
				...a.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: a.d(e),
				adblock: a.e(e),
				app: a.f(e),
				feed: a.r(e),
				geo: a.t(e),
				platform: a.I(e),
				referrer: a.Y(e),
				request: a.Z(e),
				screen: a.bb(e),
				session: a.fb(e),
				user: a.rb(e),
				media: s ? a.C(e, s) : null,
				post: s ? a.K(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, n) {
							var o, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const a = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							a && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(a, c.b) ? Object(d.a)(i(n)(s, a, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(i(n)(s, c.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
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
					domainOverride: a,
					callToAction: i
				} = e;
				let c = "";
				if (o) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = a || Object(n.D)(e)
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
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				o = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(n.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(o.useState)(null), [a, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), f = Object(o.useCallback)(() => m(!u), [u]), h = Object(o.useMemo)(() => {
					const t = i(e);
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
				} = Object(r.a)(t, a, h);
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
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = [o.wc, o.sb, o.C, o.S, o.nb, o.Vb],
				a = {
					[o.Vb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.nb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.S]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.C]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.sb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.wc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[o.Vb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.nb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.S]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.C]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.sb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.wc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.sb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.wc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.wc]: "",
						[o.sb]: "",
						[o.C]: "",
						[o.S]: "",
						[o.nb]: "",
						[o.Vb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? i : a)[n](e).toString()), u -= e * n
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
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
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
				return a
			})), s.d(t, "e", (function() {
				return i
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
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
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
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
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
				return a
			})), s.d(t, "g", (function() {
				return i
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
				return E
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "o", (function() {
				return C
			}));
			const n = "CREATE_COLLECTION_PENDING",
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
				x = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
				return _
			})), s.d(t, "d", (function() {
				return E
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				a = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
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
				f = Object(o.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				x = Object(o.a)(h),
				v = (e, t, s) => async (n, o, r) => {
					let {
						apiContext: u
					} = r;
					var b, f, h, x;
					const v = Object(m.b)(o()),
						_ = await (async (e, t, s, n, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.mb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: s,
								...n
							}
						}))(u(), e, t, s, v);
					if (!_.ok) throw new Error("User avatar failed to save");
					return n(Object(p.A)(_.body)), {
						accountIcon: null === (f = null === (b = _.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (x = null === (h = _.body) || void 0 === h ? void 0 : h.avatar) || void 0 === x ? void 0 : x.image_url
					}
				}, _ = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.mb.GET
						}))(n());
						t.ok && e(f(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}, E = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.mb.GET
						}))(n());
						t.ok && e(x(t.body))
					} catch (o) {
						r.c.captureException(o)
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
				o = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/actions/users.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const s = t();
				Object(d.a)(Object(i.l)(s)), e(Object(r.t)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, s) => {
					const {
						clickSource: r,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					} = e, h = s();
					r && Object(d.a)(Object(i.g)(r)(h)), Object(c.Q)(h) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
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
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				o = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (s, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				i = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				c = s.n(i);

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
					...i
				} = e, l = Object(r.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return o.a.createElement("div", d({
					className: l,
					"data-adclicklocation": a.a.CTA_WHITESPACE
				}, i), n)
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: u,
					callToAction: p,
					caption: b
				} = t;
				if (!u || !u.url) return null;
				let f = u.displayText;
				u.displayText.length >= 40 && (f = u.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(d.s)(s, u.displayText),
					x = Object(d.t)(s) ? f : b,
					v = Object(d.t)(s) ? s.subcaption : u.displayText,
					_ = Object(a.a)(m.a.leftSideContent, {
						[m.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[m.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					E = Object(a.a)(m.a.displayUrl, {
						[m.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: _
				}, b && !o && !h && r.a.createElement("span", {
					className: m.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && r.a.createElement(c.a, {
					href: u.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: u,
					className: E,
					"data-adclicklocation": l.a.CTA_URL
				}, f), h && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: m.a.productTitle
				}, x), r.a.createElement("span", {
					className: m.a.subcaption
				}, v))), p && r.a.createElement(i.a, {
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
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
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
				return o.a.createElement(a.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": i.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: n,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: b,
					url: f,
					usePreview: h
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.thumbnailContainer, t)
				}, o.a.createElement(a.a, {
					className: Object(r.a)(c.a.thumbnail, s),
					containerClassName: b,
					crosspost: n,
					forceShowNSFW: i,
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
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
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
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				f = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/models/Audio/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				_ = s.n(v),
				E = s("./src/config.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				g = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => Math.floor(10 * Math.random()) + 1;
			var j = e => {
					let {
						postId: t
					} = e;
					const s = Object(f.e)(O.db),
						[r, i] = Object(n.useState)(!1),
						[c, d] = Object(n.useState)(k());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), d(k())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), o.a.createElement("div", {
						className: _.a.classicSpeaker
					}, r && o.a.createElement(g.a, {
						ringId: `${t}`,
						className: Object(a.a)(_.a.speakerRings, {
							[_.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: _.a.snoovatar,
						src: `${E.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: S._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && o.a.createElement("div", {
						className: _.a.muteContainer
					}, o.a.createElement(C.a, {
						className: _.a.muteIcon
					})))
				},
				y = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: r
					} = t;
					return Object(f.e)(x.t) && s.roomStatus === h.b.NotStarted ? o.a.createElement(y.a, {
						postId: n,
						author: r,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: _.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement(j, {
						postId: n
					})) : o.a.createElement("div", {
						className: _.a.endedClassicContainer
					}, o.a.createElement(C.a, {
						className: _.a.muteIcon
					}))
				},
				w = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = s("./src/reddit/components/ExpandoButton/index.tsx"),
				A = s("./src/reddit/components/Flatlist/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				U = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				V = s("./src/reddit/components/PostMeta/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Y = s("./src/reddit/components/PostTitle/index.tsx"),
				G = s("./src/reddit/components/PostTopMeta/index.tsx"),
				q = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				J = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				z = s("./src/reddit/models/Media/index.ts"),
				X = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				K = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ee = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				te = s("./src/reddit/helpers/localStorage/index.ts"),
				se = s("./src/reddit/helpers/search/renderMedia.tsx"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				re = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ae = s.n(re),
				ie = s("./src/reddit/components/ClassicPost/index.m.less"),
				ce = s.n(ie);

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: f,
					isExpanded: x,
					inSubredditOrProfile: v,
					eventFactory: _,
					first: E,
					flairStyleTemplate: O,
					formatTitle: C,
					hostPostData: g,
					isCheckboxSelected: S,
					isCurrentUserProfilePost: k,
					isFrontpage: j,
					isGalleryTileLayoutDefault: y,
					isLoggedIn: N,
					isOverlay: K,
					imageGalleryCurrentItem: re,
					moderatorPermissions: ie,
					modModeEnabled: le,
					onClickPost: ue,
					onIgnoreReports: me,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: fe,
					post: he,
					postId: xe,
					redditStyle: ve,
					scrollerItemRef: _e,
					showBulkActionCheckbox: Ee,
					showEditFlair: Oe,
					showMedia: Ce,
					shouldShowInsightsButton: ge,
					subredditOrProfile: Se,
					toggleCheckbox: ke,
					userIsOp: je,
					shouldShowGalleryTileOption: ye,
					showPromotedCTA: Ne,
					showCTAExperimentDesign: Te
				} = e, we = Object(l.a)(), Pe = Object(d.a)(x);
				Object(n.useEffect)(() => {
					be && Pe !== x && be(he.id)
				}, [x, be, he.id, Pe]);
				const Ae = ve ? void 0 : O,
					Ie = s || void 0,
					Le = Object(ee.a)(ie),
					Me = Object(Z.a)(ie),
					Re = Object($.a)(ie),
					De = le && ee.a,
					Fe = Object(M.a)(he),
					Ue = Object(D.c)(he),
					Be = !!he.media && he.media.type === z.o.RTJSON,
					Ve = je && Be,
					We = v && !Ce,
					He = !!he.media && Object(z.H)(he.media),
					Ye = !!he.recommendationContext,
					Ge = {
						flairStyleTemplate: Ae,
						post: he,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: k,
						isOverlay: K,
						shouldShowSubscribeButton: !(j && N) || Ye && N,
						subredditOrProfile: Se
					},
					qe = Object(r.t)(he, re),
					{
						source: Je
					} = qe,
					[ze, Xe] = Object(n.useState)(!1),
					Ke = Object(n.useCallback)(() => {
						Xe(!ze), Object(te.Pb)(), we(Object(oe.d)(xe))
					}, [ze, xe, we]);
				let Qe = o.a.createElement(X.a, {
					className: ce.a.classicThumbnail,
					crosspost: Ie && he,
					isMeta: he.isMeta,
					post: Ie || he,
					redditStyle: ve,
					templatePlaceholderImage: Ae && Ae.postPlaceholderImage,
					removeLink: He
				});
				Object(h.c)(he) && (Qe = o.a.createElement(T, {
					post: he
				}));
				const Ze = o.a.createElement(B.a, {
					className: Object(a.a)(ae.a.classicPostStyles, ce.a.postContainer, Object(ne.a)(e), {
						[ce.a.mFirst]: E,
						[ce.a.shouldShowOverflow]: ge
					}, t),
					isOverlay: K,
					style: {
						...Object(ne.d)(e),
						...Object(ne.b)(Ae)
					},
					post: he,
					onClick: ue,
					eventFactory: _
				}, o.a.createElement(H.a, {
					model: he,
					handleVote: f,
					showBulkActionCheckbox: Ee,
					isCheckboxSelected: S,
					toggleCheckbox: ke,
					flairStyleTemplate: Ae,
					redditStyle: ve,
					postId: xe
				}), o.a.createElement(U.a, {
					className: ge ? ce.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ae
				}, o.a.createElement(w.a, {
					className: ce.a.eventMeta,
					post: he
				}), o.a.createElement("div", {
					className: ce.a.mainBody
				}, o.a.createElement("div", {
					className: We ? ce.a.expandoContainer : ce.a.thumbnailContainer
				}, !We && Qe, o.a.createElement(P.a, {
					crosspost: Ie,
					className: ce.a.rightExpando,
					isExpanded: !!x,
					post: he,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(a.a)(ce.a.content, {
						[ce.a.showBulkActionCheckbox]: Ee
					}),
					"data-click-id": "body"
				}, !!he.recommendationContext && o.a.createElement(F.a, {
					content: he.recommendationContext.content,
					layout: Q.g.Classic,
					post: he
				}), o.a.createElement(Y.c, {
					className: fe ? ce.a.titleWithPoll : void 0,
					format: C,
					poll: fe,
					post: he,
					redditStyle: ve,
					size: Y.b.Medium,
					titleColor: Ae && Ae.postTitleColor,
					isOverlay: K
				}, he.source && !Ie && !he.isSurveyAd && o.a.createElement(J.a, {
					href: he.source.url,
					isSponsored: he.isSponsored,
					postId: he.id,
					source: he.source
				}, Object(c.a)(he))), o.a.createElement(V.a, de({
					key: "PostMeta"
				}, Ge)), le && Le && Fe && o.a.createElement(L.a, {
					thing: he
				}), le && Le && Ue && o.a.createElement(R.a, {
					onIgnoreReports: me,
					reportable: he
				}), Ne && Je && Je.url && !he.isSurveyAd && o.a.createElement(u.a, {
					ctaExperimentDesign: Te && "classic",
					className: Object(a.a)(ce.a.adLinkWrapper, {
						[ce.a.ctaExperiment]: Te
					})
				}, o.a.createElement(m.a, {
					post: he,
					adLinkContent: qe,
					ctaExperimentDesign: Te && "classic"
				})), o.a.createElement("div", {
					className: ce.a.flatlistContainer
				}, o.a.createElement(P.a, {
					className: ce.a.leftExpando,
					crosspost: Ie,
					isExpanded: !!x,
					post: he,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: ce.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ae,
					model: he,
					onVoteClick: f
				}), o.a.createElement(A.a, {
					className: ce.a.flatlistSeparator
				}), !he.isSurveyAd && o.a.createElement(A.c, {
					className: ce.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Me,
					hasModPostPerms: Le,
					hasModFullPerms: Re,
					hostPostData: g,
					isOverlay: !!K,
					modModeEnabled: le,
					onClickInsightsButton: Ke,
					onIgnoreReports: me,
					onOpenReportsDropdown: pe,
					post: he,
					shouldShowInsightsButton: ge,
					showEditPost: Ve,
					showEditFlair: Oe,
					tooltipType: K ? G.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(W.b)({
						editPost: !De,
						hide: !De,
						report: !De
					})
				})), o.a.createElement(I.d, null))), Object(se.a)(he, ce.a, _e, x, ye, y), Se && ze && o.a.createElement(b.a, {
					className: ce.a.creatorStatsContainer,
					post: he,
					subreddit: Se,
					isOwnProfileStats: !0
				})));
				return o.a.createElement(q.b, null, Ze)
			});
			t.default = Object(K.a)(le)
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
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
			const u = Object(a.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
				return S
			})), s.d(t, "a", (function() {
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				E = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(E),
				C = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = 8,
				k = 1,
				j = C.a.div("Container", O.a),
				y = C.a.div("PostMetaWrapper", O.a),
				N = C.a.wrapped(p.c, "PostTitle", O.a),
				T = C.a.div("FlatList", O.a),
				w = C.a.div("FlatItem", O.a),
				P = C.a.span("FlatListDotSpacer", O.a),
				A = C.a.wrapped(j, "LinkContainer", O.a),
				I = C.a.div("Content", O.a),
				L = C.a.div("ThumbnailContainer", O.a),
				M = Object(c.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Qb.TOPIC),
					shouldOpenPostInNewTab: _.jb
				}),
				R = Object(a.b)(M);
			t.c = Object(x.b)(R(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(A, {
					className: d
				}, r.a.createElement(I, null, r.a.createElement(y, null, r.a.createElement(m.a, c)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), U(e)), V(e)) : r.a.createElement(j, {
					className: d
				}, r.a.createElement(y, null, r.a.createElement(m.a, c)), D(a), F(e), U(e))
			}));
			const D = e => r.a.createElement(N, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, g({}, n, {
						className: O.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(T, null, r.a.createElement(w, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(P, null), r.a.createElement(w, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
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
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: a = !1
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, o.a.createElement(c.a, {
					ringId: n,
					className: Object(r.a)(i.a.innerRing, `${s}Inner`)
				}), o.a.createElement(d.a, {
					ringId: n,
					className: Object(r.a)(i.a.middleRing, `${s}Middle`)
				}), o.a.createElement(l.a, {
					ringId: n,
					className: Object(r.a)(i.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
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
				classicView: "_3BVeVQiYsH7FAegU2VUmV-"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				u = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				m = s.n(u),
				p = s("./src/reddit/controls/Button/index.tsx");
			var b = e => o.a.createElement("svg", {
				width: "15",
				height: "19",
				viewBox: "0 0 15 19",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
			}));
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = () => o.a.createElement("span", {
				className: m.a.MicrophoneIcon
			}, o.a.createElement(b, null));
			var x = e => {
				let {} = e;
				const t = Object(r.e)(d.db);
				return o.a.createElement(p.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: h,
					className: Object(a.a)(m.a.StartTalkButton, {
						[m.a.isNightMode]: t
					}),
					priority: p.c.Secondary,
					size: p.d.M,
					iconPosition: p.h.L,
					text: o.a.createElement("span", {
						className: m.a.StartTalkButtonText
					}, f._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: () => {}
				})
			};
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					isClassicView: u = !1
				} = e;
				const p = Object(r.d)(),
					b = Object(r.e)(d.F),
					f = Object(r.e)(d.db),
					h = Object(r.e)(e => Object(d.Db)(e, {
						postId: s
					})),
					_ = Object(r.e)(e => Object(d.Ab)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					_ || p(Object(i.d)(t))
				}, [p, t, s, _]);
				const E = () => o.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(m.a.hostAvatar, {
						[m.a.classicView]: u
					})
				}, o.a.createElement("div", {
					className: m.a.snoovatar
				}, o.a.createElement(c.a, {
					userName: t,
					isNSFW: !b,
					className: m.a.isImage
				})), o.a.createElement(l.a, {
					ringId: `${s}`,
					className: Object(a.a)(m.a.hostRings, {
						[m.a.nightMode]: f
					}),
					ringClassName: "hostRing"
				}));
				return u ? o.a.createElement(E, null) : o.a.createElement("div", {
					className: m.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, o.a.createElement("div", {
					className: m.a.upcomingTalkContainer
				}, o.a.createElement(E, null), o.a.createElement("div", {
					className: m.a.upcomingTalkInfo
				}, o.a.createElement("div", {
					className: m.a.upcomingTalkLabel
				}, v._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), o.a.createElement("div", {
					className: m.a.upcomingTalkHost
				}, "u/", t), h && o.a.createElement(x, null))))
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
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(u.a)(n)) return null;
				const i = n && n.eventInfo,
					m = Object(l.a)(n),
					f = i && Object(a.c)(i.eventStart, i.eventEnd);
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
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				l = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				u = s.n(l);
			var m = e => o.a.createElement("i", {
					className: Object(c.a)(Object(d.b)("live", e.isFilled), u.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", f.a),
				v = h.a.span("PostEventPastText", f.a),
				_ = h.a.span("PostEventNowText", f.a),
				E = h.a.span("Container", f.a),
				O = h.a.wrapped(i.a, "CalendarIcon", f.a),
				C = h.a.wrapped(m, "LiveIcon", f.a),
				g = h.a.div("LoadingState", f.a);
			class S extends n.Component {
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
						eventIsLive: i,
						eventStart: c
					} = s, d = Object(r.e)(c, n);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: c,
						endTime: n,
						isLive: i
					});
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						l = o.a.createElement(g, {
							className: e
						})
					}
					if (i) u = o.a.createElement(_, null, o.a.createElement(C, null), l);
					else if (d === r.a.Future) u = o.a.createElement(x, null, o.a.createElement(O, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(v, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(E, {
						className: e
					}, u)
				}
			}
			t.a = S
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = s("./src/reddit/components/ExpandoButton/index.m.less"),
				O = s.n(E);
			const C = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(m.b)(t.permalink), t.id))
				})),
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(O.a.icon, O.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case f.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case f.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case f.o.TEXT:
						case f.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case f.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case f.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case f.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: m,
					post: f,
					toggle: E,
					useMediaIcons: C
				} = e, S = s || f, k = Object(a.e)(x.b), j = Object(a.e)(x.c), y = t => {
					(k || j) && (t.preventDefault(), e.showModalOnPostLinkClick(S))
				}, N = S.media, T = Object(h.p)(f), w = o && !!s;
				return N && !T && !(("rtjson" === N.type || "text" === N.type || "liveaudio" === N.type) && !Object(p.a)(S)) || !!f.pollData ? r.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					"data-adclicklocation": _.a.MEDIA,
					onClick: E
				}, m ? r.a.createElement(b.a, {
					name: "collapse",
					className: O.a.icon
				}) : C ? r.a.createElement(r.a.Fragment, null, g(S.media && S.media.type, w, f), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(O.a.icon, O.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: O.a.icon
				})) : S.source && S.source.url ? r.a.createElement(u.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					href: S.source.url,
					isSponsored: f.isSponsored,
					postId: f.id,
					source: f.source,
					sourceElement: l ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(O.a.icon, O.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, O.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(S.permalink),
					rel: "nofollow",
					onClick: y
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: O.a.icon
				}))
			})
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
				a = s.n(r),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => a.a.createElement("div", {
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
				fallback: a.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
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
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
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
				a = s("./node_modules/react/index.js"),
				i = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(o.d, {
					seconds: e.poll.endsAt / n.Vb
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
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
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, a), o.a.createElement("div", {
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
				E = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(C);
			const S = Object(p.a)(() => Object(r.c)({
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
				k = "post-container";
			class j extends o.a.Component {
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
					} = this.props, E = o.a.createElement("div", {
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
								} = Object(a.t)(l, r);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(g.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": k,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": O.a.BACKGROUND
					}, s), C = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && _ ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || C ? o.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(E))
				}
			}
			t.a = S(Object(E.a)(Object(_.a)(Object(m.c)(j))))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
					} = this.props, o = this.state.isHovered, a = s.isFollowed;
					let i = a ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && o && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const f = Object(a.b)(() => Object(i.c)({}), (e, t) => {
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
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
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
				}) : o.a.createElement(a.a, {
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
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
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
				E = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostMeta/index.m.less"),
				C = s.n(O);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: O,
					isOverlay: g,
					isTopicPage: S,
					post: k,
					shouldShowSubscribeButton: j,
					subredditOrProfile: y,
					tooltipType: N
				} = e, T = !!S, w = Object(_.a)(), P = Object(r.e)(e => !!y && Object(a.i)(e, y.id));
				return o.a.createElement("div", {
					className: C.a.metaContainer
				}, !n && !k.isSponsored && y && o.a.createElement(c.a, {
					postId: k.id,
					subredditName: y.name
				}, o.a.createElement(p.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: y.url,
						state: w
					}
				}, y.displayText)), y && y.isQuarantined && o.a.createElement(m.a, null), !n && !k.isSponsored && y && j && !O && o.a.createElement(b.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: y.name,
						type: Object(E.h)(y) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: k.id,
					size: h.d.XXS,
					small: !0
				}), !n && !k.isSponsored && o.a.createElement(x.b, null), !n && !k.isSponsored && o.a.createElement(d.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(u.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: N,
					isModWithUserNotesPermissions: P
				}), o.a.createElement(l.a, {
					displayText: y ? y.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: N
				}), !T && o.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: g ? u.c.Lightbox : void 0
				}))
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
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
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
					shouldShowUpvoteRatioOnHover: E
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: _,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: E
					}),
					shouldShowUpvoteRatioOnHover: E
				}))
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
				return D
			})), s.d(t, "a", (function() {
				return X
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				C = s("./src/reddit/hooks/usePostContext.ts"),
				g = s("./src/reddit/hooks/useTheme.ts"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = s("./src/lib/getShortenedLink.ts"),
				w = s("./src/reddit/components/FlairWrapper/index.tsx"),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				L = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = s.n(L);
			const R = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, F = Object(i.b)(R)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(O.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, M.a.proposalMetaData)
					}, a.a.createElement("span", null, P.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [P.fbt._param("count", Object(A.a)(n)), P.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(I.a, {
						className: M.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				B = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/telemetry/models/Outbound.ts"),
				Y = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				G = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				J = s.n(q);

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
			}(D || (D = {}));
			const X = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: r,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(g.a)();
					let m = "";
					switch (t) {
						case D.ExtraLarge:
							m = J.a.ExtraLarge;
							break;
						case D.Large:
							m = J.a.Large;
							break;
						case D.Medium:
							m = J.a.Medium;
							break;
						case D.Small:
							m = J.a.Small;
							break;
						case D.ExtraSmall:
							m = J.a.ExtraSmall;
							break;
						case D.Metadata:
							m = J.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(J.a.Title, i, m, {
							[J.a.isNoWrap]: o,
							[J.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? a.a.createElement(U.b, {
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
					return a.a.createElement(c.a, z({}, r, {
						className: Object(u.a)(t, J.a.styledLink, {
							[J.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				Q = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: o
					} = e;
					return a.a.createElement("div", {
						className: Object(u.a)(J.a.titleContainer, n, {
							[J.a.isNoWrap]: s,
							[J.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				Z = Object(d.c)({
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
				$ = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, o = Object(i.d)(), r = Object(E.a)(), c = Object(i.e)(B.b), d = Object(i.e)(B.c), u = e => {
						!c && !d || t.media && Object(j.H)(t.media) || (e.preventDefault(), o(Object(x.bb)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(Q, {
						nowrap: e.nowrap
					}, a.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, a.a.createElement(ee, e)); {
						const o = t.media && Object(j.H)(t.media) ? Object(_.c)(t.id, s.name) : t.permalink,
							i = e.isCommentPermalink ? Object(v.b)(o) : Object(h.a)(o, void 0, r);
						return a.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement(ee, t)) : a.a.createElement(ee, t)
						})(t, e) : a.a.createElement(K, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: u
						}, a.a.createElement(ee, e)))
					}
				},
				ee = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let o = e.format ? e.format(n) : n.title;
					s && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const r = e.isCommentsPage ? U.a.PostComments : U.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(X, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && a.a.createElement(w.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), o)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: o
					} = n, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(O.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== D.Large && !n.isSponsored && !(n.media && Object(j.H)(n.media)) && (n.source || n.media && (n.media.type === j.o.GIFVIDEO || n.media.type === j.o.IMAGE || n.media.type === j.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(j.D)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(T.a)(n), !n.isSponsored && a.a.createElement(S.a, {
							name: "external_link",
							className: J.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(T.a)(n), !n.isSponsored && a.a.createElement(S.a, {
						name: "external_link",
						className: J.a.outboundLinkIcon
					}));
					return null
				};
			class se extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${J.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
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
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === k.b.Left, b = Object(w.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(Y.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), x = !r && !o && !t, v = x && f && f.length > 0, _ = x && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(J.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": G.a.TITLE,
						onClick: m
					}, !d && v && a.a.createElement(w.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(y.b)(c) && a.a.createElement($, z({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && a.a.createElement(F, {
						className: J.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(te, this.props), _ && a.a.createElement(w.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: J.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					n = Object(C.a)(),
					o = Object(i.e)(o => Z(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(g.a)(),
					c = Object(m.b)();
				return n ? a.a.createElement(se, z({
					pageLayer: t,
					isCommentPermalink: s
				}, n, o, e, {
					theme: r,
					sendEvent: c
				})) : null
			}))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(a.b)(null, e => ({
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
			t.a = b(Object(i.a)(f))
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
				o = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(o);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = a
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
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
				a = e => {
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
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				_ = s.n(v);
			const E = Object(i.c)({
					isNightMode: h.db,
					isAnimatingUpvotePostId: f.k
				}),
				O = Object(a.b)(E),
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				g = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
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
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: i,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: v,
							postId: E
						} = e,
						O = C(e),
						S = g(e),
						k = v.voteState,
						j = a === E;
					return r.a.createElement("div", {
						className: Object(c.a)(_.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: h
					}, O ? r.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": k === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": x.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: k
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": k === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[_.a.bounceUp]: j
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": x.b.UPVOTE,
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: k
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(_.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: k,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!s,
						postId: E
					}), S ? r.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": k === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": x.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: k
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": k === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": x.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: k
					})))
				}
			}
			const k = Object(d.a)(O(S));
			t.a = k
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const _ = {
					autoplayPref: v.b,
					activeModalId: u.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: v.Q,
					showPromotedCTA: x.a,
					moderatorPermissions: b.m,
					modModeEnabled: d.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: f.a,
					showMedia: d.s,
					flairStyleTemplate: d.W,
					showCTAExperimentDesign: p.a
				},
				E = Object(n.b)(() => Object(o.c)(_), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === i.a.upvoted ? Object(r.kb)(s) : Object(r.w)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.gb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(E(Object(c.b)(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: a.ib
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
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, a = r;
					return n ? o.a.createElement(t, a) : void 0 !== s ? o.a.createElement(s, a) : null
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
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.J.NO_STRIPE_SUBSCRIPTION:
							case n.J.USER_DOESNT_EXIST:
							case n.J.USER_REQUIRED_ERROR:
							case n.J.VALIDATION_ERROR:
								return e;
							case n.J.NO_USER:
							case n.J.NO_TEXT:
							case n.J.NO_URL:
								return n.J.VALIDATION_ERROR;
							case n.J.CREDIT_CARD_FAILURE:
							case n.J.CREDIT_CARD_FAILURE_GENERIC:
								return n.J.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.J.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.J.VALIDATION_ERROR
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
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, r, a) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, n) => o.a.createElement(r.a, {
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
				})
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
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
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
				b = e => Object(n.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return i
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
			const a = e => {
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
				i = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.jb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.tb)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.jb)(s),
					userSubreddit: Object(r.tb)(s)
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
				u = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				m = (e, t, s, n, a, i) => c => ({
					...Object(r.o)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(c, e, void 0, i),
					subreddit: Object(r.jb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.jb)(n)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
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
				return E
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "x", (function() {
				return y
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "v", (function() {
				return P
			})), s.d(t, "w", (function() {
				return A
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.q)(e)
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
				E = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				O = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				C = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : O[e],
					...r(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				S = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...r(a),
					actionInfo: o.d(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
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
				y = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: a(t)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				P = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				A = () => (e, t) => {
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
						scheduledPost: a(t)
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
				return _
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "o", (function() {
				return T
			}));
			var n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				o = s("./src/reddit/selectors/avatarMarketing.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				c = e => t => {
					const s = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...r.o(t)
					};
					return Object(o.a)(t) && Object.assign(s, i), s
				},
				d = (e, t) => s => {
					const {
						id: n
					} = Object(a.Ab)(s, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...r.o(s),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...r.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: r.hb(e)
				}),
				u = e => ({
					...r.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.hb(e)
				}),
				m = e => ({
					...r.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.hb(e)
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
				h = e => t => s => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...r.o(s),
					snoovatar: r.hb(s),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				x = h("view"),
				v = h("click"),
				_ = h("dismiss"),
				E = (e, t, s) => () => n => ({
					source: e,
					action: t,
					noun: s,
					...r.o(n),
					snoovatar: r.hb(n)
				}),
				O = E("anniversary_achievement", "view", "anniversary_achievement"),
				C = E("anniversary_achievement", "click", "close"),
				g = E("anniversary_achievement", "click", "equip"),
				S = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				k = S("view"),
				j = S("click"),
				y = (e, t, s) => n => ({
					source: e,
					action: t,
					noun: s,
					...r.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.hb(n)
				}),
				N = e => y("onboarding", "click", e),
				T = () => y("avatar", "view", "onboarding")
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
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
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
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			var n, o, r = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const a = {
					[n.Loyalty]: r.a.First,
					[n.Achievement]: r.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? n.Loyalty : e === r.a.Second ? n.Achievement : n.Cosmetic
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
				return a
			})), s.d(t, "e", (function() {
				return i
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
				return E
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "n", (function() {
				return g
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "q", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
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
			const x = e => b[h[e]],
				v = e => h[b[e]],
				_ = e => f[b[e]],
				E = e => b[f[e]],
				O = e => h[f[e]];
			var C;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(C || (C = {}));
			const g = e => {
					switch (e) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
				k = e => {
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
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
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
						(r = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][o] : n[c.a.Achievement][o] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][o] : n[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(a.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, s) => {
					const n = t[e.id],
						o = t[s.id];
					return Object(a.b)(n, o)
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
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var n, o, r = s("./node_modules/redux/es/redux.js"),
				a = s("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
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
				capabilities: [n.PREMIUM],
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
						endsAt: o,
						webAssetUrls: r,
						tags: a
					} = e, i = n && new Date(n) <= new Date, c = !!o && new Date(o) < new Date, d = !!i && !c, b = (a || []).includes(m);
					if (a && a.includes(l) && !b) {
						const {
							text: s,
							id: n
						} = e, o = r || null, i = p(a);
						t && (t.quickCreateV1 = {
							...i,
							id: n,
							text: s,
							active: d && !!o,
							webAssetUrls: o
						})
					}
					if (a && a.includes(u) && !b) {
						const e = r || null,
							n = (null === (s = a.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === s ? void 0 : s.split("feature:")[1]) || null;
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
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
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
			t.a = Object(r.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: _
			})
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
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				a = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				},
				i = e => {
					var t, s;
					return (null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts"),
				r = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing)
				},
				i = e => {
					var t, s, n, o;
					const a = null === (n = null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					if (!(null == a ? void 0 : a.active) || !(null === (o = null == a ? void 0 : a.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const i = a.assetUrls[0];
					return !a.experimentRequired || Object(r.a)(a.experimentRequired)(e) ? i : null
				}
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
				a = s("./src/reddit/selectors/experiments/presence.ts"),
				i = s("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.s
					});
					return t === n.w.VoteCountOnly || t === n.w.CommentCountOnly || t === n.w.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.s
					});
					return t === n.w.VoteCountOnly || t === n.w.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.s
					});
					return t === n.w.CommentCountOnly || t === n.w.VoteAndCommentCount
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
					if (Object(i.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(a.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: n.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.w.VoteCountOnly || l === n.w.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: s
					} = t;
					const o = e.posts.models[s];
					if (Object(i.d)(e) || !o || o.isSponsored || o.numComments >= c || Object(a.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: n.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.w.CommentCountOnly || l === n.w.VoteAndCommentCount
				},
				f = e => {
					if (Object(a.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.yc
					}) === n.Vc.Enabled
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
					experimentName: n.bf
				}) === n.Kd
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.gg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.Xf)
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
				a = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
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
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === s
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
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === s
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
				a = s("./src/reddit/selectors/posts.ts");
			const i = e => Object(r.c)(e, {
					experimentName: o.ef,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => t === o.mf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(a.G, i, (e, t) => c(e, t));
			Object(n.a)((e, t) => t, i, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const r = e => {
					if (a(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(o.c)(e)) || !!t
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Qb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
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
						e.detail && (t = e.detail.name, console.warn(a, `${n.a.redditUrl}${c}`, e))
					} catch (s) {
						return void console.error(a, `${n.a.redditUrl}${c}`, s)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.e7fabc6752d940cc0f7f.js.map