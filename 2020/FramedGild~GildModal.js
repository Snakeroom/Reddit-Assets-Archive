// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.802e29e32cae1976c370.js
// Retrieved at 6/30/2020, 2:40:08 PM by Reddit Dataminer v1.0.0
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
						O = !E && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
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
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && v && (n.version = v)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : g ? (n.mac = e, n.osname = "macOS") : j ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? N = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? N = (N = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? N = (N = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? N = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? N = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? N = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? N = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (N = s(/tizen[\/\s](\d+(\.\d+)*)/i)), N && (n.osversion = N);
					var x = !n.windows && N.split(".")[0];
					return E || d || "ipad" == r || i && (3 == x || x >= 4 && !O) || n.silk ? n.tablet = e : (O || "iphone" == r || "ipod" == r || i || o || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return O
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/formatApiError/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/sentry/index.ts"),
				o = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = s("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				c = s("./src/reddit/endpoints/gold/purchase.ts"),
				l = s("./src/reddit/helpers/correlationIdTracker.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = s("./src/reddit/models/Gold/Award.ts"),
				p = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(r.a)(h.o),
				g = Object(r.a)(h.d),
				f = Object(r.a)(h.p),
				w = (e, t, s) => async e => {
					e(f({
						thingId: t
					})), e(b({
						correlationId: s
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
						if (!e || !l.id) return void r(Object(o.stripeApiError)(a.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							O = l.pennyPrice;
						if (!O) return void r(Object(o.stripeApiError)(a.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const j = {
								gildType: p,
								includeMessage: !!d,
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
							} = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							r(g()), r(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: a,
								awarder_karma_received: n,
								coins: i,
								treatment_tags: d
							} = N.body;
							return void r(t({
								awardKarmaReceived: n || 0,
								awardId: p,
								awardings: a && a.length ? Object(m.a)(a).map(e => ({
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
					} else r(Object(o.stripeApiError)(a.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, E = (e, t, s) => async (a, r, c) => {
					let {
						apiContext: m
					} = c;
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const r = await Object(d.b)({
							context: m(),
							awardId: e,
							pennies: t,
							thingId: s,
							correlationId: u
						});
						if (r.error) {
							const e = Object(n.a)(r.error);
							return void a(Object(o.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = r.body;
							return e
						}
					} catch (p) {
						i.c.captureException(p);
						const e = Object(n.a)(p);
						a(Object(o.paypalApiError)(e))
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
						if (!r || !l) return void t(Object(o.paypalApiError)(a.fbt._("Gilding unknown post or comment", null, {
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
								awarder_karma_received: a,
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
							} = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(c({
								awardKarmaReceived: a || 0,
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
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/gild.ts"),
				h = s("./src/reddit/models/Gold/Award.ts"),
				b = s("./src/reddit/actions/gold/communityAwards.ts"),
				g = s("./src/reddit/actions/gold/gild.ts"),
				f = s("./src/reddit/actions/gold/giveAward.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				v = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				O = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				j = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/reddit/selectors/comments.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				I = s("./src/reddit/selectors/experiments/econAwardSheetV2.ts"),
				C = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				P = s("./src/reddit/selectors/gild.ts"),
				_ = s("./src/reddit/selectors/gold/giveAwards.ts"),
				y = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/selectors/userPrefs.ts"),
				L = s("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				R = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				G = s("./src/lib/loadWithRetries/index.ts"),
				V = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const D = () => Object(G.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCom~c2417cdc"), s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("PennyPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)()])).then(e => e[0].default);
			var F = Object(R.a)({
					getComponent: D,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				W = s("./node_modules/fbt/lib/FbtPublic.js"),
				q = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				U = s.n(q),
				H = s("./src/reddit/helpers/awards/message.ts"),
				X = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				J = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				K = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = s("./src/reddit/components/GildModalContent/GildButton/index.m.less"),
				Z = s.n(Q),
				$ = s("./src/reddit/controls/Button/index.tsx"),
				ee = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = 10;
			class ae extends n.a.PureComponent {
				renderButtonText() {
					const {
						awardSheetV2Enabled: e,
						needPayment: t,
						needPremium: s,
						selectedAward: a,
						thingId: n
					} = this.props, r = a.awardType === h.f.Moderator;
					return s ? te._("Get Premium", null, {
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
						needPremium: s,
						onGetPremium: a,
						onGild: r,
						onNeedPayment: i,
						pending: d,
						selectedAward: c
					} = this.props, l = c.awardType === h.f.Moderator;
					return n.a.createElement($.f, {
						className: Object(o.a)({
							[Z.a.premiumButton]: s,
							[Z.a.gildButton]: !s,
							[Z.a.v2Button]: e
						}),
						"data-redditstyle": !0,
						disabled: d || l && t,
						onClick: s ? a : t ? i : r
					}, d ? n.a.createElement(ee.a, {
						className: Z.a.loadingIcon,
						sizePx: se
					}) : this.renderButtonText())
				}
			}
			var ne = ae,
				re = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				oe = s("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				de = s.n(oe),
				ce = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					className: Object(o.a)(de.a.shadow, e.shadowClassName),
					d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
				}), n.a.createElement("path", {
					d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
					fill: "url(#shine)",
					fillOpacity: ".3"
				}), n.a.createElement("path", {
					className: Object(o.a)(de.a.standardColor, e.standardColorClassName),
					d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
				}), n.a.createElement("path", {
					className: Object(o.a)(de.a.shadow, e.shadowClassName),
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
				le = s("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				me = s("./src/reddit/helpers/awards/getIconForSize.ts");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			const ue = e => {
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
			class pe extends n.a.PureComponent {
				render() {
					const {
						award: e,
						awardSheetV2Enabled: t,
						className: s,
						prefersReducedMotion: a
					} = this.props, r = Object(me.a)(e, 128, a), i = !!e.pennyPrice;
					return n.a.createElement("div", {
						className: Object(o.a)(s, U.a.awardDescriptionContainer)
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
					}, n.a.createElement(ue, {
						award: e
					})), n.a.createElement("div", {
						className: t ? U.a.priceV2 : U.a.price
					}, i ? W.fbt._("Purchase for ${dollarPrice}", [W.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : t ? n.a.createElement(n.a.Fragment, null, n.a.createElement(ce, {
						className: U.a.coinIconV2
					}), W.fbt._("{coinPrice}", [W.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : Object(re.a)(W.fbt._("Spend :coin:{coinPrice}", [W.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "4aXpIB"
					}), {
						":coin:": n.a.createElement(ie.a, null)
					})), !t && n.a.createElement("div", {
						className: U.a.benefits
					}, n.a.createElement(ue, {
						award: e
					})), e.endsAt && n.a.createElement(le.a, {
						className: U.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var he, be = pe;

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.PRIVATE = "private", e.PUBLIC = "public"
			}(he || (he = {}));
			class fe extends n.a.PureComponent {
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
							thingId: s,
							toggleIsAnonymous: a
						} = this.props;
						t(Object(p.triggerAnonymousEvent)(e ? "uncheck" : "check", s)), a()
					}, this.handleRadioChange = e => {
						const {
							isAnonymous: t,
							sendEvent: s,
							thingId: a,
							toggleIsAnonymous: n
						} = this.props, r = e === he.PRIVATE;
						(!t && r || t && !r) && (s(Object(p.triggerAnonymousEvent)(r ? "check" : "uncheck", a)), n())
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
						message: s
					} = this.props, a = {
						disabled: !1,
						maxLength: Object(H.c)(t, e),
						placeholder: W.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === a.maxLength ? (a.disabled = !0, a.placeholder = W.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : a.placeholder = W.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || a.maxLength > 0,
						i = r && s.length > a.maxLength;
					return n.a.createElement("div", {
						className: Object(o.a)(U.a.textAreaWrapper, {
							[U.a.messageTooLong]: i
						})
					}, n.a.createElement(X.s, ge({
						className: U.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? s : ""
					}, a)), r && n.a.createElement("div", {
						className: U.a.characterCountdown
					}, a.maxLength - s.length))
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
					}, n.a.createElement(ne, ge({}, this.props.gildButtonProps, {
						awardSheetV2Enabled: !0
					}))) : null
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== h.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, s = W.fbt._("r/{subredditName} balance: {coinBalance}", [W.fbt._param("subredditName", e), W.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return n.a.createElement("div", {
						className: U.a.subredditCoinBalance
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
						className: Object(o.a)(t, U.a.awardDetailsPane, {
							[U.a.v2Enabled]: e
						})
					}, n.a.createElement("div", {
						className: U.a.awardDescriptionWrapper
					}, n.a.createElement("div", {
						className: U.a.spacerTop
					}), n.a.createElement(be, {
						award: a,
						awardSheetV2Enabled: e,
						prefersReducedMotion: s
					}), n.a.createElement("div", {
						className: U.a.spacerBottom
					}), a.awardType === h.f.Moderator ? n.a.createElement("span", {
						className: U.a.giver
					}, n.a.createElement(Y.a, {
						className: U.a.modIcon
					}), W.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderV2GildButton())
				}
			}
			var we = fe,
				ve = s("./src/config.ts"),
				Ee = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				Oe = s.n(Ee),
				je = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ne = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				xe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./src/reddit/components/AnimatedPillBadge/index.m.less")),
				Ie = s.n(xe),
				Ce = e => {
					const {
						className: t,
						text: s
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(t, Ie.a.AnimatedPillBadge)
					}, s, n.a.createElement("div", {
						className: Ie.a.sheen
					}))
				};
			class Pe extends n.a.Component {
				constructor() {
					super(...arguments), this.onOptionClick = () => {
						const {
							award: e,
							onSelect: t,
							sendEvent: s,
							thingId: a
						} = this.props;
						return s(Object(p.clickSelectAwardEvent)(e, a)), t(e)
					}
				}
				render() {
					const {
						award: e,
						isSelected: t,
						prefersReducedMotion: s
					} = this.props, a = t ? Oe.a.selected : "", r = Object(me.a)(e, 128, s);
					return n.a.createElement("button", {
						className: Object(o.a)(Oe.a.selectableAward, a),
						onClick: this.onOptionClick
					}, n.a.createElement("div", {
						className: Oe.a.buttonContent,
						tabIndex: -1
					}, n.a.createElement("div", {
						className: Oe.a.iconContainer
					}, n.a.createElement("img", {
						className: Oe.a.icon,
						src: r
					}), n.a.createElement("div", {
						className: Oe.a.badgeContainer
					}, e.awardSubType !== h.d.Premium && e.isNew && n.a.createElement(Ce, {
						className: Oe.a.iconNewBadge,
						text: W.fbt._("New", null, {
							hk: "1f7Av0"
						})
					}), e.awardSubType === h.d.Premium && n.a.createElement("div", {
						className: Oe.a.iconPremiumBadgeContainer
					}, n.a.createElement(Ne.a, {
						className: Oe.a.iconPremiumBadge
					})))), n.a.createElement("div", {
						className: Oe.a.title
					}, e.name), n.a.createElement("div", {
						className: Oe.a.metaText
					}, e.pennyPrice ? W.fbt._("Purchase for ${cost}", [W.fbt._param("cost", (e.pennyPrice / 100).toLocaleString())], {
						hk: "4ypYLM"
					}) : Object(re.a)(W.fbt._("Spend :coin:{cost}", [W.fbt._param("cost", e.coinPrice.toLocaleString())], {
						hk: "2FdXrq"
					}).toString(), {
						":coin:": n.a.createElement(ie.a, null)
					})), e.endsAt && n.a.createElement(le.a, {
						className: Oe.a.expiresText,
						expirationDate: new Date(e.endsAt)
					})))
				}
			}
			var _e = Pe;
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ae extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.renderSnooImage = () => n.a.createElement("div", {
						className: Oe.a.giveImageContainer
					}, n.a.createElement("img", {
						className: Oe.a.giveImage,
						src: "".concat(ve.a.assetPath, "/img/gold/award-give.png")
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
						onSelect: s,
						prefersReducedMotion: a,
						selectedAward: r,
						sendEvent: i,
						thingId: o
					} = this.props;
					return e.length ? n.a.createElement("div", {
						className: Oe.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Oe.a.awardSectionTitle
					}, ye._("Appreciation Awards", null, {
						hk: "2HH3hC"
					})), n.a.createElement("div", {
						className: Oe.a.awardSection
					}, e.map(e => n.a.createElement(_e, {
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
						className: Oe.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Oe.a.awardSectionTitle
					}, n.a.createElement(Ne.a, {
						className: Object(o.a)(Oe.a.premiumIcon, Oe.a.awardSectionIcon)
					}), ye._("Premium Awards", null, {
						hk: "35bhoK"
					})), n.a.createElement("div", {
						className: Oe.a.awardSection
					}, e.map(e => n.a.createElement(_e, {
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
						className: Oe.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Oe.a.awardSectionTitle
					}, ye._("Medals", null, {
						hk: "1RRXJc"
					})), n.a.createElement("div", {
						className: Oe.a.awardSection
					}, e.map(e => n.a.createElement(_e, {
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
						className: Oe.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Oe.a.awardSectionTitle
					}, n.a.createElement(je.b, {
						className: Oe.a.awardSectionIcon,
						subredditOrProfile: o
					}), ye._("r/{subredditName} Awards", [ye._param("subredditName", d)], {
						hk: "2nKNHH"
					})), n.a.createElement("div", {
						className: Oe.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return n.a.createElement(_e, {
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
						className: Oe.a.awardSectionContainer
					}, t && n.a.createElement("div", {
						className: Oe.a.awardSectionTitle
					}, n.a.createElement(Y.a, {
						className: Object(o.a)(Oe.a.modIcon, Oe.a.awardSectionIcon)
					}), ye._("r/{subredditName} Moderator Awards", [ye._param("subredditName", d)], {
						hk: "4vVQ2A"
					})), n.a.createElement("div", {
						className: Oe.a.awardSection
					}, e.map(e => {
						const t = e.id === r.id;
						return n.a.createElement(_e, {
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
						className: Oe.a.banner
					}, "Give your favorite broadcasts ", n.a.createElement("br", null), "more airtime with awards!") : null
				}
				render() {
					const {
						awards: e,
						awardsPending: t,
						className: s
					} = this.props;
					if (t || !e.length) return n.a.createElement("div", {
						className: Object(o.a)(s, Oe.a.awardSelectorPane)
					});
					const a = new Set,
						r = {
							[h.d.Global]: [],
							[h.d.Moderator]: [],
							[h.d.Community]: [],
							[h.d.Appreciation]: [],
							[h.d.Premium]: []
						};
					e.forEach(e => {
						a.add(e.awardSubType), r[e.awardSubType] || (r[e.awardSubType] = []), r[e.awardSubType].push(e)
					});
					const i = !!(r[h.d.Community].length || r[h.d.Moderator].length || r[h.d.Appreciation].length || r[h.d.Premium].length) || r[h.d.Global].length > 3;
					return n.a.createElement("div", {
						className: Object(o.a)(s, Oe.a.awardSelectorPane)
					}, this.renderBanner(), !i && this.renderSnooImage(), [...a].map(e => this.rendererByAwardSubtype[e] ? this.rendererByAwardSubtype[e].call(this, r[e], i) : null))
				}
			}
			var ke = Ae,
				Se = s("./src/reddit/components/GildModalContent/GildFooter/index.m.less"),
				Me = s.n(Se),
				Te = s("./src/reddit/components/CoinBalance/index.tsx");
			const {
				fbt: Be
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Le extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleQuestionMarkClick = () => this.props.sendEvent(Object(p.clickQuestionMarkEvent)(this.props.thingId))
				}
				renderCommunityBalance() {
					const {
						subreddit: e,
						subredditCoins: t,
						subredditName: s
					} = this.props, a = (t || 0).toLocaleString();
					return n.a.createElement("div", {
						className: Me.a.coinBalanceSection
					}, n.a.createElement(je.b, {
						className: Me.a.subredditIcon,
						subredditOrProfile: e
					}), Be._("r/{subredditName} Coin balance:", [Be._param("subredditName", s)], {
						hk: "2ktWRF"
					}), n.a.createElement("span", null, n.a.createElement(ie.a, null), a))
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
						userCoins: p
					} = this.props, b = l.awardType === h.f.Moderator, g = (b ? m : p) || 0;
					return n.a.createElement("div", {
						className: Object(o.a)(e, Me.a.gildFooter)
					}, n.a.createElement("div", {
						className: Me.a.footerContent
					}, b ? this.renderCommunityBalance() : n.a.createElement(Te.a, {
						className: Me.a.coinBalanceSection,
						coinBalance: g,
						onWhatAreCoinsLinkClick: this.handleQuestionMarkClick
					}), n.a.createElement(ne, {
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
						className: Me.a.errorText
					}, t))
				}
			}
			var Re = Le,
				Ge = s("./src/reddit/components/GildModalContent/index.m.less"),
				Ve = s.n(Ge);
			class De extends n.a.PureComponent {
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
							className: Ve.a.learnLink,
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
						className: Object(o.a)(e, Ve.a.gildHeader)
					}, n.a.createElement("div", {
						className: Ve.a.headerText
					}, n.a.createElement("div", {
						className: Ve.a.mainText
					}, n.a.createElement("span", null, W.fbt._("Give an Award to this {Post or comment}!", [W.fbt._param("Post or comment", t)], {
						hk: "4qJ474"
					}))), n.a.createElement("div", {
						className: Ve.a.subText
					}, this.renderEmojiSubText())), n.a.createElement("button", {
						className: Ve.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, n.a.createElement(X.b, {
						className: Ve.a.closeBtnIcon
					})))
				}
			}
			var Fe = De,
				ze = s("./src/reddit/components/GildModalContent/V2AwardSelectorPane/index.m.less"),
				We = s.n(ze);
			const qe = n.a.memo((function(e) {
				let t = "",
					s = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = W.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), s = We.a.rpanBanner), t ? n.a.createElement("div", {
					className: Object(o.a)(We.a.banner, s)
				}, t) : null
			}));
			var Ue = Object(r.b)((e, t) => {
					if (Object(c.a)(t.thingId)) {
						const s = Object(k.O)(e, {
							postId: t.thingId
						});
						if (!s) return {};
						const a = !!s.media && "rpan" === s.media.type,
							n = a && Object(C.e)(e, t.thingId, S.k);
						return {
							post: Object.assign({}, s, {
								isRPANBroadcast: a,
								isFeedTheMeterEnabled: n
							})
						}
					}
					return {}
				})(qe),
				He = s("./src/reddit/components/RichTextJson/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/Advance/index.m.less"),
				Je = s.n(Xe),
				Ke = e => n.a.createElement("svg", {
					className: Object(o.a)(Je.a.default, e.className),
					viewBox: "0 0 13 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
				}));
			class Ye extends n.a.Component {
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
					this.props.sendEvent(Object(p.clickNextFiltersEvent)());
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
						className: We.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && n.a.createElement("div", {
						className: Object(o.a)(We.a.carouselButtonWrapper, We.a.carouselButtonWrapperLeft)
					}, n.a.createElement("button", {
						className: We.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, n.a.createElement("div", {
						className: We.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(Ke, {
						className: We.a.advanceLeft
					})))), n.a.createElement("div", {
						className: We.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, s) => n.a.createElement("button", {
						key: e.tag,
						className: We.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, s)
					}, n.a.createElement("div", {
						className: We.a.focusElement,
						tabIndex: -1
					}, n.a.createElement(He.a, {
						className: Object(o.a)(We.a.pillOption, {
							[We.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && n.a.createElement("div", {
						className: Object(o.a)(We.a.carouselButtonWrapper, We.a.carouselButtonWrapperRight)
					}, n.a.createElement("button", {
						className: We.a.carouselButton,
						onClick: () => this.scrollRight()
					}, n.a.createElement("div", {
						className: We.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(Ke, null)))))
				}
			}
			var Qe = Ye,
				Ze = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				$e = s("./src/reddit/icons/svgs/New/index.tsx");
			const et = n.a.memo((function(e) {
				let t, s;
				if (e.award.awardSubType === h.d.Moderator) t = Y.a, s = We.a.moderatorIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? Ne.a : Ze.a, s = e.premiumUser ? We.a.premiumIcon : We.a.lockIcon;
				else {
					if (!e.award.isNew) return null;
					t = $e.a, s = We.a.newIcon
				}
				return n.a.createElement("div", {
					className: Object(o.a)(We.a.iconBadgeContainer, s)
				}, n.a.createElement(t, {
					className: We.a.iconBadge
				}))
			}));
			var tt = n.a.memo((function(e) {
				const {
					award: t,
					isSelected: s,
					premiumUser: a,
					onSelect: r,
					prefersReducedMotion: i
				} = e, d = s ? We.a.selected : "", c = Object(me.a)(t, 128, i);
				return n.a.createElement("button", {
					className: Object(o.a)(We.a.selectableAward, d),
					onClick: () => r(t)
				}, n.a.createElement("div", {
					className: We.a.buttonContent,
					tabIndex: -1
				}, n.a.createElement("div", {
					className: We.a.iconContainer
				}, n.a.createElement("img", {
					className: We.a.icon,
					src: c
				}), n.a.createElement("div", {
					className: We.a.badgeContainer
				}, n.a.createElement(et, {
					award: t,
					premiumUser: a
				}))), n.a.createElement("div", {
					className: We.a.metaText
				}, t.pennyPrice ? W.fbt._("${cost}", [W.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice.toLocaleString())))
			}));
			const st = {
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
				nt = e => ({
					[e.tag]: []
				});
			var rt = n.a.memo((function(e) {
					const {
						awardTotals: t,
						awardsPending: s,
						onSelect: r,
						prefersReducedMotion: i,
						premiumUser: d,
						selectedAward: c,
						sendEvent: l,
						tags: m,
						thingId: u
					} = e, [h, b] = Object(a.useState)({}), [g, f] = Object(a.useState)(nt(at)), [w, v] = Object(a.useState)(at.tag);
					Object(a.useEffect)(() => {
						const e = {},
							s = nt(at);
						t.forEach(t => {
							e[t.award.id] = t, s[at.tag].push(t.award.id);
							const a = t.award.tags;
							a && a.forEach(e => {
								void 0 === s[e] && (s[e] = []), s[e].push(t.award.id)
							})
						}), b(e), f(s)
					}, [t]);
					const E = [at, ...m.filter(e => g[e.tag])],
						O = g[w],
						[j, N] = Object(a.useState)(!1),
						[x, I] = Object(a.useState)(1),
						C = Object(a.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: s,
										colGutter: a
									} = st,
									n = t > (s + a) * (O.length - 1) + s + s + a;
								if (N(n), n) I(O.length);
								else {
									const e = Math.floor((t - s) / (s + a) + 1);
									I(e)
								}
							}
						}, [O]);
					if (s || !t.length) return n.a.createElement("div", {
						className: We.a.awardSelectorPane
					});
					const P = e => {
						r(e);
						const t = E.find(e => e.tag === w) || at,
							s = O.findIndex(t => t === e.id),
							a = Math.floor(s / x),
							n = s - a * x;
						l(Object(p.clickSelectAwardEventV2)(e, u, {
							awardColPosition: n + 1,
							awardRowPosition: a + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return n.a.createElement("div", {
						className: We.a.awardSelectorPane
					}, n.a.createElement(Ue, {
						thingId: e.thingId
					}), n.a.createElement(Qe, {
						tags: E,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: v
					}), n.a.createElement("div", {
						className: We.a.awardSectionScrollWrapper
					}, n.a.createElement("div", {
						className: We.a.awardSectionContainer
					}, n.a.createElement("div", {
						className: Object(o.a)(We.a.awardSection, {
							[We.a.singleRowGrid]: j
						}),
						ref: C
					}, O.map(e => {
						const t = h[e].award,
							s = e === c.id;
						return n.a.createElement(tt, {
							award: t,
							awardCount: h[e].total,
							isSelected: s,
							key: t.id,
							prefersReducedMotion: i,
							premiumUser: d,
							onSelect: P,
							thingId: u
						})
					})))))
				})),
				it = s("./src/reddit/components/GildModalContent/V2GildHeader/index.m.less"),
				ot = s.n(it),
				dt = s("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: ct
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class lt extends n.a.PureComponent {
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
						className: ot.a.gildHeader
					}, n.a.createElement("button", {
						className: ot.a.closeBtn,
						onClick: this.handleCloseIconClick
					}, n.a.createElement(X.b, {
						className: ot.a.closeBtnIcon
					})), n.a.createElement("div", {
						className: ot.a.headerText
					}, ct._("Awards", null, {
						hk: "4n2gja"
					})), n.a.createElement("button", {
						className: ot.a.coinButton,
						onClick: this.props.onAddCoins
					}, n.a.createElement("div", {
						className: ot.a.coinBalanceIndicator,
						tabIndex: -1
					}, n.a.createElement(ce, {
						className: ot.a.coinIcon
					}), n.a.createElement("div", {
						className: ot.a.coinBalance
					}, (e || 0).toLocaleString())), n.a.createElement("div", {
						className: ot.a.addCoins,
						tabIndex: -1
					}, n.a.createElement(dt.a, {
						className: ot.a.plusIcon
					}))))
				}
			}
			var mt = lt;

			function ut() {
				return (ut = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const pt = Object(i.a)(Object(i.c)({
				awards: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(M.J)(e, {
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
					return n ? Object(x.k)(e, {
						subredditId: n
					}) : []
				},
				awardings: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(M.J)(e, {
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
					return n ? Object(x.g)(e, {
						subredditId: n,
						thingId: s
					}) : []
				},
				awardSheetV2Enabled: I.a,
				awardsPending: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(M.J)(e, {
							thingId: s
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(x.j)(e, {
						subredditId: n
					})
				},
				awardingsPending: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(M.J)(e, {
							thingId: s
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(x.f)(e, {
						subredditId: n,
						thingId: s
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
						thingId: s
					} = t;
					return Object(c.a)(s) ? Object(k.O)(e, {
						postId: s
					}) : Object(N.n)(e, {
						commentId: s
					})
				},
				prefersReducedMotion: B.c,
				purchaseCatalogPending: y.g,
				showPurchaseModal: A.r,
				selectedAward: _.a,
				subreddit: M.J,
				subredditCoins: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t;
					const n = Object(M.J)(e, {
							thingId: s
						}),
						r = n ? n.id : a;
					return Object(M.B)(e, {
						subredditId: r
					})
				},
				tags: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(M.J)(e, {
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
					return n ? Object(x.i)(e, {
						subredditId: n
					}) : []
				},
				tagsPending: (e, t) => {
					let {
						thingId: s,
						subredditId: a
					} = t, n = a;
					if (!a) {
						const t = Object(M.J)(e, {
							thingId: s
						});
						if (!t) return !1;
						n = t.id
					}
					return Object(x.h)(e, {
						subredditId: n
					})
				},
				userCoins: T.d,
				inViewerFeedTheMeter: (e, t) => {
					let {
						thingId: s
					} = t;
					return Object(C.e)(e, s, S.k)
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
				} = r, u = d === h.f.Moderator, p = !!m || ((u ? i : o) || 0) < c && !(a && !u), b = n && n.media && "rpan" === n.media.type, g = n ? l(t, n) : t, f = n ? l(s, n) : s;
				return Object.assign({}, e, {
					awards: g,
					awardings: f,
					needPayment: p,
					cost: m || c,
					isRpanPost: !!b
				})
			});
			class ht extends n.a.Component {
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
							needPaymentRequested: s,
							selectedAward: a,
							sendEvent: n,
							thingId: r
						} = this.props;
						n(Object(p.clickNextButtonEvent)(r)), s({
							awardId: a.id,
							correlationId: t,
							cost: e,
							isPennyPurchase: !!a.pennyPrice,
							thingId: r
						}), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: s
						} = this.props;
						t(Object(p.clickGetPremiumEvent)(s, e)), Object(d.d)("/premium", d.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: s,
							selectedAward: a,
							sendEvent: n,
							thingId: r
						} = this.props;
						return n(Object(p.clickConfirmAwardEvent)(r, a)), e(t, !!s)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(u.T)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardingsRequested: t,
						awards: s,
						awardSheetV2Enabled: a,
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
						thingId: I
					} = this.props;
					r || Object(m.d)(m.a.GildingFlow, !1), w(Object(p.viewGildModalEvent)(f.id, i, I)), v(!o && Object(u.l)());
					const C = E ? E.id : j || (c && c.belongsTo ? c.belongsTo.id : void 0);
					if (C && !a && n(C), C && a && (t(C, I), x(C)), (!a && s.length && !s.find(e => e.id === f.id) || a && e.length && !e.find(e => e.award.id === f.id)) && g(h.m), E || N) {
						O(E ? E.name : N)
					}
					d && (f.pennyPrice ? D() : Object(L.a)(), l || b(r))
				}
				componentDidUpdate(e) {
					let t = !0;
					this.props.awardSheetV2Enabled && e.awardingsPending && !this.props.awardingsPending && (t = !!this.props.awardings.find(e => e.award.id === this.props.selectedAward.id)), this.props.awardSheetV2Enabled || !e.awardsPending || this.props.awardsPending || (t = !!this.props.awards.find(e => e.id === this.props.selectedAward.id)), t || this.props.selectAward(h.m)
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
						sendEvent: I,
						showPurchaseModal: C,
						subreddit: P,
						subredditCoins: _,
						subredditName: y,
						tags: A,
						tagsPending: k,
						thingId: S,
						userCoins: M
					} = this.props, {
						showPurchaseModalInThisInstance: T
					} = this.state, B = j ? j.author : e, L = Object(c.a)(S) ? "post" : "comment", R = C && T, G = R && !x.pennyPrice, V = R && !!x.pennyPrice, D = (G || V) && !b;
					if (G && D) return null;
					if (V && D) return n.a.createElement(F, null);
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
						className: Object(o.a)(d, Ve.a.gildModalContent)
					}, r ? n.a.createElement(mt, {
						onCancel: l,
						onAddCoins: this.onClickAddCoins,
						userCoins: M
					}) : n.a.createElement(Fe, {
						authorName: B,
						postOrComment: L,
						onCancel: l,
						sendEvent: I,
						thingId: S
					}), n.a.createElement("div", {
						className: Object(o.a)(Ve.a.modalMainContent, {
							[Ve.a.awardSheetV2]: r
						})
					}, r ? n.a.createElement(rt, {
						awardTotals: t,
						awardsPending: s,
						prefersReducedMotion: N,
						premiumUser: W,
						onSelect: this.props.selectAward,
						selectedAward: x,
						sendEvent: I,
						tags: A,
						tagsPending: k,
						thingId: S
					}) : n.a.createElement(ke, {
						awards: a,
						awardsPending: i,
						onSelect: this.props.selectAward,
						prefersReducedMotion: N,
						selectedAward: x,
						sendEvent: I,
						subreddit: P,
						subredditName: z,
						thingId: S,
						isLivestream: w,
						inViewerFeedTheMeter: v
					}), n.a.createElement(we, {
						awardSheetV2Enabled: r,
						forcePublic: w,
						isAnonymous: p,
						isLivestream: w,
						message: E,
						selectedAward: x,
						sendEvent: I,
						thingId: S,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: q,
						prefersReducedMotion: N,
						subredditName: z,
						subredditCoins: _
					})), !r && n.a.createElement(Re, ut({
						errorMessage: u || void 0,
						sendEvent: I,
						subreddit: P,
						subredditName: z,
						subredditCoins: _,
						userCoins: M
					}, q)), V && n.a.createElement(F, null))
				}
			}
			t.a = Object(r.b)(pt, (e, t) => {
				let {
					thingId: s
				} = t;
				return {
					awardingsRequested: t => e(Object(b.h)(t, s)),
					awardsRequested: t => e(Object(b.j)(t)),
					closeGildModal: () => e(Object(w.a)()),
					gildRequested: (t, a) => e(Object(g.gildGqlRequested)(s, {
						isOldReddit: t,
						isLivestream: a
					})),
					needPaymentRequested: t => {
						let {
							awardId: s,
							correlationId: a,
							cost: n,
							isPennyPurchase: r,
							thingId: i
						} = t;
						e(r ? Object(E.b)(n, i, a) : Object(v.c)(s, i, a))
					},
					purchaseCatalogRequested: t => e(Object(O.a)(t)),
					selectAward: t => e(Object(f.a)(t)),
					setIsAnonymous: t => {
						e(Object(g.setIsAnonymous)(t)), Object(u.T)(t)
					},
					subredditAboutRequested: t => e(Object(j.t)(t)),
					tagsRequested: t => e(Object(b.i)(t)),
					updateMessage: t => e(Object(g.updateMessage)(t))
				}
			})(Object(z.c)(ht))
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
				return N
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return P
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "j", (function() {
				return L
			})), s.d(t, "i", (function() {
				return R
			})), s.d(t, "e", (function() {
				return G
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
				O = Object(a.a)(v, e => e.removed),
				j = Object(a.a)(e => e.publicAccessNetwork.models, E, O, (e, t, s) => {
					const a = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const a = s.stream.state,
							n = V(a, o.b.ENDED) ? o.b.ENDED : a,
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
							n = V(a, o.b.ENDED) ? o.b.ENDED : a,
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
				N = (e, t) => {
					return j(e)[Object(i.g)(t)]
				},
				x = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), j, b, d.i, c.c, (e, t, s, a, n, d) => {
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
				I = Object(a.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, j, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: a
					} = t;
					return x(e, {
						listingName: s,
						streamIdFromPath: a
					})
				}, (e, t, s) => {
					const a = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? a.slice(0, e) : a
				}),
				C = Object(a.a)(j, I, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				P = Object(a.a)(j, I, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === o.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				_ = Object(a.a)(w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return I(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, (e, t) => {
					const s = new Set(e),
						a = t.filter(e => !s.has(e));
					if (a.length) return a[0]
				}),
				y = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, j, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return I(e, {
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
				A = Object(n.a)(Object(a.a)(y, j, (e, t) => e ? t[e] : void 0)),
				k = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.g)(s) : void 0
				}, y, b, d.i, (e, t) => {
					let {
						related: s,
						streamIdFromPath: a,
						subreddit: n
					} = t;
					return I(e, {
						listingName: s || n,
						streamIdFromPath: a
					})
				}, (e, t, s, a, n) => !e || s.includes(e) || a.includes(e) ? t || n[0] : e),
				S = Object(a.a)(f, w, _, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(a.a)(f, w, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(n.a)(Object(a.a)(k, j, (e, t) => e ? t[e] : void 0)),
				B = Object(n.a)(Object(a.a)(S, j, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(a.a)(M, j, (e, t) => e ? t[e] : void 0)),
				R = (Object(n.a)(Object(a.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, j, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(a.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				G = Object(a.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? N(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function V(e, t) {
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
			const D = Object(a.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const z = Object(a.a)(k, j, h.b, (e, t, s) => {
					if (s) return F.INTRO;
					const a = e && t[e];
					if (!a) return F.UNAVAILABLE;
					const n = a.stream.state;
					return n === o.b.IS_LIVE || n === o.b.DISCONNECTED ? F.LIVE : n === o.b.ENDED && a.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				W = Object(a.a)(T, z, h.b, l.b, l.o, (e, t, s, a, n) => s ? a : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : n : void 0),
				q = Object(a.a)(T, z, D, (e, t, s) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && s < e.broadcast_time ? s : 0 : 0)
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
//# sourceMappingURL=FramedGild~GildModal.802e29e32cae1976c370.js.map