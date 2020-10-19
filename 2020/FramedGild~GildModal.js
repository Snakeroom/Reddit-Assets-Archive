// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.0ace5811d8cb841bba2d.js
// Retrieved at 10/19/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var a, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						g = !r && !l && /macintosh/i.test(t),
						f = !o && !m && !u && !p && /linux/i.test(t),
						w = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !O && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? a = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? a = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? a = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? a = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? a = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? a = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? a = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? a = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? a = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (a = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (a.msedge = e, a.version = w) : (a.msie = e, a.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? a = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? a = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? a = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? a = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : m ? a = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? a = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (a = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (a.firefoxos = e, a.osname = "Firefox OS")) : l ? a = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? a = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? a = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? a = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (a = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (a.touchpad = e)) : /bada/i.test(t) ? a = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? a = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? a = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? a = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? a = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? a = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (a = {
						name: "Safari",
						safari: e
					}, v && (a.version = v)) : r ? (a = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, v && (a.version = v)) : a = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !a.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (a.name = a.name || "Blink", a.blink = e) : (a.name = a.name || "Webkit", a.webkit = e), !a.version && v && (a.version = v)) : !a.opera && /gecko\//i.test(t) && (a.name = a.name || "Gecko", a.gecko = e, a.version = a.version || s(/gecko\/(\d+(\.\d+)?)/i)), a.windowsphone || !o && !a.silk ? !a.windowsphone && r ? (a[r] = e, a.ios = e, a.osname = "iOS") : g ? (a.mac = e, a.osname = "macOS") : j ? (a.xbox = e, a.osname = "Xbox") : b ? (a.windows = e, a.osname = "Windows") : f && (a.linux = e, a.osname = "Linux") : (a.android = e, a.osname = "Android");
					var x = "";
					a.windows ? x = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : a.windowsphone ? x = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : a.mac ? x = (x = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? x = (x = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? x = s(/android[ \/-](\d+(\.\d+)*)/i) : a.webos ? x = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : a.blackberry ? x = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : a.bada ? x = s(/bada\/(\d+(\.\d+)*)/i) : a.tizen && (x = s(/tizen[\/\s](\d+(\.\d+)*)/i)), x && (a.osversion = x);
					var I = !a.windows && x.split(".")[0];
					return O || d || "ipad" == r || o && (3 == I || I >= 4 && !E) || a.silk ? a.tablet = e : (E || "iphone" == r || "ipod" == r || o || i || a.blackberry || a.webos || a.bada) && (a.mobile = e), a.msedge || a.msie && a.version >= 10 || a.yandexbrowser && a.version >= 15 || a.vivaldi && a.version >= 1 || a.chrome && a.version >= 20 || a.samsungBrowser && a.version >= 4 || a.firefox && a.version >= 20 || a.safari && a.version >= 6 || a.opera && a.version >= 10 || a.ios && a.osversion && a.osversion.split(".")[0] >= 6 || a.blackberry && a.version >= 10.1 || a.chromium && a.version >= 20 ? a.a = e : a.msie && a.version < 10 || a.chrome && a.version < 20 || a.firefox && a.version < 20 || a.safari && a.version < 6 || a.opera && a.version < 10 || a.ios && a.osversion && a.osversion.split(".")[0] < 6 || a.chromium && a.version < 20 ? a.c = e : a.x = e, a
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function a(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function r(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = a(e, (function(e) {
							var s = t - n(e);
							return a((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, n, a) {
					var o = s;
					"string" == typeof n && (a = n, n = void 0), void 0 === n && (n = !1), a && (o = t(a));
					var i = "" + o.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && o[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([i, e[d]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = r, s.check = function(e, t, s) {
					return !o(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, a) {
				return a(e, (function(e, a, r) {
					s = n ? (n = !1, e) : t(s, e, a, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				a = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = a(s)) == s ? s : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), n(a(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				a = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? n : o,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, a)
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
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/actions/gold/constants.ts");
			const i = Object(n.a)(o.hb),
				d = Object(n.a)(o.u),
				c = e => async t => {
					await t(d({
						id: e
					})), t(Object(a.h)(r.a.GOLD_GILD_ANIMATION_OVERLAY))
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
				return O
			})), s.d(t, "c", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/formatApiError/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = s("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				c = s("./src/reddit/endpoints/gold/purchase.ts"),
				l = s("./src/reddit/helpers/correlationIdTracker.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = s("./src/reddit/models/Gold/Award.ts"),
				p = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(r.a)(h.p),
				g = Object(r.a)(h.d),
				f = Object(r.a)(h.q),
				w = (e, t, s) => async e => {
					e(f({
						thingId: t
					})), e(b({
						correlationId: s
					}))
				}, v = (e, t) => async (r, o, d) => {
					let {
						apiContext: h
					} = d;
					const b = o(),
						f = Object(l.c)(l.a.GoldPayment);
					let w, v;
					r(Object(i.stripeTokenPending)());
					const O = Object(p.w)(b);
					if (O || (w = await r(Object(i.validateAndCreateStripeToken)(e)), v = Object(p.t)(b), w)) try {
						const {
							gildModalThingId: e,
							isAnonymous: o,
							message: d,
							selectedAward: l
						} = b.gild;
						if (!e || !l.id) return void r(Object(i.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							E = l.pennyPrice;
						if (!E) return void r(Object(i.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const j = {
								gildType: p,
								isAnonymous: o,
								message: d
							},
							x = await Object(c.f)({
								context: h(),
								correlationId: f,
								gildParams: j,
								isOldReddit: t,
								pennies: E,
								rememberCard: v,
								savedCardId: O || void 0,
								thingId: e,
								token: w
							});
						if (x.error) {
							const e = Object(a.a)(x.error, x.status);
							return void r(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							r(g()), r(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: a,
								coins: o,
								treatment_tags: d
							} = x.body;
							return void r(t({
								awardKarmaReceived: a || 0,
								awardId: p,
								awardings: n && n.length ? Object(m.a)(n).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: d
							}))
						}
					} catch (E) {
						const e = Object(a.a)(E);
						r(Object(i.stripeApiError)(e))
					} else r(Object(i.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, O = (e, t, s) => async (n, r, c) => {
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
							const e = Object(a.a)(r.error);
							return void n(Object(i.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = r.body;
							return e
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(a.a)(p);
						n(Object(i.paypalApiError)(e))
					}
				}, E = e => async (t, r, c) => {
					let {
						apiContext: p
					} = c;
					const h = r(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: r,
							isAnonymous: o,
							message: c,
							selectedAward: l
						} = h.gild;
						if (!r || !l) return void t(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const f = l.id,
							w = await Object(d.e)({
								awardId: f,
								context: p(),
								orderId: e,
								thingId: r,
								message: c || "",
								isAnonymous: o,
								correlationId: b
							});
						if (w.error) {
							const e = Object(a.a)(w.error);
							t(Object(i.paypalApiError)(e))
						} else {
							t(g());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: a,
								subreddit_coins: o,
								treatment_tags: d
							} = w.body;
							t(Object(i.paymentCompleted)({
								coins: a,
								confirmed: !0
							}));
							const {
								gildSuccessful: c
							} = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(c({
								awardKarmaReceived: n || 0,
								awardId: f,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(u.h)(e),
									total: e.count
								})),
								coins: a,
								id: r,
								subredditCoins: o,
								treatmentTags: d
							}))
						}
					} catch (f) {
						o.c.captureException(f);
						const e = Object(a.a)(f);
						t(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.m.less": function(e, t, s) {
			e.exports = {
				coinButton: "_2D-JnYPuWU9np1-ycRlU4B",
				addCoins: "_3Q8mNjZ6kXlVXyle3AlgPg",
				coinBalanceIndicator: "_8L3GhmAppBj71I9SA2yAv",
				coinIcon: "_2PQG5IO-LoMyTdh5pHkaVI",
				coinBalance: "IJNEU4MmXrYhw0xUvB2jI",
				plusIcon: "_1yFCLGefJC66-exSRGPxWx",
				closeBtn: "_2eQ0RDYslIQ2AWVCe694Hd",
				closeBtnIcon: "Cqi8E08JLc7am7yAu1zuf",
				gildHeader: "_1xbzKMH-i0xyQAbOKcuuDr",
				headerText: "_1B8sDmFKuUDciAht-FY_me",
				subredditIcon: "qIGsGGDKQfZn_EBSumGVq"
			}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				o = s.n(r),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					onAddCoins: t,
					onCancel: s,
					title: n,
					userCoins: r
				} = e;
				return a.a.createElement("div", {
					className: o.a.gildHeader
				}, a.a.createElement("button", {
					className: o.a.closeBtn,
					onClick: s
				}, a.a.createElement(i.b, {
					className: o.a.closeBtnIcon
				})), a.a.createElement("div", {
					className: o.a.headerText
				}, n), a.a.createElement("button", {
					className: o.a.coinButton,
					onClick: t
				}, a.a.createElement("div", {
					className: o.a.coinBalanceIndicator,
					tabIndex: -1
				}, a.a.createElement(d.a, {
					className: o.a.coinIcon
				}), a.a.createElement("div", {
					className: o.a.coinBalance
				}, (r || 0).toLocaleString())), a.a.createElement("div", {
					className: o.a.addCoins,
					tabIndex: -1
				}, a.a.createElement(c.a, {
					className: o.a.plusIcon
				}))))
			}
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, s) {
			e.exports = {
				awardDetailsPane: "_3kvsmRpyGMATPOVdwZT7NB",
				awardDescriptionContainer: "_3q3pzHD6q6zVtVG4TNE7im",
				iconContainer: "_3b5NcSKHOalQQEfFSNiCQX",
				icon: "_2PvjA-cEeom6ZfDceMtNHp",
				awardName: "sadK4Fq7Cy1wo7YWoEAWl",
				price: "_1WoiOSy_qo9S285gNnGevf",
				coinIcon: "o97S7Xos6PjcatPPsV-P2",
				giver: "_2GgPzgt-vZL36vYFyKbbDN",
				modIcon: "_2IlAShkKouN-v5V35IWs47",
				textAreaWrapper: "uJbtvFCFnUiXwhJ2M7rOh",
				textArea: "_2kwFqYX6mikunS0um4uLJ8",
				messageTooLong: "MS5s5QAaxgdOHp-DI58GJ",
				characterCountdown: "_2f01wl-r9Wp_fMxTHtthb",
				benefits: "_-1asi_lAFSc_bekrVlSw6",
				expiresText: "_30TeowkJPm0r4HctIm_NMA",
				publicIndicator: "_2iCTmZfj38gd9FcYQjeZ1",
				subredditCoinBalance: "_2YqHkV_stdqFg8q5D7VYYU",
				eyeIcon: "_3n416iaPD0uJ-VKssuS9AK",
				awardDescriptionWrapper: "_2uO3abqAHUw7fJ5hyl1GzZ",
				spacerTop: "_3EHFq1M-9PkDDm4EJ5TruF",
				spacerBottom: "eCsFJJwyIQ_SsKBiLPNUk",
				gildButtonWrapper: "_2elVnq7-N_K9GG0B2yPeah",
				gildButton: "_3gIWLyKuTjGe6MzbV1c7JT",
				premiumButton: "e7wlp6rD5OkT-AFE1tiam",
				loadingIcon: "_1aqV3pTUux3b9E40y1ocLc"
			}
		},
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, s) {
			e.exports = {
				awardSelectorPane: "_2WXA0nl6cBwDItweBzw_ti",
				filterCarousel: "_2MOqN0HQqZJrTZOWLm-bzV",
				carouselButtonWrapper: "_3FXB59DHtw_BvLmglyXx2H",
				carouselButtonWrapperLeft: "K3Z8FXq7HIpiQXORE-eae",
				carouselButtonWrapperRight: "_2BNzUl8YQmyoE2BFnjQo5I",
				carouselButton: "_1HhtUkpDhY-kj_lEjqXXUQ",
				carouselButtonIcon: "_25ZC-eqEZUNXEWuJ02hNgL",
				advanceLeft: "_1ZMkffU38djy81-vPtnm-r",
				pillOptionsContainer: "_1qfStcLn4QhEwd2HYTyQNP",
				pillOptionWrapper: "MhZNeWrHRqwfZCIANFEKw",
				focusElement: "_1lyAYlSCbLNlqTf94fNItk",
				pillOption: "_28D6bZJ_JqhfiEutH0OPzA",
				selectedPillOption: "_3MCq_1ka7g94GjidAMfvk3",
				awardSectionScrollWrapper: "_2726PRoNLHdmAJsc-GiVrj",
				awardSectionContainer: "_3NYoLrOG4zXqg1zXIMJkoW",
				awardSection: "_1oscYfN5Pn1j0E5xXJ1MSK",
				singleRowGrid: "_2AYsatNqFzap2NtceES_qp",
				selectableAward: "_10errIUo7wzwfnjkiqXfXP",
				selected: "_2lQtvMp2JZ_WdVme_P3L2Z",
				buttonContent: "_3kHQ1I2tn6294gyzXBCjA",
				iconContainer: "_28Lwrc4mxY4O_sSndFYb5J",
				icon: "_3SgOtgb_CcNWbsKiej-_GG",
				badgeContainer: "_3rOiiCMO2cjJ30zIm2EfQM",
				iconBadgeContainer: "ASkoaxqpNJ3-4QZj1wwrV",
				iconBadge: "kVDZbCkYxulRfYA-ULahK",
				newIcon: "_2uiN7dmDiVWjQeUHnhZ8WG",
				moderatorIcon: "_3KpYoSxd3g7d1milGR03et",
				premiumIcon: "_2dPX5MkVgsrETdoMuwFJxS",
				transferableIcon: "_1h5I8fmj3xAZEFBLpjaTCK",
				lockIcon: "_1fc2LNH1oENBHFSEPNhlCR",
				metaText: "_1fAgvSQNrmCwASgfLrvYpP",
				banner: "_2DXf1id0rEhidKxC88jyko",
				rpanBanner: "_293Y-FsWYMzfmsaCuMWeug"
			}
		},
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, s) {
			e.exports = {
				gildModalContent: "_13s1q9tBn7qddM-UPVtpnC",
				modalMainContent: "_1-n44O8_Kquo1Wl43y39VQ"
			}
		},
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/helpers/isPost.ts");
			var m = (e, t) => {
					return Object(l.a)(t.id) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				h = s("./src/reddit/helpers/trackers/gild.ts"),
				b = s("./src/reddit/models/Gold/Award.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/actions/gold/communityAwards.ts"),
				v = s("./src/reddit/actions/gold/econPurchase.ts"),
				O = s("./src/reddit/actions/gold/gild.ts"),
				E = s("./src/reddit/actions/gold/giveAward.ts"),
				j = s("./src/reddit/actions/gold/modals.ts"),
				x = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				N = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				C = s("./src/reddit/actions/subreddit.ts"),
				y = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/communityAwards.ts"),
				_ = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				k = s("./src/reddit/selectors/gild.ts"),
				S = s("./src/reddit/selectors/gold/awardIcon.ts"),
				M = s("./src/reddit/selectors/gold/econPurchase.ts"),
				T = s("./src/reddit/selectors/gold/giveAwards.ts"),
				L = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				G = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				W = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				z = s("./src/lib/loadWithRetries/index.ts"),
				U = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const q = () => Object(z.a)(() => Promise.all([Promise.all([s.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("PennyPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(U.d)()])).then(e => e[0].default);
			var H = Object(W.a)({
					getComponent: q,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				J = s.n(X),
				Q = s("./src/reddit/helpers/awards/message.ts"),
				Z = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Y = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				$ = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				ee = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				te = s("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				se = s("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				ne = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/icons/fonts/Coin/index.tsx"));
			const ae = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return a.a.createElement(a.a.Fragment, null, e.map((e, t) => 0 === t ? e : a.a.createElement(a.a.Fragment, {
						key: t + e
					}, a.a.createElement(ne.a, null), e)))
				}
				return null
			};
			class re extends a.a.PureComponent {
				render() {
					const {
						award: e,
						awardIcon: t,
						className: s
					} = this.props, n = !!e.pennyPrice;
					return a.a.createElement("div", {
						className: Object(d.a)(s, J.a.awardDescriptionContainer)
					}, a.a.createElement("div", {
						className: J.a.iconContainer
					}, a.a.createElement("img", {
						className: J.a.icon,
						src: t
					})), a.a.createElement("div", {
						className: J.a.awardName
					}, i.fbt._("{awardName} Award", [i.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), a.a.createElement("div", {
						className: J.a.benefits
					}, a.a.createElement(ae, {
						award: e
					})), a.a.createElement("div", {
						className: J.a.price
					}, n ? i.fbt._("Purchase for ${dollarPrice}", [i.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement(te.a, {
						className: J.a.coinIcon
					}), i.fbt._("{coinPrice}", [i.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					}))), e.endsAt && a.a.createElement(se.a, {
						className: J.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var oe = re,
				ie = s("./src/reddit/controls/Button/index.tsx"),
				de = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), le = 10;
			class me extends a.a.PureComponent {
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: s
					} = this.props, n = s.awardType === b.f.Moderator;
					return t ? ce._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || n ? ce._("Give", null, {
						hk: "30MOda"
					}) : ce._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						needPayment: e,
						needPremium: t,
						onGetPremium: s,
						onGild: n,
						onNeedPayment: r,
						pending: o,
						selectedAward: i
					} = this.props, c = i.awardType === b.f.Moderator;
					return a.a.createElement(ie.i, {
						className: Object(d.a)(J.a.gildButton, {
							[J.a.premiumButton]: t
						}),
						"data-redditstyle": !0,
						disabled: o || c && e,
						onClick: t ? s : e ? r : n
					}, o ? a.a.createElement(de.a, {
						className: J.a.loadingIcon,
						sizePx: le
					}) : this.renderButtonText())
				}
			}
			var ue = me;

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class he extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						messageTypeEventSent: !1
					}, this.handleClickMessageInput = () => this.props.sendEvent(Object(h.clickMessageInputEvent)(this.props.thingId)), this.handleTypeMessageInput = e => {
						this.setState(this.sendTypeMessageEvent), this.props.handleMessageInput(e)
					}, this.sendTypeMessageEvent = (e, t) => {
						if (!e.messageTypeEventSent) return t.sendEvent(Object(h.typeMessageInputEvent)(t.thingId)), {
							messageTypeEventSent: !0
						}
					}, this.handleToggleAnonymous = () => {
						const {
							isAnonymous: e,
							sendEvent: t,
							thingId: s,
							toggleIsAnonymous: n
						} = this.props;
						t(Object(h.triggerAnonymousEvent)(e ? "uncheck" : "check", s)), n()
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : a.a.createElement(Y.a, {
						className: J.a.giver,
						isSelected: t,
						text: i.fbt._("Make my gift anonymous", null, {
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
					} = this.props, n = {
						disabled: !1,
						maxLength: Object(Q.c)(t, e),
						placeholder: i.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = i.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = i.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const r = !e || n.maxLength > 0,
						o = r && s.length > n.maxLength;
					return a.a.createElement("div", {
						className: Object(d.a)(J.a.textAreaWrapper, {
							[J.a.messageTooLong]: o
						})
					}, a.a.createElement(Z.s, pe({
						className: J.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? s : ""
					}, n)), r && a.a.createElement("div", {
						className: J.a.characterCountdown
					}, n.maxLength - s.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? a.a.createElement("div", {
						className: J.a.publicIndicator
					}, a.a.createElement($.a, {
						className: J.a.eyeIcon
					}), i.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderGildButton() {
					return a.a.createElement("div", {
						className: J.a.gildButtonWrapper
					}, a.a.createElement(ue, this.props.gildButtonProps))
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== b.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, s = i.fbt._("r/{subredditName} balance: {coinBalance}", [i.fbt._param("subredditName", e), i.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return a.a.createElement("div", {
						className: J.a.subredditCoinBalance
					}, s)
				}
				render() {
					const {
						className: e,
						selectedAward: t,
						selectedAwardIcon: s
					} = this.props;
					return a.a.createElement("div", {
						className: Object(d.a)(e, J.a.awardDetailsPane)
					}, a.a.createElement("div", {
						className: J.a.awardDescriptionWrapper
					}, a.a.createElement("div", {
						className: J.a.spacerTop
					}), a.a.createElement(oe, {
						award: t,
						awardIcon: s
					}), a.a.createElement("div", {
						className: J.a.spacerBottom
					}), t.awardType === b.f.Moderator ? a.a.createElement("span", {
						className: J.a.giver
					}, a.a.createElement(ee.a, {
						className: J.a.modIcon
					}), i.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var be = he,
				ge = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				fe = s.n(ge);
			const we = a.a.memo((function(e) {
				let t = "",
					s = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = i.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), s = fe.a.rpanBanner), t ? a.a.createElement("div", {
					className: Object(d.a)(fe.a.banner, s)
				}, t) : null
			}));
			var ve = Object(r.b)((e, t) => {
					if (Object(l.a)(t.thingId)) {
						const s = Object(G.N)(e, {
							postId: t.thingId
						});
						if (!s) return {};
						const n = !!s.media && "rpan" === s.media.type,
							a = n && Object(_.f)(e, t.thingId, D.l);
						return {
							post: Object.assign(Object.assign({}, s), {
								isRPANBroadcast: n,
								isFeedTheMeterEnabled: a
							})
						}
					}
					return {}
				})(we),
				Oe = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ee = s("./src/reddit/icons/svgs/Advance/index.tsx");
			class je extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						horizontalOffset: 0,
						rightScrollVisible: !1
					}, this.carouselRef = a.a.createRef(), this.optionsRef = a.a.createRef()
				}
				scrollLeft() {
					this.props.sendEvent(Object(h.clickPreviousFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let s = this.state.horizontalOffset + t;
					if (s > 0) return void this.setState({
						horizontalOffset: 0,
						rightScrollVisible: !0
					});
					for (const a of e.childNodes) {
						const e = a;
						if (e.offsetLeft + s + e.scrollWidth > 0) {
							s = -1 * e.offsetLeft;
							break
						}
					}
					const n = e.scrollWidth > s + t;
					this.setState({
						horizontalOffset: s,
						rightScrollVisible: n
					})
				}
				scrollRight() {
					this.props.sendEvent(Object(h.clickNextFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let s = null;
					for (const a of e.childNodes) {
						const n = a,
							r = n.offsetLeft + e.offsetLeft,
							o = r + n.scrollWidth;
						if (r >= t || r < t && o > t) {
							s = n;
							break
						}
					}
					if (!s) return;
					const n = e.scrollWidth > s.offsetLeft + t;
					this.setState({
						horizontalOffset: -1 * s.offsetLeft,
						rightScrollVisible: n
					})
				}
				scrollSnap(e) {
					const t = this.optionsRef.current,
						s = this.carouselRef.current.clientWidth,
						n = t.childNodes[e],
						a = n.offsetLeft + t.offsetLeft,
						r = a + n.scrollWidth;
					if (a < 40 || r > s - 40) {
						const a = e ? -1 * n.offsetLeft + 40 : 0,
							r = t.scrollWidth + a > s;
						this.setState({
							horizontalOffset: a,
							rightScrollVisible: r
						})
					}
				}
				handleTagClick(e, t) {
					this.scrollSnap(t), this.props.onSelectTag(e), this.props.sendEvent(Object(h.clickFilterEvent)(this.props.tags[t]))
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
					return a.a.createElement("div", {
						className: fe.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && a.a.createElement("div", {
						className: Object(d.a)(fe.a.carouselButtonWrapper, fe.a.carouselButtonWrapperLeft)
					}, a.a.createElement("button", {
						className: fe.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, a.a.createElement("div", {
						className: fe.a.carouselButtonIcon,
						tabIndex: -1
					}, a.a.createElement(Ee.a, {
						className: fe.a.advanceLeft
					})))), a.a.createElement("div", {
						className: fe.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, s) => a.a.createElement("button", {
						key: e.tag,
						className: fe.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, s)
					}, a.a.createElement("div", {
						className: fe.a.focusElement,
						tabIndex: -1
					}, a.a.createElement(Oe.a, {
						className: Object(d.a)(fe.a.pillOption, {
							[fe.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && a.a.createElement("div", {
						className: Object(d.a)(fe.a.carouselButtonWrapper, fe.a.carouselButtonWrapperRight)
					}, a.a.createElement("button", {
						className: fe.a.carouselButton,
						onClick: () => this.scrollRight()
					}, a.a.createElement("div", {
						className: fe.a.carouselButtonIcon,
						tabIndex: -1
					}, a.a.createElement(Ee.a, null)))))
				}
			}
			var xe = je,
				Ie = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				Ne = s("./src/reddit/icons/svgs/New/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Premium/index.tsx");
			var ye = e => a.a.createElement("svg", {
				width: "20",
				height: "20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				x1: "100%",
				y1: "50%",
				x2: "0%",
				y2: "50%",
				id: "a"
			}, a.a.createElement("stop", {
				stopColor: "#FF81ED",
				offset: "0%"
			}), a.a.createElement("stop", {
				stopColor: "#B279FF",
				offset: "32.949%"
			}), a.a.createElement("stop", {
				stopColor: "#7785FF",
				offset: "54.901%"
			}), a.a.createElement("stop", {
				stopColor: "#53B6FF",
				offset: "100%"
			}))), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0z",
				fill: "url(#a)"
			}), a.a.createElement("path", {
				d: "M10 1.861a8.139 8.139 0 110 16.278 8.139 8.139 0 010-16.278z",
				opacity: ".105"
			}), a.a.createElement("path", {
				d: "M12.45 2.32c0 3.97 1.844 7.26 4.256 7.852-2.412.59-4.257 3.88-4.257 7.85v.088a3.248 3.248 0 01-.043-.003v-.086c0-3.97-1.845-7.26-4.256-7.851 2.411-.59 4.256-3.88 4.256-7.85v-.084l.044-.004v.089zM7.312 11.815c0 1.434 1.246 2.62 2.87 2.825-1.624.202-2.87 1.388-2.87 2.822l.001.029-.024-.001.002-.028c0-1.434-1.247-2.62-2.872-2.825 1.625-.201 2.872-1.388 2.872-2.822l-.002-.028h.023v.028zM5.65 4.287c0 1.074.82 1.966 1.894 2.14C6.47 6.6 5.651 7.491 5.651 8.565v.03l-.044-.002.001-.028c0-1.074-.819-1.966-1.894-2.14C4.79 6.253 5.608 5.36 5.608 4.287l-.001-.028.044-.002v.03z",
				fill: "#FFF"
			})));
			const Pe = a.a.memo(e => {
				let t, s;
				const n = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === b.d.Moderator) t = ee.a, s = fe.a.moderatorIcon;
				else if (e.award.awardSubType === b.d.Premium) t = e.premiumUser ? Ce.a : Ie.a, s = e.premiumUser ? fe.a.premiumIcon : fe.a.lockIcon;
				else if (n) t = ye, s = fe.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = Ne.a, s = fe.a.newIcon
				}
				return a.a.createElement("div", {
					className: Object(d.a)(fe.a.iconBadgeContainer, s)
				}, a.a.createElement(t, {
					className: fe.a.iconBadge
				}))
			});
			var Ae = a.a.memo(e => {
				const {
					award: t,
					awardIcon: s,
					isSelected: n,
					premiumUser: r,
					onSelect: o
				} = e;
				return a.a.createElement("button", {
					className: Object(d.a)(fe.a.selectableAward, {
						[fe.a.selected]: n
					}),
					onClick: () => o(t)
				}, a.a.createElement("div", {
					className: fe.a.buttonContent,
					tabIndex: -1
				}, a.a.createElement("div", {
					className: fe.a.iconContainer
				}, a.a.createElement("img", {
					className: fe.a.icon,
					src: s
				}), a.a.createElement("div", {
					className: fe.a.badgeContainer
				}, a.a.createElement(Pe, {
					award: t,
					premiumUser: r
				}))), a.a.createElement("div", {
					className: fe.a.metaText
				}, t.pennyPrice ? i.fbt._("${cost}", [i.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice.toLocaleString())))
			});
			const _e = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				ke = {
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
				Se = e => ({
					[e.tag]: []
				});
			var Me = a.a.memo(e => {
					const {
						awardIcons: t,
						awardTotals: s,
						awardsPending: r,
						onSelect: o,
						premiumUser: i,
						selectedAward: c,
						sendEvent: l,
						tags: m,
						thingId: u
					} = e, [p, b] = Object(n.useState)({}), [g, f] = Object(n.useState)(Se(ke)), [w, v] = Object(n.useState)(ke.tag);
					Object(n.useEffect)(() => {
						const e = {},
							t = Se(ke);
						s.forEach(s => {
							e[s.award.id] = s, t[ke.tag].push(s.award.id);
							const n = s.award.tags;
							n && n.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(s.award.id)
							})
						}), b(e), f(t)
					}, [s]);
					const O = [ke, ...m.filter(e => g[e.tag])],
						E = g[w],
						[j, x] = Object(n.useState)(!1),
						[I, N] = Object(n.useState)(1),
						C = Object(n.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: s,
										colGutter: n
									} = _e,
									a = t > (s + n) * (E.length - 1) + s + s + n;
								if (x(a), a) N(E.length);
								else {
									const e = Math.floor((t - s) / (s + n) + 1);
									N(e)
								}
							}
						}, [E]);
					if (r || !s.length) return a.a.createElement("div", {
						className: fe.a.awardSelectorPane
					});
					const y = e => {
						o(e);
						const t = O.find(e => e.tag === w) || ke,
							s = E.findIndex(t => t === e.id),
							n = Math.floor(s / I),
							a = s - n * I;
						l(Object(h.clickSelectAwardEvent)(e, u, {
							awardColPosition: a + 1,
							awardRowPosition: n + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return a.a.createElement("div", {
						className: fe.a.awardSelectorPane
					}, a.a.createElement(ve, {
						thingId: e.thingId
					}), a.a.createElement(xe, {
						tags: O,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: v
					}), a.a.createElement("div", {
						className: fe.a.awardSectionScrollWrapper
					}, a.a.createElement("div", {
						className: fe.a.awardSectionContainer
					}, a.a.createElement("div", {
						className: Object(d.a)(fe.a.awardSection, {
							[fe.a.singleRowGrid]: j
						}),
						ref: C
					}, E.map(e => {
						const s = p[e].award,
							n = e === c.id,
							r = t[e];
						return a.a.createElement(Ae, {
							award: s,
							awardIcon: r,
							awardCount: p[e].total,
							isSelected: n,
							key: s.id,
							premiumUser: i,
							onSelect: y,
							thingId: u
						})
					})))))
				}),
				Te = s("./src/reddit/components/Econ/CoinsModalHeader/index.tsx");
			const {
				fbt: Le
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Be = e => {
				let {
					onCancel: t,
					onAddCoins: s,
					userCoins: n
				} = e;
				return a.a.createElement(Te.a, {
					onCancel: t,
					onAddCoins: s,
					title: Le._("Awards", null, {
						hk: "3w1C6X"
					}),
					userCoins: n
				})
			};
			const Ge = (e, t) => e.length > b.l.length && !e.find(e => e.award.id === t.id);
			var De = s("./src/reddit/components/GildModalContent/index.m.less"),
				Fe = s.n(De);
			const Re = (e, t) => {
					let {
						thingId: s,
						subredditId: n
					} = t, a = n;
					if (!n) {
						const t = Object(F.K)(e, {
							thingId: s
						});
						a = t && t.id
					}
					if (!a && Object(l.a)(s)) {
						const t = Object(G.N)(e, {
							postId: s
						});
						a = t && t.belongsTo.id
					}
					return a
				},
				Ve = Object(o.a)(Object(o.c)({
					awardings: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t;
						const a = Re(e, {
							thingId: s,
							subredditId: n
						});
						return a ? Object(A.h)(e, {
							subredditId: a,
							thingId: s
						}) : []
					},
					awardIcons: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t;
						const a = Re(e, {
								thingId: s,
								subredditId: n
							}),
							r = (a ? Object(A.h)(e, {
								subredditId: a,
								thingId: s
							}) : []).map(e => e.award);
						return Object(S.c)(e, {
							awards: r,
							minSize: 128,
							postOrCommentId: s
						})
					},
					awardingsPending: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t, a = n;
						if (!n) {
							const t = Object(F.K)(e, {
								thingId: s
							});
							if (!t) return !1;
							a = t.id
						}
						return Object(A.g)(e, {
							subredditId: a,
							thingId: s
						})
					},
					correlationId: e => Object(k.b)(e) || Object(u.d)(u.a.GildingFlow, !1),
					currentUser: R.i,
					errorMessage: k.a,
					isAnonymous: k.g,
					iFramed: k.h,
					isGildPending: k.e,
					isEmployee: R.F,
					isRecommendedCoinPackagePending: L.i,
					message: k.c,
					postOrComment: (e, t) => {
						let {
							thingId: s
						} = t;
						return Object(l.a)(s) ? Object(G.N)(e, {
							postId: s
						}) : Object(P.n)(e, {
							commentId: s
						})
					},
					purchaseCatalogPending: L.h,
					showPurchaseModal: B.s,
					selectedAward: T.b,
					subreddit: F.K,
					subredditCoins: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t;
						const a = Object(F.K)(e, {
								thingId: s
							}),
							r = a ? a.id : n;
						return Object(F.C)(e, {
							subredditId: r
						})
					},
					tags: (e, t) => {
						let {
							thingId: s,
							subredditId: n
						} = t, a = n;
						if (!n) {
							const t = Object(F.K)(e, {
								thingId: s
							});
							a = t && t.id
						}
						if (!a && Object(l.a)(s)) {
							const t = Object(G.N)(e, {
								postId: s
							});
							a = t && t.belongsTo.id
						}
						return a ? Object(A.i)(e, {
							subredditId: a
						}) : []
					},
					userCoins: (e, t) => {
						const s = Object(R.d)(e),
							n = Re(e, t);
						return s + Object(M.a)(e, {
							subredditId: n
						})
					},
					inViewerFeedTheMeter: (e, t) => {
						let {
							thingId: s
						} = t;
						return Object(_.f)(e, s, D.l)
					}
				}), e => {
					const {
						awardings: t,
						isEmployee: s,
						postOrComment: n,
						selectedAward: a,
						subredditCoins: r,
						userCoins: o
					} = e, {
						awardType: i,
						coinPrice: d,
						pennyPrice: c
					} = a, l = i === b.f.Moderator, u = !!c || ((l ? r : o) || 0) < d && !(s && !l), p = n && n.media && "rpan" === n.media.type, h = n ? m(t, n) : t;
					return Object.assign(Object.assign({}, e), {
						awardings: h,
						needPayment: u,
						cost: c || d,
						isRpanPost: !!p
					})
				});
			class We extends a.a.Component {
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
						e(Object(h.clickAddCoinsButtonEvent)(t)), window.open("/coins", "_blank")
					}, this.onNeedPayment = () => {
						const {
							cost: e,
							correlationId: t,
							needPaymentRequested: s,
							selectedAward: n,
							sendEvent: a,
							thingId: r
						} = this.props;
						a(Object(h.clickNextButtonEvent)(r)), s({
							awardId: n.id,
							correlationId: t,
							cost: e,
							isPennyPurchase: !!n.pennyPrice,
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
						t(Object(h.clickGetPremiumEvent)(s, e)), Object(c.d)("/premium", c.c.BLANK)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: s,
							selectedAward: n,
							sendEvent: a,
							thingId: r
						} = this.props;
						return a(Object(h.clickConfirmAwardEvent)(r, n)), e(t, !!s)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(p.W)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardsAndTagsRequested: t,
						correlationId: s,
						isAnonymous: n,
						isRpanPost: a,
						needPayment: r,
						postOrComment: o,
						purchaseCatalogPending: i,
						purchaseCatalogRequested: d,
						selectAward: c,
						selectedAward: l,
						sendEvent: m,
						setIsAnonymous: f,
						subreddit: w,
						subredditAboutRequested: v,
						subredditId: O,
						subredditLockedCoinsRequested: E,
						subredditName: j,
						thingId: x,
						displayUnusableAwardError: I
					} = this.props;
					s || Object(u.d)(u.a.GildingFlow, !1), m(Object(h.viewGildModalEvent)(l.id, n, x)), f(!a && Object(p.l)());
					const N = w ? w.id : O || (o && o.belongsTo ? o.belongsTo.id : void 0);
					if (N && t(N, x), Ge(e, l) && (I(), c(b.m)), w || j) {
						v(w ? w.name : j)
					}
					w && w.type !== g.e.User && E(w.id, w.name), r && (l.pennyPrice ? q() : Object(V.a)(), i || d(s))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && Ge(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(b.m))
				}
				render() {
					const {
						awardings: e,
						awardIcons: t,
						awardingsPending: s,
						className: n,
						closeGildModal: r,
						currentUser: o,
						isAnonymous: i,
						iFramed: c,
						isGildPending: l,
						isRecommendedCoinPackagePending: m,
						isRpanPost: u,
						message: p,
						needPayment: h,
						selectedAward: g,
						sendEvent: f,
						showPurchaseModal: w,
						subreddit: v,
						subredditCoins: O,
						subredditName: E,
						tags: j,
						thingId: x,
						userCoins: I
					} = this.props, {
						showPurchaseModalInThisInstance: N
					} = this.state, C = w && N, y = C && !g.pennyPrice, P = C && !!g.pennyPrice, A = (y || P) && !c;
					if (y && A) return null;
					if (P && A) return a.a.createElement(H, null);
					const _ = v ? v.name : E,
						k = !(!o || !o.isGold),
						S = {
							needPayment: h,
							needPremium: !k && g.awardSubType === b.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || m,
							selectedAward: g,
							thingId: x
						};
					return a.a.createElement("div", {
						className: Object(d.a)(n, Fe.a.gildModalContent)
					}, a.a.createElement(Be, {
						onCancel: r,
						onAddCoins: this.onClickAddCoins,
						userCoins: I
					}), a.a.createElement("div", {
						className: Fe.a.modalMainContent
					}, a.a.createElement(Me, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: s,
						premiumUser: k,
						onSelect: this.props.selectAward,
						selectedAward: g,
						sendEvent: f,
						tags: j,
						thingId: x
					}), a.a.createElement(be, {
						forcePublic: u,
						isAnonymous: i,
						isLivestream: u,
						message: p,
						selectedAward: g,
						selectedAwardIcon: t[g.id],
						sendEvent: f,
						thingId: x,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: S,
						subredditName: _,
						subredditCoins: O
					})), P && a.a.createElement(H, null))
				}
			}
			t.a = Object(r.b)(Ve, (e, t) => {
				let {
					thingId: s
				} = t;
				return {
					awardsAndTagsRequested: t => e(Object(w.a)(t, s)),
					closeGildModal: () => e(Object(j.a)()),
					gildRequested: (t, n) => e(Object(O.gildGqlRequested)(s, {
						isOldReddit: t,
						isLivestream: n
					})),
					needPaymentRequested: t => {
						let {
							awardId: s,
							correlationId: n,
							cost: a,
							isPennyPurchase: r,
							thingId: o
						} = t;
						e(r ? Object(I.b)(a, o, n) : Object(x.c)(s, o, n))
					},
					purchaseCatalogRequested: t => e(Object(N.b)(t)),
					selectAward: t => e(Object(E.a)(t)),
					displayUnusableAwardError: () => e(Object(y.e)({
						kind: f.b.Error,
						duration: y.a,
						text: i.fbt._("This award is not available on this content.", null, {
							hk: "13VV1D"
						})
					})),
					setIsAnonymous: t => {
						e(Object(O.setIsAnonymous)(t)), Object(p.W)(t)
					},
					subredditAboutRequested: t => e(Object(C.t)(t)),
					subredditLockedCoinsRequested: (t, s) => e(Object(v.a)(t, s)),
					updateMessage: t => e(Object(O.updateMessage)(t))
				}
			})(Object(K.c)(We))
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/components/TimeLeft/index.m.less"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/timeAgo/index.ts"),
				c = s("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: s
				} = e, n = Math.floor(s.getTime() / 1e3), r = Object(d.b)(n);
				return a.a.createElement("div", {
					className: Object(i.a)(t)
				}, a.a.createElement(c.a, {
					className: o.a.clockIcon
				}), a.a.createElement("span", {
					className: o.a.timeLeft
				}, r))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, s) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, t, s) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Advance/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Advance/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.default, e.className),
				viewBox: "0 0 13 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
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
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				className: Object(r.a)(i.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), a.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), a.a.createElement("path", {
				className: Object(r.a)(i.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), a.a.createElement("path", {
				className: Object(r.a)(i.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), a.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), a.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), a.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/New/index.m.less"),
				i = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return I
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "j", (function() {
				return z
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "e", (function() {
				return q
			})), s.d(t, "g", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(a.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.models,
				g = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				w = e => e.publicAccessNetwork.history.cursor,
				v = e => e.publicAccessNetwork.history.visitOrder,
				O = e => e.publicAccessNetwork.hlsStreams,
				E = Object(n.a)(O, e => e.ended),
				j = Object(n.a)(O, e => e.removed),
				x = Object(n.a)(b, E, j, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = R(n, i.a.ENDED) ? i.a.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !0 === r ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: a,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = R(n, i.a.ENDED) ? i.a.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !1 === r ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: a,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				I = (e, t) => {
					return x(e)[Object(o.h)(t)]
				},
				N = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), x, g, d.h, c.d, (e, t, s, n, a, d) => {
					if (d) {
						const r = [];
						if (e) {
							const t = Object(o.h)(e);
							s[t] && r.push(t)
						}
						const d = r.concat(t),
							c = [...new Set(d)],
							l = new Set([...n, ...a]);
						return c.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
						})
					}
					const c = new Set([...n, ...a]);
					return Object.keys(s).filter(e => !c.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.a.KILLED && e.stream.state !== i.a.PURGED).map(e => e.post.id)
				}),
				C = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, x, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return N(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				y = Object(n.a)(x, C, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				P = Object(n.a)(x, C, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				A = Object(n.a)(v, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return C(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				_ = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, x, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return C(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, f, (e, t, s, n) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = a.find(e => e.stream.state === i.a.IS_LIVE);
					if (r) return r.post.id;
					const o = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				k = Object(a.a)(Object(n.a)(_, x, (e, t) => e ? t[e] : void 0)),
				S = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.h)(s) : void 0
				}, _, g, d.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return C(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t, s, n, a) => !e || s.includes(e) || n.includes(e) ? t || a[0] : e),
				M = Object(n.a)(w, v, A, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(n.a)(w, v, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(a.a)(Object(n.a)(S, x, (e, t) => e ? t[e] : void 0)),
				B = Object(a.a)(Object(n.a)(M, x, (e, t) => e ? t[e] : void 0)),
				G = Object(a.a)(Object(n.a)(T, x, (e, t) => e ? t[e] : void 0)),
				D = (Object(a.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, x, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(S, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				F = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? I(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const V = Object(n.a)(S, f, (e, t) => e && t.timestamps[e] || 0);
			var W;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(W || (W = {}));
			const z = Object(n.a)(S, x, h.b, (e, t, s) => {
					if (s) return W.INTRO;
					const n = e && t[e];
					if (!n) return W.UNAVAILABLE;
					const a = n.stream.state;
					return a === i.a.IS_LIVE || a === i.a.DISCONNECTED ? W.LIVE : a === i.a.ENDED && n.stream.vod_accessible ? W.VOD : W.UNAVAILABLE
				}),
				U = Object(n.a)(L, z, h.b, l.b, l.o, (e, t, s, n, a) => s ? n : e ? t === W.LIVE || t === W.VOD ? e.stream.hls_url : a : void 0),
				q = Object(n.a)(L, z, V, (e, t, s) => e ? t === W.LIVE ? e.broadcast_time : t === W.VOD && s < e.broadcast_time ? s : 0 : 0),
				H = (e, t) => {
					const s = b(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(o, r.n, (e, t) => t && !e.isIntroFinished),
				d = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + a.a > Date.now()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.0ace5811d8cb841bba2d.js.map