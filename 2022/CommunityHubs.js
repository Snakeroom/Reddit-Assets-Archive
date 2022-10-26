// https://www.redditstatic.com/desktop2x/CommunityHubs.7b205f7d4f37f7a3f63d.js
// Retrieved at 10/26/2022, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityHubs"], {
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
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				i = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				s = t.n(i),
				r = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class m extends l.a.Component {
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
						buttonContentClassName: a,
						question: t,
						children: n
					} = this.props, {
						isOpen: i
					} = this.state, m = i ? s.a.isOpen : "";
					return l.a.createElement("div", {
						className: Object(r.a)(e, s.a.collapsibleFAQ)
					}, l.a.createElement("button", {
						className: s.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, l.a.createElement("span", {
						className: Object(r.a)(s.a.buttonContent, a),
						tabIndex: -1
					}, t, i ? l.a.createElement(c.a, {
						className: s.a.collapseIcon
					}) : l.a.createElement(o.a, {
						className: s.a.collapseIcon
					}))), l.a.createElement("div", {
						className: Object(r.a)(s.a.collapsibleAnswer, m)
					}, n))
				}
			}
			a.a = m
		},
		"./src/reddit/components/LandingPage/Header.m.less": function(e, a, t) {
			e.exports = {
				headingSection: "_2ySBERnlYhxDmT2uukz5lZ",
				background: "_1pJoPO9ePVZFbbYPmeFNqS",
				diagonalLayoutSecondary: "VzOgDtnpmuyAz1IPY74hu",
				diagonalLayoutPrimary: "_2yzL5dLLccxZfIj2xgsciV",
				headingContent: "_2asD_z4IJ02xImu_ZxZMJa",
				headingText: "_1c9DsgmqemV9hl9-7hWXUD",
				header: "_3eUxi9bh_llDhCiIvUmbtZ",
				snoo: "_1THbB4RqvleMi7bst5vPrZ",
				heading: "_1tL39JRu5QfSSaFK3M7z9h",
				subheading: "Q4PLG3MjMYy3c3VyCAHt_",
				description: "_2DVk7HMVRROhCDNGMtItVy",
				headingArt: "_2rxwsxmBAR0-pD111Y9KVw",
				imageContainer: "_2iKwH-Og7SzskLBIsxfSDW",
				headerImage: "_2gO2AU_YzecchzktwE9WTU",
				headingSectionGridBg: "BUzuxafeN5T-HXdIvPmzB"
			}
		},
		"./src/reddit/components/LandingPage/ProgramPerks.m.less": function(e, a, t) {
			e.exports = {
				programPerksSection: "_2_A6JR8BcRaIQbkb5Va2CJ",
				perksSectionContent: "_3sQAolBrqlXp0lB5n3eGD6",
				perkRow: "_6YGWhcFRFH77Pu5bXCzsM",
				invertedPerkRow: "Gvl_YVYz3QBOMwoJ0oYYR",
				perkImageBackgroundCircle: "_3HyOccL4OWwPkzr0xm8nHq",
				perkInfo: "_1BnxWRrke_Jhcycngtszbl",
				perkTitle: "hNDrjEM66GUvIO1py0my2",
				perkDescription: "_1c-yLvZSjIzm6uDpT54k8H"
			}
		},
		"./src/reddit/components/LandingPage/ProgramSteps.m.less": function(e, a, t) {
			e.exports = {
				programStepsSection: "Trm79d9s0jJvD9NUTkBi9",
				stepsSectionContent: "_1QMccf_0PQE63n1F0S8fpD",
				stepsContainer: "_3yx5sepylEbA_NfRXeihjj",
				step: "_1vPP0FRWSN6n5hLz6lUYN4",
				stepNumber: "_1F2m1yWuU78RXyFhu2gm6K",
				stepInfo: "_1mxasfEW0VCStdH7rIZ5Q4",
				stepTitle: "rqhTBy0QwMWEE2PcJBDNL",
				stepDescription: "_2KIWq49XKLbltUukdF7WN8"
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
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				i = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = t.n(i),
				r = t("./src/lib/classNames/index.ts");
			const {
				fbt: o
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => l.a.createElement("div", {
				className: Object(r.a)(e.className, s.a.marketingPageFooter)
			}, l.a.createElement("div", {
				className: Object(r.a)(e.className, s.a.marketingPageFooterInner)
			}, l.a.createElement("div", {
				className: s.a.linkContainer
			}, l.a.createElement("div", {
				className: s.a.linkCol
			}, l.a.createElement("ul", {
				className: s.a.linkColInner
			}, l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/"
			}, o._("about", null, {
				hk: "3IO4c7"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/careers"
			}, o._("careers", null, {
				hk: "2GATRU"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/press"
			}, o._("press", null, {
				hk: "iUiGg"
			}))))), l.a.createElement("div", {
				className: s.a.linkCol
			}, l.a.createElement("ul", {
				className: s.a.linkColInner
			}, l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/advertising"
			}, o._("advertise", null, {
				hk: "RYuIn"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, o._("blog", null, {
				hk: "4xzWuA"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, o._("help", null, {
				hk: "36XyzA"
			}))))), l.a.createElement("div", {
				className: Object(r.a)(s.a.linkCol, s.a.linkBoldCol)
			}, l.a.createElement("ul", {
				className: s.a.linkColInner
			}, l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, o._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, o._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), l.a.createElement("div", {
				className: Object(r.a)(s.a.linkCol, s.a.linkBoldCol)
			}, l.a.createElement("ul", {
				className: s.a.linkColInner
			}, l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, o._("Facebook", null, {
				hk: "47DT2F"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, o._("Twitter", null, {
				hk: "3aUv7u"
			}))), l.a.createElement("li", {
				className: s.a.linkItem
			}, l.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, o._("Instagram", null, {
				hk: "dVIRX"
			})))))), l.a.createElement("ul", {
				className: s.a.legal
			}, l.a.createElement("li", {
				className: s.a.legalItem
			}, l.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, o._("content policy", null, {
				hk: "4ptiaZ"
			}))), l.a.createElement("li", {
				className: s.a.legalItem
			}, l.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, o._("privacy policy", null, {
				hk: "1ybjnz"
			}))), l.a.createElement("li", {
				className: s.a.legalItem
			}, l.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, o._("user agreement", null, {
				hk: "4puRxC"
			}))), l.a.createElement("li", {
				className: s.a.legalItem
			}, l.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, o._("mod policy", null, {
				hk: "1VvAdM"
			}))), l.a.createElement("li", {
				className: s.a.legalItem
			}, o._("© {year} Reddit, Inc. All rights reserved", [o._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/helpers/trackers/communityHubs.ts": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return i
			})), t.d(a, "a", (function() {
				return s
			})), t.d(a, "c", (function() {
				return r
			}));
			var n = t("./src/reddit/constants/tracking.ts"),
				l = t("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					...Object(l.o)(e),
					action: n.c.CLICK,
					noun: "sign_up_cta",
					source: "community_hubs_landing_page"
				}),
				s = () => e => ({
					...Object(l.o)(e),
					action: n.c.CLICK,
					noun: "recommend_someone",
					source: "community_hubs_landing_page"
				}),
				r = () => e => ({
					...Object(l.o)(e),
					action: n.c.VIEW,
					noun: "get_app_cta",
					source: "community_hub",
					subreddit: Object(l.kb)(e)
				})
		},
		"./src/reddit/pages/CommunityHubs/FAQSection.m.less": function(e, a, t) {
			e.exports = {
				faqSection: "_2n_T--1rBOPT93JOsXPtrL",
				faqContent: "_2WIx8-HVGPFKgppy1Fo2TR",
				faqHeading: "_3Kriik2kYxipNu1Kh6-I0R",
				questionText: "_10N5mIXqg0jnW6zCp6XlP3",
				nextParagraph: "B_msvT9mSDIYTS0-a0jZy",
				bulletList: "_3CZP2Cu_ygqvFdISqG4WIj",
				faqCircle: "zwjbDmPaGx1Za8YiCdI2e",
				topLeftCircle: "_2U0SlzgTneKMLBZCMrF-31",
				topMiddleCircle: "_3cKklwEgOlst14mtZQwhc-",
				topRightCircle: "_32P8oU1rD2mvWLdPWZkWOn",
				bottomCircle: "FvZwZWVQ0jOzRb2p-q_wO",
				faqQuestionMark: "_2veTK6ixYHy8we883b76fT",
				leftMQuestionMark: "_366I2Qy_zF7bXQwYheRNz-",
				leftXLQuestionMark: "_1kV8J7fq3eE0u-MHpWiC0F",
				leftXlQuestionMark: "_1kV8J7fq3eE0u-MHpWiC0F",
				leftSQuestionMark: "_25Z5Uh-y27veofQWHoGgbq",
				rightMQuestionmark: "_1WdVKcfgMaLibzbQTlL8JX",
				rightLQuestionMark: "_32ZCdC_FLm5IHx7UN-8_Ib"
			}
		},
		"./src/reddit/pages/CommunityHubs/PerksSection.m.less": function(e, a, t) {
			e.exports = {
				appHeaderImage: "_3k_FzO2Ml2zvOOtlgKZ4ph",
				snooArtist: "uEgxXrUmzE5FUD9rLHNQa",
				snoosSitting: "YWch3F_AE-kVx-IrEMmZY",
				programPerkInfo: "_1LnV_0cgAbScRbbO-BikK",
				circleOrange: "_3A97ye-jZUDjyHfikx0m24",
				circleBlue: "_187RC3VwB2njJp_ck0X1ur",
				circlePink: "_22E5CcmQ2YfjjFDkWjgh2b",
				circlePurpleSolid: "_1-VUhmm0L509oTPOEdAbb2",
				circleTop: "_2B7MgVPlWO4P3OjtQ-g1RH",
				circlePinkHollow: "_1eWIVoitdVFMqDq5-0UCvR",
				circleMedium: "_3SfP-LusCrV0MRP83JII9Y",
				circleGreenHollow: "Eu3NT0wCKWpoWkdwCyO7F",
				circleYellowHollow: "_2iyyuVEwjFvZNoAaOC0jj5",
				circleBottom: "_2ZTkoyEoUHSB88glGTrImI"
			}
		},
		"./src/reddit/pages/CommunityHubs/SignUpButton.m.less": function(e, a, t) {
			e.exports = {
				buttonContainer: "RfZrHyGuVkwhVEjIHUwzM",
				signUpButton: "_3Bj7NdkOCtxVG0QUPKmGJL"
			}
		},
		"./src/reddit/pages/CommunityHubs/index.m.less": function(e, a, t) {
			e.exports = {
				landingPage: "APGdFFkDgPofRsy8lkFye",
				accentBackground: "_2pjpiABiPXOT2WObPeydPO",
				isNightMode: "_14rZt0R1Cx90Y0E94VepXH",
				communityHubsContentWrapper: "_3yIaT27_ZddZeBlgAFgxnl",
				title: "_2i0HrnyzNLaGAq8ntWQ2lR",
				snoo: "_gZOEhQyn0QNd8yBON4b2",
				titleText: "_3m1CXN8qgP2ulN5DmmFx8o",
				mobileHeaderArt: "_2s7m9KbSQfZ9jrOxyhtqFb",
				creatorsSection: "_1cIFsEUjpQLfMU_S2vjS-l",
				creatorsSectionDescription: "_1kB3pPxqhO7Xv7dykECzxR",
				largeTitle: "_3MdMNCzTKFEHd33OmPx2yg",
				referralSection: "_3egxNgPtjMYlWqFKbMPgda",
				referralContainer: "_2Y1rbTzknAaqizaRDB3wHU",
				referralContent: "_263a_UdbLOyemluyFGSv-f",
				referralDescription: "_2SquQvMCPGwYrvVMU75a5q",
				referralLink: "nawtAcBh6q-9SupxuGdj8",
				referralArt: "_21EomEFPZTYizfaDKcG4P6",
				joinSection: "_3V4WlsZfdvTeMaHn3Bz1Kt",
				joinContent: "lPTg0vWsVWgMCceRQbibR",
				joinArt: "_2SLDbceh8T60bdELknH-m-",
				joinEmoji: "_2PPc9ZIiV6WdMQwdp69dcg",
				hamsterEmoji: "_1V26Op92hg_n5dbHLYfDRn",
				narwhalEmoji: "_1fe3iiW2jv-muq81-RtOMz",
				rainbowEmoji: "_2DCd6l0lpS3YcfpV7dqJx9",
				sunglassesEmoji: "_6S1J8up4J7Th-xDmh11Z",
				upvoteEmoji: "_3O6NWFUhGCiterBUssROYM",
				marketingFooter: "_1BUXRwiFWsxsauq_CC8pcq"
			}
		},
		"./src/reddit/pages/CommunityHubs/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				i = t("./node_modules/react-redux/es/index.js"),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/lib/opener/index.ts"),
				o = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = t("./src/reddit/components/LandingPage/Header.m.less"),
				m = t.n(c);
			const {
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => {
					let {
						title: a,
						subtitle: t,
						description: n,
						ctaButton: i,
						headerArtAlt: s,
						headerArtSrc: r
					} = e;
					return l.a.createElement("div", {
						className: m.a.headingSection
					}, l.a.createElement("div", {
						className: m.a.background
					}, l.a.createElement("div", {
						className: m.a.diagonalLayoutSecondary
					}), l.a.createElement("div", {
						className: m.a.diagonalLayoutPrimary
					})), l.a.createElement("div", {
						className: m.a.headingContent
					}, l.a.createElement("div", {
						className: m.a.headingText
					}, l.a.createElement("div", {
						className: m.a.header
					}, l.a.createElement(o.a, {
						className: m.a.snoo
					}), l.a.createElement("h1", {
						className: m.a.heading
					}, a)), l.a.createElement("h2", {
						className: m.a.subheading
					}, t), l.a.createElement("p", {
						className: m.a.description
					}, n), i), l.a.createElement("div", {
						className: m.a.headingArt
					}, l.a.createElement("div", {
						className: m.a.imageContainer
					}, l.a.createElement("img", {
						alt: s,
						className: m.a.headerImage,
						src: r
					})))), l.a.createElement("div", {
						className: m.a.headingSectionGridBg
					}))
				},
				p = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				g = t("./src/reddit/controls/OutboundLink/index.tsx"),
				h = t("./src/reddit/helpers/trackers/communityHubs.ts"),
				k = t("./src/reddit/hooks/useTracking.ts"),
				b = t("./src/reddit/selectors/user.ts"),
				_ = t("./src/reddit/pages/CommunityHubs/constants.ts"),
				E = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				N = t("./src/reddit/pages/CommunityHubs/FAQSection.m.less"),
				f = t.n(N);
			const {
				fbt: y
			} = t("./node_modules/fbt/lib/FbtPublic.js"), C = [{
				prompt: () => y._("What are Community Hubs?", null, {
					hk: "1S2zZf"
				}),
				answer: () => l.a.createElement("div", null, l.a.createElement("p", null, y._("Community Hubs are a centralized place for individuals to build community around their content on Reddit. Think of Community Hubs as a subreddit that allows individual Community Builders to build and nurture communities of their fans.", null, {
					hk: "1uCLZG"
				})), l.a.createElement("p", {
					className: f.a.nextParagraph
				}, y._("Share your content directly with your fan community while encouraging them to connect with each other, and to participate in building the culture and tone of the community (at your discretion).", null, {
					hk: "1PuG5U"
				})))
			}, {
				prompt: () => y._("Who can participate?", null, {
					hk: "1JYNq5"
				}),
				answer: () => l.a.createElement("div", null, l.a.createElement("p", null, y._("Basic requirements are as follows:", null, {
					hk: "4xEeJw"
				})), l.a.createElement("ul", {
					className: f.a.bulletList
				}, l.a.createElement("li", null, y._("Completing onboarding and training", null, {
					hk: "4tK8A0"
				})), l.a.createElement("li", null, y._("Posting to your community several times a week", null, {
					hk: "ObUbh"
				})), l.a.createElement("li", null, y._("Engage with your Hub community comments daily", null, {
					hk: "31ZvRH"
				})), l.a.createElement("li", null, y._("Have some prepared content to post into your Hub community on day 1", null, {
					hk: "16VOQI"
				})), l.a.createElement("li", null, y._("Participate in feedback sessions throughout the pilot program", null, {
					hk: "Afbk"
				}))), l.a.createElement("p", {
					className: f.a.nextParagraph
				}, y._("There are no minimums for followers or subscribers on other platforms. The Community Hubs pilot program is by application only.", null, {
					hk: "DWQfV"
				})))
			}, {
				prompt: () => y._("What makes someone a good fit for Community Hubs?", null, {
					hk: "YHyr2"
				}),
				answer: () => l.a.createElement("div", null, l.a.createElement("p", null, y._("Community Hubs is about giving individuals and businesses a home for their community. Niche is good. Broad is good. Large, established content producers are good. Not so large, growing content producers are good. Passion is good. Knowing yourself and your content is good.", null, {
					hk: "4wOnQP"
				})))
			}, {
				prompt: () => y._("Do I need to host an existing Reddit community?", null, {
					hk: "1KcG4m"
				}),
				answer: () => l.a.createElement("div", null, l.a.createElement("p", null, y._("No! While it’s good to generally understand how Reddit works, there is no requirement that you need to host an existing community to apply for the Community Hubs pilot program.", null, {
					hk: "20fcwv"
				})))
			}, {
				prompt: () => y._("How long will the pilot program run?", null, {
					hk: "15hlJ2"
				}),
				answer: () => l.a.createElement("div", null, l.a.createElement("p", null, y._("The Community Hubs pilot is running from Oct 2022 through the end of the year. However, it’s never too late to apply as Community Hubs moves out of pilot in early 2023. If you’re interested, we want to hear from you!", null, {
					hk: "42x6Yu"
				})))
			}], v = () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
				className: Object(s.a)(f.a.faqCircle, f.a.topLeftCircle)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqCircle, f.a.topMiddleCircle)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqCircle, f.a.topRightCircle)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqCircle, f.a.bottomCircle)
			})), w = () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
				className: Object(s.a)(f.a.faqQuestionMark, f.a.leftMQuestionMark)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqQuestionMark, f.a.leftXLQuestionMark)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqQuestionMark, f.a.leftSQuestionMark)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqQuestionMark, f.a.rightMQuestionmark)
			}), l.a.createElement("div", {
				className: Object(s.a)(f.a.faqQuestionMark, f.a.rightLQuestionMark)
			}));
			var j = () => l.a.createElement("div", {
					className: f.a.faqSection
				}, l.a.createElement(v, null), l.a.createElement(w, null), l.a.createElement("div", {
					className: f.a.faqContent
				}, l.a.createElement("h2", {
					className: f.a.faqHeading
				}, y._("Questions?", null, {
					hk: "2EOZ5c"
				})), l.a.createElement("div", null, C.map((e, a) => {
					let {
						prompt: t,
						answer: n
					} = e;
					return l.a.createElement(E.a, {
						buttonContentClassName: f.a.questionText,
						defaultClosed: !0,
						question: t(),
						key: a
					}, n())
				})))),
				P = t("./src/reddit/components/LandingPage/ProgramPerks.m.less"),
				O = t.n(P);
			const {
				fbt: x
			} = t("./node_modules/fbt/lib/FbtPublic.js"), I = e => {
				let {
					description: a,
					images: t,
					imagePath: n,
					imageRight: i,
					backgroundCircle: r,
					title: o,
					perkInfoClassName: c
				} = e;
				return l.a.createElement("div", {
					className: Object(s.a)(O.a.perkRow, {
						[O.a.invertedPerkRow]: i
					})
				}, l.a.createElement("div", {
					className: Object(s.a)(O.a.perkImageBackgroundCircle, r)
				}, t.map(e => {
					let {
						imageClassName: a,
						imageName: t,
						imageAlt: i
					} = e;
					return l.a.createElement("img", {
						key: t,
						className: a,
						src: `${n}${t}.png`,
						alt: i
					})
				})), l.a.createElement("div", {
					className: Object(s.a)(O.a.perkInfo, c)
				}, l.a.createElement("h3", {
					className: O.a.perkTitle
				}, o), l.a.createElement("p", {
					className: O.a.perkDescription
				}, a)))
			};
			var H = e => {
					let {
						children: a,
						imageBackgroundCircles: t,
						imagePath: n,
						perks: i,
						perkInfoClassName: s
					} = e;
					return l.a.createElement("div", {
						className: O.a.programPerksSection
					}, l.a.createElement("div", {
						className: O.a.perksSectionContent
					}, i.map((e, a) => {
						let {
							key: i,
							title: r,
							description: o,
							images: c
						} = e;
						return l.a.createElement(I, {
							key: i,
							title: r,
							description: o,
							images: c,
							imagePath: n,
							imageRight: a % 2 != 0,
							perkInfoClassName: s,
							backgroundCircle: t[a]
						})
					}), a))
				},
				S = t("./src/reddit/pages/CommunityHubs/PerksSection.m.less"),
				M = t.n(S);
			const {
				fbt: F
			} = t("./node_modules/fbt/lib/FbtPublic.js"), B = [M.a.circleOrange, M.a.circleBlue, M.a.circlePink], R = [{
				key: "community-hubs-page-header",
				title: F._("Create a space of your own", null, {
					hk: "3eic9O"
				}),
				description: F._("Take part in a new kind of Reddit community specifically designed to help individuals, brands, and organizations directly engage with their audiences.", null, {
					hk: "wTlP"
				}),
				images: [{
					imageClassName: M.a.appHeaderImage,
					imageName: "app-header-example",
					imageAlt: F._("Community Hubs header in app", null, {
						hk: "3QxiCM"
					})
				}]
			}, {
				key: "artist",
				title: F._("Get seen by more people", null, {
					hk: "3SY2BZ"
				}),
				description: F._("Reddit’s recommendations organically promote your community through high-visibility placements in redditor’s home feeds.", null, {
					hk: "J54Ct"
				}),
				images: [{
					imageClassName: M.a.snooArtist,
					imageName: "snoo-artist",
					imageAlt: F._("Artist snoo", null, {
						hk: "3Gtw8c"
					})
				}]
			}, {
				key: "sitting-snoos",
				title: F._("Discover new ways to engage", null, {
					hk: "1XvN7T"
				}),
				description: F._("Directly engage with your fans and community using topic channels, live talks, chat, Q&A tools, and more.", null, {
					hk: "OX8ZU"
				}),
				images: [{
					imageClassName: M.a.snoosSitting,
					imageName: "snoos-sitting",
					imageAlt: F._("Sitting snoos", null, {
						hk: "4hhERP"
					})
				}]
			}];
			var A = () => l.a.createElement(H, {
					imageBackgroundCircles: B,
					imagePath: _.a,
					perks: R,
					perkInfoClassName: M.a.programPerkInfo
				}, l.a.createElement("div", {
					className: Object(s.a)(M.a.circlePurpleSolid, M.a.circleTop)
				}), l.a.createElement("div", {
					className: Object(s.a)(M.a.circlePinkHollow, M.a.circleMedium)
				}), l.a.createElement("div", {
					className: Object(s.a)(M.a.circleGreenHollow, M.a.circleMedium)
				}), l.a.createElement("div", {
					className: Object(s.a)(M.a.circleYellowHollow, M.a.circleMedium)
				}), l.a.createElement("div", {
					className: Object(s.a)(M.a.circlePurpleSolid, M.a.circleBottom)
				})),
				L = t("./src/reddit/controls/Button/index.tsx"),
				q = t("./src/reddit/pages/CommunityHubs/SignUpButton.m.less"),
				Q = t.n(q);
			const {
				fbt: D
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var T = () => {
					const e = Object(k.a)();
					return l.a.createElement(g.b, {
						className: Q.a.buttonContainer,
						href: _.b,
						rel: r.a,
						target: "_blank"
					}, l.a.createElement(L.k, {
						className: Q.a.signUpButton,
						priority: L.c.Primary,
						onClick: () => e(Object(h.b)())
					}, D._("Sign up!", null, {
						hk: "h1ZIQ"
					})))
				},
				W = t("./src/reddit/components/LandingPage/ProgramSteps.m.less"),
				z = t.n(W);
			const {
				fbt: U
			} = t("./node_modules/fbt/lib/FbtPublic.js"), Y = e => {
				let {
					description: a,
					stepNumber: t,
					title: n
				} = e;
				return l.a.createElement("div", {
					className: z.a.step
				}, l.a.createElement("div", {
					className: z.a.stepNumber
				}, t), l.a.createElement("div", {
					className: z.a.stepInfo
				}, l.a.createElement("h3", {
					className: z.a.stepTitle
				}, n), l.a.createElement("p", {
					className: z.a.stepDescription
				}, a)))
			};
			var V = e => {
					let {
						className: a,
						steps: t
					} = e;
					return l.a.createElement("div", {
						className: Object(s.a)(z.a.programStepsSection, a)
					}, l.a.createElement("div", {
						className: z.a.stepsSectionContent
					}, l.a.createElement("h2", null, U._("How to join the program", null, {
						hk: "4CDDWz"
					})), l.a.createElement("div", {
						className: z.a.stepsContainer
					}, t.map((e, a) => {
						let {
							title: t,
							description: n
						} = e;
						return l.a.createElement(Y, {
							key: `step-${a+1}`,
							description: n,
							stepNumber: a + 1,
							title: t
						})
					}))))
				},
				G = t("./src/reddit/pages/CommunityHubs/index.m.less"),
				Z = t.n(G);
			const {
				fbt: J
			} = t("./node_modules/fbt/lib/FbtPublic.js"), K = [{
				title: J._("Sign up", null, {
					hk: "1QyekR"
				}),
				description: J._("Graphic artists, streamers, amateur investors, chicken farmers, dog trainers—come on down! If you think you’re too niche, you’re not.", null, {
					hk: "b0FvT"
				})
			}, {
				title: J._("Set up", null, {
					hk: "4DBIln"
				}),
				description: J._("We’ll help you give your community a great look and feel, set up topic channels, chats, and even events to help you get started.", null, {
					hk: "1H8iVt"
				})
			}, {
				title: J._("Start engaging", null, {
					hk: "4JRqY"
				}),
				description: J._("You focus on engaging with fans and we’ll do the rest. Start posting and Reddit will promote your community through organic recommendations.", null, {
					hk: "1Y8l4z"
				})
			}];
			var X = e => {
				let {
					isNightMode: a
				} = e;
				return l.a.createElement(V, {
					className: Object(s.a)(Z.a.accentBackground, {
						[Z.a.isNightMode]: a
					}),
					steps: K
				})
			};
			const {
				fbt: $
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(k.a)(),
					a = Object(i.e)(b.eb);
				return l.a.createElement("div", {
					className: Z.a.landingPage
				}, l.a.createElement(u, {
					title: $._("Community Hubs", null, {
						hk: "jl2El"
					}),
					subtitle: $._("A new way to build a thriving fan community on Reddit", null, {
						hk: "4sJ78P"
					}),
					description: $._("With Community Hubs, you can tap into Reddit’s passionate user base to build an engaged community of fans.", null, {
						hk: "3cUlQd"
					}),
					ctaButton: l.a.createElement(T, null),
					headerArtAlt: $._("Community Hubs header art", null, {
						hk: "3uDfxp"
					}),
					headerArtSrc: `${_.a}snoo-gamer.png`
				}), l.a.createElement("img", {
					className: Z.a.mobileHeaderArt,
					src: `${_.a}mobile-snoo-gamer.png`
				}), l.a.createElement("div", {
					className: Object(s.a)(Z.a.creatorsSection, {
						[Z.a.isNightMode]: a
					})
				}, l.a.createElement("h3", null, $._("Get the white-glove treatment as your grow your community", null, {
					hk: "1pbU8V"
				})), l.a.createElement("p", {
					className: Z.a.creatorsSectionDescription
				}, $._("As part of the pilot program, you’ll get personal assistance setting up your community while having a direct influence on how fan communities are developed on Reddit.", null, {
					hk: "CSkeX"
				}))), l.a.createElement(A, null), l.a.createElement(X, {
					isNightMode: a
				}), l.a.createElement(j, null), l.a.createElement("div", {
					className: Object(s.a)(Z.a.referralSection, {
						[Z.a.isNightMode]: a
					})
				}, l.a.createElement("div", {
					className: Z.a.referralContainer
				}, l.a.createElement("div", {
					className: Z.a.referralContent
				}, l.a.createElement("h2", {
					className: Z.a.largeTitle
				}, $._("Help out a friend", null, {
					hk: "4F4fnY"
				})), l.a.createElement("p", {
					className: Z.a.referralDescription
				}, $._("Know someone you’d love to see on Reddit? Recommend them and we’ll reach out.", null, {
					hk: "3etbyM"
				})), l.a.createElement(g.b, {
					className: Object(s.a)(Z.a.referralLink, {
						[Z.a.isNightMode]: a
					}),
					href: _.c,
					rel: r.a,
					target: "_blank"
				}, l.a.createElement("div", {
					onClick: () => e(Object(h.a)())
				}, $._("Recommend someone", null, {
					hk: "1p6ODO"
				})))), l.a.createElement("img", {
					alt: $._("Community Hubs referral art", null, {
						hk: "3feBYq"
					}),
					className: Z.a.referralArt,
					src: `${_.a}snoo-baker.png`
				}))), l.a.createElement("div", {
					className: Z.a.joinSection
				}, l.a.createElement("div", {
					className: Z.a.joinContent
				}, l.a.createElement("h2", {
					className: Z.a.largeTitle
				}, $._("Join the pilot program", null, {
					hk: "477M0f"
				})), l.a.createElement("img", {
					alt: $._("Community Hubs join art", null, {
						hk: "21kaR2"
					}),
					className: Z.a.joinArt,
					src: `${_.a}snoo-pose.png`,
					style: {
						backgroundImage: `url(${_.a}snoo-pose-background.png)`
					}
				}), l.a.createElement(T, null)), l.a.createElement("img", {
					className: Object(s.a)(Z.a.joinEmoji, Z.a.hamsterEmoji),
					src: `${_.a}emoji-hamster.png`
				}), l.a.createElement("img", {
					className: Object(s.a)(Z.a.joinEmoji, Z.a.narwhalEmoji),
					src: `${_.a}emoji-narwhal.png`
				}), l.a.createElement("img", {
					className: Object(s.a)(Z.a.joinEmoji, Z.a.rainbowEmoji),
					src: `${_.a}emoji-rainbow.png`
				}), l.a.createElement("img", {
					className: Object(s.a)(Z.a.joinEmoji, Z.a.sunglassesEmoji),
					src: `${_.a}emoji-sunglasses.png`
				}), l.a.createElement("img", {
					className: Object(s.a)(Z.a.joinEmoji, Z.a.upvoteEmoji),
					src: `${_.a}emoji-upvote.png`
				})), l.a.createElement(p.a, {
					className: Z.a.marketingFooter
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityHubs.7b205f7d4f37f7a3f63d.js.map