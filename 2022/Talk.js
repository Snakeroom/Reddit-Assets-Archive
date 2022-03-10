// https://www.redditstatic.com/desktop2x/Talk.f7cb150dd07aa4919595.js
// Retrieved at 3/10/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
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
				r = t.n(i),
				s = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
					} = this.state, i = l ? r.a.isOpen : "";
					return n.a.createElement("div", {
						className: Object(s.a)(e, r.a.collapsibleFAQ)
					}, n.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, n.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, a, l ? n.a.createElement(c.a, {
						className: r.a.collapseIcon
					}) : n.a.createElement(o.a, {
						className: r.a.collapseIcon
					}))), n.a.createElement("div", {
						className: Object(s.a)(r.a.collapsibleAnswer, i)
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
				r = t.n(i),
				s = t("./src/lib/classNames/index.ts");
			const {
				fbt: o
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: Object(s.a)(e.className, r.a.marketingPageFooter)
			}, n.a.createElement("div", {
				className: Object(s.a)(e.className, r.a.marketingPageFooterInner)
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
			}, o._("about", null, {
				hk: "3IO4c7"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/careers/"
			}, o._("careers", null, {
				hk: "2GATRU"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/press/"
			}, o._("press", null, {
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
			}, o._("advertise", null, {
				hk: "RYuIn"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "http://www.redditblog.com/"
			}, o._("blog", null, {
				hk: "4xzWuA"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddithelp.com"
			}, o._("help", null, {
				hk: "36XyzA"
			}))))), n.a.createElement("div", {
				className: Object(s.a)(r.a.linkCol, r.a.linkBoldCol)
			}, n.a.createElement("ul", {
				className: r.a.linkColInner
			}, n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/coins"
			}, o._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/premium"
			}, o._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), n.a.createElement("div", {
				className: Object(s.a)(r.a.linkCol, r.a.linkBoldCol)
			}, n.a.createElement("ul", {
				className: r.a.linkColInner
			}, n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.facebook.com/reddit/"
			}, o._("Facebook", null, {
				hk: "47DT2F"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://twitter.com/reddit"
			}, o._("Twitter", null, {
				hk: "3aUv7u"
			}))), n.a.createElement("li", {
				className: r.a.linkItem
			}, n.a.createElement("a", {
				className: r.a.link,
				href: "https://www.instagram.com/reddit/"
			}, o._("Instagram", null, {
				hk: "dVIRX"
			})))))), n.a.createElement("ul", {
				className: r.a.legal
			}, n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, o._("content policy", null, {
				hk: "4ptiaZ"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, o._("privacy policy", null, {
				hk: "1ybjnz"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, o._("user agreement", null, {
				hk: "4puRxC"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, n.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, o._("mod policy", null, {
				hk: "1VvAdM"
			}))), n.a.createElement("li", {
				className: r.a.legalItem
			}, o._("© {year} Reddit, Inc. All rights reserved", [o._param("year", (new Date).getFullYear().toString())], {
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
				faqListItem: "_3v6-XulQvusZAyCJFjxHYv",
				answerContainer: "HOTG-u7kcVS25qclyGtnN"
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
				r = t("./src/lib/classNames/index.ts"),
				s = t("./src/lib/opener/index.ts"),
				o = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				c = t("./src/reddit/controls/Button/index.tsx"),
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
			const N = [{
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
				y = g.fbt._("Powerups Bolt", null, {
					hk: "1GoCTw"
				}),
				v = ({
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
					target: s.d.BLANK,
					rel: s.c
				}, e)))),
				b = () => {
					const e = Object(h.e)(_.bb);
					return i.a.createElement("div", {
						className: Object(r.a)(f.a.communitiesSection, {
							[f.a.isNightmodeOn]: e
						})
					}, i.a.createElement("div", {
						className: f.a.communitiesContentWrapper
					}, i.a.createElement("img", {
						alt: y,
						className: f.a.communitiesSectionBoltImage,
						src: `${l.a.assetPath}/img/talk/communities-hosting.svg`
					}), i.a.createElement("h2", {
						className: f.a.communitiesSectionTitle
					}, g.fbt._("Check out the communities hosting talks", null, {
						hk: "2eOJeR"
					})), i.a.createElement("div", {
						className: Object(r.a)(f.a.communitiesSectionGrid, f.a.contentWrapper)
					}, N.map(({
						key: e,
						title: a,
						subreddits: t,
						imageName: l,
						imageAlt: n
					}) => i.a.createElement(v, {
						key: e,
						title: a,
						subreddits: t,
						imageName: l,
						imageAlt: n
					})))))
				},
				w = "https://forms.gle/U6BS6Q8dCCFy14Gw8";
			var C = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				q = t("./src/reddit/pages/Talk/RadialCircle.m.less"),
				T = t.n(q);
			const I = ({
				className: e
			}) => i.a.createElement("div", {
				className: Object(r.a)(T.a.radialCircle, e),
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/talk/radial-circle.svg)`
				}
			});
			var B = t("./src/reddit/pages/Talk/FaqSection.m.less"),
				F = t.n(B);
			const {
				fbt: x
			} = t("./node_modules/fbt/lib/FbtPublic.js"), O = [{
				prompt: () => x._("How do I host a talk?", null, {
					hk: "3uuEr4"
				}),
				answer: function() {
					return i.a.createElement("div", {
						className: F.a.answerContainer
					}, i.a.createElement("p", null, x._("If you moderate a community that has Reddit Talk enabled, you'll have the ability to create a talk post. Over 1,000 of our most engaged communities already have Reddit Talk enabled, and we're {waitlist signup form link} to enable Reddit Talk in smaller communities.", [x._param("waitlist signup form link", i.a.createElement(m.b, {
						className: F.a.externalLink,
						href: w,
						rel: s.a,
						target: "_blank"
					}, "accepting requests"))], {
						hk: "1vJY2n"
					})), i.a.createElement("p", null, "We plan to let mods appoint trusted community members as talk hosts in the near future. A great talk host is a mini-moderator and can take action on offenders without mods having to be present. This role will only grant the privilege of hosting talks, no other mod privileges."), i.a.createElement("p", null, "If you're not a mod and want to see talks in your community, reach out to your moderators."))
				}
			}, {
				prompt: () => x._("How do I discover talks?", null, {
					hk: "3EmYuk"
				}),
				answer: function() {
					return i.a.createElement("div", {
						className: F.a.answerContainer
					}, i.a.createElement("p", null, x._("There are several ways to discover live and recorded talks on Reddit:", null, {
						hk: "4r8Vep"
					})), i.a.createElement("ul", null, i.a.createElement("li", null, x._("When a talk is live, look for the talk post pinned at the top of its community.", null, {
						hk: "4n71dH"
					})), i.a.createElement("li", null, x._("Live talks in your communities will show up prominently in your home feed.", null, {
						hk: "4kkleP"
					})), i.a.createElement("li", null, x._("You may receive push notifications about live talks in your communities.", null, {
						hk: "2wIbZG"
					})), i.a.createElement("li", null, x._("Talks are recorded and appear like any other post, so you're able to listen to recordings and leave comments after the talk has ended.", null, {
						hk: "3ai6D4"
					}))), i.a.createElement("p", null, x._("We're testing other areas of the Reddit app to surface talks, like a live bar that will show all the talks currently happening in your communities.", null, {
						hk: "WG9re"
					})))
				}
			}, {
				prompt: () => x._("How are talks moderated?", null, {
					hk: "9vbdK"
				}),
				answer: function() {
					return i.a.createElement("div", {
						className: F.a.answerContainer
					}, i.a.createElement("p", null, x._("Right now only mods can create talks, and they designate the host of the talk.", null, {
						hk: "3RfPaF"
					})), i.a.createElement("p", null, x._("Mods, hosts, and admins all have control over who speaks in a talk. Hosts can approve or deny requests to speak, invite people to speak, mute speakers, and remove people from the talk altogether. Mods and admins can mute and remove speakers.", null, {
						hk: "2JS1g3"
					})), i.a.createElement("p", null, x._("Users with a track record in your community can listen to a talk but are not allowed to speak, and banned users are prevented from joining entirely.", null, {
						hk: "RJv8h"
					})), i.a.createElement("p", null, x._("We plan to let mods review talk reports in the mod queue and to have an admin team internally review talk reports.", null, {
						hk: "2W4Peo"
					})))
				}
			}, {
				prompt: () => x._("How can I get Reddit Talk in my community?", null, {
					hk: "33Bd3M"
				}),
				answer: function() {
					return i.a.createElement("div", {
						className: F.a.answerContainer
					}, i.a.createElement("p", null, "Have a great idea for a talk? Reach out to your moderators with your idea and offer to help with hosting and moderation."))
				}
			}], A = () => i.a.createElement("div", {
				className: F.a.faqSection
			}, i.a.createElement("div", {
				className: Object(r.a)(F.a.faqSectionContent, F.a.contentWrapper)
			}, i.a.createElement(R, null), i.a.createElement(S, null), i.a.createElement(j, null), i.a.createElement("h2", {
				className: F.a.faqHeading
			}, x._("Questions about Reddit Talk?", null, {
				hk: "1hsJOA"
			})), i.a.createElement("div", {
				className: F.a.faqs
			}, O.map(({
				prompt: e,
				answer: a
			}, t) => i.a.createElement(C.a, {
				defaultClosed: !0,
				question: e(),
				key: t
			}, a()))), i.a.createElement("h3", {
				className: F.a.faqMoreQuestionsHeading
			}, x._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), i.a.createElement(c.t, {
				className: F.a.fullFaqsButton,
				priority: c.c.Secondary,
				href: "https://reddithelp.com/hc/en-us/articles/4404349195284",
				kind: c.b.ExternalLink,
				target: "_blank"
			}, x._("View Full FAQs", null, {
				hk: "4bgTro"
			})), i.a.createElement("h2", {
				className: F.a.faqTryOutHeading
			}, x._("Try out Reddit Talk", null, {
				hk: "2dbBQh"
			})), i.a.createElement("h3", {
				className: F.a.faqTryOutSubheading
			}, x._("Ok, you've made it to the bottom of the page. What do you think? Is Reddit Talk for your community?", null, {
				hk: "2SYIjJ"
			})), i.a.createElement(m.b, {
				className: F.a.ctaButtonContainer,
				href: w,
				rel: s.a,
				target: "_blank"
			}, i.a.createElement(c.k, {
				priority: c.c.Primary,
				className: F.a.ctaLetsDoThisButton
			}, x._("Let's Do This!", null, {
				hk: "39lVPQ"
			}))), i.a.createElement(L, null))), R = () => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: Object(r.a)(F.a.faqQuestionMark, F.a.faqQuestionMarkWithBolt)
			}), i.a.createElement("div", {
				className: F.a.circleFaqYellowWithBolt
			})), S = () => i.a.createElement(i.a.Fragment, null, i.a.createElement(I, {
				className: F.a.circleFaqRadialTop
			}), i.a.createElement("div", {
				className: F.a.circleFaqCyanSmall
			}), i.a.createElement("div", {
				className: F.a.circleFaqYellowSmall
			}), i.a.createElement("div", {
				className: F.a.circleFaqCyanBig
			}), i.a.createElement("div", {
				className: F.a.circleFaqOrange
			}), i.a.createElement("div", {
				className: F.a.circleFaqBlueHollow
			})), j = () => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: Object(r.a)(F.a.faqQuestionMark, F.a.faqQuestionMarkTopLeft)
			}), i.a.createElement("div", {
				className: Object(r.a)(F.a.faqQuestionMark, F.a.faqQuestionMarkTopRight)
			}), i.a.createElement("div", {
				className: Object(r.a)(F.a.faqQuestionMark, F.a.faqQuestionMarkLeft)
			}), i.a.createElement("div", {
				className: Object(r.a)(F.a.faqQuestionMark, F.a.faqQuestionMarkBottomRight)
			})), L = () => i.a.createElement("div", {
				className: F.a.ctaButtonCirlcesAndBolt
			}, i.a.createElement("div", {
				className: F.a.circleFaqCtaYellowBig
			}, i.a.createElement(I, {
				className: F.a.circleFaqCtaRadial
			}), i.a.createElement("img", {
				alt: "Redditors chatting",
				className: F.a.imgInCircleFaqCtaYellow,
				src: `${l.a.assetPath}/img/talk/talk-footer-art.png`
			})), i.a.createElement("div", {
				className: F.a.circleFaqCtaCyanHollow
			}));
			var M = t("./src/reddit/pages/Talk/index.m.less"),
				H = t.n(M);
			const {
				fbt: Q
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(u.a)();
				Object(n.useEffect)(() => {
					e((() => e => ({
						...d.o(e),
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: {
							pageType: "talk_landing_page"
						}
					}))())
				}, [e]);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: H.a.headingSection
				}, i.a.createElement("div", {
					className: Object(r.a)(H.a.background, H.a.contentWrapper)
				}, i.a.createElement("div", {
					className: H.a.diagonalLayoutSecondary
				}), i.a.createElement("div", {
					className: H.a.diagonalLayoutPrimary,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/grid-single-rectangle.svg)`
					}
				}), i.a.createElement("div", {
					className: Object(r.a)(H.a.circle, H.a.circleYellowBig)
				}), i.a.createElement("div", {
					className: Object(r.a)(H.a.circle, H.a.circleOrangeTop)
				}), i.a.createElement(I, {
					className: H.a.radialCircleTopRight
				}), i.a.createElement(I, {
					className: H.a.radialCircleBottomRight
				}), i.a.createElement(I, {
					className: H.a.radialCircleBottomLeft
				}), i.a.createElement(I, {
					className: H.a.radialCircleTopLeft
				}), i.a.createElement("div", {
					className: Object(r.a)(H.a.circle, H.a.circleBlue)
				})), i.a.createElement("div", {
					className: Object(r.a)(H.a.contentWrapper, H.a.headingContent)
				}, i.a.createElement("div", {
					className: H.a.headingText
				}, i.a.createElement("h1", {
					className: H.a.heading
				}, i.a.createElement("img", {
					className: H.a.logo,
					src: `${l.a.assetPath}/img/talk/reddit-talk-logo.svg`,
					alt: Q._("Reddit Talk", null, {
						hk: "XNl4V"
					})
				})), i.a.createElement("h2", {
					className: H.a.subheading
				}, Q._("Live audio talks in your favorite communities", null, {
					hk: "pdWzZ"
				})), i.a.createElement("p", {
					className: Object(r.a)(H.a.description, H.a.bodyText)
				}, Q._("Hang out, host events, and connect with other redditors live!", null, {
					hk: "g1CM6"
				})), i.a.createElement("div", {
					className: Object(r.a)(H.a.modWarning, H.a.bodyText)
				}, i.a.createElement("div", {
					className: H.a.modWarningTop
				}, i.a.createElement(k.a, {
					name: "mod",
					className: H.a.modWarningIcon
				})), Q._("{=Over 1,000 of our most engaged communities already have Reddit Talk enabled. If you're not a mod and are interested in hosting a talk, reach out to your community's moderators to set one up.}", [Q._param("=Over 1,000 of our most engaged communities already have Reddit Talk enabled. If you're not a mod and are interested in hosting a talk, reach out to your community's moderators to set one up.", i.a.createElement("div", null, Q._("Over 1,000 of our most engaged communities already have Reddit Talk enabled. If you're not a mod and are interested in hosting a talk, reach out to your community's moderators to set one up.", null, {
					hk: "dvQny"
				})))], {
					hk: "VXJ3r"
				})), i.a.createElement(m.b, {
					className: H.a.ctaButtonContainer,
					href: w,
					rel: s.a,
					target: "_blank"
				}, i.a.createElement(c.k, {
					className: H.a.ctaButton,
					priority: c.c.Primary,
					onClick: () => e((() => e => ({
						...d.o(e),
						source: "talk_landing_page",
						action: "click",
						noun: "try_talk_cta"
					}))())
				}, Q._("Try it out", null, {
					hk: "4yOsEn"
				})))), i.a.createElement("div", {
					className: H.a.headingArt
				}, i.a.createElement("div", {
					className: H.a.talkMarketingImageContainer
				}, i.a.createElement("img", {
					alt: "Reddit Talk Art",
					className: H.a.talkMarketingImage,
					src: `${l.a.assetPath}/img/talk/talk-header-art.png`
				})))), i.a.createElement("div", {
					className: H.a.headingSectionGridBg,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/grid-single-rectangle.svg)`
					}
				})), i.a.createElement(b, null), i.a.createElement(A, null), i.a.createElement(o.a, {
					className: H.a.footer
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Talk.f7cb150dd07aa4919595.js.map