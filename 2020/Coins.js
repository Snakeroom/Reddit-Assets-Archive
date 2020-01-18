// https://www.redditstatic.com/desktop2x/Coins.60299a96836113fb4290.js
// Retrieved at 1/18/2020, 11:45:21 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Coins"], {
		"./node_modules/lodash/times.js": function(e, a, t) {
			var s = t("./node_modules/lodash/_baseTimes.js"),
				c = t("./node_modules/lodash/_castFunction.js"),
				n = t("./node_modules/lodash/toInteger.js"),
				l = 9007199254740991,
				r = 4294967295,
				i = Math.min;
			e.exports = function(e, a) {
				if ((e = n(e)) < 1 || e > l) return [];
				var t = r,
					o = i(e, r);
				a = c(a), e -= r;
				for (var m = s(o, a); ++t < e;) a(t);
				return m
			}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return c
			})), t.d(a, "b", (function() {
				return n
			}));
			var s = t("./src/lib/sentry/index.ts");

			function c() {
				! function(e, a) {
					if (!e.rdt) {
						var t = e.rdt = function() {
							t.sendEvent ? t.sendEvent.apply(t, arguments) : t.callQueue.push(arguments)
						};
						t.callQueue = [];
						var s = a.createElement("script");
						s.src = "https://www.redditstatic.com/ads/pixel.js", s.async = !0;
						var c = a.getElementsByTagName("script")[0];
						c.parentNode.insertBefore(s, c)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const n = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					s.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/components/CoinPurchasePackage/index.m.less": function(e, a, t) {
			e.exports = {
				coinPurchasePackage: "_2EIXBaqbDzjEAL7-FJSYrP",
				large: "_2bLqgYtdh1iwHZvymepMHY",
				imageContainer: "_3UcT0NNsA2y6trB2G7Qk3T",
				badge: "_2q1pllb_vmiNtpjLMUbL3E",
				stamp: "dh-QO7AdDu0vFy7aoCaVt",
				stampIcon: "ei1DxPM2zy9FNW2ulDBOn",
				stampValue: "lVRFLCbqG6b523UFMdEj3",
				stampText: "_3UmM4fIFVtu49_z-3UMgZL",
				contentContainer: "_3YFnrc2p9Tl-6EMp1fAqpG",
				price: "_3eYcjtmYoyVXxiONpaL-dl",
				priceCoinIcon: "_3Cwg9Vp-uedO-_VTBrJInh",
				priceValue: "_5vvqF-Ums1umqkRQRQgxc",
				priceCurrency: "GAlR-4atoPo_42Ies2wM4",
				description: "_36_v0R5TTjmgVJ4q6NSB-6",
				ctaContainer: "_34OTQdJgV4WKGff3WUOMAj",
				cta: "_2VikcGTdLgHpqRMo203jak"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, a, t) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				n = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				l = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				o = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends c.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: a,
						children: t
					} = this.props, {
						isOpen: s
					} = this.state, n = s ? l.a.isOpen : "";
					return c.a.createElement("div", {
						className: Object(r.a)(e, l.a.collapsibleFAQ)
					}, c.a.createElement("button", {
						className: l.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, c.a.createElement("span", {
						className: l.a.buttonContent,
						tabIndex: -1
					}, a, s ? c.a.createElement(o.a, {
						className: l.a.collapseIcon
					}) : c.a.createElement(i.a, {
						className: l.a.collapseIcon
					}))), c.a.createElement("div", {
						className: Object(r.a)(l.a.collapsibleAnswer, n)
					}, t))
				}
			}
			a.a = m
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, a, t) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				n = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/components/GildMarketingDescription/index.m.less"),
				r = t.n(l);
			a.a = e => {
				const {
					children: a,
					className: t,
					icon: s,
					isMobileStyled: l,
					title: i
				} = e;
				return c.a.createElement("div", {
					className: Object(n.a)(t, {
						[r.a.isMobileStyled]: l
					})
				}, c.a.createElement("div", {
					className: r.a.iconContainer
				}, s), c.a.createElement("div", {
					className: r.a.textContainer
				}, c.a.createElement("h3", {
					className: r.a.title
				}, i), c.a.createElement("p", {
					className: r.a.content
				}, a)))
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, a, t) {
			e.exports = {
				marketingPageFooter: "_3BwBOzWryMj3__GUbbUsfT",
				marketingPageFooterInner: "_30YqpAvDOv6bhMsdX4RBmh",
				linkContainer: "_3k49tjCFDJWYNMxa7F_Vcz",
				linkCol: "Kc3eh30cKiJsqGyYdTomf",
				linkBoldCol: "NdUUYBbykS5XarNMBnwW8",
				link: "_2__-I0A5TrnEaHBIKzBzWG",
				linkColInner: "Qeqi5He8ogV_wEJHq4JuY",
				linkItem: "_2faDmx1pVndPEOOWcvmbzy",
				legal: "_37R5bPLs9vyWkel2akHN9v",
				legalItem: "_3sfkqPfhkeoURTGRzBv1TP",
				legalLink: "_38avtjw3edhexhYWmJx1Rw"
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, a, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				n = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				l = t.n(n),
				r = t("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => c.a.createElement("div", {
				className: Object(r.a)(e.className, l.a.marketingPageFooter)
			}, c.a.createElement("div", {
				className: Object(r.a)(e.className, l.a.marketingPageFooterInner)
			}, c.a.createElement("div", {
				className: l.a.linkContainer
			}, c.a.createElement("div", {
				className: l.a.linkCol
			}, c.a.createElement("ul", {
				className: l.a.linkColInner
			}, c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://about.reddit.com"
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://about.reddit.com/careers/"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://about.reddit.com/press/"
			}, i._("press", null, {
				hk: "iUiGg"
			}))))), c.a.createElement("div", {
				className: l.a.linkCol
			}, c.a.createElement("ul", {
				className: l.a.linkColInner
			}, c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.redditinc.com/advertising"
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), c.a.createElement("div", {
				className: Object(r.a)(l.a.linkCol, l.a.linkBoldCol)
			}, c.a.createElement("ul", {
				className: l.a.linkColInner
			}, c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, i._("the reddit app", null, {
				hk: "OcJ1f"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "http://redditgifts.com/"
			}, i._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), c.a.createElement("div", {
				className: Object(r.a)(l.a.linkCol, l.a.linkBoldCol)
			}, c.a.createElement("ul", {
				className: l.a.linkColInner
			}, c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), c.a.createElement("li", {
				className: l.a.linkItem
			}, c.a.createElement("a", {
				className: l.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), c.a.createElement("ul", {
				className: l.a.legal
			}, c.a.createElement("li", {
				className: l.a.legalItem
			}, c.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), c.a.createElement("li", {
				className: l.a.legalItem
			}, c.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), c.a.createElement("li", {
				className: l.a.legalItem
			}, c.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), c.a.createElement("li", {
				className: l.a.legalItem
			}, c.a.createElement("a", {
				className: l.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), c.a.createElement("li", {
				className: l.a.legalItem
			}, i._("© {year} Reddit, Inc. All rights reserved", [i._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PremiumMarketingBanner/index.m.less": function(e, a, t) {
			e.exports = {
				premiumBanner: "_2tsT1sLHLYXqHUGNYQsm6-",
				premiumCrest: "_1ExqjoNTE2nif0e3QVdLwy",
				premiumDescription: "S8jGzZVfR9ZPB9DIOUB7f",
				premiumCTA: "svs_XC_fBjFtyJDODBqnd",
				premiumCta: "svs_XC_fBjFtyJDODBqnd"
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			t("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = t("./node_modules/react/index.js"),
				c = t.n(s);

			function n(e, a) {
				const t = e.split(":");
				return t.length % 2 == 0 ? e : t.reduce((e, t, s) => (s % 2 == 0 ? e.push(t) : "" === t ? e.push(":") : ":".concat(t, ":") in a ? e.push(a[":".concat(t, ":")]) : e.push(":".concat(t, ":")), e), []).map((e, a) => c.a.createElement(c.a.Fragment, {
					key: a
				}, e))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s);
			a.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("g", null, c.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/pages/CoinsPage/index.m.less": function(e, a, t) {
			e.exports = {
				hero: "_1qg-Q6O4dQxiciAWpoiuaG",
				heroInner: "_22K8cXQYjiN7RvnO6vr7ZP",
				heroTitle: "_2rqoUH-kXsEEbQ6atj_6NW",
				heroLogo: "R_miC0B81gMg7G0AWo24-",
				heroDescription: "_20emRn144-sI04C8-Mum6F",
				heroCTA: "_3AWbmc_FiZpQ-3JL728KmA",
				heroCta: "_3AWbmc_FiZpQ-3JL728KmA",
				detailGridSection: "_2pjmwu1Qey7ysALWYQIebR",
				detailTitle: "_1elsw4Hvj-wf_HngDYpCuU",
				detailDesription: "_2_Cebwoi5iZt1xC8t8Y87s",
				gridContainer: "_2VbuOyshVldGz4mZms1Qx8",
				gridItem: "_15wx7-Dy6OaPRg2oX97-cs",
				nowrap: "_1zlKaIoI_cWBNJLQYlCy4I",
				purchasePackagesSection: "_3O_T0NX7IDWLLIgZLWxJwk",
				purchaseTitle: "_3DeyHQ9gje-pf93nH48lKk",
				purchaseLogo: "_1Sj2-jzRwDnOmmzci0pMR5",
				purchasePackages: "_2m0gSo1z8uMcoEWC1T3pqG",
				purchasePackage: "_1l-HVUi8gitTQc_tDQWwgj",
				packageText: "_2HIbtTkiH8vmpbPEV2ATpJ",
				faqsSection: "_10UXwtZ8SpUvVCXzOVk2q0",
				faqsTitle: "_2DJp3NAVskfI_0YVI0RBFY",
				faqs: "KNbwqvczVayMcPxh6VdZc"
			}
		},
		"./src/reddit/pages/CoinsPage/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var s = t("./src/config.ts"),
				c = t("./src/lib/constants/index.ts"),
				n = t("./src/lib/loadRedditAdsPixel.ts"),
				l = t("./node_modules/lodash/times.js"),
				r = t.n(l),
				i = t("./node_modules/react/index.js"),
				o = t.n(i),
				m = t("./node_modules/react-redux/es/index.js"),
				d = t("./node_modules/react-router-redux/es/index.js"),
				p = t("./node_modules/reselect/es/index.js"),
				u = t("./src/reddit/components/TrackingHelper/index.tsx"),
				h = t("./src/reddit/helpers/trackers/coins.ts"),
				g = t("./src/reddit/helpers/trackers/screenview.ts"),
				E = t("./src/telemetry/index.ts"),
				k = t("./src/telemetry/models/Timer.ts"),
				N = t("./src/reddit/pages/CoinsPage/index.m.less"),
				v = t.n(N),
				b = t("./src/app/strings/index.ts"),
				x = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				w = t("./src/reddit/i18n/components.tsx"),
				_ = t("./src/reddit/i18n/utils.ts"),
				C = t("./src/reddit/models/Gold/Award.ts"),
				f = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				P = t("./src/reddit/actions/login.ts"),
				j = t("./src/reddit/contexts/PageLayer/index.tsx"),
				O = t("./src/reddit/models/Gold/Coins/index.ts"),
				A = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				T = t("./src/reddit/selectors/user.ts"),
				I = t("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				y = t("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				M = t.n(y),
				G = t("./src/lib/classNames/index.ts"),
				L = t("./src/reddit/controls/Button/index.tsx"),
				S = t("./src/reddit/icons/svgs/Coin/index.tsx"),
				F = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 96 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M45.31.614c1.411.984 3.72.984 5.13 0 1.412-.984 3.527-.761 4.703.494 1.175 1.256 3.434 1.736 5.018 1.067 1.584-.67 3.608-.012 4.495 1.461.89 1.472 2.998 2.412 4.687 2.087 1.69-.326 3.532.738 4.096 2.363.562 1.627 2.43 2.982 4.15 3.017 1.72.032 3.3 1.455 3.513 3.162.213 1.707 1.758 3.423 3.432 3.813 1.676.39 2.926 2.11 2.78 3.824-.147 1.715 1.007 3.714 2.565 4.444 1.558.729 2.423 2.672 1.923 4.319-.5 1.646.214 3.841 1.585 4.879 1.372 1.037 1.815 3.118.983 4.625-.83 1.506-.59 3.802.536 5.101 1.126 1.3 1.126 3.428 0 4.729-1.126 1.3-1.367 3.596-.536 5.102.832 1.506.39 3.586-.983 4.624-1.371 1.037-2.086 3.233-1.585 4.878.5 1.646-.365 3.591-1.923 4.32-1.558.73-2.712 2.729-2.565 4.443.146 1.714-1.104 3.435-2.78 3.825-1.674.39-3.22 2.106-3.432 3.812-.212 1.707-1.794 3.13-3.513 3.164-1.72.032-3.588 1.39-4.15 3.015-.564 1.626-2.406 2.69-4.096 2.365-1.689-.326-3.797.614-4.687 2.086-.887 1.473-2.911 2.13-4.495 1.461-1.584-.67-3.843-.19-5.018 1.066-1.176 1.257-3.291 1.48-4.703.495-1.41-.984-3.719-.984-5.13 0-1.41.985-3.526.762-4.702-.495-1.175-1.256-3.434-1.736-5.018-1.066-1.584.669-3.608.012-4.496-1.461-.889-1.472-2.997-2.412-4.687-2.086-1.689.325-3.531-.739-4.095-2.365-.562-1.625-2.43-2.983-4.15-3.015-1.72-.033-3.3-1.457-3.513-3.164-.213-1.706-1.758-3.422-3.432-3.812-1.676-.39-2.926-2.111-2.78-3.825.147-1.714-1.007-3.713-2.565-4.443-1.558-.729-2.423-2.674-1.923-4.32.5-1.645-.213-3.84-1.585-4.878-1.372-1.038-1.815-3.118-.983-4.624.83-1.506.59-3.802-.537-5.102-1.125-1.301-1.125-3.43 0-4.729 1.127-1.3 1.368-3.595.537-5.1-.832-1.508-.39-3.589.983-4.626 1.372-1.038 2.086-3.233 1.585-4.88-.5-1.646.365-3.59 1.923-4.318 1.558-.73 2.712-2.73 2.566-4.444-.147-1.714 1.103-3.434 2.779-3.824 1.674-.39 3.22-2.106 3.432-3.813.212-1.707 1.794-3.13 3.513-3.162 1.72-.035 3.588-1.39 4.15-3.017.564-1.625 2.406-2.69 4.095-2.363 1.69.325 3.798-.615 4.687-2.087.888-1.473 2.912-2.131 4.496-1.46 1.584.668 3.843.188 5.018-1.068C41.784-.147 43.9-.37 45.31.614"
				}));
			var D = e => {
					const {
						badgeText: a,
						buttonText: t,
						children: c,
						className: n,
						imgSrc: l,
						isLargeView: r,
						onClick: i,
						priceCurrency: m,
						priceInCoins: d,
						stampText: p,
						stampValue: u
					} = e, h = r ? M.a.large : "";
					return o.a.createElement("div", {
						className: Object(G.a)(n, M.a.coinPurchasePackage, h)
					}, o.a.createElement("div", {
						className: Object(G.a)(h, M.a.imageContainer),
						style: {
							backgroundImage: 'url("'.concat(s.a.assetPath, '/img/gold/coins-package-bg.jpg")')
						}
					}, o.a.createElement("img", {
						src: l
					}), a && o.a.createElement("div", {
						className: M.a.badge
					}, a), (u || p) && o.a.createElement("div", {
						className: Object(G.a)(M.a.stamp, h)
					}, o.a.createElement(F, {
						className: M.a.stampIcon
					}), !!u && o.a.createElement("div", {
						className: Object(G.a)(M.a.stampValue, h)
					}, u), !!p && o.a.createElement("div", {
						className: Object(G.a)(M.a.stampText, h)
					}, p))), o.a.createElement("div", {
						className: Object(G.a)(M.a.contentContainer, h)
					}, o.a.createElement("div", {
						className: Object(G.a)(M.a.price, h)
					}, o.a.createElement(S.a, {
						className: M.a.priceCoinIcon
					}), o.a.createElement("div", null, o.a.createElement("div", {
						className: M.a.priceValue
					}, Number(d).toLocaleString()), o.a.createElement("div", {
						className: M.a.priceCurrency
					}, m))), o.a.createElement("div", {
						className: Object(G.a)(M.a.description, h)
					}, c), o.a.createElement("div", {
						className: M.a.ctaContainer
					}, o.a.createElement(L.f, {
						className: Object(G.a)(M.a.cta, h),
						onClick: i
					}, t))))
				},
				V = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				R = t("./src/reddit/components/GildMarketingDescription/index.tsx"),
				B = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				z = t("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				q = t.n(z);
			const Q = e => {
				const {
					className: a,
					isGold: t,
					onGetPremium: c,
					onManagePremium: n
				} = e, l = "".concat(s.a.assetPath, "/img/gold/coins-premium-g.png");
				return o.a.createElement("div", {
					className: Object(G.a)(q.a.premiumBanner, a)
				}, o.a.createElement("img", {
					className: q.a.premiumCrest,
					src: l
				}), o.a.createElement("h2", {
					className: q.a.premiumDescription
				}, o.a.createElement(w.c, null, "Get 700 Coins every month with Reddit Premium and browse ads-free")), t ? o.a.createElement(L.f, {
					className: q.a.premiumCTA,
					onClick: n
				}, o.a.createElement(w.c, null, "Manage")) : o.a.createElement(L.f, {
					className: q.a.premiumCTA,
					onClick: c
				}, o.a.createElement(w.c, null, o.a.createElement(w.b, {
					name: "monthly-price"
				}, "$5.99"), "/Month")))
			};
			var H = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				U = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 446 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M257.65 32.844a6.096 6.096 0 1 1-12.19.22 6.096 6.096 0 0 1 12.19-.22",
					fill: "#DDBD37"
				}), o.a.createElement("path", {
					d: "M153.263 45.035c4.146 0 7.673 3.181 8.98 7.62h-17.96c1.307-4.439 4.834-7.62 8.98-7.62zm11.604 13.715c2.968 0 4.697-2.219 4.567-4.402-.068-1.154-.17-1.872-.306-2.458-1.819-7.885-8.232-13.712-15.865-13.712-9.048 0-16.382 8.187-16.382 18.287s7.334 18.286 16.382 18.286c5.667 0 9.715-2.064 12.661-5.299 1.436-1.576 1.172-4.053-.58-5.27-1.422-.989-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.607 0-8.451-3.927-9.334-9.144h20.938zm-27.605-17.028a3.427 3.427 0 0 0-2.864-3.378c-4.993-.753-9.66 1.11-12.375 4.485v-.461c0-2.094-1.714-3.428-3.429-3.428a3.429 3.429 0 0 0-3.429 3.428v28.059c0 1.836 1.385 3.446 3.217 3.557a3.43 3.43 0 0 0 3.641-3.423V56.087c0-6.405 4.817-11.665 11.426-10.95.239.025.463.023.677-.001a3.427 3.427 0 0 0 3.136-3.414zm117.722 3.694a3.429 3.429 0 1 0-6.857 0v25.145a3.429 3.429 0 0 0 6.857 0V45.416zm-66.671 22.478c-5.261 0-9.524-5.117-9.524-11.43 0-6.311 4.263-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.51 0 6.452-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm20.191 41.526c-5.26 0-9.524-5.117-9.524-11.43 0-6.311 4.264-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.511 0 6.453-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm32.66 44.192V45.037h3.048c1.624 0 3.04-1.225 3.145-2.845a3.047 3.047 0 0 0-3.041-3.251h-3.152v-4.835c0-1.826-1.378-3.421-3.2-3.54a3.43 3.43 0 0 0-3.657 3.423v4.952h-2.84c-1.622 0-3.04 1.225-3.145 2.845a3.048 3.048 0 0 0 3.04 3.25h2.945v25.526a3.429 3.429 0 1 0 6.857 0v-.002z",
					fill: "#FFF"
				}), o.a.createElement("path", {
					d: "M307.89 75.071c-5.073 0-9.042-1.572-11.91-4.716-2.869-3.142-4.301-7.36-4.301-12.65 0-2.302.385-4.455 1.154-6.458a17.553 17.553 0 0 1 3.36-5.462c1.398-1.57 3.153-2.839 5.262-3.802 2.108-.962 4.407-1.444 6.897-1.444 3.435 0 6.23.77 8.389 2.307 2.155 1.538 3.233 3.636 3.233 6.292 0 1.107-.283 2.086-.852 2.94-.568.852-1.505 1.277-2.808 1.277-1.4 0-2.484-.33-3.255-.992-.769-.662-1.153-1.4-1.153-2.218 0-.992.143-2.013.426-3.062.285-1.048.45-1.815.498-2.3-.426-.684-1.058-1.142-1.898-1.373a10.132 10.132 0 0 0-2.712-.348 7.942 7.942 0 0 0-3.244.681c-1.029.455-2.028 1.29-2.998 2.508-.872 1.105-1.584 2.6-2.125 4.481-.544 1.883-.816 4.129-.816 6.74 0 4.119.975 7.478 2.928 10.078 1.953 2.6 4.515 3.901 7.685 3.901 2.294 0 4.217-.523 5.767-1.569 1.55-1.045 2.987-2.614 4.312-4.706l2.273 1.394c-1.564 2.612-3.626 4.683-6.186 6.21-2.559 1.526-5.203 2.29-7.927 2.29v.001zm42.051-18.022c0-1.66-.186-3.414-.555-5.264-.368-1.848-.923-3.413-1.66-4.698-.786-1.372-1.823-2.474-3.1-3.303-1.279-.83-2.841-1.245-4.688-1.245-1.894 0-3.513.42-4.852 1.261-1.342.841-2.43 1.992-3.266 3.453-.787 1.352-1.341 2.89-1.662 4.616a27.447 27.447 0 0 0-.479 5.014c0 2.124.19 4.09.573 5.893.381 1.803.99 3.415 1.826 4.831.836 1.417 1.888 2.53 3.155 3.337 1.268.808 2.837 1.212 4.705 1.212 3.075 0 5.514-1.338 7.307-4.017 1.797-2.68 2.696-6.376 2.696-11.09zm6.746.457a20.474 20.474 0 0 1-1.167 6.79c-.775 2.224-1.88 4.11-3.318 5.66-1.624 1.77-3.508 3.088-5.65 3.951-2.144.863-4.544 1.295-7.204 1.295-2.213 0-4.322-.393-6.321-1.178a16.016 16.016 0 0 1-5.334-3.436c-1.53-1.484-2.75-3.294-3.654-5.43-.907-2.135-1.36-4.531-1.36-7.188 0-5.114 1.583-9.297 4.75-12.55 3.164-3.255 7.316-4.881 12.447-4.881 4.875 0 8.894 1.544 12.06 4.632 3.168 3.087 4.751 7.198 4.751 12.334v.001zm9.087-18.776c3.919 0 7.096-2.729 7.096-6.095 0-3.367-3.177-6.096-7.096-6.096-3.918 0-7.095 2.729-7.095 6.095 0 3.366 3.177 6.095 7.095 6.095v.001zm9.004 32.505c-.54-.13-1.07-.29-1.587-.481-.712-.244-1.234-.621-1.566-1.13-.332-.508-.499-1.151-.499-1.925V43.004l-.521-.465-12.926.73v2.192c.742.044 1.56.16 2.45.348.893.188 1.571.414 2.044.68.625.379 1.14.884 1.504 1.475.358.586.54 1.233.54 1.94v18.197c0 .796-.169 1.443-.503 1.94-.336.498-.847.846-1.54 1.045a7.515 7.515 0 0 1-1.58.265c-.608.044-1.197.089-1.765.133v2.19h17.683v-2.19a10.794 10.794 0 0 1-1.734-.25v.001zm41.423 2.938h-16.88v-2.19c.536-.045 1.125-.09 1.768-.134.644-.044 1.174-.133 1.595-.266.654-.199 1.137-.548 1.453-1.046.314-.498.474-1.145.474-1.942V51.761c0-2.324-.582-4.117-1.74-5.379-1.157-1.262-2.568-1.893-4.229-1.893-1.24 0-2.375.183-3.405.548a12.31 12.31 0 0 0-2.739 1.345c-.772.51-1.386 1.057-1.843 1.644-.454.586-.79 1.056-1 1.411v18.826c0 .753.163 1.372.491 1.86.325.487.816.862 1.47 1.128.491.222 1.02.388 1.593.498.573.111 1.163.19 1.77.233v2.191h-16.915v-2.19c.536-.045 1.09-.09 1.662-.134a6.656 6.656 0 0 0 1.49-.266c.654-.198 1.137-.547 1.452-1.044.316-.498.475-1.144.475-1.94V48.402c0-.75-.172-1.443-.51-2.073a4.202 4.202 0 0 0-1.417-1.542 4.96 4.96 0 0 0-1.576-.58 14.623 14.623 0 0 0-1.961-.249v-2.19l11.486-.732.49.465v4.615h.176a80.132 80.132 0 0 1 2.101-1.909c.84-.74 1.635-1.345 2.382-1.809.862-.532 1.89-.974 3.082-1.329 1.192-.354 2.531-.53 4.027-.53 3.315 0 5.772.98 7.372 2.938 1.597 1.96 2.399 4.565 2.399 7.82v17.032c0 .775.14 1.401.42 1.876.28.476.76.847 1.436 1.113.56.221 1.045.376 1.453.464.407.09.974.156 1.699.2v2.191h-.001zm25.829-15.97a8.51 8.51 0 0 1 2.263 2.756c.526 1.04.79 2.313.79 3.818 0 3.032-1.228 5.512-3.683 7.438-2.456 1.926-5.634 2.888-9.536 2.888-2.061 0-3.96-.343-5.696-1.029-1.737-.686-2.975-1.317-3.717-1.892l-.719 2.158h-2.694l-.359-11.389h2.479c.19.866.598 1.877 1.222 3.032a14.422 14.422 0 0 0 2.263 3.132A12.387 12.387 0 0 0 428 71.581c1.306.666 2.773 1 4.404 1 2.298 0 4.068-.485 5.315-1.454 1.244-.969 1.868-2.355 1.868-4.158 0-.93-.198-1.733-.594-2.408-.395-.674-.976-1.267-1.741-1.776-.79-.509-1.76-.969-2.91-1.378a61.473 61.473 0 0 0-3.844-1.212 37.522 37.522 0 0 1-3.754-1.278c-1.379-.542-2.558-1.179-3.538-1.909a9.558 9.558 0 0 1-2.586-2.856c-.673-1.129-1.006-2.457-1.006-3.984 0-2.679 1.076-4.947 3.233-6.807 2.155-1.859 5.04-2.789 8.656-2.789 1.39 0 2.807.166 4.257.498 1.45.332 2.629.731 3.54 1.195l.825-1.726h2.587l.54 10.525h-2.478c-.505-2.356-1.589-4.273-3.254-5.752-1.665-1.477-3.694-2.216-6.088-2.216-1.965 0-3.51.457-4.634 1.371-1.125.914-1.688 2.017-1.688 3.31 0 .996.184 1.826.555 2.49.372.665.927 1.23 1.672 1.694.718.442 1.62.857 2.711 1.245a92.24 92.24 0 0 0 4.042 1.311c1.53.446 3.024.99 4.472 1.627 1.401.621 2.557 1.306 3.468 2.06v-.001zM96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48",
					fill: "#DDBD37"
				}), o.a.createElement("path", {
					d: "M59 58.001c-2.757 0-5-2.243-5-5a5.006 5.006 0 0 1 5-5c2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5m.88 8.211c-3.412 3.408-9.95 3.673-11.874 3.673-1.924 0-8.463-.265-11.872-3.673a1.296 1.296 0 1 1 1.833-1.833c2.151 2.151 6.752 2.915 10.04 2.915 3.285 0 7.888-.764 10.042-2.915a1.296 1.296 0 0 1 1.831 1.833M32 53c0-2.757 2.244-5 5.002-5A5.005 5.005 0 0 1 42 53a5.004 5.004 0 0 1-4.998 5A5.006 5.006 0 0 1 32 53m47.992-5a7 7 0 0 0-7-7 6.97 6.97 0 0 0-4.855 1.964c-4.784-3.453-11.377-5.683-18.72-5.94l3.188-15.002 10.418 2.215C63.15 26.887 65.32 29 68 29a5 5 0 0 0 0-10c-1.965 0-3.646 1.143-4.465 2.79l-11.633-2.473a1.251 1.251 0 0 0-1.482.963l-3.56 16.741c-7.452.207-14.149 2.44-18.996 5.93a6.972 6.972 0 0 0-4.84-1.95 7 7 0 0 0-7 7 7 7 0 0 0 4.135 6.382c-.11.7-.166 1.408-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.71-.058-1.412-.165-2.103A7 7 0 0 0 79.992 48",
					fill: "#FFF"
				}));
			const Y = Object(j.t)({
					isCompletePaypal: e => !!Object(j.R)(e).thanks
				}),
				W = Object(p.c)({
					isGold: T.q,
					language: T.S,
					isLoggedIn: T.J,
					shouldShowCoinPurchaseModal: A.d
				}),
				J = Object(m.b)(W, (e, a) => ({
					onRouteToManagePremium: () => e(Object(d.b)("/settings/gold")),
					onRouteToPremium: () => e(Object(d.b)("/premium")),
					onOpenLoginModal: () => e(Object(P.e)()),
					onPurchasePackage: a => e(Object(f.i)({
						coinPackage: a,
						correlationId: h.e()
					}))
				})),
				X = 8;
			class K extends o.a.Component {
				constructor() {
					super(...arguments), this.purchaseSection = o.a.createRef(), this.perksSection = o.a.createRef(), this.onClickGetCoins = () => {
						this.props.sendEvent(h.b()), this.purchaseSection.current && window.scrollTo({
							behavior: "smooth",
							top: this.purchaseSection.current.offsetTop - 50
						})
					}, this.onClickPurchase = e => {
						const {
							isLoggedIn: a,
							onPurchasePackage: t,
							onOpenLoginModal: s,
							sendEvent: c
						} = this.props;
						a && c(h.a(e.coins)), a ? t(e) : s()
					}, this.onClickGetPremium = () => {
						const {
							onRouteToPremium: e,
							sendEvent: a
						} = this.props;
						a(h.c()), e()
					}
				}
				componentDidMount() {
					h.e() || h.f(), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = c.xb.COINS;
					E.c.has(e) && this.props.sendEvent(Object(g.a)(k.TimerType.InApp, E.c.end(e))), Object(n.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return o.a.createElement("div", {
						className: e
					}, this.renderHero(), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), this.renderModal(), o.a.createElement(B.a, null))
				}
				renderHero() {
					return o.a.createElement("div", {
						className: v.a.hero,
						style: {
							backgroundImage: 'url("'.concat(s.a.assetPath, '/img/gold/coins-hero.jpg")')
						}
					}, o.a.createElement("div", {
						className: v.a.heroInner
					}, o.a.createElement("h1", {
						className: v.a.heroTitle
					}, o.a.createElement(U, {
						className: v.a.heroLogo
					})), o.a.createElement("p", {
						className: v.a.heroDescription
					}, o.a.createElement(w.c, null, "Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better.")), o.a.createElement(L.c, {
						className: v.a.heroCTA,
						onClick: this.onClickGetCoins
					}, o.a.createElement(w.c, null, "Get coins"))))
				}
				renderGildBreakdown() {
					return o.a.createElement("div", {
						className: v.a.detailGridSection,
						ref: this.perksSection
					}, o.a.createElement("h2", {
						className: v.a.detailTitle
					}, o.a.createElement(w.c, null, "Here’s what you can buy with Coins")), o.a.createElement("p", {
						className: v.a.detailDesription
					}, o.a.createElement(w.c, null, "Spend your Coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.")), o.a.createElement("div", {
						className: v.a.gridContainer
					}, o.a.createElement(R.a, {
						className: v.a.gridItem,
						icon: o.a.createElement("img", {
							src: "".concat(s.a.assetPath, "/img/gold/badges/award-silver-large.png")
						}),
						title: Object(_.c)("Silver Award")
					}, Object(x.a)(Object(_.c)("Shows a Silver Award on the post or comment and ... that’s it. You’ll need :coin_price: Coins."), {
						":coin_price:": o.a.createElement("span", {
							className: v.a.nowrap
						}, o.a.createElement(H.a, null), C.k.coinPrice)
					})), o.a.createElement(R.a, {
						className: v.a.gridItem,
						icon: o.a.createElement("img", {
							src: "".concat(s.a.assetPath, "/img/gold/badges/award-gold-large.png")
						}),
						title: Object(_.c)("Gold Award")
					}, Object(x.a)(Object(_.c)("Gives the recipient a week of Reddit Premium (including :coin_benefit: Coins) and shows a Gold Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": o.a.createElement("span", {
							className: v.a.nowrap
						}, o.a.createElement(H.a, null), "100"),
						":coin_price:": o.a.createElement("span", {
							className: v.a.nowrap
						}, o.a.createElement(H.a, null), C.i.coinPrice)
					})), o.a.createElement(R.a, {
						className: v.a.gridItem,
						icon: o.a.createElement("img", {
							src: "".concat(s.a.assetPath, "/img/gold/badges/award-platinum-large.png")
						}),
						title: Object(_.c)("Platinum Award")
					}, Object(x.a)(Object(_.c)("Gives the recipient a month of Reddit Premium, which includes :coin_benefit: Coins for that month, and shows a Platinum Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": o.a.createElement("span", {
							className: v.a.nowrap
						}, o.a.createElement(H.a, null), "700"),
						":coin_price:": o.a.createElement("span", {
							className: v.a.nowrap
						}, o.a.createElement(H.a, null), C.j.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						isGold: e,
						onRouteToManagePremium: a
					} = this.props, t = [O.a.coins1800, O.a.coins500, O.a.coins1100, O.a.coins7200, O.a.coins40000];
					return o.a.createElement("div", {
						className: v.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: 'url("'.concat(s.a.assetPath, '/img/gold/coins-premium-bg.jpg")')
						}
					}, o.a.createElement("h2", {
						className: v.a.purchaseTitle
					}, o.a.createElement(U, {
						className: v.a.purchaseLogo
					})), o.a.createElement("div", {
						className: v.a.purchasePackages
					}, o.a.createElement(D, {
						className: v.a.purchasePackage,
						buttonText: "$".concat(t[0].pennies / 100),
						imgSrc: t[0].assetPath,
						isLargeView: !0,
						onClick: () => this.onClickPurchase(t[0]),
						priceCurrency: Object(_.c)("coins"),
						priceInCoins: t[0].coins,
						stampValue: "20%",
						stampText: Object(_.c)("bonus"),
						badgeText: Object(_.c)("Finest option")
					}, o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "Give one Platinum Award, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 3 Gold Awards, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 18 Silver Awards."))), o.a.createElement(D, {
						className: v.a.purchasePackage,
						buttonText: "$".concat(t[1].pennies / 100),
						imgSrc: t[1].assetPath,
						onClick: () => this.onClickPurchase(t[1]),
						priceCurrency: Object(_.c)("coins"),
						priceInCoins: t[1].coins
					}, o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "Give one Gold Award ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 5 Silver Awards."))), o.a.createElement(D, {
						className: v.a.purchasePackage,
						buttonText: "$".concat(t[2].pennies / 100),
						imgSrc: t[2].assetPath,
						onClick: () => this.onClickPurchase(t[2]),
						priceCurrency: Object(_.c)("coins"),
						priceInCoins: t[2].coins,
						stampValue: "10%",
						stampText: Object(_.c)("bonus")
					}, o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "Give 2 Gold Awards, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 11 Silver Awards."))), o.a.createElement(D, {
						className: v.a.purchasePackage,
						buttonText: "$".concat(t[3].pennies / 100),
						imgSrc: t[3].assetPath,
						onClick: () => this.onClickPurchase(t[3]),
						priceCurrency: Object(_.c)("coins"),
						priceInCoins: t[3].coins,
						stampValue: "43%",
						stampText: Object(_.c)("bonus")
					}, o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "Give 4 Platinum Awards, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 14 Gold Awards, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 72 Silver Awards."))), o.a.createElement(D, {
						className: v.a.purchasePackage,
						buttonText: "$".concat(t[4].pennies / 100),
						imgSrc: t[4].assetPath,
						onClick: () => this.onClickPurchase(t[4]),
						priceCurrency: Object(_.c)("coins"),
						priceInCoins: t[4].coins,
						stampValue: "59%",
						stampText: Object(_.c)("bonus")
					}, o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "Give 22 Platinum Awards, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 80 Gold Awards, ")), o.a.createElement("div", {
						className: v.a.packageText
					}, o.a.createElement(w.c, null, "or 400 Silver Awards."))), o.a.createElement(Q, {
						isGold: e,
						onGetPremium: this.onClickGetPremium,
						onManagePremium: a
					})))
				}
				renderFAQSection() {
					const {
						language: e
					} = this.props;
					return o.a.createElement("div", {
						className: v.a.faqsSection
					}, o.a.createElement("h2", {
						className: v.a.faqsTitle
					}, o.a.createElement(w.c, null, "Coins FAQ")), o.a.createElement("div", {
						className: v.a.faqs
					}, r()(X, a => o.a.createElement(V.a, {
						defaultClosed: !0,
						question: Object(b.a)(e, "gold.coinsFAQ.item".concat(a + 1, ".question")),
						key: a
					}, Object(b.a)(e, "gold.coinsFAQ.item".concat(a + 1, ".answer"))))))
				}
				renderModal() {
					const {
						isCompletePaypal: e,
						shouldShowCoinPurchaseModal: a
					} = this.props;
					return a && o.a.createElement(I.a, {
						isCompletePaypal: e
					})
				}
				componentWillUnmount() {
					h.d()
				}
			}
			a.default = Y(J(Object(u.b)(K)))
		}
	}
]);
//# sourceMappingURL=Coins.60299a96836113fb4290.js.map