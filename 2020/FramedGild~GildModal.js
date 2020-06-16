// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.63fcd12b0c5401c34f89.js
// Retrieved at 6/16/2020, 3:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var a;
			a = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function a(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						d = !o && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						g = !r && !l && /macintosh/i.test(t),
						f = !i && !m && !u && !p && /linux/i.test(t),
						w = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						E = /tablet/i.test(t) && !/tablet pc/i.test(t),
						N = !E && /[^-]mobi/i.test(t),
						x = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (n.msedge = e, n.version = w) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: w
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? n = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, v && (n.version = v)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, v && (n.version = v)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: a(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && v && (n.version = v)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : g ? (n.mac = e, n.osname = "macOS") : x ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
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
					var O = !n.windows && C.split(".")[0];
					return E || d || "ipad" == r || i && (3 == O || O >= 4 && !N) || n.silk ? n.tablet = e : (N || "iphone" == r || "ipod" == r || i || o || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function a(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, a = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) a.push(t(e[s]));
					return a
				}

				function r(e) {
					for (var t = Math.max(a(e[0]), a(e[1])), s = n(e, (function(e) {
							var s = t - a(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, a, n) {
					var i = s;
					"string" == typeof a && (n = a, a = void 0), void 0 === a && (a = !1), n && (i = t(n));
					var o = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([o, e[d]]) < 0
						} return a
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var a = e[t];
						if ("string" == typeof a && a in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = r, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = a() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", a)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, a, n) {
				return n(e, (function(e, n, r) {
					s = a ? (a = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), a(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				o = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = o(e) ? a : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, n)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/actions/gold/constants.ts");
			const o = Object(a.a)(i.X),
				d = () => async e => {
					e(Object(n.h)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/components/AnimatedPillBadge/index.m.less": function(e, t, s) {
			e.exports = {
				AnimatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				animatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				sizePulse: "_2xnejTzOKwD2N2wduYh5VS",
				sheen: "_3wsB6VQlSpMQ1YYy0RWWyw",
				sheenTraverse: "tJhGfB7_BsM9oPrnBPZJR"
			}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, s) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				c = s("./src/reddit/components/CoinBalance/index.m.less"),
				l = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(o.a)(a.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [a.fbt._param("Coin icon placeholder", ":coin:"), a.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": r.a.createElement(d.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, a.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, s) {
			e.exports = {
				awardDetailsPane: "_3kvsmRpyGMATPOVdwZT7NB",
				awardDescriptionContainer: "_3q3pzHD6q6zVtVG4TNE7im",
				iconContainer: "_3b5NcSKHOalQQEfFSNiCQX",
				icon: "_2PvjA-cEeom6ZfDceMtNHp",
				awardName: "sadK4Fq7Cy1wo7YWoEAWl",
				price: "_1WoiOSy_qo9S285gNnGevf",
				priceV2: "_2QojWEq3VXLp6VUTWxSPqI",
				coinIconV2: "_2gpxCe-IJI_TSCfXkqlb1n",
				giver: "_2GgPzgt-vZL36vYFyKbbDN",
				modIcon: "_2IlAShkKouN-v5V35IWs47",
				textAreaWrapper: "uJbtvFCFnUiXwhJ2M7rOh",
				textArea: "_2kwFqYX6mikunS0um4uLJ8",
				messageTooLong: "MS5s5QAaxgdOHp-DI58GJ",
				characterCountdown: "_2f01wl-r9Wp_fMxTHtthb",
				benefits: "_-1asi_lAFSc_bekrVlSw6",
				benefitsV2: "_3_n8rF0Q4xrwxzqGnhCbuz",
				radioOption: "_2KyAhxe7cKmNPAMvJXwX63",
				first: "_1fd9HSzaaDMBQ2FNj1OAMF",
				expiresText: "_30TeowkJPm0r4HctIm_NMA",
				publicIndicator: "_2iCTmZfj38gd9FcYQjeZ1",
				subredditCoinBalance: "_2YqHkV_stdqFg8q5D7VYYU",
				eyeIcon: "_3n416iaPD0uJ-VKssuS9AK",
				awardDescriptionWrapper: "_2uO3abqAHUw7fJ5hyl1GzZ",
				v2Enabled: "_3pKISOrsfIOmqqrczlzZ9X",
				spacerTop: "_3EHFq1M-9PkDDm4EJ5TruF",
				spacerBottom: "eCsFJJwyIQ_SsKBiLPNUk",
				gildButtonWrapper: "_2elVnq7-N_K9GG0B2yPeah"
			}
		},
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, s) {
			e.exports = {
				awardSelectorPane: "_2WXA0nl6cBwDItweBzw_ti",
				awardSectionContainer: "_3NYoLrOG4zXqg1zXIMJkoW",
				giveImageContainer: "_1sHh-7km01-N4HLeIWaybi",
				giveImage: "FLoLVujMMrzIkHLTgOCuF",
				awardSectionTitle: "_2GIl80IqHieDGcuHXQN3F_",
				awardSectionIcon: "_2m-TTm5fwqPU3uIV2Lt1cO",
				modIcon: "_21cqpAOcJlWztiWf3esYKt",
				premiumIcon: "_2dPX5MkVgsrETdoMuwFJxS",
				awardSection: "_1oscYfN5Pn1j0E5xXJ1MSK",
				selectableAward: "_10errIUo7wzwfnjkiqXfXP",
				selected: "_2lQtvMp2JZ_WdVme_P3L2Z",
				buttonContent: "_3kHQ1I2tn6294gyzXBCjA",
				iconContainer: "_28Lwrc4mxY4O_sSndFYb5J",
				icon: "_3SgOtgb_CcNWbsKiej-_GG",
				badgeContainer: "_3rOiiCMO2cjJ30zIm2EfQM",
				iconPremiumBadgeContainer: "_2UdsJkb9LtCk2QjvrXdNxj",
				iconPremiumBadge: "ei3aGesWsPP3R4R52oZth",
				iconNewBadge: "OGmnek6E-ANi8AL_-IF6G",
				title: "_3kL2pbywe3kDMsoF0jNBgP",
				expiresText: "_1dmzIdaTbPPXBcOA1si82v",
				metaText: "_1fAgvSQNrmCwASgfLrvYpP",
				disabled: "Cbw55II_5-hqVMilDR3rN",
				banner: "_2DXf1id0rEhidKxC88jyko"
			}
		},
		"./src/reddit/components/GildModalContent/GildButton/index.m.less": function(e, t, s) {
			e.exports = {
				gildButton: "_3kbcUlwOAO3wSKgXfygt3d",
				premiumButton: "He0lUqqO7VzWjWHITrPp6",
				v2Button: "_1tOmwkc59Hc3usyKNJOlqv",
				loadingIcon: "_2ZU-RJSYEd36dTnxf0u-zi"
			}
		},
		"./src/reddit/components/GildModalContent/GildFooter/index.m.less": function(e, t, s) {
			e.exports = {
				gildFooter: "habPwBVb49a3L6odC1o_2",
				footerContent: "p9n6xR53geDkMMJLRLxsQ",
				coinBalanceSection: "_3R4j1vmZgkT6keOmp5osiV",
				subredditIcon: "_1gm264-SD6RxF8VJfulxIL",
				errorText: "_2K7QjhTDibWfT4O2YOQyLh"
			}
		},
		"./src/reddit/components/GildModalContent/V2AwardSelectorPane/index.m.less": function(e, t, s) {
			e.exports = {
				awardSelectorPane: "_1WZ0SgfdNGeDJgyczGP_gk",
				filterCarousel: "_1szbvkIuB7Cg7FCFQEhMke",
				carouselButtonWrapper: "_3GlZsd3G-NBIK4yD8EW7XU",
				carouselButtonWrapperLeft: "_38dsEj6y5QnUtL0FLKXb0k",
				carouselButtonWrapperRight: "aYKuom5Q5ava_9QTjDX42",
				carouselButton: "_33fonRT1x0eT8rHr2zYqgB",
				carouselButtonIcon: "_2Ynd4STCX6kRVFHjCyVr5h",
				advanceLeft: "_3RSotYaxuxRT_kfHzoGYqo",
				pillOptionsContainer: "Adg2UwxVzC8qgZekAVaS",
				pillOptionWrapper: "Pqw_wmO6IfcPfwCO9KezE",
				focusElement: "_2WbKMCozcHDDU-BbWyUj0g",
				pillOption: "VM01SlqXmvgPy_cFzllNh",
				selectedPillOption: "URQl0zfOdMgdtIY1XrFAC",
				awardSectionScrollWrapper: "_39ZNNgFDAunzdsC9j4SDMI",
				awardSectionContainer: "_1UDzbKSS0IcM6jOnpHhGhi",
				awardSection: "_2kUI0NSsV_x2bEHWe3W1ic",
				singleRowGrid: "g0UmRI8H1gYrVZr357Pj2",
				selectableAward: "_32e1znxDsVyLU1wBYleYNM",
				selected: "y6rNayahiUdGa8u9YN4CU",
				buttonContent: "_2uYtaAC4PHvwYwV-J2qbTR",
				iconContainer: "Z5vX_E9_JBP0U5g7uAMFz",
				icon: "ArUzVgNNgHDORkJBid6lY",
				badgeContainer: "_2lJjqBr7R1aG6iRm3lw99u",
				iconBadgeContainer: "_2rZXZujwy8r7pE4AQQC-At",
				iconBadge: "Mr-UL40m54NjRI0AeBk_R",
				newIcon: "_2dbvVk7Kj2gnfSYtr0d4L1",
				moderatorIcon: "_2hYBd-GGKTbrYCH2Nh_QBI",
				premiumIcon: "WtcyPLW5OtrnOOJmhJFjW",
				lockIcon: "_1nlh5K78tlpqHAEkjLNsl4",
				metaText: "JuCNYAasgSXXhXMn-eYSA",
				banner: "_6nIdxhXwPiAN6XYEK8-57",
				rpanBanner: "_6v9-vBI2HJZFJWEZTdPnf"
			}
		},
		"./src/reddit/components/GildModalContent/V2GildHeader/index.m.less": function(e, t, s) {
			e.exports = {
				coinButton: "y_SSAXiY5GJ9WsjbzmsGz",
				addCoins: "_3x82U1asGpAIUzQgslIyTE",
				coinBalanceIndicator: "_2zWiRSe7uKEqlVT7Mvs2_5",
				coinIcon: "_1--VzQzOfkmMeEZUCZvyTs",
				coinBalance: "_1Cloe-EMgkODaBBmTlHRBg",
				plusIcon: "_3Y0Y_py92PAqegTOsxK83x",
				closeBtn: "_1fHLt8VrcTrMh4BUZXXbr",
				closeBtnIcon: "_1se_BXDRvp0sKkHkImYgi3",
				gildHeader: "_15g3IqD3LWy5NDaq_S6x5C",
				headerText: "d_A9cOvHKqFtJvq9oiHa2",
				subredditIcon: "_2KpTpXi4oyZ36pJlLq05Hl"
			}
		},
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, s) {
			e.exports = {
				gildModalContent: "_13s1q9tBn7qddM-UPVtpnC",
				gildHeader: "_3h_M405QYml7IuBRy1n4lL",
				headerText: "_1vd1jn6DqtTEKTl4xSH0eg",
				mainText: "_2429EA7gBgE6hEksMuhPVP",
				subText: "_19RVbjJ3B6hhL3-uZizjXb",
				learnLink: "z3GNA_yQcyIxHXpxgkmXH",
				closeBtn: "_2L2jSgTcQXf7PIBArs84GE",
				closeBtnIcon: "_2Vo_1piQFr0B95tN6ZKE-f",
				modalMainContent: "_1-n44O8_Kquo1Wl43y39VQ",
				awardSheetV2: "tY2Cjixopv9Qhp5vdv8p9"
			}
		},
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/helpers/isPost.ts");
			var l = function(e, t) {
					return Object(c.a)(t.id) ? e.filter(e => !(e => {
						for (const t of e)
							if (t.startsWith("econ:transferable:econ:render:")) return !0;
						return !1
					})((e.award ? e.award.tags : e.tags) || [])) : e
				},
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/helpers/trackers/gild.ts"),
				p = s("./src/reddit/models/Gold/Award.ts"),
				h = s("./src/reddit/actions/gold/communityAwards.ts"),
				b = s("./src/reddit/actions/gold/gild.ts"),
				g = s("./src/reddit/actions/gold/giveAward.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				E = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				C = s("./src/reddit/selectors/communityAwards.ts"),
				O = s("./src/reddit/selectors/experiments/econAwardSheetV2.ts"),
				P = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				_ = s("./src/reddit/selectors/gild.ts"),
				I = s("./src/reddit/selectors/gold/giveAwards.ts"),
				j = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				S = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/selectors/userPrefs.ts"),
				T = s("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				L = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				R = s("./src/lib/loadWithRetries/index.ts"),
				V = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const G = () => Object(R.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), s.e("CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("PennyPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)()])).then(e => e[0].default);
			var D = Object(L.a)({
					getComponent: G,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./node_modules/fbt/lib/FbtPublic.js"),
				W = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				q = s.n(W),
				U = s("./src/reddit/helpers/awards/message.ts"),
				H = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				J = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				K = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Y = s("./src/reddit/components/GildModalContent/GildButton/index.m.less"),
				Q = s.n(Y),
				Z = s("./src/reddit/controls/Button/index.tsx"),
				$ = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = 10;
			class se extends n.a.PureComponent {
				renderButtonText() {
					const {
						awardSheetV2Enabled: e,
						needPayment: t,
						needPremium: s,
						selectedAward: a,
						thingId: n
					} = this.props, r = a.awardType === p.f.Moderator;
					return s ? ee._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !t || r ? e ? ee._("Give", null, {
						hk: "30MOda"
					}) : Object(c.a)(n) ? ee._("Award post", null, {
						hk: "1Ydq4H"
					}) : ee._("Award comment", null, {
						hk: "4CfMGF"
					}) : ee._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						awardSheetV2Enabled: e,
						needPayment: t,
						needPremium: s,
						onGetPremium: a,
						onGild: r,
						onNeedPayment: i,
						pending: d,
						selectedAward: c
					} = this.props, l = c.awardType === p.f.Moderator;
					return n.a.createElement(Z.f, {
						className: Object(o.a)({
							[Q.a.premiumButton]: s,
							[Q.a.gildButton]: !s,
							[Q.a.v2Button]: e
						}),
						"data-redditstyle": !0,
						disabled: d || l && t,
						onClick: s ? a : t ? i : r
					}, d ? n.a.createElement($.a, {
						className: Q.a.loadingIcon,
						sizePx: te
					}) : this.renderButtonText())
				}
			}
			var ae = se,
				ne = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				re = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				ie = s("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				oe = s.n(ie),
				de = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					className: Object(o.a)(oe.a.shadow, e.shadowClassName),
					d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
				}), n.a.createElement("path", {
					d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
					fill: "url(#shine)",
					fillOpacity: ".3"
				}), n.a.createElement("path", {
					className: Object(o.a)(oe.a.standardColor, e.standardColorClassName),
					d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
				}), n.a.createElement("path", {
					className: Object(o.a)(oe.a.shadow, e.shadowClassName),
					d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: "shine",
					x1: "11.107",
					y1: "1.889",
					x2: "11.107",
					y2: "18.111",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					offset: ".063",
					stopColor: "#fff",
					stopOpacity: "0"
				}), n.a.createElement("stop", {
					offset: ".302",
					stopColor: "#fff"
				}), n.a.createElement("stop", {
					offset: "0.432",
					stopColor: "#fff"
				}), n.a.createElement("stop", {
					offset: "0.474",
					stopColor: "#fff",
					stopOpacity: "0"
				})))),
				ce = s("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				le = s("./src/reddit/helpers/awards/getIconForSize.ts");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const me = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return n.a.createElement(n.a.Fragment, null, e.map((e, t) => 0 === t ? e : n.a.createElement(n.a.Fragment, {
						key: t + e
					}, n.a.createElement(re.a, null), e)))
				}
				return null
			};
			class ue extends n.a.PureComponent {
				render() {
					const {
						award: e,
						awardSheetV2Enabled: t,
						className: s,
						prefersReducedMotion: a
					} = this.props, r = Object(le.a)(e, 128, a), i = !!e.pennyPrice;
					return n.a.createElement("div", {
						className: Object(o.a)(s, q.a.awardDescriptionContainer)
					}, n.a.createElement("div", {
						className: q.a.iconContainer
					}, n.a.createElement("img", {
						className: q.a.icon,
						src: r
					})), n.a.createElement("div", {
						className: q.a.awardName
					}, z.fbt._("{awardName} Award", [z.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), t && n.a.createElement("div", {
						className: q.a.benefitsV2
					}, n.a.createElement(me, {
						award: e
					})), n.a.createElement("div", {
						className: t ? q.a.priceV2 : q.a.price
					}, i ? z.fbt._("Purchase for ${dollarPrice}", [z.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : t ? n.a.createElement(n.a.Fragment, null, n.a.createElement(de, {
						className: q.a.coinIconV2
					}), z.fbt._("{coinPrice}", [z.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : Object(ne.a)(z.fbt._("Spend :coin:{coinPrice}", [z.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": n.a.createElement(re.a, null)
					})), !t && n.a.createElement("div", {
						className: q.a.benefits
					}, n.a.createElement(me, {
						award: e
					})), e.endsAt && n.a.createElement(ce.a, {
						className: q.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var pe, he = ue;

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(pe || (pe = {}));
			class ge extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						messageTypeEventSent: !1
					}, this.handleClickMessageInput = () => this.props.sendEvent(Object(u.clickMessageInputEvent)(this.props.thingId)), this.handleTypeMessageInput = e => {
						this.setState(this.sendTypeMessageEvent), this.props.handleMessageInput(e)
					}, this.sendTypeMessageEvent = (e, t) => {
						if (!e.messageTypeEventSent) return t.sendEvent(Object(u.typeMessageInputEvent)(t.thingId)), {
							messageTypeEventSent: !0
						}
					}, this.handleToggleAnonymous = () => {
						const {
							isAnonymous: e,
							sendEvent: t,
							thingId: s,
							toggleIsAnonymous: a
						} = this.props;
						t(Object(u.triggerAnonymousEvent)(e ? "uncheck" : "check", s)), a()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: s,
							thingId: a,
							toggleIsAnonymous: n
						} = this.props, r = e === pe.PRIVATE;
						(!t && r || t && !r) && (s(Object(u.triggerAnonymousEvent)(r ? "check" : "uncheck", a)), n())
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : n.a.createElement(X.a, {
						className: q.a.giver,
						isSelected: t,
						text: z.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						isLivestream: e,
						selectedAward: t,
						message: s
					} = this.props, a = {
						disabled: !1,
						maxLength: Object(U.c)(t, e),
						placeholder: z.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === a.maxLength ? (a.disabled = !0, a.placeholder = z.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : a.placeholder = z.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || a.maxLength > 0,
						i = r && s.length > a.maxLength;
					return n.a.createElement("div", {
						className: Object(o.a)(q.a.textAreaWrapper, {
							[q.a.messageTooLong]: i
						})
					}, n.a.createElement(H.s, be({
						className: q.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? s : ""
					}, a)), r && n.a.createElement("div", {
						className: q.a.characterCountdown
					}, a.maxLength - s.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? n.a.createElement("div", {
						className: q.a.publicIndicator
					}, n.a.createElement(J.a, {
						className: q.a.eyeIcon
					}), z.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderV2GildButton() {
					return this.props.awardSheetV2Enabled ? n.a.createElement("div", {
						className: q.a.gildButtonWrapper
					}, n.a.createElement(ae, be({}, this.props.gildButtonProps, {
						awardSheetV2Enabled: !0
					}))) : null
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== p.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, s = z.fbt._("r/{subredditName} balance: {coinBalance}", [z.fbt._param("subredditName", e), z.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return n.a.createElement("div", {
						className: q.a.subredditCoinBalance
					}, s)
				}
				render() {
					const {
						awardSheetV2Enabled: e,
						className: t,
						prefersReducedMotion: s,
						selectedAward: a
					} = this.props;
					return n.a.createElement("div", {
						className: Object(o.a)(t, q.a.awardDetailsPane, {
							[q.a.v2Enabled]: e
						})
					}, n.a.createElement("div", {
						className: q.a.awardDescriptionWrapper
					}, n.a.createElement("div", {
						className: q.a.spacerTop
					}), n.a.createElement(he, {
						award: a,
						awardSheetV2Enabled: e,
						prefersReducedMotion: s
					}), n.a.createElement("div", {
						className: q.a.spacerBottom
					}), a.awardType === p.f.Moderator ? n.a.createElement("span", {
						className: q.a.giver
					}, n.a.createElement(K.a, {
						className: q.a.modIcon
					}), z.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderV2GildButton())
				}
			}
			var fe = ge,
				we = s("./src/config.ts"),
				ve = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				Ee = s.n(ve),
				Ne = s("./src/reddit/components/SubredditIcon/index.tsx"),
				xe = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				Ce = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				Oe = s.n(Ce),
				Pe = e => {
					const {
						className: t,
						text: s
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(t, Oe.a.AnimatedPillBadge)
					}, s, n.a.createElement("div", {
						className: Oe.a.sheen
					}))
				};
			class _e extends n.a.Component {
				constructor() {
					super(...arguments), this.onOptionClick = () => {
						const {
							award: e,
							onSelect: t,
							sendEvent: s,
							thingId: a
						} = this.props;
						return s(Object(u.clickSelectAwardEvent)(e, a)), t(e)
					}
				}
				render() {
					const {
						award: e,
						isSelected: t,
						prefersReducedMotion: s
					} = this.props, a = t ? Ee.a.selected : "", r = Object(le.a)(e, 128, s);
					return n.a.createElement("button", {
						className: Object(o.a)(Ee.a.selectableAward, a),
						onClick: this.onOptionClick
					}, n.a.createElement("div", {
						className: Ee.a.buttonContent,
						tabIndex: -1
					}, n.a.createElement("div", {
						className: Ee.a.iconContainer
					}, n.a.createElement("img", {
						className: Ee.a.icon,
						src: r
					}), n.a.createElement("div", {
						className: Ee.a.badgeContainer
					}, e.awardSubType !== p.d.Premium && e.isNew && n.a.createElement(Pe, {
						className: Ee.a.iconNewBadge,
						text: z.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === p.d.Premium && n.a.createElement("div", {
						className: Ee.a.iconPremiumBadgeContainer
					}, n.a.createElement(xe.a, {
						className: Ee.a.iconPremiumBadge
					})))), n.a.createElement("div", {
						className: Ee.a.title
					}, e.name), n.a.createElement("div", {
						className: Ee.a.metaText
					}, e.pennyPrice ? z.fbt._("Purchase for ${cost}", [z.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(ne.a)(z.fbt._("Spend :coin:{cost}", [z.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": n.a.createElement(re.a, null)
					})), e.endsAt && n.a.createElement(ce.a, {
						className: Ee.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var Ie = _e;
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Se extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => n.a.createElement("div", {
						className: Ee.a.giveImageContainer
					}, n.a.createElement("img", {
						className: Ee.a.giveImage,
						src: "".concat(we.a.assetPath, "/img/gold/award-give.png")
					})), this.rendererByAwardSubtype = {
						[p.d.Global]: this.renderGlobalAwards,
						[p.d.Moderator]: this.renderModAwards,
						[p.d.Community]: this.renderCommunityAwards,
						[p.d.Appreciation]: this.renderAppreciationAwards,
						[p.d.Premium]: this.renderPremiumAwards
					}
				}
				renderAppreciationAwards(e, t) {
					const {
						onSelect: s,
						prefersReducedMotion: a,
						selectedAward: r,
						sendEvent: i,
						thingId: o
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: Ee.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Ee.a.awardSectionTitle
					}, je._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), n.a.createElement("div", {
						className: Ee.a.awardSection
					}, e.map(e => n.a.createElement(Ie, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						onSelect: s,
						prefersReducedMotion: a,
						sendEvent: i,
						thingId: o
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: s,
						prefersReducedMotion: a,
						selectedAward: r,
						sendEvent: i,
						thingId: d
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: Ee.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Ee.a.awardSectionTitle
					}, n.a.createElement(xe.a, {
						className: Object(o.a)(Ee.a.premiumIcon, Ee.a.awardSectionIcon)
					}), je._("Premium Awards", null, {
						hk: "35bhoK"
					})), n.a.createElement("div", {
						className: Ee.a.awardSection
					}, e.map(e => n.a.createElement(Ie, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						onSelect: s,
						prefersReducedMotion: a,
						sendEvent: i,
						thingId: d
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: s,
						prefersReducedMotion: a,
						selectedAward: r,
						sendEvent: i,
						thingId: o
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: Ee.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Ee.a.awardSectionTitle
					}, je._("Medals", null, {
						hk: "1RRXJc"
					})), n.a.createElement("div", {
						className: Ee.a.awardSection
					}, e.map(e => n.a.createElement(Ie, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						onSelect: s,
						prefersReducedMotion: a,
						sendEvent: i,
						thingId: o
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: s,
						prefersReducedMotion: a,
						selectedAward: r,
						sendEvent: i,
						subreddit: o,
						subredditName: d,
						thingId: c
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: Ee.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Ee.a.awardSectionTitle
					}, n.a.createElement(Ne.b, {
						className: Ee.a.awardSectionIcon,
						subredditOrProfile: o
					}), je._("r/{subredditName} Awards", [je._param("subredditName", d)], {
						hk: "2nKNHH"
					})), n.a.createElement("div", {
						className: Ee.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return n.a.createElement(Ie, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: s,
							prefersReducedMotion: a,
							sendEvent: i,
							thingId: c
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: s,
						prefersReducedMotion: a,
						selectedAward: r,
						sendEvent: i,
						subredditName: d,
						thingId: c
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: Ee.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Ee.a.awardSectionTitle
					}, n.a.createElement(K.a, {
						className: Object(o.a)(Ee.a.modIcon, Ee.a.awardSectionIcon)
					}), je._("r/{subredditName} Moderator Awards", [je._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), n.a.createElement("div", {
						className: Ee.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return n.a.createElement(Ie, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: s,
							prefersReducedMotion: a,
							sendEvent: i,
							thingId: c
						})
					}))) : null
				}
				renderBanner() {
					return this.props.isLivestream && this.props.inViewerFeedTheMeter ? n.a.createElement("div", {
						className: Ee.a.banner
					}, "Give your favorite broadcasts ", n.a.createElement("br", null), "more airtime with awards!") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: s
					} = this.props;
					if (t || !e.length) return n.a.createElement("div", {
						className: Object(o.a)(s, Ee.a.awardSelectorPane)
					});
					const a = new Set,
						r = {
							[p.d.Global]: [],
							[p.d.Moderator]: [],
							[p.d.Community]: [],
							[p.d.Appreciation]: [],
							[p.d.Premium]: []
						};
					e.forEach(e => {
						a.add(e.awardSubType), r[e.awardSubType] || (r[e.awardSubType] = []), r[e.awardSubType].push(e)
					});
					const i = !!(r[p.d.Community].length || r[p.d.Moderator].length || r[p.d.Appreciation].length || r[p.d.Premium].length) || r[p.d.Global].length > 3;
					return n.a.createElement("div", {
						className: Object(o.a)(s, Ee.a.awardSelectorPane)
					}, this.renderBanner(), !i && this.renderSnooImage(), [...a].map(e => this.rendererByAwardSubtype[e] ? this.rendererByAwardSubtype[e].call(this, r[e], i) : null))
				}
			}
			var ke = Se,
				ye = s("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				Ae = s.n(ye),
				Me = s("./src/reddit/components/CoinBalance/index.tsx");
			const {
				fbt: Be
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Te extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(u.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: s
					} = this.props, a = (t || 0).toLocaleString();
					return n.a.createElement("div", {
						className: Ae.a.coinBalanceSection
					}, n.a.createElement(Ne.b, {
						className: Ae.a.subredditIcon,
						subredditOrProfile: e
					}), Be._("r/{subredditName} Coin balance:", [Be._param("subredditName", s)], {
						hk: "2ktWRF"
					}), n.a.createElement("span", null, n.a.createElement(re.a, null), a))
				}
				render() {
					const {
						className: e,
						errorMessage: t,
						needPayment: s,
						needPremium: a,
						onGetPremium: r,
						onGild: i,
						onNeedPayment: d,
						pending: c,
						selectedAward: l,
						subredditCoins: m,
						thingId: u,
						userCoins: h
					} = this.props, b = l.awardType === p.f.Moderator, g = (b ? m : h) || 0;
					return n.a.createElement("div", {
						className: Object(o.a)(e, Ae.a.gildFooter)
					}, n.a.createElement("div", {
						className: Ae.a.footerContent
					}, b ? this.renderCommunityBalance() : n.a.createElement(Me.a, {
						className: Ae.a.coinBalanceSection,
						coinBalance: g,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), n.a.createElement(ae, {
						awardSheetV2Enabled: !1,
						needPayment: s,
						onGetPremium: r,
						pending: c,
						onNeedPayment: d,
						onGild: i,
						needPremium: a,
						selectedAward: l,
						thingId: u
					})), t && n.a.createElement("div", {
						className: Ae.a.errorText
					}, t))
				}
			}
			var Le = Te,
				Re = s("./src/reddit/components/GildModalContent/index.m.less"),
				Ve = s.n(Re);
			class Ge extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(u.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						postOrComment: e
					} = this.props;
					return Object(ne.a)(z.fbt._("Spend Coins to highlight this {Post or comment} for all to see! :learnMoreLink:", [z.fbt._param("Post or comment", e)], {
						hk: "2srS0W"
					}), {
						":learnMoreLink:": n.a.createElement("a", {
							className: Ve.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, z.fbt._("How do Awards work?", null, {
							hk: "2zRUgX"
						}))
					})
				}
				render() {
					const {
						className: e,
						postOrComment: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(o.a)(e, Ve.a.gildHeader)
					}, n.a.createElement("div", {
						className: Ve.a.headerText
					}, n.a.createElement("div", {
						className: Ve.a.mainText
					}, n.a.createElement("span", null, z.fbt._("Give an Award to this {Post or comment}!", [z.fbt._param("Post or comment", t)], {
						hk: "4qJ474"
					}))), n.a.createElement("div", {
						className: Ve.a.subText
					}, this.renderEmojiSubText())), n.a.createElement("button", {
						className: Ve.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, n.a.createElement(H.b, {
						className: Ve.a.closeBtnIcon
					})))
				}
			}
			var De = Ge,
				Fe = s("./src/reddit/components/GildModalContent/V2AwardSelectorPane/index.m.less"),
				ze = s.n(Fe);
			const We = n.a.memo((function(e) {
				let t = "",
					s = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = z.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), s = ze.a.rpanBanner), t ? n.a.createElement("div", {
					className: Object(o.a)(ze.a.banner, s)
				}, t) : null
			}));
			var qe = Object(r.b)((e, t) => {
					if (Object(c.a)(t.thingId)) {
						const s = Object(k.O)(e, {
							postId: t.thingId
						});
						if (!s) return {};
						const a = !!s.media && "rpan" === s.media.type,
							n = a && Object(P.d)(e, t.thingId, y.k);
						return {
							post: Object.assign({}, s, {
								isRPANBroadcast: a,
								isFeedTheMeterEnabled: n
							})
						}
					}
					return {}
				})(We),
				Ue = s("./src/reddit/components/RichTextJson/index.tsx"),
				He = s("./src/reddit/icons/svgs/Advance/index.m.less"),
				Xe = s.n(He),
				Je = e => n.a.createElement("svg", {
					className: Object(o.a)(Xe.a.default, e.className),
					viewBox: "0 0 13 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
				}));
			class Ke extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						horizontalOffset: 0,
						rightScrollVisible: !1
					}, this.carouselRef = n.a.createRef(), this.optionsRef = n.a.createRef()
				}
				scrollLeft() {
					this.props.sendEvent(Object(u.clickPreviousFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let s = this.state.horizontalOffset + t;
					if (s > 0) return void this.setState({
						horizontalOffset: 0,
						rightScrollVisible: !0
					});
					for (const n of e.childNodes) {
						const e = n;
						if (e.offsetLeft + s + e.scrollWidth > 0) {
							s = -1 * e.offsetLeft;
							break
						}
					}
					const a = e.scrollWidth > s + t;
					this.setState({
						horizontalOffset: s,
						rightScrollVisible: a
					})
				}
				scrollRight() {
					this.props.sendEvent(Object(u.clickNextFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let s = null;
					for (const n of e.childNodes) {
						const a = n,
							r = a.offsetLeft + e.offsetLeft,
							i = r + a.scrollWidth;
						if (r >= t || r < t && i > t) {
							s = a;
							break
						}
					}
					if (!s) return;
					const a = e.scrollWidth > s.offsetLeft + t;
					this.setState({
						horizontalOffset: -1 * s.offsetLeft,
						rightScrollVisible: a
					})
				}
				scrollSnap(e) {
					const t = this.optionsRef.current,
						s = this.carouselRef.current.clientWidth,
						a = t.childNodes[e],
						n = a.offsetLeft + t.offsetLeft,
						r = n + a.scrollWidth;
					if (n < 40 || r > s - 40) {
						const n = e ? -1 * a.offsetLeft + 40 : 0,
							r = t.scrollWidth + n > s;
						this.setState({
							horizontalOffset: n,
							rightScrollVisible: r
						})
					}
				}
				handleTagClick(e, t) {
					this.scrollSnap(t), this.props.onSelectTag(e), this.props.sendEvent(Object(u.clickFilterEvent)(this.props.tags[t]))
				}
				componentDidUpdate(e) {
					if (JSON.stringify(e.tags) !== JSON.stringify(this.props.tags)) {
						const e = this.carouselRef.current && this.optionsRef.current && this.optionsRef.current.scrollWidth > this.optionsRef.current.offsetLeft + this.carouselRef.current.clientWidth;
						this.setState({
							rightScrollVisible: !!e,
							horizontalOffset: 0
						})
					}
				}
				render() {
					const {
						tags: e,
						selectedTag: t
					} = this.props;
					return n.a.createElement("div", {
						className: ze.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && n.a.createElement("div", {
						className: Object(o.a)(ze.a.carouselButtonWrapper, ze.a.carouselButtonWrapperLeft)
					}, n.a.createElement("button", {
						className: ze.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, n.a.createElement("div", {
						className: ze.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(Je, {
						className: ze.a.advanceLeft
					})))), n.a.createElement("div", {
						className: ze.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, s) => n.a.createElement("button", {
						key: e.tag,
						className: ze.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, s)
					}, n.a.createElement("div", {
						className: ze.a.focusElement,
						tabIndex: -1
					}, n.a.createElement(Ue.a, {
						className: Object(o.a)(ze.a.pillOption, {
							[ze.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && n.a.createElement("div", {
						className: Object(o.a)(ze.a.carouselButtonWrapper, ze.a.carouselButtonWrapperRight)
					}, n.a.createElement("button", {
						className: ze.a.carouselButton,
						onClick: () => this.scrollRight()
					}, n.a.createElement("div", {
						className: ze.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(Je, null)))))
				}
			}
			var Ye = Ke,
				Qe = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				Ze = s("./src/reddit/icons/svgs/New/index.tsx");
			const $e = n.a.memo((function(e) {
				let t, s;
				if (e.award.awardSubType === p.d.Moderator) t = K.a, s = ze.a.moderatorIcon;
				else if (e.award.awardSubType === p.d.Premium) t = e.premiumUser ? xe.a : Qe.a, s = e.premiumUser ? ze.a.premiumIcon : ze.a.lockIcon;
				else {
					if (!e.award.isNew) return null;
					t = Ze.a, s = ze.a.newIcon
				}
				return n.a.createElement("div", {
					className: Object(o.a)(ze.a.iconBadgeContainer, s)
				}, n.a.createElement(t, {
					className: ze.a.iconBadge
				}))
			}));
			var et = n.a.memo((function(e) {
				const {
					award: t,
					isSelected: s,
					premiumUser: a,
					onSelect: r,
					prefersReducedMotion: i
				} = e, d = s ? ze.a.selected : "", c = Object(le.a)(t, 128, i);
				return n.a.createElement("button", {
					className: Object(o.a)(ze.a.selectableAward, d),
					onClick: () => r(t)
				}, n.a.createElement("div", {
					className: ze.a.buttonContent,
					tabIndex: -1
				}, n.a.createElement("div", {
					className: ze.a.iconContainer
				}, n.a.createElement("img", {
					className: ze.a.icon,
					src: c
				}), n.a.createElement("div", {
					className: ze.a.badgeContainer
				}, n.a.createElement($e, {
					award: t,
					premiumUser: a
				}))), n.a.createElement("div", {
					className: ze.a.metaText
				}, t.pennyPrice ? z.fbt._("${cost}", [z.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice.toLocaleString())))
			}));
			const tt = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				st = {
					tag: "all",
					content: {
						richtext: {
							document: [{
								c: [{
									e: "text",
									t: "All"
								}],
								e: "par"
							}]
						},
						markdown: "All"
					}
				},
				at = e => ({
					[e.tag]: []
				});
			var nt = n.a.memo((function(e) {
					const {
						awardTotals: t,
						awardsPending: s,
						onSelect: r,
						prefersReducedMotion: i,
						premiumUser: d,
						selectedAward: c,
						sendEvent: l,
						tags: m,
						thingId: p
					} = e, [h, b] = Object(a.useState)({}), [g, f] = Object(a.useState)(at(st)), [w, v] = Object(a.useState)(st.tag);
					Object(a.useEffect)(() => {
						const e = {},
							s = at(st);
						t.forEach(t => {
							e[t.award.id] = t, s[st.tag].push(t.award.id);
							const a = t.award.tags;
							a && a.forEach(e => {
								void 0 === s[e] && (s[e] = []), s[e].push(t.award.id)
							})
						}), b(e), f(s)
					}, [t]);
					const E = [st, ...m.filter(e => g[e.tag])],
						N = g[w],
						[x, C] = Object(a.useState)(!1),
						[O, P] = Object(a.useState)(1),
						_ = Object(a.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: s,
										colGutter: a
									} = tt,
									n = t > (s + a) * (N.length - 1) + s + s + a;
								if (C(n), n) P(N.length);
								else {
									const e = Math.floor((t - s) / (s + a) + 1);
									P(e)
								}
							}
						}, [N]);
					if (s || !t.length) return n.a.createElement("div", {
						className: ze.a.awardSelectorPane
					});
					const I = e => {
						r(e);
						const t = E.find(e => e.tag === w) || st,
							s = N.findIndex(t => t === e.id),
							a = Math.floor(s / O),
							n = s - a * O;
						l(Object(u.clickSelectAwardEvent)(e, p, {
							awardColPosition: n + 1,
							awardRowPosition: a + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return n.a.createElement("div", {
						className: ze.a.awardSelectorPane
					}, n.a.createElement(qe, {
						thingId: e.thingId
					}), n.a.createElement(Ye, {
						tags: E,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: v
					}), n.a.createElement("div", {
						className: ze.a.awardSectionScrollWrapper
					}, n.a.createElement("div", {
						className: ze.a.awardSectionContainer
					}, n.a.createElement("div", {
						className: Object(o.a)(ze.a.awardSection, {
							[ze.a.singleRowGrid]: x
						}),
						ref: _
					}, N.map(e => {
						const t = h[e].award,
							s = e === c.id;
						return n.a.createElement(et, {
							award: t,
							awardCount: h[e].total,
							isSelected: s,
							key: t.id,
							prefersReducedMotion: i,
							premiumUser: d,
							onSelect: I,
							thingId: p
						})
					})))))
				})),
				rt = s("./src/reddit/components/GildModalContent/V2GildHeader/index.m.less"),
				it = s.n(rt),
				ot = s("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: dt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class ct extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleCoinButtonClick = () => {
						this.props.needPayment ? this.props.onNeedPayment() : window.open("/coins", "_blank")
					}
				}
				render() {
					const {
						userCoins: e
					} = this.props;
					return n.a.createElement("div", {
						className: it.a.gildHeader
					}, n.a.createElement("button", {
						className: it.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, n.a.createElement(H.b, {
						className: it.a.closeBtnIcon
					})), n.a.createElement("div", {
						className: it.a.headerText
					}, dt._("Awards", null, {
						hk: "4n2gja"
					})), n.a.createElement("button", {
						className: it.a.coinButton,
						onClick: this.handleCoinButtonClick
					}, n.a.createElement("div", {
						className: it.a.coinBalanceIndicator,
						tabIndex: -1
					}, n.a.createElement(de, {
						className: it.a.coinIcon
					}), n.a.createElement("div", {
						className: it.a.coinBalance
					}, (e || 0).toLocaleString())), n.a.createElement("div", {
						className: it.a.addCoins,
						tabIndex: -1
					}, n.a.createElement(ot.a, {
						className: it.a.plusIcon
					}))))
				}
			}
			var lt = ct;

			function mt() {
				return (mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ut = Object(i.a)(Object(i.c)({
				awards: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(A.J)(e, {
							thingId: s
						});
						n = t && t.id
					}
					if (!n && Object(c.a)(s)) {
						const t = Object(k.O)(e, {
							postId: s
						});
						n = t && t.belongsTo.id
					}
					return n ? Object(C.k)(e, {
						subredditId: n
					}) : []
				},
				awardings: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(A.J)(e, {
							thingId: s
						});
						n = t && t.id
					}
					if (!n && Object(c.a)(s)) {
						const t = Object(k.O)(e, {
							postId: s
						});
						n = t && t.belongsTo.id
					}
					return n ? Object(C.g)(e, {
						subredditId: n,
						thingId: s
					}) : []
				},
				awardSheetV2Enabled: O.a,
				awardsPending: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(A.J)(e, {
							thingId: s
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(C.j)(e, {
						subredditId: n
					})
				},
				awardingsPending: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(A.J)(e, {
							thingId: s
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(C.f)(e, {
						subredditId: n,
						thingId: s
					})
				},
				currentUser: M.i,
				errorMessage: _.a,
				isAnonymous: _.g,
				iFramed: _.h,
				isEmployee: M.E,
				message: _.b,
				pending: _.e,
				postOrComment: (e, t) => {
					let {
						thingId: s
					} = t;
					return Object(c.a)(s) ? Object(k.O)(e, {
						postId: s
					}) : Object(x.n)(e, {
						commentId: s
					})
				},
				prefersReducedMotion: B.c,
				purchaseCatalogPending: j.g,
				showPurchaseModal: S.r,
				selectedAward: I.a,
				subreddit: A.J,
				subredditCoins: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t;
					const n = Object(A.J)(e, {
							thingId: s
						}),
						r = n ? n.id : a;
					return Object(A.B)(e, {
						subredditId: r
					})
				},
				tags: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(A.J)(e, {
							thingId: s
						});
						n = t && t.id
					}
					if (!n && Object(c.a)(s)) {
						const t = Object(k.O)(e, {
							postId: s
						});
						n = t && t.belongsTo.id
					}
					return n ? Object(C.i)(e, {
						subredditId: n
					}) : []
				},
				tagsPending: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(A.J)(e, {
							thingId: s
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(C.h)(e, {
						subredditId: n
					})
				},
				userCoins: M.d,
				inViewerFeedTheMeter: (e, t) => {
					let {
						thingId: s
					} = t;
					return Object(P.d)(e, s, y.k)
				}
			}), e => {
				const {
					awards: t,
					awardings: s,
					isEmployee: a,
					postOrComment: n,
					selectedAward: r,
					subredditCoins: i,
					userCoins: o
				} = e, {
					awardType: d,
					coinPrice: c,
					pennyPrice: m
				} = r, u = d === p.f.Moderator, h = !!m || ((u ? i : o) || 0) < c && !(a && !u), b = n && n.media && "rpan" === n.media.type, g = n ? l(t, n) : t, f = n ? l(s, n) : s;
				return Object.assign({}, e, {
					awards: g,
					awardings: f,
					needPayment: h,
					cost: m || c,
					isRpanPost: !!b
				})
			});
			class pt extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showPurchaseModal: s
						} = this.props;
						if (27 === e.keyCode && !s) return t()
					}, this.toggleIsAnonymous = () => {
						const {
							isAnonymous: e,
							setIsAnonymous: t
						} = this.props;
						t(!e)
					}, this.handleMessageInput = e => {
						this.props.updateMessage(e.target.value)
					}, this.onNeedPayment = () => {
						const {
							cost: e,
							needPaymentRequested: t,
							selectedAward: s,
							sendEvent: a,
							thingId: n,
							userCoins: r
						} = this.props;
						a(Object(u.clickNextButtonEvent)(n)), t(r, e, n, !!s.pennyPrice), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: s
						} = this.props;
						t(Object(u.clickGetPremiumEvent)(s, e)), Object(d.d)("/premium", d.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: s,
							selectedAward: a,
							sendEvent: n,
							thingId: r
						} = this.props;
						return n(Object(u.clickConfirmAwardEvent)(r, a)), e(t, !!s)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(m.S)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardingsRequested: t,
						awards: s,
						awardSheetV2Enabled: a,
						awardsRequested: n,
						isAnonymous: r,
						isRpanPost: i,
						needPayment: o,
						postOrComment: d,
						purchaseCatalogPending: c,
						purchaseCatalogRequested: l,
						selectAward: h,
						selectedAward: b,
						sendEvent: g,
						setIsAnonymous: f,
						subreddit: w,
						subredditAboutRequested: v,
						subredditId: E,
						subredditName: N,
						tagsRequested: x,
						thingId: C
					} = this.props;
					g(Object(u.viewGildModalEvent)(b.id, r, C)), f(!i && Object(m.l)());
					const O = w ? w.id : E || (d && d.belongsTo ? d.belongsTo.id : void 0);
					if (O && !a && n(O), O && a && (t(O, C), x(O)), (!a && s.length && !s.find(e => e.id === b.id) || a && e.length && !e.find(e => e.award.id === b.id)) && h(p.m), w || N) {
						v(w ? w.name : N)
					}
					o && (b.pennyPrice ? G() : Object(T.b)(), c || l())
				}
				componentDidUpdate(e) {
					let t = !0;
					this.props.awardSheetV2Enabled && e.awardingsPending && !this.props.awardingsPending && (t = !!this.props.awardings.find(e => e.award.id === this.props.selectedAward.id)), this.props.awardSheetV2Enabled || !e.awardsPending || this.props.awardsPending || (t = !!this.props.awards.find(e => e.id === this.props.selectedAward.id)), t || this.props.selectAward(p.m)
				}
				render() {
					const {
						author: e,
						awardings: t,
						awardingsPending: s,
						awards: a,
						awardSheetV2Enabled: r,
						awardsPending: i,
						className: d,
						closeGildModal: l,
						currentUser: m,
						errorMessage: u,
						iFramed: h,
						isAnonymous: b,
						isRpanPost: g,
						inViewerFeedTheMeter: f,
						message: w,
						needPayment: v,
						pending: E,
						postOrComment: N,
						prefersReducedMotion: x,
						selectedAward: C,
						sendEvent: O,
						showPurchaseModal: P,
						subreddit: _,
						subredditCoins: I,
						subredditName: j,
						tags: S,
						tagsPending: k,
						thingId: y,
						userCoins: A
					} = this.props, {
						showPurchaseModalInThisInstance: M
					} = this.state, B = N ? N.author : e, L = Object(c.a)(y) ? "post" : "comment", R = P && M, V = R && !C.pennyPrice, G = R && !!C.pennyPrice, F = (V || G) && !h;
					if (V && F) return n.a.createElement(T.a, {
						isCompletePaypal: !1
					});
					if (G && F) return n.a.createElement(D, {
						isCompletePaypal: !1
					});
					const z = _ ? _.name : j,
						W = !(!m || !m.isGold),
						q = {
							needPayment: v,
							needPremium: !W && C.awardSubType === p.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: E,
							selectedAward: C,
							thingId: y
						};
					return n.a.createElement("div", {
						className: Object(o.a)(d, Ve.a.gildModalContent)
					}, r ? n.a.createElement(lt, {
						needPayment: v,
						onCancel: l,
						onNeedPayment: this.onNeedPayment,
						userCoins: A
					}) : n.a.createElement(De, {
						authorName: B,
						postOrComment: L,
						onCancel: l,
						sendEvent: O,
						thingId: y
					}), n.a.createElement("div", {
						className: Object(o.a)(Ve.a.modalMainContent, {
							[Ve.a.awardSheetV2]: r
						})
					}, r ? n.a.createElement(nt, {
						awardTotals: t,
						awardsPending: s,
						prefersReducedMotion: x,
						premiumUser: W,
						onSelect: this.props.selectAward,
						selectedAward: C,
						sendEvent: O,
						tags: S,
						tagsPending: k,
						thingId: y
					}) : n.a.createElement(ke, {
						awards: a,
						awardsPending: i,
						onSelect: this.props.selectAward,
						prefersReducedMotion: x,
						selectedAward: C,
						sendEvent: O,
						subreddit: _,
						subredditName: z,
						thingId: y,
						isLivestream: g,
						inViewerFeedTheMeter: f
					}), n.a.createElement(fe, {
						awardSheetV2Enabled: r,
						forcePublic: g,
						isAnonymous: b,
						isLivestream: g,
						message: w,
						selectedAward: C,
						sendEvent: O,
						thingId: y,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: q,
						prefersReducedMotion: x,
						subredditName: z,
						subredditCoins: I
					})), !r && n.a.createElement(Le, mt({
						errorMessage: u || void 0,
						sendEvent: O,
						subreddit: _,
						subredditName: z,
						subredditCoins: I,
						userCoins: A
					}, q)), V && n.a.createElement(T.a, {
						isCompletePaypal: !1
					}), G && n.a.createElement(D, {
						isCompletePaypal: !1
					}))
				}
			}
			t.a = Object(r.b)(ut, (e, t) => {
				let {
					thingId: s
				} = t;
				return {
					awardingsRequested: t => e(Object(h.h)(t, s)),
					awardsRequested: t => e(Object(h.j)(t)),
					closeGildModal: () => e(Object(f.a)()),
					gildRequested: (t, a) => e(Object(b.gildGqlRequested)(s, {
						isOldReddit: t,
						isLivestream: a
					})),
					needPaymentRequested: (t, s, a, n) => {
						e(n ? Object(v.e)(s, a) : Object(w.g)(t, s, a))
					},
					purchaseCatalogRequested: () => e(Object(E.a)()),
					selectAward: t => e(Object(g.a)(t)),
					setIsAnonymous: t => {
						e(Object(b.setIsAnonymous)(t)), Object(m.S)(t)
					},
					subredditAboutRequested: t => e(Object(N.t)(t)),
					tagsRequested: t => e(Object(h.i)(t)),
					updateMessage: t => e(Object(b.updateMessage)(t))
				}
			})(Object(F.c)(pt))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/components/TimeLeft/index.m.less"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/timeAgo/index.ts"),
				c = s("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: s
				} = e, a = Math.floor(s.getTime() / 1e3), r = Object(d.b)(a);
				return n.a.createElement("div", {
					className: Object(o.a)(t)
				}, n.a.createElement(c.a, {
					className: i.a.clockIcon
				}), n.a.createElement("span", {
					className: i.a.timeLeft
				}, r))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, s) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function r(e, t) {
				const s = e.toString().split(":");
				return s.length % 2 == 0 ? e : s.reduce((e, s, a) => (a % 2 == 0 ? e.push(s) : "" === s ? e.push(":") : ":".concat(s, ":") in t ? e.push(t[":".concat(s, ":")]) : e.push(":".concat(s, ":")), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, t, s) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, s) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/New/index.m.less"),
				o = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return C
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return I
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "c", (function() {
				return B
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "j", (function() {
				return L
			})), s.d(t, "i", (function() {
				return R
			})), s.d(t, "e", (function() {
				return V
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "h", (function() {
				return z
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "d", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(n.a)(Object(a.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				w = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				E = Object(a.a)(v, e => e.ended),
				N = Object(a.a)(v, e => e.removed),
				x = Object(a.a)(e => e.publicAccessNetwork.models, E, N, (e, t, s) => {
					const a = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = G(a, o.b.ENDED) ? o.b.ENDED : a,
							r = s.stream.vod_accessible;
						return n === a && !0 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = G(a, o.b.ENDED) ? o.b.ENDED : a,
							r = s.stream.vod_accessible;
						return n === a && !1 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, a)
				}),
				C = (e, t) => {
					return x(e)[Object(i.g)(t)]
				},
				O = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), x, b, d.i, c.b, (e, t, s, a, n, d) => {
					if (d) {
						const r = [];
						if (e) {
							const t = Object(i.g)(e);
							s[t] && r.push(t)
						}
						const d = r.concat(t),
							c = [...new Set(d)],
							l = new Set([...a, ...n]);
						return c.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== o.b.KILLED && t.stream.state !== o.b.PURGED
						})
					}
					const c = new Set([...a, ...n]);
					return Object.keys(s).filter(e => !c.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.b.KILLED && e.stream.state !== o.b.PURGED).map(e => e.post.id)
				}),
				P = Object(a.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, x, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: a
					} = t;
					return O(e, {
						listingName: s,
						streamIdFromPath: a
					})
				}, (e, t, s) => {
					const a = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? a.slice(0, e) : a
				}),
				_ = Object(a.a)(x, P, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				I = Object(a.a)(x, P, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				j = Object(a.a)(w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return P(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, (e, t) => {
					const s = new Set(e),
						a = t.filter(e => !s.has(e));
					if (a.length) return a[0]
				}),
				S = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, x, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return P(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, g, (e, t, s, a) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === o.b.IS_LIVE);
					if (r) return r.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (a.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(n.a)(Object(a.a)(S, x, (e, t) => e ? t[e] : void 0)),
				y = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, S, b, d.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return P(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, (e, t, s, a, n) => !e || s.includes(e) || a.includes(e) ? t || n[0] : e),
				A = Object(a.a)(f, w, j, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(a.a)(f, w, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				B = Object(n.a)(Object(a.a)(y, x, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(a.a)(A, x, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(a.a)(M, x, (e, t) => e ? t[e] : void 0)),
				R = (Object(n.a)(Object(a.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, x, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(a.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				V = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? C(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function G(e, t) {
				const s = {
					[o.b.NOT_STARTED]: 0,
					[o.b.PUBLISHED]: 1,
					[o.b.IS_LIVE]: 2,
					[o.b.DISCONNECTED]: 2,
					[o.b.ENDED]: 3,
					[o.b.KILLED]: 4,
					[o.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const D = Object(a.a)(y, g, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const z = Object(a.a)(y, x, h.b, (e, t, s) => {
					if (s) return F.INTRO;
					const a = e && t[e];
					if (!a) return F.UNAVAILABLE;
					const n = a.stream.state;
					return n === o.b.IS_LIVE || n === o.b.DISCONNECTED ? F.LIVE : n === o.b.ENDED && a.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				W = Object(a.a)(B, z, h.b, l.b, l.o, (e, t, s, a, n) => s ? a : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : n : void 0),
				q = Object(a.a)(B, z, D, (e, t, s) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var a = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(a.a)(i, r.n, (e, t) => t && !e.isIntroFinished),
				d = Object(a.a)(i, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=FramedGild~GildModal.63fcd12b0c5401c34f89.js.map