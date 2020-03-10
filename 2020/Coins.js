// https://www.redditstatic.com/desktop2x/Coins.ea3538e4eccf17c31cbb.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Coins"], {
		"./node_modules/lodash/times.js": function(e, a, t) {
			var s = t("./node_modules/lodash/_baseTimes.js"),
				n = t("./node_modules/lodash/_castFunction.js"),
				c = t("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				l = Math.min;
			e.exports = function(e, a) {
				if ((e = c(e)) < 1 || e > r) return [];
				var t = i,
					o = l(e, i);
				a = n(a), e -= i;
				for (var m = s(o, a); ++t < e;) a(t);
				return m
			}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			})), t.d(a, "b", (function() {
				return c
			}));
			var s = t("./src/lib/sentry/index.ts");

			function n() {
				! function(e, a) {
					if (!e.rdt) {
						var t = e.rdt = function() {
							t.sendEvent ? t.sendEvent.apply(t, arguments) : t.callQueue.push(arguments)
						};
						t.callQueue = [];
						var s = a.createElement("script");
						s.src = "https://www.redditstatic.com/ads/pixel.js", s.async = !0;
						var n = a.getElementsByTagName("script")[0];
						n.parentNode.insertBefore(s, n)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const c = () => {
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
				crossout: "dIoLyZbXoDJefsplq4m_j",
				description: "_36_v0R5TTjmgVJ4q6NSB-6",
				ctaContainer: "_34OTQdJgV4WKGff3WUOMAj",
				cta: "_2VikcGTdLgHpqRMo203jak"
			}
		},
		"./src/reddit/components/CoinPurchasePackage/placeholder.m.less": function(e, a, t) {
			e.exports = {
				packagePlaceholder: "_2qznWNxYQ2Sp1T5Gx9Ya2r",
				large: "_21Ve23nfMGEg24nP4w5bKj"
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
				n = t.n(s),
				c = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				r = t.n(c),
				i = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				o = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends n.a.Component {
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
					} = this.state, c = s ? r.a.isOpen : "";
					return n.a.createElement("div", {
						className: Object(i.a)(e, r.a.collapsibleFAQ)
					}, n.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, n.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, a, s ? n.a.createElement(o.a, {
						className: r.a.collapseIcon
					}) : n.a.createElement(l.a, {
						className: r.a.collapseIcon
					}))), n.a.createElement("div", {
						className: Object(i.a)(r.a.collapsibleAnswer, c)
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
				n = t.n(s),
				c = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/components/GildMarketingDescription/index.m.less"),
				i = t.n(r);
			a.a = e => {
				const {
					children: a,
					className: t,
					icon: s,
					isMobileStyled: r,
					title: l
				} = e;
				return n.a.createElement("div", {
					className: Object(c.a)(t, {
						[i.a.isMobileStyled]: r
					})
				}, n.a.createElement("div", {
					className: i.a.iconContainer
				}, s), n.a.createElement("div", {
					className: i.a.textContainer
				}, n.a.createElement("h3", {
					className: i.a.title
				}, l), n.a.createElement("p", {
					className: i.a.content
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
				n = t.n(s),
				c = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				r = t.n(c),
				i = t("./src/lib/classNames/index.ts");
			const {
				fbt: l
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: Object(i.a)(e.className, r.a.marketingPageFooter)
			}, n.a.createElement("div", {
				className: Object(i.a)(e.className, r.a.marketingPageFooterInner)
			}, n.a.createElement("div", {
				className: r.a.linkContainer
			}, n.a.createElement("div", {
				className: r.a.linkCol
			}, n.a.createElement("ul", {
				className: r.a.linkColInner
			}, n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "3IO4c7"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "2GATRU"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "iUiGg"
			}))))), n.a.createElement("div", {
				className: r.a.linkCol
			}, n.a.createElement("ul", {
				className: r.a.linkColInner
			}, n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "RYuIn"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "4xzWuA"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "36XyzA"
			}))))), n.a.createElement("div", {
				className: Object(i.a)(r.a.linkCol, r.a.linkBoldCol)
			}, n.a.createElement("ul", {
				className: r.a.linkColInner
			}, n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, l._("the reddit app", null, {
				hk: "OcJ1f"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/coins"
			}, l._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/premium"
			}, l._("reddit premium", null, {
				hk: "3vPbLO"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "http://redditgifts.com/"
			}, l._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), n.a.createElement("div", {
				className: Object(i.a)(r.a.linkCol, r.a.linkBoldCol)
			}, n.a.createElement("ul", {
				className: r.a.linkColInner
			}, n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.facebook.com/reddit/"
			}, l._("Facebook", null, {
				hk: "47DT2F"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://twitter.com/reddit"
			}, l._("Twitter", null, {
				hk: "3aUv7u"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.instagram.com/reddit/"
			}, l._("Instagram", null, {
				hk: "dVIRX"
			})))))), n.a.createElement("ul", {
				className: r.a.legal
			}, n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("content policy", null, {
				hk: "4ptiaZ"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("privacy policy", null, {
				hk: "1ybjnz"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("user agreement", null, {
				hk: "4puRxC"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("mod policy", null, {
				hk: "1VvAdM"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, l._("© {year} Reddit, Inc. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
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
				return c
			}));
			t("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = t("./node_modules/react/index.js"),
				n = t.n(s);

			function c(e, a) {
				const t = e.split(":");
				return t.length % 2 == 0 ? e : t.reduce((e, t, s) => (s % 2 == 0 ? e.push(t) : "" === t ? e.push(":") : ":".concat(t, ":") in a ? e.push(a[":".concat(t, ":")]) : e.push(":".concat(t, ":")), e), []).map((e, a) => n.a.createElement(n.a.Fragment, {
					key: a
				}, e))
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, a, t) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return r
			})), t.d(a, "b", (function() {
				return i
			}));
			var s = t("./src/lib/classNames/index.ts"),
				n = t("./src/reddit/helpers/styles/mixins/loading.m.less"),
				c = t.n(n);
			const r = e => {
					let {
						isLoading: a
					} = e;
					return Object(s.a)(c.a.loadingBackground, {
						[c.a["m-loading"]]: a
					})
				},
				i = e => Object(s.a)(c.a.loadingBar, r(e))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				n = t.n(s);
			a.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return n
			})), t.d(a, "a", (function() {
				return c
			}));
			var s = t("./node_modules/fbt/lib/FbtPublic.js");
			const n = (e, a, t) => {
					let s = null;
					for (const n of a) {
						const a = s ? s.coins : 1 / 0,
							c = n.coins;
						if (c >= e && c < a) {
							if (t && n.coins < 1e3) continue;
							s = n
						}
					}
					return s
				},
				c = [{
					prompt: () => s.fbt._("What are Coins?", null, {
						hk: "1wU35D"
					}),
					answer: () => s.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your Coins in the future.", null, {
						hk: "4Wf9n"
					})
				}, {
					prompt: () => s.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => s.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => s.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => s.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 Coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 Coins and gives the recipient a week of Reddit Premium membership and 100 Coins. Finally, the ultra rare Platinum Award costs 1800 Coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 Coins for that month.", null, {
						hk: "sPegC"
					})
				}, {
					prompt: () => s.fbt._("I bought Coins, how can I tell how many I have?", null, {
						hk: "VVChk"
					}),
					answer: () => s.fbt._("If you buy Coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "1ZHMGy"
					})
				}, {
					prompt: () => s.fbt._("Can I transfer Coins between Reddit accounts?", null, {
						hk: "1VS4Gc"
					}),
					answer: () => s.fbt._("You cannot transfer your Reddit Coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 Coins.", null, {
						hk: "46q9mb"
					})
				}, {
					prompt: () => s.fbt._("Can I get Coins for free?", null, {
						hk: "2Qzs1G"
					}),
					answer: () => s.fbt._("We may give away Coins on special occasions. Stay tuned!", null, {
						hk: "30yIpE"
					})
				}, {
					prompt: () => s.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => s.fbt._("Yes, Creddits are simply called \"Coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 Coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3ZI3ct"
					})
				}, {
					prompt: () => s.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => s.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "Coins".', null, {
						hk: "FjaSU"
					})
				}]
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
				n = t("./node_modules/lodash/times.js"),
				c = t.n(n),
				r = t("./node_modules/react/index.js"),
				i = t.n(r),
				l = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/react-router-redux/es/index.js"),
				m = t("./node_modules/reselect/es/index.js"),
				d = t("./src/lib/constants/index.ts"),
				u = t("./src/lib/loadRedditAdsPixel.ts"),
				p = t("./src/reddit/components/TrackingHelper/index.tsx"),
				h = t("./src/reddit/helpers/trackers/coins.ts"),
				g = t("./src/reddit/helpers/trackers/screenview.ts"),
				b = t("./src/telemetry/index.ts"),
				k = t("./src/telemetry/models/Timer.ts"),
				f = t("./src/reddit/pages/CoinsPage/index.m.less"),
				w = t.n(f),
				v = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				E = t("./src/reddit/i18n/components.tsx"),
				_ = t("./src/reddit/i18n/utils.ts"),
				N = t("./src/reddit/models/Gold/Award.ts"),
				C = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				x = t("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				P = t("./src/reddit/actions/login.ts"),
				y = t("./src/reddit/contexts/PageLayer/index.tsx"),
				j = t("./src/reddit/models/Gold/Coins/index.ts"),
				O = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				I = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				A = t("./src/reddit/selectors/user.ts"),
				M = t("./src/reddit/components/CoinPurchaseModal/Loader.tsx"),
				G = t("./node_modules/fbt/lib/FbtPublic.js"),
				T = t("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				L = t.n(T),
				R = t("./src/lib/classNames/index.ts"),
				S = t("./src/reddit/controls/Button/index.tsx"),
				D = t("./src/reddit/icons/svgs/Coin/index.tsx"),
				F = e => i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 96 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M45.31.614c1.411.984 3.72.984 5.13 0 1.412-.984 3.527-.761 4.703.494 1.175 1.256 3.434 1.736 5.018 1.067 1.584-.67 3.608-.012 4.495 1.461.89 1.472 2.998 2.412 4.687 2.087 1.69-.326 3.532.738 4.096 2.363.562 1.627 2.43 2.982 4.15 3.017 1.72.032 3.3 1.455 3.513 3.162.213 1.707 1.758 3.423 3.432 3.813 1.676.39 2.926 2.11 2.78 3.824-.147 1.715 1.007 3.714 2.565 4.444 1.558.729 2.423 2.672 1.923 4.319-.5 1.646.214 3.841 1.585 4.879 1.372 1.037 1.815 3.118.983 4.625-.83 1.506-.59 3.802.536 5.101 1.126 1.3 1.126 3.428 0 4.729-1.126 1.3-1.367 3.596-.536 5.102.832 1.506.39 3.586-.983 4.624-1.371 1.037-2.086 3.233-1.585 4.878.5 1.646-.365 3.591-1.923 4.32-1.558.73-2.712 2.729-2.565 4.443.146 1.714-1.104 3.435-2.78 3.825-1.674.39-3.22 2.106-3.432 3.812-.212 1.707-1.794 3.13-3.513 3.164-1.72.032-3.588 1.39-4.15 3.015-.564 1.626-2.406 2.69-4.096 2.365-1.689-.326-3.797.614-4.687 2.086-.887 1.473-2.911 2.13-4.495 1.461-1.584-.67-3.843-.19-5.018 1.066-1.176 1.257-3.291 1.48-4.703.495-1.41-.984-3.719-.984-5.13 0-1.41.985-3.526.762-4.702-.495-1.175-1.256-3.434-1.736-5.018-1.066-1.584.669-3.608.012-4.496-1.461-.889-1.472-2.997-2.412-4.687-2.086-1.689.325-3.531-.739-4.095-2.365-.562-1.625-2.43-2.983-4.15-3.015-1.72-.033-3.3-1.457-3.513-3.164-.213-1.706-1.758-3.422-3.432-3.812-1.676-.39-2.926-2.111-2.78-3.825.147-1.714-1.007-3.713-2.565-4.443-1.558-.729-2.423-2.674-1.923-4.32.5-1.645-.213-3.84-1.585-4.878-1.372-1.038-1.815-3.118-.983-4.624.83-1.506.59-3.802-.537-5.102-1.125-1.301-1.125-3.43 0-4.729 1.127-1.3 1.368-3.595.537-5.1-.832-1.508-.39-3.589.983-4.626 1.372-1.038 2.086-3.233 1.585-4.88-.5-1.646.365-3.59 1.923-4.318 1.558-.73 2.712-2.73 2.566-4.444-.147-1.714 1.103-3.434 2.779-3.824 1.674-.39 3.22-2.106 3.432-3.813.212-1.707 1.794-3.13 3.513-3.162 1.72-.035 3.588-1.39 4.15-3.017.564-1.625 2.406-2.69 4.095-2.363 1.69.325 3.798-.615 4.687-2.087.888-1.473 2.912-2.131 4.496-1.46 1.584.668 3.843.188 5.018-1.068C41.784-.147 43.9-.37 45.31.614"
				}));
			var V = e => {
					const {
						className: a,
						coinPackage: t,
						isLargeView: s,
						onClick: n
					} = e, {
						baselineCoins: c,
						bonusPct: r,
						coins: l,
						description: o,
						featuredLabel: m,
						images: d,
						pennies: u
					} = t, p = "$".concat(u / 100), h = l.toLocaleString(), g = s ? d.marketing["4x"].url : d.marketing["2x"].url, b = r && "".concat(r.toLocaleString(), "%"), k = G.fbt._("bonus", null, {
						hk: "L8mcp"
					}), f = s ? L.a.large : "", w = c !== l;
					return i.a.createElement("div", {
						className: Object(R.a)(a, L.a.coinPurchasePackage, f)
					}, i.a.createElement("div", {
						className: Object(R.a)(f, L.a.imageContainer)
					}, i.a.createElement("img", {
						src: g
					}), m && i.a.createElement("div", {
						className: L.a.badge
					}, m), b && i.a.createElement("div", {
						className: Object(R.a)(L.a.stamp, f)
					}, i.a.createElement(F, {
						className: L.a.stampIcon
					}), i.a.createElement("div", {
						className: Object(R.a)(L.a.stampValue, f)
					}, b), i.a.createElement("div", {
						className: Object(R.a)(L.a.stampText, f)
					}, k))), i.a.createElement("div", {
						className: Object(R.a)(L.a.contentContainer, f)
					}, i.a.createElement("div", {
						className: Object(R.a)(L.a.price, f)
					}, i.a.createElement(D.a, {
						className: L.a.priceCoinIcon
					}), i.a.createElement("div", null, i.a.createElement("div", {
						className: L.a.priceValue
					}, h), w ? i.a.createElement("div", {
						className: Object(R.a)(L.a.priceCurrency, L.a.crossout)
					}, G.fbt._("{Non-sale number of coins} Coins", [G.fbt._param("Non-sale number of coins", c.toLocaleString())], {
						hk: "26szgy"
					})) : i.a.createElement("div", {
						className: L.a.priceCurrency
					}, G.fbt._("Coins", null, {
						hk: "PSM7c"
					})))), i.a.createElement("div", {
						className: Object(R.a)(L.a.description, f)
					}, o), i.a.createElement("div", {
						className: L.a.ctaContainer
					}, i.a.createElement(S.f, {
						className: Object(R.a)(L.a.cta, f),
						onClick: n
					}, p))))
				},
				B = (t("./node_modules/core-js/modules/es6.symbol.js"), t("./src/reddit/helpers/styles/mixins/loading.ts")),
				q = t("./src/reddit/components/CoinPurchasePackage/placeholder.m.less"),
				z = t.n(q),
				Q = function(e, a) {
					var t = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && a.indexOf(s) < 0 && (t[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) a.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (t[s[n]] = e[s[n]])
					}
					return t
				};
			var Y = e => {
					var {
						className: a,
						isLargeView: t
					} = e, s = Q(e, ["className", "isLargeView"]);
					const n = t ? z.a.large : "",
						c = Object(B.b)(s);
					return i.a.createElement("div", {
						className: Object(R.a)(c, z.a.packagePlaceholder, n, a)
					})
				},
				W = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				U = t("./src/reddit/components/GildMarketingDescription/index.tsx"),
				H = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				J = t("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				X = t.n(J);
			const {
				fbt: Z
			} = t("./node_modules/fbt/lib/FbtPublic.js"), K = e => {
				const {
					className: a,
					isGold: t,
					onGetPremium: n,
					onManagePremium: c,
					premiumPackage: r
				} = e, {
					pennies: l,
					periodicalCoins: o
				} = r, m = "$".concat((l / 100).toLocaleString()), d = o.toLocaleString(), u = "".concat(s.a.assetPath, "/img/gold/coins-premium-g.png");
				return i.a.createElement("div", {
					className: Object(R.a)(X.a.premiumBanner, a)
				}, i.a.createElement("img", {
					className: X.a.premiumCrest,
					src: u
				}), i.a.createElement("h2", {
					className: X.a.premiumDescription
				}, Z._("Get {Number of monthly coins} Coins every month with Reddit Premium and browse ads-free", [Z._param("Number of monthly coins", d)], {
					hk: "33Zpqj"
				})), t ? i.a.createElement(S.f, {
					className: X.a.premiumCTA,
					onClick: c
				}, Z._("Manage", null, {
					hk: "4BQsAp"
				})) : i.a.createElement(S.f, {
					className: X.a.premiumCTA,
					onClick: n
				}, Z._("{monthly-price}/Month", [Z._param("monthly-price", m)], {
					hk: "1jLpiX"
				})))
			};
			var $ = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				ee = e => i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 446 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M257.65 32.844a6.096 6.096 0 1 1-12.19.22 6.096 6.096 0 0 1 12.19-.22",
					fill: "#DDBD37"
				}), i.a.createElement("path", {
					d: "M153.263 45.035c4.146 0 7.673 3.181 8.98 7.62h-17.96c1.307-4.439 4.834-7.62 8.98-7.62zm11.604 13.715c2.968 0 4.697-2.219 4.567-4.402-.068-1.154-.17-1.872-.306-2.458-1.819-7.885-8.232-13.712-15.865-13.712-9.048 0-16.382 8.187-16.382 18.287s7.334 18.286 16.382 18.286c5.667 0 9.715-2.064 12.661-5.299 1.436-1.576 1.172-4.053-.58-5.27-1.422-.989-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.607 0-8.451-3.927-9.334-9.144h20.938zm-27.605-17.028a3.427 3.427 0 0 0-2.864-3.378c-4.993-.753-9.66 1.11-12.375 4.485v-.461c0-2.094-1.714-3.428-3.429-3.428a3.429 3.429 0 0 0-3.429 3.428v28.059c0 1.836 1.385 3.446 3.217 3.557a3.43 3.43 0 0 0 3.641-3.423V56.087c0-6.405 4.817-11.665 11.426-10.95.239.025.463.023.677-.001a3.427 3.427 0 0 0 3.136-3.414zm117.722 3.694a3.429 3.429 0 1 0-6.857 0v25.145a3.429 3.429 0 0 0 6.857 0V45.416zm-66.671 22.478c-5.261 0-9.524-5.117-9.524-11.43 0-6.311 4.263-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.51 0 6.452-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm20.191 41.526c-5.26 0-9.524-5.117-9.524-11.43 0-6.311 4.264-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.511 0 6.453-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm32.66 44.192V45.037h3.048c1.624 0 3.04-1.225 3.145-2.845a3.047 3.047 0 0 0-3.041-3.251h-3.152v-4.835c0-1.826-1.378-3.421-3.2-3.54a3.43 3.43 0 0 0-3.657 3.423v4.952h-2.84c-1.622 0-3.04 1.225-3.145 2.845a3.048 3.048 0 0 0 3.04 3.25h2.945v25.526a3.429 3.429 0 1 0 6.857 0v-.002z",
					fill: "#FFF"
				}), i.a.createElement("path", {
					d: "M307.89 75.071c-5.073 0-9.042-1.572-11.91-4.716-2.869-3.142-4.301-7.36-4.301-12.65 0-2.302.385-4.455 1.154-6.458a17.553 17.553 0 0 1 3.36-5.462c1.398-1.57 3.153-2.839 5.262-3.802 2.108-.962 4.407-1.444 6.897-1.444 3.435 0 6.23.77 8.389 2.307 2.155 1.538 3.233 3.636 3.233 6.292 0 1.107-.283 2.086-.852 2.94-.568.852-1.505 1.277-2.808 1.277-1.4 0-2.484-.33-3.255-.992-.769-.662-1.153-1.4-1.153-2.218 0-.992.143-2.013.426-3.062.285-1.048.45-1.815.498-2.3-.426-.684-1.058-1.142-1.898-1.373a10.132 10.132 0 0 0-2.712-.348 7.942 7.942 0 0 0-3.244.681c-1.029.455-2.028 1.29-2.998 2.508-.872 1.105-1.584 2.6-2.125 4.481-.544 1.883-.816 4.129-.816 6.74 0 4.119.975 7.478 2.928 10.078 1.953 2.6 4.515 3.901 7.685 3.901 2.294 0 4.217-.523 5.767-1.569 1.55-1.045 2.987-2.614 4.312-4.706l2.273 1.394c-1.564 2.612-3.626 4.683-6.186 6.21-2.559 1.526-5.203 2.29-7.927 2.29v.001zm42.051-18.022c0-1.66-.186-3.414-.555-5.264-.368-1.848-.923-3.413-1.66-4.698-.786-1.372-1.823-2.474-3.1-3.303-1.279-.83-2.841-1.245-4.688-1.245-1.894 0-3.513.42-4.852 1.261-1.342.841-2.43 1.992-3.266 3.453-.787 1.352-1.341 2.89-1.662 4.616a27.447 27.447 0 0 0-.479 5.014c0 2.124.19 4.09.573 5.893.381 1.803.99 3.415 1.826 4.831.836 1.417 1.888 2.53 3.155 3.337 1.268.808 2.837 1.212 4.705 1.212 3.075 0 5.514-1.338 7.307-4.017 1.797-2.68 2.696-6.376 2.696-11.09zm6.746.457a20.474 20.474 0 0 1-1.167 6.79c-.775 2.224-1.88 4.11-3.318 5.66-1.624 1.77-3.508 3.088-5.65 3.951-2.144.863-4.544 1.295-7.204 1.295-2.213 0-4.322-.393-6.321-1.178a16.016 16.016 0 0 1-5.334-3.436c-1.53-1.484-2.75-3.294-3.654-5.43-.907-2.135-1.36-4.531-1.36-7.188 0-5.114 1.583-9.297 4.75-12.55 3.164-3.255 7.316-4.881 12.447-4.881 4.875 0 8.894 1.544 12.06 4.632 3.168 3.087 4.751 7.198 4.751 12.334v.001zm9.087-18.776c3.919 0 7.096-2.729 7.096-6.095 0-3.367-3.177-6.096-7.096-6.096-3.918 0-7.095 2.729-7.095 6.095 0 3.366 3.177 6.095 7.095 6.095v.001zm9.004 32.505c-.54-.13-1.07-.29-1.587-.481-.712-.244-1.234-.621-1.566-1.13-.332-.508-.499-1.151-.499-1.925V43.004l-.521-.465-12.926.73v2.192c.742.044 1.56.16 2.45.348.893.188 1.571.414 2.044.68.625.379 1.14.884 1.504 1.475.358.586.54 1.233.54 1.94v18.197c0 .796-.169 1.443-.503 1.94-.336.498-.847.846-1.54 1.045a7.515 7.515 0 0 1-1.58.265c-.608.044-1.197.089-1.765.133v2.19h17.683v-2.19a10.794 10.794 0 0 1-1.734-.25v.001zm41.423 2.938h-16.88v-2.19c.536-.045 1.125-.09 1.768-.134.644-.044 1.174-.133 1.595-.266.654-.199 1.137-.548 1.453-1.046.314-.498.474-1.145.474-1.942V51.761c0-2.324-.582-4.117-1.74-5.379-1.157-1.262-2.568-1.893-4.229-1.893-1.24 0-2.375.183-3.405.548a12.31 12.31 0 0 0-2.739 1.345c-.772.51-1.386 1.057-1.843 1.644-.454.586-.79 1.056-1 1.411v18.826c0 .753.163 1.372.491 1.86.325.487.816.862 1.47 1.128.491.222 1.02.388 1.593.498.573.111 1.163.19 1.77.233v2.191h-16.915v-2.19c.536-.045 1.09-.09 1.662-.134a6.656 6.656 0 0 0 1.49-.266c.654-.198 1.137-.547 1.452-1.044.316-.498.475-1.144.475-1.94V48.402c0-.75-.172-1.443-.51-2.073a4.202 4.202 0 0 0-1.417-1.542 4.96 4.96 0 0 0-1.576-.58 14.623 14.623 0 0 0-1.961-.249v-2.19l11.486-.732.49.465v4.615h.176a80.132 80.132 0 0 1 2.101-1.909c.84-.74 1.635-1.345 2.382-1.809.862-.532 1.89-.974 3.082-1.329 1.192-.354 2.531-.53 4.027-.53 3.315 0 5.772.98 7.372 2.938 1.597 1.96 2.399 4.565 2.399 7.82v17.032c0 .775.14 1.401.42 1.876.28.476.76.847 1.436 1.113.56.221 1.045.376 1.453.464.407.09.974.156 1.699.2v2.191h-.001zm25.829-15.97a8.51 8.51 0 0 1 2.263 2.756c.526 1.04.79 2.313.79 3.818 0 3.032-1.228 5.512-3.683 7.438-2.456 1.926-5.634 2.888-9.536 2.888-2.061 0-3.96-.343-5.696-1.029-1.737-.686-2.975-1.317-3.717-1.892l-.719 2.158h-2.694l-.359-11.389h2.479c.19.866.598 1.877 1.222 3.032a14.422 14.422 0 0 0 2.263 3.132A12.387 12.387 0 0 0 428 71.581c1.306.666 2.773 1 4.404 1 2.298 0 4.068-.485 5.315-1.454 1.244-.969 1.868-2.355 1.868-4.158 0-.93-.198-1.733-.594-2.408-.395-.674-.976-1.267-1.741-1.776-.79-.509-1.76-.969-2.91-1.378a61.473 61.473 0 0 0-3.844-1.212 37.522 37.522 0 0 1-3.754-1.278c-1.379-.542-2.558-1.179-3.538-1.909a9.558 9.558 0 0 1-2.586-2.856c-.673-1.129-1.006-2.457-1.006-3.984 0-2.679 1.076-4.947 3.233-6.807 2.155-1.859 5.04-2.789 8.656-2.789 1.39 0 2.807.166 4.257.498 1.45.332 2.629.731 3.54 1.195l.825-1.726h2.587l.54 10.525h-2.478c-.505-2.356-1.589-4.273-3.254-5.752-1.665-1.477-3.694-2.216-6.088-2.216-1.965 0-3.51.457-4.634 1.371-1.125.914-1.688 2.017-1.688 3.31 0 .996.184 1.826.555 2.49.372.665.927 1.23 1.672 1.694.718.442 1.62.857 2.711 1.245a92.24 92.24 0 0 0 4.042 1.311c1.53.446 3.024.99 4.472 1.627 1.401.621 2.557 1.306 3.468 2.06v-.001zM96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48",
					fill: "#DDBD37"
				}), i.a.createElement("path", {
					d: "M59 58.001c-2.757 0-5-2.243-5-5a5.006 5.006 0 0 1 5-5c2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5m.88 8.211c-3.412 3.408-9.95 3.673-11.874 3.673-1.924 0-8.463-.265-11.872-3.673a1.296 1.296 0 1 1 1.833-1.833c2.151 2.151 6.752 2.915 10.04 2.915 3.285 0 7.888-.764 10.042-2.915a1.296 1.296 0 0 1 1.831 1.833M32 53c0-2.757 2.244-5 5.002-5A5.005 5.005 0 0 1 42 53a5.004 5.004 0 0 1-4.998 5A5.006 5.006 0 0 1 32 53m47.992-5a7 7 0 0 0-7-7 6.97 6.97 0 0 0-4.855 1.964c-4.784-3.453-11.377-5.683-18.72-5.94l3.188-15.002 10.418 2.215C63.15 26.887 65.32 29 68 29a5 5 0 0 0 0-10c-1.965 0-3.646 1.143-4.465 2.79l-11.633-2.473a1.251 1.251 0 0 0-1.482.963l-3.56 16.741c-7.452.207-14.149 2.44-18.996 5.93a6.972 6.972 0 0 0-4.84-1.95 7 7 0 0 0-7 7 7 7 0 0 0 4.135 6.382c-.11.7-.166 1.408-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.71-.058-1.412-.165-2.103A7 7 0 0 0 79.992 48",
					fill: "#FFF"
				}));
			const ae = Object(y.t)({
					isCompletePaypal: e => !!Object(y.Q)(e).thanks
				}),
				te = Object(m.c)({
					coinPackages: O.b,
					isGold: A.p,
					isLoggedIn: A.G,
					premiumPackages: O.c,
					purchaseCatalogPending: O.e,
					shouldShowCoinPurchaseModal: I.c
				}),
				se = Object(l.b)(te, (e, a) => ({
					onRouteToManagePremium: () => e(Object(o.b)("/settings/gold")),
					onRouteToPremium: () => e(Object(o.b)("/premium")),
					onOpenLoginModal: () => e(Object(P.e)()),
					onPurchasePackage: a => e(Object(C.f)({
						coinsToPurchase: a.coins
					})),
					requestPurchaseCatalog: () => e(Object(x.b)())
				}));
			class ne extends i.a.Component {
				constructor() {
					super(...arguments), this.purchaseSection = i.a.createRef(), this.perksSection = i.a.createRef(), this.onClickGetCoins = () => {
						this.props.sendEvent(h.b()), this.purchaseSection.current && window.scrollTo({
							behavior: "smooth",
							top: this.purchaseSection.current.offsetTop - 50
						})
					}, this.onClickPurchase = e => {
						const {
							isLoggedIn: a,
							onPurchasePackage: t,
							onOpenLoginModal: s,
							sendEvent: n
						} = this.props;
						a && n(h.a(e.coins)), a ? t(e) : s()
					}, this.onClickGetPremium = () => {
						const {
							onRouteToPremium: e,
							sendEvent: a
						} = this.props;
						a(h.c()), e()
					}
				}
				componentDidMount() {
					const {
						coinPackages: e,
						purchaseCatalogPending: a,
						requestPurchaseCatalog: t
					} = this.props;
					e.length || a || t(), h.e() || h.f(), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const s = d.zb.COINS;
					b.c.has(s) && this.props.sendEvent(Object(g.a)(k.TimerType.InApp, b.c.end(s))), Object(u.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.a.createElement("div", {
						className: e
					}, this.renderHero(), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), this.renderModal(), i.a.createElement(H.a, null))
				}
				renderHero() {
					return i.a.createElement("div", {
						className: w.a.hero,
						style: {
							backgroundImage: 'url("'.concat(s.a.assetPath, '/img/gold/coins-hero.jpg")')
						}
					}, i.a.createElement("div", {
						className: w.a.heroInner
					}, i.a.createElement("h1", {
						className: w.a.heroTitle
					}, i.a.createElement(ee, {
						className: w.a.heroLogo
					})), i.a.createElement("p", {
						className: w.a.heroDescription
					}, i.a.createElement(E.c, null, "Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better.")), i.a.createElement(S.c, {
						className: w.a.heroCTA,
						onClick: this.onClickGetCoins
					}, i.a.createElement(E.c, null, "Get coins"))))
				}
				renderGildBreakdown() {
					return i.a.createElement("div", {
						className: w.a.detailGridSection,
						ref: this.perksSection
					}, i.a.createElement("h2", {
						className: w.a.detailTitle
					}, i.a.createElement(E.c, null, "Here’s what you can buy with Coins")), i.a.createElement("p", {
						className: w.a.detailDesription
					}, i.a.createElement(E.c, null, "Spend your Coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.")), i.a.createElement("div", {
						className: w.a.gridContainer
					}, i.a.createElement(U.a, {
						className: w.a.gridItem,
						icon: i.a.createElement("img", {
							src: "".concat(s.a.assetPath, "/img/gold/badges/award-silver-large.png")
						}),
						title: Object(_.c)("Silver Award")
					}, Object(v.a)(Object(_.c)("Shows a Silver Award on the post or comment and ... that’s it. You’ll need :coin_price: Coins."), {
						":coin_price:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement($.a, null), N.l.coinPrice)
					})), i.a.createElement(U.a, {
						className: w.a.gridItem,
						icon: i.a.createElement("img", {
							src: "".concat(s.a.assetPath, "/img/gold/badges/award-gold-large.png")
						}),
						title: Object(_.c)("Gold Award")
					}, Object(v.a)(Object(_.c)("Gives the recipient a week of Reddit Premium (including :coin_benefit: Coins) and shows a Gold Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement($.a, null), "100"),
						":coin_price:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement($.a, null), N.j.coinPrice)
					})), i.a.createElement(U.a, {
						className: w.a.gridItem,
						icon: i.a.createElement("img", {
							src: "".concat(s.a.assetPath, "/img/gold/badges/award-platinum-large.png")
						}),
						title: Object(_.c)("Platinum Award")
					}, Object(v.a)(Object(_.c)("Gives the recipient a month of Reddit Premium, which includes :coin_benefit: Coins for that month, and shows a Platinum Award on the post or comment. You’ll need :coin_price: Coins."), {
						":coin_benefit:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement($.a, null), "700"),
						":coin_price:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement($.a, null), N.k.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						coinPackages: e,
						isGold: a,
						onRouteToManagePremium: t,
						premiumPackages: n,
						purchaseCatalogPending: r
					} = this.props, l = n.length ? n[0] : void 0;
					return i.a.createElement("div", {
						className: w.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: 'url("'.concat(s.a.assetPath, '/img/gold/coins-premium-bg.jpg")')
						}
					}, i.a.createElement("h2", {
						className: w.a.purchaseTitle
					}, i.a.createElement(ee, {
						className: w.a.purchaseLogo
					})), i.a.createElement("div", {
						className: w.a.purchasePackages
					}, r || !e.length ? c()(5, e => i.a.createElement(Y, {
						className: w.a.purchasePackage,
						isLargeView: 0 === e,
						isLoading: !0,
						key: e
					})) : e.map(e => i.a.createElement(V, {
						className: w.a.purchasePackage,
						coinPackage: e,
						isLargeView: e.featured,
						onClick: () => this.onClickPurchase(e)
					})), l && i.a.createElement(K, {
						isGold: a,
						onGetPremium: this.onClickGetPremium,
						onManagePremium: t,
						premiumPackage: l
					})))
				}
				renderFAQSection() {
					return i.a.createElement("div", {
						className: w.a.faqsSection
					}, i.a.createElement("h2", {
						className: w.a.faqsTitle
					}, i.a.createElement(E.c, null, "Coins FAQ")), i.a.createElement("div", {
						className: w.a.faqs
					}, j.a.map((e, a) => i.a.createElement(W.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: a
					}, e.answer()))))
				}
				renderModal() {
					const {
						isCompletePaypal: e,
						shouldShowCoinPurchaseModal: a
					} = this.props;
					return a && i.a.createElement(M.a, {
						isCompletePaypal: e
					})
				}
				componentWillUnmount() {
					h.d()
				}
			}
			a.default = ae(se(Object(p.b)(ne)))
		}
	}
]);
//# sourceMappingURL=Coins.ea3538e4eccf17c31cbb.js.map