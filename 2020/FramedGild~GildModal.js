// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.4da6855993c6fe03e2f6.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, a) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function a(e) {
						var a = t.match(e);
						return a && a.length > 1 && a[1] || ""
					}

					function s(e) {
						var a = t.match(e);
						return a && a.length > 1 && a[2] || ""
					}
					var n, r = a(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						w = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = a(/version\/(\d+(\.\d+)?)/i),
						E = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !E && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: v || a(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: a(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || a(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: v || a(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || a(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: a(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: a(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: a(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: a(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: a(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: a(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (n.msedge = e, n.version = w) : (n.msie = e, n.version = a(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: a(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: a(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: a(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : m ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: a(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: a(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: a(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: a(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: a(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: a(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || a(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || a(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: a(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: a(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: a(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: a(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: a(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
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
						version: a(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: a(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && v && (n.version = v)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || a(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : g ? (n.mac = e, n.osname = "macOS") : j ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var N = "";
					n.windows ? N = function(e) {
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
					}(a(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? N = a(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? N = (N = a(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? N = (N = a(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? N = a(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? N = a(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? N = a(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? N = a(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (N = a(/tizen[\/\s](\d+(\.\d+)*)/i)), N && (n.osversion = N);
					var x = !n.windows && N.split(".")[0];
					return E || d || "ipad" == r || i && (3 == x || x >= 4 && !O) || n.silk ? n.tablet = e : (O || "iphone" == r || "ipod" == r || i || o || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var a = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var a, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (a = 0; a < e.length; a++) s.push(t(e[a]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), a = n(e, (function(e) {
							var a = t - s(e);
							return n((e += new Array(a + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (a[0][t] > a[1][t]) return 1;
						if (a[0][t] !== a[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, n) {
					var i = a;
					"string" == typeof s && (n = s, s = void 0), void 0 === s && (s = !1), n && (i = t(n));
					var o = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([o, e[d]]) < 0
						} return s
				}
				return a.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in a) return !0
					}
					return !1
				}, a.isUnsupportedBrowser = i, a.compareVersions = r, a.check = function(e, t, a) {
					return !i(e, t, a)
				}, a._detect = t, a.detect = t, a
			}, e.exports ? e.exports = s() : a("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, a) {
				return e == e && (void 0 !== a && (e = e <= a ? e : a), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, a, s, n) {
				return n(e, (function(e, n, r) {
					a = s ? (s = !1, e) : t(a, e, n, r)
				})), a
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_baseClamp.js"),
				n = a("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, a) {
				return void 0 === a && (a = t, t = void 0), void 0 !== a && (a = (a = n(a)) == a ? a : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), s(n(e), t, a)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, a) {
			var s = a("./node_modules/lodash/_arrayReduce.js"),
				n = a("./node_modules/lodash/_baseEach.js"),
				r = a("./node_modules/lodash/_baseIteratee.js"),
				i = a("./node_modules/lodash/_baseReduce.js"),
				o = a("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, a) {
				var d = o(e) ? s : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), a, c, n)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			})), a.d(t, "b", (function() {
				return d
			}));
			var s = a("./src/lib/makeActionCreator/index.ts"),
				n = a("./src/reddit/actions/modal.ts"),
				r = a("./src/reddit/constants/modals.ts"),
				i = a("./src/reddit/actions/gold/constants.ts");
			const o = Object(s.a)(i.ab),
				d = () => async e => {
					e(Object(n.h)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			})), a.d(t, "b", (function() {
				return w
			})), a.d(t, "e", (function() {
				return v
			})), a.d(t, "d", (function() {
				return E
			})), a.d(t, "c", (function() {
				return O
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/formatApiError/index.ts"),
				r = a("./src/lib/makeActionCreator/index.ts"),
				i = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				c = a("./src/reddit/endpoints/gold/purchase.ts"),
				l = a("./src/reddit/helpers/correlationIdTracker.ts"),
				m = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = a("./src/reddit/models/Gold/Award.ts"),
				p = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(r.a)(h.p),
				g = Object(r.a)(h.d),
				f = Object(r.a)(h.q),
				w = (e, t, a) => async e => {
					e(f({
						thingId: t
					})), e(b({
						correlationId: a
					}))
				}, v = (e, t) => async (r, i, d) => {
					let {
						apiContext: h
					} = d;
					const b = i(),
						f = Object(l.c)(l.a.GoldPayment);
					let w, v;
					r(Object(o.stripeTokenPending)());
					const E = Object(p.v)(b);
					if (E || (w = await r(Object(o.validateAndCreateStripeToken)(e)), v = Object(p.s)(b), w)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: d,
							selectedAward: l
						} = b.gild;
						if (!e || !l.id) return void r(Object(o.stripeApiError)(s.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							O = l.pennyPrice;
						if (!O) return void r(Object(o.stripeApiError)(s.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const j = {
								gildType: p,
								isAnonymous: i,
								message: d
							},
							N = await Object(c.f)({
								context: h(),
								correlationId: f,
								gildParams: j,
								isOldReddit: t,
								pennies: O,
								rememberCard: v,
								savedCardId: E || void 0,
								thingId: e,
								token: w
							});
						if (N.error) {
							const e = Object(n.a)(N.error, N.status);
							return void r(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							r(g()), r(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: s,
								awarder_karma_received: n,
								coins: i,
								treatment_tags: d
							} = N.body;
							return void r(t({
								awardKarmaReceived: n || 0,
								awardId: p,
								awardings: s && s.length ? Object(m.a)(s).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})) : [],
								coins: i,
								id: e,
								treatmentTags: d
							}))
						}
					} catch (O) {
						const e = Object(n.a)(O);
						r(Object(o.stripeApiError)(e))
					} else r(Object(o.stripeApiError)(s.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, E = (e, t, a) => async (s, r, c) => {
					let {
						apiContext: m
					} = c;
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const r = await Object(d.b)({
							context: m(),
							awardId: e,
							pennies: t,
							thingId: a,
							correlationId: u
						});
						if (r.error) {
							const e = Object(n.a)(r.error);
							return void s(Object(o.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = r.body;
							return e
						}
					} catch (p) {
						i.c.captureException(p);
						const e = Object(n.a)(p);
						s(Object(o.paypalApiError)(e))
					}
				}, O = e => async (t, r, c) => {
					let {
						apiContext: p
					} = c;
					const h = r(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: r,
							isAnonymous: i,
							message: c,
							selectedAward: l
						} = h.gild;
						if (!r || !l) return void t(Object(o.paypalApiError)(s.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const f = l.id,
							w = await Object(d.e)({
								awardId: f,
								context: p(),
								orderId: e,
								thingId: r,
								message: c || "",
								isAnonymous: i,
								correlationId: b
							});
						if (w.error) {
							const e = Object(n.a)(w.error);
							t(Object(o.paypalApiError)(e))
						} else {
							t(g());
							const {
								all_awardings: e,
								awarder_karma_received: s,
								coins: n,
								subreddit_coins: i,
								treatment_tags: d
							} = w.body;
							t(Object(o.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: c
							} = await Promise.resolve().then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(c({
								awardKarmaReceived: s || 0,
								awardId: f,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})),
								coins: n,
								id: r,
								subredditCoins: i,
								treatmentTags: d
							}))
						}
					} catch (f) {
						i.c.captureException(f);
						const e = Object(n.a)(f);
						t(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/components/AnimatedPillBadge/index.m.less": function(e, t, a) {
			e.exports = {
				AnimatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				animatedPillBadge: "_3XgVCYiPM3NlIIMhRgJmRf",
				sizePulse: "_2xnejTzOKwD2N2wduYh5VS",
				sheen: "_3wsB6VQlSpMQ1YYy0RWWyw",
				sheenTraverse: "tJhGfB7_BsM9oPrnBPZJR"
			}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, a) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				c = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(o.a)(s.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [s.fbt._param("Coin icon placeholder", ":coin:"), s.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": r.a.createElement(d.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, s.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/GildModalContent/GildButton/index.m.less": function(e, t, a) {
			e.exports = {
				gildButton: "_3kbcUlwOAO3wSKgXfygt3d",
				premiumButton: "He0lUqqO7VzWjWHITrPp6",
				v2Button: "_1tOmwkc59Hc3usyKNJOlqv",
				loadingIcon: "_2ZU-RJSYEd36dTnxf0u-zi"
			}
		},
		"./src/reddit/components/GildModalContent/GildFooter/index.m.less": function(e, t, a) {
			e.exports = {
				gildFooter: "habPwBVb49a3L6odC1o_2",
				footerContent: "p9n6xR53geDkMMJLRLxsQ",
				coinBalanceSection: "_3R4j1vmZgkT6keOmp5osiV",
				subredditIcon: "_1gm264-SD6RxF8VJfulxIL",
				errorText: "_2K7QjhTDibWfT4O2YOQyLh"
			}
		},
		"./src/reddit/components/GildModalContent/V2AwardSelectorPane/index.m.less": function(e, t, a) {
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
				transferableIcon: "ic1UwlEG9JWGgbnKAUMip",
				lockIcon: "_1nlh5K78tlpqHAEkjLNsl4",
				metaText: "JuCNYAasgSXXhXMn-eYSA",
				banner: "_6nIdxhXwPiAN6XYEK8-57",
				rpanBanner: "_6v9-vBI2HJZFJWEZTdPnf"
			}
		},
		"./src/reddit/components/GildModalContent/V2GildHeader/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/opener/index.ts"),
				c = a("./src/reddit/helpers/isPost.ts");
			var l = function(e, t) {
					return Object(c.a)(t.id) ? e.filter(e => !(e => {
						for (const t of e)
							if (t.startsWith("econ:transferable:econ:render:")) return !0;
						return !1
					})((e.award ? e.award.tags : e.tags) || [])) : e
				},
				m = a("./src/reddit/helpers/correlationIdTracker.ts"),
				u = a("./src/reddit/helpers/localStorage/index.ts"),
				p = a("./src/reddit/helpers/trackers/gild.ts"),
				h = a("./src/reddit/models/Gold/Award.ts"),
				b = a("./src/reddit/actions/gold/communityAwards.ts"),
				g = a("./src/reddit/actions/gold/gild.ts"),
				f = a("./src/reddit/actions/gold/giveAward.ts"),
				w = a("./src/reddit/actions/gold/modals.ts"),
				v = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				O = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				j = a("./src/reddit/actions/subreddit.ts"),
				N = a("./src/reddit/selectors/comments.ts"),
				x = a("./src/reddit/selectors/communityAwards.ts"),
				C = a("./src/reddit/selectors/experiments/econAwardSheetV2.ts"),
				I = a("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				P = a("./src/reddit/selectors/gild.ts"),
				_ = a("./src/reddit/selectors/gold/giveAwards.ts"),
				y = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = a("./src/reddit/selectors/posts.ts"),
				S = a("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				M = a("./src/reddit/selectors/subreddit.ts"),
				T = a("./src/reddit/selectors/user.ts"),
				B = a("./src/reddit/selectors/userPrefs.ts"),
				L = a("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				R = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/higherOrderComponents/makeAsync.tsx")),
				G = a("./src/lib/loadWithRetries/index.ts"),
				V = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			const F = () => Object(G.a)(() => Promise.all([Promise.all([a.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), a.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), a.e("PennyPurchaseModal")]).then(a.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)()])).then(e => e[0].default);
			var D = Object(R.a)({
					getComponent: F,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = a("./src/reddit/components/TrackingHelper/index.tsx"),
				W = a("./node_modules/fbt/lib/FbtPublic.js"),
				q = a("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				U = a.n(q),
				H = a("./src/reddit/helpers/awards/message.ts"),
				X = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				J = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				K = a("./src/reddit/icons/svgs/Eye/index.tsx"),
				Y = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = a("./src/reddit/components/GildModalContent/GildButton/index.m.less"),
				Z = a.n(Q),
				$ = a("./src/reddit/controls/Button/index.tsx"),
				ee = a("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: te
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ae = 10;
			class se extends n.a.PureComponent {
				renderButtonText() {
					const {
						awardSheetV2Enabled: e,
						needPayment: t,
						needPremium: a,
						selectedAward: s,
						thingId: n
					} = this.props, r = s.awardType === h.f.Moderator;
					return a ? te._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !t || r ? e ? te._("Give", null, {
						hk: "30MOda"
					}) : Object(c.a)(n) ? te._("Award post", null, {
						hk: "1Ydq4H"
					}) : te._("Award comment", null, {
						hk: "4CfMGF"
					}) : te._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						awardSheetV2Enabled: e,
						needPayment: t,
						needPremium: a,
						onGetPremium: s,
						onGild: r,
						onNeedPayment: i,
						pending: d,
						selectedAward: c
					} = this.props, l = c.awardType === h.f.Moderator;
					return n.a.createElement($.f, {
						className: Object(o.a)({
							[Z.a.premiumButton]: a,
							[Z.a.gildButton]: !a,
							[Z.a.v2Button]: e
						}),
						"data-redditstyle": !0,
						disabled: d || l && t,
						onClick: a ? s : t ? i : r
					}, d ? n.a.createElement(ee.a, {
						className: Z.a.loadingIcon,
						sizePx: ae
					}) : this.renderButtonText())
				}
			}
			var ne = se,
				re = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				ie = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				oe = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				de = a("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				ce = a("./src/reddit/helpers/awards/getIconForSize.ts");
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			const le = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return n.a.createElement(n.a.Fragment, null, e.map((e, t) => 0 === t ? e : n.a.createElement(n.a.Fragment, {
						key: t + e
					}, n.a.createElement(ie.a, null), e)))
				}
				return null
			};
			class me extends n.a.PureComponent {
				render() {
					const {
						award: e,
						awardSheetV2Enabled: t,
						className: a,
						prefersReducedMotion: s
					} = this.props, r = Object(ce.a)(e, 128, s), i = !!e.pennyPrice;
					return n.a.createElement("div", {
						className: Object(o.a)(a, U.a.awardDescriptionContainer)
					}, n.a.createElement("div", {
						className: U.a.iconContainer
					}, n.a.createElement("img", {
						className: U.a.icon,
						src: r
					})), n.a.createElement("div", {
						className: U.a.awardName
					}, W.fbt._("{awardName} Award", [W.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), t && n.a.createElement("div", {
						className: U.a.benefitsV2
					}, n.a.createElement(le, {
						award: e
					})), n.a.createElement("div", {
						className: t ? U.a.priceV2 : U.a.price
					}, i ? W.fbt._("Purchase for ${dollarPrice}", [W.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : t ? n.a.createElement(n.a.Fragment, null, n.a.createElement(oe.a, {
						className: U.a.coinIconV2
					}), W.fbt._("{coinPrice}", [W.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : Object(re.a)(W.fbt._("Spend :coin:{coinPrice}", [W.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": n.a.createElement(ie.a, null)
					})), !t && n.a.createElement("div", {
						className: U.a.benefits
					}, n.a.createElement(le, {
						award: e
					})), e.endsAt && n.a.createElement(de.a, {
						className: U.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var ue, pe = me;

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(ue || (ue = {}));
			class be extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						messageTypeEventSent: !1
					}, this.handleClickMessageInput = () => this.props.sendEvent(Object(p.clickMessageInputEvent)(this.props.thingId)), this.handleTypeMessageInput = e => {
						this.setState(this.sendTypeMessageEvent), this.props.handleMessageInput(e)
					}, this.sendTypeMessageEvent = (e, t) => {
						if (!e.messageTypeEventSent) return t.sendEvent(Object(p.typeMessageInputEvent)(t.thingId)), {
							messageTypeEventSent: !0
						}
					}, this.handleToggleAnonymous = () => {
						const {
							isAnonymous: e,
							sendEvent: t,
							thingId: a,
							toggleIsAnonymous: s
						} = this.props;
						t(Object(p.triggerAnonymousEvent)(e ? "uncheck" : "check", a)), s()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: a,
							thingId: s,
							toggleIsAnonymous: n
						} = this.props, r = e === ue.PRIVATE;
						(!t && r || t && !r) && (a(Object(p.triggerAnonymousEvent)(r ? "check" : "uncheck", s)), n())
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : n.a.createElement(J.a, {
						className: U.a.giver,
						isSelected: t,
						text: W.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						isLivestream: e,
						selectedAward: t,
						message: a
					} = this.props, s = {
						disabled: !1,
						maxLength: Object(H.c)(t, e),
						placeholder: W.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === s.maxLength ? (s.disabled = !0, s.placeholder = W.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : s.placeholder = W.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || s.maxLength > 0,
						i = r && a.length > s.maxLength;
					return n.a.createElement("div", {
						className: Object(o.a)(U.a.textAreaWrapper, {
							[U.a.messageTooLong]: i
						})
					}, n.a.createElement(X.s, he({
						className: U.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? a : ""
					}, s)), r && n.a.createElement("div", {
						className: U.a.characterCountdown
					}, s.maxLength - a.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? n.a.createElement("div", {
						className: U.a.publicIndicator
					}, n.a.createElement(K.a, {
						className: U.a.eyeIcon
					}), W.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderV2GildButton() {
					return this.props.awardSheetV2Enabled ? n.a.createElement("div", {
						className: U.a.gildButtonWrapper
					}, n.a.createElement(ne, he({}, this.props.gildButtonProps, {
						awardSheetV2Enabled: !0
					}))) : null
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== h.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, a = W.fbt._("r/{subredditName} balance: {coinBalance}", [W.fbt._param("subredditName", e), W.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return n.a.createElement("div", {
						className: U.a.subredditCoinBalance
					}, a)
				}
				render() {
					const {
						awardSheetV2Enabled: e,
						className: t,
						prefersReducedMotion: a,
						selectedAward: s
					} = this.props;
					return n.a.createElement("div", {
						className: Object(o.a)(t, U.a.awardDetailsPane, {
							[U.a.v2Enabled]: e
						})
					}, n.a.createElement("div", {
						className: U.a.awardDescriptionWrapper
					}, n.a.createElement("div", {
						className: U.a.spacerTop
					}), n.a.createElement(pe, {
						award: s,
						awardSheetV2Enabled: e,
						prefersReducedMotion: a
					}), n.a.createElement("div", {
						className: U.a.spacerBottom
					}), s.awardType === h.f.Moderator ? n.a.createElement("span", {
						className: U.a.giver
					}, n.a.createElement(Y.a, {
						className: U.a.modIcon
					}), W.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderV2GildButton())
				}
			}
			var ge = be,
				fe = a("./src/config.ts"),
				we = a("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				ve = a.n(we),
				Ee = a("./src/reddit/components/SubredditIcon/index.tsx"),
				Oe = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				je = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				Ne = a.n(je);

			function xe(e) {
				const {
					className: t,
					text: a
				} = e;
				return n.a.createElement("div", {
					className: Object(o.a)(t, Ne.a.AnimatedPillBadge)
				}, a, n.a.createElement("div", {
					className: Ne.a.sheen
				}))
			}
			class Ce extends n.a.Component {
				constructor() {
					super(...arguments), this.onOptionClick = () => {
						const {
							award: e,
							onSelect: t,
							sendEvent: a,
							thingId: s
						} = this.props;
						return a(Object(p.clickSelectAwardEvent)(e, s)), t(e)
					}
				}
				render() {
					const {
						award: e,
						isSelected: t,
						prefersReducedMotion: a
					} = this.props, s = t ? ve.a.selected : "", r = Object(ce.a)(e, 128, a);
					return n.a.createElement("button", {
						className: Object(o.a)(ve.a.selectableAward, s),
						onClick: this.onOptionClick
					}, n.a.createElement("div", {
						className: ve.a.buttonContent,
						tabIndex: -1
					}, n.a.createElement("div", {
						className: ve.a.iconContainer
					}, n.a.createElement("img", {
						className: ve.a.icon,
						src: r
					}), n.a.createElement("div", {
						className: ve.a.badgeContainer
					}, e.awardSubType !== h.d.Premium && e.isNew && n.a.createElement(xe, {
						className: ve.a.iconNewBadge,
						text: W.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === h.d.Premium && n.a.createElement("div", {
						className: ve.a.iconPremiumBadgeContainer
					}, n.a.createElement(Oe.a, {
						className: ve.a.iconPremiumBadge
					})))), n.a.createElement("div", {
						className: ve.a.title
					}, e.name), n.a.createElement("div", {
						className: ve.a.metaText
					}, e.pennyPrice ? W.fbt._("Purchase for ${cost}", [W.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(re.a)(W.fbt._("Spend :coin:{cost}", [W.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": n.a.createElement(ie.a, null)
					})), e.endsAt && n.a.createElement(de.a, {
						className: ve.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var Ie = Ce;
			const {
				fbt: Pe
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class _e extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => n.a.createElement("div", {
						className: ve.a.giveImageContainer
					}, n.a.createElement("img", {
						className: ve.a.giveImage,
						src: "".concat(fe.a.assetPath, "/img/gold/award-give.png")
					})), this.rendererByAwardSubtype = {
						[h.d.Global]: this.renderGlobalAwards,
						[h.d.Moderator]: this.renderModAwards,
						[h.d.Community]: this.renderCommunityAwards,
						[h.d.Appreciation]: this.renderAppreciationAwards,
						[h.d.Premium]: this.renderPremiumAwards
					}
				}
				renderAppreciationAwards(e, t) {
					const {
						onSelect: a,
						prefersReducedMotion: s,
						selectedAward: r,
						sendEvent: i,
						thingId: o
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ve.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ve.a.awardSectionTitle
					}, Pe._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), n.a.createElement("div", {
						className: ve.a.awardSection
					}, e.map(e => n.a.createElement(Ie, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						onSelect: a,
						prefersReducedMotion: s,
						sendEvent: i,
						thingId: o
					})))) : null
				}
				renderPremiumAwards(e, t) {
					const {
						onSelect: a,
						prefersReducedMotion: s,
						selectedAward: r,
						sendEvent: i,
						thingId: d
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ve.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ve.a.awardSectionTitle
					}, n.a.createElement(Oe.a, {
						className: Object(o.a)(ve.a.premiumIcon, ve.a.awardSectionIcon)
					}), Pe._("Premium Awards", null, {
						hk: "35bhoK"
					})), n.a.createElement("div", {
						className: ve.a.awardSection
					}, e.map(e => n.a.createElement(Ie, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						onSelect: a,
						prefersReducedMotion: s,
						sendEvent: i,
						thingId: d
					})))) : null
				}
				renderGlobalAwards(e, t) {
					const {
						onSelect: a,
						prefersReducedMotion: s,
						selectedAward: r,
						sendEvent: i,
						thingId: o
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ve.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ve.a.awardSectionTitle
					}, Pe._("Medals", null, {
						hk: "1RRXJc"
					})), n.a.createElement("div", {
						className: ve.a.awardSection
					}, e.map(e => n.a.createElement(Ie, {
						award: e,
						isSelected: e.id === r.id,
						key: e.id,
						onSelect: a,
						prefersReducedMotion: s,
						sendEvent: i,
						thingId: o
					})))) : null
				}
				renderCommunityAwards(e, t) {
					const {
						onSelect: a,
						prefersReducedMotion: s,
						selectedAward: r,
						sendEvent: i,
						subreddit: o,
						subredditName: d,
						thingId: c
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ve.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ve.a.awardSectionTitle
					}, n.a.createElement(Ee.b, {
						className: ve.a.awardSectionIcon,
						subredditOrProfile: o
					}), Pe._("r/{subredditName} Awards", [Pe._param("subredditName", d)], {
						hk: "2nKNHH"
					})), n.a.createElement("div", {
						className: ve.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return n.a.createElement(Ie, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							prefersReducedMotion: s,
							sendEvent: i,
							thingId: c
						})
					}))) : null
				}
				renderModAwards(e, t) {
					const {
						onSelect: a,
						prefersReducedMotion: s,
						selectedAward: r,
						sendEvent: i,
						subredditName: d,
						thingId: c
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: ve.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: ve.a.awardSectionTitle
					}, n.a.createElement(Y.a, {
						className: Object(o.a)(ve.a.modIcon, ve.a.awardSectionIcon)
					}), Pe._("r/{subredditName} Moderator Awards", [Pe._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), n.a.createElement("div", {
						className: ve.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return n.a.createElement(Ie, {
							award: e,
							isSelected: t,
							key: e.id,
							onSelect: a,
							prefersReducedMotion: s,
							sendEvent: i,
							thingId: c
						})
					}))) : null
				}
				renderBanner() {
					return this.props.isLivestream && this.props.inViewerFeedTheMeter ? n.a.createElement("div", {
						className: ve.a.banner
					}, "Give your favorite broadcasts ", n.a.createElement("br", null), "more airtime with awards!") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: a
					} = this.props;
					if (t || !e.length) return n.a.createElement("div", {
						className: Object(o.a)(a, ve.a.awardSelectorPane)
					});
					const s = new Set,
						r = {
							[h.d.Global]: [],
							[h.d.Moderator]: [],
							[h.d.Community]: [],
							[h.d.Appreciation]: [],
							[h.d.Premium]: []
						};
					e.forEach(e => {
						s.add(e.awardSubType), r[e.awardSubType] || (r[e.awardSubType] = []), r[e.awardSubType].push(e)
					});
					const i = !!(r[h.d.Community].length || r[h.d.Moderator].length || r[h.d.Appreciation].length || r[h.d.Premium].length) || r[h.d.Global].length > 3;
					return n.a.createElement("div", {
						className: Object(o.a)(a, ve.a.awardSelectorPane)
					}, this.renderBanner(), !i && this.renderSnooImage(), [...s].map(e => this.rendererByAwardSubtype[e] ? this.rendererByAwardSubtype[e].call(this, r[e], i) : null))
				}
			}
			var ye = _e,
				Ae = a("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				ke = a.n(Ae),
				Se = a("./src/reddit/components/CoinBalance/index.tsx");
			const {
				fbt: Me
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class Te extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(p.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: a
					} = this.props, s = (t || 0).toLocaleString();
					return n.a.createElement("div", {
						className: ke.a.coinBalanceSection
					}, n.a.createElement(Ee.b, {
						className: ke.a.subredditIcon,
						subredditOrProfile: e
					}), Me._("r/{subredditName} Coin balance:", [Me._param("subredditName", a)], {
						hk: "2ktWRF"
					}), n.a.createElement("span", null, n.a.createElement(ie.a, null), s))
				}
				render() {
					const {
						className: e,
						errorMessage: t,
						needPayment: a,
						needPremium: s,
						onGetPremium: r,
						onGild: i,
						onNeedPayment: d,
						pending: c,
						selectedAward: l,
						subredditCoins: m,
						thingId: u,
						userCoins: p
					} = this.props, b = l.awardType === h.f.Moderator, g = (b ? m : p) || 0;
					return n.a.createElement("div", {
						className: Object(o.a)(e, ke.a.gildFooter)
					}, n.a.createElement("div", {
						className: ke.a.footerContent
					}, b ? this.renderCommunityBalance() : n.a.createElement(Se.a, {
						className: ke.a.coinBalanceSection,
						coinBalance: g,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), n.a.createElement(ne, {
						awardSheetV2Enabled: !1,
						needPayment: a,
						onGetPremium: r,
						pending: c,
						onNeedPayment: d,
						onGild: i,
						needPremium: s,
						selectedAward: l,
						thingId: u
					})), t && n.a.createElement("div", {
						className: ke.a.errorText
					}, t))
				}
			}
			var Be = Te,
				Le = a("./src/reddit/components/GildModalContent/index.m.less"),
				Re = a.n(Le);
			class Ge extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
					}, this.handleLearnMoreLinkClick = () => this.props.sendEvent(Object(p.clickLearnMoreLinkEvent)(this.props.thingId))
				}
				renderEmojiSubText() {
					const {
						postOrComment: e
					} = this.props;
					return Object(re.a)(W.fbt._("Spend Coins to highlight this {Post or comment} for all to see! :learnMoreLink:", [W.fbt._param("Post or comment", e)], {
						hk: "2srS0W"
					}), {
						":learnMoreLink:": n.a.createElement("a", {
							className: Re.a.learnLink,
							href: "https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",
							onClick: this.handleLearnMoreLinkClick,
							target: "_blank"
						}, W.fbt._("How do Awards work?", null, {
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
						className: Object(o.a)(e, Re.a.gildHeader)
					}, n.a.createElement("div", {
						className: Re.a.headerText
					}, n.a.createElement("div", {
						className: Re.a.mainText
					}, n.a.createElement("span", null, W.fbt._("Give an Award to this {Post or comment}!", [W.fbt._param("Post or comment", t)], {
						hk: "4qJ474"
					}))), n.a.createElement("div", {
						className: Re.a.subText
					}, this.renderEmojiSubText())), n.a.createElement("button", {
						className: Re.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, n.a.createElement(X.b, {
						className: Re.a.closeBtnIcon
					})))
				}
			}
			var Ve = Ge,
				Fe = a("./src/reddit/components/GildModalContent/V2AwardSelectorPane/index.m.less"),
				De = a.n(Fe);
			const ze = n.a.memo((function(e) {
				let t = "",
					a = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = W.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), a = De.a.rpanBanner), t ? n.a.createElement("div", {
					className: Object(o.a)(De.a.banner, a)
				}, t) : null
			}));
			var We = Object(r.b)((e, t) => {
					if (Object(c.a)(t.thingId)) {
						const a = Object(k.N)(e, {
							postId: t.thingId
						});
						if (!a) return {};
						const s = !!a.media && "rpan" === a.media.type,
							n = s && Object(I.e)(e, t.thingId, S.l);
						return {
							post: Object.assign(Object.assign({}, a), {
								isRPANBroadcast: s,
								isFeedTheMeterEnabled: n
							})
						}
					}
					return {}
				})(ze),
				qe = a("./src/reddit/components/RichTextJson/index.tsx"),
				Ue = a("./src/reddit/icons/svgs/Advance/index.m.less"),
				He = a.n(Ue),
				Xe = e => n.a.createElement("svg", {
					className: Object(o.a)(He.a.default, e.className),
					viewBox: "0 0 13 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
				}));
			class Je extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						horizontalOffset: 0,
						rightScrollVisible: !1
					}, this.carouselRef = n.a.createRef(), this.optionsRef = n.a.createRef()
				}
				scrollLeft() {
					this.props.sendEvent(Object(p.clickPreviousFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let a = this.state.horizontalOffset + t;
					if (a > 0) return void this.setState({
						horizontalOffset: 0,
						rightScrollVisible: !0
					});
					for (const n of e.childNodes) {
						const e = n;
						if (e.offsetLeft + a + e.scrollWidth > 0) {
							a = -1 * e.offsetLeft;
							break
						}
					}
					const s = e.scrollWidth > a + t;
					this.setState({
						horizontalOffset: a,
						rightScrollVisible: s
					})
				}
				scrollRight() {
					this.props.sendEvent(Object(p.clickNextFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let a = null;
					for (const n of e.childNodes) {
						const s = n,
							r = s.offsetLeft + e.offsetLeft,
							i = r + s.scrollWidth;
						if (r >= t || r < t && i > t) {
							a = s;
							break
						}
					}
					if (!a) return;
					const s = e.scrollWidth > a.offsetLeft + t;
					this.setState({
						horizontalOffset: -1 * a.offsetLeft,
						rightScrollVisible: s
					})
				}
				scrollSnap(e) {
					const t = this.optionsRef.current,
						a = this.carouselRef.current.clientWidth,
						s = t.childNodes[e],
						n = s.offsetLeft + t.offsetLeft,
						r = n + s.scrollWidth;
					if (n < 40 || r > a - 40) {
						const n = e ? -1 * s.offsetLeft + 40 : 0,
							r = t.scrollWidth + n > a;
						this.setState({
							horizontalOffset: n,
							rightScrollVisible: r
						})
					}
				}
				handleTagClick(e, t) {
					this.scrollSnap(t), this.props.onSelectTag(e), this.props.sendEvent(Object(p.clickFilterEvent)(this.props.tags[t]))
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
						className: De.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && n.a.createElement("div", {
						className: Object(o.a)(De.a.carouselButtonWrapper, De.a.carouselButtonWrapperLeft)
					}, n.a.createElement("button", {
						className: De.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, n.a.createElement("div", {
						className: De.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(Xe, {
						className: De.a.advanceLeft
					})))), n.a.createElement("div", {
						className: De.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, a) => n.a.createElement("button", {
						key: e.tag,
						className: De.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, a)
					}, n.a.createElement("div", {
						className: De.a.focusElement,
						tabIndex: -1
					}, n.a.createElement(qe.a, {
						className: Object(o.a)(De.a.pillOption, {
							[De.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && n.a.createElement("div", {
						className: Object(o.a)(De.a.carouselButtonWrapper, De.a.carouselButtonWrapperRight)
					}, n.a.createElement("button", {
						className: De.a.carouselButton,
						onClick: () => this.scrollRight()
					}, n.a.createElement("div", {
						className: De.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(Xe, null)))))
				}
			}
			var Ke = Je,
				Ye = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				Qe = a("./src/reddit/icons/svgs/New/index.tsx"),
				Ze = e => n.a.createElement("svg", {
					width: "20",
					height: "20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					x1: "100%",
					y1: "50%",
					x2: "0%",
					y2: "50%",
					id: "a"
				}, n.a.createElement("stop", {
					stopColor: "#FF81ED",
					offset: "0%"
				}), n.a.createElement("stop", {
					stopColor: "#B279FF",
					offset: "32.949%"
				}), n.a.createElement("stop", {
					stopColor: "#7785FF",
					offset: "54.901%"
				}), n.a.createElement("stop", {
					stopColor: "#53B6FF",
					offset: "100%"
				}))), n.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, n.a.createElement("path", {
					d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0z",
					fill: "url(#a)"
				}), n.a.createElement("path", {
					d: "M10 1.861a8.139 8.139 0 110 16.278 8.139 8.139 0 010-16.278z",
					opacity: ".105"
				}), n.a.createElement("path", {
					d: "M12.45 2.32c0 3.97 1.844 7.26 4.256 7.852-2.412.59-4.257 3.88-4.257 7.85v.088a3.248 3.248 0 01-.043-.003v-.086c0-3.97-1.845-7.26-4.256-7.851 2.411-.59 4.256-3.88 4.256-7.85v-.084l.044-.004v.089zM7.312 11.815c0 1.434 1.246 2.62 2.87 2.825-1.624.202-2.87 1.388-2.87 2.822l.001.029-.024-.001.002-.028c0-1.434-1.247-2.62-2.872-2.825 1.625-.201 2.872-1.388 2.872-2.822l-.002-.028h.023v.028zM5.65 4.287c0 1.074.82 1.966 1.894 2.14C6.47 6.6 5.651 7.491 5.651 8.565v.03l-.044-.002.001-.028c0-1.074-.819-1.966-1.894-2.14C4.79 6.253 5.608 5.36 5.608 4.287l-.001-.028.044-.002v.03z",
					fill: "#FFF"
				})));
			const $e = n.a.memo((function(e) {
				let t, a;
				const s = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === h.d.Moderator) t = Y.a, a = De.a.moderatorIcon;
				else if (s) t = Ze, a = De.a.transferableIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? Oe.a : Ye.a, a = e.premiumUser ? De.a.premiumIcon : De.a.lockIcon;
				else {
					if (!e.award.isNew) return null;
					t = Qe.a, a = De.a.newIcon
				}
				return n.a.createElement("div", {
					className: Object(o.a)(De.a.iconBadgeContainer, a)
				}, n.a.createElement(t, {
					className: De.a.iconBadge
				}))
			}));
			var et = n.a.memo((function(e) {
				const {
					award: t,
					isSelected: a,
					premiumUser: s,
					onSelect: r,
					prefersReducedMotion: i
				} = e, d = a ? De.a.selected : "", c = Object(ce.a)(t, 128, i);
				return n.a.createElement("button", {
					className: Object(o.a)(De.a.selectableAward, d),
					onClick: () => r(t)
				}, n.a.createElement("div", {
					className: De.a.buttonContent,
					tabIndex: -1
				}, n.a.createElement("div", {
					className: De.a.iconContainer
				}, n.a.createElement("img", {
					className: De.a.icon,
					src: c
				}), n.a.createElement("div", {
					className: De.a.badgeContainer
				}, n.a.createElement($e, {
					award: t,
					premiumUser: s
				}))), n.a.createElement("div", {
					className: De.a.metaText
				}, t.pennyPrice ? W.fbt._("${cost}", [W.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice.toLocaleString())))
			}));
			const tt = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				at = {
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
				st = e => ({
					[e.tag]: []
				});
			var nt = n.a.memo((function(e) {
					const {
						awardTotals: t,
						awardsPending: a,
						onSelect: r,
						prefersReducedMotion: i,
						premiumUser: d,
						selectedAward: c,
						sendEvent: l,
						tags: m,
						thingId: u
					} = e, [h, b] = Object(s.useState)({}), [g, f] = Object(s.useState)(st(at)), [w, v] = Object(s.useState)(at.tag);
					Object(s.useEffect)(() => {
						const e = {},
							a = st(at);
						t.forEach(t => {
							e[t.award.id] = t, a[at.tag].push(t.award.id);
							const s = t.award.tags;
							s && s.forEach(e => {
								void 0 === a[e] && (a[e] = []), a[e].push(t.award.id)
							})
						}), b(e), f(a)
					}, [t]);
					const E = [at, ...m.filter(e => g[e.tag])],
						O = g[w],
						[j, N] = Object(s.useState)(!1),
						[x, C] = Object(s.useState)(1),
						I = Object(s.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: a,
										colGutter: s
									} = tt,
									n = t > (a + s) * (O.length - 1) + a + a + s;
								if (N(n), n) C(O.length);
								else {
									const e = Math.floor((t - a) / (a + s) + 1);
									C(e)
								}
							}
						}, [O]);
					if (a || !t.length) return n.a.createElement("div", {
						className: De.a.awardSelectorPane
					});
					const P = e => {
						r(e);
						const t = E.find(e => e.tag === w) || at,
							a = O.findIndex(t => t === e.id),
							s = Math.floor(a / x),
							n = a - s * x;
						l(Object(p.clickSelectAwardEventV2)(e, u, {
							awardColPosition: n + 1,
							awardRowPosition: s + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return n.a.createElement("div", {
						className: De.a.awardSelectorPane
					}, n.a.createElement(We, {
						thingId: e.thingId
					}), n.a.createElement(Ke, {
						tags: E,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: v
					}), n.a.createElement("div", {
						className: De.a.awardSectionScrollWrapper
					}, n.a.createElement("div", {
						className: De.a.awardSectionContainer
					}, n.a.createElement("div", {
						className: Object(o.a)(De.a.awardSection, {
							[De.a.singleRowGrid]: j
						}),
						ref: I
					}, O.map(e => {
						const t = h[e].award,
							a = e === c.id;
						return n.a.createElement(et, {
							award: t,
							awardCount: h[e].total,
							isSelected: a,
							key: t.id,
							prefersReducedMotion: i,
							premiumUser: d,
							onSelect: P,
							thingId: u
						})
					})))))
				})),
				rt = a("./src/reddit/components/GildModalContent/V2GildHeader/index.m.less"),
				it = a.n(rt),
				ot = a("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: dt
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class ct extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleCloseIconClick = () => {
						this.props.onCancel()
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
					}, n.a.createElement(X.b, {
						className: it.a.closeBtnIcon
					})), n.a.createElement("div", {
						className: it.a.headerText
					}, dt._("Awards", null, {
						hk: "4n2gja"
					})), n.a.createElement("button", {
						className: it.a.coinButton,
						onClick: this.props.onAddCoins
					}, n.a.createElement("div", {
						className: it.a.coinBalanceIndicator,
						tabIndex: -1
					}, n.a.createElement(oe.a, {
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
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ut = Object(i.a)(Object(i.c)({
				awards: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t, n = s;
					if (!s) {
						const t = Object(M.J)(e, {
							thingId: a
						});
						n = t && t.id
					}
					if (!n && Object(c.a)(a)) {
						const t = Object(k.N)(e, {
							postId: a
						});
						n = t && t.belongsTo.id
					}
					return n ? Object(x.l)(e, {
						subredditId: n
					}) : []
				},
				awardings: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t, n = s;
					if (!s) {
						const t = Object(M.J)(e, {
							thingId: a
						});
						n = t && t.id
					}
					if (!n && Object(c.a)(a)) {
						const t = Object(k.N)(e, {
							postId: a
						});
						n = t && t.belongsTo.id
					}
					return n ? Object(x.h)(e, {
						subredditId: n,
						thingId: a
					}) : []
				},
				awardSheetV2Enabled: C.a,
				awardsPending: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t, n = s;
					if (!s) {
						const t = Object(M.J)(e, {
							thingId: a
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(x.k)(e, {
						subredditId: n
					})
				},
				awardingsPending: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t, n = s;
					if (!s) {
						const t = Object(M.J)(e, {
							thingId: a
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(x.g)(e, {
						subredditId: n,
						thingId: a
					})
				},
				correlationId: e => Object(P.b)(e) || Object(m.d)(m.a.GildingFlow, !1),
				currentUser: T.i,
				errorMessage: P.a,
				isAnonymous: P.g,
				iFramed: P.h,
				isGildPending: P.e,
				isEmployee: T.E,
				isRecommendedCoinPackagePending: y.h,
				message: P.c,
				postOrComment: (e, t) => {
					let {
						thingId: a
					} = t;
					return Object(c.a)(a) ? Object(k.N)(e, {
						postId: a
					}) : Object(N.n)(e, {
						commentId: a
					})
				},
				prefersReducedMotion: B.c,
				purchaseCatalogPending: y.g,
				showPurchaseModal: A.r,
				selectedAward: _.a,
				subreddit: M.J,
				subredditCoins: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t;
					const n = Object(M.J)(e, {
							thingId: a
						}),
						r = n ? n.id : s;
					return Object(M.B)(e, {
						subredditId: r
					})
				},
				tags: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t, n = s;
					if (!s) {
						const t = Object(M.J)(e, {
							thingId: a
						});
						n = t && t.id
					}
					if (!n && Object(c.a)(a)) {
						const t = Object(k.N)(e, {
							postId: a
						});
						n = t && t.belongsTo.id
					}
					return n ? Object(x.j)(e, {
						subredditId: n
					}) : []
				},
				tagsPending: (e, t) => {
					let {
						thingId: a,
						subredditId: s
					} = t, n = s;
					if (!s) {
						const t = Object(M.J)(e, {
							thingId: a
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(x.i)(e, {
						subredditId: n
					})
				},
				userCoins: T.d,
				inViewerFeedTheMeter: (e, t) => {
					let {
						thingId: a
					} = t;
					return Object(I.e)(e, a, S.l)
				}
			}), e => {
				const {
					awards: t,
					awardings: a,
					isEmployee: s,
					postOrComment: n,
					selectedAward: r,
					subredditCoins: i,
					userCoins: o
				} = e, {
					awardType: d,
					coinPrice: c,
					pennyPrice: m
				} = r, u = d === h.f.Moderator, p = !!m || ((u ? i : o) || 0) < c && !(s && !u), b = n && n.media && "rpan" === n.media.type, g = n ? l(t, n) : t, f = n ? l(a, n) : a;
				return Object.assign(Object.assign({}, e), {
					awards: g,
					awardings: f,
					needPayment: p,
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
							showPurchaseModal: a
						} = this.props;
						if (27 === e.keyCode && !a) return t()
					}, this.toggleIsAnonymous = () => {
						const {
							isAnonymous: e,
							setIsAnonymous: t
						} = this.props;
						t(!e)
					}, this.handleMessageInput = e => {
						this.props.updateMessage(e.target.value)
					}, this.onClickAddCoins = () => {
						const {
							sendEvent: e,
							thingId: t
						} = this.props;
						e(Object(p.clickAddCoinsButtonEvent)(t)), window.open("/coins", "_blank")
					}, this.onNeedPayment = () => {
						const {
							cost: e,
							correlationId: t,
							needPaymentRequested: a,
							selectedAward: s,
							sendEvent: n,
							thingId: r
						} = this.props;
						n(Object(p.clickNextButtonEvent)(r)), a({
							awardId: s.id,
							correlationId: t,
							cost: e,
							isPennyPurchase: !!s.pennyPrice,
							thingId: r
						}), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: a
						} = this.props;
						t(Object(p.clickGetPremiumEvent)(a, e)), Object(d.d)("/premium", d.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: a,
							selectedAward: s,
							sendEvent: n,
							thingId: r
						} = this.props;
						return n(Object(p.clickConfirmAwardEvent)(r, s)), e(t, !!a)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(u.R)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardingsRequested: t,
						awards: a,
						awardSheetV2Enabled: s,
						awardsRequested: n,
						correlationId: r,
						isAnonymous: i,
						isRpanPost: o,
						needPayment: d,
						postOrComment: c,
						purchaseCatalogPending: l,
						purchaseCatalogRequested: b,
						selectAward: g,
						selectedAward: f,
						sendEvent: w,
						setIsAnonymous: v,
						subreddit: E,
						subredditAboutRequested: O,
						subredditId: j,
						subredditName: N,
						tagsRequested: x,
						thingId: C
					} = this.props;
					r || Object(m.d)(m.a.GildingFlow, !1), w(Object(p.viewGildModalEvent)(f.id, i, C)), v(!o && Object(u.l)());
					const I = E ? E.id : j || (c && c.belongsTo ? c.belongsTo.id : void 0);
					if (I && !s && n(I), I && s && (t(I, C), x(I)), (!s && a.length && !a.find(e => e.id === f.id) || s && e.length && !e.find(e => e.award.id === f.id)) && g(h.m), E || N) {
						O(E ? E.name : N)
					}
					d && (f.pennyPrice ? F() : Object(L.a)(), l || b(r))
				}
				componentDidUpdate(e) {
					let t = !0;
					this.props.awardSheetV2Enabled && e.awardingsPending && !this.props.awardingsPending && (t = !!this.props.awardings.find(e => e.award.id === this.props.selectedAward.id)), this.props.awardSheetV2Enabled || !e.awardsPending || this.props.awardsPending || (t = !!this.props.awards.find(e => e.id === this.props.selectedAward.id)), t || this.props.selectAward(h.m)
				}
				render() {
					const {
						author: e,
						awardings: t,
						awardingsPending: a,
						awards: s,
						awardSheetV2Enabled: r,
						awardsPending: i,
						className: d,
						closeGildModal: l,
						currentUser: m,
						errorMessage: u,
						isAnonymous: p,
						iFramed: b,
						isGildPending: g,
						isRecommendedCoinPackagePending: f,
						isRpanPost: w,
						inViewerFeedTheMeter: v,
						message: E,
						needPayment: O,
						postOrComment: j,
						prefersReducedMotion: N,
						selectedAward: x,
						sendEvent: C,
						showPurchaseModal: I,
						subreddit: P,
						subredditCoins: _,
						subredditName: y,
						tags: A,
						tagsPending: k,
						thingId: S,
						userCoins: M
					} = this.props, {
						showPurchaseModalInThisInstance: T
					} = this.state, B = j ? j.author : e, L = Object(c.a)(S) ? "post" : "comment", R = I && T, G = R && !x.pennyPrice, V = R && !!x.pennyPrice, F = (G || V) && !b;
					if (G && F) return null;
					if (V && F) return n.a.createElement(D, null);
					const z = P ? P.name : y,
						W = !(!m || !m.isGold),
						q = {
							needPayment: O,
							needPremium: !W && x.awardSubType === h.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: g || f,
							selectedAward: x,
							thingId: S
						};
					return n.a.createElement("div", {
						className: Object(o.a)(d, Re.a.gildModalContent)
					}, r ? n.a.createElement(lt, {
						onCancel: l,
						onAddCoins: this.onClickAddCoins,
						userCoins: M
					}) : n.a.createElement(Ve, {
						authorName: B,
						postOrComment: L,
						onCancel: l,
						sendEvent: C,
						thingId: S
					}), n.a.createElement("div", {
						className: Object(o.a)(Re.a.modalMainContent, {
							[Re.a.awardSheetV2]: r
						})
					}, r ? n.a.createElement(nt, {
						awardTotals: t,
						awardsPending: a,
						prefersReducedMotion: N,
						premiumUser: W,
						onSelect: this.props.selectAward,
						selectedAward: x,
						sendEvent: C,
						tags: A,
						tagsPending: k,
						thingId: S
					}) : n.a.createElement(ye, {
						awards: s,
						awardsPending: i,
						onSelect: this.props.selectAward,
						prefersReducedMotion: N,
						selectedAward: x,
						sendEvent: C,
						subreddit: P,
						subredditName: z,
						thingId: S,
						isLivestream: w,
						inViewerFeedTheMeter: v
					}), n.a.createElement(ge, {
						awardSheetV2Enabled: r,
						forcePublic: w,
						isAnonymous: p,
						isLivestream: w,
						message: E,
						selectedAward: x,
						sendEvent: C,
						thingId: S,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: q,
						prefersReducedMotion: N,
						subredditName: z,
						subredditCoins: _
					})), !r && n.a.createElement(Be, mt({
						errorMessage: u || void 0,
						sendEvent: C,
						subreddit: P,
						subredditName: z,
						subredditCoins: _,
						userCoins: M
					}, q)), V && n.a.createElement(D, null))
				}
			}
			t.a = Object(r.b)(ut, (e, t) => {
				let {
					thingId: a
				} = t;
				return {
					awardingsRequested: t => e(Object(b.j)(t, a)),
					awardsRequested: t => e(Object(b.l)(t)),
					closeGildModal: () => e(Object(w.a)()),
					gildRequested: (t, s) => e(Object(g.gildGqlRequested)(a, {
						isOldReddit: t,
						isLivestream: s
					})),
					needPaymentRequested: t => {
						let {
							awardId: a,
							correlationId: s,
							cost: n,
							isPennyPurchase: r,
							thingId: i
						} = t;
						e(r ? Object(E.b)(n, i, s) : Object(v.c)(a, i, s))
					},
					purchaseCatalogRequested: t => e(Object(O.b)(t)),
					selectAward: t => e(Object(f.a)(t)),
					setIsAnonymous: t => {
						e(Object(g.setIsAnonymous)(t)), Object(u.R)(t)
					},
					subredditAboutRequested: t => e(Object(j.t)(t)),
					tagsRequested: t => e(Object(b.k)(t)),
					updateMessage: t => e(Object(g.updateMessage)(t))
				}
			})(Object(z.c)(pt))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/reddit/components/TimeLeft/index.m.less"),
				i = a.n(r),
				o = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/timeAgo/index.ts"),
				c = a("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: a
				} = e, s = Math.floor(a.getTime() / 1e3), r = Object(d.b)(s);
				return n.a.createElement("div", {
					className: Object(o.a)(t)
				}, n.a.createElement(c.a, {
					className: i.a.clockIcon
				}), n.a.createElement("span", {
					className: i.a.timeLeft
				}, r))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, a) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function r(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, s) => (s % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, t, a) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
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
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, a) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				o = a.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				className: Object(r.a)(o.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), n.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), n.a.createElement("path", {
				className: Object(r.a)(o.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), n.a.createElement("path", {
				className: Object(r.a)(o.a.shadow, e.shadowClassName),
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
			}))))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

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
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/New/index.m.less"),
				o = a.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, a) {
			"use strict";
			a.d(t, "l", (function() {
				return x
			})), a.d(t, "m", (function() {
				return P
			})), a.d(t, "n", (function() {
				return _
			})), a.d(t, "h", (function() {
				return k
			})), a.d(t, "c", (function() {
				return B
			})), a.d(t, "g", (function() {
				return L
			})), a.d(t, "k", (function() {
				return R
			})), a.d(t, "j", (function() {
				return G
			})), a.d(t, "e", (function() {
				return V
			})), a.d(t, "a", (function() {
				return z
			})), a.d(t, "i", (function() {
				return W
			})), a.d(t, "b", (function() {
				return q
			})), a.d(t, "d", (function() {
				return U
			})), a.d(t, "f", (function() {
				return H
			}));
			a("./node_modules/core-js/modules/es6.array.sort.js"), a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/objectSelector/index.ts"),
				r = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = a("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = a("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = a("./src/reddit/selectors/posts.ts"),
				c = a("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = a("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = a("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = a.n(m)()(e => Object(n.a)(Object(s.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = a("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.models,
				g = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				w = e => e.publicAccessNetwork.history.cursor,
				v = e => e.publicAccessNetwork.history.visitOrder,
				E = e => e.publicAccessNetwork.hlsStreams,
				O = Object(s.a)(E, e => e.ended),
				j = Object(s.a)(E, e => e.removed),
				N = Object(s.a)(b, O, j, (e, t, a) => {
					const s = t.reduce((e, t) => {
						const a = e[t];
						if (!a) return e;
						const s = a.stream.state,
							n = F(s, o.a.ENDED) ? o.a.ENDED : s,
							r = a.stream.vod_accessible;
						return n === s && !0 === r ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, a), {
								stream: Object.assign(Object.assign({}, a.stream), {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return a.reduce((e, t) => {
						const a = e[t];
						if (!a) return e;
						const s = a.stream.state,
							n = F(s, o.a.ENDED) ? o.a.ENDED : s,
							r = a.stream.vod_accessible;
						return n === s && !1 === r ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, a), {
								stream: Object.assign(Object.assign({}, a.stream), {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, s)
				}),
				x = (e, t) => {
					return N(e)[Object(i.g)(t)]
				},
				C = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a
				}, (e, t) => p(t.listingName)(e, t), N, g, d.h, c.c, (e, t, a, s, n, d) => {
					if (d) {
						const r = [];
						if (e) {
							const t = Object(i.g)(e);
							a[t] && r.push(t)
						}
						const d = r.concat(t),
							c = [...new Set(d)],
							l = new Set([...s, ...n]);
						return c.filter(e => {
							const t = a[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
						})
					}
					const c = new Set([...s, ...n]);
					return Object.keys(a).filter(e => !c.has(e)).map(e => a[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== o.a.KILLED && e.stream.state !== o.a.PURGED).map(e => e.post.id)
				}),
				I = Object(s.a)((e, t) => {
					let {
						count: a
					} = t;
					return a
				}, N, (e, t) => {
					let {
						listingName: a,
						streamIdFromPath: s
					} = t;
					return C(e, {
						listingName: a,
						streamIdFromPath: s
					})
				}, (e, t, a) => {
					const s = a.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				P = Object(s.a)(N, I, (e, t) => {
					const a = t[0];
					if (a) return e[a]
				}),
				_ = Object(s.a)(N, I, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				y = Object(s.a)(v, (e, t) => {
					let {
						related: a,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return I(e, {
						listingName: a || n,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const a = new Set(e),
						s = t.filter(e => !a.has(e));
					if (s.length) return s[0]
				}),
				A = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a
				}, N, (e, t) => {
					let {
						related: a,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return I(e, {
						listingName: a || n,
						streamIdFromPath: s
					})
				}, f, (e, t, a, s) => {
					if (!a.length) return;
					const n = a.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === o.a.IS_LIVE);
					if (r) return r.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(n.a)(Object(s.a)(A, N, (e, t) => e ? t[e] : void 0)),
				S = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a ? Object(i.g)(a) : void 0
				}, A, g, d.h, (e, t) => {
					let {
						related: a,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return I(e, {
						listingName: a || n,
						streamIdFromPath: s
					})
				}, (e, t, a, s, n) => !e || a.includes(e) || s.includes(e) ? t || n[0] : e),
				M = Object(s.a)(w, v, y, (e, t, a) => e < t.length - 1 ? t[e + 1] : a),
				T = Object(s.a)(w, v, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				B = Object(n.a)(Object(s.a)(S, N, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(s.a)(M, N, (e, t) => e ? t[e] : void 0)),
				R = Object(n.a)(Object(s.a)(T, N, (e, t) => e ? t[e] : void 0)),
				G = (Object(n.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, N, (e, t) => Object.keys(e).filter(e => !!t[e]).map(a => Object.assign(Object.assign({}, t[a]), {
					preloadedPreviewUrl: e[a]
				})))), Object(s.a)((e, t) => {
					let {
						streamId: a
					} = t;
					return a
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				V = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: a
					} = t;
					return a ? x(e, a) : void 0
				}, e => !e || e.chat_disabled);

			function F(e, t) {
				const a = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return a[t] >= a[e]
			}
			const D = Object(s.a)(S, f, (e, t) => e && t.timestamps[e] || 0);
			var z;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(z || (z = {}));
			const W = Object(s.a)(S, N, h.b, (e, t, a) => {
					if (a) return z.INTRO;
					const s = e && t[e];
					if (!s) return z.UNAVAILABLE;
					const n = s.stream.state;
					return n === o.a.IS_LIVE || n === o.a.DISCONNECTED ? z.LIVE : n === o.a.ENDED && s.stream.vod_accessible ? z.VOD : z.UNAVAILABLE
				}),
				q = Object(s.a)(B, W, h.b, l.b, l.o, (e, t, a, s, n) => a ? s : e ? t === z.LIVE || t === z.VOD ? e.stream.hls_url : n : void 0),
				U = Object(s.a)(B, W, D, (e, t, a) => e ? t === z.LIVE ? e.broadcast_time : t === z.VOD && a < e.broadcast_time ? a : 0 : 0),
				H = (e, t) => {
					const a = b(e);
					return !!a && a[t] && a[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return o
			})), a.d(t, "c", (function() {
				return d
			})), a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = a("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(s.a)(i, r.n, (e, t) => t && !e.isIntroFinished),
				d = Object(s.a)(i, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=FramedGild~GildModal.4da6855993c6fe03e2f6.js.map