// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.b58077c27dd552393253.js
// Retrieved at 8/27/2020, 12:40:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function o(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						v = !i && !m && !p && !u && /linux/i.test(t),
						f = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						P = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !P && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, f ? (n.msedge = e, n.version = f) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? n = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, g && (n.version = g)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, g && (n.version = g)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && g && (n.version = g)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : h ? (n.mac = e, n.osname = "macOS") : O ? (n.xbox = e, n.osname = "Xbox") : x ? (n.windows = e, n.osname = "Windows") : v && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var C = "";
					n.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (n.osversion = C);
					var w = !n.windows && C.split(".")[0];
					return P || d || "ipad" == r || i && (3 == w || w >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == r || "ipod" == r || i || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = n(e, (function(e) {
							var s = t - o(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, n) {
					var i = s;
					"string" == typeof o && (n = o, o = void 0), void 0 === o && (o = !1), n && (i = t(n));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([a, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = r, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, n) {
				return n(e, (function(e, n, r) {
					s = o ? (o = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), o(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
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
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				return d && d.url ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !n && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, d.displayText)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l)) : null
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement(i.a, c({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CrosspostBox/index.m.less"),
				P = s.n(g),
				y = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = y.a.div("Container", P.a),
				w = y.a.div("PostMetaWrapper", P.a),
				k = y.a.wrapped(u.c, "PostTitle", P.a),
				j = y.a.div("FlatList", P.a),
				S = y.a.div("FlatItem", P.a),
				_ = y.a.span("FlatListDotSpacer", P.a),
				T = y.a.wrapped(C, "LinkContainer", P.a),
				E = y.a.div("Content", P.a),
				N = y.a.div("ThumbnailContainer", P.a),
				L = Object(d.c)({
					isCurrentUserProfilePost: v.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Bb.TOPIC),
					post: v.N,
					shouldOpenPostInNewTab: f.U,
					subreddit: v.ab
				}),
				I = Object(i.b)(L);
			t.a = I(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: i,
					subreddit: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					c = t;
				return i && !i.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(E, null, r.a.createElement(w, null, r.a.createElement(p.a, d)), A(i), i.source && r.a.createElement(b.a, {
					post: i
				}), M(e)), F(e)) : r.a.createElement(C, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(p.a, d)), A(i), B(e), M(e))
			});
			const A = e => r.a.createElement(k, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign(Object.assign({}, t), {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, O({}, o, {
						className: P.a.mediaContainer
					})))
				},
				M = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(j, null, r.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(_, null), r.a.createElement(S, null, R(e)))
				},
				R = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				F = e => r.a.createElement(N, null, r.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(o.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
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
				fallback: r.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/activeModalId.ts"),
				g = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				P = s("./src/reddit/selectors/inFeedChaining.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/ads/index.ts"),
				k = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				_ = s("./src/reddit/components/AwardBadges/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				E = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				R = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostLeftRail/index.tsx"),
				W = s("./src/reddit/components/PostMedia/index.tsx"),
				D = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				H = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				U = s.n(H);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var K = () => n.a.createElement("div", {
					className: U.a.container
				}, n.a.createElement(V.a, {
					className: U.a.pinnedIcon
				}), n.a.createElement("span", {
					className: U.a.metaText
				}, z._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				J = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				G = s("./src/reddit/components/PostTitle/index.tsx"),
				X = s("./src/reddit/components/PostTopLine/index.tsx"),
				Z = s("./src/reddit/components/SourceLink/index.tsx"),
				Q = s("./src/reddit/constants/experiments.ts"),
				q = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/helpers/isCrosspost.ts"),
				ee = s("./src/reddit/helpers/postEvent.ts"),
				te = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ne = Object(i.a)(O.T, e => e.some(oe.c)),
				re = Object(i.a)(ne, e => e),
				ie = (e, t) => Object(se.c)(e, {
					experimentName: Q.Q,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && re(e, {
							listingKey: s
						})
					}
				});
			var ae = s("./src/reddit/selectors/postFlair.ts"),
				de = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ce = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				le = s.n(ce),
				me = s("./src/reddit/components/LargePost/index.m.less"),
				pe = s.n(me);
			const ue = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(O.T)(e, {
						listingKey: s
					}) : void 0
				},
				be = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(O.H)(e, {
						listingKey: s
					}) : void 0
				},
				xe = Object(r.b)(() => Object(i.c)({
					autoplayPref: C.b,
					activeModalId: f.a,
					currentUser: C.i,
					hideNSFWPref: C.z,
					flairStyleTemplate: Y.R,
					isCurrentUserProfilePost: O.k,
					isLoggedIn: C.H,
					isActive: O.j,
					isPostChainDismissed: P.c,
					isPostChained: P.d,
					listingBelowVariant: te.b,
					imageGalleryCurrentItem: O.i,
					moderatorPermissions: y.i,
					modModeEnabled: Y.P,
					post: O.N,
					posts: ue,
					postHeightVariant: ie,
					postIds: be,
					showEditFlair: ae.a,
					showAwardsPlaque: g.a,
					subredditOrProfile: O.ab,
					userIsOp: C.hb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(m.d)({
								listingKey: s,
								listingName: o,
								postId: n
							}))
						},
						handleVote: t => {
							const s = t === v.a.upvoted ? Object(p.S)(n) : Object(p.q)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.Q)(n)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}),
				he = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: r,
						currentUser: i,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: v,
						hostPostId: f,
						imageGalleryCurrentItem: g,
						inSubredditOrProfile: P = !1,
						isCommentsPage: y,
						isCurrentUserProfilePost: O,
						isFrontpage: C,
						isGalleryTileLayoutDefault: V,
						isLoggedIn: H,
						isOverlay: U,
						isPostChainDismissed: z,
						isPostChained: q,
						isTopicPage: Y,
						listingBelowVariant: te,
						listingKey: se,
						listingName: oe,
						moderatorPermissions: ne,
						modModeEnabled: re,
						onClickPost: ie,
						onIgnoreReports: ae,
						onOpenReportsDropdown: ce,
						post: me,
						postHeightVariant: ue,
						scrollerItemRef: be,
						shouldShowGalleryTileOption: xe,
						showAwardsPlaque: he,
						showEditFlair: ve,
						subredditOrProfile: fe,
						userIsOp: ge
					} = e, Pe = !!e.redditStyle || !!e["data-redditstyle"], ye = Pe ? void 0 : p, Oe = Object(c.a)(ne), Ce = re && Oe, we = Object(a.a)(ne), ke = Object(d.a)(ne), je = Object(B.c)(me), Se = !!me.media && me.media.type === x.o.RTJSON, _e = ge && Se, Te = s ? s - F.a : void 0, Ee = !(C && H || Y), Ne = (e => e === Q.Ob.OnlyTitles)(ue) && !Object($.a)(me), Le = (e => e === Q.Ob.MediumHeight)(ue) && !Object($.a)(me), Ie = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(h.k)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							r = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(h.k)(o[1]);
						return {
							hasTopCompactPostStyles: n && i,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: n
						}
					})(e), Ae = !!te && !Object(Q.Ac)(te), Be = (!P || Ae) && !me.isSponsored, Me = Object(w.getAdLinkContent)(me, g), {
						source: Re
					} = Me, Fe = n.a.createElement(R.a, {
						className: Object(k.a)(pe.a.container, r, le.a.largeAndMediumPostStyles, le.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[le.a.mUseRedditTheme]: Pe,
							promotedvideolink: me.isSponsored && !(me.media && x.a.has(me.media.type)),
							[pe.a.topCompactPost]: Ie && Ie.hasTopCompactPostStyles,
							[pe.a.bottomCompactPost]: Ie && Ie.hasBottomCompactPostStyles
						}),
						isOverlay: U,
						style: Object(l.b)(e.flairStyleTemplate),
						post: me,
						onClick: ie,
						onPostContentClick: o,
						eventFactory: m
					}, n.a.createElement(J.a, {
						model: me,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ye,
						redditStyle: Pe,
						subreddit: fe
					}), n.a.createElement(M.a, {
						className: Object(k.a)(pe.a.backgroundWrapper, {
							[pe.a.isEvent]: Object(ee.a)(me)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ye,
						post: me,
						redditStyle: Pe
					}, n.a.createElement(N.a, {
						post: me
					}), Ie && Ie.showPinnnedHeader && n.a.createElement(K, null), n.a.createElement(X.a, {
						className: pe.a.postTopLine,
						hideAwards: he,
						hideNSFWPref: v,
						hostPostId: f,
						iconClassName: pe.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!y,
						isCompactPinnedPost: !!Ie,
						isCurrentUserProfilePost: O,
						isOverlay: !!U,
						isTopicPage: !!Y,
						listingKey: se,
						post: me,
						shouldShowSubscribeButton: Ee,
						showSubreddit: Be,
						showSubredditIcon: !0,
						subredditOrProfile: fe
					}), n.a.createElement(G.c, {
						className: pe.a.postTitle,
						post: me,
						redditStyle: Pe,
						size: G.b.Large,
						titleColor: ye && ye.postTitleColor,
						isOverlay: U
					}), me.source && !me.isSponsored && !(me.media && Object(x.H)(me.media)) && n.a.createElement(Z.a, {
						className: pe.a.sourceLink,
						post: me
					}), n.a.createElement("div", {
						className: pe.a.postMediaWrapper
					}, !Ie && n.a.createElement(W.a, {
						isGalleryTileLayoutDefault: V,
						isListing: !0,
						isMediumHeight: Le,
						isNotCardView: !!U,
						isTitleOnly: Ne,
						showCentered: !0,
						flairStyleTemplate: ye,
						post: me,
						availableWidth: Te,
						shouldLoad: u,
						scrollerItemRef: be,
						autoplayPref: t,
						shouldShowGalleryTileOption: xe
					})), me.isSponsored && Re && Re.url && n.a.createElement(j.a, {
						className: pe.a.adLinkWrapper
					}, n.a.createElement(S.a, {
						post: me,
						adLinkContent: Me
					})), re && Oe && je && n.a.createElement(A.a, {
						onIgnoreReports: ae,
						reportable: me
					}), n.a.createElement(I.d, {
						postId: me.id
					}), he && n.a.createElement(_.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: me,
						tooltipType: U ? de.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: pe.a.flatListContainer
					}, n.a.createElement(T.a, {
						className: pe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ye,
						model: me,
						onVoteClick: e.handleVote
					}), n.a.createElement(L.c, {
						currentUser: i,
						hasModFlairPerms: we,
						hasModFullPerms: ke,
						hasModPostPerms: Oe,
						hostPostId: f,
						isLargePost: !0,
						isOverlay: !!U,
						listingKey: se,
						modModeEnabled: re,
						onIgnoreReports: ae,
						onOpenReportsDropdown: ce,
						post: me,
						showEditPost: _e,
						showEditFlair: ve,
						useFlatlistBreakpoints: Object(D.h)({
							editPost: !1,
							save: !Ce,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(b.b, null, Fe, q && !z && n.a.createElement(E.a, {
						className: pe.a.chain,
						listingKey: se,
						listingName: oe,
						postId: me.id
					}))
				});
			t.default = xe(Object(q.b)(he))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign(Object.assign({}, e), {
						crosspost: t,
						primaryContent: !1
					})
				}) : n.a.createElement(i.a, Object.assign(Object.assign({}, e), {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: g,
					isTopicPage: P,
					post: y,
					shouldShowSubscribeButton: O,
					subredditOrProfile: C,
					tooltipType: w
				} = e, k = !!P;
				return n.a.createElement("div", {
					className: f.a.metaContainer
				}, !o && !y.isSponsored && C && n.a.createElement(i.a, {
					postId: y.id,
					subredditName: C.name
				}, n.a.createElement(m.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: C.url
				}, C.displayText)), C && C.isQuarantined && n.a.createElement(l.a, null), !o && !y.isSponsored && C && O && !v && n.a.createElement(p.a, {
					getEventFactory: e => Object(x.f)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: C.name,
						type: Object(h.g)(C) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: y.id,
					small: !0
				}), !o && !y.isSponsored && n.a.createElement(b.b, null), !o && !y.isSponsored && n.a.createElement(a.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), n.a.createElement(c.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					post: y,
					tooltipType: w
				}), n.a.createElement(d.a, {
					displayText: C ? C.displayText : null,
					inSubredditOrProfile: !!o,
					post: y,
					tooltipType: w
				}), !k && n.a.createElement(r.a, {
					hideCta: s,
					thing: y,
					tooltipType: g ? c.c.Lightbox : void 0
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
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					subreddit: v,
					isOverlay: f
				} = e, g = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: P
				} = t;
				return n.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && n.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), n.a.createElement(c.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: g
				}), P && n.a.createElement(a.b, {
					rightOf: g
				}, "survey" === P ? n.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!f
				}) : n.a.createElement(r.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!f
				})))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostTopLine/index.m.less"),
				P = s.n(g);
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: o,
					hideNSFWPref: g,
					hostPostId: O,
					iconClassName: C,
					inSubredditOrProfile: w,
					isCommentsPage: k,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: S,
					isOverlay: _,
					isTopicPage: T,
					listingKey: E,
					post: N,
					shouldShowSubscribeButton: L,
					showCornerOutboundLink: I,
					showSubreddit: A,
					showSubredditIcon: B,
					subredditOrProfile: M
				} = e, R = o || T;
				return n.a.createElement(y, {
					className: t
				}, A && M && n.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, n.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, B && n.a.createElement(l.b, {
					className: Object(r.a)(P.a.subredditIcon, C),
					shouldHideNsfwIcon: g,
					subredditOrProfile: M
				}))), n.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, A && n.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), n.a.createElement(c.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: _ ? c.c.Lightbox : void 0,
					post: N,
					showSub: A,
					subredditOrProfile: M
				}), n.a.createElement(d.a, {
					className: P.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: j,
					post: N,
					tooltipType: _ ? c.c.Lightbox : void 0
				}), !R && n.a.createElement(i.a, {
					isPostDetail: k,
					thing: N,
					tooltipType: _ ? c.c.Lightbox : void 0
				})), M && A && L && !S && n.a.createElement(p.a, {
					getEventFactory: e => Object(x.f)(N.id, e ? "unsubscribe" : "subscribe", "post", E, O),
					identifier: {
						name: M.name,
						type: Object(f.g)(M) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: N.id
				}, "Subscribe"), I && n.a.createElement(b.b, {
					className: P.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(v.E)(e.post),
					source: N.source
				}, n.a.createElement(h.a, {
					className: P.a.outboundLinkIcon
				})))
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
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(i.b)(null, e => ({
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
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(o.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(o.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(a.a)(b))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(o.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.V
				});
				return !(!t || Object(o.Ac)(t))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-LargePost.b58077c27dd552393253.js.map