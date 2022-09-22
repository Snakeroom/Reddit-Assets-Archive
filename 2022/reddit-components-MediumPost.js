// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.e2aab0d6d93767688d8a.js
// Retrieved at 9/22/2022, 10:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
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
						O = !i && !u && !m && !p && /linux/i.test(t),
						v = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !g && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
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
					}, v ? (o.msedge = e, o.version = v) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: v
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
					} : i ? o = {
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
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && x && (o.version = x)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : O && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var C = "";
					o.windows ? C = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? C = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? C = (C = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? C = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? C = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? C = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? C = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (C = n(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (o.osversion = C);
					var j = !o.windows && C.split(".")[0];
					return g || c || "ipad" == r || i && (3 == j || j >= 4 && !_) || o.silk ? o.tablet = e : (_ || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
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
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? s : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
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
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, n) => ({
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
				referrer: i.Y(e),
				request: i.Z(e),
				screen: i.bb(e),
				session: i.fb(e),
				user: i.rb(e),
				media: n ? i.C(e, n) : null,
				post: n ? i.K(e, n) : null
			});
			var c = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const n = Object(r.f)().getState(),
						{
							post: s
						} = {
							...t
						};
					return s && s.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, s) {
							var o, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(s)(n, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(a(s)(n, c.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const n = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${n})`, t
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = m(o.target, o.currentTarget),
						a = p(o.target, o.currentTarget);
					r && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
						const s = t(e, r, a)(n);
						let o;
						if (s && s.actionInfo) {
							const {
								pageType: e,
								...t
							} = s.actionInfo;
							o = t
						}
						return {
							...s,
							actionInfo: Object(i.S)(n, o)
						}
					})), u(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(c(i, r, n), [i, r, n]);
					return o.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				m = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
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
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (o) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					c = i || Object(s.D)(e)
				} else c = Object(s.D)(e);
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
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(s.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), f = Object(o.useCallback)(() => m(!u), [u]), h = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: O,
					styles: v,
					update: x
				} = Object(r.a)(t, i, h);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: v.arrow,
						...O.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: v.popper,
						...O.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: x
				}), [l, O, c, b, p, v, t, n, f, u, x])
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/domUtils/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				i = n("./src/reddit/constants/elementIds.ts");
			const a = () => {
					o.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
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
			const r = [o.wc, o.sb, o.C, o.S, o.nb, o.Vb],
				i = {
					[o.Vb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.nb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.S]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.C]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.sb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.wc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Vb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.nb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.S]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.C]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.sb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.wc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.sb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.wc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
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
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				i = Object(s.a)(o.b),
				a = Object(s.a)(o.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return he
			})), n.d(t, "r", (function() {
				return xe
			})), n.d(t, "p", (function() {
				return ge
			})), n.d(t, "t", (function() {
				return Ce
			})), n.d(t, "w", (function() {
				return je
			})), n.d(t, "q", (function() {
				return ke
			})), n.d(t, "v", (function() {
				return we
			})), n.d(t, "o", (function() {
				return Te
			})), n.d(t, "m", (function() {
				return Ae
			})), n.d(t, "b", (function() {
				return Ie
			})), n.d(t, "c", (function() {
				return De
			})), n.d(t, "s", (function() {
				return Le
			})), n.d(t, "g", (function() {
				return Fe
			})), n.d(t, "h", (function() {
				return Be
			})), n.d(t, "k", (function() {
				return Ue
			})), n.d(t, "e", (function() {
				return We
			})), n.d(t, "d", (function() {
				return qe
			})), n.d(t, "a", (function() {
				return ze
			})), n.d(t, "j", (function() {
				return Ye
			})), n.d(t, "i", (function() {
				return Xe
			})), n.d(t, "l", (function() {
				return $e
			})), n.d(t, "u", (function() {
				return et
			})), n.d(t, "n", (function() {
				return tt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/lib/scroll/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/onboarding/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				f = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/constants/adEvents.ts"),
				v = n("./src/reddit/constants/localStorage.ts"),
				x = n("./src/redditGQL/operations/CommentToxicity.json"),
				g = n("./src/lib/makeApiRequest/index.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				C = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = n("./src/reddit/constants/headers.ts"),
				k = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = n("./src/reddit/helpers/genericServerError/index.ts"),
				y = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				N = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				A = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = n("./src/reddit/helpers/graphql/helpers.ts"),
				I = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				P = n("./src/redditGQL/operations/CreateComment.json");
			const M = (e, t, n, s) => {
					let o, r;
					if (s === T.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = C.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(e, {
						...x,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				D = async (e, t, n, s) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === T.i.MARKDOWN ? r.text = n.text : (r.text = null, r.richtext_json = s), Object(g.a)(Object(E.a)(e, [j.a]), {
						method: o.mb.POST,
						endpoint: Object(k.a)(Object(N.a)(Object(A.a)(`${e.apiUrl}/api/comment.json`))),
						data: r
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(y.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(y.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(S.a)()
					})
				}, L = async (e, t, n, s, o) => {
					const r = s.commentMode === T.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: r ? s.text : null,
								richText: r ? null : o
							}
						};
					return Object(_.a)(e, {
						...P,
						variables: {
							input: i
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(I.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(S.a)()
						}
					})
				};
			var F = n("./src/redditGQL/operations/UpdateComment.json");
			var B = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = n("./src/reddit/endpoints/post/index.tsx"),
				V = n("./src/reddit/endpoints/post/convert.ts"),
				W = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				H = n("./src/reddit/featureFlags/index.ts"),
				G = n("./src/reddit/helpers/comment/index.ts"),
				K = n("./src/reddit/helpers/correlationIdTracker.ts"),
				q = n("./src/reddit/helpers/dom/index.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				Y = n("./src/reddit/helpers/sessionStorage/index.ts"),
				J = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				Q = n("./src/reddit/models/Comment/index.ts"),
				Z = n("./src/reddit/models/PostDraft/index.ts"),
				X = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/chatPost.ts"),
				ne = n("./src/reddit/selectors/comments.ts"),
				se = n("./src/reddit/selectors/commentSelector.ts"),
				oe = n("./src/reddit/selectors/experiments/chat.ts"),
				re = n("./src/reddit/constants/experiments.ts"),
				ie = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = n("./node_modules/reselect/es/index.js");
			const ce = Object(ae.a)(e => Object(ie.c)(e, {
				experimentEligibilitySelector: ie.a,
				experimentName: re.Kb
			}), e => e === re.Jd);
			var de = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = n("./src/reddit/selectors/platform.ts"),
				ue = n("./src/reddit/selectors/posts.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/actions/comment/index.ts"),
				be = n("./src/reddit/actions/comment/constants.ts");
			const fe = Object(r.a)(be.m),
				he = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(me.S)(o) && t) {
								const s = fe({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.startChangeUsernameFlow)(s))
							} else e(fe({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				Oe = Object(r.a)(be.L),
				ve = Object(r.a)(be.H),
				xe = Object(r.a)(be.N),
				ge = Object(r.a)(be.M),
				_e = Object(r.a)(be.K),
				Ee = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await J.f(e, n, t, r)
				}, Ce = "Toxicity_Warning__Modal", je = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						i = Object(le.e)(r);
					let a = "";
					i && (a = i.name);
					const {
						formData: c,
						editorMode: d
					} = e;
					if (H.d.enableToxicityWarning(r)) {
						if (!(await M(o(), a, c, d))) return void t(Object(l.i)(Ce))
					}
					t(ke(e))
				}, ke = e => async (t, n) => {
					t(Object(l.g)(Ce));
					const s = n(),
						o = Object(de.a)(s),
						r = Object(de.c)(s);
					if (!s.user.account && o) {
						const n = Object(G.e)(e.formData, s.uploads),
							o = Object(G.c)(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(Y.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(ye(e, !1))
				};

			function Se(e, t) {
				return e === T.i.MARKDOWN && ce(t)
			}
			const ye = (e, t, n, r) => {
					let {
						postId: i,
						commentsPageKey: c,
						draftKey: d,
						formData: l,
						editorMode: u,
						disableAutofocus: p,
						isLiveStreaming: v
					} = e;
					return async (e, x, g) => {
						let {
							apiContext: _,
							gqlContext: E
						} = g;
						var C;
						const j = x(),
							k = Object(te.d)(j, {
								postId: i
							}) && Object(oe.g)(j),
							S = k ? Object(G.a)() : d,
							y = Object(se.e)(j, {
								commentId: S
							}),
							w = Object(me.k)(j);
						if (!w) return;
						if (y && !k) return;
						t || e(Oe({
							draftKey: S,
							draft: l,
							commentsPageKey: c,
							optimisticComment: k ? Object(G.b)({
								temporalId: S,
								draft: l,
								post: Object(ue.G)(j, {
									postId: i
								}),
								author: w,
								subredditId: (null === (C = Object(le.e)(j)) || void 0 === C ? void 0 : C.id) || ""
							}) : void 0
						}));
						const N = w.displayText,
							A = l.commentMode;
						let R;
						if (v) R = await Object(W.i)(_(), i, l, N), e(Object(b.a)({
							streamId: i,
							level: R.body.automuteLevel
						}));
						else {
							const e = t && n ? n : Object(G.e)(l, j.uploads);
							R = Se(A, j) ? await L(E(), i, null, l, e) : await D(_(), i, l, e)
						}
						if (R.ok) {
							let n;
							if (n = R.body, e(xe({
									...n,
									headCommentId: Object(ne.w)(j, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: S
								})), t) {
								const e = Object(le.i)(j);
								Object(a.a)(!!e)
							}
							const s = Object(ue.G)(x(), {
								postId: i
							});
							e(Object(m.z)(s, O.a.CommentSubmitted))
						} else {
							if (R.error && R.error.type === o.Nb) {
								const e = t && r ? r : Object(G.c)(l);
								J.j(j, e, i)
							}
							const n = R.error && R.error.fields && R.error.fields[0] ? R.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(_e({
								draftKey: S,
								error: R.error
							})), k || e(Object(h.f)({
								duration: h.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						Ee(x(), c, u, R).then(() => R.ok && u === T.i.RICH_TEXT ? Object(K.b)(K.a.CommentComposer) : void 0), p || Object(f.d)(), t && Object(Y.a)()
					}
				},
				we = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e, m = n(), p = Object(le.e)(m);
					let b = "";
					if (p && (b = p.name), H.d.enableToxicityWarning(m)) {
						if (!(await M(o(), b, d, u))) return void t(Object(l.i)(Ce))
					}
					t(Te({
						commentsPageKey: i,
						draftKey: c,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: d,
						editorMode: u
					}))
				}, Te = e => async (t, n) => {
					t(Object(l.g)(Ce));
					const s = n(),
						o = Object(de.a)(s),
						r = Object(de.c)(s);
					if (!s.user.account && o) {
						const n = Object(G.e)(e.formData, s.uploads),
							o = Object(G.c)(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(Y.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Ne(e, !1))
				}, Ne = (e, t, n, s) => async (r, i, c) => {
					let {
						apiContext: d,
						gqlContext: l
					} = c;
					var u;
					const {
						parentCommentId: m,
						commentsPageKey: p,
						parentCommentDepth: b,
						draftKey: h,
						formData: O,
						editorMode: v
					} = e, x = i(), g = Object(se.b)(x, {
						commentId: m
					}), _ = g && Object(te.d)(x, {
						postId: g.postId
					}) && Object(oe.g)(x), E = _ ? Object(G.a)() : h, C = Object(se.e)(x, {
						commentId: E
					}), j = Object(me.k)(x);
					if (!j) return;
					if (C && !_) return;
					t || r(Oe({
						draftKey: E,
						draft: O,
						commentsPageKey: p,
						optimisticComment: _ && g ? Object(G.b)({
							temporalId: E,
							draft: O,
							post: Object(ue.G)(x, {
								postId: g.postId
							}),
							author: j,
							subredditId: (null === (u = Object(le.e)(x)) || void 0 === u ? void 0 : u.id) || "",
							parentId: g.id
						}) : void 0
					})), r(Ie({
						parentCommentId: m,
						commentsPageKey: p
					}));
					const k = O.commentMode,
						S = t && n ? n : Object(G.e)(O, x.uploads);
					let y;
					if ((y = Se(k, x) ? await L(l(), null, m, O, S) : await D(d(), m, O, S)).ok) {
						if (r(ge({
								...y.body,
								parentCommentId: m,
								commentsPageKey: p,
								draftKey: E,
								depth: b + 1
							})), t) {
							const e = Object(le.i)(x);
							Object(a.a)(!!e)
						}
					} else {
						if (y.error && y.error.type === o.Nb) {
							if (!g) return;
							const e = t && s ? s : Object(G.c)(O);
							J.j(x, e, g.postId, m)
						}
						r(_e({
							draftKey: E,
							error: y.error
						}))
					}
					Ee(i(), p, v, y), Object(f.d)(), t && Object(Y.a)()
				}, Ae = () => async e => {
					const t = Object(Y.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: o,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: a
						} = t;
						a && e(Object(u.skipOnboardingModal)()), o ? await e(ye({
							...t.comment,
							postId: o
						}, !0, r, i)) : s && void 0 !== n && await e(Ne({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, i))
					}
				}, Re = Object(r.a)(be.s), Ie = Object(r.a)(be.r), Pe = Object(r.a)(be.n), Me = (Object(r.a)(be.i), Object(r.a)(be.o)), De = (Object(r.a)(be.v), (e, t, n) => async (o, r, i) => {
					let {
						apiContext: a
					} = i;
					const c = e === T.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(X.G)(t)) o(Me({
						editorMode: e,
						draftKey: n,
						content: c ? X.i : ""
					})), o(Object(p.c)(e));
					else {
						o(Object(p.b)(n));
						const r = await Object(V.a)(a(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(p.a)(n)), o(Me({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(p.c)(e))
						} else o(Object(p.a)(n)), o(Object(h.f)({
							duration: h.a,
							kind: ee.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Le = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const r = o(),
							a = Object(i.a)(Z.c.replyToComment, n);
						if (!Object(me.Q)(o()) && !Object(de.a)(r)) return e(Object(d.openRegisterModal)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ne.m)(o(), {
								commentId: n
							})
						}));
						const u = r.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Ie({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const f = r.user.prefs.commentMode,
							h = Object(q.d)();
						if (h) {
							const e = h.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === T.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									n = $.s("", null),
									s = $.l([n]);
								b = {
									document: [$.c(t), s]
								}
							}
						}
						const O = r.features.comments.drafts[a];
						let v;
						if (v = h ? {
								commentMode: f,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : O || {
								commentMode: f,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(me.S)(r)) {
							const s = Re({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: a,
								formData: v
							});
							e(Object(c.startChangeUsernameFlow)(s))
						} else e(Re({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: a,
							formData: v
						}))
					}
				}, Fe = e => async t => {
					t(Object(pe.r)(e)), t(We(e))
				}, Be = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Ie({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Le({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Ue = (e, t) => n => n(Pe({
					draftKey: e,
					formData: t
				})), Ve = Object(r.a)(be.u), We = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, i) => {
						const a = i();
						a.user.account && (J.c(a), e(Ve({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: Z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(r.a)(be.F), Ge = Object(r.a)(be.E), Ke = Object(r.a)(be.G), qe = Object(r.a)(be.j), ze = Object(r.a)(be.f), Ye = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: r
					} = e;
					return async (e, i, a) => {
						let {
							apiContext: c,
							gqlContext: d
						} = a;
						const l = i();
						if (!l.user.account) return;
						e(He({
							draftKey: s
						})), J.d(l);
						const u = Object(G.e)(r, l.uploads),
							m = r.commentMode;
						let p;
						if ((p = Se(m, l) ? await (async (e, t, n, s, o) => {
								const r = o === T.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: r ? n.text : null,
											richText: r ? null : s
										}
									};
								return Object(_.a)(e, {
									...F,
									variables: {
										input: i
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(I.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(S.a)()
									}
								})
							})(d(), t, r, u, m) : await (async (e, t, n, s, r) => {
								const i = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return r === T.i.MARKDOWN ? i.text = n.text : (i.text = null, i.richtext_json = s), Object(g.a)(Object(E.a)(e, [j.a]), {
									endpoint: Object(k.a)(Object(A.a)(Object(N.a)(`${e.apiUrl}/api/editusertext`))),
									method: o.mb.POST,
									data: i
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(w.a)(e)
								} : {
									...e,
									body: {
										comment: Object(y.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(y.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(S.a)()
								})
							})(c(), t, r, u, m)).ok) {
							const o = p.body;
							e(Ke({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(pe.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(Ge({
							draftKey: s,
							error: p.error
						}))
					}
				}, Je = Object(r.a)(be.C), Qe = Object(r.a)(be.B), Ze = Object(r.a)(be.D), Xe = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					const a = s();
					n(Je({
						id: e
					})), J.a(e, a);
					const c = await ((e, t) => Object(g.a)(Object(E.a)(e, [j.a]), {
						endpoint: Object(k.a)(`${e.apiUrl}/api/del`),
						method: o.mb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(S.a)()
					}))(i(), e);
					c.ok ? n(Ze({
						id: e,
						postId: t
					})) : n(Qe({
						id: e,
						error: c.error
					}))
				}, $e = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(U.s)(o(), e, r)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, et = (e, t) => async (n, o, r) => {
					let {
						gqlContext: i
					} = r;
					var a, c, d, l, u, m;
					n(Object(pe.c)());
					const p = e => Object(h.f)(Object(h.e)(e, ee.b.Error));
					if (((null === (c = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === c ? void 0 : c.followed) || []).length === v.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Q.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(pe.p)(a)), (await ((e, t) => Object(_.a)(e, {
								...B,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.xb)(null !== (u = null === (l = null === (d = o().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(h.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(pe.p)(a)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: n,
					isLivestreaming: s = !1
				} = e;
				return async (e, o) => {
					const r = o(),
						i = Object(se.b)(r, {
							commentId: t
						});
					if (!i) return;
					e(ve({
						commentId: t,
						commentsPageKey: n
					}));
					const a = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? Z.c.replyToComment : Z.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(se.b)(r, {
								commentId: i.parentId
							}),
							s = Object(ne.j)(r, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === s) return;
						await e(Te({
							commentsPageKey: n,
							draftKey: i.id,
							parentCommentDepth: s,
							parentCommentId: t.id,
							formData: a,
							editorMode: i.media.rteMode
						}))
					} else await e(ke({
						postId: i.postId,
						commentsPageKey: n,
						draftKey: i.id,
						formData: a,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: s
					}))
				}
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "b", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				m = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				x = n("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(x.p),
				_ = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().features.comments.models[e] && (await Object(u.l)(o(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(O.Q)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const c = i.isLocked ? u.n : u.g;
					t(Object(v.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, C = Object(r.a)(x.J), j = e => async (t, n, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const a = n(),
						l = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
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
					})), (Object(h.a)(a) ? await Object(u.a)(i(), e) : await Object(u.b)(r(), e)).ok ? t(Object(d.f)({
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
				}, k = (e, t) => async (n, o, r) => {
					let {
						apiContext: i,
						gqlContext: a
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
							isSpam: t
						}
					})), (Object(h.a)(l) ? await Object(u.i)(a(), e, t) : await Object(u.j)(i(), e, t)).ok ? n(Object(d.f)({
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
							isSpam: m.isSpam
						}
					})), Object(c.d)())
				}, S = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? u.m : u.f;
					t(Object(v.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, y = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: c
					} = a;
					const l = Object(f.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = n === o.ic.Snoozed,
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
				}, w = (e, t, n) => async (s, r, a) => {
					let {
						apiContext: c,
						gqlContext: d
					} = a;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					s(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.H.ADMIN,
							isMod: t === o.H.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(v.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(u.d)(d(), e, t),
						h = Object(u.e)(d(), e, !!n),
						O = [f];
					(n || !n && e === b) && O.push(h), (await Promise.all(O)).every(e => e.ok) ? n && s(C({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.u.CONFIDENCE,
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
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
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
				return O
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "o", (function() {
				return E
			}));
			const s = "CREATE_COLLECTION_PENDING",
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
				O = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				x = "REORDER_COLLECTION_FAILED",
				g = "UPDATE_COLLECTION_LAYOUT_PENDING",
				_ = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				E = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				f = Object(o.a)(m.Q),
				h = (e, t, n) => async (o, a, h) => {
					let {
						apiContext: v
					} = h;
					c.m(a(), t);
					const x = t === d.i.MARKDOWN,
						g = t === d.i.RICH_TEXT,
						_ = m.k;
					if (x && Object(l.G)(n)) return o(f({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(O(t));
					if (g && !n) return o(f({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void o(O(t));
					o(p(_));
					const E = await Object(i.a)(v(), t, x ? JSON.stringify(n) : n);
					E.ok ? (o(b(_)), o(f({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), o(O(t))) : (o(b(_)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, O = e => async (t, n) => {
					const o = Object(a.l)();
					if (o >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
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
					})), Object(a.ub)(o + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(s.a)(r.r),
				a = Object(s.a)(r.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = await Object(o.a)(r(), e);
					c && c.ok ? t(i({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return X
			})), n.d(t, "removalReasonsLoaded", (function() {
				return $
			})), n.d(t, "removalReasonsFailed", (function() {
				return ee
			})), n.d(t, "removalReasonsRequested", (function() {
				return te
			})), n.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), n.d(t, "addRemovalReason", (function() {
				return re
			})), n.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), n.d(t, "deleteRemovalReason", (function() {
				return pe
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return ve
			})), n.d(t, "removalReasonMessagePending", (function() {
				return xe
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ge
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Ee
			})), n.d(t, "submitRemovalReason", (function() {
				return Ce
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return je
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
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
			var O = function() {
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
				v = Object(r.c)({
					error: h,
					pending: O
				});
			const x = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
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
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
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
			var C = function() {
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
				j = Object(r.c)({
					api: v,
					models: g,
					reasonOrder: E,
					removedItemIds: C
				}),
				k = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/makeActionCreator/index.ts"),
				y = n("./src/lib/makeCommentsPageKey/index.ts"),
				w = n("./src/lib/makeDraftKey/index.ts"),
				T = n("./src/reddit/actions/bulkActions/index.ts"),
				N = n("./src/reddit/actions/comment/index.ts"),
				A = n("./src/reddit/actions/comment/authoring.ts"),
				R = n("./src/reddit/actions/comment/moderation.ts"),
				I = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/post.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				D = n("./src/reddit/constants/modals.ts"),
				L = n("./src/lib/makeApiRequest/index.ts"),
				F = n("./src/lib/omitHeaders/index.ts"),
				B = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: k.mb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, n) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: k.mb.POST,
					type: "json",
					data: t
				});
			var H = n("./src/reddit/helpers/isPost.ts"),
				G = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = n("./src/reddit/helpers/routeKey/index.ts"),
				q = n("./src/reddit/models/ModQueue/index.ts"),
				z = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/RemovalReason/index.ts"),
				J = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				Z = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: j
				}
			});
			const X = Object(S.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(S.a)(i),
				ee = Object(S.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().subreddits.models[e].name;
					t(X());
					const i = await ((e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.mb.GET
					}))(o(), r);
					i.ok ? t($({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, ne = Object(S.a)(a), se = Object(S.a)(c), oe = Object(S.a)(d), re = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ne());
					const c = await ((e, t, n) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.mb.POST,
						data: n
					}))(i(), a, t);
					if (c.ok) {
						const {
							id: o
						} = c.body, r = {
							...t,
							id: o
						};
						n(se({
							subredditId: e,
							reason: r
						})), n(Object(M.f)({
							kind: J.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(c.error))
				}, ie = Object(S.a)(l), ae = Object(S.a)(u), ce = Object(S.a)(m), de = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ie());
					const c = await ((e, t, n) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: k.mb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(i(), a, t);
					c.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(M.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ce(c.error))
				}, le = Object(S.a)(p), ue = Object(S.a)(b), me = Object(S.a)(f), pe = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(le());
					const c = await ((e, t, n) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: k.mb.DELETE
					}))(i(), a, t);
					c.ok ? (n(ue({
						subredditId: e,
						reasonId: t
					})), n(Object(M.f)({
						kind: J.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(c.error))
				}, be = Object(S.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(I.i)(D.a.ADD_REMOVAL_REASON))
				}, he = Object(S.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(S.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(S.a)("REMOVALREASONS__SUBMIT_FAILED"), xe = Object(S.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(S.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(S.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(S.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, n, s, o, r) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(H.a)(m) ? Y.e.Post : Y.e.Comment,
						b = p === Y.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === Y.e.Post ? P.S : N.j;
					if (!b || !u) return !1;
					i(he()), i(f({
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
						O = await V(d(), h);
					if (O.ok) {
						if (i(Oe()), t) {
							i(xe());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: s
								},
								a = await W(d(), Object(Y.h)(o, p), p);
							if (a.ok) {
								if ([Y.f.Public, Y.f.PublicAsSubreddit].includes(s)) {
									if (i(_e()), a.body) {
										const e = Object(G.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(Z.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = n && s && Object(K.a)(s, l, l.posts.models[e.postId]);
										if (o || (o = Object(y.a)(e.postId, null, {
												sort: k.v,
												hasSortParam: !0
											})), p === Y.e.Post) {
											const n = Object(w.a)(z.c.replyToPost, m);
											i(Object(A.r)({
												...t,
												headCommentId: Object(Q.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[m];
											i(Object(R.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && i(Object(N.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (p === Y.e.Comment) {
											const e = Object(w.a)(z.c.replyToComment, b.id),
												n = Object(Q.j)(l, {
													commentId: m,
													commentsPageKey: o
												});
											i(Object(A.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else i(ge());
								return !0
							}
							return i(Ee(a.error)), !1
						}
					} else i(ve(O.error)), i(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, je = (e, t, n, o, r) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					i(he());
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
						b = await V(d(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: q.a.RemovalReason,
							username: u,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(T.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await W(d(), Object(Y.h)(s, Y.e.Bulk), Y.e.Bulk);
							r.ok ? (i(ge()), i(m)) : i(Ee(r.error))
						} else i(m)
					} else i(ve(b.error))
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				i = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
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
				O = Object(o.a)(h),
				v = (e, t, n) => async (s, o, r) => {
					let {
						apiContext: u
					} = r;
					var b, f, h, O;
					const v = Object(m.b)(o()),
						x = await (async (e, t, n, s, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.mb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...s
							}
						}))(u(), e, t, n, v);
					if (!x.ok) throw new Error("User avatar failed to save");
					return s(Object(p.A)(x.body)), {
						accountIcon: null === (f = null === (b = x.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (O = null === (h = x.body) || void 0 === h ? void 0 : h.avatar) || void 0 === O ? void 0 : O.image_url
					}
				}, x = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.mb.GET
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
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.mb.GET
						}))(s());
						t.ok && e(O(t.body))
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
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(a.l)(n)), e(Object(r.t)({
					forceFetch: !0
				})), await e(Object(o.g)(i.a.SNOOVATAR_MODAL))
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
					r && Object(d.a)(Object(a.g)(r)(h)), Object(c.Q)(h) ? await t(Object(o.h)(i.a.SNOOVATAR_MODAL, {
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
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: n,
					children: s,
					...a
				} = e, l = Object(r.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!n,
					[c.a.borders]: "classic" === n,
					[c.a.borderTop]: "compact" === n || "conversation" === n,
					[c.a.borderBottom]: "card" === n
				});
				return o.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), s)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				u = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: u,
					callToAction: p,
					caption: b
				} = t;
				if (!u || !u.url) return null;
				let f = u.displayText;
				u.displayText.length >= 40 && (f = u.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(d.s)(n, u.displayText),
					O = Object(d.t)(n) ? f : b,
					v = Object(d.t)(n) ? n.subcaption : u.displayText,
					x = Object(i.a)(m.a.leftSideContent, {
						[m.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[m.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					g = Object(i.a)(m.a.displayUrl, {
						[m.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: x
				}, b && !o && !h && r.a.createElement("span", {
					className: m.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && r.a.createElement(c.a, {
					href: u.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: u,
					className: g,
					"data-adclicklocation": l.a.CTA_URL
				}, f), h && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: m.a.productTitle
				}, O), r.a.createElement("span", {
					className: m.a.subcaption
				}, v))), p && r.a.createElement(a.a, {
					className: m.a.callToAction,
					href: u.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: u,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = n("./src/reddit/components/CallToActionButton/index.m.less"),
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
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: n,
					...s
				} = e;
				return o.a.createElement(i.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView,
						[d.a.ctaExperiment]: !!n
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, s))
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
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (n, o, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, n) => Object(f.a)(Object(h.a)(e, [O.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.mb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(i(), e, t),
					c = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					n(Object(p.S)({
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
						kind: v.b.SuccessCommunityGreen,
						text: o
					}))
				} else n(b.f({
					id: c,
					kind: v.b.Error,
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
				E = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				C = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/index.tsx"),
				S = n("./src/reddit/controls/Dropdown/Row.tsx"),
				y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				w = n("./src/reddit/helpers/path/index.ts"),
				T = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const N = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(T.z)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(T.tb)(r)
				}),
				A = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				R = e => ({
					subreddit: Object(T.jb)(e),
					userSubreddit: Object(T.tb)(e)
				}),
				I = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...R
				});
			var P = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				M = n("./src/reddit/icons/svgs/Info/index.tsx"),
				D = n("./src/reddit/selectors/activeModalId.ts"),
				L = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
				B = n("./src/reddit/selectors/posts.ts"),
				U = n("./src/reddit/selectors/tooltip.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				W = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = n.n(W),
				G = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(C.a)(k.a),
				q = e => e === G.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === G.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== G.a.None) {
							e(t === G.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", G.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", G.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", G.a.None)
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
						className: H.a.HighlightWrapper
					}, r.a.createElement(S.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${q(o)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(P.b, {
						className: H.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(S.b, {
						displayText: q(G.a.First),
						isSelected: o === G.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(S.b, {
						displayText: q(G.a.Last),
						isSelected: o === G.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(S.b, {
						displayText: q(G.a.None),
						isSelected: o === G.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = z;
			const J = "CommentSort--SortPicker",
				Q = "CommentSort--HighlightPicker",
				Z = "CommentSort--Tooltip",
				X = Object(C.a)(k.a),
				$ = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(L.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(D.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(J),
					highlightIsOpen: Object(U.b)(Q),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(F.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: B.G,
					postPermalink: B.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(V.v)(e),
							o = !!Object(F.m)(e, {
								postId: n
							}),
							r = Object(B.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: L.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: J
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: Q
							})), t()
						},
						onSetSuggestedSort: t => e(x(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.X)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: Z
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(N(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(A("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(I(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						commentPermalink: n,
						contestModeModalIsOpen: o,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: b,
						post: f,
						postPermalink: h,
						selectedHighlightSort: O,
						showCommentHighlighter: v,
						sort: x,
						suggestedSort: C,
						showTooltip: j,
						toggleContestModeModal: k
					} = this.props, T = f.contestMode, N = !b.search.includes(d.u.CONFIDENCE), R = x === d.u.CONFIDENCE && N, I = m && !R, D = d.w[x], L = D ? D() : "", F = C && x === C && !R ? this.addSuggestedLabel(L) : L, B = T ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = T ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), V = T ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = T && !m;
					return r.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !v && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(S.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(P.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(X, {
						isOpen: i,
						tooltipId: J
					}, [d.u.CONFIDENCE, d.u.TOP, d.u.NEW, d.u.CONTROVERSIAL, d.u.OLD, d.u.QA].map(e => {
						const t = n || h,
							s = Object(w.b)(t),
							o = d.w[e],
							i = o ? o() : "";
						return r.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, r.a.createElement(S.b, {
							displayText: i,
							isSelected: x === e,
							skipRoleAttr: !0
						}))
					}))), I && !W && (C ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: x !== C ? this.setSortOnClick : this.clearSortOnClick
					}, x !== C ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: Z,
						onMouseEnter: j,
						onMouseLeave: l
					}, r.a.createElement(_.c, {
						className: H.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Z
					}), r.a.createElement(M.a, {
						className: H.a.Info
					})))), m && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(y.a, {
						className: H.a.ToggleSwitch,
						on: T
					}))), v && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: Q,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: O,
						trackHighlight: A
					})), o && r.a.createElement(g.a, {
						actionText: U,
						headerText: B,
						modalText: V,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
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
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

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
					p(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(i.a, {
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
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
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
			const u = Object(i.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(a.a, l({}, n, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(a.b)(n) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				m = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: s
				} = e;
				if (!Object(u.a)(s)) return null;
				const a = s && s.eventInfo,
					m = Object(l.a)(s),
					f = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!n
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: s
				}), !m && f && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				u = n.n(l);
			var m = e => o.a.createElement("i", {
					className: Object(c.a)(Object(d.b)("live", e.isFilled), u.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = n.n(b),
				h = n("./src/lib/lessComponent.tsx");
			const O = h.a.span("PostEventFutureText", f.a),
				v = h.a.span("PostEventPastText", f.a),
				x = h.a.span("PostEventNowText", f.a),
				g = h.a.span("Container", f.a),
				_ = h.a.wrapped(a.a, "CalendarIcon", f.a),
				E = h.a.wrapped(m, "LiveIcon", f.a),
				C = h.a.div("LoadingState", f.a);
			class j extends s.Component {
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
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: a,
						eventStart: c
					} = n, d = Object(r.e)(c, s);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(p.c, {
						startTime: c,
						endTime: s,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(C, {
							className: e
						})
					}
					if (a) u = o.a.createElement(x, null, o.a.createElement(E, null), l);
					else if (d === r.a.Future) u = o.a.createElement(O, null, o.a.createElement(_, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(v, null, o.a.createElement(_, null), l)
					}
					return o.a.createElement(g, {
						className: e
					}, u)
				}
			}
			t.a = j
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = n("./src/reddit/icons/svgs/ModRemove/index.tsx"),
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
			}), O = (e, t) => {
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
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, n) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				i = n.n(r),
				a = n("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: n
				} = e;
				return o.a.createElement("div", {
					className: i.a.optionalText
				}, o.a.createElement(a.a, {
					content: t,
					rtJsonElementProps: n
				}))
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

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
				} = e, d = Object(a.b)(s);
				return o.a.createElement(i.a, c({
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
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/NotificationButton/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = n("./src/reddit/components/Thumbnail/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/post.ts"),
				m = n("./src/reddit/hooks/useIsClient.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				b = n("./src/reddit/components/MediumPost/index.m.less"),
				f = n.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: n,
					forceShowNSFW: s,
					redditStyle: b,
					shouldShowSubscribeButton: h,
					subredditOrProfile: O,
					templatePlaceholderImage: v,
					shouldShowFollowButton: x,
					isFollowed: g,
					isCommentsPage: _,
					onFollowPostClick: E
				} = e;
				return Object(m.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(f.a.thumbnailContainer, {
						[f.a.mShowingButtonOrOverflow]: x || h
					})
				}, o.a.createElement("div", {
					className: f.a.thumbnailContainerRow
				}, x && o.a.createElement(a.a, {
					isFilled: !!g,
					onClick: E,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && O && o.a.createElement(c.a, {
					className: f.a.subscribeButton,
					getEventFactory: e => Object(u.k)(n.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: O.name,
						type: Object(p.h)(O) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: n.id,
					small: !0
				})), o.a.createElement(d.a, {
					crosspost: t,
					isCommentsPage: _,
					post: n,
					redditStyle: b,
					forceShowNSFW: s,
					templatePlaceholderImage: v
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, n) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				b = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				f = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				h = n("./src/reddit/components/FlairWrapper/index.tsx"),
				O = n("./src/reddit/components/Flatlist/index.tsx"),
				v = n("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				x = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				E = n("./src/reddit/components/ModModeReports/index.tsx"),
				C = n("./src/reddit/components/ModModeReports/helpers.ts"),
				j = n("./src/reddit/components/ModQueueActionBar/index.tsx"),
				k = n("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				S = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				y = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = n("./src/reddit/components/PostContainer/index.tsx"),
				T = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				N = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				A = n("./src/reddit/components/PostTitle/index.tsx"),
				R = n("./src/reddit/components/PostTopLine/index.tsx"),
				I = n("./src/reddit/components/PostTopMeta/index.tsx"),
				P = n("./src/reddit/components/SourceLink/index.tsx"),
				M = n("./src/reddit/constants/postLayout.ts"),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				H = n.n(W),
				G = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				K = n("./src/reddit/hooks/useIsOverlay.ts"),
				q = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				z = n("./src/reddit/hooks/useUserContext.ts"),
				Y = n("./src/reddit/models/Media/index.ts"),
				J = n("./src/reddit/models/Vote/index.ts"),
				Q = n("./src/reddit/contexts/Post/index.tsx"),
				Z = n("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				X = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				$ = n("./src/reddit/selectors/i18n/index.ts"),
				ee = n("./src/reddit/selectors/moderatorPermissions.ts"),
				te = n("./src/reddit/selectors/modQueue.ts"),
				ne = n("./src/reddit/selectors/postFlair.ts"),
				se = n("./src/reddit/selectors/posts.ts"),
				oe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				re = n("./src/reddit/selectors/user.ts"),
				ie = n("./src/reddit/components/MediumPost/index.m.less"),
				ae = n.n(ie),
				ce = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx");

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const le = () => Object(i.c)({
					isModQueueDisplayEnabled: te.b,
					crosspost: se.d,
					flairStyleTemplate: D.W,
					isActive: se.j,
					isBlurredPreview: X.b,
					isCurrentUserProfilePost: se.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(re.Q)(e),
					showPromotedCTA: oe.a,
					moderatorPermissions: ee.m,
					shouldShowNsfwListingBelow: $.b,
					showEditFlair: ne.a,
					showMedia: D.s,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(ee.i)(e, n.id)
					},
					isOptionalTextEnabled: Z.a
				}),
				ue = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: i,
						eventFactory: D,
						flairStyleTemplate: W,
						hideNSFWPref: G,
						hostPostData: K,
						inSubredditOrProfile: z = !1,
						isBlurredPreview: Q,
						isCheckboxSelected: Z,
						isCommentsPage: X,
						isCurrentUserProfilePost: $,
						isFrontpage: ee,
						isModWithUserNotesPermissions: te,
						isOverlay: ne,
						isRecommendationPost: se,
						isTopicPage: oe,
						isCommentCountAnimationEnabled: re,
						isVoteCountAnimationEnabled: ie,
						isCountAnimShadowTestEnabled: de,
						imageGalleryCurrentItem: le,
						listingKey: ue,
						moderatorPermissions: me,
						modModeEnabled: pe,
						onClickPost: be,
						post: fe,
						postId: he,
						postIds: Oe,
						redditStyle: ve,
						shouldHideFlair: xe,
						shouldShowNsfwListingBelow: ge,
						showBulkActionCheckbox: _e,
						showEditFlair: Ee,
						showMedia: Ce,
						showPromotedCTA: je,
						sendEvent: ke,
						subredditOrProfile: Se,
						toggleCheckbox: ye,
						isAvatarPostEnabled: we,
						isOptionalTextEnabled: Te,
						isModQueueDisplayEnabled: Ne
					} = e, Ae = Object(r.d)(), Re = e => e === J.a.upvoted ? Ae(Object(d.kb)(he)) : Ae(Object(d.w)(he)), Ie = () => Ae(Object(d.gb)(he)), Pe = ve ? void 0 : W, Me = Object(U.a)(me), De = pe && Me, Le = Object(F.a)(me), Fe = Object(B.a)(me), Be = Object(_.a)(fe), Ue = Object(C.c)(fe), Ve = !!(null == K ? void 0 : K.shouldShowLinkedPosts), We = ge, He = !Object(q.a)() && Object(L.a)(fe), Ge = z && !Ce && !Ve && !We || we, Ke = Ge && !!fe.source && !n, qe = !(ee && !!i || oe) && !$ && (!z || Ve || We) || se, ze = (!z || Ve || We) && !fe.isSponsored, Ye = Object(a.t)(fe, le), {
						source: Je
					} = Ye, Qe = !!(Q && (null == Se ? void 0 : Se.isNSFW)), Ze = Object(s.useRef)({
						renderingObjectInfo: fe
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(w.a, {
						className: Object(c.a)(ae.a.container, t, H.a.largeAndMediumPostStyles, H.a.largeAndMediumActiveStyles, Object(V.a)(e), {
							[H.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: ne,
						style: Object(V.b)(e.flairStyleTemplate),
						post: fe,
						onClick: be,
						eventFactory: D
					}, o.a.createElement(N.a, {
						model: fe,
						handleVote: Re,
						showBulkActionCheckbox: _e,
						isCheckboxSelected: Z,
						toggleCheckbox: ye,
						flairStyleTemplate: Pe,
						redditStyle: ve,
						isVoteCountAnimation: ie,
						isCountAnimShadowTestEnabled: de,
						postId: he
					}), o.a.createElement(y.a, {
						className: ae.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Pe,
						post: fe,
						redditStyle: ve
					}, o.a.createElement(f.a, {
						post: fe
					}), o.a.createElement("article", {
						className: ae.a.mainBody
					}, o.a.createElement("div", {
						className: ae.a.content,
						"data-click-id": "body"
					}, !!fe.recommendationContext && o.a.createElement(S.a, {
						content: fe.recommendationContext.content,
						layout: M.g.Large,
						post: fe
					}), o.a.createElement(R.a, {
						className: ae.a.postTopLine,
						hideNSFWPref: G,
						hostPostData: K,
						iconClassName: ae.a.postTopLineIcon,
						inSubredditOrProfile: z,
						isCommentsPage: X,
						isCurrentUserProfilePost: $,
						isModWithUserNotesPermissions: te,
						isOverlay: !!ne,
						isTopicPage: !!oe,
						listingKey: ue,
						post: fe,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ke,
						showSubreddit: ze,
						showSubredditIcon: !0,
						subredditOrProfile: Se
					}), o.a.createElement(A.c, {
						className: ae.a.postTitle,
						post: fe,
						redditStyle: ve,
						size: A.b.Large,
						titleColor: Pe && Pe.postTitleColor,
						isOverlay: ne
					}), X && !xe && fe.flair && fe.flair.length > 0 && o.a.createElement(h.a, {
						className: Object(c.a)(X && ae.a.leftPadding),
						disableFlair: !X,
						post: fe,
						sendEvent: ke
					}), fe.source && !fe.isSponsored && !n && !Qe && o.a.createElement(o.a.Fragment, null, o.a.createElement(P.a, {
						className: ae.a.sourceLink,
						isCommentsPage: X,
						post: fe
					}), Te && fe.media && fe.media.type !== Y.o.TEXT && fe.media.type !== Y.o.IMAGE && fe.media.richtextContent && o.a.createElement(v.a, {
						content: fe.media.richtextContent,
						rtJsonElementProps: Ze.current
					}))), !Ge && He && o.a.createElement(ce.a, {
						crosspost: n ? fe : void 0,
						hasModPostPerms: Me,
						isCommentsPage: X,
						isOverlay: ne,
						modModeEnabled: pe,
						post: n || fe,
						redditStyle: ve,
						shouldShowSubscribeButton: qe,
						subredditOrProfile: Se,
						templatePlaceholderImage: Pe && Pe.postPlaceholderImage
					})), je && Je && Je.url && !fe.isSurveyAd && o.a.createElement(u.a, {
						className: ae.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: fe,
						adLinkContent: Ye
					})), pe && Me && Be && !Ne && o.a.createElement("div", {
						className: ae.a.modModeBannerWrapper
					}, o.a.createElement(g.a, {
						thing: fe
					})), pe && Me && Ue && !Ne && o.a.createElement("div", {
						className: ae.a.modModeBannerWrapper
					}, o.a.createElement(E.a, {
						onIgnoreReports: Ie,
						reportable: fe
					})), o.a.createElement(x.d, null), Ne && o.a.createElement(k.a, {
						post: fe
					}), o.a.createElement("div", {
						className: ae.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ae.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Pe,
						redditStyle: ve,
						model: fe,
						onVoteClick: Re
					}), !fe.isSurveyAd && (Ne ? o.a.createElement(j.a, {
						content: fe,
						listingKey: ue,
						hostPostData: K
					}) : o.a.createElement(O.c, {
						currentUser: i,
						hasModFlairPerms: Le,
						hasModFullPerms: Fe,
						hasModPostPerms: Me,
						hostPostData: K,
						isCommentCountAnimation: re,
						isCountAnimShadowTestEnabled: de,
						isOverlay: !!ne,
						listingKey: ue,
						modModeEnabled: pe,
						onIgnoreReports: Ie,
						onOpenReportsDropdown: e => Ae(Object(l.h)({
							tooltipId: e
						})),
						post: fe,
						showEditFlair: Ee,
						tooltipType: ne ? I.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(T.b)({
							editPost: !De,
							save: !De,
							hide: !1,
							report: !1
						})
					})))), ee && o.a.createElement(p.a, {
						post: fe,
						postIds: null != Oe ? Oe : [],
						subredditId: null == Se ? void 0 : Se.id
					})))
				};
			t.default = Object(Q.b)(o.a.memo((function(e) {
				const t = Object(s.useMemo)(() => le(), []),
					n = Object(r.e)(n => t(n, e), r.c),
					i = Object(G.a)(e.post),
					a = Object(z.a)();
				return o.a.createElement(ue, de({}, e, n, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(K.a)(),
					isAvatarPostEnabled: i
				}))
			})))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
				i = n("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = n.n(i);
			const c = e => {
				let {
					post: t
				} = e;
				var n;
				return r.a.createElement("p", {
					className: a.a.postStats
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
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
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
				return ne
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				l = n("./src/reddit/components/OverflowMenu/index.tsx"),
				u = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = n("./src/reddit/components/ReportFlow/new.tsx"),
				p = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				x = n("./src/reddit/helpers/isPost.ts"),
				g = n("./src/reddit/helpers/trackers/gild.ts"),
				_ = n("./src/reddit/helpers/trackers/modTools.ts"),
				E = n("./src/reddit/helpers/trackers/post.ts"),
				C = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/actions/comment/moderation.ts"),
				S = n("./src/reddit/actions/gold/modals.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/post.ts"),
				T = n("./src/reddit/actions/postFlair.ts"),
				N = n("./src/reddit/actions/removalReasons/index.ts"),
				A = n("./src/reddit/actions/reportFlow/index.ts"),
				R = n("./src/reddit/selectors/activeModal.ts"),
				I = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = n("./src/reddit/selectors/moderatorPermissions.ts"),
				M = n("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(s || (s = {}));
			const D = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.l || Object(x.b)(e) && [M.g.AntiEvilOps, M.g.CommunityOps, M.g.ContentTakedown, M.g.CopyrightTakedown, M.g.Reddit].indexOf(e.removedByCategory) > -1 ? s.REMOVED : (e.numReports || 0) > 0 ? s.REPORTED : e.isApproved ? s.APPROVED : e.isSpam ? s.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.l ? s.FILTERED : s.UNMODERATED
			};
			var L = n("./src/reddit/components/ModQueueActionBar/index.m.less"),
				F = n.n(L),
				B = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/components/HumanDate/index.tsx"),
				V = n("./src/reddit/components/UserIcon/index.tsx"),
				W = n("./src/reddit/helpers/name/index.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				K = n.n(G);
			const q = e => {
				let {
					content: t
				} = e;
				var n;
				const s = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(H.Ab)(e, {
					userName: null == t ? void 0 : t.approvedBy
				}) : null);
				if (!s) return null;
				const r = t.approvedAtUTC ? (null === (n = t.approvedAtUTC) || void 0 === n ? void 0 : n.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: K.a.userIconWrapper
				}, i.a.createElement(V.a, {
					className: Object(B.a)(K.a.userIcon),
					iconUrl: null == s ? void 0 : s.accountIcon,
					userName: null == s ? void 0 : s.username,
					isNSFW: null == s ? void 0 : s.isNSFW
				})), i.a.createElement("div", {
					className: K.a.statusText
				}, i.a.createElement("p", {
					className: K.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), i.a.createElement("p", null, Object(W.e)(null == s ? void 0 : s.username), r && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(U.d, {
					seconds: r
				})))))
			};
			var z = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const Y = e => {
				let {
					content: t
				} = e;
				const n = Object(r.useMemo)(() => {
					var e;
					const n = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.l || n.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const s of t.modQueueTriggers || []) switch (s.type) {
						case z.a.AUTOMOD:
							n.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: s.message
							});
							break;
						case z.a.SHADOWBANNED_SUBMITTER:
							n.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: s.message
							});
							break;
						case z.a.HATEFUL_CONTENT:
							n.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: s.message
							});
							break;
						case z.a.CROWD_CONTROL:
							n.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: s.message
							});
							break;
						case z.a.BAN_EVASION:
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
				return i.a.createElement("div", {
					className: K.a.filteredWrapper
				}, n.map((e, t) => {
					let {
						heading: n,
						reason: s,
						icon: o
					} = e;
					return i.a.createElement("div", {
						key: `${n}-${s}-${t}`,
						className: K.a.filteredRow
					}, i.a.createElement(j.a, {
						isFilled: !0,
						name: o,
						className: Object(B.a)(K.a.coloredIcon, K.a.icon)
					}), i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("p", {
						className: K.a.status
					}, n), s && i.a.createElement("p", null, s)))
				}))
			};
			var J = n("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				Q = n("./src/reddit/selectors/subreddit.ts");
			const Z = e => {
				let {
					content: t
				} = e;
				var n;
				const s = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(H.Ab)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(x.b)(t),
					c = Object(a.e)(e => Object(Q.W)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					d = r && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(J.b)(d) : "clear_fill",
					u = t.bannedAtUTC ? (null === (n = t.bannedAtUTC) || void 0 === n ? void 0 : n.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, s ? i.a.createElement("div", {
					className: K.a.userIconWrapper
				}, i.a.createElement(V.a, {
					className: Object(B.a)(K.a.userIcon),
					iconUrl: null == s ? void 0 : s.accountIcon,
					userName: null == s ? void 0 : s.username,
					isNSFW: null == s ? void 0 : s.isNSFW
				})) : i.a.createElement(j.a, {
					isFilled: !0,
					name: l,
					className: Object(B.a)(K.a.coloredIcon, K.a.icon)
				}), i.a.createElement("div", {
					className: K.a.statusText
				}, i.a.createElement("p", {
					className: K.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), i.a.createElement("p", null, (null == s ? void 0 : s.username) ? i.a.createElement(i.a.Fragment, null, Object(W.e)(null == s ? void 0 : s.username), u && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(U.d, {
					seconds: u
				}))) : d && Object(J.f)(d, c.name))))
			};
			var X = n("./src/reddit/components/Reports/SnoozableReport/index.tsx");
			const $ = e => {
					let {
						content: t
					} = e;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(B.a)(K.a.coloredIcon, K.a.icon)
					}), i.a.createElement("div", {
						className: K.a.reportedWrapper
					}, !!t.modReports.length && i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("p", {
						className: K.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [n, s] = e;
						return i.a.createElement("p", {
							key: `${n}-${s}-${t}`
						}, Object(W.e)(s), ": ", n)
					})), !!t.userReports.length && i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("p", {
						className: K.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, n] = t;
						return n + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), t.userReports.map((e, n) => {
						let [s, o, r, a] = e;
						return s ? void 0 !== r && a ? i.a.createElement(X.a, {
							key: `user-${s}`,
							reason: s,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: K.a.snoozabledButton,
							dropdownClassName: K.a.snoozableDropdown,
							iconClassName: K.a.snoozeIcon
						}) : i.a.createElement("p", {
							key: `user-${s}`
						}, s, " (", o, ")") : null
					}))))
				},
				ee = e => {
					let {
						content: t
					} = e;
					const n = D(t),
						o = Object(r.useMemo)(() => {
							switch (n) {
								case s.APPROVED:
									return i.a.createElement(q, {
										content: t
									});
								case s.REMOVED:
								case s.SPAM:
									return i.a.createElement(Z, {
										content: t
									});
								case s.FILTERED:
									return i.a.createElement(Y, {
										content: t
									});
								case s.REPORTED:
									return i.a.createElement($, {
										content: t
									});
								default:
									return i.a.createElement(r.Fragment, null)
							}
						}, [n, t]);
					return n === s.UNMODERATED ? null : i.a.createElement("div", {
						className: Object(B.a)(K.a.wrapper, {
							[K.a.approved]: n === s.APPROVED,
							[K.a.reported]: n === s.REPORTED
						})
					}, o)
				},
				te = (e, t) => Object(_.b)(t, e),
				ne = e => {
					let {
						content: t,
						listingKey: n,
						hostPostData: M
					} = e;
					const L = Object(C.a)(),
						B = Object(a.d)(),
						U = D(t),
						V = Object(a.e)(I.b),
						W = Object(a.e)(R.b),
						H = Object(x.b)(t),
						G = Object(a.e)(e => {
							var n, s;
							return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === t.id
						}),
						K = Object(a.e)(e => Object(P.m)(e, {
							postId: t.id
						})),
						q = Object(v.a)(K),
						z = Object(O.a)(K),
						Y = [s.REPORTED, s.FILTERED, s.UNMODERATED].includes(U),
						J = [s.APPROVED, s.UNMODERATED, s.REPORTED].includes(U),
						Q = H && z,
						Z = U === s.REMOVED && !t.modRemovalReason,
						X = U === s.FILTERED,
						$ = !H,
						ne = [s.REMOVED, s.SPAM].indexOf(U) > -1,
						se = Object(r.useCallback)(e => {
							L(Object(E.k)(t.id, e, "post", n, M, void 0))
						}, [L, n, M, t]),
						oe = H ? E.k : te,
						re = Object(r.useCallback)(() => {
							const e = H ? w.s : k.a;
							B(e(t.id)), L(oe(t.id, "approve"))
						}, [L, B, t, H, oe]),
						ie = Object(r.useCallback)(() => {
							const e = H ? w.U : k.e;
							B(e(t.id, !1)), t.isRemoved && t.bannedBy === c.l ? L(oe(t.id, "confirm_remove")) : L(oe(t.id, "remove"))
						}, [L, B, t, H, oe]),
						ae = Object(r.useCallback)(() => {
							B(Object(N.fetchReasonsAndOpenModal)(H ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, H, B]),
						ce = Object(r.useCallback)(() => {
							const e = H ? w.E : k.c;
							B(e(t.id)), L(oe(t.id, t.isLocked ? "unlock" : "lock"))
						}, [oe, L, B, t, H]),
						de = Object(r.useCallback)(() => {
							B(Object(y.i)(Object(u.b)(t.id, !1))), L(Object(E.k)(t.id, "post_flair_picker"))
						}, [L, B, t]),
						le = Object(r.useCallback)(e => {
							let {
								previewFlair: n,
								selectedTemplateId: s
							} = e;
							H && B(Object(T.h)({
								post: t,
								previewFlair: n,
								selectedTemplateId: s
							}))
						}, [B, H, t]),
						ue = Object(r.useCallback)(() => {
							H && (B(Object(w.ib)(t.id)), L(Object(_.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [L, B, t, H]),
						me = Object(r.useCallback)(() => {
							H && (B(Object(w.J)(t.id)), L(Object(_.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [L, B, t, H]),
						pe = Object(r.useCallback)(() => {
							H && (B(Object(w.G)(t.id)), Object(_.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [B, t, H]),
						be = Object(r.useCallback)(() => {
							H && (B(Object(y.i)(p.a.CROWD_CONTROL)), B(Object(w.u)(t.id)))
						}, [B, t, H]),
						fe = Object(r.useCallback)(() => {
							H && (B(Object(w.D)(t.permalink)), se("copy"))
						}, [se, B, t, H]),
						he = Object(r.useCallback)(async () => {
							if (!H) return;
							const e = Object(h.d)(h.a.GildingFlow, !0);
							B(Object(S.d)({
								awardId: null == V ? void 0 : V.id,
								correlationId: e,
								thingId: t.id
							})), L(Object(g.clickGildEvent)(t.id))
						}, [L, B, t, V, H]),
						Oe = Object(r.useCallback)(() => {
							B(Object(A.c)(t.id)), se("report")
						}, [se, B, t]),
						ve = Object(r.useCallback)(() => {
							var e;
							H && (B(Object(w.fb)(t.id, !t.hidden, !1, !0)), se((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [se, B, t, H]),
						xe = Object(r.useCallback)(() => {
							H && (B(Object(w.U)(t.id, !1)), L(Object(_.l)("spam", t.id)))
						}, [L, B, t, H]);
					return i.a.createElement("div", {
						className: F.a.wrapper,
						"data-testid": "modqueue-action-bar"
					}, i.a.createElement(ee, {
						content: t
					}), i.a.createElement("div", {
						className: F.a.actionBar
					}, Y && i.a.createElement(b.t, {
						className: [F.a.button, F.a.approve].join(" "),
						Icon: Object(j.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: re,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), J && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("close"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ie,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Z && i.a.createElement(b.t, {
						className: F.a.button,
						onClick: ae,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), X && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("close"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ie,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), ne && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: re,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), $ && i.a.createElement(b.t, {
						className: F.a.button,
						priority: t.isLocked ? b.c.Primary : b.c.Plain,
						Icon: Object(j.b)("lock"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ce,
						text: t.isLocked ? o.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : o.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), Q && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("tag"),
						priority: b.c.Plain,
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: de,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), H && W === Object(u.b)(t.id, !1) && i.a.createElement(u.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(u.b)(t.id, !1),
						onFlairChanged: le
					}), H && i.a.createElement(l.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: F.a.overflowButton,
						icon: i.a.createElement(j.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, i.a.createElement("h6", {
						className: F.a.overflowHeading
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && i.a.createElement(i.a.Fragment, null, i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: xe
					}, i.a.createElement(j.a, {
						name: "spam"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: ue
					}, i.a.createElement(j.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: ce,
						displayText: (null == t ? void 0 : t.isLocked) ? o.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : o.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, i.a.createElement(j.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: me,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, i.a.createElement(j.a, {
						name: "original"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: pe,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, i.a.createElement(j.a, {
						name: "nsfw"
					})), q && "subreddit" === t.belongsTo.type && i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: be
					}, i.a.createElement(j.a, {
						name: "crowd_control"
					})), i.a.createElement("h6", {
						className: F.a.overflowHeading
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: fe
					}, i.a.createElement(j.a, {
						name: "share"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: he,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, i.a.createElement(j.a, {
						name: "award"
					}), i.a.createElement(d.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: Oe
					}, i.a.createElement(j.a, {
						name: "report"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: ve,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, i.a.createElement(j.a, {
						name: "hide"
					}))), G && i.a.createElement(m.a, {
						withOverlay: !0,
						postId: t.id
					})))
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
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const t = Object(a.a)(),
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
				})), d && o.a.createElement(i.a, {
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
					post: s
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
					seconds: e.poll.endsAt / s.Vb
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/objectSelector/index.ts"),
				x = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				_ = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = n("./src/reddit/components/PostContainer/index.m.less"),
				C = n.n(E);
			const j = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: n
						} = t;
						return Object(f.b)(e, n.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: n
						} = t;
						return Object(f.i)(e, {
							postId: n.id
						})
					},
					pageType: e => Object(h.d)(e).pageType
				})),
				k = "post-container";
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: h,
						ref: v,
						shouldAddGalleryViewability: x = !0
					} = this.props, g = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, r, p))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(O.a)(C.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": k,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": _.a.BACKGROUND
					}, n), E = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && x ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(g))
				}
			}
			t.a = j(Object(g.a)(Object(x.a)(Object(m.c)(S))))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				m = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
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
						post: n
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
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
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.A)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(b))
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
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: O,
					isVoteCountAnimation: v,
					postId: x,
					shouldShowUpvoteRatioOnHover: g
				} = e, _ = `upvote-button-${t.id}${O?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, s && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: _,
					isVoteCountAnimation: v,
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
				return L
			})), n.d(t, "a", (function() {
				return J
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				O = n("./src/reddit/actions/post.ts"),
				v = n("./src/reddit/helpers/path/index.ts"),
				x = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				_ = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				E = n("./src/reddit/hooks/usePostContext.ts"),
				C = n("./src/reddit/hooks/useTheme.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = n("./src/lib/getShortenedLink.ts"),
				N = n("./src/reddit/components/FlairWrapper/index.tsx"),
				A = n("./node_modules/fbt/lib/FbtPublic.js"),
				R = n("./src/lib/prettyPrintNumber/index.ts"),
				I = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				P = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = n.n(P);
			const D = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var L, F = Object(a.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return Object(_.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, M.a.proposalMetaData)
					}, i.a.createElement("span", null, A.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [A.fbt._param("count", Object(R.a)(s)), A.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(I.a, {
						className: M.a.proposalExpiry,
						poll: t
					}))
				})),
				B = n("./src/reddit/components/SEOTitle/index.tsx"),
				U = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				H = n("./src/telemetry/models/Outbound.ts"),
				G = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				K = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = n("./src/reddit/components/PostTitle/index.m.less"),
				z = n.n(q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(L || (L = {}));
			const J = e => {
					let {
						size: t,
						titleColor: n,
						titleType: s,
						nowrap: o,
						children: r,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(C.a)();
					let m = "";
					switch (t) {
						case L.ExtraLarge:
							m = z.a.ExtraLarge;
							break;
						case L.Large:
							m = z.a.Large;
							break;
						case L.Medium:
							m = z.a.Medium;
							break;
						case L.Small:
							m = z.a.Small;
							break;
						case L.ExtraSmall:
							m = z.a.ExtraSmall;
							break;
						case L.Metadata:
							m = z.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.Title, a, m, {
							[z.a.isNoWrap]: o,
							[z.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": n || Object(w.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, s ? i.a.createElement(B.b, {
						type: s
					}, r) : r)
				},
				Q = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: s,
						children: o,
						...r
					} = e;
					return i.a.createElement(c.a, Y({}, r, {
						className: Object(u.a)(t, z.a.styledLink, {
							[z.a.isVisitedEnabled]: !n
						})
					}), o)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: s,
						children: o
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.titleContainer, s, {
							[z.a.isNoWrap]: n,
							[z.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				X = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(p.q)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: V.e,
					shouldOpenPostInNewTab: W.jb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, o = Object(a.d)(), r = Object(g.a)(), c = Object(a.e)(U.b), d = Object(a.e)(U.c), u = e => {
						!c && !d || t.media && Object(S.H)(t.media) || (e.preventDefault(), o(Object(O.bb)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const o = t.media && Object(S.H)(t.media) ? Object(x.c)(t.id, n.name) : t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(o) : Object(h.a)(o, void 0, r);
						return i.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? i.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, i.a.createElement(ee, t)) : i.a.createElement(ee, t)
						})(t, e) : i.a.createElement(Q, {
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
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
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
						post: s,
						sendEvent: e.sendEvent
					}), o)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: s
					} = e, {
						isSponsored: o
					} = s, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(_.a)()) return null;
					if (n && s.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== L.Large && !s.isSponsored && !(s.media && Object(S.H)(s.media)) && (s.source || s.media && (s.media.type === S.o.GIFVIDEO || s.media.type === S.o.IMAGE || s.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(s),
							isSponsored: o,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(T.a)(s), !s.isSponsored && i.a.createElement(j.a, {
							name: "external_link",
							className: z.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== L.Large && e.size !== L.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: o,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(T.a)(s), !s.isSponsored && i.a.createElement(j.a, {
						name: "external_link",
						className: z.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${z.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(w.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(w.a)(this.props).titleText,Object(w.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(w.a)(this.props).bodyText,Object(w.a)(this.props).body)};\n        }\n      `
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
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = n === k.b.Left, b = Object(N.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), O = !r && !o && !t, v = O && f && f.length > 0, x = O && h && h.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": K.a.TITLE,
						onClick: m
					}, !d && v && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(y.b)(c) && i.a.createElement($, Y({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && i.a.createElement(F, {
						className: z.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(te, this.props), x && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: z.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${s.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.eb)(),
					n = Object(p.w)(t),
					s = Object(E.a)(),
					o = Object(a.e)(o => X(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					r = Object(C.a)(),
					c = Object(m.b)();
				return s ? i.a.createElement(ne, Y({
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				m = n("./src/reddit/components/PostTopMeta/index.tsx"),
				p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				b = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/models/Subreddit/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/PostTopLine/index.m.less"),
				k = n.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: o,
					hideNSFWPref: j,
					hostPostData: S,
					iconClassName: y,
					inSubredditOrProfile: w,
					isCommentsPage: T,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: A,
					isModWithUserNotesPermissions: R,
					isOverlay: I,
					isTopicPage: P,
					listingKey: M,
					post: D,
					shouldShowSubscribeButton: L,
					showCornerOutboundLink: F,
					showSubreddit: B,
					showSubredditIcon: U,
					subredditOrProfile: V,
					isFollowed: W,
					shouldShowFollowButton: H,
					onFollowPostClick: G
				} = e;
				const K = P,
					q = V && Object(E.h)(V),
					z = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(C.Gb)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(k.a.container, t)
				}, B && V && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, U && r.a.createElement(p.b, {
					className: Object(a.a)(k.a.subredditIcon, y),
					shouldHideNsfwIcon: j,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, B && r.a.createElement(d.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), r.a.createElement(m.d, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: n,
					isModWithUserNotesPermissions: R,
					tooltipType: I ? m.c.Lightbox : void 0,
					post: D,
					showSub: B,
					subredditOrProfile: V
				}), r.a.createElement(u.a, {
					className: k.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: N,
					post: D,
					tooltipType: I ? m.c.Lightbox : void 0
				}), !K && r.a.createElement(c.a, {
					isPostDetail: T,
					thing: D,
					tooltipType: I ? m.c.Lightbox : void 0
				})), V && z && B && L && !A && r.a.createElement(f.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => Object(x.k)(D.id, e ? "unsubscribe" : "subscribe", "post", M, S),
					identifier: {
						name: V.name,
						type: q ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: D.id,
					size: O.d.XS
				}), F && r.a.createElement(v.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(_.D)(D),
					source: D.source
				}, r.a.createElement(g.a, {
					className: k.a.outboundLinkIcon
				})), H && z && r.a.createElement(l.a, {
					isFilled: !!W,
					onClick: G,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/helpers/isComment.ts"),
				O = n("./src/reddit/helpers/trackers/modTools.ts"),
				v = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				j = n.n(C);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = (e, t) => `SnoozableReport--${t}--${e}`, y = Object(r.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(E.b)(S(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: S(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, n)) : e(Object(l.hb)(t.reportedThingId, t.reason, n))
				}
			})), w = Object(m.a)(b.a);
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.ic.None : c.ic.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(O.n)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: i,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = S(e, n);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: m,
						className: Object(a.a)(j.a.DropdownLabelContainer, d),
						onClick: s
					}, o.a.createElement("label", {
						htmlFor: m,
						className: j.a.DropdownLabel
					}, i ? k._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(x.a, null) : o.a.createElement(v.a, null))), o.a.createElement(w, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(a.a)(j.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: j.a.SnoozeButtonContent
					}, i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: u
					}), k._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: u
					}), k._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = y(Object(p.c)(T))
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
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
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
				i = e => {
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
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
				O = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = n("./src/reddit/components/VerticalVotes/index.m.less"),
				x = n.n(v);
			const g = Object(a.c)({
					isNightMode: h.db,
					isAnimatingUpvotePostId: f.k
				}),
				_ = Object(i.b)(g),
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class j extends r.a.Component {
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
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: v,
							postId: g
						} = e,
						_ = E(e),
						j = C(e),
						k = v.voteState,
						S = i === g;
					return r.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className),
						id: `vote-arrows-${v.id}`,
						ref: h
					}, _ ? r.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": k === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": O.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: k
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": k === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[x.a.bounceUp]: S
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": O.b.UPVOTE,
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: k
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(x.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: k,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: g
					}), j ? r.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": k === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": O.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: k
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": k === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": O.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: k
					})))
				}
			}
			const k = Object(d.a)(_(j));
			t.a = k
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: i.ib
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
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
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(a);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/thumbnails.ts"),
				o = n("./src/reddit/models/Media/index.ts");

			function r(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(o.E)(e.media) || t)
			}
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
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: s,
						startOffset: o,
						endContainer: r,
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(s, o), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(r, i), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
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
				type: o.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.J.NO_STRIPE_SUBSCRIPTION:
							case s.J.USER_DOESNT_EXIST:
							case s.J.USER_REQUIRED_ERROR:
							case s.J.VALIDATION_ERROR:
								return e;
							case s.J.NO_USER:
							case s.J.NO_TEXT:
							case s.J.NO_URL:
								return s.J.VALIDATION_ERROR;
							case s.J.CREDIT_CARD_FAILURE:
							case s.J.CREDIT_CARD_FAILURE_GENERIC:
								return s.J.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.J.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.J.VALIDATION_ERROR
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
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return a
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
				i = () => o(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => (e => {
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
				return O
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				b = e => Object(s.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.bb)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.K)(e, t) : null,
						profile: Object(c.T)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				u = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						a = o && Object(i.j)(e, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: o ? Object(c.h)(e, o) : null,
						listing: Object(c.z)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, s) => {
					const o = l(e);
					return Object(d.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				}, p = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				}, f = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.bb)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.K)(t, e)
				}), h = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}), O = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
				}), v = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...l(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, x = () => e => ({
					...l(e),
					action: "open",
					noun: "gif_tooltip"
				}), g = e => t => ({
					...l(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), _ = () => e => ({
					...l(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), E = () => e => ({
					...l(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					gallery: i.s(e, t, n),
					post: i.K(e, t),
					...i.o(e)
				}),
				c = (e, t) => n => ({
					...a(n, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.C(n, e)
				}),
				d = (e, t) => n => {
					const c = Object(o.a)(t),
						d = Object(r.d)(n, e) + 1;
					return {
						...a(n, e, d),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.C(n, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, n) => o => ({
					...a(o, e, n),
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
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
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "v", (function() {
				return A
			})), n.d(t, "w", (function() {
				return R
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.q)(e)
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
				O = () => e => ({
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
				E = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : _[e],
					...r(t)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				j = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.m)(e),
					...r(i),
					actionInfo: o.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				S = () => e => ({
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
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
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
				A = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				R = () => (e, t) => {
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
				return O
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "o", (function() {
				return T
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = {
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
					return Object(o.a)(t) && Object.assign(n, a), n
				},
				d = (e, t) => n => {
					const {
						id: s
					} = Object(i.Ab)(n, {
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
					...a
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...r.o(e),
					...a
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
					snoovatar: r.hb(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				O = h("view"),
				v = h("click"),
				x = h("dismiss"),
				g = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					snoovatar: r.hb(s)
				}),
				_ = g("anniversary_achievement", "view", "anniversary_achievement"),
				E = g("anniversary_achievement", "click", "close"),
				C = g("anniversary_achievement", "click", "equip"),
				j = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				k = j("view"),
				S = j("click"),
				y = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.hb(s)
				}),
				w = e => y("onboarding", "click", e),
				T = () => y("avatar", "view", "onboarding")
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
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
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
				i = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.clock, e.className),
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
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

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
					className: Object(r.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
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
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
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
				i = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(s || (s = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
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
				i = 1e4,
				a = 100;
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
				return O
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "q", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
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
			const O = e => b[h[e]],
				v = e => h[b[e]],
				x = e => f[b[e]],
				g = e => b[f[e]],
				_ = e => h[f[e]];
			var E;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(E || (E = {}));
			const C = e => {
					switch (e) {
						case E.Hourly:
						case E.Daily:
						case E.Weekly:
						case E.Monthly:
							return !0
					}
					return !1
				},
				j = "custom",
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
							return Object(s.a)(e)
					}
				},
				S = e => "frequency" in e && !!e.frequency
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
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
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
						(r = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
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
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const a = {
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
						startsAt: s,
						endsAt: o,
						webAssetUrls: r,
						tags: i
					} = e, a = s && new Date(s) <= new Date, c = !!o && new Date(o) < new Date, d = !!a && !c, b = (i || []).includes(m);
					if (i && i.includes(l) && !b) {
						const {
							text: n,
							id: s
						} = e, o = r || null, a = p(i);
						t && (t.quickCreateV1 = {
							...a,
							id: s,
							text: n,
							active: d && !!o,
							webAssetUrls: o
						})
					}
					if (i && i.includes(u) && !b) {
						const e = r || null,
							s = (null === (n = i.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: d && !!e,
							assetUrls: e,
							experimentRequired: s
						})
					}
				}), t
			}
			var f = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				h = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/constants/modals.ts");
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case f.s:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? b(s) : d;
					case h.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === O.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var x = function() {
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
			t.a = Object(r.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: x
			})
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
				return i
			})), n.d(t, "c", (function() {
				return a
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
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				a = e => {
					var t, n, s, o;
					const i = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (o = null == i ? void 0 : i.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(r.a)(i.experimentRequired)(e) ? a : null
				}
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
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const a = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => a.find(t => !!Object(i.a)(c(e, t))),
				l = Object(s.a)(d, e => !!e),
				u = e => {
					const t = d(e);
					return !!t && c(e, t) === o.eb.SkipOnboarding
				},
				m = e => {
					const t = d(e);
					return !!t && c(e, t) === o.eb.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/helpers/isCrosspost.ts"),
				i = n("./src/reddit/selectors/modQueue.ts"),
				a = n("./src/reddit/selectors/platform.ts");
			const c = (e, t) => {
				let {
					post: n
				} = t;
				if (Object(i.c)(e)) return !0;
				const c = Object(a.f)(e),
					d = Object(r.a)(n);
				return !(!c || d) && (e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Vb
					}) === s.Jd
				})(e)
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
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.s
					});
					return t === s.w.VoteCountOnly || t === s.w.CommentCountOnly || t === s.w.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.s
					});
					return t === s.w.VoteCountOnly || t === s.w.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.s
					});
					return t === s.w.CommentCountOnly || t === s.w.VoteAndCommentCount
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
					if (Object(a.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: s.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.w.VoteCountOnly || l === s.w.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(a.d)(e) || !o || o.isSponsored || o.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: s.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.w.CommentCountOnly || l === s.w.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.xc
					}) === s.Uc.Enabled
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
					experimentName: s.af
				}) === s.Jd
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.qg)(t)
				},
				c = Object(s.a)(a, r.d, (e, t) => e && !t)
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
				i = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
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
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === n
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
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === n
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
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.df,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => t === o.lf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(s.a)(i.G, a, (e, t) => c(e, t));
			Object(s.a)((e, t) => t, a, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const r = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(o.c)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Qb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
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
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${s.a.redditUrl}${c}`, n)
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
			e.exports = JSON.parse('{"id":"a3eae58411e4"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3954b4d4b89c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.e2aab0d6d93767688d8a.js.map