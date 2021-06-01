// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.3e5dae63c276b46fe7bc.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function o(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						f = !i && !m && !u && !p && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = n(/version\/(\d+(\.\d+)?)/i),
						k = /tablet/i.test(t) && !/tablet pc/i.test(t),
						C = !k && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: E || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: E || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: v
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || E
					} : m ? s = {
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
						version: E || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, E && (s.version = E)) : r ? (s = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, E && (s.version = E)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: n(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && E && (s.version = E)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : _ ? (s.xbox = e, s.osname = "Xbox") : x ? (s.windows = e, s.osname = "Windows") : f && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var O = "";
					s.windows ? O = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? O = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? O = (O = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? O = (O = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? O = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? O = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? O = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (O = n(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (s.osversion = O);
					var g = !s.windows && O.split(".")[0];
					return k || d || "ipad" == r || i && (3 == g || g >= 4 && !C) || s.silk ? s.tablet = e : (C || "iphone" == r || "ipod" == r || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) o.push(t(e[n]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), n = s(e, (function(e) {
							var n = t - o(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, s) {
					var i = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (i = t(s));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = o() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, o, s) {
				return s(e, (function(e, s, r) {
					n = o ? (o = !1, e) : t(n, e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), o(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, s)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => (o = (() => {})) => s => {
				const r = u(s.target, s.currentTarget),
					a = p(s.target, s.currentTarget);
				r && n && t && (m(s.target, s.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
					const o = t(e, r, a)(n);
					let s;
					if (o && o.actionInfo) {
						const {
							pageType: e,
							...t
						} = o.actionInfo;
						s = t
					}
					return {
						...o,
						actionInfo: Object(i.previousPageActionInfo)(n, s)
					}
				})), m(s.target, s.currentTarget, l.anchorsAndButtons) && o(s)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...c
					} = t, l = Object(o.useCallback)(d(i, r, n), [i, r, n]);
					return s.a.createElement(e, a({}, c, {
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
				m = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, n)),
				u = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			}));
			const o = "#FFF",
				s = "#FF4500",
				r = "#0079D3",
				i = "#46D160",
				a = {
					black: "#000",
					white: o,
					orangered: s,
					alienblue: r,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: s,
					downvote: "#7193FF",
					positive: i,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: s,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: s,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...a,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return k
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const E = Object(r.a)(v.n),
				k = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(m.h)(o(), e)).ok && t((e => async t => {
						t(E({
							commentId: e
						}))
					})(e))
				}, C = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(h.K)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.isLocked ? m.j : m.d;
					t(Object(f.i)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(f.i)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, _ = Object(r.a)(v.F), O = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = s.features.comments.models[e],
						i = s.user.account ? s.user.account.displayText : null;
					r && i && (t(Object(f.i)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(o(), e)).ok || t(Object(f.i)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(d.d)())
				}, g = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					i && a && (n(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: a,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(s(), e, t)).ok || n(Object(f.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, y = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.ignoreReports ? m.i : m.c;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(f.i)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, j = (e, t, n) => async (r, i, {
					gqlContext: a
				}) => {
					const d = Object(x.a)(i(), {
						commentId: e
					});
					if (!d) return;
					const l = n === s.Vb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(a(), {
							input: m
						})).ok) r(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, w = (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const d = r(),
						c = d.features.comments.models[e];
					if (!c) return;
					const l = c.postId,
						u = d.postStickiedComments.data[l],
						p = s.g[t];
					o(Object(f.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.D.ADMIN,
							isMod: t === s.D.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && o(Object(f.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(a(), e, p, n || null)).ok ? n && o(_({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
							sort: s.r.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (o(Object(f.i)({
						[e]: {
							distinguishType: c.distinguishType,
							isAdmin: c.isAdmin,
							isMod: c.isMod,
							isStickied: c.isStickied
						}
					})), o(Object(f.i)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				s = n.n(o);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !s && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, u)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement(i.a, c({
				className: Object(r.a)(e, d.a.CallToActionButton, {
					[d.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/comment/moderation.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				u = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				h = n("./src/reddit/icons/svgs/Show/index.tsx"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = n.n(f);
			const E = b.a.wrapped(h.a, "Show", v.a);
			var k = e => s.a.createElement(x.f, null, !e.comment.isApproved && s.a.createElement(x.d, {
				displayText: e.comment.approvedBy ? p.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : p.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, s.a.createElement(x.a, null)), !e.comment.bannedBy && s.a.createElement(s.a.Fragment, null, s.a.createElement(x.d, {
				displayText: e.comment.isRemoved ? p.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : p.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, s.a.createElement(x.h, null)), s.a.createElement(x.d, {
				displayText: e.comment.isSpam ? p.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : p.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, s.a.createElement(x.i, null)), s.a.createElement(x.d, {
				displayText: e.comment.isLocked ? p.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : p.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, s.a.createElement(x.g, null))), e.comment.collapsedBecauseCrowdControl && s.a.createElement(x.d, {
				displayText: p.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, s.a.createElement(E, null)));
			const C = b.a.wrapped(l.a, "StyledDropdown", v.a),
				_ = Object(i.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				O = Object(r.b)(_, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(a.a)(t.id)),
					onLockComment: () => e(Object(a.c)(t.id)),
					onRemoveComment: () => e(Object(a.e)(t.id, !1)),
					onSpamComment: () => e(Object(a.e)(t.id, !0)),
					onShowComment: () => e(Object(a.d)(t.id))
				})),
				g = Object(d.a)(C),
				y = O(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return s.a.createElement(g, {
						isOpen: n,
						tooltipId: l
					}, s.a.createElement(k, {
						onApproveComment: () => {
							o(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = y
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = n("./src/reddit/components/ModModeReports/helpers.ts"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = n("./src/reddit/helpers/trackers/modTools.ts"),
				E = n("./src/reddit/selectors/moderatingComments.ts"),
				k = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				y = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				w = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				I = n("./src/reddit/icons/svgs/Show/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				N = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				M = n.n(N);
			const S = Object(h.t)(),
				A = e => `Distinguish--Dropdown--${e}`,
				D = Object(a.c)({
					currentUser: _.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(E.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(C.b)(A(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.g)(e, t) || Object(k.k)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.Q
				}),
				F = Object(i.b)(D, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, o) => e(Object(m.b)(t.id, n, o)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: A(t.id)
					}))
				}));
			t.a = S(F(l.a.wrapped(Object(x.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: s,
				collapsedBecauseCrowdControl: i,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: x,
				onRemoveComment: h,
				onShowComment: E,
				onSpamComment: k,
				onToggleDistinguishDropdown: C,
				sendEvent: _,
				...N
			}) => {
				const S = Object(f.a)(a),
					D = Object(b.b)(t),
					F = t.isApproved && D,
					B = !!n && n.isEmployee,
					P = !t.isRemoved || t.bannedBy === c.k,
					L = i,
					R = e => _(Object(v.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || D) && r.a.createElement(T.a, {
					text: F ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), R("approve")
					}
				}, r.a.createElement(O.a, {
					className: M.a.icon
				})), P && r.a.createElement(r.a.Fragment, null, r.a.createElement(T.a, {
					text: t.bannedBy === c.k ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						h(), t.bannedBy === c.k ? R("confirm_remove") : R("remove")
					}
				}, r.a.createElement(j.a, {
					className: M.a.icon
				})), r.a.createElement(T.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						k(), R("spam")
					}
				}, r.a.createElement(w.a, {
					className: M.a.icon
				}))), r.a.createElement(T.a, {
					text: t.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), R(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(y.a, {
					className: M.a.icon
				})), s && !B && !t.bannedBy && r.a.createElement(T.a, {
					className: Object(d.a)({
						[M.a.selected]: N.isDistinguishDropdownOpen
					}),
					onClick: () => {
						R("mod_distinguish_menu"), C()
					}
				}, r.a.createElement(g.a, null), r.a.createElement(p.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: N.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: B,
					isUserMod: S,
					onDistinguishComment: u,
					sendEventWithName: R,
					tooltipId: A(t.id)
				})), L && r.a.createElement(T.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						E()
					}
				}, r.a.createElement(I.a, {
					className: Object(d.a)(M.a.icon, M.a.Show)
				})))
			}), "CommentModToolsFlatlist", M.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/UserAchievementFlair/index.m.less": function(e, t, n) {
			e.exports = {
				container: "tqeqZVUth4mbhPuT1cddk",
				icon: "_32ScUU8wDjDjzTjbViK-g8"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/actions/gold/powerups.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/helpers/trackers/powerups.ts"),
				x = n("./src/reddit/components/AwardBadges/index.tsx"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				f = n("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				v = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				E = n.n(v);
			const k = e => {
				const t = Object(i.e)(f.a),
					{
						className: n,
						comment: o,
						isAuthorDeleted: s,
						isLivestreaming: a,
						isStrong: d,
						style: c
					} = e;
				return r.a.createElement(h.a, {
					className: Object(m.a)(E.a.commentAuthorLink, n),
					author: o.author,
					isAdmin: o.isAdmin,
					isAdminEmeritus: o.distinguishType === u.D.ALUMNI_ADMIN,
					isAuthorDeleted: s,
					isLivestreaming: a,
					isMod: o.isMod,
					isOp: o.isOp,
					isStrong: d,
					isUnstyled: t,
					style: c
				}, o.author)
			};
			var C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				_ = n("./src/reddit/components/Flair/index.tsx"),
				O = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/PostTopMeta/index.tsx"),
				y = n("./src/reddit/controls/MetaData/index.tsx"),
				j = n("./src/reddit/helpers/flair.ts"),
				w = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(N);
			const S = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				renderedInOverlay: i
			}) => r.a.createElement(T.b, {
				className: Object(m.a)(M.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: i ? g.c.Lightbox : void 0
			}, r.a.createElement(I.b, {
				ignore: Object(w.f)(n) || !!n.distinguishType && n.distinguishType !== u.D.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(k, {
				className: e,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				isAuthorDeleted: Object(w.f)(n)
			})));
			var A = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				D = n("./src/reddit/icons/fonts/index.tsx");
			const F = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`,
				B = () => o.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				P = () => o.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				L = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				R = () => o.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				H = () => o.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var U = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				W = n.n(U);
			const V = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const s = Object(i.d)(),
					a = () => s(Object(l.h)({
						tooltipId: d
					})),
					d = F("CommentTopMeta--cakeday--", t, n),
					c = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(D.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(W.a.cakeIcon, e),
					"aria-label": c,
					id: d,
					onMouseEnter: a,
					onMouseLeave: a
				}), r.a.createElement(A.c, {
					tooltipId: d,
					text: c
				}))
			};
			var z = n("./src/lib/addQueryParams/index.ts"),
				X = n("./src/lib/humanizeDateTime/index.ts"),
				Q = n("./src/lib/timeAgo/index.ts"),
				J = n("./src/reddit/actions/comment/index.ts");
			const Z = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						renderedInOverlay: s
					} = e, a = Object(i.d)(), d = F("CommentTopMeta--Created--", n.id, s), c = () => a(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(z.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							G(a, n.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Q.d)(n.created, {
						noPostfix: o,
						shortenedUnit: o
					}), r.a.createElement(A.c, {
						tooltipId: d,
						text: Object(X.a)(n.created)
					}))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function n() {
						q(e, t, n)
					}))
				},
				q = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(J.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(J.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var K = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Y = n.n(K);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = () => r.a.createElement(y.a, {
				className: Y.a.crowdControlText
			}, $._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var te = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ne = n.n(te);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(y.a, {
				className: ne.a.editedText
			}, oe._("edited {time}", [oe._param("time", Object(Q.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var re = n("./src/reddit/helpers/isRemoved.ts"),
				ie = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ae = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				de = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				le = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				me = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				pe = n("./src/reddit/models/AutomatedReporting/index.ts"),
				be = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				xe = n.n(be);
			const he = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const a = Object(i.d)(),
					d = e => () => a(Object(l.f)({
						tooltipId: e
					})),
					c = () => a(Object(l.i)()),
					u = t => F(t, e.id, s),
					p = u("CommentTopMeta--Automod--"),
					b = u("CommentTopMeta--Approve--"),
					x = u("CommentTopMeta--Remove--"),
					h = u("CommentTopMeta--Report--"),
					f = u("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(pe.b)(e.bannedBy),
					E = d(x);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: xe.a.approveIcon,
					desc: Object(ie.a)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(ie.a)(e)
				})), Object(re.a)(e) && !v && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: xe.a.removeIcon,
					desc: Object(ie.c)(e),
					id: x,
					onMouseEnter: E,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: x,
					text: Object(ie.c)(e)
				})), Object(re.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: xe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => a(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(re.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && r.a.createElement("a", {
					className: xe.a.removalReason,
					onMouseEnter: E,
					onMouseLeave: c
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(ce.a, {
					className: xe.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(ue.a, {
					className: xe.a.spamIcon,
					desc: Object(ie.e)(e),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: c,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(A.c, {
					tooltipId: f,
					text: Object(ie.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(D.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(xe.a.automoderatorIcon, {
						[xe.a.removed]: !!e.bannedBy
					}),
					"aria-label": ie.b,
					id: p,
					key: p,
					onMouseEnter: d(p),
					onMouseLeave: c
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(A.c, {
					tooltipId: p,
					text: ie.b
				}), Object(ae.a)(e) && r.a.createElement(me.a, {
					className: xe.a.reportIcon,
					desc: Object(ie.d)(e.numReports),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: c,
					isFilled: !0
				}), Object(ae.a)(e) && r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(ie.d)(e.numReports)
				}), v && r.a.createElement("a", {
					className: xe.a.removalReason
				}, o.fbt._("• Removed by the Automated {filterName}", [o.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var fe, ve = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(fe || (fe = {}));
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ke = n.n(Ee);
			const Ce = {
					[fe.Admin]: {
						color: ve.b,
						label: o.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: B
					},
					[fe.Mod]: {
						color: ve.c,
						label: o.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => L(e.subredditDisplayText)
					},
					[fe.Op]: {
						color: ve.a,
						label: o.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: R
					},
					[fe.AlumniAdmin]: {
						color: ve.b,
						label: o.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: P
					},
					[fe.Contractor]: {
						color: ve.a,
						label: o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: H
					}
				},
				_e = e => {
					const t = Object(i.d)(),
						n = function(e) {
							return e.isAdmin ? fe.Admin : e.isMod ? fe.Mod : e.isOp ? fe.Op : e.distinguishType === u.D.ALUMNI_ADMIN ? fe.AlumniAdmin : e.authorIsContractor ? fe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === fe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						label: a,
						tooltipTemplate: d
					} = Ce[n], c = F(o, e.comment.id, e.renderedInOverlay), p = d(e), b = () => t(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(ke.a.role, e.className),
						style: {
							color: s
						},
						id: c,
						onMouseEnter: b,
						onMouseLeave: b
					}, a), r.a.createElement(A.c, {
						tooltipId: c,
						text: p
					}))
				};
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ge = n.n(Oe);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), je = () => r.a.createElement(y.a, {
				className: ge.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var we = n("./src/reddit/selectors/experiments/econ/powerupsAchievementFlair.ts"),
				Ie = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				Te = n("./src/reddit/components/Comments/Comment/TopMeta/UserAchievementFlair/index.m.less"),
				Ne = n.n(Te);
			const Me = ({
					className: e,
					subredditId: t,
					userId: n
				}) => {
					const o = Object(i.e)(e => Object(Ie.b)(e, {
							subredditId: t,
							userId: n
						})),
						s = Object(i.e)(e => Object(Ie.c)(e, {
							subredditId: t,
							userId: n
						})),
						a = !!o || !!s;
					if (!Object(i.e)(e => a && Object(we.a)(e))) return null;
					const d = (null == s ? void 0 : s.type) === (null == o ? void 0 : o.type) ? null : s;
					return r.a.createElement("span", {
						className: Object(m.a)(Ne.a.container, e),
						"data-test-id": "achievement-flairs"
					}, r.a.createElement(Se, {
						achievement: d
					}), r.a.createElement(Se, {
						achievement: o
					}))
				},
				Se = ({
					achievement: e
				}) => e ? r.a.createElement("img", {
					alt: e.name,
					className: Ne.a.icon,
					src: e.icon.url
				}) : null;
			var Ae = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				De = n.n(Ae);
			const Fe = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: s,
					flair: i,
					ignoreLock: a,
					isLivestreaming: d,
					renderedInOverlay: c,
					subredditDisplayText: l,
					renderContractorBadge: u
				} = e;
				return s.isDeleted ? r.a.createElement("div", {
					className: Object(m.a)(De.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: De.a.authorLine
				}, r.a.createElement("span", {
					className: De.a.metaText
				}, s.deletedBy === w.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(y.c, {
					className: De.a.separator
				}), r.a.createElement(Z, {
					key: "Created",
					className: De.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: c
				}))) : r.a.createElement("div", {
					className: Object(m.a)(De.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: De.a.authorLine
				}, !Object(w.f)(s) && r.a.createElement(C.b, {
					className: De.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: s.subredditId,
					userId: s.authorId,
					uniqueIdentifier: s.id
				}), r.a.createElement(S, {
					authorClassName: De.a.author,
					comment: s,
					isLivestreaming: d,
					renderedInOverlay: c
				}), n && r.a.createElement(ee, null), s.isAuthorCakeday && r.a.createElement(V, {
					className: De.a.baselineItem,
					commentId: s.id,
					renderedInOverlay: c
				}), r.a.createElement(O.a, {
					className: De.a.cryptoPoints,
					contentId: s.id,
					subredditId: s.subredditId,
					userId: s.authorId,
					username: s.author
				}), r.a.createElement(_e, {
					className: De.a.role,
					comment: s,
					subredditDisplayText: l,
					renderContractorBadge: u,
					renderedInOverlay: c
				}), !Object(w.f)(s) && r.a.createElement(Me, {
					className: De.a.achievementFlair,
					subredditId: s.subredditId,
					userId: s.authorId
				}), r.a.createElement(y.c, {
					className: De.a.separator
				}), r.a.createElement(Z, {
					key: "Created",
					className: De.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: c
				}), s.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: De.a.separator
				}), r.a.createElement(je, null)), s.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: De.a.separator
				}), r.a.createElement(se, {
					compact: !0,
					editedAt: s.editedAt
				})), r.a.createElement(he, {
					comment: s,
					ignoreLock: a,
					renderedInOverlay: c
				}), r.a.createElement(x.a, {
					thing: s,
					tooltipType: c ? g.c.Lightbox : void 0
				})), i && !Object(j.o)(i) && r.a.createElement("span", {
					className: De.a.userFlairLine
				}, r.a.createElement(_.b, {
					className: De.a.flair,
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var Be = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Pe = n("./src/reddit/selectors/economics.ts"),
				Le = n("./src/reddit/models/Flair/index.ts"),
				Re = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				He = n("./src/reddit/icons/fonts/helpers.tsx"),
				Ue = n("./src/reddit/icons/fonts/Op/index.m.less"),
				We = n.n(Ue);
			var Ve = p.a.wrapped(e => r.a.createElement("i", {
					className: `${Object(He.b)("author",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(He.a, null, e.desc)), "OpIcon", We.a),
				ze = n("./src/reddit/selectors/subreddit.ts"),
				Xe = n("./src/reddit/selectors/userFlair.ts"),
				Qe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Je = n.n(Qe);

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ge = p.a.wrapped(_.b, "RightPositionedAuthorFlair", Je.a),
				qe = p.a.wrapped(Re.a, "AdminIcon", Je.a),
				Ke = p.a.div("AdminEmeritus", Je.a),
				Ye = p.a.wrapped(Ve, "OpIcon", Je.a),
				$e = p.a.wrapped(Re.a, "ContractorIcon", Je.a),
				et = p.a.span("DeletedText", Je.a),
				tt = p.a.wrapped(y.a, "MetaSeparator", Je.a),
				nt = e => (t, {
					comment: n,
					renderedInOverlay: o
				}) => F(e, n.id, o),
				ot = Object(i.b)(() => Object(a.c)({
					adminTooltipId: nt("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: nt("CommentTopMeta--AdEm--"),
					contractorTooltipId: nt("CommentTopMeta--Contractor--"),
					gildedTooltipId: nt("CommentTopMeta--Gold--"),
					modTooltipId: nt("CommentTopMeta--Mod--"),
					opTooltipId: nt("CommentTopMeta--OP--"),
					topSupporterTooltipId: nt("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Pe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(ze.J)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Xe.d)(e, {
						subredditId: t.subredditId
					}),
					isCommentHeaderRedesignEnabled: f.a
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.d)("comment_top_supporter_badge"))
				}));
			t.a = ot(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					children: o,
					className: s,
					collapsed: i,
					collapsedBecauseCrowdControl: a,
					comment: c,
					commentsPageKey: l,
					contractorTooltipId: u,
					compact: p,
					flair: h,
					flairPosition: f,
					hasBadges: v,
					isCommentHeaderRedesignEnabled: E,
					isLivestreaming: k,
					isPostComment: j,
					ignoreFlairPosition: I,
					ignoreLock: T,
					modTooltipId: N,
					onHideTooltip: M,
					onShowTooltip: A,
					opTooltipId: D,
					openPowerupsModal: F,
					renderContractorBadge: B,
					renderedInOverlay: P,
					subredditDisplayText: L,
					topSupporterTooltipId: R
				} = e, H = Object(d.a)(), U = r.a.createElement(r.a.Fragment, null, r.a.createElement(Be.b, {
					commentId: c.id
				}), r.a.createElement(Be.a, {
					commentId: c.id,
					commentsPageKey: l
				}));
				if (j && E) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Fe, {
					className: Object(m.a)(s, {
						[Je.a.collapsed]: i
					}),
					collapsedBecauseCrowdControl: a,
					comment: c,
					flair: h || null,
					ignoreLock: T,
					isLivestreaming: k,
					renderedInOverlay: P,
					subredditDisplayText: L,
					renderContractorBadge: !!B
				}), U);
				if (c.isDeleted) return r.a.createElement(st, Ze({}, e, {
					className: Object(m.a)(s, Je.a.container, {
						[Je.a.collapsed]: i
					})
				}));
				if (i) return r.a.createElement(rt, Ze({}, e, {
					className: Object(m.a)(s, Je.a.container, {
						[Je.a.collapsed]: i
					})
				}));
				const W = !I && f === Le.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(s, Je.a.container, {
						[Je.a.collapsed]: i,
						[Je.a.hasBadges]: v,
						[Je.a.liveStreaming]: k
					}),
					"data-testid": "comment-top-meta"
				}, h && W && r.a.createElement(_.b, {
					flair: h,
					forceSmallEmojis: p
				}), !Object(w.f)(c) && r.a.createElement(C.b, {
					className: Je.a.userBadges,
					showAddCustom: !0,
					subredditId: c.subredditId,
					userId: c.authorId,
					uniqueIdentifier: c.id
				}), o && o, r.a.createElement(S, {
					comment: c,
					isLivestreaming: k,
					isStrong: !!p,
					renderedInOverlay: P
				}), a && r.a.createElement(ee, null), a && r.a.createElement(y.c, {
					className: Je.a.metaText,
					key: "crowdControlSeparator"
				}), h && !W && r.a.createElement(Ge, {
					flair: h,
					forceSmallEmojis: p
				}), !p && r.a.createElement(O.a, {
					className: Je.a.publicPoints,
					contentId: c.id,
					metaSeparator: r.a.createElement(y.c, {
						className: Je.a.metaText
					}),
					subredditId: c.subredditId,
					userId: c.authorId,
					username: c.author
				}), r.a.createElement(r.a.Fragment, null, U, !E && r.a.createElement(at, {
					comment: c,
					compact: p,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: N,
					onHideTooltip: M,
					onShowTooltip: A,
					openPowerupsModal: () => {
						H(Object(b.r)("comment")), F()
					},
					opTooltipId: D,
					renderContractorBadge: B,
					renderedInOverlay: P,
					subredditDisplayText: L,
					topSupporterTooltipId: R
				}), E && r.a.createElement(_e, {
					className: Je.a.authorRole,
					comment: c,
					subredditDisplayText: L,
					renderContractorBadge: !!B,
					renderedInOverlay: P
				})), !p && r.a.createElement(r.a.Fragment, null, !c.isDeleted && !j && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.b, {
					className: Je.a.metaText,
					isScoreHidden: c.isScoreHidden,
					score: c.score
				}), r.a.createElement(y.c, {
					className: Je.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(Z, {
					key: "Created",
					className: Je.a.MetaLink,
					comment: c,
					renderedInOverlay: P
				}), c.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Je.a.separator
				}), r.a.createElement(je, null)), c.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Je.a.separator
				}), r.a.createElement(se, {
					editedAt: c.editedAt
				}))), r.a.createElement(he, {
					comment: c,
					ignoreLock: T,
					renderedInOverlay: P
				}), r.a.createElement(x.a, {
					thing: c,
					tooltipType: P ? g.c.Lightbox : void 0
				}))
			});
			const st = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: i,
						renderedInOverlay: a
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(et, null, i.deletedBy === w.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Z, {
						key: "Created",
						className: Je.a.MetaLink,
						comment: i,
						renderedInOverlay: a
					}), n && it({
						childrenInfo: t
					}))
				},
				rt = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(k, {
						comment: t,
						isAuthorDeleted: Object(w.f)(t)
					})), r.a.createElement(y.b, {
						className: Je.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(y.c, {
						className: Je.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Z, {
						key: "Created",
						className: Je.a.MetaLink,
						comment: t,
						renderedInOverlay: s
					}), it({
						childrenInfo: o
					}))
				},
				it = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(tt, {
						className: Je.a.metaText
					}, t ? o.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : o.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				};
			class at extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						renderedInOverlay: t,
						...n
					} = this.props;
					return r.a.createElement(s.Fragment, null, e.isAuthorCakeday && r.a.createElement(V, {
						commentId: e.id,
						renderedInOverlay: t
					}), e.isAdmin && r.a.createElement(qe, {
						desc: B(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isAdmin && dt(n.adminTooltipId, B()), e.distinguishType === u.D.ALUMNI_ADMIN && r.a.createElement(Ke, {
						"aria-label": P(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), e.distinguishType === u.D.ALUMNI_ADMIN && dt(n.adminEmeritusTooltipId, P()), e.isMod && r.a.createElement(D.a, {
						name: "mod",
						isFilled: !0,
						className: Je.a.ModeratorIcon,
						"aria-label": L(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}), e.isMod && dt(n.modTooltipId, L(n.subredditDisplayText)), e.isOp && r.a.createElement(Ye, {
						desc: R(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isOp && dt(n.opTooltipId, R()), n.renderContractorBadge && r.a.createElement($e, {
						desc: H(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), n.renderContractorBadge && dt(n.contractorTooltipId, H()))
				}
			}
			const dt = (e, t) => r.a.createElement(A.c, {
				tooltipId: e,
				text: t
			})
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, n) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/constants/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const b = a.a.div("DistinguishWrapper", p.a),
				x = a.a.wrapped(m.a, "Inline", p.a),
				h = a.a.wrapped(c.a, "RadioOff", p.a),
				f = a.a.wrapped(l.a, "RadioOn", p.a),
				v = e => s.a.createElement(x, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(f, null) : s.a.createElement(h, null), e.text),
				E = a.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: o,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return s.a.createElement(b, {
						className: t,
						style: n
					}, s.a.createElement(v, {
						onClick: () => u(r.D.NONE, null),
						selected: !c && !o,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(v, {
						onClick: () => u(r.D.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && s.a.createElement(v, {
						onClick: () => u(r.D.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && s.a.createElement(v, {
						onClick: () => u(r.D.ADMIN, null),
						selected: o && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && s.a.createElement(v, {
						onClick: () => u(r.D.ADMIN, !0),
						selected: o && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var k = Object(d.a)(E);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return s.a.createElement("div", {
					className: t,
					id: u
				}, s.a.createElement(k, {
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.D.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.D.ADMIN ? m("admin_distinguish") : a && e !== r.D.MODERATOR ? m("undistinguish") : n && e !== r.D.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(m.a)(n)) return null;
				const o = n && n.eventInfo,
					a = Object(l.a)(n),
					u = o && Object(i.c)(o.eventStart, o.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, s.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, s.a.createElement(d.a, {
					post: n
				}), !a && u && s.a.createElement(c.a, {
					className: p.a.eventFollowButton,
					post: n,
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");

			function d(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/icons/fonts/helpers.tsx"),
				u = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				p = n.n(u);
			var b = e => s.a.createElement("i", {
				className: Object(l.a)(Object(m.b)("scheduled", e.isFilled), p.a.calendarIcon, e.className)
			});
			var x = e => s.a.createElement("i", {
					className: Object(l.a)(Object(m.b)("live", e.isFilled), p.a.liveIcon, e.className)
				}),
				h = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = n.n(h),
				v = n("./src/lib/lessComponent.tsx");
			const E = v.a.span("PostEventFutureText", f.a),
				k = v.a.span("PostEventPastText", f.a),
				C = v.a.span("PostEventNowText", f.a),
				_ = v.a.span("Container", f.a),
				O = v.a.wrapped(b, "CalendarIcon", f.a),
				g = v.a.wrapped(x, "LiveIcon", f.a),
				y = v.a.div("LoadingState", f.a);
			class j extends o.Component {
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
						eventEnd: o,
						eventIsLive: l,
						eventStart: m
					} = n, u = Object(r.e)(m, o);
					let p, b;
					if (this.state.mounted || u === r.a.Live) p = function(e, t, n) {
						const o = Object(r.e)(e, t),
							s = new Date(e * a.Lb);
						let c;
						return o === r.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (o === r.a.Future ? c = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? d(s) : s.toLocaleDateString(void 0, {
							weekday: "long"
						}) : o === r.a.Past && (c = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : d(s)), `${c} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s)}`)
					}(m, o, l);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						p = s.a.createElement(y, {
							className: e
						})
					}
					if (l) b = s.a.createElement(C, null, s.a.createElement(g, null), p);
					else if (u === r.a.Future) b = s.a.createElement(E, null, s.a.createElement(O, null), p);
					else {
						if (u !== r.a.Past) return null;
						b = s.a.createElement(k, null, s.a.createElement(O, null), p)
					}
					return s.a.createElement(_, {
						className: e
					}, b)
				}
			}
			t.a = j
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/components/ExpandoButton/index.m.less"),
				h = n.n(x);
			const f = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				v = (e, t = !1, n) => {
					const o = Object(d.a)(h.a.icon, h.a.hideOnHover);
					if (t) return r.a.createElement(p.a, {
						name: "crosspost",
						className: o
					});
					if (n.pollData) return r.a.createElement(p.a, {
						name: "poll_post",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return r.a.createElement(p.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return r.a.createElement(p.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return r.a.createElement(p.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return r.a.createElement(p.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return r.a.createElement(p.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return r.a.createElement(p.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = f(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: s,
					isExpanded: i,
					post: l,
					toggle: b,
					useMediaIcons: x
				} = e, f = n || l, E = s && !!n;
				return f.media && !(("rtjson" === f.media.type || "text" === f.media.type) && !Object(u.a)(f)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, h.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: b
				}, i ? r.a.createElement(p.a, {
					name: "collapse",
					className: h.a.icon
				}) : x ? r.a.createElement(r.a.Fragment, null, v(f.media && f.media.type, E, l), r.a.createElement(p.a, {
					name: "expand",
					className: Object(d.a)(h.a.icon, h.a.showOnHover)
				})) : r.a.createElement(p.a, {
					name: "expand",
					className: h.a.icon
				})) : f.source && f.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, h.a.outer),
					"data-click-id": "expando_open",
					href: f.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(p.a, {
					name: "external_link",
					className: Object(d.a)(h.a.icon, h.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, h.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(f.permalink),
					rel: "nofollow"
				}, r.a.createElement(p.a, {
					name: "text_post",
					className: h.a.icon
				}))
			})
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", d.a), m = i.a.div("Placeholder", d.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(o.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: r.a.createElement(u, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				u = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: x
				} = e, [h, f] = Object(s.useState)(!0), v = Object(b.b)(n.id, x), E = Object(i.d)(), k = Object(p.a)(), C = Object(b.a)(n, x), _ = (e, o) => k(Object(u.a)(t, n.id, e, o));
				Object(s.useEffect)(() => {
					C && _("modal", "show")
				}, [C]);
				if (!C || !h) return null;
				const O = o.fbt._("Help r/{subredditName} mods", [o.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: v,
					title: O,
					onClose: () => {
						f(!1), _("close", "click"), E(Object(d.E)()), E(Object(d.P)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						E(Object(d.E)())
					}
				}, r.a.createElement("p", null, o.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, o.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), o.fbt._param("=community", r.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, o.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), _("report", "click"), void E(Object(c.c)(n.id)))
				}, o.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [f, v] = Object(r.useState)(o.Survey), E = Object(x.b)(n.id, h), k = Object(a.d)(), C = Object(b.a)(), _ = Object(x.a)(n, h), O = (e, o) => C(Object(p.b)(t, n.id, e, o));
				Object(r.useEffect)(() => {
					_ && O("modal", "show")
				}, [_]);
				const g = e => {
					v(o.Closed), O("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), k(Object(l.c)(n.id, void 0, e))
				};
				if (!_) return null;
				let y = null;
				const j = {
					id: E,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(o.Closed), O("close", "click"), k(Object(c.E)())
					},
					onClickOutside: () => {
						k(Object(c.E)())
					}
				};
				switch (f) {
					case o.Survey:
						y = i.a.createElement(m.a, j, i.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.OffTopic), O("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.DontLike), O("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(o.BreaksRules), O("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case o.OffTopic:
						y = i.a.createElement(m.a, j, i.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case o.DontLike:
						y = i.a.createElement(m.a, j, i.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case o.BreaksRules:
						y = i.a.createElement(m.a, j, i.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", i.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(u.a, {
							onClick: () => g("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(u.a, {
							onClick: () => g("community")
						}, s.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case o.Closed:
				}
				return y
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(o || (o = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

			function a(e) {
				return s.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				a = n("./src/lib/hooks/useOnClickOutside.ts"),
				d = n("./src/reddit/components/Popup/index.m.less"),
				c = n.n(d);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: o,
					title: r,
					children: d
				} = e;
				return Object(a.a)(t, o), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: c.a.header
				}, s.a.createElement("span", {
					className: c.a.title
				}, r), s.a.createElement("button", {
					className: c.a.closeButton,
					onClick: n
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var m = s.a.memo(e => {
					const t = Object(o.useRef)(null),
						n = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/objectSelector/index.ts"),
				E = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				k = n("./src/reddit/components/PostContainer/index.m.less"),
				C = n.n(k);
			const _ = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(v.a)((e, {
						post: t
					}) => Object(x.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(x.i)(e, {
						postId: t.id
					}),
					pageType: e => Object(h.actionInfo)(e).pageType
				})),
				O = e => {
					const t = Object(E.d)(e.target, e.currentTarget),
						n = Object(E.b)(e.target, e.currentTarget, E.a.buttons);
					return "subreddit" !== t && n
				};
			class g extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: u,
						onPostContentClick: p,
						pageType: x,
						sendEvent: h,
						style: v,
						ref: E
					} = this.props, k = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => u && u(n, l, t, r, x))(n), p && O(n) && p(n, l)), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(C.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, n), _ = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || _ ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, k) : l.media && Object(b.E)(l.media) ? s.a.createElement(m, {
						postId: l.id
					}, k) : k
				}
			}
			t.a = _(Object(E.c)(Object(u.c)(g)))
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
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: o
							},
							sendEvent: s
						} = this.props, r = !!o;
						s(e ? Object(m.o)({
							postId: n,
							isFollowed: r
						}) : Object(m.g)({
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
					} = this.props, s = this.state.isHovered, i = n.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && s && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const x = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(c.y)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				i = n("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "f", (function() {
				return j
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				h = n.n(x);
			const f = r.a.wrapped(c.a, "Icon", h.a),
				v = r.a.wrapped(l.a, "Icon", h.a),
				E = r.a.wrapped(m.a, "Icon", h.a),
				k = r.a.wrapped(u.a, "Icon", h.a),
				C = r.a.wrapped(p.a, "Icon", h.a),
				_ = r.a.wrapped(b.a, "Icon", h.a),
				O = () => s.a.createElement(d.a, {
					name: "mod_mute",
					className: h.a.Icon
				}),
				g = r.a.wrapped(i.b, "CheckboxMenuItem", h.a),
				y = r.a.wrapped(a.b, "DropdownRow", h.a),
				j = r.a.div("ListContainer", h.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
				d = n("./src/reddit/components/PostLeftRail/index.tsx"),
				c = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: p = !1,
					toggleCheckbox: x = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					subreddit: v,
					isOverlay: E,
					isActionBarAnimationEnabled: k,
					postId: C,
					isForceSelected: _
				} = e, O = `upvote-button-${t.id}${E?"-overlay":""}`, {
					moderationPrompt: g
				} = t;
				return s.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, o && s.a.createElement(l.a, {
					className: b.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: x
				}), s.a.createElement(c.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: O,
					isActionBarAnimationEnabled: k,
					postId: C,
					isForceSelected: _,
					scoreClassName: b.a.score
				}), g && s.a.createElement(a.b, {
					rightOf: O
				}, "survey" === g ? s.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!E
				}) : s.a.createElement(r.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!E
				})))
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
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = n.n(d),
				l = n("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					border: e,
					small: t,
					...n
				}) => r.a.createElement(i.q, m({}, n, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				p = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? o.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : o.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? o.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : o.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...o
				}) => r.a.createElement(i.q, m({}, o, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(o.className, c.a.BaseButton),
					size: n ? i.c.S : i.c.M,
					text: p(e)
				}));
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: o = !1,
						isFullWidth: s = !1
					} = this.props, i = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: o,
						isFullWidth: s
					};
					return this.props.userIsSubscriber ? r.a.createElement(b, m({}, i, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(u, m({}, i, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(o.c)(r.a))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return I
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				u = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				g = n.n(O);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(c.a)(g.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: g.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: g.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: g.a.errorMsg
				}, e.errorMsg || o.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, y({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(h.q, {
					className: g.a.bottomButton,
					kind: h.a.Button,
					priority: h.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(d.c)({
					hideNSFWPref: C.C,
					nightmode: C.W
				}),
				I = Object(i.b)(w)(e => r.a.createElement("div", {
					className: Object(c.a)(g.a.communityItemContainer, {
						[g.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(E.a, {
					className: g.a.communityItemExpandCenter,
					widthRight: x.t
				}, r.a.createElement("div", {
					className: g.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: g.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(g.a.defaultCommunityIcon, {
						[g.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: g.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: g.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), r.a.createElement("div", {
					className: g.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: g.a.subscriberCount
				}, o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: g.a.nsfwFlair,
					flair: {
						type: k.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(c.a)(g.a.communityCta, g.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(h.q, {
					className: Object(c.a)(g.a.communityCta, {
						[g.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: g.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === o.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === o.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
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
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(s.c)({
				userIsSubscriber: i.hb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			}));
			const o = "ModerationPage--Modal--AddAward",
				s = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
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
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = i.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
				}) => {
					const i = Object(a.b)(t),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						c = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, c)
				},
				p = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
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
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, n, s) => r => ({
					source: "report_prompt",
					noun: n,
					action: s,
					subreddit: o.subredditByName(r, e),
					post: o.post(r, t)
				}),
				r = (e, t, n, s) => r => ({
					source: "report_survey",
					noun: n,
					action: s,
					subreddit: o.subredditByName(r, e),
					post: o.post(r, t)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
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
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const d = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(s.a)(o.pb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.3e5dae63c276b46fe7bc.js.map