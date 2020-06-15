// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.b04e3f8d767f76f13f7f.js
// Retrieved at 6/15/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
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
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						p = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						x = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !x && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						f = !a && !m && !p && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = s(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !y && /[^-]mobi/i.test(t),
						P = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: O || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: O || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: O || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: O || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : x ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, v ? (n.msedge = e, n.version = v) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: v
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || O
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
						version: O || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : u ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: O || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : p ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? n = {
						name: "Android",
						version: O
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, O && (n.version = O)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, O && (n.version = O)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || O
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && O && (n.version = O)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : h ? (n.mac = e, n.osname = "macOS") : P ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var j = "";
					n.windows ? j = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? j = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? j = (j = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? j = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? j = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? j = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? j = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (j = s(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (n.osversion = j);
					var E = !n.windows && j.split(".")[0];
					return y || d || "ipad" == r || a && (3 == E || E >= 4 && !g) || n.silk ? n.tablet = e : (g || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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

				function a(e, o, n) {
					var a = s;
					"string" == typeof o && (n = o, o = void 0), void 0 === o && (o = !1), n && (a = t(n));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([i, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return o = s, !1
				})), o
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
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? o : a,
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
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(i);

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
				return n.a.createElement(a.a, c({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				d = s.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: o,
					forceShowNSFW: i,
					isMeta: c,
					post: l,
					redditStyle: m,
					removeLink: p,
					templatePlaceholderImage: u,
					thumbnailContainerClassName: x,
					url: b,
					usePreview: h
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(d.a.thumbnailContainer, t)
				}, n.a.createElement(a.a, {
					className: Object(r.a)(d.a.thumbnail, s),
					containerClassName: x,
					crosspost: o,
					forceShowNSFW: i,
					isMeta: c,
					post: l,
					redditStyle: m,
					removeLink: p,
					templatePlaceholderImage: u,
					url: p ? void 0 : b,
					usePreview: h
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
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
				chain: "sfueWOUNVDpNGfP_Ow2yN",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return H
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				b = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/helpers.ts"),
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/PostMedia/index.tsx"),
				g = s("./src/reddit/components/PostMeta/index.tsx"),
				P = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				j = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				E = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				N = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				T = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				I = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				A = s.n(B),
				F = s("./src/reddit/components/ClassicPost/index.m.less"),
				R = s.n(F);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const D = 16;
			class V extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: i,
						inSubredditOrProfile: y,
						eventFactory: S,
						first: N,
						flairStyleTemplate: B,
						formatTitle: F,
						isCheckboxSelected: V,
						isCurrentUserProfilePost: z,
						isFrontpage: X,
						isLoggedIn: G,
						isOverlay: J,
						moderatorPermissions: K,
						modModeEnabled: U,
						onClickPost: Q,
						onIgnoreReports: q,
						onOpenReportsDropdown: Z,
						poll: Y,
						post: $,
						redditStyle: ee,
						scrollerItemRef: te,
						showBulkActionCheckbox: se,
						showEditFlair: oe,
						showMedia: ne,
						subredditOrProfile: re,
						toggleCheckbox: ae,
						userIsOp: ie
					} = this.props, de = ee ? void 0 : B, ce = this.props.crosspost || void 0, le = Object(M.a)(K), me = Object(T.a)(K), pe = Object(I.a)(K), ue = U && M.a, xe = !!$.media && $.media.type === k.n.RTJSON, be = ie && xe, he = y && !ne, fe = !!$.media && Object(k.B)($.media), ve = {
						flairStyleTemplate: de,
						post: $,
						inSubredditOrProfile: y,
						isCurrentUserProfilePost: z,
						isOverlay: J,
						shouldShowSubscribeButton: !(X && G),
						subredditOrProfile: re
					}, Oe = n.a.createElement(O.a, {
						className: Object(a.a)(A.a.classicPostStyles, R.a.postContainer, Object(L.a)(this.props), N ? R.a.mFirst : void 0, e),
						isOverlay: J,
						style: Object.assign({}, Object(L.d)(this.props), Object(L.b)(this.props.flairStyleTemplate)),
						post: $,
						onClick: Q,
						eventFactory: S
					}, n.a.createElement(j.a, {
						model: $,
						handleVote: s,
						showBulkActionCheckbox: se,
						isCheckboxSelected: V,
						toggleCheckbox: ae,
						flairStyleTemplate: de,
						redditStyle: ee,
						subreddit: re
					}), n.a.createElement(v.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, n.a.createElement(p.a, {
						className: R.a.eventMeta,
						post: $
					}), n.a.createElement("div", {
						className: R.a.mainBody
					}, n.a.createElement("div", {
						className: he ? R.a.expandoContainer : R.a.thumbnailContainer
					}, !he && n.a.createElement(C.a, {
						className: R.a.classicThumbnail,
						crosspost: ce && $,
						isMeta: i,
						post: ce || $,
						redditStyle: ee,
						templatePlaceholderImage: de && de.postPlaceholderImage,
						removeLink: fe
					}), n.a.createElement(u.a, {
						crosspost: ce,
						className: R.a.rightExpando,
						isExpanded: !!o,
						post: $,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: R.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(D, "px")
						}
					}, n.a.createElement(E.c, {
						className: Y ? R.a.titleWithPoll : void 0,
						format: F,
						poll: Y,
						post: $,
						redditStyle: ee,
						size: E.b.Medium,
						titleColor: de && de.postTitleColor,
						isOverlay: J
					}, $.source && !ce && n.a.createElement(w.a, {
						href: $.source.url,
						isSponsored: $.isSponsored,
						postId: $.id,
						source: $.source
					}, Object(d.a)($))), n.a.createElement(g.a, W({
						key: "PostMeta"
					}, ve)), U && le && Object(f.c)($) && n.a.createElement(h.a, {
						onIgnoreReports: q,
						reportable: $
					}), n.a.createElement("div", {
						className: R.a.spacer
					}), $.source && $.source.url && $.isSponsored && n.a.createElement(c.a, {
						className: R.a.adLinkWrapper
					}, n.a.createElement(w.a, {
						href: $.source.url.replace(r.a.redditUrl, ""),
						isSponsored: $.isSponsored,
						postId: $.id,
						source: $.source
					}, $.source.displayText), $.callToAction && n.a.createElement(l.a, {
						href: $.source.url.replace(r.a.redditUrl, ""),
						isSponsored: $.isSponsored,
						postId: $.id,
						source: $.source
					}, $.callToAction)), n.a.createElement("div", {
						className: R.a.flatlistContainer
					}, n.a.createElement(u.a, {
						className: R.a.leftExpando,
						crosspost: ce,
						isExpanded: !!o,
						post: $,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: R.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: $,
						onVoteClick: s
					}), n.a.createElement(x.a, {
						className: R.a.flatlistSeparator
					}), n.a.createElement(x.c, {
						className: R.a.flatlist,
						currentUser: t,
						hasModFlairPerms: me,
						hasModPostPerms: le,
						hasModFullPerms: pe,
						isOverlay: !!J,
						modModeEnabled: U,
						onIgnoreReports: q,
						onOpenReportsDropdown: Z,
						post: $,
						showEditPost: be,
						showEditFlair: oe,
						tooltipType: J ? _.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(P.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), n.a.createElement(b.d, {
						postId: $.id
					}))), H($, te, o)));
					return n.a.createElement(n.a.Fragment, null, Oe)
				}
			}
			const H = (e, t, s) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: R.a.crosspostMediaWrapper
				}, z(e, t)) : z(e, t) : null,
				z = (e, t) => n.a.createElement(y.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				X = Object(i.a)(V),
				G = Object(N.a)(X);
			t.default = Object(S.a)(X)
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				x = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				y = s.n(O),
				g = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const j = g.a.div("Container", y.a),
				E = g.a.div("PostMetaWrapper", y.a),
				_ = g.a.wrapped(u.c, "PostTitle", y.a),
				w = g.a.div("FlatList", y.a),
				k = g.a.div("FlatItem", y.a),
				C = g.a.span("FlatListDotSpacer", y.a),
				S = g.a.wrapped(j, "LinkContainer", y.a),
				N = g.a.div("Content", y.a),
				T = g.a.div("ThumbnailContainer", y.a),
				I = Object(d.c)({
					isCurrentUserProfilePost: f.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Ab.TOPIC),
					post: f.O,
					shouldOpenPostInNewTab: v.U,
					subreddit: f.bb
				}),
				M = Object(a.b)(I);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: a,
					subreddit: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					c = t;
				return a && !a.media ? r.a.createElement(S, {
					className: c
				}, r.a.createElement(N, null, r.a.createElement(E, null, r.a.createElement(p.a, d)), L(a), a.source && r.a.createElement(x.a, {
					post: a
				}), A(e)), R(e)) : r.a.createElement(j, {
					className: c
				}, r.a.createElement(E, null, r.a.createElement(p.a, d)), L(a), B(e), A(e))
			});
			const L = e => r.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, P({}, o, {
						className: y.a.mediaContainer
					})))
				},
				A = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(k, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(C, null), r.a.createElement(k, null, F(e)))
				},
				F = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(i.a, {
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
				R = e => r.a.createElement(T, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				h = s("./src/reddit/icons/fonts/helpers.tsx"),
				f = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(f);
			var O = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(h.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				y = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				g = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				P = s("./src/reddit/icons/fonts/Link/index.tsx"),
				j = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Text/index.tsx"),
				w = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(C);
			const N = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.z)({
						postId: t.post.id
					}))
				})),
				T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(S.a.icon, S.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: o
					});
					if (s.pollData) return r.a.createElement(w.a, {
						className: o
					});
					switch (e) {
						case k.n.GIFVIDEO:
							return r.a.createElement(g.a, {
								className: o
							});
						case k.n.IMAGE:
							return r.a.createElement(E.a, {
								className: o
							});
						case k.n.TEXT:
						case k.n.RTJSON:
							return r.a.createElement(_.a, {
								className: o
							});
						case k.n.VIDEO:
							return r.a.createElement(y.a, {
								className: o
							});
						case k.n.EMBED:
						default:
							return r.a.createElement(P.a, {
								className: o
							})
					}
				};
			t.a = N(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: h
				} = e, f = s || l, v = n && !!s;
				return f.media && !(("rtjson" === f.media.type || "text" === f.media.type) && !Object(p.a)(f)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? r.a.createElement(x.a, {
					className: S.a.icon
				}) : h ? r.a.createElement(r.a.Fragment, null, T(f.media && f.media.type, v, l), r.a.createElement(b.a, {
					className: Object(d.a)(S.a.icon, S.a.showOnHover)
				})) : r.a.createElement(b.a, {
					className: S.a.icon
				})) : f.source && f.source.url ? r.a.createElement(m.a, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: f.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(j.a, {
					className: Object(d.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(f.permalink),
					rel: "nofollow"
				}, r.a.createElement(O, {
					className: S.a.icon
				}))
			})
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: d,
					redditStyle: p,
					theme: u
				} = e, x = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a
				}, x), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : n.a.createElement(a.a, Object.assign({}, e, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: y,
					isTopicPage: g,
					post: P,
					shouldShowSubscribeButton: j,
					subredditOrProfile: E,
					tooltipType: _
				} = e, w = !!g;
				return n.a.createElement("div", {
					className: O.a.metaContainer
				}, !o && !P.isSponsored && E && n.a.createElement(i.a, {
					postId: P.id,
					subredditName: E.name
				}, n.a.createElement(p.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: E.url
				}, E.displayText)), E && E.isQuarantined && n.a.createElement(m.a, null), !o && !P.isSponsored && E && j && !v && n.a.createElement(u.a, {
					getEventFactory: e => Object(h.f)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: E.name,
						type: Object(f.f)(E) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: P.id,
					small: !0
				}), !o && !P.isSponsored && n.a.createElement(b.b, null), !o && !P.isSponsored && n.a.createElement(d.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), n.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: _
				}), n.a.createElement(c.a, {
					displayText: E ? E.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: _
				}), E && n.a.createElement(a.a, {
					className: O.a.donationAmount,
					contentId: P.id,
					subredditId: E.id
				}), !w && n.a.createElement(r.a, {
					hideCta: s,
					isOverlay: !!y,
					thing: P
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				a = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = s("./src/reddit/components/PopupPortal/index.tsx"),
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
					toggleCheckbox: x = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					subreddit: f,
					isOverlay: v
				} = e, O = "upvote-button-".concat(t.id).concat(v ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return n.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && n.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: x
				}), n.a.createElement(c.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: O
				}), y && n.a.createElement(i.b, {
					rightOf: O
				}, "survey" === y ? n.a.createElement(a.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!v
				}) : n.a.createElement(r.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!v
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				x = d.a.wrapped(e => r.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(o.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(o.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(i.a)(x))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/experiments/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = {
					autoplayPref: b.b,
					activeModalId: l.a,
					crosspost: x.d,
					currentUser: b.i,
					isActive: x.j,
					isChatPostExperiment: m.d,
					isCurrentUserProfilePost: x.k,
					isExpanded: x.m,
					isLoggedIn: b.H,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(x.r)(e, s)
					},
					moderatorPermissions: p.i,
					modModeEnabled: c.P,
					post: x.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: c.r,
					subredditOrProfile: x.bb,
					userIsOp: b.hb,
					flairStyleTemplate: c.R
				},
				f = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === i.a.upvoted ? Object(r.cb)(n) : Object(r.y)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(r.ab)(n)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				},
				v = Object(o.b)(() => Object(n.c)(h), f, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			t.a = e => v(Object(d.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(d.t)({
					searchQuery: d.V
				}),
				m = new i.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = m.get(s);
						if (void 0 === o) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(r);
							for (let e = 1; e < a.length; e += 2) a[e] = n.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							o = n.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, n.a.Children.toArray(a)), m.set(s, o)
						}
						return o
					}
				},
				u = Object(r.b)(() => Object(a.c)(c.c), c.b, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return f
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				p = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				x = e => Object(o.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: x(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, s) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaVideo"), " ").concat(e.className)
			}), "TextMediaIcon", i.a);
			t.a = d
		}
	}
]);
//# sourceMappingURL=reddit-components-ClassicPost.b04e3f8d767f76f13f7f.js.map