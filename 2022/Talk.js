// https://www.redditstatic.com/desktop2x/Talk.a51b914c61b885f7a0ec.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
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
				r = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				s = t.n(r),
				i = t("./src/lib/classNames/index.ts"),
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
					} = this.state, r = l ? s.a.isOpen : "";
					return n.a.createElement("div", {
						className: Object(i.a)(e, s.a.collapsibleFAQ)
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
						className: Object(i.a)(s.a.collapsibleAnswer, r)
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
				r = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = t.n(r),
				i = t("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: Object(i.a)(e.className, s.a.marketingPageFooter)
			}, n.a.createElement("div", {
				className: Object(i.a)(e.className, s.a.marketingPageFooterInner)
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
				href: "https://www.redditinc.com/"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/careers"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/press"
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
				className: Object(i.a)(s.a.linkCol, s.a.linkBoldCol)
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
				className: Object(i.a)(s.a.linkCol, s.a.linkBoldCol)
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
		"./src/reddit/pages/Talk/FaqSection.m.less": function(e, a, t) {
			e.exports = {
				faqSection: "_1SFF33F3H7Y_P2XATbbHel",
				isNightmodeOn: "Q_W7Kc0D8Li3k4drZVuR7",
				faqTryOutSection: "_2o4fyqjqU2sgEeg17K9feJ",
				faqSectionContent: "_3vO-E9IQpOe-HTY4a8Yden",
				circleFaqRadialTop: "_3ckJiDk2-8_8EZK7VYF4f7",
				circleFaqCyanSmall: "_1wpgij3e-lJTQeETPaV3n8",
				circleFaqYellowSmall: "mRtebAowCzdqqTKm0JkPf",
				circleFaqCyanBig: "-ssg1aN2xsMpsKW5Zrd8K",
				circleFaqOrange: "_1GA86_fH17za4zR49nrOMr",
				circleFaqOrangeHollow: "_3PdastUA7SlA2Iy_JHL0Jc",
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
		"./src/reddit/pages/Talk/HostProgramPerks.m.less": function(e, a, t) {
			e.exports = {
				hostProgramPerksSection: "_2fhANHtwO4zBaZaTxvovzd",
				perksSectionContent: "OvUPsR4ShwbfIXlxUAXlb",
				perkRow: "FTeKrDeZybSfj-ejythwJ",
				invertedPerkRow: "_3Kxf0PbKhmk3itzLQ-XkHu",
				perkInfo: "_1HfQPOV-jvltYUXkjkFSlo",
				perkTitle: "_3hghs_Cni3IAh-3zSXUtKp",
				perkDescription: "_37nj4fclYzu1eef9_rIw2X",
				perkImageBackgroundCircle: "_26L7qCI2CT6BrRpBW_qR4_",
				circleOrange: "_1cKaZnv7bh8f6pghRG3xgB",
				circleBlue: "aKlvvlAYtAd3McnZCgB7U",
				circleYellow: "_3RFnbDV5DYfvyi1mwCpsiO",
				"homepage-livebar": "_1LI1IvyKMoC5bgkHmpT0_-",
				homepageLivebar: "_1LI1IvyKMoC5bgkHmpT0_-",
				"awards-mic": "_3inMJDZ45nXIEsh20YhZSX",
				awardsMic: "_3inMJDZ45nXIEsh20YhZSX",
				"awards-swag": "_3Br1s1gwY8G6eKL3R3Z_Nm",
				awardsSwag: "_3Br1s1gwY8G6eKL3R3Z_Nm",
				"talk-room": "_1lyOqERYJTBOoS4M_h5-y3",
				talkRoom: "_1lyOqERYJTBOoS4M_h5-y3",
				circleBlueHollow: "GoIVPJFuNrpd3j5XmMXoj",
				circleYellowHollow: "_1hNW4Rfocba0Yr3gLzTk_b",
				circleYellowSmall: "_1kCbZjz1eUlHXILWZ-lTZ-",
				circleYellowTop: "_16pe_EQvuebf2FECy9xK_c",
				circleYellowMiddle: "_1JmzRw-okRMcHN982hcE0u",
				circleYellowBottom: "NeenIxGCjI0cCqOBPCT44"
			}
		},
		"./src/reddit/pages/Talk/HostProgramSteps.m.less": function(e, a, t) {
			e.exports = {
				hostProgramStepsSection: "_2emUwy_J3YfTjpIsg9xAwx",
				isNightmodeOn: "_1AXmzubEeF0QzgrKBf_GpY",
				stepsSectionContent: "_8Cb9SWzLrPjIiFcrYFzTL",
				stepsContainer: "oUxk44wbXfR8K_3Wt1DAN",
				step: "_1z0HV1_KTsczMMEg43kWLh",
				stepNumber: "_2HOCwZ3VtGqO84D-DcMwBe",
				stepInfo: "VOUcaLH99EX8Xs4SR8zWX",
				stepTitle: "oztn6YiSDEWfSM25co8PX",
				stepDescription: "_1GSYTl86XSnVIzVa-8ZfOl",
				stepLink: "_39g4ylvQVzYUwytsLSnOIP",
				ctaButtonContainer: "_1lOXO7qAnk9-6F8BNnniCh"
			}
		},
		"./src/reddit/pages/Talk/QuotesFromHosts.m.less": function(e, a, t) {
			e.exports = {
				quotesFromHostsSection: "_12X5rFlZhQ2gyMulQxnN3W",
				isNightmodeOn: "_3PtL3Bb9SSCyiGZDCn8cny",
				quotesFromHostsContent: "_1amQ2ZV7NErK3XagNbEdwM",
				subheading: "_2RjQbkcuhQlgtRcZkWaLjH",
				quoteSectionIcon: "_2p12O0ocszZKtb28yGxYMi",
				quotesContainer: "_3qqT8ePAsALUGUtRCjV0ZS",
				quote: "l5k8Xyo_dLMAwLdJOqRSN",
				quoteBubble: "_2Xt3GpegGCPrCZov9EN1nG",
				quoteText: "JeHK-M9OZpPpjDsmEnU1t",
				"quoteNumber-0": "_1HtgG6xfblraOzbDV75EfO",
				quoteNumber0: "_1HtgG6xfblraOzbDV75EfO",
				"quoteNumber-1": "_21Mi-8TNpF1QLh559rI7iu",
				quoteNumber1: "_21Mi-8TNpF1QLh559rI7iu",
				"quoteNumber-2": "_20qDhoVTGG0bX3Fh2-eo5d",
				quoteNumber2: "_20qDhoVTGG0bX3Fh2-eo5d",
				quoteHostAvatar: "_3oB7D9Y6-VNKd5_O2iYU8x",
				hostAvatar: "L_ZHgeKmgf6honZ70iQra",
				circles: "_3As8rUsnIQB50FFK1TIz7L",
				"quoteHostAvatar-0": "_2m_5AD9cM0xGKZUNOEKsYa",
				quoteHostAvatar0: "_2m_5AD9cM0xGKZUNOEKsYa",
				"quoteHostAvatar-1": "_1EpsgOdviGvYszGSP7dzNb",
				quoteHostAvatar1: "_1EpsgOdviGvYszGSP7dzNb",
				"quoteHostAvatar-2": "_3QWMKvERJ74UU6WX1hJN6D",
				quoteHostAvatar2: "_3QWMKvERJ74UU6WX1hJN6D",
				hostsWithSnoo: "_1EcAX89gVQ3gqWYK-VBCo3"
			}
		},
		"./src/reddit/pages/Talk/RadialCircle.m.less": function(e, a, t) {
			e.exports = {
				radialCircle: "ElW30t7EHUcF4Vzo4Gh9v"
			}
		},
		"./src/reddit/pages/Talk/index.m.less": function(e, a, t) {
			e.exports = {
				ctaButton: "sOeNtKO_L6LQ3rgw0zGlg",
				contentWrapper: "_1qvNZLH8zQKLtr6M6HSfIE",
				circle: "_23yFGh8GHp7Btdvlq5qFAZ",
				animatedCircle: "OHvSqcLWSE13J97JQ0QtG",
				animateTransformX: "_1zvbFl4FuB1ddPr2mUk8E2",
				bodyText: "_2IIB0JPu9j7HRVdB1bmGt3",
				subheading: "_2BgHvkW_RyAtuWkViavj_9",
				headingSection: "SlvR5SLQPN9_Lal5jS3v6",
				headingSectionGridBg: "_2qyGBzdWjAiAhltiiN96D9",
				circleYellowBig: "x6PeFxp8aLyR5ujV_0R-P",
				circleOrangeTop: "_1IlQRONcrrQZPw_o960onQ",
				circleOrangeBottom: "_1zEgjZulWHFOuXtKkDtXa4",
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
				description: "_2iUxDRfd2LCUiF_29cKoH7",
				inlineCta: "_1pexPaPisl5vTS3YsI7BoQ",
				talkHeadingImg: "_1U-0kBQTicR_O7uPDBpfTN",
				ctaButtonContainer: "GO19319MCeazqCrCIWD1L",
				communitiesSection: "iZQaA2CPvhNjctcheeEmV",
				isNightmodeOn: "Hc9AhN7xN4uwnYY4TDCiz",
				footer: "_3Q0auuFrRxhpYTE_6VYw2g"
			}
		},
		"./src/reddit/pages/Talk/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var l = t("./src/config.ts"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				i = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/opener/index.ts"),
				o = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				m = t("./src/reddit/controls/Button/index.tsx"),
				d = t("./src/reddit/controls/OutboundLink/index.tsx"),
				u = t("./src/reddit/selectors/telemetry.ts");
			var h = t("./src/reddit/hooks/useTracking.ts"),
				g = t("./src/reddit/selectors/user.ts");
			const k = "https://forms.gle/U6BS6Q8dCCFy14Gw8",
				p = "https://reddithelp.com/hc/en-us/articles/6192393697044";
			var _ = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				E = t("./src/reddit/pages/Talk/RadialCircle.m.less"),
				b = t.n(E);
			const N = e => {
				let {
					className: a
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(b.a.radialCircle, a),
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/radial-circle.svg)`
					}
				})
			};
			var w = t("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = t("./src/reddit/pages/Talk/FaqSection.m.less"),
				f = t.n(v);
			const {
				fbt: y
			} = t("./node_modules/fbt/lib/FbtPublic.js"), q = e => {
				return r.a.createElement("a", {
					href: {
						wallstreetbets: "https://www.reddit.com/r/wallstreetbets/comments/rd986k/wsb_premarket_community_talk_for_friday_december/",
						dadjokes: "https://www.reddit.com/r/dadjokes/comments/s8wj1d/rdadjokes_open_mic_night_come_tell_jokes_with_us/",
						amitheasshole: "https://www.reddit.com/r/AmItheAsshole/comments/rgmar9/are_you_the_asshole_come_face_judgement_from_our/",
						cryptocurrency: "https://www.reddit.com/r/CryptoCurrency/comments/qrwuge/live_recording_kevin_oleary_talks_about/",
						relationship_advice: "https://www.reddit.com/r/relationship_advice/comments/risjvu/love_sex_friends_and_family_part_two_live_advice/",
						movies: "https://www.reddit.com/r/movies/comments/sh982d/reddit_talk_ama_with_johnny_knoxville_chris/"
					} [e],
					target: "_blank",
					rel: "noopener noreferrer"
				}, "r/", e)
			}, C = [{
				prompt: () => y._("Who can participate in the Reddit Talk Host Program?", null, {
					hk: "4DiLMy"
				}),
				answer: function() {
					return r.a.createElement("div", {
						className: f.a.answerContainer
					}, r.a.createElement("p", null, y._("Any user with access to Reddit Talk (either through their community, if they're a mod, or through their user profile) will be automatically enrolled in the Host Program. If you don't currently have access to Reddit Talk and are interested in participating, please fill out {=this application form} .", [y._param("=this application form", r.a.createElement("a", {
						href: k,
						target: "_blank",
						rel: "noopener noreferrer"
					}, y._("this application form", null, {
						hk: "3m08Bd"
					})))], {
						hk: "4gfgwQ"
					})), r.a.createElement("p", null, "See the full Reddit Talk Host Program Terms", " ", r.a.createElement("a", {
						href: p,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "here"), ". Terms, conditions and eligibility requirements are subject to change."))
				}
			}, {
				prompt: () => y._("What makes someone a good fit for the program?", null, {
					hk: "2KjnPP"
				}),
				answer: function() {
					return r.a.createElement("div", {
						className: f.a.answerContainer
					}, r.a.createElement("p", null, y._("Our goal is to find and reward great audio hosts on Reddit. You might be a good fit if you meet any of the following criteria:", null, {
						hk: "1UxOXX"
					})), r.a.createElement("ol", null, r.a.createElement("li", null, y._("You're a moderator of a community who wants to host regular talks.", null, {
						hk: "4CXtyw"
					})), r.a.createElement("li", null, y._("You're not a mod, but think you'll be a great fit as a host.", null, {
						hk: "1K0ckE"
					})), r.a.createElement("li", null, y._("You're a passionate public speaker and want to host from your profile.", null, {
						hk: "2B6QKk"
					})), r.a.createElement("li", null, y._("You have experience as an audio creator on or off Reddit.", null, {
						hk: "2vLDQ9"
					}))))
				}
			}, {
				prompt: () => y._("Do I need to host in an existing Reddit community?", null, {
					hk: "3W0XXa"
				}),
				answer: function() {
					return r.a.createElement("div", {
						className: f.a.answerContainer
					}, r.a.createElement("p", null, y._("No! You can host talks right from your Reddit profile and target audiences by topic (e.g., Entertainment, Finance, Relationships).", null, {
						hk: "2BPd3Q"
					})))
				}
			}, {
				prompt: () => y._("What are some great examples of past talks?", null, {
					hk: "1Gsul1"
				}),
				answer: function() {
					return r.a.createElement("div", {
						className: f.a.answerContainer
					}, r.a.createElement("p", null, "We've already seen communities host amazing talks that range from casual hangouts (", q("wallstreetbets"), ",", " ", q("dadjokes"), ",", " ", q("amitheasshole"), ") to live audio AMAs (", " ", q("cryptocurrency"), " with Kevin O Leary,", " ", q("relationship_advice"), " with Kerry Cohen,", " ", q("movies"), " with Jackass crew)."))
				}
			}, {
				prompt: () => y._("How long will the program run for?", null, {
					hk: "rbDQ3"
				}),
				answer: function() {
					return r.a.createElement("div", {
						className: f.a.answerContainer
					}, r.a.createElement("p", null, "The program will run from July 11 to October 11, 2022."), r.a.createElement("p", null, "See the full Reddit Talk Host Program Terms", " ", r.a.createElement("a", {
						href: p,
						target: "_blank",
						rel: "noopener noreferrer"
					}, "here"), "."))
				}
			}], O = () => {
				const e = Object(s.e)(g.db);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(f.a.faqSection, {
						[f.a.isNightmodeOn]: e
					})
				}, r.a.createElement("div", {
					className: Object(i.a)(f.a.faqSectionContent, f.a.contentWrapper)
				}, r.a.createElement(T, null), r.a.createElement(x, null), r.a.createElement(I, null), r.a.createElement("h2", {
					className: f.a.faqHeading
				}, y._("Questions?", null, {
					hk: "4BR2u1"
				})), r.a.createElement("div", {
					className: f.a.faqs
				}, C.map((e, a) => {
					let {
						prompt: t,
						answer: l
					} = e;
					return r.a.createElement(_.a, {
						defaultClosed: !0,
						question: t(),
						key: a
					}, l())
				})), r.a.createElement("h3", {
					className: f.a.faqMoreQuestionsHeading
				}, y._("Have more questions? We've got answers.", null, {
					hk: "3Entyj"
				})), r.a.createElement(m.t, {
					className: f.a.fullFaqsButton,
					priority: m.c.Secondary,
					href: "https://reddithelp.com/hc/en-us/articles/4404349195284",
					kind: m.b.ExternalLink,
					target: "_blank"
				}, y._("View Full FAQs", null, {
					hk: "4bgTro"
				})))), r.a.createElement("div", {
					className: f.a.faqTryOutSection
				}, r.a.createElement("div", {
					className: f.a.contentWrapper
				}, r.a.createElement("h2", {
					className: f.a.faqTryOutHeading
				}, y._("Become a Reddit Talk host now", null, {
					hk: "1id99e"
				})), r.a.createElement("h3", {
					className: f.a.faqTryOutSubheading
				}, y._("Join {=r/reddittalk} if you have questions", [y._param("=r/reddittalk", r.a.createElement(w.a, {
					"aria-label": y._("r/reddittalk", null, {
						hk: "4mSBcq"
					}),
					to: "r/reddittalk",
					target: "_blank"
				}, y._("r/reddittalk", null, {
					hk: "1IvWwK"
				})))], {
					hk: "8Fnd6"
				})), r.a.createElement(d.b, {
					className: f.a.ctaButtonContainer,
					href: k,
					rel: c.a,
					target: "_blank"
				}, r.a.createElement(m.k, {
					priority: m.c.Primary,
					className: f.a.ctaLetsDoThisButton
				}, y._("Apply now", null, {
					hk: "4aTkPZ"
				}))), r.a.createElement(F, null))))
			}, T = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(i.a)(f.a.faqQuestionMark, f.a.faqQuestionMarkWithBolt)
			}), r.a.createElement("div", {
				className: f.a.circleFaqYellowWithBolt
			})), x = () => r.a.createElement(r.a.Fragment, null, r.a.createElement(N, {
				className: f.a.circleFaqRadialTop
			}), r.a.createElement("div", {
				className: f.a.circleFaqCyanSmall
			}), r.a.createElement("div", {
				className: f.a.circleFaqYellowSmall
			}), r.a.createElement("div", {
				className: f.a.circleFaqCyanBig
			}), r.a.createElement("div", {
				className: f.a.circleFaqOrange
			}), r.a.createElement("div", {
				className: f.a.circleFaqOrangeHollow
			})), I = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(i.a)(f.a.faqQuestionMark, f.a.faqQuestionMarkTopLeft)
			}), r.a.createElement("div", {
				className: Object(i.a)(f.a.faqQuestionMark, f.a.faqQuestionMarkTopRight)
			}), r.a.createElement("div", {
				className: Object(i.a)(f.a.faqQuestionMark, f.a.faqQuestionMarkLeft)
			}), r.a.createElement("div", {
				className: Object(i.a)(f.a.faqQuestionMark, f.a.faqQuestionMarkBottomRight)
			})), F = () => r.a.createElement("div", {
				className: f.a.ctaButtonCirlcesAndBolt
			}, r.a.createElement("div", {
				className: f.a.circleFaqCtaYellowBig
			}, r.a.createElement(N, {
				className: f.a.circleFaqCtaRadial
			}), r.a.createElement("img", {
				alt: "Redditors chatting",
				className: f.a.imgInCircleFaqCtaYellow,
				src: `${l.a.assetPath}/img/talk/talk-footer-image.png`
			})), r.a.createElement("div", {
				className: f.a.circleFaqCtaCyanHollow
			}));
			var j = t("./src/reddit/pages/Talk/HostProgramPerks.m.less"),
				B = t.n(j);
			const {
				fbt: R
			} = t("./node_modules/fbt/lib/FbtPublic.js"), A = [B.a.circleOrange, B.a.circleBlue, B.a.circleYellow], H = [{
				key: "homepage-livebar",
				title: R._("Get discovered on the Reddit home page", null, {
					hk: "2wjYDH"
				}),
				description: R._("Your talks wlll be promoted to relevant audiences right at the top of Reddit, and you may get shared on Reddit's social channels.", null, {
					hk: "3GHikM"
				}),
				images: [{
					imageName: "homepage-livebar",
					imageAlt: R._("Talk highlighted on Reddit homepage", null, {
						hk: "Qo9a3"
					})
				}]
			}, {
				key: "awards",
				title: R._("Win awesome digital and IRL awards", null, {
					hk: "LODni"
				}),
				description: R._("You may get exclusive swag like Reddit hoodies and mics, and get a special talk trophy on your Reddit profile.", null, {
					hk: "lKJwv"
				}),
				images: [{
					imageName: "awards-mic",
					imageAlt: R._("Reddit Talk Host Program digital award example", null, {
						hk: "4wjpp6"
					})
				}, {
					imageName: "awards-swag",
					imageAlt: R._("Reddit Talk Host Program IRL award example", null, {
						hk: "2yDOGH"
					})
				}]
			}, {
				key: "talk-room",
				title: R._("Connect with other hosts", null, {
					hk: "1Ou7bx"
				}),
				description: R._("You'll gain access to an exclusive community where you can chat with other hosts and the Reddit Talk product team.", null, {
					hk: "23p503"
				}),
				images: [{
					imageName: "talk-room",
					imageAlt: R._("Community with talk hosts", null, {
						hk: "3M08CD"
					})
				}]
			}], P = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: B.a.circleBlueHollow
			}), r.a.createElement("div", {
				className: B.a.circleYellowHollow
			}), r.a.createElement("div", {
				className: Object(i.a)(B.a.circleYellowSmall, B.a.circleYellowTop)
			}), r.a.createElement("div", {
				className: Object(i.a)(B.a.circleYellowSmall, B.a.circleYellowMiddle)
			}), r.a.createElement("div", {
				className: Object(i.a)(B.a.circleYellowSmall, B.a.circleYellowBottom)
			})), S = e => {
				let {
					title: a,
					description: t,
					images: n,
					imageRight: s,
					backgroundCircle: c
				} = e;
				return r.a.createElement("div", {
					className: s ? Object(i.a)(B.a.perkRow, B.a.invertedPerkRow) : B.a.perkRow
				}, r.a.createElement("div", {
					className: Object(i.a)(B.a.perkImageBackgroundCircle, c)
				}, n.map(e => {
					let {
						imageName: a,
						imageAlt: t
					} = e;
					return r.a.createElement("img", {
						key: a,
						className: Object(i.a)(B.a.perkImage, B.a[a]),
						src: `${l.a.assetPath}/img/talk/${a}.png`,
						alt: t
					})
				})), r.a.createElement("div", {
					className: B.a.perkInfo
				}, r.a.createElement("h3", {
					className: B.a.perkTitle
				}, a), r.a.createElement("p", {
					className: Object(i.a)(B.a.perkDescription, B.a.bodyText)
				}, t)))
			}, Y = () => r.a.createElement("div", {
				className: B.a.hostProgramPerksSection
			}, r.a.createElement("div", {
				className: B.a.perksSectionContent
			}, H.map((e, a) => {
				let {
					key: t,
					title: l,
					description: n,
					images: s
				} = e;
				return r.a.createElement(S, {
					key: t,
					title: l,
					description: n,
					images: s,
					imageRight: a % 2 != 0,
					backgroundCircle: A[a]
				})
			}), r.a.createElement(P, null)));
			var L = t("./src/reddit/pages/Talk/HostProgramSteps.m.less"),
				M = t.n(L);
			const {
				fbt: Q
			} = t("./node_modules/fbt/lib/FbtPublic.js"), D = [{
				title: Q._("Apply to be a host", null, {
					hk: "2xfnbi"
				}),
				description: Q._("If you're interested in becoming a member of the program and don't have access to Reddit Talk currently, apply now!", null, {
					hk: "26puiF"
				})
			}, {
				title: Q._("Host 4 talks every 30 days", null, {
					hk: "1PmoQp"
				}),
				description: Q._("Host 4 talks every 30 days between July 11 and October 11. Two hosts per community can team up to reach this goal.", null, {
					hk: "3BKn11"
				}),
				link: {
					text: Q._("see details", null, {
						hk: "3YjTbA"
					}),
					url: p
				}
			}, {
				title: Q._("Keep talking", null, {
					hk: "2f2KZF"
				}),
				description: Q._("Each talk must last at least 30 minutes.", null, {
					hk: "3GGDq8"
				})
			}], K = e => {
				let {
					title: a,
					description: t,
					link: l,
					stepNumber: n
				} = e;
				return r.a.createElement("div", {
					className: M.a.step
				}, r.a.createElement("div", {
					className: M.a.stepNumber
				}, n), r.a.createElement("div", {
					className: M.a.stepInfo
				}, r.a.createElement("h3", {
					className: M.a.stepTitle
				}, a), r.a.createElement("p", {
					className: Object(i.a)(M.a.stepDescription, M.a.bodyText)
				}, t, " ", l && r.a.createElement("span", null, "(", r.a.createElement("a", {
					className: M.a.stepLink,
					href: l.url,
					target: "_blank",
					rel: "noopener noreferrer"
				}, l.text), ")"))))
			}, G = e => {
				let {
					ctaButton: a
				} = e;
				const t = Object(s.e)(g.db);
				return r.a.createElement("div", {
					className: Object(i.a)(M.a.hostProgramStepsSection, {
						[M.a.isNightmodeOn]: t
					})
				}, r.a.createElement("div", {
					className: M.a.stepsSectionContent
				}, r.a.createElement("h2", {
					className: M.a.subheading
				}, Q._("How to join the Reddit Talk Host Program", null, {
					hk: "1um7kS"
				})), r.a.createElement("div", {
					className: M.a.stepsContainer
				}, D.map((e, a) => {
					let {
						title: t,
						description: l,
						link: n
					} = e;
					return r.a.createElement(K, {
						key: `step-${a+1}`,
						title: t,
						description: l,
						link: n,
						stepNumber: a + 1
					})
				})), a(M.a.ctaButtonContainer)))
			};
			var W = t("./src/reddit/pages/Talk/index.m.less"),
				z = t.n(W),
				U = t("./src/reddit/pages/Talk/QuotesFromHosts.m.less"),
				J = t.n(U);
			const {
				fbt: X
			} = t("./node_modules/fbt/lib/FbtPublic.js"), V = [{
				quote: X._("This makes our large sub feel more like a {=community} again!", [X._param("=community", r.a.createElement("strong", null, X._("community", null, {
					hk: "2b3lFN"
				})))], {
					hk: "4mNP7J"
				}),
				avatar: "24"
			}, {
				quote: X._("This was an amazing {=bonding experience.} I loved it.", [X._param("=bonding experience.", r.a.createElement("strong", null, X._("bonding experience.", null, {
					hk: "3GMiYK"
				})))], {
					hk: "2ANXtd"
				}),
				avatar: "7"
			}, {
				quote: X._("Our talks have been attracting {=thousands of listeners.}", [X._param("=thousands of listeners.", r.a.createElement("strong", null, X._("thousands of listeners.", null, {
					hk: "2FsHju"
				})))], {
					hk: "1eVyVp"
				}),
				avatar: "31"
			}], Z = e => {
				let {
					quoteElement: a,
					avatar: t,
					quoteNumber: n
				} = e;
				return r.a.createElement("div", {
					className: J.a.quote
				}, r.a.createElement("div", {
					className: J.a.quoteBubble
				}, r.a.createElement("div", {
					className: Object(i.a)(J.a.quoteText, J.a.quoteNumber, J.a[`quoteNumber-${n}`])
				}, r.a.createElement("p", null, a))), r.a.createElement("div", {
					className: Object(i.a)(J.a.quoteHostAvatar, J.a[`quoteHostAvatar-${n}`])
				}, r.a.createElement("div", {
					className: J.a.circles,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/radial-circle.svg)`
					}
				}, r.a.createElement("img", {
					className: J.a.hostAvatar,
					src: `${l.a.assetPath}/img/talk/avatars/${t}.png`,
					alt: X._("Avatar of a talk host", null, {
						hk: "mrtmQ"
					})
				}))))
			}, $ = () => {
				const e = Object(s.e)(g.db);
				return r.a.createElement("div", {
					className: Object(i.a)(J.a.quotesFromHostsSection, {
						[J.a.isNightmodeOn]: e
					})
				}, r.a.createElement("div", {
					className: J.a.quotesFromHostsContent
				}, r.a.createElement("div", {
					className: J.a.quoteSectionIcon
				}, r.a.createElement("img", {
					src: `${l.a.assetPath}/img/talk/comment-bubble.png`,
					alt: X._("Comment bubble icon", null, {
						hk: "2scKvR"
					})
				})), r.a.createElement("h2", {
					className: J.a.subheading
				}, X._("Quotes from Reddit Talk hosts", null, {
					hk: "1nzsM4"
				})), r.a.createElement("div", {
					className: J.a.quotesContainer
				}, V.map((e, a) => {
					let {
						quote: t,
						avatar: l
					} = e;
					return r.a.createElement(Z, {
						key: `quote-${a}`,
						quoteElement: t,
						avatar: l,
						quoteNumber: a
					})
				})), r.a.createElement("div", {
					className: J.a.hostsWithSnoo
				}, r.a.createElement("img", {
					src: `${l.a.assetPath}/img/talk/snoo-mic.png`,
					alt: X._("Snoo speaking on the mic", null, {
						hk: "3OrNuX"
					})
				}))))
			}, {
				fbt: ee
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(h.a)(),
					a = Object(s.e)(g.db);
				Object(n.useEffect)(() => {
					e((() => e => ({
						...u.n(e),
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: {
							pageType: "talk_landing_page"
						}
					}))())
				}, [e]);
				const t = () => e((() => e => ({
						...u.n(e),
						source: "talk_landing_page",
						action: "click",
						noun: "try_talk_cta"
					}))()),
					p = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						return r.a.createElement(d.b, {
							className: Object(i.a)(z.a.ctaButtonContainer, e),
							href: k,
							rel: c.a,
							target: "_blank"
						}, r.a.createElement(m.k, {
							className: z.a.ctaButton,
							priority: m.c.Primary,
							onClick: t
						}, ee._("Apply now", null, {
							hk: "27o8pe"
						})))
					};
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: z.a.headingSection
				}, r.a.createElement("div", {
					className: Object(i.a)(z.a.background, z.a.contentWrapper)
				}, r.a.createElement("div", {
					className: z.a.diagonalLayoutSecondary
				}), r.a.createElement("div", {
					className: z.a.diagonalLayoutPrimary,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/grid-single-rectangle.svg)`
					}
				}), r.a.createElement("div", {
					className: Object(i.a)(z.a.circle, z.a.circleYellowBig)
				}), r.a.createElement("div", {
					className: Object(i.a)(z.a.circle, z.a.circleOrangeTop)
				}), r.a.createElement(N, {
					className: z.a.radialCircleTopRight
				}), r.a.createElement(N, {
					className: z.a.radialCircleBottomRight
				}), r.a.createElement(N, {
					className: z.a.radialCircleBottomLeft
				}), r.a.createElement(N, {
					className: z.a.radialCircleTopLeft
				}), r.a.createElement("div", {
					className: Object(i.a)(z.a.circle, z.a.circleOrangeBottom)
				})), r.a.createElement("div", {
					className: Object(i.a)(z.a.contentWrapper, z.a.headingContent)
				}, r.a.createElement("div", {
					className: z.a.headingText
				}, r.a.createElement("h1", {
					className: z.a.heading
				}, r.a.createElement("img", {
					className: z.a.logo,
					src: `${l.a.assetPath}/img/talk/reddit-talk-logo.svg`,
					alt: ee._("Reddit Talk", null, {
						hk: "XNl4V"
					})
				})), r.a.createElement("h2", {
					className: z.a.subheading
				}, ee._("Join the Reddit Talk Host Program", null, {
					hk: "3NJUFS"
				})), r.a.createElement("p", {
					className: Object(i.a)(z.a.description, z.a.bodyText)
				}, ee._("Host talks between {=July 27 and October 27, 2022} to get discovered at the top of the Reddit home page. Host at least 4 talks every 30 days to get a chance to win fun IRL rewards.", [ee._param("=July 27 and October 27, 2022", r.a.createElement("strong", null, ee._("July 27 and October 27, 2022", null, {
					hk: "1U1CKP"
				})))], {
					hk: "k8Tgm"
				})), p()), r.a.createElement("div", {
					className: z.a.headingArt
				}, r.a.createElement("div", {
					className: z.a.talkMarketingImageContainer
				}, r.a.createElement("img", {
					alt: "Reddit Talk Art",
					className: z.a.talkMarketingImage,
					src: `${l.a.assetPath}/img/talk/talk-header-art.png`
				})))), r.a.createElement("div", {
					className: z.a.headingSectionGridBg,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/talk/grid-single-rectangle.svg)`
					}
				})), r.a.createElement("div", {
					className: Object(i.a)(z.a.communitiesSection, {
						[z.a.isNightmodeOn]: a
					})
				}, r.a.createElement("h2", {
					className: z.a.subheading
				}, ee._("Host live talks to grow your community on Reddit!", null, {
					hk: "1ZEinP"
				})), r.a.createElement("p", {
					className: Object(i.a)(z.a.description, z.a.bodyText)
				}, ee._("Host at least 4 talks every 30 days (12 total) between {=July 27 and October 27, 2022} to get these perks.", [ee._param("=July 27 and October 27, 2022", r.a.createElement("strong", null, ee._("July 27 and October 27, 2022", null, {
					hk: "2a1Xvh"
				})))], {
					hk: "1H9Lz5"
				}))), r.a.createElement(Y, null), r.a.createElement(G, {
					ctaButton: p
				}), r.a.createElement($, null), r.a.createElement(O, null), r.a.createElement(o.a, {
					className: z.a.footer
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Talk.a51b914c61b885f7a0ec.js.map