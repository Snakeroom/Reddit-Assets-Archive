// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.3e5a9ac7bac15735225f.js
// Retrieved at 8/24/2020, 4:30:10 PM by Reddit Dataminer v1.0.0
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
					var r, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						h = !n && !l && /macintosh/i.test(t),
						v = !i && !m && !p && !u && /linux/i.test(t),
						f = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						g = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						P = !y && /[^-]mobi/i.test(t),
						O = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: g || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: g || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: g || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: g || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, f ? (r.msedge = e, r.version = f) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || g
					} : m ? r = {
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
						version: g || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: g || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: g
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, g && (r.version = g)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, g && (r.version = g)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || g
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && g && (r.version = g)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : O ? (r.xbox = e, r.osname = "Xbox") : x ? (r.windows = e, r.osname = "Windows") : v && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var C = "";
					r.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (r.osversion = C);
					var w = !r.windows && C.split(".")[0];
					return y || d || "ipad" == n || i && (3 == w || w >= 4 && !P) || r.silk ? r.tablet = e : (P || "iphone" == n || "ipod" == n || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function n(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = r(e, (function(e) {
							var s = t - o(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, o, r) {
					var i = s;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([a, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = n, s.check = function(e, t, s) {
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
			e.exports = function(e, t, s, o, r) {
				return r(e, (function(e, r, n) {
					s = o ? (o = !1, e) : t(s, e, r, n)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, n(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/components/AdGalleryCaption/index.m.less": function(e, t, s) {
			e.exports = {
				container: "kYArAU9iD7ocR4q5LsKb1",
				caption: "_1HF3CHzojJTWyW_VGP3paq"
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
				r = s.n(o);
			const n = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = n
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(i.a, c({
					className: Object(n.a)(t, d.a.CallToActionButton, {
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				y = s.n(g),
				P = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = P.a.div("Container", y.a),
				w = P.a.div("PostMetaWrapper", y.a),
				k = P.a.wrapped(u.c, "PostTitle", y.a),
				j = P.a.div("FlatList", y.a),
				S = P.a.div("FlatItem", y.a),
				_ = P.a.span("FlatListDotSpacer", y.a),
				T = P.a.wrapped(C, "LinkContainer", y.a),
				E = P.a.div("Content", y.a),
				N = P.a.div("ThumbnailContainer", y.a),
				L = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Bb.TOPIC),
					post: v.O,
					shouldOpenPostInNewTab: f.U,
					subreddit: v.bb
				}),
				I = Object(i.b)(L);
			t.a = I(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: r,
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
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					c = t;
				return i && !i.media ? n.a.createElement(T, {
					className: c
				}, n.a.createElement(E, null, n.a.createElement(w, null, n.a.createElement(p.a, d)), A(i), i.source && n.a.createElement(b.a, {
					post: i
				}), M(e)), F(e)) : n.a.createElement(C, {
					className: c
				}, n.a.createElement(w, null, n.a.createElement(p.a, d)), A(i), B(e), M(e))
			});
			const A = e => n.a.createElement(k, {
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
					return n.a.createElement("div", null, n.a.createElement(m.a, O({}, o, {
						className: y.a.mediaContainer
					})))
				},
				M = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return n.a.createElement(j, null, n.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), n.a.createElement(_, null), n.a.createElement(S, null, R(e)))
				},
				R = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return n.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				F = e => n.a.createElement(N, null, n.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
				fallback: n.a.createElement("div", null),
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
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				P = s("./src/reddit/selectors/inFeedChaining.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/components/AdGalleryCaption/index.m.less"),
				S = s.n(j);
			var _ = e => r.a.createElement("div", {
					className: S.a.container
				}, e.caption && r.a.createElement("span", {
					className: S.a.caption,
					title: e.caption
				}, e.caption), r.a.createElement("div", null, e.children)),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				E = s("./src/reddit/components/AwardBadges/index.tsx"),
				N = s("./src/reddit/components/CallToActionButton/index.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				A = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				H = s("./src/reddit/components/PostLeftRail/index.tsx"),
				V = s("./src/reddit/components/PostMedia/index.tsx"),
				U = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				z = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				K = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				G = s.n(K);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var X = () => r.a.createElement("div", {
					className: G.a.container
				}, r.a.createElement(z.a, {
					className: G.a.pinnedIcon
				}), r.a.createElement("span", {
					className: G.a.metaText
				}, J._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				Z = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Q = s("./src/reddit/components/PostTitle/index.tsx"),
				q = s("./src/reddit/components/PostTopLine/index.tsx"),
				Y = s("./src/reddit/components/SourceLink/index.tsx"),
				$ = s("./src/reddit/constants/experiments.ts"),
				ee = s("./src/reddit/contexts/InsideOverlay.tsx"),
				te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				se = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				oe = s("./src/reddit/helpers/isCrosspost.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ie = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const de = Object(i.a)(C.U, e => e.some(ae.c)),
				ce = Object(i.a)(de, e => e),
				le = (e, t) => Object(ie.b)(e, {
					experimentName: $.Q,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ce(e, {
							listingKey: s
						})
					}
				});
			var me = s("./src/reddit/selectors/postFlair.ts"),
				pe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(ue),
				xe = s("./src/reddit/components/LargePost/index.m.less"),
				he = s.n(xe);
			const ve = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.U)(e, {
						listingKey: s
					}) : void 0
				},
				fe = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.I)(e, {
						listingKey: s
					}) : void 0
				},
				ge = Object(n.b)(() => Object(i.c)({
					autoplayPref: w.b,
					activeModalId: g.a,
					currentUser: w.i,
					hideNSFWPref: w.z,
					flairStyleTemplate: te.R,
					isCurrentUserProfilePost: C.l,
					isLoggedIn: w.H,
					isActive: C.k,
					isPostChainDismissed: P.c,
					isPostChained: P.d,
					listingBelowVariant: ne.b,
					imageGalleryCurrentItem: C.i,
					moderatorPermissions: O.i,
					modModeEnabled: te.P,
					post: C.O,
					posts: ve,
					postHeightVariant: le,
					postIds: fe,
					showEditFlair: me.a,
					showAwardsPlaque: y.a,
					subredditOrProfile: C.bb,
					userIsOp: w.hb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: r
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(p.d)({
								listingKey: s,
								listingName: o,
								postId: r
							}))
						},
						handleVote: t => {
							const s = t === f.a.upvoted ? Object(u.S)(r) : Object(u.q)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.Q)(r)),
						onOpenReportsDropdown: t => e(Object(b.h)({
							tooltipId: t
						}))
					}
				}),
				ye = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: n,
						currentUser: i,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: b,
						hideNSFWPref: f,
						hostPostId: g,
						imageGalleryCurrentItem: y,
						inSubredditOrProfile: P = !1,
						isCommentsPage: O,
						isCurrentUserProfilePost: C,
						isFrontpage: w,
						isGalleryTileLayoutDefault: j,
						isLoggedIn: S,
						isOverlay: z,
						isPostChainDismissed: K,
						isPostChained: G,
						isTopicPage: J,
						listingBelowVariant: ee,
						listingKey: te,
						listingName: ne,
						moderatorPermissions: ie,
						modModeEnabled: ae,
						onClickPost: de,
						onIgnoreReports: ce,
						onOpenReportsDropdown: le,
						post: me,
						postHeightVariant: ue,
						scrollerItemRef: xe,
						shouldShowGalleryTileOption: ve,
						showAwardsPlaque: fe,
						showEditFlair: ge,
						subredditOrProfile: ye,
						userIsOp: Pe
					} = e, Oe = !!e.redditStyle || !!e["data-redditstyle"], Ce = Oe ? void 0 : u, we = Object(l.a)(ie), ke = ae && we, je = Object(d.a)(ie), Se = Object(c.a)(ie), _e = Object(F.c)(me), Te = !!me.media && me.media.type === h.o.RTJSON, Ee = Pe && Te, Ne = s ? s - H.a : void 0, Le = !(w && S || J), Ie = (e => e === $.Mb.OnlyTitles)(ue) && !Object(oe.a)(me), Ae = (e => e === $.Mb.MediumHeight)(ue) && !Object(oe.a)(me), Be = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(v.k)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							n = s && 1 === s.indexOf(t.id),
							i = o && o[1] && Object(v.k)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: r
						}
					})(e), Me = !!ee && !Object($.yc)(ee), Re = (!P || Me) && !me.isSponsored;
					let Fe, We, De, He;
					y && (Fe = y.caption, We = y.outboundUrl, De = y.displayUrl, He = y.callToAction);
					const Ve = r.a.createElement(D.a, {
						className: Object(k.a)(he.a.container, n, be.a.largeAndMediumPostStyles, be.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[be.a.mUseRedditTheme]: Oe,
							promotedvideolink: me.isSponsored && !(me.media && h.a.has(me.media.type)),
							[he.a.topCompactPost]: Be && Be.hasTopCompactPostStyles,
							[he.a.bottomCompactPost]: Be && Be.hasBottomCompactPostStyles
						}),
						isOverlay: z,
						style: Object(m.b)(e.flairStyleTemplate),
						post: me,
						onClick: de,
						onPostContentClick: o,
						eventFactory: p
					}, r.a.createElement(Z.a, {
						model: me,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Ce,
						redditStyle: Oe,
						subreddit: ye
					}), r.a.createElement(W.a, {
						className: Object(k.a)(he.a.backgroundWrapper, {
							[he.a.isEvent]: Object(re.a)(me)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ce,
						post: me,
						redditStyle: Oe
					}, r.a.createElement(A.a, {
						post: me
					}), Be && Be.showPinnnedHeader && r.a.createElement(X, null), r.a.createElement(q.a, {
						className: he.a.postTopLine,
						hideAwards: fe,
						hideNSFWPref: f,
						hostPostId: g,
						iconClassName: he.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!O,
						isCompactPinnedPost: !!Be,
						isCurrentUserProfilePost: C,
						isOverlay: !!z,
						isTopicPage: !!J,
						listingKey: te,
						post: me,
						shouldShowSubscribeButton: Le,
						showSubreddit: Re,
						showSubredditIcon: !0,
						subredditOrProfile: ye
					}), r.a.createElement(Q.c, {
						className: he.a.postTitle,
						post: me,
						redditStyle: Oe,
						size: Q.b.Large,
						titleColor: Ce && Ce.postTitleColor,
						isOverlay: z
					}), me.source && !me.isSponsored && !(me.media && Object(h.H)(me.media)) && r.a.createElement(Y.a, {
						className: he.a.sourceLink,
						post: me
					}), r.a.createElement("div", {
						className: he.a.postMediaWrapper
					}, !Be && r.a.createElement(V.a, {
						isGalleryTileLayoutDefault: j,
						isListing: !0,
						isMediumHeight: Ae,
						isNotCardView: !!z,
						isTitleOnly: Ie,
						showCentered: !0,
						flairStyleTemplate: Ce,
						post: me,
						availableWidth: Ne,
						shouldLoad: b,
						scrollerItemRef: xe,
						autoplayPref: t,
						shouldShowGalleryTileOption: ve
					})), me.source && me.source.url && me.isSponsored && r.a.createElement(T.a, {
						className: he.a.adLinkWrapper
					}, We ? r.a.createElement(_, {
						caption: Fe
					}, r.a.createElement(se.a, {
						href: We.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source,
						className: he.a.adsGalleryDisplayLink
					}, De)) : r.a.createElement(se.a, {
						href: me.source.url.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source
					}, me.source.displayText), (me.callToAction || He) && r.a.createElement(N.a, {
						className: he.a.callToAction,
						href: We ? We.replace(a.a.redditUrl, "") : me.source.url.replace(a.a.redditUrl, ""),
						isSponsored: me.isSponsored,
						postId: me.id,
						source: me.source
					}, He || me.callToAction)), ae && we && _e && r.a.createElement(R.a, {
						onIgnoreReports: ce,
						reportable: me
					}), r.a.createElement(M.d, {
						postId: me.id
					}), fe && r.a.createElement(E.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: me,
						tooltipType: z ? pe.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: he.a.flatListContainer
					}, r.a.createElement(L.a, {
						className: he.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ce,
						model: me,
						onVoteClick: e.handleVote
					}), r.a.createElement(B.c, {
						currentUser: i,
						hasModFlairPerms: je,
						hasModFullPerms: Se,
						hasModPostPerms: we,
						hostPostId: g,
						isLargePost: !0,
						isOverlay: !!z,
						listingKey: te,
						modModeEnabled: ae,
						onIgnoreReports: ce,
						onOpenReportsDropdown: le,
						post: me,
						showEditPost: Ee,
						showEditFlair: ge,
						useFlatlistBreakpoints: Object(U.h)({
							editPost: !1,
							save: !ke,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(x.b, null, Ve, G && !K && r.a.createElement(I.a, {
						className: he.a.chain,
						listingKey: te,
						listingName: ne,
						postId: me.id
					}))
				});
			t.default = ge(Object(ee.b)(ye))
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
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
				return r.a.createElement("div", l({
					className: Object(n.a)(c.a.backgroundWrapper, s),
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
				r = s.n(o),
				n = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(n.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign(Object.assign({}, e), {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(i.a, Object.assign(Object.assign({}, e), {
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
				r = s.n(o),
				n = s("./src/reddit/components/AwardBadges/index.tsx"),
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
					isTopicPage: y,
					post: P,
					shouldShowSubscribeButton: O,
					subredditOrProfile: C,
					tooltipType: w
				} = e, k = !!y;
				return r.a.createElement("div", {
					className: f.a.metaContainer
				}, !o && !P.isSponsored && C && r.a.createElement(i.a, {
					postId: P.id,
					subredditName: C.name
				}, r.a.createElement(m.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: C.url
				}, C.displayText)), C && C.isQuarantined && r.a.createElement(l.a, null), !o && !P.isSponsored && C && O && !v && r.a.createElement(p.a, {
					getEventFactory: e => Object(x.f)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: C.name,
						type: Object(h.g)(C) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: P.id,
					small: !0
				}), !o && !P.isSponsored && r.a.createElement(b.b, null), !o && !P.isSponsored && r.a.createElement(a.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), r.a.createElement(c.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: w
				}), r.a.createElement(d.a, {
					displayText: C ? C.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: w
				}), !k && r.a.createElement(n.a, {
					hideCta: s,
					thing: P,
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
				r = s.n(o),
				n = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
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
					moderationPrompt: y
				} = t;
				return r.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && r.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), r.a.createElement(c.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: g
				}), y && r.a.createElement(a.b, {
					rightOf: g
				}, "survey" === y ? r.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!f
				}) : r.a.createElement(n.a, {
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
				y = s.n(g);
			const P = s("./src/lib/lessComponent.tsx").a.div("Container", y.a);
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
				return r.a.createElement(P, {
					className: t
				}, A && M && r.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, B && r.a.createElement(l.b, {
					className: Object(n.a)(y.a.subredditIcon, C),
					shouldHideNsfwIcon: g,
					subredditOrProfile: M
				}))), r.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, A && r.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(c.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: _ ? c.c.Lightbox : void 0,
					post: N,
					showSub: A,
					subredditOrProfile: M
				}), r.a.createElement(d.a, {
					className: y.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: j,
					post: N,
					tooltipType: _ ? c.c.Lightbox : void 0
				}), !R && r.a.createElement(i.a, {
					isPostDetail: k,
					thing: N,
					tooltipType: _ ? c.c.Lightbox : void 0
				})), M && A && L && !S && r.a.createElement(p.a, {
					getEventFactory: e => Object(x.f)(N.id, e ? "unsubscribe" : "subscribe", "post", E, O),
					identifier: {
						name: M.name,
						type: Object(f.g)(M) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: N.id
				}, "Subscribe"), I && r.a.createElement(b.b, {
					className: y.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(v.E)(e.post),
					source: N.source
				}, r.a.createElement(h.a, {
					className: y.a.outboundLinkIcon
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				b = d.a.wrapped(e => n.a.createElement("div", {
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
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
					const t = Object(n.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				r = s.n(o);
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
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), r.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				const t = Object(r.b)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.V
				});
				return !(!t || Object(o.yc)(t))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-LargePost.3e5a9ac7bac15735225f.js.map