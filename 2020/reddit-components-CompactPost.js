// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.12e540654037f5b6ebbb.js
// Retrieved at 6/23/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
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
						p = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						u = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						x = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						h = !a && !p && !m && !u && /linux/i.test(t),
						v = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = s(/version\/(\d+(\.\d+)?)/i),
						E = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !E && /[^-]mobi/i.test(t),
						g = /xbox/i.test(t);
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
					} : b ? (n = {
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
					} : p ? n = {
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
					} : m ? n = {
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
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && O && (n.version = O)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : g ? (n.xbox = e, n.osname = "Xbox") : x ? (n.windows = e, n.osname = "Windows") : h && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var _ = "";
					n.windows ? _ = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? _ = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? _ = (_ = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? _ = (_ = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? _ = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? _ = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? _ = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? _ = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (_ = s(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (n.osversion = _);
					var w = !n.windows && _.split(".")[0];
					return E || d || "ipad" == r || a && (3 == w || w >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Se
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/actions/postFlair.ts"),
				y = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				C = s("./src/reddit/components/AwardBadges/index.tsx"),
				T = s("./src/reddit/components/CallToActionButton/index.tsx"),
				S = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				N = s("./src/reddit/components/CommentsLink/index.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				L = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/ExpandoButton/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				F = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				D = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				W = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				H = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				V = s("./src/reddit/components/ModModeReports/index.tsx"),
				z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				G = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PopupPortal/index.tsx"),
				Z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostBadges/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				U = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Q = s("./src/reddit/components/PostMedia/index.tsx"),
				q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/components/PostTopMeta/index.tsx"),
				se = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				oe = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = s("./src/reddit/components/SubredditIcon/index.tsx"),
				re = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/contexts/InsideOverlay.tsx"),
				de = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/controls/Checkbox/index.tsx"),
				le = s("./src/reddit/controls/MetaData/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				me = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ue = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				be = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				xe = s("./src/reddit/helpers/postEvent.ts"),
				fe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				he = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ve = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Oe = s.n(ve),
				Ee = s("./src/reddit/components/CompactPost/index.m.less"),
				ye = s.n(Ee);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _e = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const we = e => {
					var {
						isCompact: t
					} = e, s = _e(e, ["isCompact"]);
					return n.a.createElement(A.a, ge({
						className: Object(c.a)(ye.a.responsiveExpandoButton, {
							[ye.a.mHideAboveSmallTablets]: !!t,
							[ye.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				je = Object(r.b)(() => Object(i.c)({
					activeModalId: g.a,
					crosspost: j.d,
					currentUser: P.i,
					flairStyleTemplate: de.R,
					isActive: j.j,
					isExpanded: j.m,
					layout: de.N,
					moderatorPermissions: _.i,
					modModeEnabled: de.P,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: j.O,
					showEditFlair: w.a,
					subredditOrProfile: j.bb,
					userIsOp: P.hb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							} = t;
							return e(Object(E.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const s = t === v.a.upvoted ? Object(O.db)(n) : Object(O.z)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(O.bb)(n)),
						onOpenReportsDropdown: t => e(Object(y.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: o,
							selectedTemplateId: n
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: o,
							selectedTemplateId: n
						})
					}
				}));
			class Pe extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: o,
						currentUser: r,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						isCheckboxSelected: p = !1,
						isCommentsPage: v,
						isCommentPermalink: O,
						isExpanded: E,
						isOverlay: y,
						isProfilePostListing: g,
						inSubredditOrProfile: _ = !1,
						layout: w,
						moderatorPermissions: j,
						modModeEnabled: P,
						onClickPost: A,
						onFlairChanged: Q,
						onIgnoreReports: oe,
						poll: ne,
						post: ie,
						subredditOrProfile: de,
						userIsOp: le,
						hideModTools: ve,
						scrollerItemRef: Ee,
						showBulkActionCheckbox: ge,
						showEditFlair: _e,
						toggleCheckbox: we,
						tooltipType: je,
						sendEvent: Pe
					} = this.props, Ce = !!ie.media && ie.media.type === f.n.RTJSON, Se = le && Ce, Ie = Object(U.b)(ie.id, y), Me = Object(be.a)(j), Le = Object(me.a)(j), Ae = Object(ue.a)(j), Be = "-mod-actions-menu-".concat(ie.id), Fe = "voting-arrows-".concat(ie.id), Re = !!r && Object(h.e)(r) === ie.author, De = Object(z.c)(ie), We = Object(F.a)("View--Reports", ie.id, je), He = Object(z.a)(ie), Ve = !(y || v || O), ze = ie.media && ie.media.type === f.n.LIVEVIDEO, {
						moderationPrompt: Ge
					} = ie, Ke = e => Pe(Object(x.f)(ie.id, e)), Ze = n.a.createElement(X.a, {
						className: Object(c.a)(Oe.a.compactPostStyles, ye.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: y,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ie,
						onClick: A,
						eventFactory: a
					}, n.a.createElement("div", {
						className: ye.a.compactWrapper
					}, n.a.createElement("div", {
						className: ye.a.leftRailWrapper
					}, n.a.createElement("div", {
						className: ye.a.leftRail,
						style: {
							borderColor: Object(Y.c)({
								isRemoved: !!ie.bannedBy,
								isReported: Object(u.a)(ie),
								isSponsored: ie.isSponsored,
								theme: this.props.theme
							})
						}
					}, ge && n.a.createElement(ce.a, {
						className: ye.a.bulkActionCheckbox,
						isCheckboxSelected: p,
						toggleCheckbox: we
					}), n.a.createElement(re.a, {
						className: ye.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: ie,
						onVoteClick: l
					}), n.a.createElement(I.a, {
						className: ye.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: ie,
						onVoteClick: l,
						upvoteTooltipId: Fe
					}), Ge && n.a.createElement(K.b, {
						rightOf: Fe
					}, "survey" === Ge ? n.a.createElement(H.a, {
						post: ie,
						subredditName: de.name,
						isOverlay: !!y
					}) : n.a.createElement(W.a, {
						post: ie,
						subredditName: de.name,
						isOverlay: !!y
					})))), n.a.createElement(Z.a, {
						className: Object(c.a)(ye.a.content, {
							[ye.a.isEvent]: Object(xe.a)(ie)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, n.a.createElement(L.a, {
						isCompactMode: !0,
						post: ie
					}), n.a.createElement("div", {
						className: ye.a.compactPostRow
					}, !ve && Te(ie, o, E, !1), !_ && !ie.isSponsored && n.a.createElement(R.h, {
						type: ie.belongsTo.type,
						id: ie.belongsTo.id
					}), n.a.createElement("div", {
						className: ye.a.topLine,
						"data-click-id": "body"
					}, n.a.createElement(ee.c, {
						post: ie,
						poll: ne,
						size: ee.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Ne(ie, de), n.a.createElement(te.d, {
						className: ye.a.postTopMeta,
						flairStyleTemplate: i,
						post: ie,
						showSub: !!de && !_ && !ie.isSponsored,
						subredditOrProfile: de
					}), n.a.createElement(J.a, {
						className: ye.a.postBadges,
						displayText: de ? de.displayText : null,
						inSubredditOrProfile: _,
						post: ie
					}), de && n.a.createElement(M.a, {
						className: ye.a.donationAmount,
						contentId: ie.id,
						subredditId: de.id
					}), n.a.createElement(C.a, {
						isOverlay: !!y,
						thing: ie
					})), Ve && !ze && n.a.createElement("div", null, n.a.createElement(S.a, {
						className: ye.a.liveDiscussionIcon,
						isMod: Me,
						postId: ie.postId
					})), n.a.createElement("div", {
						className: ye.a.flatList
					}, n.a.createElement(N.a, {
						className: ye.a.commentsLink,
						hasModPostPerms: Me,
						isCommentsPage: v,
						isCommentPermalink: O,
						isOverlay: y,
						postId: ie.id,
						modModeEnabled: P,
						numComments: ie.numComments,
						type: m.g.Compact
					}), n.a.createElement(G.a, {
						className: ye.a.modToolsFlatlist,
						isOverlay: !1,
						layout: w,
						modModeEnabled: P,
						post: ie,
						sendEvent: Pe,
						showIconsOnly: !0
					}), Me && n.a.createElement(D.a, {
						dropdownId: Be,
						onClick: () => Ke("post_mod_action_menu")
					}, n.a.createElement(B.b, null), n.a.createElement(q.a, {
						canEditFlair: Le && _e,
						hasModPostPerms: Me,
						hasModFullPerms: Ae,
						isOverlay: !1,
						isPostAuthor: Re,
						modModeEnabled: P,
						post: ie,
						tooltipId: Be
					})), Me && De && !P && n.a.createElement(se.c, {
						text: "".concat(He),
						onClick: () => {
							this.props.onOpenReportsDropdown(We), Ke("post_report_menu")
						},
						id: We
					}, n.a.createElement(ae.a, {
						model: ie,
						onIgnoreReports: () => {
							oe(), Ke(ie.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: We
					}), ie.ignoreReports ? n.a.createElement(fe.a, null) : n.a.createElement(he.a, null)), n.a.createElement($.g, {
						currentProfileName: s,
						isCommentsPage: v,
						isOverlay: !1,
						isProfilePostListing: g,
						layout: w,
						permalink: ie.permalink,
						postId: ie.postId,
						sendEvent: Pe,
						showEditPost: Se,
						showEditFlair: _e,
						dropdownId: "".concat(ie.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object($.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ve && Te(ie, o, E, !0))), ie.source && ie.source.url && ie.isSponsored && n.a.createElement(k.a, {
						className: ye.a.adLinkWrapper
					}, n.a.createElement(pe.a, {
						href: ie.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ie.isSponsored,
						postId: ie.id,
						source: ie.source
					}, ie.source.displayText), ie.callToAction && n.a.createElement(T.a, {
						href: ie.source.url.replace(d.a.redditUrl, ""),
						isSponsored: ie.isSponsored,
						postId: ie.id,
						source: ie.source,
						isNotCardView: !0
					}, ie.callToAction)), P && Me && De && n.a.createElement("div", {
						className: ye.a.compactPostRow
					}, n.a.createElement(V.a, {
						onIgnoreReports: oe,
						reportable: ie
					})), n.a.createElement(R.d, {
						postId: ie.id
					}))), E && n.a.createElement(ke, {
						post: ie,
						scrollerItemRef: Ee,
						flairStyleTemplate: i
					}), e === Ie && n.a.createElement(U.a, {
						flairs: ie.flair,
						subredditId: ie.belongsTo.id,
						modalId: Ie,
						onFlairChanged: Q
					}));
					return n.a.createElement(n.a.Fragment, null, Ze)
				}
			}
			const ke = e => n.a.createElement(Z.a, {
					className: Object(c.a)(e.className, ye.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? n.a.createElement("div", {
					className: ye.a.crosspostMediaWrapper
				}, Ce(e.post, e.scrollerItemRef)) : Ce(e.post, e.scrollerItemRef)),
				Ce = (e, t) => n.a.createElement(Q.a, {
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
				Te = (e, t, s, o) => n.a.createElement(we, {
					crosspost: t,
					isCompact: o,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Se = e => n.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, n.a.createElement(ne.b, {
					className: ye.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ne = (e, t) => n.a.createElement("div", {
					className: ye.a.responsiveMeta
				}, n.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), n.a.createElement(le.c, null), Object(le.d)(e.numComments), n.a.createElement(le.c, null), t && n.a.createElement("a", {
					href: t.url
				}, n.a.createElement(le.a, null, t.displayText)), e.isSponsored && [n.a.createElement(oe.a, {
					key: "label"
				}), n.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && n.a.createElement(le.a, null, " Posted by "), n.a.createElement(te.b, {
					post: e
				}));
			t.default = je(Object(p.c)(Object(ie.b)(Object(l.a)(Pe))))
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
				p = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				E = s.n(O),
				y = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = y.a.div("Container", E.a),
				w = y.a.div("PostMetaWrapper", E.a),
				j = y.a.wrapped(u.c, "PostTitle", E.a),
				P = y.a.div("FlatList", E.a),
				k = y.a.div("FlatItem", E.a),
				C = y.a.span("FlatListDotSpacer", E.a),
				T = y.a.wrapped(_, "LinkContainer", E.a),
				S = y.a.div("Content", E.a),
				N = y.a.div("ThumbnailContainer", E.a),
				I = Object(d.c)({
					isCurrentUserProfilePost: h.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Ab.TOPIC),
					post: h.O,
					shouldOpenPostInNewTab: v.U,
					subreddit: h.bb
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
				return a && !a.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(S, null, r.a.createElement(w, null, r.a.createElement(m.a, d)), L(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), R(e)) : r.a.createElement(_, {
					className: c
				}, r.a.createElement(w, null, r.a.createElement(m.a, d)), L(a), A(e), B(e))
			});
			const L = e => r.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(p.a, g({}, o, {
						className: E.a.mediaContainer
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(P, null, r.a.createElement(k, null, o.fbt._({
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
				R = e => r.a.createElement(N, null, r.a.createElement(x.a, {
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
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				f = s("./src/reddit/icons/fonts/helpers.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(h);
			var O = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(f.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				E = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				g = s("./src/reddit/icons/fonts/Link/index.tsx"),
				_ = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/components/ExpandoButton/index.m.less"),
				T = s.n(C);
			const S = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.A)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(T.a.icon, T.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: o
					});
					if (s.pollData) return r.a.createElement(P.a, {
						className: o
					});
					switch (e) {
						case k.n.GIFVIDEO:
							return r.a.createElement(y.a, {
								className: o
							});
						case k.n.IMAGE:
							return r.a.createElement(w.a, {
								className: o
							});
						case k.n.TEXT:
						case k.n.RTJSON:
							return r.a.createElement(j.a, {
								className: o
							});
						case k.n.VIDEO:
							return r.a.createElement(E.a, {
								className: o
							});
						case k.n.EMBED:
						default:
							return r.a.createElement(g.a, {
								className: o
							})
					}
				};
			t.a = S(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: f
				} = e, h = s || l, v = n && !!s;
				return h.media && !(("rtjson" === h.media.type || "text" === h.media.type) && !Object(m.a)(h)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, T.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? r.a.createElement(b.a, {
					className: T.a.icon
				}) : f ? r.a.createElement(r.a.Fragment, null, N(h.media && h.media.type, v, l), r.a.createElement(x.a, {
					className: Object(d.a)(T.a.icon, T.a.showOnHover)
				})) : r.a.createElement(x.a, {
					className: T.a.icon
				})) : h.source && h.source.url ? r.a.createElement(p.a, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					href: h.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(_.a, {
					className: Object(d.a)(T.a.icon, T.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, T.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(h.permalink),
					rel: "nofollow"
				}, r.a.createElement(O, {
					className: T.a.icon
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
			var p = function(e, t) {
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
					redditStyle: m,
					theme: u
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a
				}, b), t)
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
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: E,
					isTopicPage: y,
					post: g,
					shouldShowSubscribeButton: _,
					subredditOrProfile: w,
					tooltipType: j
				} = e, P = !!y;
				return n.a.createElement("div", {
					className: O.a.metaContainer
				}, !o && !g.isSponsored && w && n.a.createElement(i.a, {
					postId: g.id,
					subredditName: w.name
				}, n.a.createElement(m.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: w.url
				}, w.displayText)), w && w.isQuarantined && n.a.createElement(p.a, null), !o && !g.isSponsored && w && _ && !v && n.a.createElement(u.a, {
					getEventFactory: e => Object(f.f)(g.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(h.f)(w) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: g.id,
					small: !0
				}), !o && !g.isSponsored && n.a.createElement(x.b, null), !o && !g.isSponsored && n.a.createElement(d.h, {
					type: g.belongsTo.type,
					id: g.belongsTo.id
				}), n.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: g,
					tooltipType: j
				}), n.a.createElement(c.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					post: g,
					tooltipType: j
				}), w && n.a.createElement(a.a, {
					className: O.a.donationAmount,
					contentId: g.id,
					subredditId: w.id
				}), !P && n.a.createElement(r.a, {
					hideCta: s,
					isOverlay: !!E,
					thing: g
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
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(p);
			const u = Object(a.b)(null, e => ({
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
						"--RawHTMLDisplay-tr-even": Object(o.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(o.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = u(Object(i.a)(b))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(d),
				l = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const p = a.a.span("metaText", c.a),
				m = e => r.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: n
					} = e, a = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const d = Object(i.b)(s),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(s, "number", d)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(s, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(p, a, m)
				},
				b = e => r.a.createElement(p, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const p = {},
				m = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
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
						background: m(t)
					}
				},
				b = e => Object(o.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
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
//# sourceMappingURL=reddit-components-CompactPost.12e540654037f5b6ebbb.js.map