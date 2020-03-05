// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.ae36ecab2c45c07b9f1a.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
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
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						v = !r && !l && /macintosh/i.test(t),
						h = !i && !m && !u && !p && /linux/i.test(t),
						f = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !O && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, f ? (o.msedge = e, o.version = f) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? o = {
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
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? o = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, g && (o.version = g)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (o.version = g)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && g && (o.version = g)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : v ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : x ? (o.windows = e, o.osname = "Windows") : h && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = s(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var _ = !o.windows && j.split(".")[0];
					return O || d || "ipad" == r || i && (3 == _ || _ >= 4 && !y) || o.silk ? o.tablet = e : (y || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
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
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var n;
				return s(e, (function(e, s, o) {
					if (t(e, s, o)) return n = s, !1
				})), n
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
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFindKey.js"),
				o = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? n : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, o)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = b(o.target, o.currentTarget);
					p(o.target, o.currentTarget, u.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(d.previousPageActionInfo)(e)
					})), p(o.target, o.currentTarget, u.anchorsAndButtons) && n(o)
				}
			});

			function m(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, c({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, n)
						}))
					}
				}
				return Object(a.b)(t)
			}
			const u = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				p = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(g),
				y = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = y.a.div("Container", O.a),
				_ = y.a.div("PostMetaWrapper", O.a),
				k = y.a.wrapped(p.c, "PostTitle", O.a),
				w = y.a.div("FlatList", O.a),
				P = y.a.div("FlatItem", O.a),
				S = y.a.span("FlatListDotSpacer", O.a),
				C = y.a.wrapped(j, "LinkContainer", O.a),
				T = y.a.div("Content", O.a),
				I = y.a.div("ThumbnailContainer", O.a),
				L = Object(a.c)({
					isCurrentUserProfilePost: h.i,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== v.zb.TOPIC),
					language: f.O,
					post: h.M,
					shouldOpenPostInNewTab: f.S,
					subreddit: h.Y
				}),
				N = Object(r.b)(L);
			t.a = N(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: i,
					subreddit: a,
					language: d
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
						language: d,
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					l = t;
				return i && !i.media ? o.a.createElement(C, {
					className: l
				}, o.a.createElement(T, null, o.a.createElement(_, null, o.a.createElement(u.a, c)), M(i), i.source && o.a.createElement(b.a, {
					post: i
				}), A(e)), F(e)) : o.a.createElement(j, {
					className: l
				}, o.a.createElement(_, null, o.a.createElement(u.a, c)), M(i), B(e), A(e))
			});
			const M = e => o.a.createElement(k, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return o.a.createElement("div", null, o.a.createElement(m.a, E({}, n, {
						className: O.a.mediaContainer
					})))
				},
				A = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return o.a.createElement(w, null, o.a.createElement(P, null, Object(d.b)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), o.a.createElement(S, null), o.a.createElement(P, null, R(e)))
				},
				R = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: r
					} = s;
					return o.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(d.b)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				F = e => o.a.createElement(I, null, o.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				j = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				w = s("./src/reddit/icons/fonts/Report/index.tsx"),
				P = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				S = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				C = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				T = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = s("./src/reddit/components/PostBadges/index.m.less"),
				L = s.n(I);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => o.a.createElement("span", N({
					className: L.a.removalReason
				}, e), e.children),
				B = Object(c.d)("posts.archived"),
				A = Object(c.d)("modTools.commentsLocked"),
				R = Object(c.d)("modTools.moderatorOf"),
				F = Object(c.d)("modTools.stickiedPost"),
				H = Object(c.d)("modTools.pinnedPost"),
				W = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				G = Object(v.t)({
					isProfilePostListing: v.H,
					isSubreddit: v.I,
					pageLayer: e => e
				}),
				X = Object(d.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.s)(e, {
							postId: s.id
						})
					},
					modModeEnabled: v.N
				}),
				K = Object(r.b)(X, (e, t) => ({
					onHideTooltip: () => e(Object(u.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(u.f)({
						tooltipId: t
					}))
				}));
			t.a = G(K(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: r,
					inSubredditOrProfile: d,
					isCompactPinnedPost: c,
					isPinned: u,
					isProfilePostListing: v,
					language: y,
					modModeEnabled: I,
					onHideTooltip: G,
					onOpenRemovalReasonModal: X,
					onShowTooltip: K,
					post: V,
					tooltipType: U
				} = e;
				const z = {
						caretOnTop: !1
					},
					D = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === x.a.SUBREDDIT,
					J = W("Approve", V.id, U),
					q = W("Archived", V.id, U),
					Z = W("Automod", V.id, U),
					Q = W("Lock", V.id, U),
					Y = W("Mod", V.id, U),
					$ = W("Remove", V.id, U),
					ee = W("Report", V.id, U),
					te = W("Spam", V.id, U),
					se = W("Sticky", V.id, U),
					ne = W("Pinned", V.id, U);
				return o.a.createElement("div", {
					className: t
				}, d && s && V.distinguishType === m.C.MODERATOR && o.a.createElement(n.Fragment, null, o.a.createElement(T.a, {
					className: L.a.modIcon,
					desc: R(y, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: K(Y),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: Y,
					text: R(y, {
						displayText: s
					})
				}, z))), V.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: L.a.archivedIcon,
					desc: B(y),
					id: q,
					onMouseEnter: K(q),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: q,
					text: B(y)
				}, z))), V.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: L.a.lockIcon,
					desc: A(y),
					id: Q,
					onMouseEnter: K(Q),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: Q,
					text: A(y)
				}, z))), r && Object(O.k)(V) && !c && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: L.a.stickyIcon,
					desc: F(y),
					id: se,
					onMouseEnter: K(se),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: se,
					text: F(y)
				}, z))), v && u && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: L.a.stickyIcon,
					desc: H(y),
					id: ne,
					onMouseEnter: K(ne),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: ne,
					text: H(y)
				}, z))), (V.isApproved || V.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(E.a, {
					className: L.a.approveIcon,
					desc: Object(f.a)(y, V),
					id: J,
					onMouseEnter: K(J),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: J,
					text: Object(f.a)(y, V)
				}, z))), Object(h.a)(V) && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: L.a.removeIcon,
					desc: Object(f.c)(y, V),
					id: $,
					onMouseEnter: K($),
					onMouseLeave: G
				}), D && o.a.createElement(b.a, {
					className: L.a.addRemovalReason,
					onClick: X,
					text: Object(a.c)("Add a removal reason")
				}), (V.modRemovalReason || V.modNote) && o.a.createElement(M, {
					onMouseEnter: K($),
					onMouseLeave: G
				}, o.a.createElement(i.c, null, "Removal reason")), o.a.createElement(p.c, N({
					tooltipId: $,
					text: Object(f.c)(y, V)
				}, z))), V.bannedBy && V.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(P.a, {
					className: L.a.spamIcon,
					desc: Object(f.e)(y, V),
					id: te,
					onMouseEnter: K(te),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: te,
					text: Object(f.e)(y, V)
				}, z))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(C.a, {
					className: Object(l.a)(L.a.automoderator, !!V.bannedBy && L.a.isRemoved),
					desc: Object(f.b)(y),
					id: Z,
					onMouseEnter: K(Z),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: Z,
					text: Object(f.b)(y)
				}, z))), Object(g.a)(V) && !I && o.a.createElement(n.Fragment, null, o.a.createElement(w.a, {
					className: L.a.reportIcon,
					desc: Object(f.d)(y, V.numReports),
					id: ee,
					onMouseEnter: K(ee),
					onMouseLeave: G
				}), o.a.createElement(p.c, N({
					tooltipId: ee,
					text: Object(f.d)(y, V.numReports)
				}, z))))
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
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				d = s("./src/reddit/components/GildModal/Loader.tsx"),
				c = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				u = s("./src/reddit/selectors/video.ts"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				x = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(x),
				h = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const O = h.a.div("WrappedPost", v.a),
				y = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(u.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: n
						} = t;
						const o = Object(a.b)(n.postId, s);
						return Object(m.c)(e, o)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(u.e)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(u.c)(e, {
							postId: s.id
						})
					}
				}),
				E = Object(c.a)(y),
				j = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							pixelPostHasEnteredView: t,
							pixelPostHasExitedView: s,
							afterClickTracking: n,
							buffering: r,
							children: a,
							className: c,
							continuousViewingStartedAt: m,
							gildModalIsOpen: u,
							makePostContainerId: b,
							playing: x,
							post: v,
							onClick: h,
							onPostContentClick: y,
							onPostViewable: E,
							isOverlay: _
						} = e,
						k = g(e, ["pixelPostHasEnteredView", "pixelPostHasExitedView", "afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						w = o.a.createElement(O, f({}, k, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (n(() => h && h(e, v))(e), y && j(e) && y(e, v))
							},
							className: Object(p.a)(c, "Post ".concat(v.id), {
								promotedlink: v.isSponsored
							}),
							id: b ? b(v.id) : v.id,
							tabIndex: -1
						}), a, u && o.a.createElement(d.a, null)),
						P = !!v.media && v.media.type === l.n.VIDEO;
					return v.isSponsored || P ? o.a.createElement(i.a, {
						onViewable: e => E(v, e),
						pixelPostHasEnteredView: e => t(v, e),
						pixelPostHasExitedView: e => s(v, e),
						children: w,
						trackVideoMetrics: P && !r && x,
						continuousViewingStartedAt: m
					}) : w
				}
			}
			t.a = E(Object(b.c)(_))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(i.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				g = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: f,
					isOverlay: O,
					isTopicPage: y,
					language: E,
					post: j,
					shouldShowSubscribeButton: _,
					subredditOrProfile: k,
					tooltipType: w
				} = e, P = !!y;
				return o.a.createElement("div", {
					className: g.a.metaContainer
				}, !n && !j.isSponsored && k && o.a.createElement(a.a, {
					postId: j.id,
					subredditName: k.name
				}, o.a.createElement(u.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: k.url
				}, k.displayText)), k && k.isQuarantined && o.a.createElement(m.a, null), !n && !j.isSponsored && k && _ && !f && o.a.createElement(p.a, {
					getEventFactory: e => Object(v.f)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: k.name,
						type: Object(h.e)(k) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: j.id,
					small: !0
				}), !n && !j.isSponsored && o.a.createElement(x.b, null), !n && !j.isSponsored && o.a.createElement(d.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), o.a.createElement(l.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: j,
					tooltipType: w
				}), o.a.createElement(c.a, {
					displayText: k ? k.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: j,
					tooltipType: w
				}), k && o.a.createElement(i.a, {
					className: g.a.donationAmount,
					contentId: j.id,
					subredditId: k.id
				}), !P && o.a.createElement(r.a, {
					hideCta: s,
					isOverlay: O,
					thing: j,
					tooltipType: w
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
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				u = s.n(m);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(n.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.j)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", u.a);
			t.a = p(Object(a.a)(b))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = s.n(a);
			const c = i.a.span("TextWrapper", d.a),
				l = i.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(c, null, e.text, " ")), "Button", d.a),
				m = i.a.wrapped(l, "ApproveButton", d.a),
				u = i.a.wrapped(l, "RemoveButton", d.a),
				p = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/components/PostMedia/index.tsx"),
				c = s("./src/reddit/components/PostTitle/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/getShortenedLink.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/opener/index.ts"),
				x = s("./src/reddit/actions/ads/index.ts"),
				v = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/constants/adEvents.ts"),
				g = s("./src/reddit/contexts/InsideOverlay.tsx"),
				O = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = s("./src/reddit/helpers/adCount/index.ts"),
				E = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				k = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				P = s("./src/reddit/models/Theme/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				I = s.n(T);
			const L = p.a.wrapped(e => i.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", I.a);
			class N extends i.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(C.F)(e.media) || Object(C.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case o.fb.IMAGE:
							return i.a.createElement(L, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var M = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				B = s.n(M);
			s.d(t, "SidebarNativeAd", (function() {
				return Q
			}));
			const A = p.a.wrapped(l.d, "PostTopMeta", B.a),
				R = p.a.div("BannerAdContainer", B.a),
				F = e => {
					let {
						children: t
					} = e;
					return i.a.createElement("div", null, t)
				},
				H = p.a.div("PromotedPostContainer", B.a),
				W = p.a.wrapped(k.a, "OutboundLinkIcon", B.a),
				G = p.a.div("SourceLinkWrapper", B.a),
				X = p.a.div("TopLine", B.a),
				K = p.a.wrapped(c.c, "PostTitle", B.a),
				V = p.a.div("PostMediaWrapper", B.a),
				U = p.a.div("BackgroundWrapper", B.a),
				z = p.a.wrapped(h.a, "PostContainer", B.a),
				D = 640,
				J = e => Object(_.a)(e.title, 100),
				q = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(j.a)(Object(E.a)(e), w.a.actionIcon, w.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				Z = e => ({
					background: Object(P.g)(Object(S.a)(e).body, null, null) || ""
				});
			class Q extends i.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, f.a.Click), t.source ? t.source.outboundUrl ? Object(b.d)(t.source.outboundUrl, b.c.BLANK) : Object(b.d)(t.source.url, b.c.BLANK) : Object(b.d)(t.permalink, b.c.BLANK)
					}
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: r
					} = this.props;
					let a, m, p = {};
					return e.isBlank ? (a = F, m = null) : e.isMediaOnly ? (a = R, p = {
						"data-before-content": Object(n.a)("en", "sidebar.sponsored")
					}, m = i.a.createElement(N, {
						post: e
					})) : (a = H, m = i.a.createElement(U, {
						style: Z(this.props)
					}, i.a.createElement(X, null, i.a.createElement(A, {
						tooltipType: r ? l.c.Lightbox : void 0,
						language: o.z,
						post: e,
						showTimestamp: !1
					})), i.a.createElement(K, {
						post: e,
						size: c.b.Large,
						format: J
					}), e.source && i.a.createElement(G, null, i.a.createElement(O.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(u.a)(e), i.a.createElement(W, null))), i.a.createElement(V, null, e.media && i.a.createElement(d.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: D,
						shouldLoad: !0
					})))), i.a.createElement(a, p, i.a.createElement(z, {
						className: t,
						isOverlay: r,
						post: e,
						onClick: this.onClick,
						eventFactory: s,
						style: q(this.props)
					}, m))
				}
			}
			const Y = Object(a.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, s) => {
					e(Object(v.y)(t, s))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: s,
						placementIndex: n,
						isOverlay: o
					} = t;
					e(Object(x.c)(Object(y.a)(s, !!o, n)))
				}
			}));
			t.default = Y(Object(g.b)(Object(m.a)(Q)))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(c),
				m = s("./src/lib/lessComponent.tsx");
			const u = m.a.wrapped(d.a, "OutboundLinkIcon", l.a),
				p = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: d,
					isSponsored: c
				} = s;
				return d ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: d.url,
					isSponsored: c,
					source: d
				}, Object(i.a)(s), o.a.createElement(u, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				u = s.n(m),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return o.a.createElement(r, x({}, n, {
						className: Object(p.a)(n.className, {
							[u.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", u.a),
				f = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = n ? a.f : a.i;
					return o.a.createElement(i, x({}, r, {
						className: Object(p.a)(r.className, {
							[u.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", u.a),
				g = b.a.wrapped(d.a, "Checkmark", u.a),
				O = b.a.wrapped(c.a, "Plus", u.a),
				y = b.a.div("ButtonSpacer", u.a);
			class E extends o.a.Component {
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
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: r,
							onUnsubscribe: i,
							postId: a,
							sendEvent: d,
							small: c = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: E,
							onSubscriptionsRequested: j
						} = e,
						_ = v(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						k = this.state.isHovered;
					let w = m ? "subscribed" : "subscribe";
					m && k && (w = "unsubscribe");
					const P = Object(l.a)({
						type: s.type,
						key: w
					});
					return m ? this.state.hasJustSubscribed || b ? o.a.createElement(f, x({
						className: Object(p.a)(t, {
							[u.a.isLarge]: !c,
							[u.a.unsubscribeButtonHoverStyles]: !c
						}),
						onClick: this.onClick,
						small: c,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, _), c && o.a.createElement(g, null), !c && !k && o.a.createElement(g, null), !c && P) : c ? null : o.a.createElement(y, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(h, x({
						className: Object(p.a)(t, {
							[u.a.isLarge]: !c
						}),
						onClick: this.onClick,
						small: c
					}, _, {
						id: "subscribe-button-".concat(a),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(O, null), !c && P))
				}
			}
			t.a = Object(i.a)(Object(r.b)(E))
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), d.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-SidebarNativeAd.ae36ecab2c45c07b9f1a.js.map