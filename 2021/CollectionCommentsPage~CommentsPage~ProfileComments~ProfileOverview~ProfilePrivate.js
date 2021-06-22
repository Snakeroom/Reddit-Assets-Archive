// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.72d1f4c170c992caff27.js
// Retrieved at 6/22/2021, 6:40:05 PM by Reddit Dataminer v1.0.0
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						f = !a && !m && !u && !p && /linux/i.test(t),
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
					} : a ? s = {
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
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && E && (s.version = E)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !a && !s.silk ? !s.windowsphone && r ? (s[r] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : _ ? (s.xbox = e, s.osname = "Xbox") : x ? (s.windows = e, s.osname = "Windows") : f && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? O = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? O = (O = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? O = (O = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? O = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? O = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? O = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? O = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (O = n(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (s.osversion = O);
					var y = !s.windows && O.split(".")[0];
					return k || c || "ipad" == r || a && (3 == y || y >= 4 && !C) || s.silk ? s.tablet = e : (C || "iphone" == r || "ipod" == r || a || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function a(e, o, s) {
					var a = n;
					"string" == typeof o && (s = o, o = void 0), void 0 === o && (o = !1), s && (a = t(s));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return o
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = r, n.check = function(e, t, n) {
					return !a(e, t, n)
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
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? o : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, s)
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
				return d
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
				a = n("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (o = (() => {})) => s => {
				const r = u(s.target, s.currentTarget),
					i = p(s.target, s.currentTarget);
				r && n && t && (m(s.target, s.currentTarget, l.anchors) ? n(t(e, r, i)) : n(n => {
					const o = t(e, r, i)(n);
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
						actionInfo: Object(a.previousPageActionInfo)(n, s)
					}
				})), m(s.target, s.currentTarget, l.anchorsAndButtons) && o(s)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: a,
						...d
					} = t, l = Object(o.useCallback)(c(a, r, n), [a, r, n]);
					return s.a.createElement(e, i({}, d, {
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
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			}));
			const o = "#FFF",
				s = "#FF4500",
				r = "#0079D3",
				a = "#46D160",
				i = {
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
					positive: a,
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
				c = {
					...i,
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
				return y
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
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
					if (!Object(h.K)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
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
						a = s.user.account ? s.user.account.displayText : null;
					r && a && (t(Object(f.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
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
					})), Object(c.d)())
				}, y = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (n(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(s(), e, t)).ok || n(Object(f.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(c.d)())
				}, g = e => async (t, n, {
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
				}, j = (e, t, n) => async (r, a, {
					gqlContext: i
				}) => {
					const c = Object(x.a)(a(), {
						commentId: e
					});
					if (!c) return;
					const l = n === s.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) r(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(c.userReports, t, l)
						}
					}));
					else {
						const e = Object(d.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, I = (e, t, n) => async (o, r, {
					apiContext: i
				}) => {
					const c = r(),
						d = c.features.comments.models[e];
					if (!d) return;
					const l = d.postId,
						u = c.postStickiedComments.data[l],
						p = s.g[t];
					o(Object(f.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.E.ADMIN,
							isMod: t === s.E.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && o(Object(f.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, p, n || null)).ok ? n && o(_({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
							sort: s.s.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(f.i)({
						[e]: {
							distinguishType: d.distinguishType,
							isAdmin: d.isAdmin,
							isMod: d.isMod,
							isStickied: d.isStickied
						}
					})), o(Object(f.i)({
						[u]: {
							isStickied: c.features.comments.models[u].isStickied
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
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !s && r.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), r.a.createElement(i.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && r.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
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
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
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
			}) => s.a.createElement(a.a, d({
				className: Object(r.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/moderation.ts"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
				_ = Object(a.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				O = Object(r.b)(_, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(i.a)(t.id)),
					onLockComment: () => e(Object(i.c)(t.id)),
					onRemoveComment: () => e(Object(i.e)(t.id, !1)),
					onSpamComment: () => e(Object(i.e)(t.id, !0)),
					onShowComment: () => e(Object(i.d)(t.id))
				})),
				y = Object(c.a)(C),
				g = O(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return s.a.createElement(y, {
						isOpen: n,
						tooltipId: l
					}, s.a.createElement(k, {
						onApproveComment: () => {
							o(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), d(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = g
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/moderatorPermissions.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				O = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				g = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				w = n.n(I);
			const T = Object(x.t)(),
				N = e => `Distinguish--Dropdown--${e}`,
				M = Object(i.c)({
					currentUser: k.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(f.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(E.b)(N(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(x.g)(e, t) || Object(v.k)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: x.Q
				}),
				A = Object(a.b)(M, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, o) => e(Object(m.b)(t.id, n, o)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: N(t.id)
					}))
				}));
			t.a = T(A(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: s,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: x,
				onShowComment: f,
				onSpamComment: v,
				onToggleDistinguishDropdown: E,
				sendEvent: k,
				...I
			}) => {
				const T = Object(p.b)(t),
					N = t.isApproved && T,
					M = !t.isRemoved || t.bannedBy === d.k,
					A = a,
					S = e => k(Object(h.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || T) && r.a.createElement(j.a, {
					text: N ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), S("approve")
					}
				}, r.a.createElement(C.a, {
					className: w.a.icon
				})), M && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: t.bannedBy === d.k ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						x(), t.bannedBy === d.k ? S("confirm_remove") : S("remove")
					}
				}, r.a.createElement(O.a, {
					className: w.a.icon
				})), r.a.createElement(j.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), S("spam")
					}
				}, r.a.createElement(y.a, {
					className: w.a.icon
				}))), r.a.createElement(j.a, {
					text: t.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), S(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(_.a, {
					className: w.a.icon
				})), A && r.a.createElement(j.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						f()
					}
				}, r.a.createElement(g.a, {
					className: Object(c.a)(w.a.icon, w.a.Show)
				})))
			}), "CommentModToolsFlatlist", w.a)))
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
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
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
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
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
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
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
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/actions/gold/powerups.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/helpers/trackers/powerups.ts"),
				x = n("./src/reddit/components/AwardBadges/index.tsx"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				f = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				E = n.n(v);
			const k = e => {
				const t = Object(a.e)(f.d),
					{
						className: n,
						comment: o,
						isAuthorDeleted: s,
						isLivestreaming: i,
						isStrong: c,
						style: d
					} = e;
				return r.a.createElement(h.a, {
					className: Object(m.a)(E.a.commentAuthorLink, n),
					author: o.author,
					isAdmin: o.isAdmin,
					isAdminEmeritus: o.distinguishType === u.E.ALUMNI_ADMIN,
					isAuthorDeleted: s,
					isLivestreaming: i,
					isMod: o.isMod,
					isOp: o.isOp,
					isStrong: c,
					isUnstyled: t,
					style: d
				}, o.author)
			};
			var C = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				_ = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = n("./src/reddit/components/Flair/index.tsx"),
				y = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/PostTopMeta/index.tsx"),
				j = n("./src/reddit/controls/MetaData/index.tsx"),
				I = n("./src/reddit/helpers/flair.ts"),
				w = n("./src/reddit/helpers/trackers/userFlair.ts"),
				T = n("./src/reddit/models/Comment/index.ts"),
				N = n("./src/reddit/selectors/gold/powerups/index.ts"),
				M = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				A = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				F = n.n(S);
			const B = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				renderedInOverlay: a
			}) => r.a.createElement(A.b, {
				className: Object(m.a)(F.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: a ? g.c.Lightbox : void 0
			}, r.a.createElement(M.b, {
				ignore: Object(T.f)(n) || !!n.distinguishType && n.distinguishType !== u.E.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(k, {
				className: e,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				isAuthorDeleted: Object(T.f)(n)
			})));
			var D = n("./src/config.ts"),
				P = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`,
				R = () => o.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				H = () => o.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				U = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				W = () => o.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				V = () => o.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var X = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				z = n.n(X);
			const Q = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const s = Object(a.d)(),
					i = () => s(Object(l.h)({
						tooltipId: c
					})),
					c = L("CommentTopMeta--cakeday--", t, n),
					d = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(m.a)(z.a.cakedayIcon, e),
					src: `${D.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: d,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(P.c, {
					tooltipId: c,
					text: d
				}))
			};
			var G = n("./src/lib/addQueryParams/index.ts"),
				J = n("./src/lib/humanizeDateTime/index.ts"),
				Z = n("./src/lib/timeAgo/index.ts"),
				Y = n("./src/reddit/actions/comment/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						renderedInOverlay: s
					} = e, i = Object(a.d)(), c = L("CommentTopMeta--Created--", n.id, s), d = () => i(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(G.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							K(i, n.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Z.d)(n.created, {
						noPostfix: o,
						shortenedUnit: o
					}), r.a.createElement(P.c, {
						tooltipId: c,
						text: Object(J.a)(n.created)
					}))
				},
				K = (e, t) => {
					window.addEventListener("focus", (function n() {
						$(e, t, n)
					}))
				},
				$ = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(Y.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(Y.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var ee = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = () => r.a.createElement(j.a, {
				className: te.a.crowdControlText
			}, ne._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var se = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				re = n.n(se);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ie = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(j.a, {
				className: re.a.editedText
			}, ae._("edited {time}", [ae._param("time", Object(Z.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ce = n("./src/reddit/helpers/isRemoved.ts"),
				de = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				le = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				me = n("./src/reddit/icons/fonts/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				be = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				xe = n("./src/reddit/icons/fonts/Report/index.tsx"),
				he = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				fe = n("./src/reddit/models/AutomatedReporting/index.ts"),
				ve = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				Ee = n.n(ve);
			const ke = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					c = e => () => i(Object(l.f)({
						tooltipId: e
					})),
					d = () => i(Object(l.i)()),
					u = t => L(t, e.id, s),
					p = u("CommentTopMeta--Automod--"),
					b = u("CommentTopMeta--Approve--"),
					x = u("CommentTopMeta--Remove--"),
					h = u("CommentTopMeta--Report--"),
					f = u("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(fe.b)(e.bannedBy),
					E = c(x);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.a, {
					className: Ee.a.approveIcon,
					desc: Object(de.a)(e),
					id: b,
					onMouseEnter: c(b),
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: b,
					text: Object(de.a)(e)
				})), Object(ce.a)(e) && !v && r.a.createElement(r.a.Fragment, null, r.a.createElement(be.a, {
					className: Ee.a.removeIcon,
					desc: Object(de.c)(e),
					id: x,
					onMouseEnter: E,
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: x,
					text: Object(de.c)(e)
				})), Object(ce.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: Ee.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ce.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && r.a.createElement("a", {
					className: Ee.a.removalReason,
					onMouseEnter: E,
					onMouseLeave: d
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(pe.a, {
					className: Ee.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(he.a, {
					className: Ee.a.spamIcon,
					desc: Object(de.e)(e),
					id: f,
					onMouseEnter: c(f),
					onMouseLeave: d,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(P.c, {
					tooltipId: f,
					text: Object(de.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(me.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(Ee.a.automoderatorIcon, {
						[Ee.a.removed]: !!e.bannedBy
					}),
					"aria-label": de.b,
					id: p,
					key: p,
					onMouseEnter: c(p),
					onMouseLeave: d
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(P.c, {
					tooltipId: p,
					text: de.b
				}), Object(le.a)(e) && r.a.createElement(xe.a, {
					className: Ee.a.reportIcon,
					desc: Object(de.d)(e.numReports),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: d,
					isFilled: !0
				}), Object(le.a)(e) && r.a.createElement(P.c, {
					tooltipId: h,
					text: Object(de.d)(e.numReports)
				}), v && r.a.createElement("a", {
					className: Ee.a.removalReason
				}, o.fbt._("• Removed by the Automated {filterName}", [o.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var Ce, _e = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(Ce || (Ce = {}));
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ye = n.n(Oe);
			const ge = {
					[Ce.Admin]: {
						color: _e.b,
						label: o.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: R
					},
					[Ce.Mod]: {
						color: _e.c,
						label: o.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => U(e.subredditDisplayText)
					},
					[Ce.Op]: {
						color: _e.a,
						label: o.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: W
					},
					[Ce.AlumniAdmin]: {
						color: _e.b,
						label: o.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: H
					},
					[Ce.Contractor]: {
						color: _e.a,
						label: o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: V
					}
				},
				je = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? Ce.Admin : e.isMod ? Ce.Mod : e.isOp ? Ce.Op : e.distinguishType === u.E.ALUMNI_ADMIN ? Ce.AlumniAdmin : e.authorIsContractor ? Ce.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === Ce.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						label: i,
						tooltipTemplate: c
					} = ge[n], d = L(o, e.comment.id, e.renderedInOverlay), p = c(e), b = () => t(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(ye.a.role, e.className),
						style: {
							color: s
						},
						id: d,
						onMouseEnter: b,
						onMouseLeave: b
					}, i), r.a.createElement(P.c, {
						tooltipId: d,
						text: p
					}))
				};
			var Ie = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				we = n.n(Ie);
			const {
				fbt: Te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ne = () => r.a.createElement(j.a, {
				className: we.a.stickiedText
			}, Te._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Me = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ae = n.n(Me);
			const Se = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: s,
					flair: i,
					ignoreLock: d,
					isLivestreaming: l,
					renderedInOverlay: u,
					subredditDisplayText: p,
					renderContractorBadge: b
				} = e, h = Object(c.a)(), v = s.subredditId, E = Object(a.e)(e => Object(N.f)(e, {
					subredditId: v
				}) && Object(f.h)(e));
				if (s.isDeleted) return r.a.createElement("div", {
					className: Object(m.a)(Ae.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Ae.a.authorLine
				}, r.a.createElement("span", {
					className: Ae.a.metaText
				}, s.deletedBy === T.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(j.c, {
					className: Ae.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Ae.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: u
				})));
				return r.a.createElement("div", {
					className: Object(m.a)(Ae.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Ae.a.authorLine
				}, !Object(T.f)(s) && r.a.createElement(_.b, {
					className: Ae.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: s.subredditId,
					userId: s.authorId,
					uniqueIdentifier: s.id
				}), r.a.createElement("div", {
					className: Ae.a.baselineItem
				}, r.a.createElement(B, {
					authorClassName: Ae.a.author,
					comment: s,
					isLivestreaming: l,
					renderedInOverlay: u
				})), n && r.a.createElement(oe, null), r.a.createElement(je, {
					className: Ae.a.role,
					comment: s,
					subredditDisplayText: p,
					renderContractorBadge: b,
					renderedInOverlay: u
				}), s.isAuthorCakeday ? r.a.createElement(Q, {
					className: Ae.a.cakeDay,
					commentId: s.id,
					renderedInOverlay: u
				}) : !Object(T.f)(s) && E && r.a.createElement(C.a, {
					className: Ae.a.achievementFlair,
					subredditId: s.subredditId,
					userId: s.authorId,
					onHover: () => {
						h(Object(w.e)(s.id, s.subredditId, s.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(y.a, {
					className: Ae.a.cryptoPoints,
					contentId: s.id,
					subredditId: s.subredditId,
					userId: s.authorId,
					username: s.author
				}), r.a.createElement(j.c, {
					className: Ae.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Ae.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: u
				}), s.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.c, {
					className: Ae.a.separator
				}), r.a.createElement(Ne, null)), s.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.c, {
					className: Ae.a.separator
				}), r.a.createElement(ie, {
					compact: !0,
					editedAt: s.editedAt
				})), r.a.createElement(ke, {
					comment: s,
					ignoreLock: d,
					renderedInOverlay: u
				}), r.a.createElement(x.a, {
					thing: s,
					tooltipType: u ? g.c.Lightbox : void 0
				})), i && !Object(I.o)(i) && r.a.createElement("span", {
					className: Ae.a.userFlairLine
				}, r.a.createElement(O.b, {
					className: Ae.a.flair,
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var Fe = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Be = n("./src/reddit/selectors/economics.ts"),
				De = n("./src/reddit/models/Flair/index.ts"),
				Pe = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				Le = n("./src/reddit/icons/fonts/helpers.tsx"),
				Re = n("./src/reddit/icons/fonts/Op/index.m.less"),
				He = n.n(Re);
			var Ue = p.a.wrapped(e => r.a.createElement("i", {
					className: `${Object(Le.b)("author",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(Le.a, null, e.desc)), "OpIcon", He.a),
				We = n("./src/reddit/selectors/subreddit.ts"),
				Ve = n("./src/reddit/selectors/userFlair.ts"),
				Xe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ze = n.n(Xe);

			function Qe() {
				return (Qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ge = p.a.wrapped(O.b, "RightPositionedAuthorFlair", ze.a),
				Je = p.a.wrapped(Pe.a, "AdminIcon", ze.a),
				Ze = p.a.div("AdminEmeritus", ze.a),
				Ye = p.a.wrapped(Ue, "OpIcon", ze.a),
				qe = p.a.wrapped(Pe.a, "ContractorIcon", ze.a),
				Ke = p.a.span("DeletedText", ze.a),
				$e = p.a.wrapped(j.a, "MetaSeparator", ze.a),
				et = e => (t, {
					comment: n,
					renderedInOverlay: o
				}) => L(e, n.id, o),
				tt = Object(a.b)(() => Object(i.c)({
					adminTooltipId: et("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: et("CommentTopMeta--AdEm--"),
					contractorTooltipId: et("CommentTopMeta--Contractor--"),
					gildedTooltipId: et("CommentTopMeta--Gold--"),
					modTooltipId: et("CommentTopMeta--Mod--"),
					opTooltipId: et("CommentTopMeta--OP--"),
					topSupporterTooltipId: et("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Be.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(We.I)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ve.d)(e, {
						subredditId: t.subredditId
					}),
					isCommentHeaderRedesignEnabled: f.d
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(d.d)("comment_top_supporter_badge"))
				}));
			t.a = tt(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					children: o,
					className: s,
					collapsed: a,
					collapsedBecauseCrowdControl: i,
					comment: d,
					commentsPageKey: l,
					contractorTooltipId: u,
					compact: p,
					flair: h,
					flairPosition: f,
					hasBadges: v,
					isCommentHeaderRedesignEnabled: E,
					isLivestreaming: k,
					isPostComment: C,
					ignoreFlairPosition: I,
					ignoreLock: w,
					modTooltipId: N,
					onHideTooltip: M,
					onShowTooltip: A,
					opTooltipId: S,
					openPowerupsModal: F,
					renderContractorBadge: D,
					renderedInOverlay: P,
					subredditDisplayText: L,
					topSupporterTooltipId: R,
					userHasNft: H
				} = e, U = Object(c.a)(), W = r.a.createElement(r.a.Fragment, null, r.a.createElement(Fe.b, {
					commentId: d.id
				}), r.a.createElement(Fe.a, {
					commentId: d.id,
					commentsPageKey: l
				}));
				if (C && E) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Se, {
					className: Object(m.a)(s, {
						[ze.a.collapsed]: a
					}),
					collapsedBecauseCrowdControl: i,
					comment: d,
					flair: h || null,
					ignoreLock: w,
					isLivestreaming: k,
					renderedInOverlay: P,
					subredditDisplayText: L,
					renderContractorBadge: !!D
				}), W);
				if (d.isDeleted) return r.a.createElement(nt, Qe({}, e, {
					className: Object(m.a)(s, ze.a.container, {
						[ze.a.collapsed]: a
					})
				}));
				if (a) return r.a.createElement(ot, Qe({}, e, {
					className: Object(m.a)(s, ze.a.container, {
						[ze.a.collapsed]: a
					})
				}));
				const V = !I && f === De.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(s, ze.a.container, {
						[ze.a.collapsed]: a,
						[ze.a.hasBadges]: v,
						[ze.a.liveStreaming]: k
					}),
					"data-testid": "comment-top-meta"
				}, h && V && r.a.createElement(O.b, {
					flair: h,
					forceSmallEmojis: p
				}), !Object(T.f)(d) && r.a.createElement(_.b, {
					className: ze.a.userBadges,
					showAddCustom: !0,
					subredditId: d.subredditId,
					userId: d.authorId,
					uniqueIdentifier: d.id
				}), o && o, r.a.createElement(B, {
					authorClassName: H ? ze.a.NftAuthor : void 0,
					comment: d,
					isLivestreaming: k,
					isStrong: !!p,
					renderedInOverlay: P
				}), i && r.a.createElement(oe, null), i && r.a.createElement(j.c, {
					className: ze.a.metaText,
					key: "crowdControlSeparator"
				}), h && !V && r.a.createElement(Ge, {
					flair: h,
					forceSmallEmojis: p
				}), !p && r.a.createElement(y.a, {
					className: ze.a.publicPoints,
					contentId: d.id,
					metaSeparator: r.a.createElement(j.c, {
						className: ze.a.metaText
					}),
					subredditId: d.subredditId,
					userId: d.authorId,
					username: d.author
				}), r.a.createElement(r.a.Fragment, null, W, !E && r.a.createElement(rt, {
					comment: d,
					compact: p,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: N,
					onHideTooltip: M,
					onShowTooltip: A,
					openPowerupsModal: () => {
						U(Object(b.q)("comment")), F()
					},
					opTooltipId: S,
					renderContractorBadge: D,
					renderedInOverlay: P,
					subredditDisplayText: L,
					topSupporterTooltipId: R
				}), E && r.a.createElement(je, {
					className: ze.a.authorRole,
					comment: d,
					subredditDisplayText: L,
					renderContractorBadge: !!D,
					renderedInOverlay: P
				})), !p && r.a.createElement(r.a.Fragment, null, !d.isDeleted && !C && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.b, {
					className: ze.a.metaText,
					isScoreHidden: d.isScoreHidden,
					score: d.score
				}), r.a.createElement(j.c, {
					className: ze.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(q, {
					key: "Created",
					className: ze.a.MetaLink,
					comment: d,
					renderedInOverlay: P
				}), d.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.c, {
					className: ze.a.separator
				}), r.a.createElement(Ne, null)), d.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.c, {
					className: ze.a.separator
				}), r.a.createElement(ie, {
					editedAt: d.editedAt
				}))), r.a.createElement(ke, {
					comment: d,
					ignoreLock: w,
					renderedInOverlay: P
				}), r.a.createElement(x.a, {
					thing: d,
					tooltipType: P ? g.c.Lightbox : void 0
				}))
			});
			const nt = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: a,
						renderedInOverlay: i
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Ke, null, a.deletedBy === T.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(q, {
						key: "Created",
						className: ze.a.MetaLink,
						comment: a,
						renderedInOverlay: i
					}), n && st({
						childrenInfo: t
					}))
				},
				ot = e => {
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
						isAuthorDeleted: Object(T.f)(t)
					})), r.a.createElement(j.b, {
						className: ze.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(j.c, {
						className: ze.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(q, {
						key: "Created",
						className: ze.a.MetaLink,
						comment: t,
						renderedInOverlay: s
					}), st({
						childrenInfo: o
					}))
				},
				st = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement($e, {
						className: ze.a.metaText
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
			class rt extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						renderedInOverlay: t,
						...n
					} = this.props;
					return r.a.createElement(s.Fragment, null, e.isAuthorCakeday && r.a.createElement(Q, {
						className: ze.a.cakeDay,
						commentId: e.id,
						renderedInOverlay: t
					}), e.isAdmin && r.a.createElement(Je, {
						desc: R(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isAdmin && at(n.adminTooltipId, R()), e.distinguishType === u.E.ALUMNI_ADMIN && r.a.createElement(Ze, {
						"aria-label": H(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), e.distinguishType === u.E.ALUMNI_ADMIN && at(n.adminEmeritusTooltipId, H()), e.isMod && r.a.createElement(me.a, {
						name: "mod",
						isFilled: !0,
						className: ze.a.ModeratorIcon,
						"aria-label": U(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}), e.isMod && at(n.modTooltipId, U(n.subredditDisplayText)), e.isOp && r.a.createElement(Ye, {
						desc: W(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isOp && at(n.opTooltipId, W()), n.renderContractorBadge && r.a.createElement(qe, {
						desc: V(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), n.renderContractorBadge && at(n.contractorTooltipId, V()))
				}
			}
			const at = (e, t) => r.a.createElement(P.c, {
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
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const b = i.a.div("DistinguishWrapper", p.a),
				x = i.a.wrapped(m.a, "Inline", p.a),
				h = i.a.wrapped(d.a, "RadioOff", p.a),
				f = i.a.wrapped(l.a, "RadioOn", p.a),
				v = e => s.a.createElement(x, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(f, null) : s.a.createElement(h, null), e.text),
				E = i.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: o,
						isUserEmployee: i,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return s.a.createElement(b, {
						className: t,
						style: n
					}, s.a.createElement(v, {
						onClick: () => u(r.E.NONE, null),
						selected: !d && !o,
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && s.a.createElement(v, {
						onClick: () => u(r.E.MODERATOR, null),
						selected: d && !l,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && s.a.createElement(v, {
						onClick: () => u(r.E.MODERATOR, !0),
						selected: d && l,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && s.a.createElement(v, {
						onClick: () => u(r.E.ADMIN, null),
						selected: o && !l,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && c && m && s.a.createElement(v, {
						onClick: () => u(r.E.ADMIN, !0),
						selected: o && l,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var k = Object(c.a)(E);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: c,
					isTopLevelComment: d,
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
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.E.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === r.E.ADMIN ? m("admin_distinguish") : i && e !== r.E.MODERATOR ? m("undistinguish") : n && e !== r.E.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				subredditLogo: "_1vh_JamIt2dZYY7uwMHHv8",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				m = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const o = Object(r.e)(e => Object(c.a)(e, {
						subredditId: t,
						userId: n
					})),
					l = Object(r.e)(e => Object(d.T)(e, {
						subredditId: t
					}));
				return s.a.createElement("div", {
					className: Object(a.a)(m.a.container, e)
				}, s.a.createElement("div", {
					className: m.a.header
				}, s.a.createElement(i.b, {
					className: m.a.subredditLogo,
					subredditOrProfile: l
				}), u._("{r/community} {=achievements}", [u._param("r/community", l.displayText), u._param("=achievements", s.a.createElement("span", {
					className: m.a.headerText
				}, u._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), s.a.createElement("div", {
					className: m.a.headerDelimiter
				}), s.a.createElement("div", {
					className: m.a.achievements
				}, o.map(e => !e.isLocked && s.a.createElement("div", {
					className: m.a.achievementItem,
					key: e.type
				}, s.a.createElement("div", {
					className: m.a.achievementImgWrapper
				}, s.a.createElement("img", {
					className: m.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), s.a.createElement("div", {
					className: m.a.achievementName
				}, s.a.createElement("span", null, e.name))))))
			};
			var b = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				x = n.n(b);
			const h = ({
					className: e,
					subredditId: t,
					userId: n,
					showPopupOnHover: o,
					onHover: i
				}) => {
					var d;
					const l = Object(r.e)(e => Object(c.c)(e, {
							subredditId: t,
							userId: n
						})),
						m = Object(r.e)(e => Object(c.d)(e, {
							subredditId: t,
							userId: n
						})),
						u = null === (d = Object(r.e)(e => Object(c.b)(e, {
							subredditId: t,
							userId: n
						}))) || void 0 === d ? void 0 : d.achievementTypes;
					if (!(!!l || !!m) || !u) return null;
					const b = (null == m ? void 0 : m.type) === (null == l ? void 0 : l.type) ? null : m,
						h = 1 + (b ? 1 : 0),
						v = (null == u ? void 0 : u.length) - h;
					return s.a.createElement("span", {
						className: Object(a.a)(x.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: i
					}, s.a.createElement(f, {
						achievement: b
					}), s.a.createElement(f, {
						achievement: l
					}), !!v && s.a.createElement("span", {
						className: x.a.hiddenAchievementsCount
					}, "+", v), o && s.a.createElement(p, {
						className: x.a.hoverPopup,
						subredditId: t,
						userId: n
					}))
				},
				f = ({
					achievement: e
				}) => e ? s.a.createElement("img", {
					alt: e.name,
					className: x.a.icon,
					src: e.icon.url
				}) : null
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
				a = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(m.a)(n)) return null;
				const o = n && n.eventInfo,
					i = Object(l.a)(n),
					u = o && Object(a.c)(o.eventStart, o.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, s.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, s.a.createElement(c.a, {
					post: n
				}), !i && u && s.a.createElement(d.a, {
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
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
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
				y = v.a.wrapped(x, "LiveIcon", f.a),
				g = v.a.div("LoadingState", f.a);
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
							s = new Date(e * i.Nb);
						let d;
						return o === r.a.Live || n ? a.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (o === r.a.Future ? d = Object(r.d)(e) ? a.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(s) : s.toLocaleDateString(void 0, {
							weekday: "long"
						}) : o === r.a.Past && (d = Object(r.d)(e) ? a.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(s)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s)}`)
					}(m, o, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						p = s.a.createElement(g, {
							className: e
						})
					}
					if (l) b = s.a.createElement(C, null, s.a.createElement(y, null), p);
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/components/ExpandoButton/index.m.less"),
				h = n.n(x);
			const f = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				v = (e, t = !1, n) => {
					const o = Object(c.a)(h.a.icon, h.a.hideOnHover);
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
					isExpanded: a,
					post: l,
					toggle: b,
					useMediaIcons: x
				} = e, f = n || l, E = s && !!n;
				return f.media && !(("rtjson" === f.media.type || "text" === f.media.type) && !Object(u.a)(f)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, h.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: b
				}, a ? r.a.createElement(p.a, {
					name: "collapse",
					className: h.a.icon
				}) : x ? r.a.createElement(r.a.Fragment, null, v(f.media && f.media.type, E, l), r.a.createElement(p.a, {
					name: "expand",
					className: Object(c.a)(h.a.icon, h.a.showOnHover)
				})) : r.a.createElement(p.a, {
					name: "expand",
					className: h.a.icon
				})) : f.source && f.source.url ? r.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, h.a.outer),
					"data-click-id": "expando_open",
					href: f.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(p.a, {
					name: "external_link",
					className: Object(c.a)(h.a.icon, h.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, h.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(f.permalink),
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
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), m = a.a.div("Placeholder", c.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
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
				} = e, [h, f] = Object(s.useState)(!0), v = Object(b.b)(n.id, x), E = Object(a.d)(), k = Object(p.a)(), C = Object(b.a)(n, x), _ = (e, o) => k(Object(u.a)(t, n.id, e, o));
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
						f(!1), _("close", "click"), E(Object(c.G)()), E(Object(c.T)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						E(Object(c.G)())
					}
				}, r.a.createElement("p", null, o.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, o.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), o.fbt._param("=community", r.a.createElement(i.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, o.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), _("report", "click"), void E(Object(d.c)(n.id)))
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
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
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
				} = e, [f, v] = Object(r.useState)(o.Survey), E = Object(x.b)(n.id, h), k = Object(i.d)(), C = Object(b.a)(), _ = Object(x.a)(n, h), O = (e, o) => C(Object(p.b)(t, n.id, e, o));
				Object(r.useEffect)(() => {
					_ && O("modal", "show")
				}, [_]);
				const y = e => {
					v(o.Closed), O("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), k(Object(l.c)(n.id, void 0, e))
				};
				if (!_) return null;
				let g = null;
				const j = {
					id: E,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(o.Closed), O("close", "click"), k(Object(d.G)())
					},
					onClickOutside: () => {
						k(Object(d.G)())
					}
				};
				switch (f) {
					case o.Survey:
						g = a.a.createElement(m.a, j, a.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(u.a, {
							onClick: () => {
								v(o.OffTopic), O("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(u.a, {
							onClick: () => {
								v(o.DontLike), O("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(u.a, {
							onClick: () => {
								v(o.BreaksRules), O("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case o.OffTopic:
						g = a.a.createElement(m.a, j, a.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case o.DontLike:
						g = a.a.createElement(m.a, j, a.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case o.BreaksRules:
						g = a.a.createElement(m.a, j, a.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", a.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", a.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), a.a.createElement(u.a, {
							onClick: () => y("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(u.a, {
							onClick: () => y("community")
						}, s.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case o.Closed:
				}
				return g
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(o || (o = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/Popup/index.m.less"),
				a = n.n(r);

			function i(e) {
				return s.a.createElement("button", {
					className: a.a.popupButton,
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
				a = n.n(r),
				i = n("./src/lib/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = a()(),
					onClose: n,
					onClickOutside: o,
					title: r,
					children: c
				} = e;
				return Object(i.a)(t, o), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: d.a.header
				}, s.a.createElement("span", {
					className: d.a.title
				}, r), s.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), c)
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
				a = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var m = s.a.memo(e => {
					const t = Object(o.useRef)(null),
						n = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						a = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, a), s.a.createElement("div", {
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
			class y extends s.a.Component {
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
						makePostContainerId: d,
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
								} = Object(a.t)(l, r);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(C.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), _ = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || _ ? s.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, k) : l.media && Object(b.E)(l.media) ? s.a.createElement(m, {
						postId: l.id
					}, k) : k
				}
			}
			t.a = _(Object(E.c)(Object(u.c)(y)))
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
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
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
					} = this.props, s = this.state.isHovered, a = n.isFollowed;
					let i = a ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && s && (i = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const x = Object(a.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
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
				}) : s.a.createElement(a.a, {
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
				return y
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "f", (function() {
				return j
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				i = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				h = n.n(x);
			const f = r.a.wrapped(d.a, "Icon", h.a),
				v = r.a.wrapped(l.a, "Icon", h.a),
				E = r.a.wrapped(m.a, "Icon", h.a),
				k = r.a.wrapped(u.a, "Icon", h.a),
				C = r.a.wrapped(p.a, "Icon", h.a),
				_ = r.a.wrapped(b.a, "Icon", h.a),
				O = () => s.a.createElement(c.a, {
					name: "mod_mute",
					className: h.a.Icon
				}),
				y = r.a.wrapped(a.b, "CheckboxMenuItem", h.a),
				g = r.a.wrapped(i.b, "DropdownRow", h.a),
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
				a = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = n("./src/reddit/components/PopupPortal/index.tsx"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
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
					moderationPrompt: y
				} = t;
				return s.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, o && s.a.createElement(l.a, {
					className: b.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: x
				}), s.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: O,
					isActionBarAnimationEnabled: k,
					postId: C,
					isForceSelected: _,
					scoreClassName: b.a.score
				}), y && s.a.createElement(i.b, {
					rightOf: O
				}, "survey" === y ? s.a.createElement(a.a, {
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
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
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
				}) => r.a.createElement(a.q, m({}, n, {
					priority: e ? a.b.Primary : a.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? a.c.S : a.c.M
				})),
				p = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? o.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : o.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
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
				}) => r.a.createElement(a.q, m({}, o, {
					priority: t ? a.b.Secondary : a.b.Plain,
					className: Object(l.a)(o.className, d.a.BaseButton),
					size: n ? a.c.S : a.c.M,
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
					} = this.props, a = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: o,
						isFullWidth: s
					};
					return this.props.userIsSubscriber ? r.a.createElement(b, m({}, a, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(u, m({}, a, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
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
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const d = r.a.div("WidgetBackground", c.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return w
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				u = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
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
				y = n.n(O);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(d.a)(y.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: y.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: y.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: y.a.errorMsg
				}, e.errorMsg || o.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(w, g({
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
					className: y.a.bottomButton,
					kind: h.a.Button,
					priority: h.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(c.c)({
					hideNSFWPref: C.C,
					nightmode: C.W
				}),
				w = Object(a.b)(I)(e => r.a.createElement("div", {
					className: Object(d.a)(y.a.communityItemContainer, {
						[y.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(E.a, {
					className: y.a.communityItemExpandCenter,
					widthRight: x.t
				}, r.a.createElement("div", {
					className: y.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: y.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(y.a.defaultCommunityIcon, {
						[y.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: y.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: y.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), r.a.createElement("div", {
					className: y.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: y.a.subscriberCount
				}, o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: y.a.nsfwFlair,
					flair: {
						type: k.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(d.a)(y.a.communityCta, y.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(h.q, {
					className: Object(d.a)(y.a.communityCta, {
						[y.a.showOnHover]: e.showTertiaryButtonOnHover
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
					className: y.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === o.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
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
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			}));
			const o = "ModerationPage--Modal--AddAward",
				s = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				a = 4,
				i = 1e4,
				c = .2,
				d = .1,
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
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
				}) => {
					const a = Object(i.b)(t),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						d = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, d)
				},
				p = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const o = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, a = r;
					return o ? s.a.createElement(t, a) : void 0 !== n ? s.a.createElement(n, a) : null
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
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
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
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(a);
			const c = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
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
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.72d1f4c170c992caff27.js.map