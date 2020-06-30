// https://www.redditstatic.com/desktop2x/ProfileSnoobuilder.9ff3230e2869b52f8c61.js
// Retrieved at 6/30/2020, 3:20:05 PM by Reddit Dataminer v1.0.0
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
					var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						l = /CrOS/.test(t),
						c = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						b = !o && !c && /macintosh/i.test(t),
						g = !i && !u && !m && !h && /linux/i.test(t),
						y = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						x = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !x && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : p ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, y ? (r.msedge = e, r.version = y) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: y
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : c ? r = {
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
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, v && (r.version = v)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (r.version = v)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : b ? (r.mac = e, r.osname = "macOS") : k ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var w = "";
					r.windows ? w = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? w = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? w = (w = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? w = (w = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? w = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? w = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? w = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? w = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (w = n(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (r.osversion = w);
					var E = !r.windows && w.split(".")[0];
					return x || d || "ipad" == o || i && (3 == E || E >= 4 && !_) || r.silk ? r.tablet = e : (_ || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function o(e) {
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

				function i(e, s, r) {
					var i = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = o, n.check = function(e, t, n) {
					return !i(e, t, n)
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
				return r(e, (function(e, r, o) {
					n = s ? (s = !1, e) : t(n, e, r, o)
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
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? s : i,
					l = arguments.length < 3;
				return d(e, o(t, 4), n, l, r)
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
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				o = n("./node_modules/tlds/index.js"),
				i = n.n(o),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				l = n.n(d);
			const c = e => l()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				h = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				p = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				f = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				g = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				y = h.normalize;
			h.normalize = e => {
				y.call(h, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = c(e.text);
						return !n || n && t
					})
				},
				x = e => {
					return [...b.match(e) || [], ...p.match(e) || []].map(e => !c(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
					const t = h.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(r.e)(e),
					i = encodeURIComponent("".concat(t).concat(o));
				return "".concat(s.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(i)
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
				o = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/reddit/actions/subreddit.ts");
			const a = e => async (t, n, a) => {
				const {
					params: d
				} = e, {
					profileName: l
				} = d, c = l.toLowerCase();
				await t(Object(o.d)(c)), await Promise.all([t(Object(r.c)(l)), t(Object(i.q)()), t(Object(s.o)(l))])
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
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/loginHref/index.ts"),
				c = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/Footer/index.m.less"),
				f = n.n(p);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = h.a.div("FooterContainer", f.a), y = h.a.div("UserAgreement", f.a), v = h.a.a("UserAgreementLink", f.a), x = h.a.a("PrivacyLink", f.a);
			var _ = () => o.a.createElement(g, null, o.a.createElement(y, null, b._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [b._param("=User Agreement", o.a.createElement(v, {
					href: "".concat(s.a.redditUrl, "/help/useragreement")
				}, b._("User Agreement", null, {
					hk: "2srkM2"
				}))), b._param("=Privacy Policy", o.a.createElement(x, {
					href: "".concat(s.a.redditUrl, "/help/privacypolicy")
				}, b._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), b._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				S = n.n(E),
				j = n("./src/lib/linkMatchers/index.ts"),
				C = n("./src/lib/linkMatchers/customLinks.ts"),
				O = n("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				R = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, o] = t.slice(s, s + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var L = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = S()(t, R)), e.parseRegularLinks && (t = S()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.e.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return o.a.createElement(O.a, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/models/ContentGate.ts"),
				z = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/components/ContentGate/index.m.less"),
				A = n.n(M);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = h.a.div("ButtonsContainer", A.a), H = h.a.div("Container", A.a), U = h.a.div("Description", A.a), G = h.a.div("PrivateSubredditDetails", A.a), I = h.a.div("PrivateSubredditDescription", A.a), q = h.a.h3("PrivateSubredditName", A.a), J = h.a.a("Link", A.a), V = h.a.wrapped(N.h, "LinkRouterButton", A.a), K = h.a.wrapped(N.g, "LinkButton", A.a), Y = h.a.wrapped(N.k, "SecondaryLinkRouterButton", A.a), Z = h.a.wrapped(N.j, "SecondaryLinkButton", A.a), X = h.a.wrapped(V, "GoHomeLinkButton", A.a), Q = h.a.img("Image", A.a), $ = h.a.img("ImagePlaceholder", A.a), ee = h.a.wrapped(V, "LeftLinkRouterButton", A.a), te = h.a.wrapped(K, "LeftLinkButton", A.a), ne = h.a.wrapped(Z, "SecondaryLeftLinkButton", A.a), se = h.a.wrapped(Y, "SecondaryLeftLinkRouterButton", A.a), re = h.a.h3("Title", A.a), oe = h.a.div("PageBody", A.a), ie = h.a.div("QuarantineMessageWrapper", A.a), ae = Object(d.c)({
				isLoggedIn: F.G,
				origin: z.l,
				user: F.i
			}), de = Object(T.t)(), le = Object(i.b)(ae, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(c.l)())
					}
				}
			}), ce = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: i,
					location: a,
					origin: d,
					pageLayer: u,
					quarantineRequiresEmail: h,
					quarantineMessage: p,
					quarantineMessageHtml: f,
					quarantineMessageRTJson: b,
					setNSFWPreference: g,
					subredditDescription: y,
					subredditName: v,
					user: x
				} = e, _ = () => {
					i ? g() : Object(c.k)(), window.location.reload()
				};
				switch (n) {
					case B.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/gold/premium-crest.png")
						}), o.a.createElement(re, null, W._("r/{community name} is a Reddit Premium community", [W._param("community name", v)], {
							hk: "2lyDwB"
						})), o.a.createElement(U, null, W._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(D, null, x ? o.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/premium")
						}, W._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(te, {
							href: Object(l.a)(a, d)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), x ? o.a.createElement(V, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(Z, {
							href: Object(l.a)(a, d)
						}, W._("Log in", null, {
							hk: "odEG4"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), o.a.createElement(re, null, n === B.a.Nsfw ? W._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : W._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(U, null, W._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(D, null, o.a.createElement(ee, {
							to: "/"
						}, W._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(Z, {
							onClick: _
						}, W._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/private.png")
						}), o.a.createElement(re, null, W._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), y && y.length && o.a.createElement(G, null, o.a.createElement(q, null, "r/", v), o.a.createElement(I, null, o.a.createElement("div", null, y))), o.a.createElement(U, null, W._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), o.a.createElement(D, null, x ? o.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, W._("Message Mods", null, {
							hk: "vVe1i"
						})) : o.a.createElement(ne, {
							href: Object(l.a)(a, d)
						}, W._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(V, {
							to: "/"
						}, x ? W._("Go Home", null, {
							hk: "49p4or"
						}) : W._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case B.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), o.a.createElement(re, null, W._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(U, null, W._("This community is {=quarantined}", [W._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, W._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(ie, null, b ? o.a.createElement(w.a, {
							content: b,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : f ? o.a.createElement(k.a, {
							html: f
						}) : p || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), W._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(D, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(D, null, o.a.createElement(se, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(K, {
								href: "".concat(s.a.redditUrl, "/prefs/update")
							}, W._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(D, null, o.a.createElement(ee, {
								to: "/"
							}, W._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Z, {
								onClick: t
							}, W._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(x, r, h)));
					case B.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/banned.png")
						}), o.a.createElement(re, null, W._("r/{community name} has been banned from Reddit", [W._param("community name", v)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(U, null, e ? o.a.createElement(L, {
							linkClassName: A.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : W._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(D, null, o.a.createElement(V, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(D, null, o.a.createElement(V, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement($, null), o.a.createElement(re, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(U, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(D, null, x && o.a.createElement(m.a, {
							eventSource: "content_gate"
						}), o.a.createElement(X, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return W._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return W._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, W._("This account has been {=suspended} .", [W._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, W._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(re, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(U, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(D, null, o.a.createElement(X, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, W._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(D, null, o.a.createElement(X, {
							to: "/"
						}, W._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), o.a.createElement(re, null, W._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(D, null, o.a.createElement(V, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = de(le(Object(a.i)(e => o.a.createElement(H, null, o.a.createElement("div", null, o.a.createElement(oe, null, ce(e))), o.a.createElement(_, null)))))
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				b = n.n(f),
				g = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				v = g.a.wrapped(u.i, "SecondaryButton", b.a),
				x = g.a.wrapped(l.c, "StyledTooltip", b.a),
				_ = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(p.ab)(e),
					userIsSuspended: p.M
				});
			t.a = Object(i.b)(_, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(h.b)(n)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: y
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(c.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: l,
					userIsSuspended: c
				} = e;
				return o.a.createElement(v, {
					className: t,
					disabled: c || l,
					onClick: () => a(d),
					onMouseEnter: r,
					onMouseLeave: i,
					id: y
				}, s.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), l ? o.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: y,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? o.a.createElement(x, {
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
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o);
			class a extends i.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return i.a.createElement("div", {
						ref: this.setContainerRef
					})
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
				o = n.n(r);
			t.a = s.a.div("container", o.a)
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
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/components/SidebarFooter/index.m.less"),
				l = n.n(d);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = o.a.a("Link", l.a), m = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = m(e => r.a.createElement(i.a, {
				className: l.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: l.a.LinkContainer
			}, r.a.createElement("div", {
				className: l.a.Column
			}, r.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, c._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, c._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, c._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(u, {
				href: "http://redditgifts.com/"
			}, c._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, c._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/posts/a-1/"
			}, c._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, c._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: l.a.Column
			}, r.a.createElement(u, {
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: l.a.Copyright
			}, c._("Reddit Inc © {year}. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/BackToTop/index.m.less"),
				u = n.n(c);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var h = e => a.a.createElement("div", {
					className: Object(s.a)(e.className, u.a.container),
					style: e.style
				}, a.a.createElement(l.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				p = n("./src/reddit/components/SidebarFooter/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = n.n(g),
				v = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const k = d.e[1] + 24,
				w = f.f + 8 + 152 + 32 + 16,
				E = w + k + 8,
				S = v.a.div("Container", y.a),
				j = v.a.wrapped(e => {
					var {
						className: t
					} = e, n = _(e, ["className"]);
					return a.a.createElement(h, x({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, n))
				}, "BackToTop", y.a),
				C = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: o
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(n, {
							[y.a.StickyStyles]: o && !r,
							[y.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class O extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > E,
						shouldFooterSticky: this.windowHeight > w
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					const {
						props: {
							adComponent: e,
							adComponentOnFakeOverlay: t,
							children: n,
							className: s,
							hideFooter: r
						}
					} = this, o = this.state.isAdSticky && !(!e && !n);
					return a.a.createElement(S, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(C, {
						isFakeOverlay: t,
						isSticky: o
					}, e, n, !r && a.a.createElement(p.a, null)), !this.props.hideBackToTop && a.a.createElement(j, null))
				}
			}
			const P = Object(b.t)();
			t.a = P(O)
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
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./node_modules/lodash/debounce.js"),
				c = n.n(l),
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
					}, this.handleResize = c()(this.resizeHandler, 100, {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						id: this.id,
						ref: this.setContainerRef,
						style: t,
						className: e
					}), o.a.createElement(u.a, {
						onResize: this.handleResize
					}))
				}
			}! function(e) {
				e[e.OFF = 0] = "OFF", e[e.ON = 1] = "ON"
			}(s || (s = {}));
			class h {
				constructor(e, t) {
					this.buildJsonPath = e, this.unityLoaderJsPath = t, this.loaderPromise = null
				}
				load(e, t) {
					this.loaderPromise || (this.loaderPromise = p(this.unityLoaderJsPath)), this.loaderPromise.then(() => {
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
			const p = e => new Promise(t => {
				const n = document.getElementsByTagName("head")[0],
					s = document.createElement("script");
				s.type = "text/javascript", s.async = !0, s.src = e, s.onload = () => {
					t()
				}, n.appendChild(s)
			});
			var f = n("./src/reddit/components/Snoobuilder/index.m.less"),
				b = n.n(f),
				g = n("./assets/snoobuilder/Snoobuilder.json"),
				y = n.n(g),
				v = n("./assets/snoobuilder/UnityLoader.js"),
				x = n.n(v);
			const _ = Object(d.c)({}),
				k = Object(i.b)(_, (e, t) => ({}));
			class w extends o.a.PureComponent {
				constructor(e) {
					super(e), this.unityContent = new h("".concat(a.a.assetPath).concat(y.a), "".concat(a.a.assetPath).concat(x.a))
				}
				render() {
					return o.a.createElement("div", {
						className: b.a.wrapper
					}, o.a.createElement(m, {
						unityContent: this.unityContent,
						style: {
							width: "100%",
							height: "800px"
						}
					}))
				}
			}
			t.default = k(w)
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => n => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(h.widget)(n, {
					subredditId: e,
					widgetKind: t
				})
			}, h.defaults);
			var f = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/models/Theme/index.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = _(e);
					return Object(v.f)(t)
				},
				E = e => {
					const t = k(e);
					return Object(v.f)(t)
				};
			var S = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(S);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(u.t)(), P = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						s = t.redditStyle || Object(g.m)(e, {
							subredditId: n
						}),
						r = Object(y.S)(e);
					return s || r
				},
				nigtmode: y.S,
				subredditId: u.m,
				topPostVariant: b.d
			}));
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(p(e, t)), this.setState({
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(f.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: o,
						onClick: i,
						title: d,
						titleClassName: c,
						truncateThreshold: u
					} = this.props, h = n ? j.a.widgetContentOnly : j.a.widgetContent, p = !s && this.props.styles, f = p ? this.getWidgetBackgroundStyles() : {}, b = p ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!i,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: i,
						style: f
					}, d && r.a.createElement("div", {
						className: j.a.widgetHeader,
						style: b
					}, r.a.createElement("div", {
						className: Object(a.a)(j.a.widgetTitle, c)
					}, r.a.createElement(l.b, {
						type: l.a.Widget
					}, d)), o), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.n, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(P(Object(d.a)(Object(c.c)(R))))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: o,
					gutter: a
				} = e, u = c(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", l({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, u), r.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: o,
						height: s,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
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
				return l
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				d = n.n(a);
			const l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), o.a.createElement(i.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, s.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				c = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || s.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), o.a.createElement(i.h, {
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/models/ContentGate.ts"),
				l = n("./src/reddit/components/ContentGate/index.tsx"),
				c = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				u = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				m = n("./src/reddit/layout/page/Listing/index.tsx"),
				h = n("./src/reddit/pages/ErrorPages/index.tsx"),
				p = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const b = n("./src/reddit/components/Snoobuilder/index.tsx").default,
				g = Object(a.t)(),
				y = Object(i.a)(a.B, f.V, (e, t) => {
					let {
						match: n
					} = t;
					return n.params.profileName
				}, (e, t) => {
					let {
						match: n
					} = t;
					return Object(p.j)(e, {
						profileName: n.params.profileName
					})
				}, (e, t, n, s) => ({
					over18Prefs: t,
					isOwnProfile: e,
					isProfileNSFW: !!s && s.isNSFW,
					profileName: n
				})),
				v = Object(o.b)(y, (e, t) => ({}));
			class x extends r.a.Component {
				render() {
					const {
						over18Prefs: e,
						isOwnProfile: t,
						isProfileNSFW: n,
						pageLayer: s,
						profileName: o
					} = this.props;
					return s ? 403 === s.status ? r.a.createElement(h.a, null) : 404 === s.status ? r.a.createElement(h.b, null) : o ? e || !n || t ? r.a.createElement(m.a, {
						className: this.props.className,
						contentNavBar: r.a.createElement(c.a, {
							profileName: o
						}),
						content: r.a.createElement(b, null),
						sidebar: r.a.createElement(u.a, {
							hideBackToTop: !0,
							profileName: o
						})
					}) : r.a.createElement(l.default, {
						subredditName: o,
						contentGateType: d.a.Nsfw
					}) : null : null
				}
			}
			t.default = g(v(x))
		}
	}
]);
//# sourceMappingURL=ProfileSnoobuilder.9ff3230e2869b52f8c61.js.map