// https://www.redditstatic.com/desktop2x/Talk.e1b07c017a5e8b96e122.js
// Retrieved at 2/2/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Talk"], {
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
			var l = t("./node_modules/react/index.js"),
				n = t.n(l),
				i = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				s = t.n(i),
				r = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
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
						isOpen: l
					} = this.state, i = l ? s.a.isOpen : "";
					return n.a.createElement("div", {
						className: Object(r.a)(e, s.a.collapsibleFAQ)
					}, n.a.createElement("button", {
						className: s.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, n.a.createElement("span", {
						className: s.a.buttonContent,
						tabIndex: -1
					}, a, l ? n.a.createElement(o.a, {
						className: s.a.collapseIcon
					}) : n.a.createElement(c.a, {
						className: s.a.collapseIcon
					}))), n.a.createElement("div", {
						className: Object(r.a)(s.a.collapsibleAnswer, i)
					}, t))
				}
			}
			a.a = m
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
			var l = t("./node_modules/react/index.js"),
				n = t.n(l),
				i = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = t.n(i),
				r = t("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: Object(r.a)(e.className, s.a.marketingPageFooter)
			}, n.a.createElement("div", {
				className: Object(r.a)(e.className, s.a.marketingPageFooterInner)
			}, n.a.createElement("div", {
				className: s.a.linkContainer
			}, n.a.createElement("div", {
				className: s.a.linkCol
			}, n.a.createElement("ul", {
				className: s.a.linkColInner
			}, n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), n.a.createElement("div", {
				className: s.a.linkCol
			}, n.a.createElement("ul", {
				className: s.a.linkColInner
			}, n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), n.a.createElement("div", {
				className: Object(r.a)(s.a.linkCol, s.a.linkBoldCol)
			}, n.a.createElement("ul", {
				className: s.a.linkColInner
			}, n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), n.a.createElement("div", {
				className: Object(r.a)(s.a.linkCol, s.a.linkBoldCol)
			}, n.a.createElement("ul", {
				className: s.a.linkColInner
			}, n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), n.a.createElement("ul", {
				className: s.a.legal
			}, n.a.createElement("li", {
				className: s.a.legalItem
			}, n.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), n.a.createElement("li", {
				className: s.a.legalItem
			}, n.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), n.a.createElement("li", {
				className: s.a.legalItem
			}, n.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), n.a.createElement("li", {
				className: s.a.legalItem
			}, n.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), n.a.createElement("li", {
				className: s.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, a, t) {
			"use strict";
			var l = t("./node_modules/react/index.js"),
				n = t.n(l);
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
		"./src/reddit/pages/Talk/CommunitiesWithTalk.m.less": function(e, a, t) {
			e.exports = {
				communitiesSection: "_3EMVSJHwyf3giOl4E_W2PT",
				isNightmodeOn: "_1Rp2mjdp7kpGf9ycXXkwDz",
				communitiesContentWrapper: "_1O6CaSCnzceBpeiksNh-Ku",
				communitiesSectionBoltImage: "_2hN-baYAOdHNxx4syRqdYo",
				communitiesSectionTitle: "_2pCNeOucnCDRqZC_Uz98oB",
				ctaButtonContainer: "_3QUtL9_LSZwynaK0X7ka8",
				ctaButton: "_1aSbKyHzyvMnlFf9Ssx5Vl",
				communitiesSectionGrid: "_2zCzBW83Gz2v991KvcPQ59",
				communityCell: "lH_fUccbEdazbE4wWxyoP",
				communityImageBackgroundCircle: "_3WWjwFrb2R486Zphw3YROV",
				communityImage: "_3GNs31_uwpd34HjXrdZHhp",
				communityTitle: "_2fRAwrT2gWvWYqCY43sfz0",
				communityDescription: "_14HGTISxkNrKSymnGNGims",
				communityLink: "_1QXw7dzX_OVivU5ZNXgfOP"
			}
		},
		"./src/reddit/pages/Talk/FaqSection.m.less": function(e, a, t) {
			e.exports = {
				faqSection: "_1SFF33F3H7Y_P2XATbbHel",
				faqSectionContent: "_3vO-E9IQpOe-HTY4a8Yden",
				circleFaqRadialTop: "_3ckJiDk2-8_8EZK7VYF4f7",
				circleFaqCyanSmall: "_1wpgij3e-lJTQeETPaV3n8",
				circleFaqYellowSmall: "mRtebAowCzdqqTKm0JkPf",
				circleFaqCyanBig: "-ssg1aN2xsMpsKW5Zrd8K",
				circleFaqOrange: "_1GA86_fH17za4zR49nrOMr",
				circleFaqBlueHollow: "_1dTFkTyjoesnGpd4KLG0a9",
				faqQuestionMark: "LnGnnsAfL_jQ93L06GAUG",
				faqQuestionMarkTopLeft: "_1ikrEVb90scV3Qe9JuHjyo",
				faqQuestionMarkTopRight: "_3Fb8AcEBI3_Amueni2UwK",
				faqQuestionMarkLeft: "_1PnuALzVb33kmhTrjaFEOl",
				faqQuestionMarkBottomRight: "_3CYcHwPLEATo6FtdRqN9S-",
				circleFaqYellowWithBolt: "_1n4iA4qCi5GrsqfxNQeNS4",
				boltInCircleFaqYellow: "_7kx8snPq2hJMpDtlaGw7L",
				faqQuestionMarkWithBolt: "fbX8eYGqrlqU8u-mYQ0KK",
				faqHeading: "_18---wxqOnv2815n07Fvvg",
				faqs: "_7ylHmSlS5zpoNAEHlRD1O",
				faqMoreQuestionsHeading: "_1UrEJ9xFZaRWadeTutxMU6",
				fullFaqsButton: "_3DdLEf4pAKoTmtWlC0-cjT",
				faqTryOutHeading: "_3CEDeWp7GUq9LwBJRlBQ9h",
				faqTryOutSubheading: "_3s72xbcY_IjUXHsRu__In7",
				ctaButtonContainer: "_1dw9AbU97VylyM4Md2b7gn",
				ctaLetsDoThisButton: "_3MBCmuDJ4DvNFmBA7NJ3-v",
				ctaButtonCirlcesAndBolt: "aL7E1uu1sDEz2brgIKoBc",
				circleFaqCtaYellowBig: "_2CraAPIiTVc522j8w12SLz",
				circleFaqCtaRadial: "_2xsMcBoIdZoMJW1i_okH9a",
				imgInCircleFaqCtaYellow: "_1ZDQismlTxWZArhlCpkswM",
				circleFaqCtaCyanHollow: "_3ZLhcyRen5CRKQsKyhdSdk",
				externalLink: "_1rbWX9eBoq0vzQYtYlbrQC",
				faqListItem: "_3v6-XulQvusZAyCJFjxHYv"
			}
		},
		"./src/reddit/pages/Talk/RadialCircle.m.less": function(e, a, t) {
			e.exports = {
				radialCircle: "ElW30t7EHUcF4Vzo4Gh9v"
			}
		},
		"./src/reddit/pages/Talk/index.m.less": function(e, a, t) {
			e.exports = {
				contentWrapper: "_1qvNZLH8zQKLtr6M6HSfIE",
				circle: "_23yFGh8GHp7Btdvlq5qFAZ",
				animatedCircle: "OHvSqcLWSE13J97JQ0QtG",
				animateTransformX: "_1zvbFl4FuB1ddPr2mUk8E2",
				bodyText: "_2IIB0JPu9j7HRVdB1bmGt3",
				headingSection: "SlvR5SLQPN9_Lal5jS3v6",
				headingSectionGridBg: "_2qyGBzdWjAiAhltiiN96D9",
				circleYellowBig: "x6PeFxp8aLyR5ujV_0R-P",
				circleOrangeTop: "_1IlQRONcrrQZPw_o960onQ",
				circleBlue: "xgvVp59bVs__21yD_0TAM",
				radialCircleTopRight: "PKATUiDk5ZNC5xzDX1U7W",
				radialCircleBottomRight: "_2dde1W6-l705juJqUW9TlT",
				radialCircleBottomLeft: "_2BSx5T85Wbw4ApDLID1ctZ",
				radialCircleTopLeft: "_1WIvyVNji4KO2rXvbVgBAP",
				background: "_2wbtmcdLAuIIJauf0xiZC1",
				diagonalLayoutPrimary: "_1MmNMpsTDqgnYe-fA7feIQ",
				diagonalLayoutSecondary: "_2pqk4xNh622XWJVKhhIn9s",
				headingContent: "_3v0Hm2jESqmgSqI9Ykwdul",
				headingArt: "_39IjIDMDiaHoKC0CM9Kox",
				headingText: "kMtoqAmQHaUChO8eVV_F-",
				talkMarketingImageContainer: "_1y4PiuTlAVH81K5EAhvmrZ",
				talkMarketingImage: "_2Kdq_v8FQRMYadfVIzsBQN",
				heading: "_14I-VAeDeKAEL_QeiRxEpk",
				logo: "_3cri3HLw6RRyYBMyjGO3N9",
				subheading: "_2BgHvkW_RyAtuWkViavj_9",
				description: "_2iUxDRfd2LCUiF_29cKoH7",
				modWarning: "_1-sQavSnEKg_K_5yH6jKS7",
				modWarningItalic: "_34G6yOZSjBGQGL5n5BJsn-",
				modWarningFooter: "kvSU68GgYSiZF_MdXGBwY",
				modWarningTop: "ayTcW1pgD8nFtApAtXGwq",
				modWarningIcon: "_3vGmSQg47c_blZYud6u3yS",
				inlineCta: "_1pexPaPisl5vTS3YsI7BoQ",
				talkHeadingImg: "_1U-0kBQTicR_O7uPDBpfTN",
				ctaButtonContainer: "GO19319MCeazqCrCIWD1L",
				ctaButton: "sOeNtKO_L6LQ3rgw0zGlg",
				footer: "_3Q0auuFrRxhpYTE_6VYw2g"
			}
		},
		"./src/reddit/pages/Talk/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var l = t("./src/config.ts"),
				n = t("./node_modules/react/index.js"),
				i = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/lib/opener/index.ts"),
				c = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				o = t("./src/reddit/controls/Button/index.tsx"),
				m = t("./src/reddit/controls/OutboundLink/index.tsx"),
				d = t("./src/reddit/selectors/telemetry.ts");
			var u = t("./src/reddit/hooks/useTracking.ts"),
				k = t("./src/reddit/icons/fonts/index.tsx"),
				g = t("./node_modules/fbt/lib/FbtPublic.js"),
				h = t("./node_modules/react-redux/es/index.js"),
				p = t("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = t("./src/reddit/selectors/user.ts"),
				E = t("./src/reddit/pages/Talk/CommunitiesWithTalk.m.less"),
				f = t.n(E);
			const b = [{
					key: "relationships",
					title: g.fbt._("Identity & Relationships", null, {
						hk: "4AIB1A"
					}),
					subreddits: ["r/lgbt", "r/relationship_advice"],
					imageName: "relationships",
					imageAlt: g.fbt._("Community group art for category Identity & Relationships", null, {
						hk: "4FdoUD"
					})
				}, {
					key: "finance",
					title: g.fbt._("Finance & Crypto", null, {
						hk: "3I1ibc"
					}),
					subreddits: ["r/wallstreetbets", "r/dogecoin"],
					imageName: "finance",
					imageAlt: g.fbt._("Community group art for category Finance & Crypto", null, {
						hk: "18ZrHU"
					})
				}, {
					key: "stories",
					title: g.fbt._("Stories & Knowledge", null, {
						hk: "rXzmD"
					}),
					subreddits: ["r/nosleep", "r/unresolvedmysteries"],
					imageName: "stories",
					imageAlt: g.fbt._("Community group art for category Stories & Knowledge", null, {
						hk: "2pHtMt"
					})
				}, {
					key: "media",
					title: g.fbt._("Sports, Media & Culture", null, {
						hk: "1HPwAm"
					}),
					subreddits: ["r/movies", "r/kpop"],
					imageName: "media",
					imageAlt: g.fbt._("Community group art for category Sports, Media & Culture", null, {
						hk: "2vY4Rf"
					})
				}, {
					key: "health",
					title: g.fbt._("Health & Fitness", null, {
						hk: "3mvSbc"
					}),
					subreddits: ["r/meditation", "r/keto"],
					imageName: "health",
					imageAlt: g.fbt._("Community group art for category Health & Fitness", null, {
						hk: "3qhrGI"
					})
				}],
				N = g.fbt._("Powerups Bolt", null, {
					hk: "1GoCTw"
				}),
				y = ({
					title: e,
					subreddits: a,
					imageName: t,
					imageAlt: n
				}) => i.a.createElement("div", {
					className: f.a.communityCell
				}, i.a.createElement("div", {
					className: f.a.communityImageBackgroundCircle
				}, i.a.createElement("img", {
					alt: n,
					className: f.a.communityImage,
					src: `${l.a.assetPath}/img/talk/${t}.png`
				})), i.a.createElement("h3", {
					className: f.a.communityTitle
				}, e), i.a.createElement("h4", {
					className: f.a.communityDescription
				}, a.map(e => i.a.createElement(p.a, {
					className: f.a.communityLink,
					key: e,
					to: e,
					target: r.d.BLANK,
					rel: r.c
				}, e)))),
				v = () => {
					const e = Object(h.e)(_.W);
					return i.a.createElement("div", {
						className: Object(s.a)(f.a.communitiesSection, {
							[f.a.isNightmodeOn]: e
						})
					}, i.a.createElement("div", {
						className: f.a.communitiesContentWrapper
					}, i.a.createElement("img", {
						alt: N,
						className: f.a.communitiesSectionBoltImage,
						src: `${l.a.assetPath}/img/talk/communities-hosting.svg`
					}), i.a.createElement("h2", {
						className: f.a.communitiesSectionTitle
					}, g.fbt._("Check out the communities hosting talks", null, {
						hk: "2eOJeR"
					})), i.a.createElement("div", {
						className: Object(s.a)(f.a.communitiesSectionGrid, f.a.contentWrapper)
					}, b.map(({
						key: e,
						title: a,
						subreddits: t,
						imageName: l,
						imageAlt: n
					}) => i.a.createElement(y, {
						key: e,
						title: a,
						subreddits: t,
						imageName: l,
						imageAlt: n
					})))))
				},
				w = "https://forms.gle/U6BS6Q8dCCFy14Gw8";
			var C = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				T = t("./src/reddit/pages/Talk/RadialCircle.m.less"),
				q = t.n(T);
			const I = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(s.a)(q.a.radialCircle, e),
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/talk/radial-circle.svg)`
				}
			});
			var x = t("./src/reddit/pages/Talk/FaqSection.m.less"),
				B = t.n(x);
			const {
				fbt: F
			} = t("./node_modules/fbt/lib/FbtPublic.js"), O = [{
				prompt: () => F._("How do I host a Reddit Talk?", null, {
					hk: "3uLwRL"
				}),
				answer: function() {
					return F._("Only moderators of select subreddits can host Talks during our pilot (8/2021 - 9/2021). If you want to participate (and you're not already in the pilot), please sign up for our {waitlist signup form link}.", [F._param("waitlist signup form link", i.a.createElement(m.b, {
						className: B.a.externalLink,
						href: w,
						rel: r.a,
						target: "_blank"
					}, "Talk waitlist"))], {
						hk: "3BjybU"
					})
				}
			}, {
				prompt: () => F._("How do I discover Talks on Reddit?", null, {
					hk: "49NTWP"
				}),
				answer: function() {
					return i.a.createElement(i.a.Fragment, null, F._("Reddit Talk will be available on iOS and Android for the official Reddit App to start. When a Talk goes live, it becomes a post that people can discover in Home and subreddit feeds. Reddit will also send Talk notifications to your subreddit's members.", null, {
						hk: "1x93GI"
					}), i.a.createElement("br", null), i.a.createElement("br", null), F._("{=Check out all of our upcoming talks here}", [F._param("=Check out all of our upcoming talks here", i.a.createElement(m.b, {
						className: B.a.externalLink,
						href: "https://reddit.zendesk.com/hc/en-us/articles/4405459143316",
						rel: r.a,
						target: "_blank"
					}, F._("Check out all of our upcoming talks here", null, {
						hk: "1QRcwN"
					})))], {
						hk: "2UjCyD"
					}), ".")
				}
			}, {
				prompt: () => F._("How are Talks moderated?", null, {
					hk: "4tibrb"
				}),
				answer: function() {
					return i.a.createElement(i.a.Fragment, null, F._("The host of each Talk decides who to invite to speak and can also mute speakers and remove them from the Talk. During the pilot, only select subreddit moderators can host Talks.", null, {
						hk: "1JswM6"
					}), i.a.createElement("br", null), i.a.createElement("br", null), F._("After the pilot, we plan to:", null, {
						hk: "3Sdq5K"
					}), i.a.createElement("br", null), i.a.createElement("br", null), i.a.createElement("ul", null, i.a.createElement("li", {
						className: B.a.faqListItem
					}, F._("Let mods select who can host Talks in their subreddit. A great host is a mini-moderator of the room and can take action on offenders without the mod having to be there.", null, {
						hk: "2Iii3u"
					})), i.a.createElement("li", {
						className: B.a.faqListItem
					}, F._("Let mods review Talk reports in mod queue. We'll also have an admin team reviewing Talk reports internally.", null, {
						hk: "1wiMyy"
					}))))
				}
			}, {
				prompt: () => F._("How can I participate in a Talk in my favorite subreddit?", null, {
					hk: "ivlBO"
				}),
				answer: function() {
					return F._("If you want to participate in a Talk, please sign up for our {waitlist signup form link} and we'll get back to you as soon as possible.", [F._param("waitlist signup form link", i.a.createElement(m.b, {
						className: B.a.externalLink,
						href: w,
						rel: r.a,
						target: "_blank"
					}, "Talk waitlist"))], {
						hk: "4CD6vE"
					})
				}
			}], A = () => i.a.createElement("div", {
				className: B.a.faqSection
			}, i.a.createElement("div", {
				className: Object(s.a)(B.a.faqSectionContent, B.a.contentWrapper)
			}, i.a.createElement(L, null), i.a.createElement(S, null), i.a.createElement(j, null), i.a.createElement("h2", {
				className: B.a.faqHeading
			}, F._("Questions about Reddit Talk", null, {
				hk: "G9C1l"
			})), i.a.createElement("div", {
				className: B.a.faqs
			}, O.map(({
				prompt: e,
				answer: a
			}, t) => i.a.createElement(C.a, {
				defaultClosed: !0,
				question: e(),
				key: t
			}, a()))), i.a.createElement("h3", {
				className: B.a.faqMoreQuestionsHeading
			}, F._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), i.a.createElement(o.t, {
				className: B.a.fullFaqsButton,
				priority: o.c.Secondary,
				href: "https://reddithelp.com/hc/en-us/articles/4404349195284",
				kind: o.b.ExternalLink,
				target: "_blank"
			}, F._("View Full FAQs", null, {
				hk: "1eOLlL"
			})), i.a.createElement("h2", {
				className: B.a.faqTryOutHeading
			}, F._("Try out Reddit Talk", null, {
				hk: "2dbBQh"
			})), i.a.createElement("h3", {
				className: B.a.faqTryOutSubheading
			}, F._("Ok, you've made it to the bottom of the page. What do you think? Is Reddit Talk for your community?", null, {
				hk: "2SYIjJ"
			})), i.a.createElement(m.b, {
				className: B.a.ctaButtonContainer,
				href: w,
				rel: r.a,
				target: "_blank"
			}, i.a.createElement(o.k, {
				priority: o.c.Primary,
				className: B.a.ctaLetsDoThisButton
			}, F._("Let's Do This!", null, {
				hk: "39lVPQ"
			}))), i.a.createElement(R, null))), L = () => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: Object(s.a)(B.a.faqQuestionMark, B.a.faqQuestionMarkWithBolt)
			}), i.a.createElement("div", {
				className: B.a.circleFaqYellowWithBolt
			})), S = () => i.a.createElement(i.a.Fragment, null, i.a.createElement(I, {
				className: B.a.circleFaqRadialTop
			}), i.a.createElement("div", {
				className: B.a.circleFaqCyanSmall
			}), i.a.createElement("div", {
				className: B.a.circleFaqYellowSmall
			}), i.a.createElement("div", {
				className: B.a.circleFaqCyanBig
			}), i.a.createElement("div", {
				className: B.a.circleFaqOrange
			}), i.a.createElement("div", {
				className: B.a.circleFaqBlueHollow
			})), j = () => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: Object(s.a)(B.a.faqQuestionMark, B.a.faqQuestionMarkTopLeft)
			}), i.a.createElement("div", {
				className: Object(s.a)(B.a.faqQuestionMark, B.a.faqQuestionMarkTopRight)
			}), i.a.createElement("div", {
				className: Object(s.a)(B.a.faqQuestionMark, B.a.faqQuestionMarkLeft)
			}), i.a.createElement("div", {
				className: Object(s.a)(B.a.faqQuestionMark, B.a.faqQuestionMarkBottomRight)
			})), R = () => i.a.createElement("div", {
				className: B.a.ctaButtonCirlcesAndBolt
			}, i.a.createElement("div", {
				className: B.a.circleFaqCtaYellowBig
			}, i.a.createElement(I, {
				className: B.a.circleFaqCtaRadial
			}), i.a.createElement("img", {
				alt: "Redditors chatting",
				className: B.a.imgInCircleFaqCtaYellow,
				src: `${l.a.assetPath}/img/talk/talk-footer-art.png`
			})), i.a.createElement("div", {
				className: B.a.circleFaqCtaCyanHollow
			}));
			var Q = t("./src/reddit/pages/Talk/index.m.less"),
				M = t.n(Q);
			const {
				fbt: W
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(u.a)();
				Object(n.useEffect)(() => {
					e((() => e => ({
						...d.m(e),
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: {
							pageType: "talk_landing_page"
						}
					}))())
				}, [e]);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: M.a.headingSection
				}, i.a.createElement("div", {
					className: Object(s.a)(M.a.background, M.a.contentWrapper)
				}, i.a.createElement("div", {
					className: M.a.diagonalLayoutSecondary
				}), i.a.createElement("div", {
					className: M.a.diagonalLayoutPrimary,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/grid-single-rectangle.svg)`
					}
				}), i.a.createElement("div", {
					className: Object(s.a)(M.a.circle, M.a.circleYellowBig)
				}), i.a.createElement("div", {
					className: Object(s.a)(M.a.circle, M.a.circleOrangeTop)
				}), i.a.createElement(I, {
					className: M.a.radialCircleTopRight
				}), i.a.createElement(I, {
					className: M.a.radialCircleBottomRight
				}), i.a.createElement(I, {
					className: M.a.radialCircleBottomLeft
				}), i.a.createElement(I, {
					className: M.a.radialCircleTopLeft
				}), i.a.createElement("div", {
					className: Object(s.a)(M.a.circle, M.a.circleBlue)
				})), i.a.createElement("div", {
					className: Object(s.a)(M.a.contentWrapper, M.a.headingContent)
				}, i.a.createElement("div", {
					className: M.a.headingText
				}, i.a.createElement("h1", {
					className: M.a.heading
				}, i.a.createElement("img", {
					className: M.a.logo,
					src: `${l.a.assetPath}/img/talk/reddit-talk-logo.svg`,
					alt: W._("Reddit Talk", null, {
						hk: "XNl4V"
					})
				})), i.a.createElement("h2", {
					className: M.a.subheading
				}, W._("Live audio talks in your favorite communities", null, {
					hk: "pdWzZ"
				})), i.a.createElement("p", {
					className: Object(s.a)(M.a.description, M.a.bodyText)
				}, W._("A new way for redditors to host AMAs, Q&As, or just hang out and have fun.", null, {
					hk: "3mWLSE"
				})), i.a.createElement("div", {
					className: Object(s.a)(M.a.modWarning, M.a.bodyText)
				}, i.a.createElement("div", {
					className: M.a.modWarningTop
				}, i.a.createElement(k.a, {
					name: "mod",
					className: M.a.modWarningIcon
				})), W._("{=During our pilot, only moderators in participating communities can start talks. If you’re not a mod and are interested in hosting a talk,let us know}", [W._param("=During our pilot, only moderators in participating communities can start talks. If you’re not a mod and are interested in hosting a talk,let us know", i.a.createElement("div", null, W._("During our pilot, only moderators in participating communities can start talks. If you’re not a mod and are interested in hosting a talk, {=let us know}.", [W._param("=let us know", i.a.createElement(m.b, {
					className: M.a.inlineCta,
					href: w,
					rel: r.a,
					target: "_blank"
				}, W._("let us know", null, {
					hk: "2F4ah1"
				})))], {
					hk: "3k7tgj"
				})))], {
					hk: "1fKzj6"
				})), i.a.createElement(m.b, {
					className: M.a.ctaButtonContainer,
					href: w,
					rel: r.a,
					target: "_blank"
				}, i.a.createElement(o.k, {
					className: M.a.ctaButton,
					priority: o.c.Primary,
					onClick: () => e((() => e => ({
						...d.m(e),
						source: "talk_landing_page",
						action: "click",
						noun: "try_talk_cta"
					}))())
				}, W._("Try it out", null, {
					hk: "4yOsEn"
				})))), i.a.createElement("div", {
					className: M.a.headingArt
				}, i.a.createElement("div", {
					className: M.a.talkMarketingImageContainer
				}, i.a.createElement("img", {
					alt: "Reddit Talk Art",
					className: M.a.talkMarketingImage,
					src: `${l.a.assetPath}/img/talk/talk-header-art.png`
				})))), i.a.createElement("div", {
					className: M.a.headingSectionGridBg,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/grid-single-rectangle.svg)`
					}
				})), i.a.createElement(v, null), i.a.createElement(A, null), i.a.createElement(c.a, {
					className: M.a.footer
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Talk.e1b07c017a5e8b96e122.js.map