// https://www.redditstatic.com/desktop2x/InFeedChaining.f7053cc26d3c7cd63ed8.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InFeedChaining"], {
		"./node_modules/bowser/src/bowser.js": function(e, s, t) {
			var r;
			r = function() {
				var e = !0;

				function s(s) {
					function t(e) {
						var t = s.match(e);
						return t && t.length > 1 && t[1] || ""
					}

					function r(e) {
						var t = s.match(e);
						return t && t.length > 1 && t[2] || ""
					}
					var i, n = t(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(s) && /android/i.test(s),
						a = /nexus\s*[0-6]\s*/i.test(s),
						d = !a && /nexus\s*[0-9]+/i.test(s),
						c = /CrOS/.test(s),
						l = /silk/i.test(s),
						m = /sailfish/i.test(s),
						u = /tizen/i.test(s),
						p = /(web|hpw)os/i.test(s),
						b = /windows phone/i.test(s),
						h = (/SamsungBrowser/i.test(s), !b && /windows/i.test(s)),
						v = !n && !l && /macintosh/i.test(s),
						f = !o && !m && !u && !p && /linux/i.test(s),
						w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = t(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(s) && !/tablet pc/i.test(s),
						g = !y && /[^-]mobi/i.test(s),
						C = /xbox/i.test(s);
					/opera/i.test(s) ? i = {
						name: "Opera",
						opera: e,
						version: x || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(s) ? i = {
						name: "Opera",
						opera: e,
						version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(s) ? i = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(s) ? i = {
						name: "Opera Coast",
						coast: e,
						version: x || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(s) ? i = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(s) ? i = {
						name: "UC Browser",
						ucbrowser: e,
						version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(s) ? i = {
						name: "Maxthon",
						maxthon: e,
						version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(s) ? i = {
						name: "Epiphany",
						epiphany: e,
						version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(s) ? i = {
						name: "Puffin",
						puffin: e,
						version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(s) ? i = {
						name: "Sleipnir",
						sleipnir: e,
						version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(s) ? i = {
						name: "K-Meleon",
						kMeleon: e,
						version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (i = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (i.msedge = e, i.version = w) : (i.msie = e, i.version = t(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(s) ? i = {
						name: "Internet Explorer",
						msie: e,
						version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? i = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(s) ? i = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(s) ? i = {
						name: "Vivaldi",
						vivaldi: e,
						version: t(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : m ? i = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(s) ? i = {
						name: "SeaMonkey",
						seamonkey: e,
						version: t(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(s) ? (i = {
						name: "Firefox",
						firefox: e,
						version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(s) && (i.firefoxos = e, i.osname = "Firefox OS")) : l ? i = {
						name: "Amazon Silk",
						silk: e,
						version: t(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(s) ? i = {
						name: "PhantomJS",
						phantom: e,
						version: t(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(s) ? i = {
						name: "SlimerJS",
						slimer: e,
						version: t(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(s) || /rim\stablet/i.test(s) ? i = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: x || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (i = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(s) && (i.touchpad = e)) : /bada/i.test(s) ? i = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: t(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? i = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(s) ? i = {
						name: "QupZilla",
						qupzilla: e,
						version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(s) ? i = {
						name: "Chromium",
						chromium: e,
						version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(s) ? i = {
						name: "Chrome",
						chrome: e,
						version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? i = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(s) ? (i = {
						name: "Safari",
						safari: e
					}, x && (i.version = x)) : n ? (i = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, x && (i.version = x)) : i = /googlebot/i.test(s) ? {
						name: "Googlebot",
						googlebot: e,
						version: t(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: t(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !i.msedge && /(apple)?webkit/i.test(s) ? (/(apple)?webkit\/537\.36/i.test(s) ? (i.name = i.name || "Blink", i.blink = e) : (i.name = i.name || "Webkit", i.webkit = e), !i.version && x && (i.version = x)) : !i.opera && /gecko\//i.test(s) && (i.name = i.name || "Gecko", i.gecko = e, i.version = i.version || t(/gecko\/(\d+(\.\d+)?)/i)), i.windowsphone || !o && !i.silk ? !i.windowsphone && n ? (i[n] = e, i.ios = e, i.osname = "iOS") : v ? (i.mac = e, i.osname = "macOS") : C ? (i.xbox = e, i.osname = "Xbox") : h ? (i.windows = e, i.osname = "Windows") : f && (i.linux = e, i.osname = "Linux") : (i.android = e, i.osname = "Android");
					var S = "";
					i.windows ? S = function(e) {
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
					}(t(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? S = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? S = (S = t(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? S = (S = t(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? S = t(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? S = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? S = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? S = t(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (S = t(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (i.osversion = S);
					var O = !i.windows && S.split(".")[0];
					return y || d || "ipad" == n || o && (3 == O || O >= 4 && !g) || i.silk ? i.tablet = e : (g || "iphone" == n || "ipod" == n || o || a || i.blackberry || i.webos || i.bada) && (i.mobile = e), i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = e : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = e : i.x = e, i
				}
				var t = s("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function i(e, s) {
					var t, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, s);
					for (t = 0; t < e.length; t++) r.push(s(e[t]));
					return r
				}

				function n(e) {
					for (var s = Math.max(r(e[0]), r(e[1])), t = i(e, (function(e) {
							var t = s - r(e);
							return i((e += new Array(t + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --s >= 0;) {
						if (t[0][s] > t[1][s]) return 1;
						if (t[0][s] !== t[1][s]) return -1;
						if (0 === s) return 0
					}
				}

				function o(e, r, i) {
					var o = t;
					"string" == typeof r && (i = r, r = void 0), void 0 === r && (r = !1), i && (o = s(i));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([a, e[d]]) < 0
						} return r
				}
				return t.test = function(e) {
					for (var s = 0; s < e.length; ++s) {
						var r = e[s];
						if ("string" == typeof r && r in t) return !0
					}
					return !1
				}, t.isUnsupportedBrowser = o, t.compareVersions = n, t.check = function(e, s, t) {
					return !o(e, s, t)
				}, t._detect = s, t.detect = s, t
			}, e.exports ? e.exports = r() : t("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, s) {
			e.exports = function(e, s, t) {
				return e == e && (void 0 !== t && (e = e <= t ? e : t), void 0 !== s && (e = e >= s ? e : s)), e
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, s) {
			e.exports = function(e, s, t) {
				var r;
				return t(e, (function(e, t, i) {
					if (s(e, t, i)) return r = t, !1
				})), r
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, s) {
			e.exports = function(e, s, t, r, i) {
				return i(e, (function(e, i, n) {
					t = r ? (r = !1, e) : s(t, e, i, n)
				})), t
			}
		},
		"./node_modules/lodash/clamp.js": function(e, s, t) {
			var r = t("./node_modules/lodash/_baseClamp.js"),
				i = t("./node_modules/lodash/toNumber.js");
			e.exports = function(e, s, t) {
				return void 0 === t && (t = s, s = void 0), void 0 !== t && (t = (t = i(t)) == t ? t : 0), void 0 !== s && (s = (s = i(s)) == s ? s : 0), r(i(e), s, t)
			}
		},
		"./node_modules/lodash/findKey.js": function(e, s, t) {
			var r = t("./node_modules/lodash/_baseFindKey.js"),
				i = t("./node_modules/lodash/_baseForOwn.js"),
				n = t("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, s) {
				return r(e, n(s, 3), i)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, s, t) {
			var r = t("./node_modules/lodash/_arrayReduce.js"),
				i = t("./node_modules/lodash/_baseEach.js"),
				n = t("./node_modules/lodash/_baseIteratee.js"),
				o = t("./node_modules/lodash/_baseReduce.js"),
				a = t("./node_modules/lodash/isArray.js");
			e.exports = function(e, s, t) {
				var d = a(e) ? r : o,
					c = arguments.length < 3;
				return d(e, n(s, 4), t, c, i)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, s) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less": function(e, s, t) {
			e.exports = {
				body: "_1TdTKnpCL4r-8b_P6N_s2H",
				thumbnailWrapper: "_1GhzoJvAGDHDieNmaBbc1j",
				thumbnail: "_29LP0yOv3qdH7Hw0i42rY1",
				thumbnailContainer: "_3D4UF6ZAO5wiwsAaqGPFD_",
				thumbnailLinkIcon: "_3nmCxKiXx-UyUgMfxQMQYO",
				bodyWrapper: "_2DMHAzKjqjnl-PBICpGvvP",
				mediaWrapper: "_2nVhK4TJW8rFpCW0J71MeZ",
				textWrapper: "_3HyzG7Bun5vaTrdBWvTTmT",
				postTitle: "_1ft5B5IP2RM9FAOkd6O_30",
				postTitleCompact: "_2y0S2HAq5enRe-8puwGqvp",
				flexSpacer: "_2pXLfUYWqtorJfsnyUPLpy"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less": function(e, s, t) {
			e.exports = {
				footer: "_16DxRuw4PntaiR7Mb8IpKz",
				metaText: "_2OKlRpghzNcnid45bc1QFg"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less": function(e, s, t) {
			e.exports = {
				header: "_1eoxIROAsv7YNisHStsspM",
				icon: "_1r7shGI3FRi8x8jB0wJFIw",
				iconLink: "_2aYABiczSUxClJTIX1tUoW",
				name: "_3n6BCmTgHdb1J5H2L_XX4A",
				link: "_3ZwhnERcT6sV1cfCBsQmAP",
				subscribe: "_1NVoS5Yuc3mBX9AM0jW19e"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return r
			}));
			const r = 236
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_2-uI1CWUC-WOhm-MolZUT8",
				background: "_2KsrA9nTjIN0VD69GqImgf"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx": function(e, s, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.symbol.js");
			var r = t("./node_modules/react/index.js"),
				i = t.n(r),
				n = t("./node_modules/reselect/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				a = t("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = t("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = t("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = t("./src/reddit/components/PostContainer/index.tsx"),
				m = t("./src/reddit/connectors/miniCardPost.ts"),
				u = t("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = t("./src/reddit/models/Subreddit/index.ts"),
				b = t("./src/config.ts"),
				h = t("./src/lib/isUrl/index.ts"),
				v = t("./src/reddit/components/Media/index.tsx"),
				f = t("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				w = t("./src/reddit/components/PostTitle/index.tsx"),
				x = t("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				y = t("./src/reddit/helpers/getRichTextContent/index.ts"),
				g = t("./src/reddit/helpers/postHasSelfText/index.ts"),
				C = t("./src/reddit/models/Media/index.ts"),
				S = t("./src/reddit/components/MiniCardPost/index.m.less"),
				O = t.n(S),
				j = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Body/index.m.less"),
				_ = t.n(j);
			const N = "".concat(b.a.assetPath, "/img/link-placeholder.png");
			var P = e => {
					const {
						autoplayPref: s,
						availableWidth: t,
						className: r,
						crosspostRoot: n,
						flairStyleTemplate: a,
						forceLoadMedia: d,
						post: c,
						scrollerItemRef: l,
						shouldPause: m
					} = e, {
						media: u
					} = n || c, p = u && i.a.createElement(v.a, {
						autoplayPref: s,
						availableWidth: t,
						className: O.a.media,
						"data-redditstyle": !0,
						forceAspectRatio: C.c,
						imageBoxClassName: O.a.mediaImageBox,
						imageBoxContentImageClassName: O.a.mediaImageBoxContentImage,
						isListing: !0,
						isMiniCard: !0,
						isMiniCardHQPreviews: !0,
						isNotCardView: !0,
						post: n || c,
						scrollerItemRef: l,
						shouldLoad: d,
						shouldPause: m,
						showCentered: !1,
						showFull: !1
					});
					let b, S = !0;
					const j = !!c.source && Object(h.a)(c.source.url) || !!c.thumbnail && Object(h.a)(c.thumbnail.url);
					return !u && j ? (S = !1, b = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _.a.flexSpacer
					}), i.a.createElement("div", {
						className: _.a.mediaWrapper
					}, i.a.createElement(f.a, {
						className: _.a.thumbnailWrapper,
						thumbnailClassName: _.a.thumbnail,
						thumbnailContainerClassName: _.a.thumbnailContainer,
						thumbnailLinkIconClassName: _.a.thumbnailLinkIcon,
						"data-redditstyle": !0,
						post: c,
						showPlaceholderContentType: !a || !a.postPlaceholderImage,
						templatePlaceholderImage: a ? a.postPlaceholderImage : N,
						usePreview: !0
					})))) : u && p ? u.type !== C.n.RTJSON && u.type !== C.n.TEXT ? (S = !1, b = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _.a.flexSpacer
					}), i.a.createElement("div", {
						className: _.a.mediaWrapper
					}, p))) : b = Object(g.a)(c) || Object(y.c)(c) && Object(x.a)(c) ? i.a.createElement("div", {
						className: _.a.textWrapper
					}, p) : i.a.createElement("div", {
						className: _.a.flexSpacer
					}) : b = i.a.createElement("div", {
						className: _.a.flexSpacer
					}), i.a.createElement("div", {
						className: Object(o.a)(_.a.body, r)
					}, i.a.createElement(w.c, {
						className: S ? _.a.postTitle : _.a.postTitleCompact,
						"data-redditstyle": !0,
						hideSourceLink: !0,
						post: c,
						size: w.b.Large,
						showNSFWSpoilerFlairsOnly: !0,
						titleColor: a && a.postTitleColor
					}), b)
				},
				E = t("./src/app/strings/index.ts"),
				k = t("./src/lib/prettyPrintNumber/index.ts"),
				I = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Footer/index.m.less"),
				T = t.n(I);
			var B = e => {
					const {
						className: s,
						language: t,
						post: r
					} = e;
					return i.a.createElement("div", {
						className: Object(o.a)(T.a.footer, s)
					}, i.a.createElement("span", {
						className: T.a.metaText
					}, Object(E.b)(t, "posts.points.noun", r.score, {
						count: Object(k.b)(r.score)
					})), i.a.createElement("span", {
						className: T.a.metaText
					}, Object(E.b)(t, "posts.comments.noun", r.numComments, {
						count: Object(k.b)(r.numComments)
					})))
				},
				U = t("./src/reddit/components/SubredditIcon/index.tsx"),
				D = t("./src/reddit/components/SubscribeButton/index.tsx"),
				F = t("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				L = t("./src/reddit/constants/posts.ts"),
				M = t("./src/reddit/controls/InternalLink/index.tsx"),
				A = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/Header/index.m.less"),
				R = t.n(A);
			var W = e => {
					const {
						className: s,
						getSubscribeEventFactory: t,
						onSubredditOrProfileClick: r,
						shouldShowSubscribeButton: n,
						subredditOrProfile: a
					} = e, d = Object(p.e)(a) ? L.a.PROFILE : L.a.SUBREDDIT;
					return i.a.createElement("div", {
						className: Object(o.a)(R.a.header, s)
					}, i.a.createElement(M.a, {
						className: R.a.iconLink,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: r
					}, i.a.createElement(U.b, {
						className: R.a.icon,
						subredditOrProfile: a
					})), i.a.createElement("div", {
						className: R.a.name
					}, i.a.createElement(M.a, {
						className: R.a.link,
						"data-redditstyle": !0,
						to: a.url,
						onMouseDown: r
					}, Object(F.b)(a.displayText || a.name, d))), n && i.a.createElement(D.a, {
						className: R.a.subscribe,
						"data-redditstyle": !0,
						getEventFactory: t,
						icon: !0,
						identifier: {
							name: a.name,
							type: d
						},
						small: !0
					}))
				},
				V = t("./src/reddit/helpers/styles/mixins/index.m.less"),
				H = t.n(V),
				z = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.m.less"),
				J = t.n(z);
			t.d(s, "a", (function() {
				return Q
			}));
			var X = function(e, s) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && s.indexOf(r) < 0 && (t[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) s.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]])
				}
				return t
			};
			const Z = Object(n.a)(e => e.subredditOrProfile, e => e.subscribedProfiles, e => e.subscribedSubreddits, (e, s, t) => {
				if (!e) return !1;
				return (Object(p.e)(e) ? s : t).some(s => s.id === e.id)
			});
			class K extends i.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditOrProfileClicked = e => {
						e.stopPropagation(), this.props.onSubredditOrProfileClick(this.props.postId)
					}, this.getSubscribeEventFactory = e => {
						const s = this.props.getSubscribeEventFactory(this.props.postId);
						if (s) return s(e)
					}
				}
				render() {
					const e = this.props,
						{
							className: s
						} = e,
						t = X(e, ["className"]),
						{
							eventFactory: r,
							flairStyleTemplate: n,
							language: a,
							onClickPost: m,
							post: p,
							subredditOrProfile: b,
							subscribedProfiles: h,
							subscribedSubreddits: v
						} = t,
						f = !Z({
							subredditOrProfile: b,
							subscribedProfiles: h,
							subscribedSubreddits: v
						});
					return i.a.createElement(l.a, {
						className: Object(o.a)(J.a.container, H.a.largeAndMediumActiveStyles, H.a.largeAndMediumPostStyles, H.a.mUseRedditTheme, O.a.postContainer, Object(u.a)(this.props), s),
						eventFactory: r,
						onClick: m,
						post: p,
						style: Object.assign({}, Object(u.b)(this.props.flairStyleTemplate), Object(u.d)(this.props))
					}, i.a.createElement(c.a, {
						className: J.a.background,
						"data-redditstyle": !0,
						flairStyleTemplate: n
					}, b && i.a.createElement(W, {
						getSubscribeEventFactory: this.getSubscribeEventFactory,
						onSubredditOrProfileClick: this.trackSubredditOrProfileClicked,
						subredditOrProfile: b,
						shouldShowSubscribeButton: f
					}), i.a.createElement(P, t), i.a.createElement(B, {
						"data-redditstyle": !0,
						language: a,
						post: p
					})), i.a.createElement(d.d, {
						postId: p.id
					}))
				}
			}
			const Y = Object(m.a)(Object(a.a)(K));
			class Q extends i.a.Component {
				render() {
					return i.a.createElement(Y, this.props)
				}
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_3ecQI6Cj7AUan8ODNedckX",
				carousel: "_3iT7bTTSmhcS5Y5g0HA_6O",
				containerVisible: "_3rsj8PUqTkCf6pe9416Gyy",
				expand: "_250lv3fevotwjop-AocHoR",
				fadeIn: "_3ZZS9kQ22NEA4xZZYY0spW",
				layout: "_3h7LpVpRI9GJtQIvq99wXT",
				header: "_1BBGDcB7hA6-TZL0ttf8GW",
				title: "_1fjygDYdKjBJL0LwqMGbmi",
				subredditLink: "_3U4JOEplD94U2FGR06uT9j",
				description: "_1963n3Yxcv9NC7ip9v_G55",
				overflow: "_3-Jj2CfWoB4geanC8TePf3",
				overflowDropdown: "cfnCFp3MEBqCBFKNqYCKh",
				overflowItemIconWrapper: "_1n_xSjRDa84SL-VXSHRa_b",
				hideIcon: "_1qgpARPT0gQIpbWQmCrZx9",
				body: "_2LVnfX2Exeku8qbknNjlSc",
				carouselVisible: "swB-w41jlb9yWuRozt8Wr",
				arrow: "_33n6Hxno5QDQIbv7MzWYA6"
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var r = t("./node_modules/polished/dist/polished.es.js"),
				i = t("./node_modules/react/index.js"),
				n = t.n(i),
				o = t("./node_modules/react-redux/es/index.js"),
				a = t("./node_modules/reselect/es/index.js"),
				d = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/constants/index.ts"),
				l = t("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = t("./src/reddit/actions/inFeedChaining.ts"),
				u = t("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				p = t("./src/reddit/components/OverflowMenu/index.tsx"),
				b = t("./src/reddit/components/TrackingHelper/index.tsx"),
				h = t("./src/reddit/controls/Dropdown/Row.tsx"),
				v = t("./src/reddit/controls/InternalLink/index.tsx"),
				f = t("./src/reddit/helpers/name/index.ts"),
				w = t("./src/reddit/helpers/overlay/index.ts"),
				x = t("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				y = t("./src/reddit/i18n/components.tsx"),
				g = t("./src/reddit/i18n/utils.ts"),
				C = t("./src/reddit/icons/svgs/Hide/index.tsx"),
				S = t("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = t("./src/reddit/selectors/inFeedChaining.ts"),
				j = t("./src/reddit/selectors/platform.ts"),
				_ = t("./src/reddit/selectors/posts.ts"),
				N = t("./src/reddit/selectors/subscriptions.ts"),
				P = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/index.tsx"),
				E = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/Post/constants.ts"),
				k = t("./src/reddit/components/DiscoveryUnit/InFeedChaining/index.m.less"),
				I = t.n(k);

			function T() {
				return (T = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = 500,
				U = 600,
				D = {
					stiffness: 200,
					damping: 20
				},
				F = Object(a.c)({
					discoveryUnit: O.b,
					postChain: O.f,
					postSubreddit: _.Y,
					routeName: j.q,
					subscribedProfiles: N.c,
					subscribedSubreddits: N.d
				}),
				L = Object(o.b)(F, (e, s) => {
					let {
						listingKey: t,
						postId: r
					} = s;
					return {
						dismissPostChaining: () => {
							t && e(Object(m.e)())
						},
						openPost: s => e(Object(w.a)(s.permalink))
					}
				});
			class M extends n.a.Component {
				constructor(e) {
					super(e), this.showCarouselTimer = null, this.showDUTimer = null, this.showDU = () => {
						this.showDUTimer = window.setTimeout(() => {
							this.setState({
								isDUVisible: !0
							}, this.showCarousel)
						}, B)
					}, this.showCarousel = () => {
						this.showCarouselTimer = window.setTimeout(() => {
							this.setState({
								isCarouselVisible: !0
							})
						}, U)
					}, this.onOverflowClick = () => {
						const {
							discoveryUnit: e,
							postSubreddit: s
						} = this.props;
						e && this.props.sendEvent(Object(x.d)(e, s))
					}, this.onShowMeLessClick = () => {
						const {
							discoveryUnit: e,
							dismissPostChaining: s,
							postSubreddit: t
						} = this.props;
						s(), e && this.props.sendEvent(Object(x.a)(e, t))
					}, this.getItemPostSubredditSubscribeEventFactory = e => {
						const {
							discoveryUnit: s,
							postSubreddit: t
						} = this.props;
						if (s) return Object(x.z)(s, e, t)
					}, this.trackDiscoveryUnitViewed = () => {
						const {
							discoveryUnit: e,
							postSubreddit: s
						} = this.props;
						e && this.props.sendEvent(Object(x.g)(e, s))
					}, this.trackArrowClicked = e => {
						const {
							postSubreddit: s
						} = this.props;
						this.props.sendEvent(Object(x.e)(e, void 0, s))
					}, this.trackPostViewed = (e, s) => {
						const {
							postSubreddit: t
						} = this.props;
						this.props.sendEvent(Object(x.B)(e, s, void 0, t))
					}, this.trackSubredditClicked = () => {
						const {
							discoveryUnit: e,
							postSubreddit: s
						} = this.props;
						e && s && this.props.sendEvent(Object(x.E)(e, s))
					}, this.trackPostSubredditOrProfileClicked = e => {
						const {
							discoveryUnit: s,
							postSubreddit: t
						} = this.props;
						s && this.props.sendEvent(Object(x.y)(s, e, void 0, t))
					}, this.openPost = (e, s) => {
						this.props.openPost(s);
						const {
							discoveryUnit: t
						} = this.props;
						t && this.trackPostViewed(t, s.id)
					}, this.renderPost = e => {
						const {
							discoveryUnit: s
						} = this.props, {
							subscribedProfiles: t,
							subscribedSubreddits: r
						} = this.state;
						return s ? n.a.createElement(P.a, T({}, e, {
							getSubscribeEventFactory: this.getItemPostSubredditSubscribeEventFactory,
							onClickPost: this.openPost,
							onSubredditOrProfileClick: this.trackPostSubredditOrProfileClicked,
							subscribedProfiles: t,
							subscribedSubreddits: r
						})) : null
					}, this.state = {
						isCarouselVisible: !1,
						isDUVisible: !1,
						subscribedProfiles: e.subscribedProfiles,
						subscribedSubreddits: e.subscribedSubreddits
					}
				}
				componentDidMount() {
					this.trackDiscoveryUnitViewed(), this.props.routeName !== c.zb.COMMENTS && this.setState({
						isCarouselVisible: !0,
						isDUVisible: !0
					})
				}
				componentDidUpdate(e) {
					this.state.isCarouselVisible || e.routeName !== c.zb.COMMENTS || this.props.routeName === c.zb.COMMENTS || this.showDU()
				}
				componentWillUnmount() {
					this.showCarouselTimer && clearTimeout(this.showCarouselTimer), this.showDUTimer && clearTimeout(this.showDUTimer)
				}
				render() {
					const {
						discoveryUnit: e,
						postId: s,
						postChain: t,
						postSubreddit: i
					} = this.props, {
						isDUVisible: o,
						isCarouselVisible: a
					} = this.state;
					return e ? n.a.createElement("div", {
						className: Object(d.a)(I.a.container, o && I.a.containerVisible, this.props.className),
						"data-redditstyle": !0
					}, n.a.createElement("div", {
						className: I.a.layout,
						style: {
							backgroundColor: Object(r.e)(-.95, Object(S.a)(this.props).navIcon)
						}
					}, n.a.createElement("div", {
						className: I.a.header
					}, n.a.createElement("div", {
						className: I.a.title
					}, i ? n.a.createElement(n.a.Fragment, null, n.a.createElement(y.c, null, "Similar communities to"), n.a.createElement(v.a, {
						className: I.a.subredditLink,
						to: i.url,
						onMouseDown: this.trackSubredditClicked
					}, Object(f.b)(i.name))) : n.a.createElement(y.c, null, "Similar communities")), n.a.createElement("div", {
						className: I.a.description
					}, n.a.createElement(y.c, null, "Top posts from the last 24 hours")), n.a.createElement(p.b, {
						className: I.a.overflow,
						dropdownClassName: I.a.overflowDropdown,
						dropdownId: "chain-overflow-".concat(s),
						onClick: this.onOverflowClick
					}, n.a.createElement(h.b, {
						className: I.a.overflowItem,
						displayText: Object(g.c)("Show me less of this"),
						iconWrapperClassName: I.a.overflowItemIconWrapper,
						onClick: this.onShowMeLessClick
					}, n.a.createElement(C.a, {
						className: I.a.hideIcon
					})))), n.a.createElement("div", {
						className: I.a.body
					}, n.a.createElement(u.a, {
						className: Object(d.a)(I.a.carousel, a && I.a.carouselVisible),
						discoveryUnit: e,
						discoveryUnitSubreddit: i,
						isHidden: !a,
						isLoading: !1,
						items: t,
						itemWidth: E.a,
						leftArrowClassName: I.a.arrow,
						onArrowClick: this.trackArrowClicked,
						onPostView: this.trackPostViewed,
						renderPost: this.renderPost,
						rightArrowClassName: I.a.arrow,
						seed: s,
						shouldSlideIn: !0,
						springConfig: D
					})))) : null
				}
			}
			s.default = Object(l.a)(L(Object(b.b)(M)))
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, s, t) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, s, t) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/polished/dist/polished.es.js"),
				i = t("./node_modules/react/index.js"),
				n = t.n(i),
				o = t("./node_modules/react-redux/es/index.js"),
				a = t("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = t("./src/lib/lessComponent.tsx"),
				c = t("./src/reddit/actions/page.ts"),
				l = t("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = t("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				u = t.n(m);
			const p = Object(o.b)(null, e => ({
					onNavigate: s => e(Object(c.G)(s))
				})),
				b = d.a.wrapped(e => n.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: s => {
						((e, s, t) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), s(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), t && t(e)
						})(s, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(r.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(r.j)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", u.a);
			s.a = p(Object(a.a)(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, s, t) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return _
			}));
			t("./node_modules/core-js/modules/es6.symbol.js");
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./node_modules/react/index.js"),
				n = t.n(i),
				o = t("./src/reddit/constants/elementClassNames.ts"),
				a = t("./src/reddit/controls/Button/index.tsx"),
				d = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = t("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = t("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = t("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = t.n(m),
				p = t("./src/lib/classNames/index.ts"),
				b = t("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, s) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && s.indexOf(r) < 0 && (t[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) s.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (t[r[i]] = e[r[i]])
				}
				return t
			};
			const f = b.a.button("IconButton", u.a),
				w = b.a.wrapped(c.a, "SubscribeIcon", u.a),
				x = b.a.wrapped(d.a, "UnsubscribeIcon", u.a),
				y = b.a.wrapped(e => {
					var {
						border: s,
						small: t
					} = e, r = v(e, ["border", "small"]);
					return n.a.createElement(f, r, n.a.createElement(w, {
						className: Object(p.a)(r.className, {
							[u.a.isSmall]: t
						})
					}))
				}, "SubscribeIconButton", u.a),
				g = b.a.wrapped(e => {
					var {
						border: s,
						small: t
					} = e, r = v(e, ["border", "small"]);
					return s ? n.a.createElement(a.f, h({}, r, {
						className: Object(p.a)(r.className, {
							[u.a.isSmall]: t
						})
					})) : n.a.createElement(a.n, h({}, r, {
						className: Object(p.a)(r.className, {
							[u.a.isSmall]: t
						})
					}))
				}, "SubscribeInternalButton", u.a),
				C = e => {
					var {
						icon: s
					} = e, t = v(e, ["icon"]);
					return s ? n.a.createElement(y, h({}, t, {
						className: Object(p.a)(t.className, {
							[u.a.isSmall]: t.small
						})
					})) : n.a.createElement(g, h({}, t, {
						className: Object(p.a)(t.className, {
							[u.a.isSmall]: t.small
						})
					}))
				},
				S = b.a.wrapped(e => {
					var {
						border: s,
						language: t,
						small: r,
						type: i
					} = e, a = v(e, ["border", "language", "small", "type"]);
					return n.a.createElement(f, a, n.a.createElement(x, {
						className: Object(p.a)(o.n, a.className, {
							[u.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				O = b.a.wrapped(e => {
					var {
						border: s,
						language: t,
						small: i,
						type: o
					} = e, d = v(e, ["border", "language", "small", "type"]);
					const c = n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), n.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === o ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(p.a)(d.className, {
							[u.a.isSmall]: i
						});
					return s ? n.a.createElement(a.i, h({}, d, {
						className: l,
						children: c
					})) : n.a.createElement(a.n, h({}, d, {
						className: l,
						children: c
					}))
				}, "UnsubscribeButton", u.a),
				j = e => {
					var {
						icon: s
					} = e, t = v(e, ["icon"]);
					return s ? n.a.createElement(S, h({}, t, {
						className: Object(p.a)(t.className, {
							[u.a.isSmall]: t.small
						})
					})) : n.a.createElement(O, h({}, t, {
						className: Object(p.a)(t.className, {
							[u.a.isSmall]: t.small
						})
					}))
				};
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						className: s,
						icon: t = !1,
						id: r,
						language: i,
						small: o = !1
					} = this.props, a = {
						border: e,
						className: s,
						icon: t,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? n.a.createElement(j, h({}, a, {
						language: i,
						type: this.props.identifier.type
					})) : n.a.createElement(C, h({}, a, {
						id: r
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./src/reddit/components/TrackingHelper/index.tsx"),
				i = t("./src/reddit/connectors/SubscribeButton/index.ts"),
				n = t("./src/reddit/components/SubscribeButton/Base.tsx");
			s.a = Object(i.a)(Object(r.b)(n.a))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return n
			})), t.d(s, "b", (function() {
				return o
			}));
			var r = t("./src/reddit/constants/posts.ts"),
				i = t("./src/reddit/helpers/name/index.ts");

			function n(e, s) {
				return (s === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, s) {
				return s === r.a.PROFILE ? Object(i.c)(e) : Object(i.b)(e)
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/react-redux/es/index.js"),
				i = t("./node_modules/reselect/es/index.js"),
				n = t("./src/reddit/actions/post.ts"),
				o = t("./src/reddit/actions/postFlair.ts"),
				a = t("./src/reddit/actions/tooltip.ts"),
				d = t("./src/reddit/models/Vote/index.ts"),
				c = t("./src/reddit/contexts/PageLayer/index.tsx"),
				l = t("./src/reddit/selectors/activeModalId.ts"),
				m = t("./src/reddit/selectors/moderatorPermissions.ts"),
				u = t("./src/reddit/selectors/postFlair.ts"),
				p = t("./src/reddit/selectors/posts.ts"),
				b = t("./src/reddit/selectors/user.ts");
			const h = Object(r.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.c,
				crosspostSubredditOrProfile: p.d,
				currentUser: b.i,
				flairStyleTemplate: c.P,
				hideNSFWPref: b.y,
				isActive: p.h,
				language: b.O,
				moderatorPermissions: m.i,
				modModeEnabled: c.N,
				post: p.M,
				showEditFlair: u.a,
				subredditOrProfile: p.Y,
				userIsOp: b.eb
			}), (e, s) => {
				let {
					postId: t
				} = s;
				return {
					dispatchFlairChanged: s => {
						let {
							post: t,
							previewFlair: r,
							selectedTemplateId: i
						} = s;
						return e(Object(o.h)({
							post: t,
							previewFlair: r,
							selectedTemplateId: i
						}))
					},
					handleVote: s => {
						const r = s === d.a.upvoted ? Object(n.X)(t) : Object(n.u)(t);
						e(r)
					},
					onIgnoreReports: () => e(Object(n.V)(t)),
					onOpenReportsDropdown: s => e(Object(a.h)({
						tooltipId: s
					}))
				}
			}, (e, s, t) => Object.assign({}, t, e, s, {
				onFlairChanged: t => {
					let {
						previewFlair: r,
						selectedTemplateId: i
					} = t;
					return s.dispatchFlairChanged({
						post: e.post,
						previewFlair: r,
						selectedTemplateId: i
					})
				}
			}), {
				forwardRef: !0
			});
			s.a = h
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, s, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				i = t.n(r);
			s.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=InFeedChaining.f7053cc26d3c7cd63ed8.js.map