// https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.56159e22fa831aa534aa.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityPointsLearnMore"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const o = Object(n.a)(e),
					a = parseInt(o) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, o) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			o.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "f", (function() {
				return l
			})), o.d(t, "g", (function() {
				return u
			})), o.d(t, "e", (function() {
				return c
			}));
			var n, a = o("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const i = "USD",
				r = "ETH",
				s = "COINS",
				l = [r, "BTC"],
				u = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				c = {
					COINS: () => a.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => a.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => a.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			})), o.d(t, "b", (function() {
				return c
			}));
			var n = o("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = o("./src/lib/currency/centsToDollars/index.ts"),
				i = o("./src/lib/currency/currencies.ts"),
				r = o("./src/lib/prettyPrintNumber/index.ts"),
				s = o("./src/reddit/helpers/governance/tokens.ts"),
				l = o("./src/reddit/constants/intlSupport.ts");
			const u = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const i = Number(e);
					return Object(l.c)() ? o ? Object(r.b)(i) : new Intl.NumberFormat(t, a).format(i) : m(i, o, t)
				},
				c = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: o = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: u,
						displayConversion: c,
						forceDecimals: p,
						currency: y = t.currency || (t.type ? h(t.type) : i.c),
						type: b = t.type || (t.currency ? d(t.currency) : i.b.Real)
					} = t, f = Number(e), g = String(e);
					switch (b) {
						case i.b.Reddit: {
							const e = i.e[y],
								t = e ? e() : y;
							return Object(l.c)() ? new Intl.NumberFormat(o, {
								currencyDisplay: "symbol",
								...u
							}).format(f) + " " + t : m(f, r, o, t)
						}
						case i.b.Crypto: {
							if (r) {
								return Object(s.d)(g, c) + " " + y
							}
							const e = Number(Object(s.c)(g, c));
							return Object(l.c)() ? new Intl.NumberFormat(o, {
								style: "currency",
								currency: y,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...u
							}).format(e) : m(e, r, o, y)
						}
						case i.b.Real:
						default: {
							const e = Number(Object(a.a)(g, p));
							return Object(l.c)() ? new Intl.NumberFormat(o, {
								style: "currency",
								currency: y,
								currencyDisplay: "symbol",
								notation: r ? "compact" : "standard",
								...u
							}).format(e) : m(e, r, o, y)
						}
					}
				},
				m = (e, t, o, n) => {
					return (t ? Object(r.b)(e) : e.toLocaleString(o)) + (n ? " " + n : "")
				},
				d = e => i.g.includes(e.toUpperCase()) ? i.b.Reddit : i.f.includes(e.toUpperCase()) ? i.b.Crypto : i.b.Real,
				h = e => {
					switch (e) {
						case i.b.Crypto:
							return i.d;
						case i.b.Reddit:
							return i.a;
						case i.b.Real:
						default:
							return i.c
					}
				}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, o) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/lib/classNames/index.ts"),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				s = o("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = o.n(s);
			const {
				fbt: u
			} = o("./node_modules/fbt/lib/FbtPublic.js"), c = e => {
				let {
					className: t,
					highContrast: o,
					onClick: a
				} = e;
				return i.a.createElement("button", {
					onClick: a,
					className: Object(n.a)(l.a.closeButton, {
						[l.a.highContrast]: o
					}, t),
					"aria-label": u._("Close", null, {
						hk: "3Qarlp"
					})
				}, i.a.createElement(r.b, {
					className: l.a.closeIcon
				}))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return i
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return l
			}));
			var n = o("./node_modules/bignumber.js/bignumber.js"),
				a = o("./src/lib/prettyPrintNumber/index.ts");

			function i(e, t) {
				const o = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return o.dividedToIntegerBy(a).toString()
			}

			function r(e, t) {
				return Object(a.b)(parseInt(i(e, t), 10))
			}

			function s(e, t) {
				const o = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return o.multipliedBy(a).toFixed(0)
			}

			function l(e) {
				const t = new n.BigNumber(e),
					o = new n.BigNumber("1e18");
				return t.dividedBy(o).toString()
			}
		},
		"./src/reddit/icons/svgs/ArrowRightThin/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				a = o.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M8.56569 0.234315C8.25327 -0.0781049 7.74673 -0.0781049 7.43431 0.234315C7.12189 0.546734 7.12189 1.05327 7.43431 1.36569L13.2686 7.2H0.8C0.358172 7.2 0 7.55817 0 8C0 8.44183 0.358172 8.8 0.8 8.8H13.2686L7.43431 14.6343C7.12189 14.9467 7.12189 15.4533 7.43431 15.7657C7.74673 16.0781 8.25327 16.0781 8.56569 15.7657L15.7657 8.56569C16.0781 8.25327 16.0781 7.74673 15.7657 7.43431L8.56569 0.234315Z"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, o) {
			"use strict";
			var n, a, i, r;
			o.d(t, "b", (function() {
					return a
				})), o.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(r || (r = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, o) {
			"use strict";
			var n;

			function a(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			o.d(t, "a", (function() {
					return n
				})), o.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less": function(e, t, o) {
			e.exports = {
				carousel: "_3vQyUlP9YLzmdL2rsquLS-",
				imageContainer: "_2fHEqYCy2KASrMaQgflk9d",
				image: "_3z5mBSNxkSLnbR6usgbqpT",
				before: "_2JttHHaD7zf0Mbh1a5nRuW",
				after: "_39ks1t7udSkwDSJapMxhoe",
				textContainer: "DCfzAVcgI71D_KyuFWTCt",
				text: "_7rNTYtq4K9spIZ7RPkHx0",
				slideTitle: "_30M0sUJwfP6X2VcrCV3b9D",
				hiddenText: "TE2V4h2gDawl2Jss4N8Z7",
				pager: "_3FdYuxiANbzVWGxeXemc_M",
				progressDot: "fm3copvWWgfUMqVsK6uEV",
				active: "_1sREUpzXrLYpeFbGcvHOKm",
				nextButton: "_2qRdqJkJATZDQvbXLgMgc-",
				hidden: "_2BV3vldc4MxhlrcUmzjGR_",
				arrowIcon: "_2BK1VOf0hmpl3IcVh25aod"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/floatingMenuButton.m.less": function(e, t, o) {
			e.exports = {
				container: "_3XsRSKNK-knnbQqK5rBnsJ",
				iconContainer: "_2rkXJgirbHrzpuhJs803P4",
				rotated: "_3ZZ9F08bKDYNGthWmSy4Dw",
				menuIcon: "_1mLHEqdVX-yfSGDKAmCwcF"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_81E2YESAdbLBEPdlCjiWx",
				menuContainer: "_3os0Eb9YY4sdudgVb6wagz",
				mobileMenuContainer: "_2z4mOlcBSFl3fYxFC1gxlD",
				menu: "_1jgP4w2Z18f04dk6A3tbRN",
				mobileMenu: "_2Y92kPDUP8agVAuBlHhX0s",
				floatingMenuButton: "_1NJ49DYRPRJ9Cq3MfVktfl",
				content: "Dy49ZLgHjDlSQA8oba7h",
				largeCenteredImage: "vvaihHNP51aj6GLYESKE8",
				smallTitleImage: "_2EXVfE7qOnxkNg5gZpJYEY",
				sideImageContainer: "_2koAQEaqF8z7uyv_6oCHml"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less": function(e, t, o) {
			e.exports = {
				container: "_3RJzS_cAXEXOu1Y__ViOWt",
				section: "_3hdgyv5SB3KEMzi0Q7ndaY",
				categoryHeader: "_3IMQI4BfhAv-jdQd8-IRxc",
				menuItem: "_2seWMu6B5kaYQ7lpTW6akn",
				active: "_3jsHkW_28FYYDl7q470ton",
				nightmode: "jXXFN7oueWlcKG2qUXsrs"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_39s4Rg_2-Yvhg8_j7HmwHz",
				content: "_21JaPYggXVyLsz9Gm0gafa",
				logo: "_1suWmsdOylQibxtvENDH0J",
				link: "FSlJwTR_glxbHijEQl1LP",
				spacer: "_2M28l0MkIvJi8JhKE7Puf"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_3hCEJSoCggYeV4_Vzkfj6p",
				nightmode: "_3t1hqqIBXV1ISlXksPyR4v",
				logo: "I0sVgzsD8iUdHKzDn3w8a",
				snoo: "iCZwiIk1X_P-1bWrMlBo9",
				wordmark: "_3IIgVNEfc4FHb6Uabcf5XO",
				sections: "_2dnnlMMF10lQC5D3XckQWq",
				sectionText: "_3fpURPqNv7UjrUQUoOgWlU",
				joinWaitlist: "_35PGwOCrj4RRPhOFBN4lI9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less": function(e, t, o) {
			e.exports = {
				container: "_1pYG3qIuM4DcrXBl4ngRLH",
				nightmode: "_13L8wx4qz4Fqb03MSVwQvz",
				expanded: "_1ErKYza74uPs_NEpBYfi2k",
				hidden: "FcdN7km4odlWAbVAOMQkD",
				imageSection: "zkgtJc3iICyXxf4wAJmZb",
				image: "Scvg5NjTLZ3VrePmrZZ2A",
				textSection: "_3otwIn4fK0662wqoyFKWMf",
				title: "_3iniGJys4pL41Wl9bCLgxm",
				subtitle: "_2Cc_c4fO2XRibfBK7ujeM3",
				body: "_3ehMpTZWHsOclJbP-nb9UB",
				expandButton: "BuJ81mwGD_tsDKOfiSoGx",
				plusIcon: "_1rOiCdlgF_4fotbxlTYrnO"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less": function(e, t, o) {
			e.exports = {
				title: "_34fNgU8PzDdn8N1dy3ivp5",
				benefitsContainer: "igYwgfFD3VTXbAuDpR11Z",
				expanded: "gpTg3u93gk7ivOpu_dFw1"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2g4zHxTR8YPXf6MxxTZk7x",
				mainSceneMaxWidthContainer: "_3UsELnL-t4fWupdTjbCR_V",
				mainSceneContainer: "_3RjIgU8tOgxONqCDsLnZVR",
				fallbackStaticImage: "_2xZ5UC6gTSmPmIJA5XaNlG",
				mainScene: "_1rRH8io2oTfod98xPvCKtZ",
				title: "_2mxGnwsJiO-qvSzpOulRFX",
				super: "_3eb9BDGx0nyIh-oCpZbHnQ",
				subtitle: "_3m3_p5jybv4MaYrJ2PVdD-",
				bodyText: "XofGmuW13eskj1YFcBtaR",
				waitlistButton: "_3P-mpJEZcqloYGIVLElRwC"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/carouselModal.m.less": function(e, t, o) {
			e.exports = {
				container: "_9EyzkvU_juhro9apbxsed"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_1jdWtwUDsZUYK8cKl4ShoL",
				image: "_21S4Zcb7SWOn26f2PHTYVJ",
				textContainer: "_1KUhJVhvhYgJy3UP7AVh8A",
				title: "_1_XEsvgDaW6Ipmo8_EbUvx",
				body: "_30rAKfIDOJdS0e_nAZ0SUC",
				button: "_1PiFEnhFGjcOJ8DJpZEZrs",
				buttonIcon: "_5enw_h_QNP0edxOuTIgVT",
				modal: "_3AQQcIW5Bg4kBV6tYo-SiG",
				modalOverlay: "_3OX4exO0VgI32mkudOynM4"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less": function(e, t, o) {
			e.exports = {
				background: "_2ge27xQx1Gt9ZLEAF5G56e",
				snoo: "_2w697DOO736IN0y8x1G_r5",
				subtitle: "_1knd7dCNDtGNteCtEtWMI4",
				docsButton: "_3WXyHuUGgkzB-1Qc3roRsZ",
				docsIcon: "_1Y7YQr9nJOHYMXIJV9bR10",
				docTextShort: "_9B9hYKnRsbpS0xQ6bTVI_",
				docTextFull: "_1cBiAI3Lmkt0Hm6YzkDtth"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less": function(e, t, o) {
			e.exports = {
				container: "_2JWWvW2ewMO4EJh4aah_Y7",
				textSection: "_3LHXd49gDHLRyBpMYidVtJ",
				textContainer: "_2jBZPVax0cA0Md6DhqyAo0",
				title: "_3iRk7kbiRtkK0jjfcKqc-A",
				imageSection: "_3Csuw0qH6o42AjO_1RWieH",
				image: "_3KQSH2itVDb7THQByNoRg_"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less": function(e, t, o) {
			e.exports = {
				title: "qs7iEx9A8SgBw6iazade7",
				subtitle: "_1QaW2mV2hdesrU3AoIJMIJ",
				featureContainer: "_2EyftCjwIT4OedYkYEeLWp",
				bodyText: "_1eyjP53kp-6YZvRBsjsrJZ",
				blackText: "_2tWli1aET4UuzyDIVL2EBk",
				bodyTitle: "_30cHBBkgHrSZwzZK6bYcS",
				bodyDetail: "_2CQLcOyg-dqNiiIS4hqGK9"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less": function(e, t, o) {
			e.exports = {
				backgroundContainer: "_2oJWRZzf_TEBMLEbgx16At",
				title: "_3JCUSaj8y3O2gZS9WULM7W",
				subtitle: "_3iijLFwnHqOOSiOWRFviQB",
				body: "_3SmftvDrw0EEwYrT1vFARS",
				moon: "W7I9PeaA-0ziX1ZxLfwG4",
				rocket: "_1ImCaNv5DgWVuIx7lPH-5b",
				waitlistButton: "_2CooTtX1sr5RsRthPTFnrV"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less": function(e, t, o) {
			e.exports = {
				background: "_2EkB4QKAhEjNwVFUD_8JmV",
				textSection: "_2jCzqlAuwDwwpuCgmfIMQ7",
				textContainer: "_3T9M1hVNmokkQWh03xX8jk",
				title: "_3-_ejcDFGp596JkkqRsIsD",
				subtitle: "_1fiXx_cB7w4HkwykMuyx0w",
				body: "_1JRBoMFbhlLJke-WjiF9tg",
				imageSection: "_26XceelGMk4WXZndVXPgs0",
				image: "_39n5c2gafF2Zu9YWqEe6cM"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less": function(e, t, o) {
			e.exports = {
				anchor: "_1ms_1DEhbPfoWXTh7V61HA",
				anchorParent: "_31htbIEbYEE6IxL_i638-C",
				containerPadding: "_3QgQYeMEeB78hap31D9Da5",
				container: "_2hno-FBggC-9UCyeqfnHlk",
				offline: "_3e_2rDbDAsM6SoOvSxKCaB",
				showDeprecated: "_3NRmcYs-YgClL2HxjajtHX",
				showFPR: "_1mBX91Pbe0QmUzs41SlVrU",
				showFpr: "_1mBX91Pbe0QmUzs41SlVrU",
				showSuspended: "_3yKfNeE_lGGA0CEHo6cC1a",
				navExperiment: "_1ZuwXgOzts0UNccD1GckNF",
				gradientTitleText: "_3VKA4-REk2G4og1H9g0OVD",
				spiral: "_34sjOdYnL94MgTNoNO_z4F",
				communityPointsSection: "_1xGdSbQlhCZiz37M3l4MDa",
				benefitsSection: "_2N1oSKnW_wEttdF6sYbS34",
				featuresSection: "_3gQQPnfeKxZBlYPTarr9Kq",
				faqSection: "BW44I43BTQHj1PYxeGeoW",
				vaultSection: "_6K5JcTVxN5uDsD5M_-Ju-",
				cryptoFutureSection: "_21NRzDYwPqzOpUzZ2w_r3j",
				joinWaitlistSection: "_3f4Fk6abLq8KKZzOZpqbwX"
			}
		},
		"./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "Anchor", (function() {
				return ot
			}));
			var n = o("./src/config.ts"),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				r = o("./src/reddit/hooks/usePageLayer.ts"),
				s = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/routes/meta/constants.ts");
			const u = /\/community-points\/documentation\/?(.*)/,
				c = e => {
					var t, o;
					const n = null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.url;
					if (!n) return null;
					const a = n.match(u);
					return a && a[1] ? a[1] : null
				},
				m = e => `/community-points/documentation/${e}`,
				{
					fbt: d
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var h = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/index.m.less"),
				y = o.n(p);
			const {
				fbt: b
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: f
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: g
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var w = o("./src/reddit/icons/fonts/index.tsx"),
				k = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/floatingMenuButton.m.less"),
				v = o.n(k);
			const P = e => {
					let {
						className: t,
						onClick: o,
						isMenuOpen: n
					} = e;
					return i.a.createElement("button", {
						className: Object(s.a)(t, v.a.container),
						onClick: o
					}, i.a.createElement("div", {
						className: Object(s.a)(v.a.iconContainer, {
							[v.a.rotated]: n
						})
					}, i.a.createElement(w.a, {
						name: n ? "add" : "menu",
						className: v.a.menuIcon
					})))
				},
				{
					fbt: _
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: E
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var C = o("./node_modules/react-redux/es/index.js"),
				S = o("./src/reddit/selectors/user.ts"),
				V = o("./node_modules/fbt/lib/FbtPublic.js");
			const I = [{
				key: "introduction",
				name: V.fbt._("Intro", null, {
					hk: "373VV7"
				}),
				pages: [{
					key: "introduction",
					name: V.fbt._("Introduction", null, {
						hk: "f7WaD"
					})
				}]
			}, {
				key: "points-distribution",
				name: V.fbt._("Points Distribution", null, {
					hk: "2zNnfy"
				}),
				pages: [{
					key: "distribution-process",
					name: V.fbt._("Distribution Process", null, {
						hk: "723Tq"
					})
				}, {
					key: "distribution-rules",
					name: V.fbt._("Distribution Rules", null, {
						hk: "357sNF"
					})
				}, {
					key: "spam-and-abuse",
					name: V.fbt._("Spam & Abuse", null, {
						hk: "1uqIAx"
					})
				}]
			}, {
				key: "features",
				name: V.fbt._("Features", null, {
					hk: "3xGVnE"
				}),
				pages: [{
					key: "reputation-and-governance",
					name: V.fbt._("Reputation & Governance", null, {
						hk: "9h6Ny"
					})
				}, {
					key: "special-memberships",
					name: V.fbt._("Special Memberships", null, {
						hk: "1c2Bqa"
					})
				}, {
					key: "redeeming-points",
					name: V.fbt._("Redeeming Points", null, {
						hk: "MOTKC"
					})
				}, {
					key: "tipping",
					name: V.fbt._("Gifting & Tipping", null, {
						hk: "3aSNUQ"
					})
				}, {
					key: "points-and-automoderator",
					name: V.fbt._("Points & Automoderator", null, {
						hk: "4bmuZM"
					})
				}]
			}, {
				key: "blockchain",
				name: V.fbt._("Blockchain", null, {
					hk: "3HjKIg"
				}),
				pages: [{
					key: "points-on-the-blockchain",
					name: V.fbt._("Points on the Blockchain", null, {
						hk: "10M3cB"
					})
				}, {
					key: "vault",
					name: V.fbt._("Vault", null, {
						hk: "4vC7Cj"
					})
				}, {
					key: "developers",
					name: V.fbt._("Developers", null, {
						hk: "3lAfaF"
					})
				}]
			}, {
				key: "additional-resources",
				name: V.fbt._("Additional Resources", null, {
					hk: "7bp0b"
				}),
				pages: [{
					key: "faqs",
					name: V.fbt._("Frequently Asked Questions", null, {
						hk: "4e4s5J"
					})
				}]
			}];
			var x = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Documentation/menu.m.less"),
				T = o.n(x);
			const R = e => {
					let {
						className: t,
						onClickItem: o
					} = e;
					const n = Object(r.a)(),
						a = c(n),
						l = Object(C.e)(S.fb);
					return i.a.createElement("div", {
						className: Object(s.a)(T.a.container, t)
					}, i.a.createElement("nav", null, i.a.createElement("ol", null, I.map(e => i.a.createElement("div", {
						key: e.name,
						className: T.a.section
					}, e.pages.length > 1 && i.a.createElement("h4", {
						className: T.a.categoryHeader
					}, e.name), i.a.createElement("ol", null, e.pages.map(e => {
						let {
							key: t,
							name: n
						} = e;
						return i.a.createElement(M, {
							key: t,
							className: Object(s.a)({
								[T.a.nightmode]: l
							}),
							active: t === a,
							name: n,
							onClick: o,
							pageKey: t
						})
					})))))))
				},
				M = e => {
					let {
						className: t,
						active: o,
						name: n,
						onClick: a,
						pageKey: r
					} = e;
					return i.a.createElement(h.a, {
						to: m(r),
						onClick: a
					}, i.a.createElement("li", {
						className: Object(s.a)(T.a.menuItem, {
							[T.a.active]: o
						}, t)
					}, n))
				},
				{
					fbt: N
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: A
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: F
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: B
				} = o("./node_modules/fbt/lib/FbtPublic.js"),
				{
					fbt: O
				} = o("./node_modules/fbt/lib/FbtPublic.js");
			var D = o("./src/lib/localizeCurrency/index.ts"),
				j = o("./src/reddit/hooks/useLocale.ts");
			const {
				fbt: W
			} = o("./node_modules/fbt/lib/FbtPublic.js"), {
				fbt: L
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var Y = o("./node_modules/react-router-redux/es/index.js");
			const z = e => {
					let {
						className: t
					} = e;
					const o = Object(C.d)(),
						[n, l] = Object(a.useState)(!1),
						u = Object(r.a)(),
						d = c(u);
					return Object(a.useEffect)(() => {
						window.scrollTo(0, 0)
					}, [d]), d && (e => ["introduction", "distribution-process", "distribution-rules", "spam-and-abuse", "reputation-and-governance", "special-memberships", "coins-and-awards", "redeeming-points", "tipping", "points-and-automoderator", "vault", "points-on-the-blockchain", "developers", "faqs", "contact"].includes(e))(d) ? i.a.createElement("div", {
						className: y.a.container
					}, i.a.createElement("div", {
						className: Object(s.a)(y.a.menuContainer, {
							[y.a.mobileMenuContainer]: n
						})
					}, i.a.createElement(R, {
						className: Object(s.a)(y.a.menu, {
							[y.a.mobileMenu]: n
						}),
						onClickItem: () => l(!1)
					})), i.a.createElement("div", {
						className: y.a.content
					}, G[d]), i.a.createElement(P, {
						className: y.a.floatingMenuButton,
						onClick: () => l(!n),
						isMenuOpen: n
					})) : (o(Object(Y.b)(m("introduction"))), null)
				},
				G = {
					introduction: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, E._("Introduction", null, {
						hk: "1ERR5f"
					})), i.a.createElement("h2", null, E._("It is time for communities to break free of walled gardens and take ownership of their existence online.", null, {
						hk: "1U7V3v"
					})), i.a.createElement("img", {
						className: y.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/future.png`,
						alt: E._("Imagine a crypto future", null, {
							hk: "2fm7jC"
						})
					}), i.a.createElement("section", null, i.a.createElement("h3", null, E._("The Future of Online Communities", null, {
						hk: "2l5mV2"
					})), E._("{=Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.}{=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.}{=Today's online communities are not like this. They are trapped inside apps and platforms, where they do not have independence or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.}{=It is time for them to take back ownership and control. It is time for a change.}", [E._param("=Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", i.a.createElement("p", null, E._("Communities are the lifeblood of the Internet. They are the places where magic happens online — where people meet others like themselves, think and talk about the same things, and laugh at the same jokes. From newsgroups and chatrooms and forums, communities have always been the centers of the Internet that draw people in.", null, {
						hk: "vHVJ6"
					}))), E._param("=But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", i.a.createElement("p", null, E._("But online communities are much more limited than their counterparts in the real world. In the real world, communities are independent entities, free to choose where and how they hang out. No one tells them what to do or where to go.", null, {
						hk: "GvwbA"
					}))), E._param("=Today's online communities are not like this. They are trapped inside apps and platforms, where they do not have independence or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", i.a.createElement("p", null, E._("Today's online communities are not like this. They are trapped inside apps and platforms, where they do not have independence or control anything of value. This limitation makes them second-class citizens, unable to chart their own destiny on the Internet. It is time to put communities in their rightful place as the foundation of the Internet.", null, {
						hk: "MiPUV"
					}))), E._param("=It is time for them to take back ownership and control. It is time for a change.", i.a.createElement("p", null, E._("It is time for them to take back ownership and control. It is time for a change.", null, {
						hk: "9Dp2V"
					})))], {
						hk: "2A7TFn"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, E._("Community Points", null, {
						hk: "1F2Duo"
					})), E._("{=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.}{=As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.}{=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.}", [E._param("=Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", i.a.createElement("p", null, E._("Community Points are the first step towards a better future for online communities. In order to be truly independent from platforms like Reddit, communities need to be owned by their members in ways that platforms cannot take away. With the advent of blockchain technology, we now have a way to establish this freedom in a decentralized and secure way.", null, {
						hk: "1v0cui"
					}))), E._param("=As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", i.a.createElement("p", null, E._("As blockchain tokens that are owned and controlled by communities themselves — not by any app or platform — Community Points represent a way for Redditors to own a piece of their favorite communities. They are earned by making contributions to the community, like creating content and moderating. They not only represent ownership and reputation within the community, but can also be used for community governance, moderation, and unlocking premium features. They can even be used in custom tools outside of Reddit and on other platforms.", null, {
						hk: "3u0Hub"
					}))), E._param("=Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", i.a.createElement("p", null, E._("Most importantly, Community Points are a flexible tool that each community can shape to its needs. Each community has its own Points that it can customize with its own name, symbol, distribution rules, and uses. Every community has its own needs and we expect each to use Points differently and in novel ways that help take them to the next level.", null, {
						hk: "3vMwoH"
					})))], {
						hk: "2jUDyJ"
					}))), null),
					"distribution-process": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, b._("Distribution Process", null, {
						hk: "20vYmV"
					})), i.a.createElement("h2", null, b._("Community Points are distributed every 4 weeks based on contributions people make to the community.", null, {
						hk: "126Ahj"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, b._("Who gets Community Points?", null, {
						hk: "1Ed45W"
					})), i.a.createElement("div", {
						className: y.a.sideImageContainer
					}, i.a.createElement("div", null, b._("{=Community Points are distributed across multiple groups.}{=Contributors receive 50% of Community Points.Moderators receive 10% of Community Points.The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).}", [b._param("=Community Points are distributed across multiple groups.", i.a.createElement("p", null, b._("Community Points are distributed across multiple groups.", null, {
						hk: "11MZXG"
					}))), b._param("=Contributors receive 50% of Community Points.Moderators receive 10% of Community Points.The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", i.a.createElement("ul", null, b._("{=Contributors receive 50% of Community Points.}{=Moderators receive 10% of Community Points.}{=The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).}", [b._param("=Contributors receive 50% of Community Points.", i.a.createElement("li", null, b._("Contributors receive 50% of Community Points.", null, {
						hk: "4F2Wkl"
					}))), b._param("=Moderators receive 10% of Community Points.", i.a.createElement("li", null, b._("Moderators receive 10% of Community Points.", null, {
						hk: "3HcuPW"
					}))), b._param("=The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", i.a.createElement("li", null, b._("The remaining 40% of Community Points are set aside in a Community Tank, which supports the project in other ways (for example, by allowing users without Points to purchase perks like Special Memberships on-chain).", null, {
						hk: "2RRHD"
					})))], {
						hk: "2avYXi"
					})))], {
						hk: "1y9aEC"
					})), i.a.createElement("img", {
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/chart.png`,
						alt: b._("Pie chart", null, {
							hk: "3KLyoS"
						})
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, b._("How do contributors earn Community Points?", null, {
						hk: "1R03CI"
					})), b._("{=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.}{=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.}{=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.}{=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that they have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.}", [b._param("=Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", i.a.createElement("p", null, b._("Contributors earn Community Points based on a measure of their contribution to the subreddit called their Contribution Score.", null, {
						hk: "1CSAZ7"
					}))), b._param("=The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", i.a.createElement("p", null, b._("The baseline for this Contribution Score is the amount of karma each user has earned in the subreddit.", null, {
						hk: "47PKWZ"
					}))), b._param("=Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. SeeDistribution Rules for more details.", i.a.createElement("p", null, b._("Subreddits can apply additional rules on top of this baseline karma data to compute the final Contribution Scores. For example, they can choose to double the weight of comments, ignore karma for certain post flairs, or limit Contribution Scores to some maximum amount. See {=Distribution Rules} for more details.", [b._param("=Distribution Rules", i.a.createElement(h.a, {
						to: m("distribution-rules")
					}, b._("Distribution Rules", null, {
						hk: "1ePGZ3"
					})))], {
						hk: "3kihZq"
					}))), b._param("=In order for contributors to claim the Points they have earned, they need to create a Vault within the Reddit mobile app. When a user creates their Vault, they will receive the Points that they have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", i.a.createElement("p", null, b._("In order for contributors to claim the Points they have earned, they need to create a {=Vault} within the Reddit mobile app. When a user creates their Vault, they will receive the Points that they have earned up to 24 weeks (~6 months) before. Points earned but not claimed within 24 weeks will expire.", [b._param("=Vault", i.a.createElement(h.a, {
						to: m("vault")
					}, b._("Vault", null, {
						hk: "vu8DH"
					})))], {
						hk: "2bBYCS"
					})))], {
						hk: "3UYdSC"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, b._("How many Community Points are distributed?", null, {
						hk: "2Ov00C"
					})), b._("{=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.}{=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.}{=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.}{=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.}", [b._param("=When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.", i.a.createElement("p", null, b._("When existing subreddits opt into Community Points, they start with an initial distribution based on historical contributions. The amount of Points in the initial distribution varies by the age and size of the subreddit. For long-standing active communities, the initial distribution is 50 million Points.", null, {
						hk: "2yK1zs"
					}))), b._param("=This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", i.a.createElement("p", null, b._("This initial distribution is allocated according to the percentages above. The share for contributors is distributed based on historical karma earned in the subreddit to date. In order to be eligible for the initial distribution, users need to have been active in the community, i.e., make at least one post or comment in the previous 3 months.", null, {
						hk: "3Ys2uE"
					}))), b._param("=After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", i.a.createElement("p", null, b._("After the initial distribution, additional Points are distributed every 4 weeks. Five million Points are made available in the first distribution cycle and this reduces by 2.5% each further cycle. Eventually, Points reach a steady state where the total supply continues to grow at 1% a year.", null, {
						hk: "4mGiw4"
					}))), b._param("=In addition to the creation of new Points described above, 50% ofburned Points are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", i.a.createElement("p", null, b._("In addition to the creation of new Points described above, 50% of {=burned Points} are redistributed each cycle. This way, active contributors earn more Points in periods where the community spends more Points on rewards.", [b._param("=burned Points", i.a.createElement(h.a, {
						to: m("special-memberships")
					}, b._("burned Points", null, {
						hk: "lu4Xg"
					})))], {
						hk: "38G9NN"
					})))], {
						hk: "vb8rK"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, b._("What is the process for distribution?", null, {
						hk: "EdIh3"
					})), b._("{=Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.}{=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.}{=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.}", [b._param("=Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", i.a.createElement("p", null, b._("Every 4 weeks, Reddit makes a post in the subreddit with a list of each user's Contribution Score, based on karma earned during that period and the distribution rules the community has set. This list is published as a CSV file.", null, {
						hk: "2IVeQr"
					}))), b._param("=After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", i.a.createElement("p", null, b._("After this post has been made, the community has one week to review the list and propose any changes. They can make changes through the weighted polls and governance features built into Community Points.", null, {
						hk: "12ZLeS"
					}))), b._param("=After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.", i.a.createElement("p", null, b._("After one week, the Contribution Scores are finalized. Reddit signs and publishes the final data as a second post, and Community Points are distributed to community members based on those scores.", null, {
						hk: "2YGZKP"
					})))], {
						hk: "2Hcl3u"
					}), i.a.createElement("h3", null, b._("How do moderators receive Community Points?", null, {
						hk: "IIhgW"
					})), b._("{=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.}{=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.}{=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.}{=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.}", [b._param("=Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", i.a.createElement("p", null, b._("Moderators receive their portion of Community Points into a moderator wallet where they can be distributed to the rest of the moderator team. Moderator teams choose who controls the moderator wallet and how the moderator stipend is distributed to the team.", null, {
						hk: "39OdCQ"
					}))), b._param("=The simplest way to set up a moderator wallet is with a RedditVault in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.", i.a.createElement("p", null, b._("The simplest way to set up a moderator wallet is with a Reddit {=Vault} in a new account. In this case, the moderator(s) who have access to that account and Vault would administer the moderator distribution to the rest of the team.", [b._param("=Vault", i.a.createElement(h.a, {
						to: m("vault")
					}, b._("Vault", null, {
						hk: "RP5yN"
					})))], {
						hk: "nccuX"
					}))), b._param("=Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carrygovernance weight with them. Points transferred from other addresses will not carry this weight.", i.a.createElement("p", null, b._("Moderators can only vote in polls using Points they've earned. Only Points transferred from the moderator account's Vault carry {=governance weight} with them. Points transferred from other addresses will not carry this weight.", [b._param("=governance weight", i.a.createElement(h.a, {
						to: m("reputation-and-governance")
					}, b._("governance weight", null, {
						hk: "2kpak2"
					})))], {
						hk: "rUi1c"
					}))), b._param("=Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.", i.a.createElement("p", null, b._("Moderators receive their Community Points at the beginning of the following distribution cycle. The actual amount of Points they receive depends on how many Points were distributed to users' Vaults in the previous cycle. For example, let's say 1 million Points were made available to the community, but only 600,000 Points were actually distributed to users' Vaults (the remaining users didn't create Vaults and so haven't received their Points). In that case, moderators would receive 60% of their Points at the beginning of the next distribution cycle. If some of those users then create Vaults in a later cycle and get their previous Points before they expire, then moderators will receive an additional part of their stipend at that time. The same applies to the reserved Points in the Community Tank.", null, {
						hk: "3uYrxZ"
					})))], {
						hk: "mFEBl"
					}))), null),
					"distribution-rules": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, f._("Distribution Rules", null, {
						hk: "3kkkm5"
					})), i.a.createElement("h2", null, f._("Community Points are a powerful tool that subreddits can use to shape content and behavior.", null, {
						hk: "2FFsru"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, f._("Community Rules", null, {
						hk: "2q9cMn"
					})), f._('{=Communities have the flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.}{=Here is a non-exhaustive list of factors that can be used to shape distribution rules:}{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don\'t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")}{=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:}{=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on "media" or "comedy" postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month}{=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:}{=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on deleted posts and comments does not count (including karma earned before deletion)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.Only votes within 3 days of a post\'s creation time are counted (including on comments of that post)}', [f._param("=Communities have the flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", i.a.createElement("p", null, f._("Communities have the flexibility to set their own distribution rules for their Community Points. These rules can be designed to address the specific needs of the community.", null, {
						hk: "4s7ftB"
					}))), f._param("=Here is a non-exhaustive list of factors that can be used to shape distribution rules:", i.a.createElement("p", null, f._("Here is a non-exhaustive list of factors that can be used to shape distribution rules:", null, {
						hk: "4Gnp82"
					}))), f._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")Post flair (e.g., "reduce karma from COMEDY flairs to 10%")Posts vs comments (e.g., "double comment karma")Per post or per comment (e.g., "limit max karma from a single post to 1k karma")Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")Post or comment body length (e.g., "comments over 240 characters should get 2x karma")A specific post (e.g., "don\'t count karma from the daily discussion")Making a post or comment (e.g., "making a post reduces karma by 25")Membership (e.g., "users with a membership get 25% bonus to karma they earned")', i.a.createElement("ul", null, f._('{=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")}{=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")}{=Posts vs comments (e.g., "double comment karma")}{=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")}{=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")}{=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")}{=A specific post (e.g., "don\'t count karma from the daily discussion")}{=Making a post or comment (e.g., "making a post reduces karma by 25")}{=Membership (e.g., "users with a membership get 25% bonus to karma they earned")}', [f._param('=Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', i.a.createElement("li", null, f._('Post type, such as link vs text vs image vs video (e.g., "link posts should get 50% of karma of other posts")', null, {
						hk: "t3gJV"
					}))), f._param('=Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', i.a.createElement("li", null, f._('Post flair (e.g., "reduce karma from COMEDY flairs to 10%")', null, {
						hk: "4shcb3"
					}))), f._param('=Posts vs comments (e.g., "double comment karma")', i.a.createElement("li", null, f._('Posts vs comments (e.g., "double comment karma")', null, {
						hk: "2pZwq5"
					}))), f._param('=Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', i.a.createElement("li", null, f._('Per post or per comment (e.g., "limit max karma from a single post to 1k karma")', null, {
						hk: "45H3Zf"
					}))), f._param('=Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', i.a.createElement("li", null, f._('Posts or comments per day (e.g., "only count the first 20 comments a users makes per day")', null, {
						hk: "ApH9c"
					}))), f._param('=Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', i.a.createElement("li", null, f._('Post or comment body length (e.g., "comments over 240 characters should get 2x karma")', null, {
						hk: "3LgLBX"
					}))), f._param('=A specific post (e.g., "don\'t count karma from the daily discussion")', i.a.createElement("li", null, f._('A specific post (e.g., "don\'t count karma from the daily discussion")', null, {
						hk: "1AVsli"
					}))), f._param('=Making a post or comment (e.g., "making a post reduces karma by 25")', i.a.createElement("li", null, f._('Making a post or comment (e.g., "making a post reduces karma by 25")', null, {
						hk: "4bciV9"
					}))), f._param('=Membership (e.g., "users with a membership get 25% bonus to karma they earned")', i.a.createElement("li", null, f._('Membership (e.g., "users with a membership get 25% bonus to karma they earned")', null, {
						hk: "TVkOq"
					})))], {
						hk: "1StpTy"
					}))), f._param("=For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:", i.a.createElement("p", null, f._("For example, here are some rules adopted by r/CryptoCurrency for their distribution of Moons:", null, {
						hk: "4yB4lN"
					}))), f._param('=Double comment karma to encourage more comments than postsLimit karma earned from any individual post or comment to 1000Only count 10% of karma earned on "media" or "comedy" postsBonus Points for users who vote in polls15000 cap on Points earned by any single user per month', i.a.createElement("ul", null, f._('{=Double comment karma to encourage more comments than posts}{=Limit karma earned from any individual post or comment to 1000}{=Only count 10% of karma earned on "media" or "comedy" posts}{=Bonus Points for users who vote in polls}{=15000 cap on Points earned by any single user per month}', [f._param("=Double comment karma to encourage more comments than posts", i.a.createElement("li", null, f._("{=Double comment karma to encourage more comments than posts}", [f._param("=Double comment karma to encourage more comments than posts", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/k12wnd/moon_proposal_double_comment_karma/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("Double comment karma to encourage more comments than posts", null, {
						hk: "1paAA7"
					})))], {
						hk: "WOLmU"
					}))), f._param("=Limit karma earned from any individual post or comment to 1000", i.a.createElement("li", null, f._("{=Limit karma earned from any individual post or comment to 1000}", [f._param("=Limit karma earned from any individual post or comment to 1000", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm8she/limit_post_karma_to_1k_and_limit_comment_karma_to/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("Limit karma earned from any individual post or comment to 1000", null, {
						hk: "nwOAz"
					})))], {
						hk: "4DmNLs"
					}))), f._param('=Only count 10% of karma earned on "media" or "comedy" posts', i.a.createElement("li", null, f._('{=Only count 10% of karma earned on "media" or "comedy" posts}', [f._param('=Only count 10% of karma earned on "media" or "comedy" posts', i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/lm99v3/change_moon_distribution_for_comedy_posts_and/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._('Only count 10% of karma earned on "media" or "comedy" posts', null, {
						hk: "1nCJC"
					})))], {
						hk: "1EKmev"
					}))), f._param("=Bonus Points for users who vote in polls", i.a.createElement("li", null, f._("{=Bonus Points for users who vote in polls}", [f._param("=Bonus Points for users who vote in polls", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/m7ehzz/proposal_5_bonus_moons_for_anyone_who_votes_on/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("Bonus Points for users who vote in polls", null, {
						hk: "1FkqAB"
					})))], {
						hk: "4cT7Wr"
					}))), f._param("=15000 cap on Points earned by any single user per month", i.a.createElement("li", null, f._("{=15000 cap on Points earned by any single user per month}", [f._param("=15000 cap on Points earned by any single user per month", i.a.createElement("a", {
						href: "/r/CryptoCurrency/comments/mrn758/15000_karma_cap_on_moon_distribution/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, f._("15000 cap on Points earned by any single user per month", null, {
						hk: "4thwN8"
					})))], {
						hk: "3cC4wz"
					})))], {
						hk: "1SfbK0"
					}))), f._param("=In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:", i.a.createElement("p", null, f._("In addition to the community rules, Reddit sets some default rules to exclude the following from Community Point calculations and distribution:", null, {
						hk: "D09uq"
					}))), f._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)Karma earned on deleted posts and comments does not count (including karma earned before deletion)Karma earned on stickied or distinguished content does not countPermabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.Only votes within 3 days of a post's creation time are counted (including on comments of that post)", i.a.createElement("ul", null, f._("{=Karma earned on removed posts and comments does not count (including karma earned before removal)}{=Karma earned on deleted posts and comments does not count (including karma earned before deletion)}{=Karma earned on stickied or distinguished content does not count}{=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.}{=Only votes within 3 days of a post's creation time are counted (including on comments of that post)}", [f._param("=Karma earned on removed posts and comments does not count (including karma earned before removal)", i.a.createElement("li", null, f._("Karma earned on removed posts and comments does not count (including karma earned before removal)", null, {
						hk: "ZlIOC"
					}))), f._param("=Karma earned on deleted posts and comments does not count (including karma earned before deletion)", i.a.createElement("li", null, f._("Karma earned on deleted posts and comments does not count (including karma earned before deletion)", null, {
						hk: "2oO04d"
					}))), f._param("=Karma earned on stickied or distinguished content does not count", i.a.createElement("li", null, f._("Karma earned on stickied or distinguished content does not count", null, {
						hk: "3TdSZ1"
					}))), f._param("=Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", i.a.createElement("li", null, f._("Permabanned users are not eligible for Points distribution and do not appear on the distribution list. This includes users permanently banned by moderators from the community or banned from Reddit.", null, {
						hk: "4l6zkq"
					}))), f._param("=Only votes within 3 days of a post's creation time are counted (including on comments of that post)", i.a.createElement("li", null, f._("Only votes within 3 days of a post's creation time are counted (including on comments of that post)", null, {
						hk: "3TvDvq"
					})))], {
						hk: "HvF8L"
					})))], {
						hk: "Vg54o"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, f._("Deciding Community Rules", null, {
						hk: "2BDpM6"
					})), f._("{=Moderator teams collaborate with Reddit to design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls}", [f._param("=Moderator teams collaborate with Reddit to design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules throughGovernance Polls", i.a.createElement("p", null, f._("Moderator teams collaborate with Reddit to design an initial set of distribution rules for their subreddit when they launch Community Points. After Points have been launched, the community can continue to make changes to the distribution rules through {=Governance Polls}.", [f._param("=Governance Polls", i.a.createElement(h.a, {
						to: m("reputation-and-governance")
					}, f._("Governance Polls", null, {
						hk: "3A24Me"
					})))], {
						hk: "10UMvS"
					})))], {
						hk: "2URiNj"
					}))), null),
					"spam-and-abuse": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("img", {
						className: y.a.smallTitleImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/spam.png`,
						alt: O._("Community Points can help fight spam", null, {
							hk: "9z9e5"
						})
					}), i.a.createElement("h1", null, O._("Spam & Abuse", null, {
						hk: "1qZ0Kk"
					})), i.a.createElement("h2", null, O._("Community Points give communities smarter ways to fight spam and other abuse by punishing detrimental behavior.", null, {
						hk: "3lfcQE"
					})), O._("{=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.}{=Example rules that can be created include:}{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}{=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.}{=As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.}", [O._param("=As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", i.a.createElement("p", null, O._("As an incentive system, Community Points are a powerful tool. Properly designed, they can be used to limit spam and other types of abuse.", null, {
						hk: "38WJLw"
					}))), O._param("=Example rules that can be created include:", i.a.createElement("p", null, O._("Example rules that can be created include:", null, {
						hk: "3eylqc"
					}))), O._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", i.a.createElement("ul", null, O._("{=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.}{=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.}{=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.}{=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.}", [O._param("=Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", i.a.createElement("li", null, O._("Penalize people for spamming too many posts or comments. For example, making more than X posts or comments a day reduces Point earnings by 50% for that month.", null, {
						hk: "2tMNCa"
					}))), O._param("=Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", i.a.createElement("li", null, O._("Combine community flairs with token rules to incentivize higher quality content. For example, posts flaired as memes or low-effort content can be set to earn 10% of the Community Points that other posts receive.", null, {
						hk: "2fYsam"
					}))), O._param("=Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", i.a.createElement("li", null, O._("Require an account to be active in the community for some time period (e.g., 2 months) before they can earn Community Points. In that case, new accounts need to behave well to stay in the community, otherwise they will not earn Points.", null, {
						hk: "1fte1B"
					}))), O._param("=When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", i.a.createElement("li", null, O._("When calculating Contribution Scores, only count upvotes from users who have earned a certain number of Points in the community. For example, this disincentivizes brigading from outside of the community.", null, {
						hk: "1qeR2Z"
					})))], {
						hk: "38hDgb"
					}))), O._param("=The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", i.a.createElement("p", null, O._("The rules are flexible and customizable by each subreddit, so they can be tailored to the specific needs of your community.", null, {
						hk: "3MTosY"
					}))), O._param("=As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", i.a.createElement("p", null, O._("As always, Reddit's site-wide policies strictly prohibit many types of abuse, and we have dedicated teams and technology in place to detect and mitigate things such as spam and vote manipulation. Redditors who attempt to circumvent these rules may be temporarily or permanently banned from a community and/or the site.", null, {
						hk: "MzGJX"
					})))], {
						hk: "1jv9EK"
					})), null),
					"reputation-and-governance": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, B._("Reputation & Governance", null, {
						hk: "3VDDzY"
					})), i.a.createElement("h2", null, B._("Community Points represent a visible measure of reputation and enable a new type of weighted poll that can be used to make community decisions.", null, {
						hk: "Xc3Ow"
					})), B._("{=Community Points represent how much someone has contributed to the community and their say in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on their community. Just as mods play an essential role in communities, top participants and longtime members are recognized for their contributions with greater influence over community votes.}", [B._param("=Community Points represent how much someone has contributed to the community and their say in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on their community. Just as mods play an essential role in communities, top participants and longtime members are recognized for their contributions with greater influence over community votes.", i.a.createElement("p", null, B._("Community Points represent how much someone has contributed to the community and their say in it. The more contributions they provide, the more Points they will earn, and the more influence they should have on their community. Just as mods play an essential role in communities, top participants and longtime members are recognized for their contributions with greater influence over community votes.", null, {
						hk: "26qaee"
					})))], {
						hk: "1lMXbL"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, B._("Reputation", null, {
						hk: "2sh0G9"
					})), B._("{=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.}", [B._param("=In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", i.a.createElement("p", null, B._("In subreddits that have Community Points, we display Points balances next to usernames on posts and comment threads. This allows people to quickly identify the users who have been part of the community for the longest time and contributed the most.", null, {
						hk: "1zRy9m"
					})))], {
						hk: "2M3ArP"
					}), i.a.createElement("img", {
						className: y.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/reputation.png`,
						alt: B._("Example of how Community Points are displayed on comments", null, {
							hk: "3E0yXu"
						})
					}), B._("{=Because Community Points are on a publicblockchain , this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.}", [B._param("=Because Community Points are on a publicblockchain , this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", i.a.createElement("p", null, B._("Because Community Points are on a public {=blockchain} , this reputation is inherently portable. Users can display their reputation anywhere on the Internet, on and off of Reddit. For example, communities can add bots to show balances in the chat apps they use, and outside forums can restrict access to users who have earned a minimum number of Points across Reddit communities.", [B._param("=blockchain", i.a.createElement(h.a, {
						to: m("points-on-the-blockchain")
					}, B._("blockchain", null, {
						hk: "1kKQsK"
					})))], {
						hk: "41eHI4"
					})))], {
						hk: "2TyghT"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, B._("Weighted Polls", null, {
						hk: "4uCujA"
					})), B._("{=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.}{=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.}{=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through gifts or tips.}", [B._param("=People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", i.a.createElement("p", null, B._("People who have contributed more to the community and earned more Points are able to have a larger say in the direction that the community takes.", null, {
						hk: "2vYEEL"
					}))), B._param("=To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.", i.a.createElement("p", null, B._("To achieve this, subreddits with Community Points can create weighted polls, where results are shown by headcount (one user, one vote) as well as by weight (each vote is weighted by that user's Points). This allows the community to see what people think according to the contribution they have provided.", null, {
						hk: "39Guwa"
					}))), B._param("=When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through gifts or tips.", i.a.createElement("p", null, B._("When a vote is cast on a weighted poll, it is weighed by how many Points that user has earned and still holds. This means polls represent only Points earned directly through contribution, not Points received through gifts or tips.", null, {
						hk: "2bLhf8"
					})))], {
						hk: "P4MOE"
					}), i.a.createElement("img", {
						className: y.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/poll.png`,
						alt: B._("Example of a community poll", null, {
							hk: "CC6Sa"
						})
					}), B._("{=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of gifts or tips, their vote weight is still only 200.}{=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then gifting or tipping their Points for someone else to vote with.}{=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.}", [B._param("=Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of gifts or tips, their vote weight is still only 200.", i.a.createElement("p", null, B._("Specifically, this weight is the minimum of their total earned Points (Points that were minted directly to them) and their current Points balance. For example, if a user earned 1,000 Points but used 500 of them to buy perks, they have a current vote weight of 500. Similarly, if they earned 200 Points but now have 800 because of gifts or tips, their vote weight is still only 200.", null, {
						hk: "3uVrnt"
					}))), B._param("=Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then gifting or tipping their Points for someone else to vote with.", i.a.createElement("p", null, B._("Vote weights are based on Points balances at the time that the poll was created, not when the vote was cast. This prevents people from making a vote and then gifting or tipping their Points for someone else to vote with.", null, {
						hk: "Qmc5E"
					}))), B._param("=Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", i.a.createElement("p", null, B._("Subreddits with Community Points can opt for polls to be available to all users to create, or for only moderators to be able to create weighted polls.", null, {
						hk: "40s0oC"
					})))], {
						hk: "48BCiZ"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, B._("Community Governance", null, {
						hk: "440sui"
					})), B._("{=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.}{=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.}{=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.}{=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for rules that require nuanced community input.}", [B._param("=Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", i.a.createElement("p", null, B._("Weighted Polls can be specially marked as Governance Polls. These specially designated polls are used to make decisions about community governance, for example to give input on content rules or to make changes to Points distribution rules.", null, {
						hk: "2FyFSz"
					}))), B._param("=Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", i.a.createElement("p", null, B._("Governance Polls have a Decision Threshold that they must meet in order to pass. This is the minimum amount of weighted vote that the winning option must have for the poll to be considered approved by the community.", null, {
						hk: "LS6Tk"
					}))), B._param("=The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", i.a.createElement("p", null, B._("The Decision Threshold is set to a minimum of 10% of Points in a community and is updated algorithmically according to the activity on recent governance polls. As more votes are cast on Governance Polls, the Decision Threshold for future Governance Polls increases.", null, {
						hk: "3K5cOm"
					}))), B._param("=Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for rules that require nuanced community input.", i.a.createElement("p", null, B._("Governance Polls can be used to change distribution rules for Points or get input on other community decisions, such as content rules or flairs. They are enacted by Reddit in the case of distribution rules and the moderators for rules that require nuanced community input.", null, {
						hk: "3lh97y"
					})))], {
						hk: "40FHN1"
					}))), null),
					"special-memberships": i.a.createElement(() => {
						const e = Object(j.a)();
						return i.a.createElement("main", null, i.a.createElement("h1", null, W._("Special Memberships", null, {
							hk: "FgGID"
						})), i.a.createElement("h2", null, W._("Special Memberships let users show off their support to the community. Getting a Special Membership unlocks badges and other premium features in the community.", null, {
							hk: "4EV8yH"
						})), W._("{=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:}{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.}{=To see more details, check theSubreddit Membership page for r/CryptoCurrency.}", [W._param("=Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:", i.a.createElement("p", null, W._("Community Points can be used to purchase a Special Membership in the subreddit. Special Memberships come with several features:", null, {
							hk: "2RjnSj"
						}))), W._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.GIFs: Embed GIFs directly on Reddit, inside your comments.", i.a.createElement("ul", null, W._("{=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.}{=Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.}{=GIFs: Embed GIFs directly on Reddit, inside your comments.}", [W._param("=Badges: Personalize your presence on the subreddit and add a highlighted color to your username.", i.a.createElement("li", null, W._("{=Badges}: Personalize your presence on the subreddit and add a highlighted color to your username.", [W._param("=Badges", i.a.createElement("b", null, W._("Badges", null, {
							hk: "64JpW"
						})))], {
							hk: "1UlPKj"
						}))), W._param("=Animated emojis: Express yourself in a way that words can't, with emojis customized to that subreddit.", i.a.createElement("li", null, W._("{=Animated emojis}: Express yourself in a way that words can't, with emojis customized to that subreddit.", [W._param("=Animated emojis", i.a.createElement("b", null, W._("Animated emojis", null, {
							hk: "3JlmnL"
						})))], {
							hk: "17LrM"
						}))), W._param("=GIFs: Embed GIFs directly on Reddit, inside your comments.", i.a.createElement("li", null, W._("{=GIFs}: Embed GIFs directly on Reddit, inside your comments.", [W._param("=GIFs", i.a.createElement("b", null, W._("GIFs", null, {
							hk: "1nCu3Q"
						})))], {
							hk: "1qkBxd"
						})))], {
							hk: "45xOov"
						}))), W._param("=To see more details, check theSubreddit Membership page for r/CryptoCurrency.", i.a.createElement("p", null, W._("To see more details, check the {=Subreddit Membership} page for r/CryptoCurrency.", [W._param("=Subreddit Membership", i.a.createElement("a", {
							href: "/web/special-membership/cryptocurrency",
							target: "_blank",
							rel: "noopener noreferrer"
						}, W._("Subreddit Membership", null, {
							hk: "2CT5r6"
						})))], {
							hk: "1cN7rt"
						})))], {
							hk: "YU1NC"
						}), i.a.createElement("section", null, i.a.createElement("h3", null, W._("Badges & Emojis", null, {
							hk: "nhw27"
						})), i.a.createElement("div", {
							className: y.a.sideImageContainer
						}, i.a.createElement("div", null, W._('{=There are multiple badges that Special Members can display next to their username.}{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}{=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.}', [W._param("=There are multiple badges that Special Members can display next to their username.", i.a.createElement("p", null, W._("There are multiple badges that Special Members can display next to their username.", null, {
							hk: "38eZY8"
						}))), W._param('=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.', i.a.createElement("ul", null, W._('{=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.}{=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).}{=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.}', [W._param("=Loyalty Badge: The first badge represents how long the user has been supporting the subreddit as a paying member.", i.a.createElement("li", null, W._("{=Loyalty Badge}: The first badge represents how long the user has been supporting the subreddit as a paying member.", [W._param("=Loyalty Badge", i.a.createElement("b", null, W._("Loyalty Badge", null, {
							hk: "4ACOXt"
						})))], {
							hk: "1jiQJi"
						}))), W._param('=Achievement Badge: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', i.a.createElement("li", null, W._('{=Achievement Badge}: This is an optional badge that appears in the middle position. Members can receive it for different kinds of community achievements, such as winning a contest. Communities can also decide to make certain Achievement Badges available to all community members (e.g., "I Voted" Achievement Badges).', [W._param("=Achievement Badge", i.a.createElement("b", null, W._("Achievement Badge", null, {
							hk: "3VjA3"
						})))], {
							hk: "2O48La"
						}))), W._param("=Style Badge: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", i.a.createElement("li", null, W._("{=Style Badge}: This is an aesthetic badge that appears in the rightmost position. Members can choose this badge from their Badge Gallery, and their username is highlighted with a matching color.", [W._param("=Style Badge", i.a.createElement("b", null, W._("Style Badge", null, {
							hk: "1UZzGn"
						})))], {
							hk: "3G44zo"
						})))], {
							hk: "3uCxSx"
						}))), W._param("=For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", i.a.createElement("p", null, W._("For the initial subreddits opting into Community Points, Reddit will design Loyalty Badges and an initial set of Style Badges tailored for each community. After Community Points are launched in the community, creators can upload additional Style Badges and emojis. Moderators approve these community-created badges and emojis through a section in Mod Tools, and creators earn Community Points for each approved asset they make.", null, {
							hk: "4bju4t"
						})))], {
							hk: "3YpHOu"
						})), i.a.createElement("img", {
							src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/badges.png`,
							alt: W._("Example image of badges", null, {
								hk: "2J0eH9"
							})
						}))), i.a.createElement("section", null, i.a.createElement("h3", null, W._("Special Membership Price & Other Ways to Buy", null, {
							hk: "3gOExN"
						})), i.a.createElement("img", {
							className: y.a.largeCenteredImage,
							src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/membership_price.png`,
							alt: W._("Special Memberships price and ways to buy", null, {
								hk: "3UQ0wL"
							})
						}), W._("{=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll}{=In addition to using Community Points, people can also purchase Special Memberships for[Localized fiat price for Special Membership in a Community Points subreddit] /month. They can do this using Paypal on web (new Reddit) or via In-App Purchases on iOS or Android. When memberships are purchased with dollars, Community Points are burned from the Community Tank to provide the Special Membership status on-chain.}{=Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.}", [W._param("=The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using aGovernance Poll", i.a.createElement("p", null, W._("The initial price of Special Memberships is set to 1,000 Points/month. Communities can vote to update this price using a {=Governance Poll}.", [W._param("=Governance Poll", i.a.createElement(h.a, {
							to: m("reputation-and-governance")
						}, W._("Governance Poll", null, {
							hk: "3oruql"
						})))], {
							hk: "MJBrU"
						}))), W._param("=In addition to using Community Points, people can also purchase Special Memberships for[Localized fiat price for Special Membership in a Community Points subreddit] /month. They can do this using Paypal on web (new Reddit) or via In-App Purchases on iOS or Android. When memberships are purchased with dollars, Community Points are burned from the Community Tank to provide the Special Membership status on-chain.", i.a.createElement("p", null, W._("In addition to using Community Points, people can also purchase Special Memberships for {Localized fiat price for Special Membership in a Community Points subreddit} /month. They can do this using Paypal on web (new Reddit) or via In-App Purchases on iOS or Android. When memberships are purchased with dollars, Community Points are burned from the {=Community Tank} to provide the Special Membership status on-chain.", [W._param("Localized fiat price for Special Membership in a Community Points subreddit", Object(D.b)(500, {
							locale: e
						})), W._param("=Community Tank", i.a.createElement(h.a, {
							to: m("distribution-process")
						}, W._("Community Tank", null, {
							hk: "4jO44i"
						})))], {
							hk: "1ocYAK"
						}))), W._param("=Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.", i.a.createElement("p", null, W._("Note that Special Memberships are unrelated to Reddit Premium, which is a sitewide feature.", null, {
							hk: "El5r2"
						})))], {
							hk: "3M8Swv"
						})), i.a.createElement("section", null, i.a.createElement("h3", null, W._("Canceling Special Memberships", null, {
							hk: "zyegE"
						})), W._("{=It depends on how you bought your Special Membership:}{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [W._param("=It depends on how you bought your Special Membership:", i.a.createElement("p", null, W._("It depends on how you bought your Special Membership:", null, {
							hk: "1RJTU5"
						}))), W._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("ul", null, W._("{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special}{=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.}{=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.}{=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [W._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special", i.a.createElement("li", null, W._("If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to {=https://www.reddit.com/settings/special}.", [W._param("=https://www.reddit.com/settings/special", i.a.createElement("a", {
							href: "/settings/special",
							target: "_blank",
							rel: "noopener noreferrer"
						}, W._("https://www.reddit.com/settings/special", null, {
							hk: "1PDlKJ"
						})))], {
							hk: "4pz9Iy"
						}))), W._param("=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", i.a.createElement("li", null, W._("If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", null, {
							hk: "4a7nol"
						}))), W._param("=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", i.a.createElement("li", null, W._("If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", null, {
							hk: "45OGet"
						}))), W._param("=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("li", null, W._("If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
							hk: "nIifE"
						})))], {
							hk: "1F0Qej"
						})))], {
							hk: "1UAohK"
						})))
					}, null),
					"redeeming-points": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, F._("Redeeming Points", null, {
						hk: "RP9Na"
					})), i.a.createElement("h2", null, F._("When Community Points are redeemed by spending them on premium features, they are destroyed and removed from circulation.", null, {
						hk: "29Z0Vd"
					})), F._("{=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.}{=When people buy premium features with dollars, for example Special Memberships an equivalent amount of Points are burned from the Community Tank on behalf of that user.}{=Communities can also build their own use cases for redeeming Points, which can provide Points more utility. See theDevelopers section for more information.}", [F._param("=Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", i.a.createElement("p", null, F._("Redeemed Points are burned, or removed from circulation. Half of the burned Points in each 4-week period are reintroduced in the following distribution cycle.", null, {
						hk: "2dGCtk"
					}))), F._param("=When people buy premium features with dollars, for example Special Memberships an equivalent amount of Points are burned from the Community Tank on behalf of that user.", i.a.createElement("p", null, F._("When people buy premium features with dollars, for example {=Special Memberships}, an equivalent amount of Points are burned from the {=Community Tank} on behalf of that user.", [F._param("=Special Memberships", i.a.createElement(h.a, {
						to: m("special-memberships")
					}, F._("Special Memberships", null, {
						hk: "2hCCk2"
					}))), F._param("=Community Tank", i.a.createElement(h.a, {
						to: m("distribution-process")
					}, F._("Community Tank", null, {
						hk: "2ilKac"
					})))], {
						hk: "2vfndy"
					}))), F._param("=Communities can also build their own use cases for redeeming Points, which can provide Points more utility. See theDevelopers section for more information.", i.a.createElement("p", null, F._("Communities can also build their own use cases for redeeming Points, which can provide Points more utility. See the {=Developers} section for more information.", [F._param("=Developers", i.a.createElement(h.a, {
						to: m("developers")
					}, F._("Developers", null, {
						hk: "16GD2S"
					})))], {
						hk: "1uUwIB"
					})))], {
						hk: "4i0Vfs"
					})), null),
					"points-and-automoderator": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, N._("Points & Automoderator", null, {
						hk: "4qE8Kd"
					})), i.a.createElement("h2", null, N._("Community Points can be used in conjunction with Automoderator to create rules based on users' Points balances and Special Membership status.", null, {
						hk: "1id0Ri"
					})), i.a.createElement("p", null, N._("Subreddits can use Community Points information in their Automod rules. Specifically, they can use the following rules:", null, {
						hk: "2m6VU8"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor: has_special_membership: true | false\nspecial_membership_age: > 1 day\npoints_balance: > 10000000000000 # in wei\nlocked_points_balance: > 10000000000000 # in wei\n---")), i.a.createElement("p", null, N._("Locked points is the total number of Points the user has directly earned in the community to date.", null, {
						hk: "3B9CVv"
					})), i.a.createElement("h3", null, N._("Examples", null, {
						hk: "33UWVC"
					})), i.a.createElement("p", null, N._("Restrict commenting on a Core Contributors Discussion Thread only to Points holders.", null, {
						hk: "3r0Bj3"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: comment\naction: remove\n---\nauthor: automod\ntitle (starts-with): Core Contributors Discussion Thread\nset_flair: Discussion\n---")), i.a.createElement("p", null, N._("Put submissions from users with 0 balance into the mod queue.", null, {
						hk: "36MzYX"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    points_balance: 0\nparent_submission:\n    title (starts-with): Core Contributors Discussion Thread\n    flair_text: Discussion\ntype: submission\naction: filter\nmessage_subject: Pending Approval\nmessage: Our apologies, but in order to limit spam your submission has been automatically removed and is pending moderator approval.\nmodmail_subject: Post From Young Account\nmodmail: /u/{{author}}'s [{{kind}}]({{permalink}}) is pending moderator approval. Please visit the moderation queue to review the post.\n---")), i.a.createElement("p", null, N._("Thank Special Members for supporting the community.", null, {
						hk: "43lDxM"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "---\nauthor:\n    has_special_membership: true\ntype: submission\ncomment_stickied: true\ncomment_locked: true\ncomment: {{author}}, thank you for supporting the community!\n---"))), null),
					"points-on-the-blockchain": i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, A._("Points on the Blockchain", null, {
						hk: "2Fk8CU"
					})), i.a.createElement("h2", null, A._("What makes Community Points unique is that they live on a public blockchain. People's Points are theirs and can be used anywhere they want on the Internet where Points are supported.", null, {
						hk: "3ldDbf"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("How does the blockchain work?", null, {
						hk: "2Ctp6v"
					})), A._("{=A public blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes public blockchains unique is that they are not owned or controlled by any single entity. Instead, public blockchains are maintained by a network of participants who coordinate together.}{=Community Points are built to be interoperable with the Ethereum blockchain. They are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships, which leverage existing standards of the Ethereum ecosystem.}{=Under the hood, an individual user's Points belong to a specific address on the blockchain. This address is created when they set up their Vault, and the address (along with everything it has in it) can only be controlled by them.}", [A._param("=A public blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes public blockchains unique is that they are not owned or controlled by any single entity. Instead, public blockchains are maintained by a network of participants who coordinate together.", i.a.createElement("p", null, A._("A public blockchain is a decentralized infrastructure layer that can store data and process transactions. What makes public blockchains unique is that they are not owned or controlled by any single entity. Instead, public blockchains are maintained by a network of participants who coordinate together.", null, {
						hk: "2MB2jn"
					}))), A._param("=Community Points are built to be interoperable with the Ethereum blockchain. They are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships, which leverage existing standards of the Ethereum ecosystem.", i.a.createElement("p", null, A._("Community Points are built to be interoperable with the Ethereum blockchain. They are run by a suite of smart contracts that manage balances, Points distribution, and purchasing Special Memberships, which leverage existing standards of the Ethereum ecosystem.", null, {
						hk: "1VXcq"
					}))), A._param("=Under the hood, an individual user's Points belong to a specific address on the blockchain. This address is created when they set up their Vault, and the address (along with everything it has in it) can only be controlled by them.", i.a.createElement("p", null, A._("Under the hood, an individual user's Points belong to a specific address on the blockchain. This address is created when they set up their {=Vault}, and the address (along with everything it has in it) can only be controlled by them.", [A._param("=Vault", i.a.createElement(h.a, {
						to: m("vault")
					}, A._("Vault", null, {
						hk: "4kFoTn"
					})))], {
						hk: "2el0WG"
					})))], {
						hk: "3grt5p"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("What are the benefits of the blockchain?", null, {
						hk: "1bEK24"
					})), A._("{=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:}{=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.}{=Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules or subreddit rules.}", [A._param("=Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:", i.a.createElement("p", null, A._("Think of the blockchain as a public database that anyone can see and use. This gives Community Points several key benefits:", null, {
						hk: "1IoaCZ"
					}))), A._param("=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", i.a.createElement("ul", null, A._("{=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.}{=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.}{=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.}", [A._param("=Ownership. Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.", i.a.createElement("li", null, A._("{=Ownership.} Things on the blockchain can only be controlled by the user who holds them. This means no powerful centralized entity can take users' Points away.", [A._param("=Ownership.", i.a.createElement("b", null, A._("Ownership.", null, {
						hk: "4DYh4u"
					})))], {
						hk: "8ObYY"
					}))), A._param("=Openness & Portability. The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.", i.a.createElement("li", null, A._("{=Openness & Portability.} The blockchain is always publicly available to anyone on the Internet, and it can be integrated into any app or website. This means people can use their Points off of Reddit on apps that support them.", [A._param("=Openness & Portability.", i.a.createElement("b", null, A._("Openness & Portability.", null, {
						hk: "LnzYJ"
					})))], {
						hk: "16H9r3"
					}))), A._param("=Transparency. The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", i.a.createElement("li", null, A._("{=Transparency.} The blockchain maintains a public record of all balances and transactions. The data is available to anyone, not siloed within a single company's systems.", [A._param("=Transparency.", i.a.createElement("b", null, A._("Transparency.", null, {
						hk: "2F38RS"
					})))], {
						hk: "2b2P3H"
					})))], {
						hk: "1InMQl"
					}))), A._param("=Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules or subreddit rules.", i.a.createElement("p", null, A._("Note that Reddit's site-wide and subreddit rules apply to your activity on Reddit. So while Reddit can't take your Points away, you may be unable to use them on our services if you break site rules or subreddit rules.", null, {
						hk: "1oDfO6"
					})))], {
						hk: "24zkNi"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("Which blockchain does Community Points live on? Why and how did we get here?", null, {
						hk: "22c2ae"
					})), A._('{=The blockchain network that Community Points live on isArbitrum Nova . This is a scaling solution on top of theEthereum mainnet. Ethereum is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.}{=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Ethereum\'s high transaction fees and limited scalability is a very well-known problem. Putting all Reddit users directly on the main Ethereum network, for example, would currently be infeasible and prohibitively expensive. Therefore, we have researched heavily into solutions that are decentralized, secure and yet highly scalable.}{=Reddit has been building Community Points over the years with extensive community input. In 2020, wepartnered with the Ethereum Foundation to research scaling solutions to support Community Points. That same year, we also issued a call to the crypto community to present their best scaling options for Community Points, and Offchain Labs—the developer team supporting the Arbitrum network—won. In 2021, while working closely with Offchain Labs, we launched a layer-2 scaling network for Community Points using Arbitrum optimistic rollups technology in test mode. In 2022, we finally moved Community Points to mainnet on Arbitrum Nova.}{=Arbitrum Nova is built on top of Ethereum. This enables it to apply scaling technologies that enable ultra-low-cost transactions, very high energy efficiency and strong security guarantees. While the transactions are executed on Arbitrum Nova, they are "settled" or guaranteed with the security properties of the Ethereum mainnet itself. Nova also functions similar to Ethereum, i.e. applications that work on Ethereum can also work on Arbitrum Nova. More information on the technology behind Arbitrum Nova can be found on theirdocumentation page .}', [A._param("=The blockchain network that Community Points live on isArbitrum Nova . This is a scaling solution on top of theEthereum mainnet. Ethereum is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", i.a.createElement("p", null, A._("The blockchain network that Community Points live on is {=Arbitrum Nova} . This is a scaling solution on top of the {=Ethereum} mainnet. Ethereum is a general-purpose blockchain with smart contracts that enable programmable tokens, like Community Points.", [A._param("=Arbitrum Nova", i.a.createElement("a", {
						href: "http://nova.arbitrum.io/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("Arbitrum Nova", null, {
						hk: "EXocV"
					}))), A._param("=Ethereum", i.a.createElement("a", {
						href: "https://ethereum.org/en/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("Ethereum", null, {
						hk: "47EKJ2"
					})))], {
						hk: "2F5UVq"
					}))), A._param("=Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Ethereum's high transaction fees and limited scalability is a very well-known problem. Putting all Reddit users directly on the main Ethereum network, for example, would currently be infeasible and prohibitively expensive. Therefore, we have researched heavily into solutions that are decentralized, secure and yet highly scalable.", i.a.createElement("p", null, A._("Blockchains are a relatively new technology. In their current implementations, they have very limited capacity and bandwidth. Ethereum's high transaction fees and limited scalability is a very well-known problem. Putting all Reddit users directly on the main Ethereum network, for example, would currently be infeasible and prohibitively expensive. Therefore, we have researched heavily into solutions that are decentralized, secure and yet highly scalable.", null, {
						hk: "4CS3P8"
					}))), A._param("=Reddit has been building Community Points over the years with extensive community input. In 2020, wepartnered with the Ethereum Foundation to research scaling solutions to support Community Points. That same year, we also issued a call to the crypto community to present their best scaling options for Community Points, and Offchain Labs—the developer team supporting the Arbitrum network—won. In 2021, while working closely with Offchain Labs, we launched a layer-2 scaling network for Community Points using Arbitrum optimistic rollups technology in test mode. In 2022, we finally moved Community Points to mainnet on Arbitrum Nova.", i.a.createElement("p", null, A._("Reddit has been building Community Points over the years with extensive community input. In 2020, we {=partnered} with the Ethereum Foundation to research scaling solutions to support Community Points. That same year, we also issued a call to the crypto community to present their best scaling options for Community Points, and Offchain Labs—the developer team supporting the Arbitrum network—won. In 2021, while working closely with Offchain Labs, we launched a layer-2 scaling network for Community Points using Arbitrum optimistic rollups technology in test mode. In 2022, we finally moved Community Points to mainnet on Arbitrum Nova.", [A._param("=partnered", i.a.createElement("a", {
						href: "https://www.reddit.com/r/ethereum/comments/l6c3kx/reddit_announces_partnership_with_the_ethereum/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("partnered", null, {
						hk: "14qFix"
					})))], {
						hk: "3Wsrh0"
					}))), A._param('=Arbitrum Nova is built on top of Ethereum. This enables it to apply scaling technologies that enable ultra-low-cost transactions, very high energy efficiency and strong security guarantees. While the transactions are executed on Arbitrum Nova, they are "settled" or guaranteed with the security properties of the Ethereum mainnet itself. Nova also functions similar to Ethereum, i.e. applications that work on Ethereum can also work on Arbitrum Nova. More information on the technology behind Arbitrum Nova can be found on theirdocumentation page .', i.a.createElement("p", null, A._('Arbitrum Nova is built on top of Ethereum. This enables it to apply scaling technologies that enable ultra-low-cost transactions, very high energy efficiency and strong security guarantees. While the transactions are executed on Arbitrum Nova, they are "settled" or guaranteed with the security properties of the Ethereum mainnet itself. Nova also functions similar to Ethereum, i.e. applications that work on Ethereum can also work on Arbitrum Nova. More information on the technology behind Arbitrum Nova can be found on their {=documentation page} .', [A._param("=documentation page", i.a.createElement("a", {
						href: "https://developer.arbitrum.io/docs/anytrust",
						target: "_blank",
						rel: "noopener noreferrer"
					}, A._("documentation page", null, {
						hk: "1Bbhmg"
					})))], {
						hk: "CuVDf"
					})))], {
						hk: "2bBdzX"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, A._("What is gas and who's paying for it?", null, {
						hk: "2msp8K"
					})), A._('{=Transactions on any Ethereum-like network (such as Arbitrum Nova) cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). While Arbitrum Nova has significantly lower fees than other networks, there are still fees that need to be paid to use Community Points on mainnet. For now, Reddit will cover gas costs for distributing Points to users and allowing them to spend Points on features such as Special Memberships.}', [A._param('=Transactions on any Ethereum-like network (such as Arbitrum Nova) cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). While Arbitrum Nova has significantly lower fees than other networks, there are still fees that need to be paid to use Community Points on mainnet. For now, Reddit will cover gas costs for distributing Points to users and allowing them to spend Points on features such as Special Memberships.', i.a.createElement("p", null, A._('Transactions on any Ethereum-like network (such as Arbitrum Nova) cost "gas," which are micro amounts of Ethereum\'s native cryptocurrency (Ether). While Arbitrum Nova has significantly lower fees than other networks, there are still fees that need to be paid to use Community Points on mainnet. For now, Reddit will cover gas costs for distributing Points to users and allowing them to spend Points on features such as Special Memberships.', null, {
						hk: "19YnHt"
					})))], {
						hk: "jfzqF"
					}))), null),
					tipping: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, _._("Gifting & Tipping", null, {
						hk: "4wBKp5"
					})), i.a.createElement("h2", null, _._("Community Points can be gifted or tipped to other community members for their contributions to the community.", null, {
						hk: "29lQgM"
					})), _._("{=If someone makes a great post or comment or bot for the community, you can gift or tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.}", [_._param("=If someone makes a great post or comment or bot for the community, you can gift or tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", i.a.createElement("p", null, _._("If someone makes a great post or comment or bot for the community, you can gift or tip them with Points. Just tap on their user avatar or Points balance and choose the option from the menu.", null, {
						hk: "1LRzVY"
					})))], {
						hk: "48Orj"
					}), i.a.createElement("img", {
						className: y.a.largeCenteredImage,
						src: `${n.a.assetPath}/img/communityPoints/landingPage/docs/user_card.png`,
						alt: _._("Tipping Community Points", null, {
							hk: "2otVJZ"
						})
					}), i.a.createElement("section", null, i.a.createElement("h3", null, _._("Restrictions", null, {
						hk: "3gkyfB"
					})), _._("{=Points are intended to be used within your community. When Points are initially created for a community, the community currently exists on Reddit. To ensure Points are only used within the community, Points can only be gifted and tipped to other community members' Vaults. Points cannot be transferred outside of Vault (i.e., to external blockchain addresses).}{=Points are also intended to be used as reputation and community governance points (like karma) in your community on Reddit (and anywhere else that supports them). Points are not an investment opportunity, and any exchanging, listing, selling, or trading of Points is against Reddit'sPreviews Terms of Use . Violations of these terms, as well as site-wide and subreddit rules, can result in you being suspended or banned from being able to access features relating to Points on Reddit.}", [_._param("=Points are intended to be used within your community. When Points are initially created for a community, the community currently exists on Reddit. To ensure Points are only used within the community, Points can only be gifted and tipped to other community members' Vaults. Points cannot be transferred outside of Vault (i.e., to external blockchain addresses).", i.a.createElement("p", null, _._("Points are intended to be used within your community. When Points are initially created for a community, the community currently exists on Reddit. To ensure Points are only used within the community, Points can only be gifted and tipped to other community members' Vaults. Points cannot be transferred outside of Vault (i.e., to external blockchain addresses).", null, {
						hk: "1jR3PQ"
					}))), _._param("=Points are also intended to be used as reputation and community governance points (like karma) in your community on Reddit (and anywhere else that supports them). Points are not an investment opportunity, and any exchanging, listing, selling, or trading of Points is against Reddit'sPreviews Terms of Use . Violations of these terms, as well as site-wide and subreddit rules, can result in you being suspended or banned from being able to access features relating to Points on Reddit.", i.a.createElement("p", null, _._("Points are also intended to be used as reputation and community governance points (like karma) in your community on Reddit (and anywhere else that supports them). Points are not an investment opportunity, and any exchanging, listing, selling, or trading of Points is against Reddit's {=Previews Terms of Use} . Violations of these terms, as well as site-wide and subreddit rules, can result in you being suspended or banned from being able to access features relating to Points on Reddit.", [_._param("=Previews Terms of Use", i.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank",
						rel: "noopener noreferrer"
					}, _._("Previews Terms of Use", null, {
						hk: "FHwEE"
					})))], {
						hk: "4oRwN4"
					})))], {
						hk: "3MqSUP"
					}))), null),
					vault: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, L._("Vault", null, {
						hk: "JRmsq"
					})), i.a.createElement("h2", null, L._("The Vault is an embedded digital wallet in the Reddit app and the home for Community Points.", null, {
						hk: "3mlz88"
					})), L._("{=Reddit Vault is a digital wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app. In your Vault, you can view Community Points from multiple subreddits, gift or tip them to other users, and spend them on things like Special Memberships.}{=The Vault corresponds to a public blockchain address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).}", [L._param("=Reddit Vault is a digital wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app. In your Vault, you can view Community Points from multiple subreddits, gift or tip them to other users, and spend them on things like Special Memberships.", i.a.createElement("p", null, L._("Reddit Vault is a digital wallet developed by Reddit to help users manage their Community Points from inside of the Reddit app. In your Vault, you can view Community Points from multiple subreddits, gift or tip them to other users, and spend them on things like Special Memberships.", null, {
						hk: "Nsitn"
					}))), L._param("=The Vault corresponds to a public blockchain address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", i.a.createElement("p", null, L._("The Vault corresponds to a public blockchain address. This is the address on the blockchain where your Community Points are stored and that you control. You can see the address by going into your Vault settings (3 dots at the top of the Vault screen).", null, {
						hk: "2KYdTI"
					})))], {
						hk: "BHoaY"
					}), i.a.createElement("section", null, i.a.createElement("h3", null, L._("Create a Vault", null, {
						hk: "1h3rBm"
					})), L._("{=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.}{=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Arbitrum Nova network and Ethereum-compatible blockchains where the record of your Community Points is stored.}{=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.}", [L._param("=Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", i.a.createElement("p", null, L._("Users who are subscribed to subreddits with Community Points should see Vault in the app menu on the official Reddit Android & iOS apps. When you open Vault for the first time, you will be prompted to create a Vault or restore one that you created earlier.", null, {
						hk: "2XiJTS"
					}))), L._param("=When you create your Vault, you will receive a public address and a private key. The public address is your address on the Arbitrum Nova network and Ethereum-compatible blockchains where the record of your Community Points is stored.", i.a.createElement("p", null, L._("When you create your Vault, you will receive a public address and a private key. The public address is your address on the Arbitrum Nova network and Ethereum-compatible blockchains where the record of your Community Points is stored.", null, {
						hk: "3eVL51"
					}))), L._param("=This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.", i.a.createElement("p", null, L._("This private key is very important. Whoever has the private key will be able to have full control over your Community Points, and if you lose the private key you could lose access to your Community Points. For that reason, it's very important to make sure it is stored securely and properly backed up.", null, {
						hk: "1sAkQe"
					})))], {
						hk: "3SJqgH"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, L._("Backup & Recovery", null, {
						hk: "4f33gk"
					})), L._("{=You have two options to back up your private key.}{=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.}{=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault. Keep this safe — we recommend using a password manager like LastPass.}{=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.}{=There are two corresponding ways to recover your Vault.}{=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.}{=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.}{=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized Every time you create or recover a Vault, it is immediately set as your active Vault.}", [L._param("=You have two options to back up your private key.", i.a.createElement("p", null, L._("You have two options to back up your private key.", null, {
						hk: "3enCSx"
					}))), L._param("=The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", i.a.createElement("p", null, L._("The first option is to back it up in a secure way with Reddit. In this option, you encrypt your private key with a unique Vault Password that only you know (separate from your Reddit password) and store the encrypted version on Reddit. Since it is encrypted, Reddit is not able to see your private key and cannot use it.", null, {
						hk: "1v55Px"
					}))), L._param("=The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault. Keep this safe — we recommend using a password manager like LastPass.", i.a.createElement("p", null, L._("The second option is to save a Recovery Phrase somewhere secure. The recovery phrase is 12 words in a particular order that can be used to recreate your private key within Vault. Keep this safe — we recommend using a password manager like LastPass.", null, {
						hk: "3jivE0"
					}))), L._param("=It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.", i.a.createElement("p", null, L._("It is very important that you never give your Vault Password or Recovery Phrase to anyone else, ever. No Reddit employee will ever ask you for either of them.", null, {
						hk: "43SfJy"
					}))), L._param("=There are two corresponding ways to recover your Vault.", i.a.createElement("p", null, L._("There are two corresponding ways to recover your Vault.", null, {
						hk: "2738oW"
					}))), L._param("=You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", i.a.createElement("p", null, L._("You can recover Vaults that you backed up with Reddit through the Vault signup flow. When you go to create a new Vault, you will be presented with older Vaults that you made that are backed up with Reddit. If you choose to recover one of those, you will be prompted for the password you set when you created it. If you want to switch to another Vault, you can sign out of your current Vault through the settings.", null, {
						hk: "1EJFvM"
					}))), L._param("=You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", i.a.createElement("p", null, L._("You can also recover a Vault using the Recovery Phrase. When you start to create a Vault, you will see an option to use your Recovery Phrase. Enter in the 12 words in the same order that they were provided when you first created the Vault.", null, {
						hk: "2itpCz"
					}))), L._param("=Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is finalized Every time you create or recover a Vault, it is immediately set as your active Vault.", i.a.createElement("p", null, L._("Note that you can only have one active Vault at any time. In each distribution, your Community Points will be sent to the Vault that is actively associated with your account at the time that distribution is {=finalized}. Every time you create or recover a Vault, it is immediately set as your active Vault.", [L._param("=finalized", i.a.createElement(h.a, {
						to: m("distribution-process")
					}, L._("finalized", null, {
						hk: "1dzDzu"
					})))], {
						hk: "XS1ov"
					})))], {
						hk: "31FNqU"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, L._("Using Vault on web", null, {
						hk: "4lZpy1"
					})), L._("{=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.}{=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.}{=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.}", [L._param("=Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", i.a.createElement("p", null, L._("Users who have backed up their Vault to Reddit servers with a password can also use their Vault on desktop web (new Reddit). For example, you can sign up for Special Memberships and send Points to other users.", null, {
						hk: "3Q0UIE"
					}))), L._param("=When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", i.a.createElement("p", null, L._("When you use your Points on web, your encrypted key is downloaded to your browser and you will be prompted for the password you used to create it.", null, {
						hk: "1dq5v2"
					}))), L._param("=If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", i.a.createElement("p", null, L._("If you would like to use your Vault on web, but have not backed up your Vault to Reddit servers, you can create a backup by going to Vault Settings on your mobile device.", null, {
						hk: "1tITN"
					})))], {
						hk: "1xjedp"
					}))), null),
					developers: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, d._("Developers", null, {
						hk: "4o6AOj"
					})), i.a.createElement("h2", null, d._("Developers can build on top of Community Points today. Make bots that work with Community Points or embed Community Points in apps outside of Reddit.", null, {
						hk: "3KXAiI"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, d._("Blockchain Resources", null, {
						hk: "325QLM"
					})), d._("{=Developers can interact directly with Community Points through standard blockchain tools and protocols since the Arbitrum Nova network is compatible with most Ethereum tools.}{=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.}", [d._param("=Developers can interact directly with Community Points through standard blockchain tools and protocols since the Arbitrum Nova network is compatible with most Ethereum tools.", i.a.createElement("p", null, d._("Developers can interact directly with Community Points through standard blockchain tools and protocols since the Arbitrum Nova network is compatible with most Ethereum tools.", null, {
						hk: "49LzY7"
					}))), d._param("=For developers who are new to blockchain, theEthereum developer docs are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", i.a.createElement("p", null, d._("For developers who are new to blockchain, the {=Ethereum developer docs} are a good place to start. Once you have an understanding of the core principles and main tools used in blockchain development, you can start to work with Community Points.", [d._param("=Ethereum developer docs", i.a.createElement("a", {
						href: "https://ethereum.org/en/developers/docs/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("Ethereum developer docs", null, {
						hk: "1Uy8fE"
					})))], {
						hk: "4fCWiq"
					})))], {
						hk: "GQwQP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, d._("Interacting with Arbitrum Nova Mainnet", null, {
						hk: "2jDz6w"
					})), d._("{=As mentioned before, the network works similar to Ethereum and is compatible with most Ethereum tools.}{=To interact with the scaling network, developers can use the following resources:}{=JSON-RPC endpoint:https://nova.arbitrum.io/rpcThis allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.Block Explorer:https://nova-explorer.arbitrum.io/This is an interface to see transactions and balances on the scaling network.Chain ID: 42170Developer Docs:https://developer.arbitrum.io/docs/anytrust}", [d._param("=As mentioned before, the network works similar to Ethereum and is compatible with most Ethereum tools.", i.a.createElement("p", null, d._("As mentioned before, the network works similar to Ethereum and is compatible with most Ethereum tools.", null, {
						hk: "1ZI6oh"
					}))), d._param("=To interact with the scaling network, developers can use the following resources:", i.a.createElement("p", null, d._("To interact with the scaling network, developers can use the following resources:", null, {
						hk: "15FAFZ"
					}))), d._param("=JSON-RPC endpoint:https://nova.arbitrum.io/rpcThis allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.Block Explorer:https://nova-explorer.arbitrum.io/This is an interface to see transactions and balances on the scaling network.Chain ID: 42170Developer Docs:https://developer.arbitrum.io/docs/anytrust", i.a.createElement("ul", null, d._("{=JSON-RPC endpoint:https://nova.arbitrum.io/rpcThis allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.}{=Block Explorer:https://nova-explorer.arbitrum.io/This is an interface to see transactions and balances on the scaling network.}{=Chain ID: 42170}{=Developer Docs:https://developer.arbitrum.io/docs/anytrust}", [d._param("=JSON-RPC endpoint:https://nova.arbitrum.io/rpcThis allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.", i.a.createElement("li", null, d._("JSON-RPC endpoint: {=https://nova.arbitrum.io/rpc}{=This allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.}", [d._param("=https://nova.arbitrum.io/rpc", i.a.createElement("a", {
						href: "https://nova.arbitrum.io/rpc",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("https://nova.arbitrum.io/rpc", null, {
						hk: "3qM0oE"
					}))), d._param("=This allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.", i.a.createElement("ul", null, d._("{=This allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.}", [d._param("=This allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.", i.a.createElement("li", null, d._("This allows developers to use an Arbitrum Nova node to issue commands and read from the scaling network.", null, {
						hk: "4F9W5s"
					})))], {
						hk: "adqRQ"
					})))], {
						hk: "3UXFfd"
					}))), d._param("=Block Explorer:https://nova-explorer.arbitrum.io/This is an interface to see transactions and balances on the scaling network.", i.a.createElement("li", null, d._("Block Explorer: {=https://nova-explorer.arbitrum.io/}{=This is an interface to see transactions and balances on the scaling network.}", [d._param("=https://nova-explorer.arbitrum.io/", i.a.createElement("a", {
						href: "https://nova-explorer.arbitrum.io/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("https://nova-explorer.arbitrum.io/", null, {
						hk: "22YKN5"
					}))), d._param("=This is an interface to see transactions and balances on the scaling network.", i.a.createElement("ul", null, d._("{=This is an interface to see transactions and balances on the scaling network.}", [d._param("=This is an interface to see transactions and balances on the scaling network.", i.a.createElement("li", null, d._("This is an interface to see transactions and balances on the scaling network.", null, {
						hk: "2zR214"
					})))], {
						hk: "2ei1Cc"
					})))], {
						hk: "3zW6yW"
					}))), d._param("=Chain ID: 42170", i.a.createElement("li", null, d._("Chain ID: 42170", null, {
						hk: "KCw9C"
					}))), d._param("=Developer Docs:https://developer.arbitrum.io/docs/anytrust", i.a.createElement("li", null, d._("Developer Docs: {=https://developer.arbitrum.io/docs/anytrust}", [d._param("=https://developer.arbitrum.io/docs/anytrust", i.a.createElement("a", {
						href: "https://developer.arbitrum.io/docs/anytrust",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("https://developer.arbitrum.io/docs/anytrust", null, {
						hk: "2fBgMn"
					})))], {
						hk: "3FkZEs"
					})))], {
						hk: "1CptTc"
					})))], {
						hk: "2csEbW"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, d._("Smart Contracts", null, {
						hk: "1vFnYB"
					})), d._("{=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.}{=As a reference, here is the contract code from implementation contracts on our scaling network:}{=SubredditPoints.solSubscriptions.solDistributions.sol}{=And here are some existing token addresses:}{=MoonsBricks}", [d._param("=Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", i.a.createElement("p", null, d._("Community Points are managed by 3 smart contracts written in Solidity and deployed on the scaling network.", null, {
						hk: "2PsEBQ"
					}))), d._param("=As a reference, here is the contract code from implementation contracts on our scaling network:", i.a.createElement("p", null, d._("As a reference, here is the contract code from implementation contracts on our scaling network:", null, {
						hk: "4q4QB5"
					}))), d._param("=SubredditPoints.solSubscriptions.solDistributions.sol", i.a.createElement("ul", null, d._("{=SubredditPoints.sol}{=Subscriptions.sol}{=Distributions.sol}", [d._param("=SubredditPoints.sol", i.a.createElement("li", null, d._("{=SubredditPoints.sol}", [d._param("=SubredditPoints.sol", i.a.createElement("a", {
						href: "https://nova-explorer.arbitrum.io/address/0x9ee3c4A6AC9D95f9Def69c106849F207114F7F09/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("SubredditPoints.sol", null, {
						hk: "1n1w5A"
					})))], {
						hk: "1gqWoV"
					}))), d._param("=Subscriptions.sol", i.a.createElement("li", null, d._("{=Subscriptions.sol}", [d._param("=Subscriptions.sol", i.a.createElement("a", {
						href: "https://nova-explorer.arbitrum.io/address/0xA7B6d93bF23D524eB685B63fF5bb4F7248a57a5e/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("Subscriptions.sol", null, {
						hk: "3EF99b"
					})))], {
						hk: "3HpTTS"
					}))), d._param("=Distributions.sol", i.a.createElement("li", null, d._("{=Distributions.sol}", [d._param("=Distributions.sol", i.a.createElement("a", {
						href: "https://nova-explorer.arbitrum.io/address/0x6aB3Bb996290033A8161A0fbeDAD940bb0c1A60A/contracts",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("Distributions.sol", null, {
						hk: "3nvq52"
					})))], {
						hk: "3mO9yY"
					})))], {
						hk: "1nTW4M"
					}))), d._param("=And here are some existing token addresses:", i.a.createElement("p", null, d._("And here are some existing token addresses:", null, {
						hk: "tVQEH"
					}))), d._param("=MoonsBricks", i.a.createElement("ul", null, d._("{=Moons}{=Bricks}", [d._param("=Moons", i.a.createElement("li", null, d._("{=Moons}", [d._param("=Moons", i.a.createElement("a", {
						href: "https://nova-explorer.arbitrum.io/token/0x0057Ac2d777797d31CD3f8f13bF5e927571D6Ad0/token-transfers",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("Moons", null, {
						hk: "1Y7pbO"
					})))], {
						hk: "26dSzK"
					}))), d._param("=Bricks", i.a.createElement("li", null, d._("{=Bricks}", [d._param("=Bricks", i.a.createElement("a", {
						href: "https://nova-explorer.arbitrum.io/token/0x6DcB98f460457fe4952e12779Ba852F82eCC62C1/token-transfers",
						target: "_blank",
						rel: "noopener noreferrer"
					}, d._("Bricks", null, {
						hk: "1fSgq1"
					})))], {
						hk: "1cXi8J"
					})))], {
						hk: "3tvQW0"
					})))], {
						hk: "16Kt91"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, d._("Community Points API", null, {
						hk: "2HYKPs"
					})), i.a.createElement("p", null, d._("To get users' addresses and balances, you can use this API.", null, {
						hk: "3fql24"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, "GET https://meta-api.reddit.com/wallets/{subredditId}\n\nParams:\n@subredditId: Path parameter. The t5_* ID of the subreddit. It can be found from ", i.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_r_{subreddit}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/r/{subreddit}/about"), ".", "\n@userIds: Query parameter. Comma-separated list of user IDs in t2_* format. These IDs can be found from ", i.a.createElement("a", {
						href: "https://www.reddit.com/dev/api/#GET_user_{username}_about",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "/user/{username}/about"))), i.a.createElement("p", null, d._("For example:", null, {
						hk: "2DPko9"
					})), i.a.createElement("pre", null, i.a.createElement("code", null, 'GET https://meta-api.reddit.com/wallets/t5_2wlj3?userIds=t2_test1,t2_test2\n\nReturns:\n{\n  "t2_test1": {\n    "amount": "50535317008090965261",\n    "amounts": {\n      "locked": {\n        "amount": "0"\n      },\n      "points": {\n        "amount": "50535317008090965261",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0x01d175F6281F65b10205575B728d863f9cEa1924"\n  },\n  "t2_test2": {\n    "amount": "2306138031105478375111",\n    "amounts": {\n      "locked": {\n        "amount": "0"\n      },\n      "points": {\n        "amount": "2306138031105478375111",\n        "tipsAllowed": true\n      }\n    },\n    "publicAddress": "0xf847bB2AB11F395e909D87cEAf241d071CDEF8b1"\n  }\n}\n')), d._("{=Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).}{=For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.}", [d._param("=Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).", i.a.createElement("p", null, d._("Note that the amounts need to be divided by 1e18 to get the human-readable versions. Locked Points is the total number of Points the user has directly earned in the community to date (i.e., Points directly distributed to the user).", null, {
						hk: "zbzLN"
					}))), d._param("=For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.", i.a.createElement("p", null, d._("For private subreddits, you will need to include an OAuth Bearer Token in the header. For public subreddits, that is not required.", null, {
						hk: "2UzG0Z"
					})))], {
						hk: "2XOMZr"
					}))), null),
					faqs: i.a.createElement(() => i.a.createElement("main", null, i.a.createElement("h1", null, g._("Frequently Asked Questions", null, {
						hk: "43ocB2"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("Why is Reddit doing this?", null, {
						hk: "350rGF"
					})), g._("{=Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!}", [g._param("=Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!", i.a.createElement("p", null, g._("Reddit is built on tools that empower the community to be creative. We believe that Community Points can be a very useful and very powerful tool that communities own. We are excited to see what communities do with it!", null, {
						hk: "2KBHuF"
					})))], {
						hk: "VBuiX"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("Isn't crypto terrible for the environment?", null, {
						hk: "If5nI"
					})), g._('{=Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on a network that leverages the is built on the Ethereum blockchain, which is upgrading to a new version that uses 99.95% less energy}{=In addition, our project does not run on the Ethereum blockchain directly. We run on a "layer 2" scaling network, which further reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.}', [g._param("=Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on a network that leverages the is built on the Ethereum blockchain, which is upgrading to a new version that uses 99.95% less energy", i.a.createElement("p", null, g._("Not all crypto is the same. Different blockchains work in different ways, with different amounts of energy consumption. In our case, Community Points is built on a network that leverages the is built on the Ethereum blockchain, which is upgrading to a new version that uses {=99.95% less energy}.", [g._param("=99.95% less energy", i.a.createElement("a", {
						href: "https://blog.ethereum.org/2021/05/18/country-power-no-more/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, g._("99.95% less energy", null, {
						hk: "1oYgEq"
					})))], {
						hk: "1Sgsc4"
					}))), g._param('=In addition, our project does not run on the Ethereum blockchain directly. We run on a "layer 2" scaling network, which further reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.', i.a.createElement("p", null, g._('In addition, our project does not run on the Ethereum blockchain directly. We run on a "layer 2" scaling network, which further reduces energy consumption and lowers costs. In general, as crypto technology evolves, we expect it will become more efficient in order to scale to more users.', null, {
						hk: "1ecQ4c"
					})))], {
						hk: "38Ojr9"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("Why didn't I get Points?", null, {
						hk: "2AOZSW"
					})), g._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then pleasefile a ticket with your username and everything you have checked so far. We\'ll be happy to take a look!}', [g._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new VaultIf a) the address in the CSV matches your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then pleasefile a ticket with your username and everything you have checked so far. We\'ll be happy to take a look!', i.a.createElement("ol", null, g._('{=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}{=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}{=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.}{=If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}{=If a) the address in the CSV matches your active Vault, b) you don\'t see a "Claiming Your Points" card, c) it\'s been more than 24 hours since the post was made, and d) you still do not see your Points, then pleasefile a ticket with your username and everything you have checked so far. We\'ll be happy to take a look!}', [g._param('=Go to your subreddit and look for the most recent post from u/CommunityPoints. If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("li", null, g._('Go to your subreddit and look for the most recent post from u/CommunityPoints. {=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [g._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("ol", null, g._('{=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!}', [g._param('=If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', i.a.createElement("li", null, g._('If the post ends in "Proposal" then Points will be distributed one week after that post was made. You\'ll know it\'s distribution day when a new post is made saying "New [Points] Are Ready!" Hang on, they\'ll be out soon!', null, {
						hk: "2qAA1l"
					})))], {
						hk: "wQALx"
					})))], {
						hk: "33uWG7"
					}))), g._param('=If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.', i.a.createElement("li", null, g._('If the post says "New [Points] Are Ready", open the post and download the CSV inside. You can open this in any text editor or spreadsheet software. Do a search for your username and see if it is in there. {=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don\'t give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}', [g._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("ol", null, g._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [g._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.Keep in mind that your own votes don't give you karma.You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("li", null, g._("{=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.}{=Keep in mind that your own votes don't give you karma.}{=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.}", [g._param("=If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", i.a.createElement("p", null, g._("If your name is not in this list, you either did not earn positive karma in the community because of downvotes or penalties from the rules in the community.", null, {
						hk: "3q5Pno"
					}))), g._param("=Keep in mind that your own votes don't give you karma.", i.a.createElement("p", null, g._("Keep in mind that your own votes don't give you karma.", null, {
						hk: "2LwMgq"
					}))), g._param("=You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", i.a.createElement("p", null, g._("You may also have been excluded if you were banned from the community or banned from Reddit at the time the distribution was proposed.", null, {
						hk: "4uUvTI"
					})))], {
						hk: "3jRN3f"
					})))], {
						hk: "wLgWx"
					})))], {
						hk: "3oGl0L"
					}))), g._param('=If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.', i.a.createElement("li", null, g._('If your name is in the list, you should receive Points. Open your Vault and look for a card that starts with "Claiming Your Points". {=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.}', [g._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.', i.a.createElement("ol", null, g._('{=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.}{=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.}', [g._param('=If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', i.a.createElement("li", null, g._('If you have not created a Vault yet, you can create one by going to "Vault" in the left drawer of the Reddit mobile app.', null, {
						hk: "DZXaz"
					}))), g._param('=If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post beforefiling a ticket in case there are delays.', i.a.createElement("li", null, g._('If you do see the card in your Vault, we are still sending Points out to everyone. Please wait at least 24 hours after the "New [Points] Are Ready" post before {=filing a ticket} in case there are delays.', [g._param("=filing a ticket", i.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=125906"
					}, g._("filing a ticket", null, {
						hk: "1UIYm9"
					})))], {
						hk: "24oTci"
					})))], {
						hk: "1NKMg1"
					})))], {
						hk: "2C9Xd3"
					}))), g._param('=If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault', i.a.createElement("li", null, g._('If you do not see the "Claiming Your Points" card, it\'s possible your Points are being sent to an old Vault of yours. Have you created or recovered a Vault recently? Check the address ("0x…") of the Vault in Vault Settings and try to match it with the address in the CSV. {=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}', [g._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("ol", null, g._("{=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [g._param("=If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("li", null, g._("If the address number does not match, your Points were sent to an old Vault that was active when the distribution was originally proposed. If you can still recover that old Vault: {=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault}", [g._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings pageSign out of your current VaultRecover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old addressSend the Points in the old Vault to the address you copied for the new VaultSign out of the old Vault and recover the new Vault", i.a.createElement("ol", null, g._("{=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page}{=Sign out of your current Vault}{=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address}{=Send the Points in the old Vault to the address you copied for the new Vault}{=Sign out of the old Vault and recover the new Vault}", [g._param("=Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", i.a.createElement("li", null, g._("Copy your new Vault address and make sure it is backed up to Reddit. You can do this from the Vault settings page", null, {
						hk: "147djo"
					}))), g._param("=Sign out of your current Vault", i.a.createElement("li", null, g._("Sign out of your current Vault", null, {
						hk: "2vzhCE"
					}))), g._param("=Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", i.a.createElement("li", null, g._("Recover the old Vault by signing back in and choosing the old address and providing the password, or by entering in the Recovery Phrase for the old address", null, {
						hk: "QNncC"
					}))), g._param("=Send the Points in the old Vault to the address you copied for the new Vault", i.a.createElement("li", null, g._("Send the Points in the old Vault to the address you copied for the new Vault", null, {
						hk: "1kA49P"
					}))), g._param("=Sign out of the old Vault and recover the new Vault", i.a.createElement("li", null, g._("Sign out of the old Vault and recover the new Vault", null, {
						hk: "2yXzaL"
					})))], {
						hk: "jropc"
					})))], {
						hk: "3EMMFG"
					})))], {
						hk: "1FRsfi"
					})))], {
						hk: "2TQvIc"
					}))), g._param("=If a) the address in the CSV matches your active Vault, b) you don't see a \"Claiming Your Points\" card, c) it's been more than 24 hours since the post was made, and d) you still do not see your Points, then pleasefile a ticket with your username and everything you have checked so far. We'll be happy to take a look!", i.a.createElement("li", null, g._("If a) the address in the CSV matches your active Vault, b) you don't see a \"Claiming Your Points\" card, c) it's been more than 24 hours since the post was made, and d) you still do not see your Points, then please {=file a ticket} with your username and everything you have checked so far. We'll be happy to take a look!", [g._param("=file a ticket", i.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=125906"
					}, g._("file a ticket", null, {
						hk: "XHp33"
					})))], {
						hk: "4iJAL7"
					})))], {
						hk: "2NaulB"
					})))], {
						hk: "3LBpYv"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("How do I cancel my Special Membership?", null, {
						hk: "xyJU9"
					})), g._("{=It depends on how you bought your membership:}{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [g._param("=It depends on how you bought your membership:", i.a.createElement("p", null, g._("It depends on how you bought your membership:", null, {
						hk: "Fjdqz"
					}))), g._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/specialIf you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("ul", null, g._("{=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special}{=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.}{=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.}{=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.}", [g._param("=If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to https://www.reddit.com/settings/special", i.a.createElement("li", null, g._("If you purchased your Special Membership subscription on reddit.com using a credit/debit card, you can cancel it by going to {=https://www.reddit.com/settings/special}.", [g._param("=https://www.reddit.com/settings/special", i.a.createElement("a", {
						href: "/settings/special",
						target: "_blank",
						rel: "noopener noreferrer"
					}, g._("https://www.reddit.com/settings/special", null, {
						hk: "yRGwB"
					})))], {
						hk: "1I2Ufp"
					}))), g._param("=If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", i.a.createElement("li", null, g._("If you bought your Special Membership subscription with Points, you can cancel it from the Memberships tab in the applicable subreddit page on the mobile app.", null, {
						hk: "3imBhX"
					}))), g._param("=If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", i.a.createElement("li", null, g._("If you purchased your Special Membership subscription using Google Play, you can manage or cancel it by visiting the Subscriptions section of Google Play.", null, {
						hk: "325BV7"
					}))), g._param("=If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", i.a.createElement("li", null, g._("If you purchased your Special Membership subscription with your Apple ID, you can manage or cancel it through your device's Account Settings or in the Manage Subscriptions section of the Apple App Store.", null, {
						hk: "3KdlJw"
					})))], {
						hk: "1TAfIY"
					})))], {
						hk: "3mzCJw"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("Help! I've lost my Recovery Phrase and/or Vault Password, can you reset my Vault for me?", null, {
						hk: "3CQUe7"
					})), g._("{=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.}{=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.}", [g._param("=Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", i.a.createElement("p", null, g._("Unfortunately, by design, Reddit does not have access to your Vault to recover it or the Points inside of it. If you're absolutely sure your Vault is not stored on any of your mobile devices and you absolutely cannot remember your Recovery Phrase or Vault Password, there is nothing we can do to unlock your Vault and you will have to create a new Vault.", null, {
						hk: "3G2izr"
					}))), g._param("=Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.", i.a.createElement("p", null, g._("Also note that Points are tied to the Vault that was active when the distribution is finalized. If you change your Vault between when the distribution is proposed and when Points are actually distributed, your Points will go to the updated Vault.", null, {
						hk: "37f9e8"
					})))], {
						hk: "3maDCP"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("What if I get banned? What happens to my Points or my Special Membership?", null, {
						hk: "4cvjGM"
					})), i.a.createElement("p", null, g._("Your existing Points will forever remain tied to your Vault address, but you will get locked out of Vault. You’ll also stop receiving distributions, and any Special Membership renewals will be cancelled.", null, {
						hk: "2d7qy8"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, g._("I don't see Vault in the app.", null, {
						hk: "1Dg0cD"
					})), g._("{=Vault will appear in the left drawer when you meet one of the following conditions:}{=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points}{=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.}{=If you are still having trouble, please file a ticket}", [g._param("=Vault will appear in the left drawer when you meet one of the following conditions:", i.a.createElement("p", null, g._("Vault will appear in the left drawer when you meet one of the following conditions:", null, {
						hk: "4Erbhp"
					}))), g._param("=Have unclaimed PointsHave a non-zero Points amountSubscribed to a subreddit with Community Points", i.a.createElement("ul", null, g._("{=Have unclaimed Points}{=Have a non-zero Points amount}{=Subscribed to a subreddit with Community Points}", [g._param("=Have unclaimed Points", i.a.createElement("li", null, g._("Have unclaimed Points", null, {
						hk: "3JE6Pb"
					}))), g._param("=Have a non-zero Points amount", i.a.createElement("li", null, g._("Have a non-zero Points amount", null, {
						hk: "34HYj7"
					}))), g._param("=Subscribed to a subreddit with Community Points", i.a.createElement("li", null, g._("Subscribed to a subreddit with Community Points", null, {
						hk: "24mDVf"
					})))], {
						hk: "4l45PH"
					}))), g._param("=Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", i.a.createElement("p", null, g._("Make sure your account satisfies any of the above conditions. In some cases, it can take up to a minute for the Vault to appear in the menu after starting the app.", null, {
						hk: "2eTmZj"
					}))), g._param("=If you are still having trouble, please file a ticket", i.a.createElement("p", null, g._("If you are still having trouble, please {=file a ticket}.", [g._param("=file a ticket", i.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=125906"
					}, g._("file a ticket", null, {
						hk: "1ubYN3"
					})))], {
						hk: "4CjaRD"
					})))], {
						hk: "1FoNlV"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("I'm not seeing my Points on my account.", null, {
						hk: "2NxZoE"
					})), g._("{=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, pleasefile a ticket}{=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.}{=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:}{=Go to Vault → SettingsTap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase}", [g._param("=If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, pleasefile a ticket", i.a.createElement("p", null, g._("If you have just created your Vault, your Points can take up to 24 hours to land to your account. When 24 hours have passed and you still don't see any Points, please {=file a ticket}.", [g._param("=file a ticket", i.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=125906"
					}, g._("file a ticket", null, {
						hk: "mYTOl"
					})))], {
						hk: "3JnXkn"
					}))), g._param("=Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", i.a.createElement("p", null, g._("Points are bound to your Reddit account, so your alt accounts won't have Points from your other accounts. Make sure you're using the correct Reddit account when accessing your Vault.", null, {
						hk: "txg5B"
					}))), g._param("=If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:", i.a.createElement("p", null, g._("If you created a Vault on a second device, it becomes active and the reflected balance is from that Vault. If you wish to go back to your Vault:", null, {
						hk: "13BslS"
					}))), g._param("=Go to Vault → SettingsTap on Log OutSelect your old Vault address from the listRecover using Reddit Backup or a Recovery Phrase", i.a.createElement("ul", null, g._("{=Go to Vault → Settings}{=Tap on Log Out}{=Select your old Vault address from the list}{=Recover using Reddit Backup or a Recovery Phrase}", [g._param("=Go to Vault → Settings", i.a.createElement("li", null, g._("Go to Vault → Settings", null, {
						hk: "4cHhIj"
					}))), g._param("=Tap on Log Out", i.a.createElement("li", null, g._("Tap on Log Out", null, {
						hk: "10J5GV"
					}))), g._param("=Select your old Vault address from the list", i.a.createElement("li", null, g._("Select your old Vault address from the list", null, {
						hk: "3YSDBF"
					}))), g._param("=Recover using Reddit Backup or a Recovery Phrase", i.a.createElement("li", null, g._("Recover using Reddit Backup or a Recovery Phrase", null, {
						hk: "2rUX8C"
					})))], {
						hk: "38WQmK"
					})))], {
						hk: "3CBhLO"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("I got charged for a Special Membership but I haven't received it.", null, {
						hk: "bhcQn"
					})), i.a.createElement("p", null, g._("Please {=file a ticket}.", [g._param("=file a ticket", i.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=125906"
					}, g._("file a ticket", null, {
						hk: "2v6f6l"
					})))], {
						hk: "4vBaKC"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, g._("I converted my Points into Reddit Coins, but I don't want them anymore. Can you revert the transaction?", null, {
						hk: "RDin6"
					})), i.a.createElement("p", null, g._("This is not possible. Conversion into Coins is final and cannot be reversed, since Points are burned in the process.", null, {
						hk: "1RwfEY"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, g._("Why can I no longer convert my Points into Reddit Coins?", null, {
						hk: "muVCX"
					})), i.a.createElement("p", null, g._("Reddit Coins (including monthly coins from Reddit Premium) are winding down September 12, 2023. {=Learn more}.", [g._param("=Learn more", i.a.createElement("a", {
						href: "/r/reddit/comments/14ytp7s/reworking_awarding_changes_to_awards_coins_and/"
					}, g._("Learn more", null, {
						hk: "6vDeL"
					})))], {
						hk: "3mW7zM"
					}))), i.a.createElement("section", null, i.a.createElement("h3", null, g._("How do I delete my Vault?", null, {
						hk: "1b4Gqs"
					})), g._("{=Because Vault is a digital wallet on the blockchain, you can't permanently delete your Vault. While you can't delete your visible public address for Vault or any prior Community Points transactions, you can sign out from your Vault through the Reddit app, which will delete Vault from your local device and delink it from your Reddit account. To do that, go to Vault —> Setting —> Sign out.}", [g._param("=Because Vault is a digital wallet on the blockchain, you can't permanently delete your Vault. While you can't delete your visible public address for Vault or any prior Community Points transactions, you can sign out from your Vault through the Reddit app, which will delete Vault from your local device and delink it from your Reddit account. To do that, go to Vault —> Setting —> Sign out.", i.a.createElement("p", null, g._("Because Vault is a digital wallet on the blockchain, you can't permanently delete your Vault. While you can't delete your visible public address for Vault or any prior Community Points transactions, you can sign out from your Vault through the Reddit app, which will delete Vault from your local device and delink it from your Reddit account. To do that, go to Vault —> Setting —> Sign out.", null, {
						hk: "3uKPNR"
					})))], {
						hk: "26YRqR"
					})), i.a.createElement("section", null, i.a.createElement("h3", null, g._("I haven't found my answer. How do I get support?", null, {
						hk: "1iLsnr"
					})), i.a.createElement("p", null, g._("If you have questions, please {=file a ticket}.", [g._param("=file a ticket", i.a.createElement("a", {
						href: "https://reddit.zendesk.com/hc/en-us/requests/new?ticket_form_id=125906"
					}, g._("file a ticket", null, {
						hk: "3RpIP"
					})))], {
						hk: "dykXa"
					})))), null)
				};
			var q = o("./src/reddit/icons/svgs/Snoo/index.tsx"),
				H = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Footer/index.m.less"),
				U = o.n(H);
			const {
				fbt: K
			} = o("./node_modules/fbt/lib/FbtPublic.js"), J = () => i.a.createElement("div", {
				className: U.a.container
			}, i.a.createElement("footer", {
				className: U.a.content
			}, i.a.createElement(q.a, {
				className: U.a.logo
			}), i.a.createElement("span", {
				className: U.a.copyright
			}, K._("© 2021 Reddit, Inc.", null, {
				hk: "2AJJq2"
			})), i.a.createElement("span", {
				className: U.a.spacer
			}), i.a.createElement(h.a, {
				className: U.a.link,
				to: m("introduction")
			}, K._("Community Points Documentation", null, {
				hk: "KW8cc"
			})), i.a.createElement("span", {
				className: U.a.spacer
			}), i.a.createElement("a", {
				className: U.a.link,
				href: "https://www.redditinc.com/policies/previews-terms",
				target: "_blank",
				rel: "noopener noreferrer"
			}, K._("Previews Terms of Use", null, {
				hk: "4lPHBN"
			}))));
			var X = o("./src/lib/loadableAction/index.ts"),
				Q = o("./src/reddit/controls/Button/index.tsx"),
				Z = o("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				$ = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Header/index.m.less"),
				ee = o.n($);
			const te = () => {
					const e = Object(C.d)(),
						t = Object(C.e)(S.fb);
					return i.a.createElement("header", {
						className: Object(s.a)(ee.a.container, {
							[ee.a.nightmode]: t
						})
					}, i.a.createElement(h.a, {
						"aria-label": V.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: ee.a.logo,
						to: "/",
						onClick: () => e(Object(X.a)(() => Promise.all([o.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), o.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), o.e("Frontpage")]).then(o.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
					}, i.a.createElement(q.a, {
						className: ee.a.snoo
					}), i.a.createElement(Z.a, {
						className: ee.a.wordmark
					})), i.a.createElement("div", {
						className: ee.a.sections
					}, oe.map(e => {
						let {
							displayText: t,
							link: o
						} = e;
						return i.a.createElement("a", {
							href: o,
							key: t,
							className: ee.a.sectionText
						}, t)
					})), i.a.createElement(Q.t, {
						className: ee.a.joinWaitlist,
						priority: Q.c.Secondary,
						kind: Q.b.ExternalLink,
						href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
						target: "_blank",
						rel: "noopener noreferrer"
					}, V.fbt._("Join Waitlist", null, {
						hk: "4rpEy2"
					})))
				},
				oe = [{
					displayText: V.fbt._("Token", null, {
						hk: "3pTjX0"
					}),
					link: "/community-points/#token"
				}, {
					displayText: V.fbt._("Benefits", null, {
						hk: "2J9q91"
					}),
					link: "/community-points/#benefits"
				}, {
					displayText: V.fbt._("Features", null, {
						hk: "31VVaC"
					}),
					link: "/community-points/#features"
				}, {
					displayText: V.fbt._("Vault", null, {
						hk: "3pQLt1"
					}),
					link: "/community-points/#vault"
				}, {
					displayText: V.fbt._("Future", null, {
						hk: "39h3VE"
					}),
					link: "/community-points/#future"
				}, {
					displayText: V.fbt._("Enroll", null, {
						hk: "3ZbEx3"
					}),
					link: "/community-points/#enroll"
				}, {
					displayText: V.fbt._("Documentation", null, {
						hk: "3BxUWp"
					}),
					link: m("introduction")
				}];
			var ne = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/expandableText.m.less"),
				ae = o.n(ne);
			const {
				fbt: ie
			} = o("./node_modules/fbt/lib/FbtPublic.js"), re = e => {
				let {
					className: t,
					data: o,
					anchorId: n,
					isExpanded: a,
					isHidden: r,
					onClickExpand: l,
					onClickHide: u
				} = e;
				const c = Object(C.e)(S.fb);
				return i.a.createElement("div", {
					className: Object(s.a)(ae.a.container, t, {
						[ae.a.expanded]: a,
						[ae.a.hidden]: r,
						[ae.a.nightmode]: c
					})
				}, n && i.a.createElement(ot, {
					anchorId: n
				}), i.a.createElement("div", {
					className: ae.a.imageSection,
					style: {
						backgroundColor: o.backgroundColor
					}
				}, i.a.createElement("img", {
					className: Object(s.a)(ae.a.image, {
						[ae.a.expanded]: a
					}),
					src: o.imageSrc,
					alt: o.title
				})), i.a.createElement("div", {
					className: Object(s.a)(ae.a.textSection, {
						[ae.a.expanded]: a,
						[ae.a.nightmode]: c
					})
				}, i.a.createElement("h5", {
					className: ae.a.title
				}, o.title), i.a.createElement("p", {
					className: ae.a.subtitle
				}, o.subtitle), a && i.a.createElement("p", {
					className: ae.a.body
				}, o.body), i.a.createElement("button", {
					onClick: a ? u : l,
					className: Object(s.a)(ae.a.expandButton, {
						[ae.a.expanded]: a
					}),
					"aria-label": a ? ie._("Collapse", null, {
						hk: "LToWq"
					}) : ie._("Expand", null, {
						hk: "4jMW0g"
					})
				}, i.a.createElement(w.a, {
					name: "add",
					className: Object(s.a)(ae.a.plusIcon, {
						[ae.a.expanded]: a
					})
				}))))
			};
			var se = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Benefits/index.m.less"),
				le = o.n(se);
			const {
				fbt: ue
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ce = e => {
				let {
					className: t
				} = e;
				const [o, n] = Object(a.useState)(null), [r, l] = Object(a.useState)(null);
				return Object(a.useEffect)(() => {
					if (null === r) return;
					const e = document.getElementById(me(r));
					if (!e) return;
					const t = e.getBoundingClientRect().top;
					(t < 0 || t > window.innerHeight) && e.scrollIntoView({
						behavior: "smooth",
						block: "start"
					}), l(null)
				}, [r]), i.a.createElement("div", {
					className: t
				}, i.a.createElement(ot, {
					anchorId: "benefits"
				}), i.a.createElement("h2", {
					className: le.a.title
				}, ue._("Take your community to the next level", null, {
					hk: "PqrYm"
				})), i.a.createElement("div", {
					className: Object(s.a)(le.a.benefitsContainer, {
						[le.a.expanded]: null !== o
					})
				}, de.map((e, t) => i.a.createElement(re, {
					key: t,
					data: e,
					anchorId: me(t),
					isExpanded: null !== o && t === o,
					isHidden: null !== o && t !== o,
					onClickExpand: () => {
						n(t), l(t)
					},
					onClickHide: () => {
						n(null), l(t)
					}
				}))))
			}, me = e => `expandable-text-${e}`, de = [{
				title: ue._("Reward the community, for real", null, {
					hk: "26o9ra"
				}),
				subtitle: ue._("Earn something valuable for all the hours you put into your community.", null, {
					hk: "SQfOp"
				}),
				body: ue._("Community Points are a way for Redditors to own a piece of their favorite communities. Moderators and content creators earn Points by contributing to the community, and they can spend their Points on special features, display their Points as reputation in the community, and vote with their Points to weigh in on community decisions.", null, {
					hk: "Xdxas"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reward_the_community_v3.png`,
				backgroundColor: "#E2D399"
			}, {
				title: ue._("Unlock special features", null, {
					hk: "49hRJ2"
				}),
				subtitle: ue._("Buy community features with Community Points, like Special Memberships.", null, {
					hk: "4xjIVl"
				}),
				body: ue._("Community Points unlock special features in subreddits that adopt them. For example, they can be used to purchase Special Memberships, which give users access to community-themed badges, highlighted usernames, and the ability to embed rich media in their comments.", null, {
					hk: "u2FHr"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/premium_features_v3.png`,
				backgroundColor: "#B3F1FF"
			}, {
				title: ue._("Encourage better content and conversation", null, {
					hk: "3EKFJU"
				}),
				subtitle: ue._("Use Community Points as an incentive to shape content and behavior in your community.", null, {
					hk: "3fIFZj"
				}),
				body: ue._("Community Points introduce a powerful incentive system that communities can customize to their needs. Want to see more long-form text posts and comments? Reward this kind of content more. Want to see fewer low-effort memes? Give out fewer Points for them. (Or reward memes even more, it&apos;s up to you and your community!)", null, {
					hk: "3rbD1b"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/hq_content_v3.png`,
				backgroundColor: "#E3D7F4"
			}, {
				title: ue._("Empower the community", null, {
					hk: "4xbWZA"
				}),
				subtitle: ue._("Use polls to let the community weigh in on important decisions, including how Community Points should be distributed.", null, {
					hk: "S9sAC"
				}),
				body: ue._("Subreddits can create polls where votes are weighted according to how many Points users have earned in the community. Instead of seeing only the loudest comments, measure how long-term members actually feel and use this mechanism to evolve how your community makes decisions.", null, {
					hk: "SD836"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/get_input_v3.png`,
				backgroundColor: "#A7EAD0"
			}, {
				title: ue._("Use Points as a flexible tool", null, {
					hk: "16j4nt"
				}),
				subtitle: ue._("Give out Points as prizes for events and contests and integrate Points with community bots such as Automod.", null, {
					hk: "4qJAr"
				}),
				body: ue._("Points are a flexible tool you can use for many purposes in your community. Community Points can be prizes for community events, such as a trivia thread. Points can also be used with community bots, including Automod, to do things like host a discussion thread only for core community contributors or thank Special Members when they make a post.", null, {
					hk: "2dx02y"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/community_together_v3.png`,
				backgroundColor: "#FFC2C2"
			}, {
				title: ue._("Customize your Points", null, {
					hk: "4jECbt"
				}),
				subtitle: ue._("Each subreddit creates its own Community Points token, with a custom name and symbol.", null, {
					hk: "2hgheb"
				}),
				body: ue._("Every subreddit&apos;s Community Points are unique to it, with a name chosen by the community and a symbol to match. These tokens live on the blockchain, which means they are owned and controlled fully by the community.", null, {
					hk: "lbmXo"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/customize_points_v3.png`,
				backgroundColor: "#DDDDDD"
			}];
			var he = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CommunityPoints/index.m.less"),
				pe = o.n(he);
			const {
				fbt: ye
			} = o("./node_modules/fbt/lib/FbtPublic.js"), be = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(pe.a.container, t)
				}, i.a.createElement(ot, {
					anchorId: "token"
				}), i.a.createElement("div", {
					className: pe.a.mainSceneMaxWidthContainer
				}, i.a.createElement("div", {
					className: pe.a.mainSceneContainer
				}, i.a.createElement("picture", {
					className: pe.a.mainScene
				}, i.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v2.mov`,
					type: "video/mp4"
				}), i.a.createElement("source", {
					media: "(min-width: 868px)",
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_v3.webp`,
					type: "image/webp"
				}), i.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_mobile_v3.webp`,
					type: "image/webp"
				}), i.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_static_v2.png`,
					type: "image/png"
				}), i.a.createElement("img", {
					alt: ye._("Community Points Hero Image", null, {
						hk: "28I6Y4"
					}),
					className: pe.a.fallbackStaticImage,
					srcSet: `${n.a.assetPath}/img/communityPoints/landingPage/main_scene_static.png`
				})))), i.a.createElement("h3", {
					className: pe.a.title
				}, ye._("Community Points {=[beta]}", [ye._param("=[beta]", i.a.createElement("sup", {
					className: pe.a.super
				}, ye._("[beta]", null, {
					hk: "LPmnm"
				})))], {
					hk: "2yMt7C"
				})), i.a.createElement("h2", {
					className: pe.a.subtitle
				}, ye._("Own a piece of your community", null, {
					hk: "xjmHz"
				})), i.a.createElement("p", {
					className: pe.a.bodyText
				}, ye._("Add a custom token to your subreddit. Earn rewards, encourage quality content, and unlock special features.", null, {
					hk: "2JXihD"
				})), i.a.createElement(Q.t, {
					className: pe.a.waitlistButton,
					priority: Q.c.Primary,
					kind: Q.b.ExternalLink,
					href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
					target: "_blank",
					rel: "noopener noreferrer"
				}, ye._("Join Waitlist", null, {
					hk: "4rpEy2"
				})))
			};
			var fe = o("./src/higherOrderComponents/asModal/index.tsx"),
				ge = o("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				we = o("./src/reddit/icons/svgs/ArrowRightThin/index.tsx"),
				ke = o("./src/reddit/selectors/economics.ts"),
				ve = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Carousel/index.m.less"),
				Pe = o.n(ve);

			function _e(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return `${n.a.assetPath}/img/communityPoints/learnMore/slide${e}${t?"@2x":""}.png`
			}
			var Ee = function(e) {
					let {
						className: t,
						onComplete: o
					} = e;
					const [n, r] = Object(a.useState)(0), l = Object(C.e)(ke.m), u = l && l.learnMore.pages || [], c = u.map(e => e.body).reduce((e, t) => t.length > e.length ? t : e, ""), m = e => {
						r(e), e + 1 === u.length && o()
					};
					return i.a.createElement("div", {
						className: Object(s.a)(Pe.a.carousel, t)
					}, i.a.createElement("div", {
						className: Pe.a.imageContainer
					}, u.map((e, t) => i.a.createElement("img", {
						src: _e(t),
						srcSet: `${_e(t,!1)}, ${_e(t)} 2x`,
						className: Object(s.a)(Pe.a.image, {
							[Pe.a.before]: t < n,
							[Pe.a.active]: t === n,
							[Pe.a.after]: t > n
						}),
						key: t
					}))), i.a.createElement("div", {
						className: Pe.a.textContainer
					}, i.a.createElement("div", {
						className: Pe.a.hiddenText
					}, i.a.createElement("div", {
						className: Pe.a.slideTitle
					}, u[0] && u[0].title), c), u.map((e, t) => i.a.createElement("div", {
						className: Object(s.a)(Pe.a.text, {
							[Pe.a.before]: t < n,
							[Pe.a.active]: t === n,
							[Pe.a.after]: t > n
						}),
						key: t
					}, i.a.createElement("div", {
						className: Pe.a.slideTitle
					}, e.title), e.body))), i.a.createElement("div", {
						className: Pe.a.pager
					}, u.map((e, t) => i.a.createElement("button", {
						key: t,
						onClick: () => m(t)
					}, i.a.createElement("div", {
						className: Object(s.a)(Pe.a.progressDot, {
							[Pe.a.active]: t === n
						})
					}))), u.length > 0 && i.a.createElement("button", {
						"aria-label": "Next",
						className: Object(s.a)(Pe.a.nextButton, {
							[Pe.a.hidden]: n === u.length - 1
						}),
						onClick: () => m(n + 1)
					}, i.a.createElement(we.a, {
						className: Pe.a.arrowIcon
					}))))
				},
				Ce = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/carouselModal.m.less"),
				Se = o.n(Ce);
			const Ve = Object(fe.a)(e => {
				let {
					onClose: t
				} = e;
				return i.a.createElement("div", {
					className: Se.a.container
				}, i.a.createElement(ge.a, {
					onClick: t,
					highContrast: !0
				}), i.a.createElement(Ee, {
					onComplete: () => {}
				}))
			});
			var Ie = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/CryptoFuture/index.m.less"),
				xe = o.n(Ie);
			const {
				fbt: Te
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Re = e => {
				let {
					className: t
				} = e;
				const [o, r] = Object(a.useState)(!1);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(s.a)(t, xe.a.container)
				}, i.a.createElement(ot, {
					anchorId: "future"
				}), i.a.createElement("img", {
					className: xe.a.image,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/crypto_future_v3.png`,
					alt: Te._("Imagine a crypto future", null, {
						hk: "2fm7jC"
					})
				}), i.a.createElement("div", {
					className: xe.a.textContainer
				}, i.a.createElement("h3", {
					className: xe.a.title
				}, Te._("Step into the crypto future", null, {
					hk: "4kMpHZ"
				})), i.a.createElement("div", {
					className: xe.a.body
				}, Te._("{=Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.}{=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.}", [Te._param("=Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", i.a.createElement("p", null, Te._("Communities are the lifeblood of the Internet. But on today's Internet, they are not in charge of their own destiny. Instead, they are controlled by the large platforms that hold all the power online. It is time for a change.", null, {
					hk: "24YdSx"
				}))), Te._param("=Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.", i.a.createElement("p", null, Te._("Community Points are the first step towards a different future for online communities. These tokens live on the blockchain, which means they are truly owned by the community. Over time, your community will benefit from even greater control and independence — on and off of Reddit.", null, {
					hk: "1IBSEK"
				})))], {
					hk: "3dfbBB"
				})), i.a.createElement(Q.t, {
					Icon: Object(w.b)("topic_reading"),
					className: xe.a.button,
					iconClassName: xe.a.buttonIcon,
					priority: Q.c.Secondary,
					onClick: () => r(!0)
				}, Te._("A New Frontier", null, {
					hk: "4GrPd2"
				})))), o && i.a.createElement(Ve, {
					className: xe.a.modal,
					overlayClassName: xe.a.modalOverlay,
					withOverlay: !0,
					onOverlayClick: () => r(!1),
					onClose: () => r(!1)
				}))
			};
			var Me = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/FAQ/index.m.less"),
				Ne = o.n(Me);
			const {
				fbt: Ae
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Fe = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: Ne.a.background
				}, i.a.createElement("img", {
					className: Ne.a.snoo,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/faq_v3.png`,
					alt: Ae._("FAQ Snoo", null, {
						hk: "DXQ0O"
					})
				}), i.a.createElement("h2", {
					className: Ne.a.subtitle
				}, Ae._("Want to know more?", null, {
					hk: "3vbn1B"
				})), i.a.createElement(Q.t, {
					Icon: Object(w.b)("topic_reading"),
					className: Ne.a.docsButton,
					iconClassName: Ne.a.docsIcon,
					priority: Q.c.Secondary,
					kind: Q.b.InternalLink,
					to: m("introduction")
				}, i.a.createElement("span", {
					className: Ne.a.docTextFull
				}, Ae._("Community Points Documentation", null, {
					hk: "3nnz6o"
				})), i.a.createElement("span", {
					className: Ne.a.docTextShort
				}, Ae._("Community Points Doc", null, {
					hk: "1E9Ckc"
				})))))
			};
			var Be = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/feature.m.less"),
				Oe = o.n(Be);
			const {
				fbt: De
			} = o("./node_modules/fbt/lib/FbtPublic.js"), je = e => {
				let {
					className: t,
					data: o
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(Oe.a.container, t),
					style: {
						backgroundColor: o.backgroundColor
					}
				}, i.a.createElement("div", {
					className: Oe.a.textSection
				}, i.a.createElement("div", {
					className: Oe.a.textContainer
				}, i.a.createElement("h4", {
					className: Oe.a.title
				}, o.title), o.body)), i.a.createElement("div", {
					className: Oe.a.imageSection
				}, i.a.createElement("img", {
					className: Oe.a.image,
					src: o.imageSrc,
					alt: o.title
				})))
			};
			var We = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Features/index.m.less"),
				Le = o.n(We);
			const {
				fbt: Ye
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ze = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement(ot, {
					anchorId: "features"
				}), i.a.createElement("h3", {
					className: Le.a.title
				}, Ye._("Features", null, {
					hk: "Bhlfk"
				})), i.a.createElement("h2", {
					className: Le.a.subtitle
				}, Ye._("Oh, the possibilities!", null, {
					hk: "1Up4RN"
				})), Ge.map(e => i.a.createElement(je, {
					className: Le.a.featureContainer,
					key: e.title,
					data: e
				})))
			}, Ge = [{
				title: Ye._("Own your reputation", null, {
					hk: "2Z40M2"
				}),
				body: Ye._("{=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.}{=But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!}", [Ye._param("=Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", i.a.createElement("p", {
					className: Le.a.bodyText
				}, Ye._("Community Points are a measure of reputation in your community. In the subreddit, they are displayed next to usernames, so the biggest contributors stand out from the crowd.", null, {
					hk: "22eCEg"
				}))), Ye._param("=But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!", i.a.createElement("p", {
					className: Le.a.bodyText
				}, Ye._("But it's not limited to Reddit either. Because your Points are on the blockchain, you can take your reputation anywhere you want on the Internet. Embed them in your own site or app!", null, {
					hk: "4a3vgy"
				})))], {
					hk: "3wqGEI"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/reputation_v3.png`,
				backgroundColor: "#FF5C0033"
			}, {
				title: Ye._("Purchase Special Memberships", null, {
					hk: "4c0PPs"
				}),
				body: Ye._("{=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:}{=Badges}{=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.}{=GIFs (optional)}{=Embed GIFs directly inside your comments.}{=Animated Emojis}{=Let creators in your community upload custom emojis that you can add to your comments.}", [Ye._param("=Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", i.a.createElement("p", {
					className: Object(s.a)(Le.a.bodyText, Le.a.blackText)
				}, Ye._("Create Special Memberships in your community that users can purchase with Points. Special Memberships unlock multiple features:", null, {
					hk: "3KdhAP"
				}))), Ye._param("=Badges", i.a.createElement("h6", {
					className: Le.a.bodyTitle
				}, Ye._("Badges", null, {
					hk: "1Xw4PQ"
				}))), Ye._param("=Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", i.a.createElement("p", {
					className: Le.a.bodyDetail
				}, Ye._("Personalize your presence on the subreddit with loyalty, achievement, and style badges, and add a highlighted color to your username.", null, {
					hk: "3mrVe"
				}))), Ye._param("=GIFs (optional)", i.a.createElement("h6", {
					className: Le.a.bodyTitle
				}, Ye._("GIFs (optional)", null, {
					hk: "1OkOrY"
				}))), Ye._param("=Embed GIFs directly inside your comments.", i.a.createElement("p", {
					className: Le.a.bodyDetail
				}, Ye._("Embed GIFs directly inside your comments.", null, {
					hk: "TmLOL"
				}))), Ye._param("=Animated Emojis", i.a.createElement("h6", {
					className: Le.a.bodyTitle
				}, Ye._("Animated Emojis", null, {
					hk: "18gq4g"
				}))), Ye._param("=Let creators in your community upload custom emojis that you can add to your comments.", i.a.createElement("p", {
					className: Le.a.bodyDetail
				}, Ye._("Let creators in your community upload custom emojis that you can add to your comments.", null, {
					hk: "Ot9Cs"
				})))], {
					hk: "11CKRv"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/special_memberships_v3.png`,
				backgroundColor: "#D4F6FF"
			}, {
				title: Ye._("Put anything to a vote", null, {
					hk: "3PT2yA"
				}),
				body: Ye._("{=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.}{=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.}", [Ye._param("=Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", i.a.createElement("p", {
					className: Le.a.bodyText
				}, Ye._("Run weighted polls to make big decisions in your community, like getting input on rules changes or deciding how to distribute Points.", null, {
					hk: "Occ8f"
				}))), Ye._param("=Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", i.a.createElement("p", {
					className: Le.a.bodyText
				}, Ye._("Unlike regular polls, these polls give a larger voice to people who have contributed more to the community. The more Community Points someone has earned, the more weight their vote carries.", null, {
					hk: "20PHmT"
				})))], {
					hk: "KZiXt"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/polls_v3.png`,
				backgroundColor: "#FFD63533"
			}, {
				title: Ye._("Show your appreciation", null, {
					hk: "16HCcH"
				}),
				body: Ye._("{=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.}", [Ye._param("=Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", i.a.createElement("p", {
					className: Le.a.bodyText
				}, Ye._("Tip someone for making a great post or comment! Community Points can also be sent to any Redditor with a crypto Vault.", null, {
					hk: "3PzATh"
				})))], {
					hk: "3Lb9Rr"
				}),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/tipping_v3.png`,
				backgroundColor: "#F86AEA33"
			}, {
				title: Ye._("Reward creators and developers", null, {
					hk: "3gxoDp"
				}),
				body: i.a.createElement("p", {
					className: Object(s.a)(Le.a.bodyText, Le.a.blackText)
				}, Ye._("Creators can be rewarded for making things for the subreddit, such as designing badges or community merchandise. Developers who make community bots or tools for the subreddit can be paid in Points for their work.", null, {
					hk: "2aZ9Y6"
				})),
				imageSrc: `${n.a.assetPath}/img/communityPoints/landingPage/creator_rewards_v3.png`,
				backgroundColor: "#FFF9F3"
			}];
			var qe = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/JoinWaitlist/index.m.less"),
				He = o.n(qe);
			const {
				fbt: Ue
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ke = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(t, He.a.container)
				}, i.a.createElement(ot, {
					anchorId: "enroll"
				}), i.a.createElement("div", {
					className: He.a.backgroundContainer
				}, i.a.createElement("h3", {
					className: He.a.title
				}, Ue._("Join waitlist", null, {
					hk: "2MmQU3"
				})), i.a.createElement("h2", {
					className: He.a.subtitle
				}, Ue._("Want to see Community Points in your subreddit?", null, {
					hk: "3a9HLq"
				})), i.a.createElement("p", {
					className: He.a.body
				}, Ue._("Community Points will always be an opt-in feature. We are looking for a select few subreddits to join our crypto experiment. If you are a moderator, add yourself to the list and we'll be in touch!", null, {
					hk: "4uvkEJ"
				})), i.a.createElement(Q.t, {
					className: He.a.waitlistButton,
					priority: Q.c.Primary,
					kind: Q.b.ExternalLink,
					href: "https://docs.google.com/forms/d/1xSpGcBc0TP3GpfNgo3F0pV86OQYiEwUcsWBu3-RtfiU/viewform",
					target: "_blank",
					rel: "noopener noreferrer"
				}, Ue._("Join Waitlist", null, {
					hk: "p3fEV"
				})), i.a.createElement("img", {
					className: He.a.moon,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/moon_v2.png`,
					alt: Ue._("The moon", null, {
						hk: "GQsMF"
					})
				}), i.a.createElement("img", {
					className: He.a.rocket,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/rocket_v2.png`,
					alt: Ue._("Rocket", null, {
						hk: "6iIrb"
					})
				})))
			};
			var Je = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/Sections/Vault/index.m.less"),
				Xe = o.n(Je);
			const {
				fbt: Qe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Ze = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("div", {
					className: Object(s.a)(t, Xe.a.background)
				}, i.a.createElement(ot, {
					anchorId: "vault"
				}), i.a.createElement("div", {
					className: Xe.a.textSection
				}, i.a.createElement("div", {
					className: Xe.a.textContainer
				}, i.a.createElement("h3", {
					className: Xe.a.title
				}, Qe._("The Vault", null, {
					hk: "3UIB9U"
				})), i.a.createElement("h2", {
					className: Xe.a.subtitle
				}, Qe._("Your crypto wallet within Reddit", null, {
					hk: "40R31x"
				})), i.a.createElement("p", {
					className: Xe.a.body
				}, Qe._("Community Points live on the blockchain, and your Vault is where you can view, send, and use Community Points within the Reddit app.", null, {
					hk: "1g3lSo"
				})))), i.a.createElement("div", {
					className: Xe.a.imageSection
				}, i.a.createElement("img", {
					className: Xe.a.image,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/vault_v4.png`,
					alt: Qe._("Reddit Vault", null, {
						hk: "8VmO1"
					})
				})))
			};
			var $e = o("./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.m.less"),
				et = o.n($e);
			const {
				fbt: tt
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				const e = (e => {
					var t, o;
					return (null === (o = null === (t = null == e ? void 0 : e.routeMatch) || void 0 === t ? void 0 : t.match) || void 0 === o ? void 0 : o.path) === l.a
				})(Object(r.a)());
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: et.a.container
				}, i.a.createElement(te, null), e ? i.a.createElement(z, null) : i.a.createElement(i.a.Fragment, null, i.a.createElement(be, {
					className: et.a.communityPointsSection
				}), i.a.createElement(ce, {
					className: et.a.benefitsSection
				}), i.a.createElement("img", {
					className: et.a.spiral,
					src: `${n.a.assetPath}/img/communityPoints/landingPage/spiral_v3.png`,
					alt: tt._("Spiraling coins", null, {
						hk: "IuYXo"
					})
				}), i.a.createElement(ze, {
					className: et.a.featuresSection
				}), i.a.createElement(Ze, {
					className: et.a.vaultSection
				}), i.a.createElement(Fe, {
					className: et.a.faqSection
				}), i.a.createElement(Re, {
					className: et.a.cryptoFutureSection
				}), i.a.createElement(Ke, {
					className: et.a.joinWaitlistSection
				}))), !e && i.a.createElement(J, null))
			};
			const ot = e => {
				let {
					anchorId: t
				} = e;
				return i.a.createElement("div", {
					className: et.a.anchorParent
				}, i.a.createElement("a", {
					id: t,
					className: et.a.anchor
				}))
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return g
			})), o.d(t, "o", (function() {
				return w
			})), o.d(t, "a", (function() {
				return k
			})), o.d(t, "x", (function() {
				return v
			})), o.d(t, "f", (function() {
				return P
			})), o.d(t, "i", (function() {
				return _
			})), o.d(t, "q", (function() {
				return E
			})), o.d(t, "h", (function() {
				return C
			})), o.d(t, "z", (function() {
				return S
			})), o.d(t, "l", (function() {
				return V
			})), o.d(t, "n", (function() {
				return I
			})), o.d(t, "e", (function() {
				return x
			})), o.d(t, "d", (function() {
				return T
			})), o.d(t, "j", (function() {
				return R
			})), o.d(t, "p", (function() {
				return M
			})), o.d(t, "k", (function() {
				return F
			})), o.d(t, "r", (function() {
				return O
			})), o.d(t, "y", (function() {
				return D
			})), o.d(t, "u", (function() {
				return j
			})), o.d(t, "v", (function() {
				return W
			})), o.d(t, "b", (function() {
				return L
			})), o.d(t, "w", (function() {
				return Y
			})), o.d(t, "s", (function() {
				return z
			})), o.d(t, "t", (function() {
				return G
			})), o.d(t, "g", (function() {
				return U
			})), o.d(t, "m", (function() {
				return K
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/reddit/featureFlags/index.ts"),
				a = o("./src/reddit/helpers/economics/sortBadges.ts"),
				i = o("./src/reddit/helpers/richTextJson/index.ts"),
				r = o("./src/reddit/models/Badge/index.ts"),
				s = o("./src/reddit/models/Badge/managementPage.ts"),
				l = o("./src/reddit/models/Payments/index.ts"),
				u = o("./src/reddit/models/Product/index.ts"),
				c = o("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = o("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				d = o("./src/reddit/selectors/comments.ts"),
				h = o("./src/reddit/selectors/commentSelector.ts"),
				p = o("./src/reddit/selectors/experiments/mediaInComments.ts"),
				y = o("./src/reddit/selectors/gold/powerups/index.ts"),
				b = o("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				g = (e, t) => {
					const o = e.economics.subredditPremium[t];
					if (o && o.status === m.a.Fetched) {
						const e = o.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				w = (e, t) => {
					const o = g(e, t);
					return o && o.endsAt || null
				};
			var k;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(k || (k = {}));
			const v = (e, t) => {
					const o = e.economics.subredditPremium[t];
					if (o && o.status === m.a.Fetched) {
						const o = w(e, t),
							n = Date.now();
						return o && n < o ? k.Subscribed : k.NotSubscribed
					}
					return k.DontKnow
				},
				P = (e, t) => {
					const o = e.user.account,
						n = e.economics.subredditPremium[t];
					if (o && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[o.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[s.a.Loyalty]: n.find(e => e.placement === r.a.First),
							[s.a.Achievement]: n.find(e => e.placement === r.a.Second),
							[s.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[s.a.Loyalty]: void 0,
						[s.a.Achievement]: void 0,
						[s.a.Cosmetic]: void 0
					}
				};

			function _(e, t) {
				return (null == e ? void 0 : e.length) ? Object(a.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const E = (e, t, o) => {
					var a;
					if (!n.d.spBadges(e)) return f;
					return _(null === (a = e.users.appliedBadges[o]) || void 0 === a ? void 0 : a[t], e.badges.models)
				},
				C = (e, t) => {
					const o = e.economics.subredditPremium[t.subredditId];
					if (o && o.status === m.a.Fetched) {
						const e = o.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function S(e, t) {
				const o = (e.economics.me.data.specialMemberships || {})[t];
				return !!(o && o.settings && o.settings.optOut)
			}

			function V(e, t) {
				const {
					badge: o,
					subredditId: n
				} = t, a = e.user.account ? e.user.account.id : void 0;
				if (Object(r.e)(o) && o.userId === a) return o;
				const i = e.badges.models,
					s = e.user.ownedBadges[n] || {},
					l = Object(r.e)(o) ? o.type : o.id;
				return Object.keys(s).map(e => i[e]).find(e => e && e.type === l)
			}

			function I(e, t, o, n) {
				const a = e.economics.subredditPremium[t];
				if (a && a.status === m.a.Fetched) {
					if (o === s.a.Loyalty || o === s.a.Achievement) return a.data.collections[o];
					if (o === s.a.Cosmetic && n) return a.data.collections[o][n]
				}
				return f
			}

			function x(e, t) {
				const o = I(e, t, s.a.Loyalty).find(e => "membership" === e.id);
				return o ? [].concat(o.locked, o.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function T(e, t) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === m.a.Fetched) {
					const e = o.data.collections[s.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(r.f)
				}
				return f
			}

			function R(e, t) {
				return I(e, t, s.a.Cosmetic, s.c.Gallery).some(e => e.locked.some(e => Object(r.f)(e) || !!e.price))
			}
			const M = e => {
				const t = [],
					o = e.economics.paymentSystems;
				if (o.status === c.a.Fetched && o.data.stripe && o.data.stripe.sources) {
					const e = o.data.stripe.sources;
					for (const o in e) {
						const n = e[o];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: o,
							type: l.a.SavedStripe
						})
					}
				}
				if (o.status === c.a.Fetched && o.data.braintree && o.data.braintree.sources) {
					const e = o.data.braintree.sources;
					for (const o in e) {
						const n = e[o];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const o = A.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (o[e.currency] = e.price)
					});
					const n = g(e, t);
					return n && n.price && n.currency && (o[n.currency] = n.price), o
				},
				O = (e, t) => {
					var o, n, a, i;
					const r = (null === (i = null === (a = null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.crypto) || void 0 === n ? void 0 : n.points) || void 0 === a ? void 0 : a[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || A;
					return {
						prices: B(e, t),
						member: r.member || A.member,
						memberPlural: r.memberPlural || A.memberPlural,
						memberAlt: r.memberAlt || A.memberAlt,
						memberAltPlural: r.memberAltPlural || A.memberAltPlural,
						membership: r.membership || A.membership,
						membershipAlt: r.membershipAlt || A.membershipAlt
					}
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === c.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				j = (e, t) => {
					const o = e.user.ownedBadges[t] || {};
					return !!Object.keys(o).length
				},
				W = e => {
					const t = e.economics.paymentSystems;
					return t.status === c.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				L = (e, t) => {
					let {
						subredditId: o
					} = t;
					if (!o) return;
					return e.economics.emotes[o]
				},
				Y = (e, t) => {
					const o = t && e.economics.gifs[t];
					return !!o && o.hasGifProduct
				},
				z = (e, t) => !!t && !!Object(y.a)(e, {
					subredditId: t
				}),
				G = (e, t, o) => {
					if (Object(p.b)(e)) return !(!t || !Object(d.C)(e, {
						subredditId: t
					})) || (!!H(e, t) || !(!n.d.spGiphy(e) || !q(e, o)));
					if (!Object(b.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(y.f)(e, {
							subredditId: t
						})) return !0;
					if (q(e, o)) return !0;
					const a = n.d.spGiphy(e),
						i = Y(e, t);
					return !!H(e, t) || a && i
				},
				q = (e, t) => {
					const o = "replyToPost" !== t && Object(h.c)(e, {
						commentId: t
					});
					if (o && Object(i.a)(o)) return !0
				},
				H = (e, t) => {
					const o = n.d.spGiphy(e),
						a = Y(e, t);
					return o && a
				},
				U = (e, t, o) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[o]
					}
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/reddit/models/Gold/Powerups/index.ts"),
				a = o("./src/lib/initializeClient/installReducer.ts"),
				i = o("./src/reddit/actions/gold/constants.ts");
			const r = {};
			var s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var o, n;
					switch (t.type) {
						case i.mb:
						case i.nb: {
							const {
								benefitStatuses: n,
								subredditId: a
							} = t.payload;
							if (!n) return e;
							const i = null !== (o = e[a]) && void 0 !== o ? o : {},
								r = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: o
								} = e;
								r[t] = o
							}), {
								...e,
								[a]: {
									...i,
									...r
								}
							}
						}
						case i.L: {
							const {
								benefitStatuses: o,
								subredditId: a
							} = t.payload, i = null !== (n = e[a]) && void 0 !== n ? n : {}, r = {};
							return o.forEach(e => {
								let {
									benefit: t,
									isEnabled: o
								} = e;
								r[t] = o
							}), {
								...e,
								[a]: {
									...i,
									...r
								}
							}
						}
						default:
							return e
					}
				},
				l = o("./node_modules/reselect/es/index.js");
			Object(a.a)({
				features: {
					powerupsBenefitSettings: s
				}
			});
			const u = (e, t) => {
					let {
						subredditId: o
					} = t;
					return o ? e.features.powerupsBenefitSettings[o] : null
				},
				c = (e => Object(l.a)(u, t => !!(null == t ? void 0 : t[e])))(n.a.CommentsWithGifs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityPointsLearnMore.56159e22fa831aa534aa.js.map