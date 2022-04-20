// https://www.redditstatic.com/desktop2x/ProfileSnoobuilder.8d18ebda0c3e5cb72596.js
// Retrieved at 4/20/2022, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileSnoobuilder", "reddit-components-ContentGate"], {
		"./assets/snoobuilder/Snoobuilder.json": function(e, t, n) {
			e.exports = n.p + "snoobuilder/Snoobuilder-42545b1fd678a83812fadae5a34355a1.json"
		},
		"./assets/snoobuilder/UnityLoader.js": function(e, t, n) {
			e.exports = n.p + "snoobuilder/UnityLoader-3544178c924aac8c5129f2d974d60dd7.js"
		},
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
					var r, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						x = !i && !l && /macintosh/i.test(t),
						f = !o && !u && !m && !p && /linux/i.test(t),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						y = n(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !v && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: y || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: y || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: y || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: y || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (r.msedge = e, r.version = g) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || y
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: y || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: y || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? r = {
						name: "Android",
						version: y
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, y && (r.version = y)) : i ? (r = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, y && (r.version = y)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || y
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && y && (r.version = y)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !o && !r.silk ? !r.windowsphone && i ? (r[i] = e, r.ios = e, r.osname = "iOS") : x ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : f && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var k = "";
					r.windows ? k = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? k = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? k = (k = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? k = (k = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? k = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? k = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? k = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? k = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (k = n(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (r.osversion = k);
					var w = !r.windows && k.split(".")[0];
					return v || d || "ipad" == i || o && (3 == w || w >= 4 && !E) || r.silk ? r.tablet = e : (E || "iphone" == i || "ipod" == i || o || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function i(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = r(e, (function(e) {
							var n = t - s(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, s, r) {
					var o = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (o = t(r));
					var a = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return i([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = o, n.compareVersions = i, n.check = function(e, t, n) {
					return !o(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, i) {
					n = s ? (s = !1, e) : t(n, e, r, i)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : o,
					c = arguments.length < 3;
				return d(e, i(t, 4), n, c, r)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseSlice.js"),
				r = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return e && e.length ? (t = n || void 0 === t ? 1 : r(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(a);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return r.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const i = Object(r.e)(e),
					o = encodeURIComponent(`${t}${i}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/pages/profileSnoobuilder.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileSnoobuilderRequested", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/actions/externalAccount.ts"),
				r = n("./src/reddit/actions/pages/profileShared.ts"),
				i = n("./src/reddit/actions/profile/index.ts"),
				o = n("./src/reddit/actions/subreddit.ts");
			const a = e => async (t, n, a) => {
				const {
					params: d
				} = e, {
					profileName: c
				} = d, l = c.toLowerCase();
				await t(Object(i.d)(l)), await Promise.all([t(Object(r.c)(c)), t(Object(o.q)()), t(Object(s.o)(c))])
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				x = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.tsx"),
				y = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./src/reddit/components/TextWithLinks/index.tsx"),
				E = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				w = n("./src/chat/controls/Svg/index.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var S = e => i.a.createElement(w.a, C({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				O = n("./src/reddit/models/ContentGate.ts"),
				j = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/user.ts");
			var L = n("./src/reddit/selectors/meta.ts"),
				P = n("./src/reddit/components/ContentGate/index.m.less"),
				I = n.n(P);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = l.a.wrapped(S, "PrivateKey", I.a), M = l.a.div("ButtonsContainer", I.a), D = l.a.div("Container", I.a), F = l.a.div("ContainerExp", I.a), A = l.a.div("Description", I.a), H = l.a.div("PrivateSubredditDetails", I.a), W = l.a.div("PrivateSubredditDescription", I.a), U = l.a.h3("PrivateSubredditName", I.a), G = l.a.a("Link", I.a), q = l.a.wrapped(k.n, "LinkRouterButton", I.a), z = l.a.wrapped(k.m, "LinkButton", I.a), V = l.a.wrapped(k.q, "SecondaryLinkRouterButton", I.a), J = l.a.wrapped(k.p, "SecondaryLinkButton", I.a), Y = l.a.wrapped(q, "GoHomeLinkButton", I.a), K = l.a.wrapped(b.a, "CreateCommunityButton", I.a), X = l.a.img("Image", I.a), Z = l.a.img("ImagePlaceholder", I.a), Q = l.a.wrapped(q, "LeftLinkRouterButton", I.a), $ = l.a.wrapped(z, "LeftLinkButton", I.a), ee = l.a.wrapped(J, "SecondaryLeftLinkButton", I.a), te = l.a.wrapped(V, "SecondaryLeftLinkRouterButton", I.a), ne = l.a.h3("Title", I.a), se = l.a.div("PageBody", I.a), re = l.a.div("InterstitialMessageWrapper", I.a), ie = Object(c.c)({
				isLoggedIn: T.Q,
				origin: L.j,
				user: T.l,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(T.R)(e)) return !1;
					const t = Object(N.d)(e);
					if (!t) return !1;
					const n = Object(T.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * j.C;
					return s > Date.now() - r
				})(e),
				isSeo: L.g
			}), oe = Object(_.u)(), ae = Object(o.b)(ie, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					continueToGatedSubreddit: o,
					isLoggedIn: a,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: p,
					origin: b,
					pageLayer: x,
					quarantineRequiresEmail: _,
					quarantineMessage: k,
					quarantineMessageHtml: w,
					quarantineMessageRTJson: C,
					interstitialWarningMessage: S,
					interstitialWarningMessageHtml: j,
					interstitialWarningMessageRTJson: N,
					setNSFWPreference: T,
					subredditDescription: L,
					subredditName: P,
					user: D
				} = e, F = async () => {
					if (a ? await T() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(E.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case O.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ne, null, R._("r/{community name} is a Reddit Premium community", [R._param("community name", P)], {
							hk: "2lyDwB"
						})), i.a.createElement(A, null, R._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(M, null, D ? i.a.createElement(ee, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, R._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement($, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, R._("Sign Up", null, {
							hk: "rvpjy"
						})), D ? i.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, R._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(J, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, R._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case O.a.Nsfw:
					case O.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ne, null, n === O.a.Nsfw ? R._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : R._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(A, null, R._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(M, null, i.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, R._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(J, {
							onClick: F,
							redditStyle: !0
						}, R._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case O.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(B, null), i.a.createElement(ne, null, "r/", P, " ", R._("is a private community", null, {
							hk: "7zZmq"
						})), L && L.length && i.a.createElement(H, null, i.a.createElement(U, null, "r/", P), i.a.createElement(W, null, i.a.createElement("div", null, L))), i.a.createElement(A, null, R._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", R._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), R._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(M, null, D ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(h.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: I.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), i.a.createElement(ee, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, R._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(ee, {
							href: Object(u.a)(p, b),
							redditStyle: !0
						}, R._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, R._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && i.a.createElement(y.a, {
							subredditName: P
						}));
					case O.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ne, null, R._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(A, null, R._("This community is {=quarantined}", [R._param("=quarantined", i.a.createElement(G, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, R._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(re, null, C ? i.a.createElement(g.a, {
							content: C,
							rtJsonElementProps: {
								pageLayer: x
							}
						}) : w ? i.a.createElement(f.a, {
							html: w
						}) : k || R._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), R._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(M, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(M, null, i.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, R._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(z, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, R._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(M, null, i.a.createElement(Q, {
								to: "/",
								redditStyle: !0
							}, R._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(J, {
								onClick: t,
								redditStyle: !0
							}, R._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(D, r, _)));
					case O.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, null, R._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(A, null, i.a.createElement(re, null, N ? i.a.createElement(g.a, {
							content: N,
							rtJsonElementProps: {
								pageLayer: x
							}
						}) : j ? i.a.createElement(f.a, {
							html: j
						}) : S), R._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(M, null, i.a.createElement(Q, {
							to: "/",
							redditStyle: !0
						}, R._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(J, {
							onClick: o,
							redditStyle: !0
						}, R._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case O.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ne, null, R._("r/{community name} has been banned from Reddit", [R._param("community name", P)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(A, null, e ? i.a.createElement(v.a, {
							linkClassName: I.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : R._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(M, null, i.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ne, null, R._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(M, null, i.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, R._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case O.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(Z, null), i.a.createElement(ne, null, R._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(A, null, R._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(M, null, D && i.a.createElement(K, {
							eventSource: "content_gate"
						}), i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.ProfileDoesNotExist:
					case O.a.ProfileDeleted:
					case O.a.ProfileSuspended:
					case O.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case O.a.ProfileBlockedForLegalReason:
									return R._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case O.a.ProfileDeleted:
									return R._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case O.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, R._("This account has been {=suspended} .", [R._param("=suspended", i.a.createElement(G, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, R._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case O.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ne, null, R._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(A, null, R._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(M, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ne, null, R._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(M, null, i.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, R._("Go Home", null, {
							hk: "49p4or"
						}))));
					case O.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(X, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ne, null, R._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(M, null, i.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, R._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = oe(ae(Object(a.i)(e => {
				const t = Object(r.useContext)(d.a) ? F : D;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(se, null, de(e))), i.a.createElement(x.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(x),
				g = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				v = g.a.wrapped(l.c, "StyledTooltip", f.a),
				E = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.qb)(e),
					userIsSuspended: b.Y
				});
			t.a = Object(o.b)(E, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.c)(n)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: o,
					openCommunityCreation: a,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(p.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), a(d)
					},
					onMouseEnter: r,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: y,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: y,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/config.ts"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.div("UserAgreement", c.a), m = a.a.a("UserAgreementLink", c.a), p = a.a.a("PrivacyLink", c.a);
			var h;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(h || (h = {}));
			t.b = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === h.Grey,
					[c.a.mIsWhite]: e.textColor === h.White
				})
			}, r.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", r.a.createElement(m, {
				href: `${i.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "YviZP"
			}))), l._param("=Privacy Policy.", r.a.createElement(p, {
				href: `${i.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1fsgYq"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "3wzgp7"
			})))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = Object(u.u)(),
				x = Object(o.c)({
					layout: u.R
				}),
				f = Object(i.b)(x);
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						n = d.g - t,
						s = l.a + n + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${s}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.q+d.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.r}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.q+d.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(f(h.a.wrapped(g, "Component", p.a)))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(o);
			const d = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return i.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(i.b)(() => Object(o.c)({
					isNightmodeOn: m.eb
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				h = n("./src/reddit/components/PlayButton/index.tsx"),
				b = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				y = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/constants/tracking.ts"),
				w = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				C = n.n(w);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * y.e,
				j = e => {
					const t = Object(c.a)(C.a.image, b.g, e.className, {
							[C.a.mShowCentered]: e.showCentered,
							[C.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${y.j}px`), e.isListing || e.isTall && O(e.height) || (n.maxHeight = `${y.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), i.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(y.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${y.j}px`, e.shouldBlur && (t.maxWidth = Object(y.L)(e.height, e.width) ? `${y.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), i.a.createElement("div", {
						className: Object(c.a)(C.a.container, e.className),
						style: t
					}, e.children)
				},
				T = Object(o.b)(() => Object(d.a)(v.F, _.kb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(v.b)(e, s) : null
				}, E.d, v.G, (e, t, n, s, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: r
				})));
			t.a = T(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? i.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, P(e)) : e.isListing && e.postPermalink ? i.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, P(e)) : P(e)
			});
			const L = (e, t) => i.a.createElement(j, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[k.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				P = e => {
					let {
						onClick: t,
						...n
					} = e;
					const r = Object(y.L)(n.height, n.width),
						o = O(n.height) && r;
					return i.a.createElement(N, S({}, n, {
						className: `${r?`${k.a} `:""}${n.className||""}`
					}), n.isListing ? i.a.createElement("div", {
						className: n.contentImageClassName
					}, L(r, n)) : i.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: C.a.imageLink
					}, L(r, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && i.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > y.j && Object(y.L)(n.height, n.width) && i.a.createElement("div", {
						className: C.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && i.a.createElement(h.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = n.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.isTweet ? {
							height: `${e.height}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					d = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(i.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				y = n("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function E(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(i.useRef)(),
					h = Object(i.useRef)(),
					b = Object(y.a)(d);

				function E(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(i.useEffect)(() => {
					if (E(!d && (t || s)), h.current && r) return p.current = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							i = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", i), e.addEventListener("playing", i);
						let o = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, s) return s = !1, void(a = d);
							if (e.paused || e.seeking || !n) return void(a = d);
							const r = o;
							4 === e.readyState ? o = !1 : !o && d >= a && d < a + f ? o = !0 : o && d >= a && d > a + f && (o = !1), a = d, r !== o && t(o)
						}, x);
						return () => {
							clearInterval(c), e.removeEventListener("playing", i), e.removeEventListener("play", i), e.removeEventListener("loadeddata", r)
						}
					}(h.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(i.useEffect)(() => {
					b !== d && E(!d && (t || s))
				}, [b, d, t, s]), o.a.createElement("video", v({}, m, {
					ref: e => h.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(g.a)(u || "")
				}))
			}
			var _ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				k = n.n(_);
			const w = Object(d.c)({
				autoplayPref: h.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: i,
					started: d
				} = Object(a.e)(t => w(t, e)), {
					postId: h,
					shouldLoad: b,
					source: x,
					height: f,
					isNotCardView: g,
					showFull: y,
					shouldPause: v,
					width: _,
					isListing: C,
					className: S,
					showCentered: O,
					originalSource: j,
					isPromoted: N
				} = e, T = t && !(N && Object(c.hasAcceptableAds)()), L = Object(a.d)();

				function P(e) {
					L(e ? Object(u.r)(h) : Object(u.E)(h))
				}

				function I() {
					return L(Object(u.z)({
						postId: h
					}))
				}
				const R = r()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && L(Object(u.s)(h))
				}, 200);

				function B(e) {
					e.persist(), R(e)
				}

				function M(e) {
					var t;
					(i || F(e), d) || (t = e.timeStamp, L(Object(u.A)(h, t)))
				}

				function D(e) {
					L(Object(u.q)(h, e.timeStamp))
				}

				function F(e) {
					! function(e) {
						L(Object(u.D)({
							metadata: e,
							postId: h
						}))
					}({
						id: h,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function A(e) {
					s || M(e), i || F(e), L(Object(u.C)(h))
				}

				function H() {
					const e = {};
					return O && (e.margin = "0 auto"), C || (e.maxHeight = `${p.e}px`), o.a.createElement(E, {
						autoplay: T,
						className: Object(l.a)(m.a, k.a.styledVideo),
						height: f,
						isListing: C,
						isNotCardView: g,
						key: h,
						loop: !0,
						onBufferingChange: P,
						onLoadStart: D,
						onLoadedData: M,
						onLoadedMetadata: F,
						onPause: I,
						onPlaying: A,
						onTimeUpdate: B,
						shouldLoad: b,
						shouldPause: v,
						showCentered: O,
						showFull: y,
						source: x,
						style: e,
						width: _
					})
				}
				return C ? H() : o.a.createElement("div", {
					className: Object(l.a)(k.a.container, S, {
						[k.a.centered]: O
					})
				}, o.a.createElement("a", {
					href: j,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/fastdom/index.ts"),
				i = n("./node_modules/lodash/isEqual.js"),
				o = n.n(i),
				a = n("./node_modules/lodash/throttle.js"),
				d = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/config.ts"),
				b = n("./src/higherOrderComponents/asTooltip.tsx"),
				x = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/constants/index.ts"),
				g = n("./src/reddit/actions/tooltip.ts"),
				y = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				v = n("./src/reddit/constants/componentSizes.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/InternalLink/index.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/models/Profile/index.ts"),
				S = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/selectors/userPrefs.ts"),
				T = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				L = n.n(T);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(E.u)({
					routeName: E.Y,
					privateListingType: E.j
				}),
				R = Object(p.c)({
					isDropdownMenuOpen: e => Object(O.a)(e) === M,
					isOwnProfile: (e, t) => Object(j.X)(e, t.profileName),
					isSnoovatar30Enabled: S.d.snoovatar30,
					isSubscriptionsPinned: N.b
				}),
				B = Object(b.a)(_.a),
				M = "profile-nav-menu-tooltip",
				D = v.g + v.r + v.q;
			var F;
			t.a = I(Object(u.b)(R, e => ({
					toggleTooltip: t => e(Object(g.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: n,
						privateListingType: s,
						profileName: i,
						routeName: a,
						toggleTooltip: u,
						isSnoovatar30Enabled: m,
						isSubscriptionsPinned: p,
						viewBlockedConsent: h
					} = e;
					const [b, f] = Object(c.useState)(!1), g = Object(c.useRef)(null), [E, _] = Object(c.useState)([]), [k, C] = Object(c.useState)([]);
					return Object(c.useEffect)(() => {
						const e = W({
							profileName: i,
							isOwnProfile: n,
							routeName: a,
							privateListingType: s,
							isSnoovatar30Enabled: m,
							viewBlockedConsent: h
						});
						_(e.filter(e => e.position === F.MENU));
						const t = [],
							c = d()(() => {
								const n = document.documentElement.clientWidth - 2 * v.q,
									s = n > D ? D : n;
								let r = 42;
								t.forEach(t => {
									r += t.offsetWidth;
									const n = e.find(e => e.text.toString().toLowerCase() === t.text);
									n.position = r > s ? F.DROPDOWN : F.MENU
								});
								const i = e.filter(e => e.position === F.MENU);
								_(e => o()(i, e) ? e : i);
								const a = e.filter(e => e.position === F.DROPDOWN);
								C(e => o()(a, e) ? e : a), f(a.length > 0)
							}, 50);
						return r.a.read(() => {
							const e = g.current;
							e && (e.childNodes.forEach((e, n) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), c())
						}), window.addEventListener("resize", c), () => {
							window.removeEventListener("resize", c)
						}
					}, [i, n, a, s, m, h]), l.a.createElement("div", {
						className: L.a.container
					}, l.a.createElement(y.a, {
						bladeOpen: !1,
						offsetLeft: p ? v.u : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: L.a.menuContainer,
							ref: g
						}, E.map(e => l.a.createElement(A, P({}, e, {
							key: e.key
						})))), b && l.a.createElement("button", {
							className: Object(x.a)(L.a.mainLink),
							id: M,
							onClick: () => u(M)
						}, l.a.createElement(w.a, {
							name: "overflow_horizontal"
						})), b && l.a.createElement(B, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: M
						}, k.map(e => l.a.createElement(H, P({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(F || (F = {}));
			const A = e => {
					let {
						isActive: t,
						text: n,
						url: s,
						internal: r
					} = e;
					return r ? l.a.createElement(k.a, {
						className: Object(x.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						to: s
					}, n) : l.a.createElement("a", {
						className: Object(x.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						href: s
					}, n)
				},
				H = e => {
					let {
						isActive: t,
						internal: n,
						url: s,
						text: r
					} = e;
					return n ? l.a.createElement(m.a, {
						className: Object(x.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, r) : l.a.createElement("a", {
						className: Object(x.a)(L.a.dropdownLink),
						href: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, r)
				},
				W = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: o,
						viewBlockedConsent: a
					} = e;
					const d = n ? [{
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && i === C.b.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && i === C.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && i === C.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && i === C.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: F.MENU
					}] : [];
					n ? (d.push({
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && i === C.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: F.MENU
					}), d.push({
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && i === C.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: F.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${h.a.oldRedditUrl}/user/${t}/gilded/`,
						position: F.MENU
					});
					const c = o ? [{
							internal: !0,
							isActive: r === f.Ob.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: s.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: F.MENU
						}] : [],
						l = a ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: r === f.Ob.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${l}`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${t}/posts/${l}`,
						position: F.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${l}`,
						position: F.MENU
					}, ...c, ...d]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/SidebarContainer/index.tsx"),
				d = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				c = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				l = n("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts");
			const f = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				g = e => {
					const t = Object(o.e)(e => Object(x.k)(e));
					return i.a.createElement(a.a, {
						className: e.className
					}, i.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), i.a.createElement(h.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: b.a.PROFILE
						}
					}), i.a.createElement(d.a, {
						profileName: e.profileName
					}), i.a.createElement(c.a, {
						profileName: e.profileName
					}), !t && i.a.createElement(u.a, null, i.a.createElement(l.a, {
						profileName: e.profileName
					})), i.a.createElement(u.a, null, i.a.createElement(p.a, {
						profileName: e.profileName
					})), i.a.createElement(m.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			g.defaultProps = {
				isOverlay: !1
			}, t.a = g
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const h = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									r && s(n, r), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = h(Object(a.a)(b))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				y = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return i.a.createElement(g, p({}, s, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				v = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class E extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return i.a.createElement(y, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, i.a.createElement(x, null, i.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), i.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "w", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(o),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				h = d.a.blockquote("Blockquote", a.a),
				b = d.a.p("P", a.a),
				x = d.a.li("Li", a.a),
				f = d.a.ul("Ul", a.a),
				g = d.a.ol("Ol", a.a),
				y = d.a.strong("B", a.a),
				v = d.a.em("I", a.a),
				E = d.a.span("U", a.a),
				_ = e => r.a.createElement("del", e),
				k = d.a.sub("Sub", a.a),
				w = d.a.sup("Sup", a.a),
				C = d.a.table("Table", a.a),
				S = d.a.tr("Tr", a.a),
				O = d.a.td("Tdl", a.a),
				j = d.a.td("Tdc", a.a),
				N = d.a.td("Tdr", a.a),
				T = d.a.th("Thl", a.a),
				L = d.a.th("Thc", a.a),
				P = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(i.b, e), "A", a.a)),
				I = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/findLastIndex.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				x = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				y = n.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = n("./src/lib/lessComponent.tsx").a.div("Container", y.a),
				_ = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return a.a.createElement(E, v({}, s, {
						style: {
							color: Object(h.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: n,
								...s
							}))
						}
					}))
				}),
				k = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				w = e => i()(e, k),
				C = e => e.findIndex(k),
				S = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: i,
						isNsfwBlockingModalEligible: o,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: h,
						rtJsonElementProps: g,
						useExplicitTextColor: v,
						shouldBlur: k
					} = e, S = s.document, O = [], j = e.mediaMetadata || null, N = C(S), T = w(S);
					if (k && !r && !o) return a.a.createElement(E, {
						className: Object(d.a)(m.j, n)
					}, a.a.createElement("div", {
						className: y.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: y.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!i, !!c))));
					if (-1 !== N)
						for (let a = N; a <= T; a++) {
							const e = S[a];
							switch (e.e) {
								case b.k:
									O.push(f.c(e, g, a));
									break;
								case b.l:
									O.push(f.d(a));
									break;
								case b.b:
									O.push(f.a(e, j, g, a));
									break;
								case b.c:
									O.push(f.b(e, a));
									break;
								case b.p:
									O.push(f.f(e, j, g, a));
									break;
								case b.z:
									O.push(f.h(e, j, g, a));
									break;
								case b.u:
									O.push(f.g(e, j, g, a));
									break;
								case b.h:
									O.push(Object(x.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									O.push(...Object(x.b)(e, a, j, h, p, t))
							}
						}
					return v ? a.a.createElement(E, {
						className: Object(d.a)(m.j, n)
					}, O) : a.a.createElement(_, {
						className: Object(d.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, O)
				};
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return S(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				d = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				x = n("./src/reddit/components/RichTextJson/media.m.less"),
				f = n.n(x),
				g = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = /\/(\w+)\/asset\/(\w+)\//,
				E = g.a.wrapped(b.a, "A", f.a),
				_ = g.a.wrapped(l.a, "ImageBox", f.a),
				k = g.a.wrapped(e => i.a.createElement("p", e), "Caption", f.a),
				w = g.a.div("Placeholder", f.a),
				C = g.a.wrapped(e => {
					let {
						className: t,
						e: n,
						...r
					} = e;
					const o = n === h.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return i.a.createElement(w, y({
						className: t,
						style: {
							"--placeholder-content-text": `'${o}'`
						}
					}, r))
				}, "Placeholder", f.a),
				S = (e, t) => {
					let {
						c: n,
						x: s,
						y: r
					} = e;
					return i.a.createElement("div", {
						className: f.a.MediaWrapper
					}, i.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, i.a.createElement(c.a, {
						isListing: !1,
						source: n,
						height: r,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				O = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === h.s ? r = n.s.u : n.e === h.r ? r = n.s.gif : n.e === h.t && (r = (e => {
						const t = v.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? i.a.createElement(E, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				j = (e, t, n, s, r, a) => {
					const c = h.E(n, e.id);
					if (s) return [O(e, t, c)];
					const l = [];
					return c ? c.e === h.s ? l.push(((e, t, n, s) => {
						let {
							id: r,
							s: a
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, i.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, i.a.createElement(_, {
							altText: s,
							originalSource: a.u,
							postId: r,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(c, t, !!e.c, a)) : c.e === h.r ? l.push(((e, t, n) => {
						let {
							id: s,
							ext: r,
							s: a
						} = e;
						if (Object(p.g)(s)) {
							const e = r || Object(p.f)(s);
							return i.a.createElement("div", {
								className: Object(o.a)(f.a.MediaWrapper, {
									[f.a.mHasCaption]: n
								})
							}, i.a.createElement(E, {
								href: e,
								key: t,
								target: "_blank"
							}, a.mp4 ? i.a.createElement("video", {
								className: f.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, i.a.createElement("source", {
								src: a.mp4
							})) : {
								originalSource: e
							}))
						}
						return i.a.createElement("div", {
							className: Object(o.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, i.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, i.a.createElement(m.a, {
							height: a.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: a.mp4,
							width: a.x,
							postId: s,
							source: a.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === h.t && l.push(((e, t, n, s) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return i.a.createElement("div", {
							className: Object(o.a)(f.a.MediaWrapper, {
								[f.a.mHasCaption]: n
							})
						}, i.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, i.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(c, t, !!e.c, r)) : l.push(((e, t) => i.a.createElement(C, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => i.a.createElement(k, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "i", (function() {
				return H
			})), n.d(t, "e", (function() {
				return W
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./node_modules/uuid/v4.js"),
				l = n.n(c),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(f);
			const y = 1e3,
				v = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, y)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.gb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const i = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: i,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: i,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var k = Object(u.c)(_),
				w = n("./src/reddit/components/RichTextJson/media.tsx"),
				C = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = n("./src/reddit/components/SubredditMention/index.tsx"),
				O = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				j = n("./src/reddit/helpers/isComment.ts"),
				N = n("./src/reddit/helpers/isPost.ts"),
				T = n("./src/reddit/helpers/richTextJson/index.ts"),
				L = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						i = [],
						o = s.length;
					for (let a = 0; a < o; a++) {
						const e = s[a];
						i.push(e.e === p.w ? e.t : W(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: n
					}, i)
				},
				I = e => a.a.createElement(d.e, {
					key: e
				}),
				R = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						o = [];
					for (let a = 0; a < i; a++) o.push(D(r[a], t, n, a));
					return a.a.createElement(d.c, {
						key: s
					}, o)
				},
				B = (e, t) => {
					const n = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				M = (e, t, n, s) => {
					const r = e.c,
						i = [],
						o = r.length;
					for (let l = 0; l < o; l++) {
						const e = r[l].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: l
						}, e.map((e, s) => D(e, t, n, s))))
					}
					const c = e.o ? d.i : d.v;
					return a.a.createElement(c, {
						key: s
					}, i)
				},
				D = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return R(e, t, n, s);
						case p.c:
							return B(e, s);
						case p.k:
							return P(e, n, s);
						case p.l:
							return I(s);
						case p.p:
							return M(e, t, n, s);
						case p.u:
							return A(e, t, n, s);
						case p.z:
							return F(e, t, n, s)
					}
				},
				F = (e, t, n, s) => {
					const r = e.c,
						i = e.h,
						o = r.length,
						c = i.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = i[d],
							{
								H: s,
								D: r
							} = z(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(s, {
							key: d
						}, H(o, t, n))), m[d] = r
					}
					for (let p = 0; p < o; p++) {
						const e = r[p],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: o = []
								} = e[r];
							i.push(a.a.createElement(s, {
								key: r
							}, H(o, t, n)))
						}
						u.push(a.a.createElement(d.t, {
							key: p
						}, i))
					}
					return a.a.createElement(d.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, l)), a.a.createElement("tbody", null, u))
				},
				A = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(T.g)(r.id) ? a.a.createElement(d.j, {
						key: s
					}, H(e.c, t, n)) : Object(w.b)(r, s, t)
				},
				H = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === p.A) s.push(U(r, i));
						else if (r.e === p.x) s.push(a.a.createElement(C.a, {
							key: i
						}, H(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(k, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else s.push(W(r, n, i))
					}
					return s
				},
				W = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = U({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(O.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let r, i;
							const o = Object(L.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(N.b)(c) && (r = c.postId), c && Object(j.b)(c) && (i = c.id, r = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: r,
								commentId: i
							}, s);
						case p.y:
							return a.a.createElement(S.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(d.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: n,
						t: r
					} = e, i = [];
					if (!n) return q(0, r, t);
					const o = Object(s.a)(r);
					let a = 0,
						d = 0;
					const c = n.length;
					for (; a < c; a++) {
						const [e, t, s] = n[a], c = t + s, l = o[t], u = o[c] - l;
						l > d && i.push(q(0, r.substr(d, l - d), `between${a}`)), i.push(q(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && i.push(q(0, r.substr(d), `remaining${a}`)), i
				},
				G = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				q = (e, t, n) => {
					let s = t;
					return s = i()(G, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				z = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/take.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: n,
					headerButton: r,
					items: d,
					minimizedLength: h,
					onLoadMore: b,
					pending: x,
					renderItem: f,
					title: g
				} = e, [y, v] = Object(o.useState)(!1), E = d.length > h || n, _ = (!E || y ? d : i()(d, h)).map(e => f({
					item: e
				})), k = () => {
					y || v(!0), y && !n && v(!1), n && b && b()
				};
				return a.a.createElement(c.a, {
					className: t,
					headerButton: r,
					title: g
				}, _, a.a.createElement(m.a, null, a.a.createElement(p.a, null, E && (() => {
					const e = !y || n && b ? s.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : s.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: k
					}, x ? a.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: d.Ub
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				y = n.n(g);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = d.a.a("Link", y.a), _ = Object(o.c)({
				isCountrySitesEnabled: b.b,
				isNavbarLikeMwebEnabled: x.a,
				countryCode: f.b
			}), k = Object(i.b)(_), w = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = w(k(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					n = Object(b.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, v._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, v._("© {year} Reddit, Inc. All rights reserved.", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, v._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/coins"
				}, v._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/premium"
				}, v._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(E, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, v._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(E, {
					href: `https://www.reddit.com${Object(p.a)()}`
				}, v._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/topics/a-1/"
				}, v._("Topics", null, {
					hk: "349RFt"
				}))), !!u.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, v._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, v._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, v._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/"
				}, v._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/careers"
				}, v._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/press"
				}, v._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/advertising"
				}, v._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(E, {
					href: "http://www.redditblog.com/"
				}, v._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, v._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: y.a.Column
				}, s("de"), s("es"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, v._("Reddit Inc © {year}. All rights reserved", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subscriptions.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = n.n(b);
			const f = Object(a.c)({
					currentUser: h.l,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				g = Object(o.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				y = e => {
					let {
						item: t
					} = e;
					return i.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = g(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: r,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === r.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(o));
				return i.a.createElement(c.a, {
					className: x.a.container,
					title: m,
					items: p,
					renderItem: y,
					hasMoreItems: a,
					onLoadMore: d,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = n.n(p);
			const b = Object(d.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				x = Object(o.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.g)(t.profileName, !0))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return i.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, i.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), i.a.createElement("div", {
						className: h.a.description
					}, i.a.createElement(a.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), i.a.createElement("div", {
						className: h.a.meta
					}, s.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [s.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: r,
					onLoadMore: o,
					profileName: a
				} = e;
				return r && r.length ? i.a.createElement(u.a, null, i.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: o,
					pending: n,
					renderItem: f,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = n("./src/reddit/selectors/gold/powerups/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = n.n(h);
			const x = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: n
					} = t;
					const s = Object(m.Bb)(e, {
							userName: n
						}),
						r = Object(u.f)(e);
					return (s && r ? r[s.id] : null) || []
				}
			});

			function f(e) {
				let {
					item: t
				} = e;
				const n = t.subredditInfo,
					r = i.a.createElement(c.b, {
						iconUrl: n.styles.icon,
						className: b.a.subredditIcon
					});
				return i.a.createElement(l.a, {
					className: b.a.communityItemContainer,
					key: n.id
				}, i.a.createElement("div", {
					className: b.a.iconContainer
				}, i.a.createElement(a.a, {
					to: n.path
				}, r)), i.a.createElement("div", {
					className: b.a.communityDescription
				}, i.a.createElement("div", {
					className: b.a.communityName
				}, i.a.createElement(a.a, {
					to: n.path
				}, n.prefixedName)), i.a.createElement("div", {
					className: b.a.subscriberCount
				}, s.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [s.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(x)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? i.a.createElement(d.a, {
					title: s.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(c.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: n,
						style: r
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(t, m.a.container),
						style: r
					}, a.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => h(n)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				x = n("./src/reddit/components/SidebarFooter/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = n.n(y),
				E = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = d.e[1] + 24,
				w = f.f + 8,
				C = w + 152 + 16,
				S = C + k + 8,
				O = E.a.div("Container", v.a),
				j = E.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return a.a.createElement(b, _({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?w:8}px)`
						}
					}, s))
				}, "BackToTop", v.a),
				N = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: i
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(n, {
							[v.a.StickyStyles]: i && !r,
							[v.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class T extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > C
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: i,
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !s);
					return a.a.createElement(O, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(N, {
						isFakeOverlay: n,
						isSticky: d
					}, t, s, !i && a.a.createElement(x.a, null)), !this.props.hideBackToTop && a.a.createElement(j, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const L = Object(g.u)();
			t.a = L(T)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = n("./src/reddit/controls/Typography/index.tsx"),
				l = n("./src/reddit/selectors/telemetry.ts");
			var u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = n("./node_modules/lodash/isEqual.js"),
				h = n.n(p);
			const b = Object(a.b)(a.d, h.a);
			var x = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = n.n(f),
				y = n("./src/lib/lessComponent.tsx"),
				v = n("./src/lib/opener/index.ts");
			const E = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(x.r)(e, Object(x.m)(e, n))
				}
			}, b);
			t.a = Object(o.b)(E)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(d.a, {
					title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: O
				})
			});
			const _ = y.a.wrapped(m.a, "TrophyItem", g.a),
				k = y.a.div("TrophyIcon", g.a),
				w = y.a.h5("TrophyName", g.a),
				C = y.a.div("TrophyContent", g.a),
				S = y.a.wrapped(c.c, "Description", g.a),
				O = e => {
					let {
						item: t
					} = e;
					const n = Object(u.a)(),
						s = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(_, {
						key: t.id
					}, i.a.createElement(k, null, t.url ? i.a.createElement("a", {
						target: v.d.BLANK,
						rel: v.c,
						href: t.url,
						onClick: () => n((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.n(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.Q(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, s) : s), i.a.createElement(C, null, i.a.createElement(w, null, t.name), i.a.createElement(S, null, t.description)))
				}
		},
		"./src/reddit/components/Snoobuilder/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2m3i3Cf98M2LvLLdou3RXP"
			}
		},
		"./src/reddit/components/Snoobuilder/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s, r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./node_modules/lodash/debounce.js"),
				l = n.n(c),
				u = n("./src/reddit/components/ResizeSensor/index.tsx");
			class m extends r.Component {
				constructor() {
					super(...arguments), this.id = "__ReactUnityWebGL__", this.resizeHandler = () => {
						if (!this.containerRef || !this.canvasRef) return;
						const {
							width: e,
							height: t
						} = this.containerRef.getBoundingClientRect();
						this.canvasRef.width = e, this.canvasRef.height = t
					}, this.handleResize = l()(this.resizeHandler, 100, {
						leading: !0
					}), this.setContainerRef = e => this.containerRef = e
				}
				componentDidMount() {
					this.props.unityContent.load(this.id, (e, t) => {
						0 === t && e.Module.canvas && (this.canvasRef = e.Module.canvas, this.canvasRef.style.display = "block")
					})
				}
				render() {
					const {
						className: e,
						style: t
					} = this.props;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						id: this.id,
						ref: this.setContainerRef,
						style: t,
						className: e
					}), i.a.createElement(u.a, {
						onResize: this.handleResize
					}))
				}
			}! function(e) {
				e[e.OFF = 0] = "OFF", e[e.ON = 1] = "ON"
			}(s || (s = {}));
			class p {
				constructor(e, t) {
					this.buildJsonPath = e, this.unityLoaderJsPath = t, this.loaderPromise = null
				}
				load(e, t) {
					this.loaderPromise || (this.loaderPromise = h(this.unityLoaderJsPath)), this.loaderPromise.then(() => {
						if (this.instance) return;
						UnityLoader.Error.didShowErrorMessage = !0;
						const n = t ? {
							onProgress: t
						} : {};
						this.instance = UnityLoader.instantiate(e, this.buildJsonPath, n)
					})
				}
				setFullscreen(e) {
					this.instance && this.instance.SetFullscreen(e)
				}
				sendMessage(e, t, n) {
					if (!this.instance) return;
					const s = [e, t];
					void 0 !== n && s.push(n), this.instance.SendMessage(...s)
				}
			}
			const h = e => new Promise(t => {
				const n = document.getElementsByTagName("head")[0],
					s = document.createElement("script");
				s.type = "text/javascript", s.async = !0, s.src = e, s.onload = () => {
					t()
				}, n.appendChild(s)
			});
			var b = n("./src/reddit/components/Snoobuilder/index.m.less"),
				x = n.n(b),
				f = n("./assets/snoobuilder/Snoobuilder.json"),
				g = n.n(f),
				y = n("./assets/snoobuilder/UnityLoader.js"),
				v = n.n(y);
			const E = Object(d.c)({}),
				_ = Object(o.b)(E, (e, t) => ({}));
			class k extends i.a.PureComponent {
				constructor(e) {
					super(e), this.unityContent = new p(`${a.a.assetPath}${g.a}`, `${a.a.assetPath}${v.a}`)
				}
				render() {
					return i.a.createElement("div", {
						className: x.a.wrapper
					}, i.a.createElement(m, {
						unityContent: this.unityContent,
						style: {
							width: "100%",
							height: "800px"
						}
					}))
				}
			}
			t.default = _(k)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = n.n(d);
			const l = i.a.wrapped(o.b, "SubredditIcon", c.a),
				u = i.a.wrapped(e => r.a.createElement(a.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				x = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const y = Object(h.c)(g),
				v = Object(o.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				E = Object(i.b)(v),
				_ = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: i,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return r.a.createElement(y, {
						subredditName: s,
						rtJsonElementProps: o
					});
					switch (i) {
						case b.pf.SmIcon:
							return r.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: o
							});
						case b.pf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(y, {
								subredditName: s,
								rtJsonElementProps: o
							})
					}
				};
			t.b = E(_)
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(o.e)(a.e),
						n = Object(o.e)(a.a);
					return t || n ? i.a.createElement(d, e) : null
				}
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(a);
			const c = i.a.div("WidgetBackground", d.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.f()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				w = n.n(k);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => i.a.createElement(h.a, {
					className: Object(c.a)(w.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: w.a.container
				}, e.isLoading ? i.a.createElement(f.a, {
					className: w.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: w.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(j, C({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(x.t, {
					className: w.a.bottomButton,
					kind: x.b.Button,
					priority: x.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				O = Object(d.c)({
					hideNSFWPref: E.G,
					nightmode: E.eb
				}),
				j = Object(o.b)(O)(e => i.a.createElement("div", {
					className: Object(c.a)(w.a.communityItemContainer, {
						[w.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(y.a, {
					className: w.a.communityItemExpandCenter,
					widthRight: b.t
				}, i.a.createElement("div", {
					className: w.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: w.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: w.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: w.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), i.a.createElement("div", {
					className: w.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: w.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: w.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(f.a, {
					className: Object(c.a)(w.a.communityCta, w.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(x.t, {
					className: w.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
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
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: w.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				v = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = n.n(v);
			var _ = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let i, o = t.username,
						a = "";
					return s !== m.a.Twitter ? null : (i = r.a.createElement(g.a, {
						className: E.a.twitterLogo
					}), a = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, r.a.createElement(y.a, null, r.a.createElement("span", {
						className: E.a.icon
					}, i), r.a.createElement(x.b, {
						className: E.a.link,
						href: t.link,
						onClick: n
					}, r.a.createElement("div", {
						className: E.a.linkTitle
					}, r.a.createElement("span", {
						className: E.a.name
					}, o), r.a.createElement(f.a, {
						className: E.a.linkIcon
					})), r.a.createElement("div", {
						className: E.a.linkDescription
					}, a))))
				},
				k = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = n.n(k);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: n.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(h.Bb)(e, {
						userName: n.name
					}) : null
				}
			}), O = Object(i.b)(S, e => ({
				trackTwitterAccountClicked: t => e((e, n) => u.m(n(), t))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(O(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? r.a.createElement(a.a, null, r.a.createElement(c.b, null, r.a.createElement(c.a, null, C._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && r.a.createElement("div", {
					className: w.a.account
				}, r.a.createElement(_, {
					provider: m.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = v(e);
					return Object(g.f)(t)
				},
				k = e => {
					const t = E(e);
					return Object(g.f)(t)
				};
			var w = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = n.n(w);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(u.u)(), j = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(x.l)(e, {
							subredditId: n
						}),
						r = Object(f.eb)(e);
					return s || r
				},
				nigtmode: f.eb,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = k(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: i,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = n ? C.a.widgetContentOnly : C.a.widgetContent, x = !s && this.props.styles, f = x ? this.getWidgetBackgroundStyles() : {}, g = x ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!d,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(a.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: o,
						style: g,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(C.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(a.a)(b, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(j(Object(d.a)(Object(l.c)(N))))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						...i
					} = e, o = i;
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(r.b)(t) || Object(i.b)(t))) return Object(r.b)(t) ? o.SourceElement.Comment : Object(s.x)(n) ? o.SourceElement.PostDetail : Object(s.H)(n) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return _
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.n(e),
					source: r.LINK,
					action: i.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: r,
					screen: u.Y(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const r = Object(a.b)(n) ? "postId" : "commentId",
						i = {
							url: `/r/${s}/`,
							sourceElement: Object(d.a)(t),
							subredditName: s,
							[r]: n.id
						},
						c = Object(l.y)(e, {
							subredditName: s
						});
					return c ? {
						outbound: {
							...i,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...i
						}
					}
				},
				b = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(o.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.H(e, n.id),
						subreddit: u.hb(e, s),
						...h(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...b(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: i.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.ib(t, e),
					screen: u.Y(t)
				}),
				g = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.VIEW,
					noun: s.ITEM_POST,
					post: u.H(n, t),
					subreddit: u.ib(n, e),
					screen: u.Y(n)
				}),
				y = (e, t) => n => ({
					...p(n),
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: u.H(n, t),
					subreddit: u.ib(n, e),
					screen: u.Y(n)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: i.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.H(n, e),
					subreddit: o.gb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.n(n)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("rightAligned", i.a)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(a);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: i,
					gutter: a,
					...l
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(d.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: i,
						height: s,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				d = n.n(a);
			const c = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), i.a.createElement(o.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return i.a.createElement("div", {
						className: d.a.container
					}, i.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), i.a.createElement(o.n, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileSnoobuilder/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/models/ContentGate.ts"),
				c = n("./src/reddit/components/ContentGate/index.tsx"),
				l = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				u = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				m = n("./src/reddit/layout/page/Listing/index.tsx"),
				p = n("./src/reddit/pages/ErrorPages/index.tsx"),
				h = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				x = n("./src/reddit/selectors/user.ts");
			const f = n("./src/reddit/components/Snoobuilder/index.tsx").default,
				g = Object(a.u)(),
				y = Object(o.a)(x.R, a.E, x.lb, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(b.j)(e, {
						profileName: n.params.profileName
					})
				}, h.d, (e, t, n, s, r, i) => ({
					isLoggedIn: e,
					over18Prefs: n,
					isOwnProfile: t,
					isProfileNSFW: !!r && r.isNSFW,
					profileName: s,
					nsfwExperiment: i
				})),
				v = Object(i.b)(y, (e, t) => ({}));
			class E extends r.a.Component {
				render() {
					const {
						isLoggedIn: e,
						over18Prefs: t,
						isOwnProfile: n,
						isProfileNSFW: s,
						pageLayer: i,
						profileName: o,
						nsfwExperiment: a
					} = this.props;
					if (!i) return null;
					if (403 === i.status) return r.a.createElement(p.a, null);
					if (404 === i.status) return r.a.createElement(p.b, null);
					if (!o) return null;
					const b = a !== h.a.Blurred && !t && s && !n;
					return Object(h.g)(a, e, b) ? r.a.createElement(c.default, {
						subredditName: o,
						contentGateType: d.a.Nsfw
					}) : r.a.createElement(m.a, {
						className: this.props.className,
						contentNavBar: r.a.createElement(l.a, {
							profileName: o
						}),
						content: r.a.createElement(f, null),
						sidebar: r.a.createElement(u.a, {
							hideBackToTop: !0,
							profileName: o
						})
					})
				}
			}
			t.default = g(v(E))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.jf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === s.pf.SmIcon || t === s.pf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(o.X)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileSnoobuilder.8d18ebda0c3e5cb72596.js.map