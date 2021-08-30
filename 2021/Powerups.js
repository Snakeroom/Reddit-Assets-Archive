// https://www.redditstatic.com/desktop2x/Powerups.11fef34a57179bebfcb7.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Powerups"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				l = t("./node_modules/lodash/_copyArray.js"),
				s = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, a) {
				return s(l(e), n(a, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, a) {
			e.exports = function(e, a, t) {
				return e == e && (void 0 !== t && (e = e <= t ? e : t), void 0 !== a && (e = e >= a ? e : a)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, a) {
			var t = Math.floor,
				n = Math.random;
			e.exports = function(e, a) {
				return e + t(n() * (a - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				l = t("./node_modules/lodash/_shuffleSelf.js"),
				s = t("./node_modules/lodash/values.js");
			e.exports = function(e, a) {
				var t = s(e);
				return l(t, n(a, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, a) {
				var t = -1,
					l = e.length,
					s = l - 1;
				for (a = void 0 === a ? l : a; ++t < a;) {
					var r = n(t, s),
						o = e[r];
					e[r] = e[t], e[t] = o
				}
				return e.length = a, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				l = t("./node_modules/lodash/_baseSampleSize.js"),
				s = t("./node_modules/lodash/isArray.js"),
				r = t("./node_modules/lodash/_isIterateeCall.js"),
				o = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, a, t) {
				return a = (t ? r(e, a, t) : void 0 === a) ? 1 : o(a), (s(e) ? n : l)(e, a)
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
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				s = t("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				r = t.n(s),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				i = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
						question: a,
						children: t
					} = this.props, {
						isOpen: n
					} = this.state, s = n ? r.a.isOpen : "";
					return l.a.createElement("div", {
						className: Object(o.a)(e, r.a.collapsibleFAQ)
					}, l.a.createElement("button", {
						className: r.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, l.a.createElement("span", {
						className: r.a.buttonContent,
						tabIndex: -1
					}, a, n ? l.a.createElement(i.a, {
						className: r.a.collapseIcon
					}) : l.a.createElement(c.a, {
						className: r.a.collapseIcon
					}))), l.a.createElement("div", {
						className: Object(o.a)(r.a.collapsibleAnswer, s)
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
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				s = t("./src/reddit/components/MarketingPageFooter/index.m.less"),
				r = t.n(s),
				o = t("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => l.a.createElement("div", {
				className: Object(o.a)(e.className, r.a.marketingPageFooter)
			}, l.a.createElement("div", {
				className: Object(o.a)(e.className, r.a.marketingPageFooterInner)
			}, l.a.createElement("div", {
				className: r.a.linkContainer
			}, l.a.createElement("div", {
				className: r.a.linkCol
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), l.a.createElement("div", {
				className: r.a.linkCol
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), l.a.createElement("div", {
				className: Object(o.a)(r.a.linkCol, r.a.linkBoldCol)
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), l.a.createElement("div", {
				className: Object(o.a)(r.a.linkCol, r.a.linkBoldCol)
			}, l.a.createElement("ul", {
				className: r.a.linkColInner
			}, l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), l.a.createElement("ul", {
				className: r.a.legal
			}, l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, l.a.createElement("a", {
				className: r.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), l.a.createElement("li", {
				className: r.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less": function(e, a, t) {
			e.exports = {
				container: "fpiu0NM2S8yHH6_ihcdWk",
				checkboxList: "_1m1zi-wGci3ttgxb9Hxaiv",
				checkbox: "_11oFoHgYhREHdxjIRuo-Y0",
				disabled: "_13t2B0OwZfs0pUbJWZX5zP",
				selectAllButton: "_3x9Z6fvYEgjxiOs6H1Uzrn",
				active: "w7Mleu6dWx4HFuv3HjRkC"
			}
		},
		"./src/reddit/components/PowerupsSignUpModal/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_3J2N8PrCM-22npsTEiB1Ku",
				body: "_2DKUhe0A1QXWcxFCdX_XKW",
				footer: "oq2jQ1_NJTwSNJW5cihhn",
				closeButton: "_1aDxdMMvhHKy3vwjBfVU_l",
				closeIcon: "_1jor546QmxB0BnzJcj0I7E",
				titleContainer: "_3Z_APi5dTftxEdjJSGvM9",
				titleText: "_3CvPXzsDdnIWv4x_vCmnXn",
				subtitleText: "_2fkQCeEu-WrnnBt_ySOlUC",
				errorContainer: "_3WoB_AHR25QdUcmAz-qOwT",
				errorIcon: "_1gDcc-buz_eRI3WojAJCCa",
				errorText: "_3xziQ12Hb_yVRuFJtSe3T4",
				successText: "V9PocUNQDrlJqgU42fd-V",
				successButton: "j-tk8OKGHvjv3YMR3rzqz",
				active: "_1IEgxz5Ly3km_iF_vCIzlF",
				background: "_24IdG0yO57Ns_cHkTgWw2x",
				diagonalLayoutPrimary: "_2YBER88ttGc9PiTkjc2-Wq",
				diagonalLayoutSecondary: "_39WpGUnkULE5PdOMtAH3cq",
				headerImageContainer: "_29KrxpIQaoPJPUxEtm4B8Q",
				headerImage: "_1ghZ6lkmdRVBj30xcXSN_I",
				circle: "X9dGk9FD4tM0l6yeMxB_a",
				lineCircle: "_2YSvKW89Z3ZZKzo1TdozwV",
				circleOrangeHollow: "e84hE0QN-IeWluXURezRL",
				dotCircle1: "_2nTLKgCJvLzlMVoEq_VOr_",
				circleGreenFilled: "_3IaaEpvnJY-YBYefnps9pN",
				circleGreenHollow: "_1Kvvdn4WL-bQHEHgd3tVlS",
				circleYellowHollow: "v3hW0tczBXwa0jx8u83mv",
				dotCircle2: "_3e8hBySJ8imySq9u5ryzne"
			}
		},
		"./src/reddit/components/PowerupsSignUpModal/signupButton.m.less": function(e, a, t) {
			e.exports = {
				button: "_3ZSQSgkGYXZ9XJ5g3wsxpE",
				loading: "_2s-QMavjFJzrBs0ArvRNhu"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, a, t) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = t.n(r);
			a.a = ({
				center: e,
				className: a,
				sizePx: t = 10
			}) => l.a.createElement("div", {
				className: Object(s.a)(o.a.loadingIcon, a, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${t}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return l
			}));
			var n = t("./node_modules/react/index.js");

			function l() {
				const [e, a] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(a, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return l
			}));
			var n = t("./node_modules/react-redux/es/index.js");

			function l() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				l = t.n(n);
			a.a = e => l.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("g", null, l.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/pages/Powerups/Communities.m.less": function(e, a, t) {
			e.exports = {
				communitiesContainer: "_2VWS7ATKcPK8kFgPYzh06g",
				isNightMode: "_2JPVTtZDQj-qJpwQ4iUwFE",
				communitiesContent: "_3Suw2A7GhnE8jIOQ0v2hwd",
				community: "_1pmakIscN9hjFpFbg2oI0S",
				communityIcon: "_1Tt4iKH_VsDX2eW0O14qyI",
				communityName: "_2O1MFdtNk8V8rvSq1Obfi1"
			}
		},
		"./src/reddit/pages/Powerups/FaqSection.m.less": function(e, a, t) {
			e.exports = {
				faqSection: "_3jsS_1eJLc5H9_KZoN4bjn",
				faqSectionContent: "_1ZKHCXoF0MZoltuQG6eMK7",
				circleFaqDotted: "_1a7IfqNingZ5xZdLFfdsUW",
				circleFaqCyanSmall: "_1gx9nSc0SPQ9vmu6agjYl1",
				circleFaqYellowSmall: "_27wsbpO92APe7Nx2gqtF3O",
				circleFaqCyanBig: "_2P_VDzA8HhCIY8OVNJyUFx",
				circleFaqOrange: "_2pZa4VdYPPxEiDZG6Uw4Np",
				circleFaqYellowHollow: "_2r9-_jTCcEXIPMCokd0pGz",
				faqQuestionMark: "_3L6OKsNts2VrGVhkGZc4Wr",
				faqQuestionMarkTopLeft: "_3gY99knbNx7OcqOcfEJ2C6",
				faqQuestionMarkTopRight: "_3m9Cti_f4SYxMJNW2R5xIM",
				faqQuestionMarkLeft: "_34VQEfji42SpnmVXdTGLJA",
				faqQuestionMarkBottomRight: "_1Q0iQQnesHKoX398Xiw3kN",
				circleFaqYellowWithBolt: "_3BPWG5PqFn4DI2osSkAxvK",
				boltInCircleFaqYellow: "_2taFb8NS_KeC523kHSIj_i",
				faqQuestionMarkWithBolt: "_3xet1Sbc6baqNEbgRNs3il",
				faqHeading: "_2rgbJ2uCJrqPWAl9PE5G-9",
				faqs: "_2bP1iHgOFrtA_3AK9RRT36",
				faqMoreQuestionsHeading: "ttDZSbQIXUGMeea-vo2hp",
				fullFaqsButton: "_2XtfRS9mnRStbRWQaYUcCP",
				faqTryOutHeading: "_3k8SqLlh0ukFnY9V8FwM3R",
				faqTryOutSubheading: "_3PesDeGd65rVhZz2neXjlF",
				ctaLetsDoThisButton: "_16zoFIrRalpDu0fjqJ65Xm",
				ctaButtonCirlcesAndBolt: "_3ujrWiVyDncBqumPvAttzk",
				circleFaqCtaStriped: "_3Ep0mXOVeFCAEUPNiqMTHk",
				circleFaqCtaYellowBig: "_2XXZXCJGJnUh8IZjYnGdhw",
				boltInCircleFaqCtaYellow: "_2QKl-Y6l1LDaYfROn1chi6",
				circleFaqCtaCyanHollow: "_1hu7wVhww6y-rSj9PuoeEr"
			}
		},
		"./src/reddit/pages/Powerups/PerksSection.m.less": function(e, a, t) {
			e.exports = {
				perksSection: "_3xuSQMWvGF1ioIFvw3OAPd",
				isNightmodeOn: "_1JMb2sjd5kjeOrJWkUT1dn",
				perksSectionBoltImage: "_2ElCVOYaFqbLESDkOj_Fqu",
				perksSectionTitle: "_1vMIaTe8VQd0PNnJMGmCa2",
				perksSectionGrid: "_14u-ZHx0iISNWy4F3ArrLn",
				perkCell: "_3_bBYXgN2MJy8QV6ZZyOQo",
				perkImageBackgroundCircle: "_3w_NEcT61xX_hmra2rPY1T",
				perkImage: "_1fVJ47XpFkmBk6kcPLj5ZP",
				perkTitle: "_23PAj_ll6XMhH7f8bFiE6T",
				perkDescription: "_1LiW2pFhXLXoYHN8Sbedzg"
			}
		},
		"./src/reddit/pages/Powerups/index.m.less": function(e, a, t) {
			e.exports = {
				contentWrapper: "_2R6i6j_xoX2x5EKFAQMYU7",
				circle: "_1TvCFkzk-ajL6WvX-MoueU",
				animatedCircle: "_39m5MLXkVR-MhOWmz5ROl5",
				animateTransformX: "_3P3w3AfWeRp7T4EPhPUvmH",
				bodyText: "_2FWf39V9O9bIdx86VyTLF2",
				headingSection: "_23_Ow8luA15sc4g2vUGqww",
				circleOrangeFull: "_3qq5WIoCkksegldcrrNPw0",
				circleOrangeHollow: "_2HLB20xcux-8DBYl0vHSDI",
				circleYellowSmall: "_22dshpdH0Ly8n6l4FboD59",
				top: "_34hoXqZzopGHUv4Rv6Oxjt",
				bottom: "KGG7keObUEMEVhC5m8x7A",
				circleYellowBig: "ZDBOZt2XcmGEyefhU9U8s",
				circleYellowHollow: "hcOrcUEh5GFQbdyLS6Q6m",
				circleDotted: "_1rFZb05EJLSJzDZmkf398N",
				circleStriped: "vWQWxIJ-Qq7wA5UUJwc-X",
				background: "AcXhBU8kMR2LwPZx7Mj3w",
				diagonalLayoutPrimary: "L9B1_iarAR4qUTFNbqAw7",
				diagonalLayoutSecondary: "_2YaYbB9n2Y7GVRVXgspHga",
				headingContent: "KKIk5tC7vdU5bSFZiq4wT",
				headingArt: "_10FYcfyS7aMPS1WaV8fgA-",
				headingText: "rT3nmBzh3aktvoCPVp8Rl",
				powerupsMarketingImageContainer: "v1VhjMFWp37LMbeZ9EhHZ",
				powerupsMarketingImage: "_2fhpicvjBRUQh2FrmS145-",
				fallbackStaticImage: "_20svk_IXXvk6YtibBOeP7m",
				heading: "_1KZo5pqbPxIDnKlhUQ1iCV",
				isNightmodeOn: "_1AMPSEEofXw60FMrbdtq5e",
				snoo: "yX-s6dxc0xlmMAnHxYVzy",
				subheading: "tJ01nrUeIibPLtvHf4n1Z",
				description: "_86QWvEglWWuqLFZMfXGgG",
				modWarning: "d3Nxc9efGC2tIyFFSPD_w",
				modWarningItalic: "_1n72yu3o7zjePGJgXqTrMp",
				modWarningFooter: "_3MGHLQUzFt1vaqX_qVvilR",
				modWarningTop: "_265wuoNoe98zlt0Y3SN6I5",
				modWarningIcon: "_2tIDi1LByghlwuY5AIrRu0",
				powerupsHeadingImg: "_3YE0rPo3AxLcTHATYQY95X",
				ctaButton: "_33rTpS2jR1JFHryoTOhYpa",
				pioneerSection: "_3gonL1T02ROiGMAYnvLcrP",
				circlePioneersCyanHollow: "_2z4yxEcLqQnh9mYn7cT6VZ",
				powerupsPioneerContent: "vOTXeymnEUd4bKDADeCCW",
				pioneerHeading: "_3smmvSO29wx9Xz39UGc1mk",
				pioneerSubheading: "_2dVOGLdupS1ZrH_JnEFShD",
				powerupStepsSection: "_3vDzGx-htbtjH-at_nSjZl",
				powerupStepsSectionContent: "_3UY1DNtOZYpcG23LJ-3fsc",
				circleStepsStriped: "_1XeNisAsrOqiBVWBgYD9cD",
				circleStepsYellowFull: "xcR8so_IQTdAydDYnuRB0",
				powerupStep: "_2bqDrka228N3joKdevUUAC",
				powerupStepCounter: "_1M2TF25U4Wqv-kDpvCsnkl",
				powerupStepName: "_3_pv1hGZ6dC45xNg686Ox2",
				powerupStepDescription: "_3UCrc_RFft8q0Y0CgFeYcf",
				footer: "_3W_fhNmXtO7pxVqENULN1r",
				modalBody: "_3H2XNRlTGeYM2CgAzJwzr",
				modalOverlay: "_3c_5_fSPEeIEoDBXAVgAZ3"
			}
		},
		"./src/reddit/pages/Powerups/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./src/config.ts"),
				l = t("./node_modules/react/index.js"),
				s = t.n(l),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				i = (t("./node_modules/core-js/modules/web.dom.iterable.js"), t("./src/higherOrderComponents/asModal/index.tsx")),
				m = t("./src/reddit/actions/gold/powerups.ts"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				d = t("./src/reddit/selectors/telemetry.ts");
			var p = t("./src/reddit/hooks/useThunkDispatch.ts"),
				h = t("./src/reddit/hooks/useTracking.ts"),
				g = t("./src/reddit/icons/svgs/Close/index.tsx"),
				w = t("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = t("./src/reddit/featureFlags/subredditPoints.ts"),
				k = t("./src/reddit/selectors/moderatorPermissions.ts"),
				b = t("./src/reddit/selectors/user.ts"),
				E = t("./src/reddit/selectors/gold/powerups/index.ts");
			const v = e => {
				const a = Object(k.a)(e);
				if (!a) return null;
				const t = Object(b.H)(e),
					n = [];
				for (const l of a) {
					const a = e.subreddits.models[l];
					if (!a) return null;
					const s = Object(E.g)(e, {
						subredditId: l
					});
					_.b.has(a.name) || a.isNSFW || a.subscribers < 1e3 && !t || n.push({
						id: l,
						displayText: a.displayText,
						hasPowerups: s
					})
				}
				return n
			};
			var N = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				f = t("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				y = t.n(f);
			const {
				fbt: S
			} = t("./node_modules/fbt/lib/FbtPublic.js"), P = e => {
				const {
					onChange: a,
					subredditIdsSelected: t,
					subredditsInfo: n,
					wasSuccessful: l,
					allEnabled: r
				} = e, c = n.filter(e => !e.hasPowerups), i = n.filter(e => e.hasPowerups), m = c.length === t.length;
				return s.a.createElement("div", {
					className: y.a.container
				}, s.a.createElement("div", {
					className: y.a.checkboxList
				}, i.map(({
					id: e,
					displayText: a
				}) => s.a.createElement(N.a, {
					className: Object(o.a)(y.a.checkbox, y.a.disabled),
					key: e,
					isSelected: !0,
					onClick: () => {},
					text: a,
					disabled: !0
				})), c.map(({
					id: e,
					displayText: n
				}) => {
					const r = t.includes(e);
					return s.a.createElement(N.a, {
						className: Object(o.a)(y.a.checkbox, {
							[y.a.disabled]: l
						}),
						key: e,
						isSelected: r,
						onClick: () => ((e, n) => {
							const l = n ? [...t, e] : t.filter(a => a !== e);
							a(l)
						})(e, !r),
						text: n,
						disabled: l
					})
				})), !l && !r && s.a.createElement(u.q, {
					className: y.a.selectAllButton,
					onClick: () => {
						a(m ? [] : c.map(({
							id: e
						}) => e))
					},
					priority: u.b.Secondary,
					isFullWidth: !0
				}, m ? S._("Deselect all", null, {
					hk: "46i6br"
				}) : S._("Select all", null, {
					hk: "2Eo4n2"
				})))
			};
			var x = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = t("./src/reddit/components/PowerupsSignUpModal/signupButton.m.less"),
				O = t.n(C);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js"), I = ({
				className: e,
				disabled: a,
				onClick: t,
				isLoading: n,
				wasError: l
			}) => {
				const r = l ? j._("Try again", null, {
					hk: "1cKOSe"
				}) : j._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return s.a.createElement(u.h, {
					className: Object(o.a)(e, O.a.button, {
						[O.a.loading]: n
					}),
					disabled: a || n,
					onClick: t,
					priority: u.b.Primary,
					isFullWidth: !0
				}, n ? s.a.createElement(x.a, {
					sizePx: 12,
					center: !0
				}) : r)
			};
			var F = t("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				q = t.n(F);
			const {
				fbt: M
			} = t("./node_modules/fbt/lib/FbtPublic.js"), T = Object(i.a)(({
				closeModal: e
			}) => {
				var a;
				const t = Object(p.a)(),
					n = Object(h.a)(),
					o = Object(r.e)(v),
					c = null !== (a = 1 === (null == o ? void 0 : o.length)) && void 0 !== a && a,
					i = null == o ? void 0 : o.every(({
						hasPowerups: e
					}) => e),
					[_, k] = Object(l.useState)(o && c ? [o[0].id] : []),
					[b, E] = Object(l.useState)(!1),
					[N, f] = Object(l.useState)(!1),
					[y, S] = Object(l.useState)(!1);
				if (!(null == o ? void 0 : o.length)) return e(), null;
				const x = async e => {
					try {
						return await t(Object(m.a)(e)), {
							success: !0
						}
					} catch (a) {
						return {
							success: !1,
							error: a.message
						}
					}
				}, C = N || i ? M._("{=[r/community]}{=has Powerups}", [M._param("=[r/community]", s.a.createElement("div", null, M._("{r/community}", [M._param("r/community", o[0].displayText)], {
					hk: "1TzAG8"
				}))), M._param("=has Powerups", s.a.createElement("div", null, M._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : M._("{=Power up}{=[r/community]}", [M._param("=Power up", s.a.createElement("div", null, M._("Power up", null, {
					hk: "3qh4XT"
				}))), M._param("=[r/community]", s.a.createElement("div", null, M._("{r/community}", [M._param("r/community", o[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), O = N || i ? M._("{=Your communities}{=have Powerups}", [M._param("=Your communities", s.a.createElement("div", null, M._("Your communities", null, {
					hk: "3ySkxw"
				}))), M._param("=have Powerups", s.a.createElement("div", null, M._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : M._("{=Power up}{=your communities}", [M._param("=Power up", s.a.createElement("div", null, M._("Power up", null, {
					hk: "Jrn2T"
				}))), M._param("=your communities", s.a.createElement("div", null, M._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), j = c ? C : O, F = b || N || y ? M._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [M._param("=Hold tight! It can take up to 5 minutes for", s.a.createElement("div", null, M._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), M._param("=Powerups to appear in yourcommunity.", s.a.createElement("div", null, M._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [M._plural(o.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : M._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [M._param("=Harness the power of yourcommunity to", s.a.createElement("div", null, M._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [M._plural(o.length)], {
					hk: "2rOtDZ"
				}))), M._param("=unlock special perks and advanced features.", s.a.createElement("div", null, M._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return s.a.createElement("div", {
					className: q.a.container,
					"data-testid": "powerups-signup-modal"
				}, s.a.createElement(H, null), s.a.createElement("button", {
					className: q.a.closeButton,
					onClick: e
				}, s.a.createElement(g.a, {
					className: q.a.closeIcon
				})), s.a.createElement("div", {
					className: q.a.body
				}, s.a.createElement("div", {
					className: q.a.titleContainer
				}, s.a.createElement("h1", {
					className: q.a.titleText
				}, j), s.a.createElement("h2", {
					className: q.a.subtitleText
				}, F)), !c && s.a.createElement(P, {
					onChange: k,
					subredditIdsSelected: _,
					subredditsInfo: o,
					wasSuccessful: N,
					allEnabled: i
				}), y && s.a.createElement("div", {
					className: q.a.errorContainer
				}, s.a.createElement(w.a, {
					className: q.a.errorIcon
				}), s.a.createElement("span", {
					className: q.a.errorText
				}, M._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !N && !i && s.a.createElement(I, {
					disabled: 0 === _.length,
					onClick: async () => {
						n((e => a => ({
							...d.defaults(a),
							source: "powerups_signup_form",
							action: "click",
							noun: "turn_on_powerups",
							powerups: {
								subredditIds: e.join(",")
							}
						}))(_)), E(!0);
						const e = (await Promise.all(_.map(x))).every(({
							success: e
						}) => e);
						f(e), S(!e), E(!1)
					},
					isLoading: b,
					wasError: y
				}), (N || i) && c && s.a.createElement(s.a.Fragment, null, s.a.createElement("p", {
					className: q.a.successText
				}, M._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), s.a.createElement(u.q, {
					className: q.a.successButton,
					to: `/${o[0].displayText}/submit`,
					kind: u.a.InternalLink,
					priority: u.b.Primary,
					isFullWidth: !0
				}, M._("Spread the word", null, {
					hk: "1f68Nj"
				}))), s.a.createElement("footer", {
					className: q.a.footer
				}, M._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))))
			}), H = () => s.a.createElement("div", {
				className: q.a.background
			}, s.a.createElement("div", {
				className: q.a.diagonalLayoutSecondary
			}), s.a.createElement("div", {
				className: q.a.diagonalLayoutPrimary
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.lineCircle),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
				}
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleOrangeHollow)
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.dotCircle1),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleGreenFilled)
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleGreenHollow)
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleYellowHollow)
			}), s.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.dotCircle2),
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: q.a.headerImageContainer
			}, s.a.createElement("img", {
				className: q.a.headerImage,
				alt: "Powerup heroes",
				src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
			})));
			var W = t("./src/reddit/icons/fonts/index.tsx"),
				B = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				A = t("./node_modules/lodash/sampleSize.js"),
				Y = t.n(A),
				L = t("./node_modules/react-router-dom/esm/react-router-dom.js"),
				D = t("./src/lib/opener/index.ts"),
				U = t("./src/reddit/hooks/useIsClient.ts"),
				Q = t("./src/reddit/pages/Powerups/Communities.m.less"),
				G = t.n(Q);
			const z = Y()(["wallstreetbets", "pennystocks", "tiktokcringe", "lgbt", "python", "unexpected", "chloe", "pewdiepiesubmissions", "roastme", "jacksepticeye", "thebachelor", "taylorswift", "bigbrother", "belowdeck", "blackpink"], 3),
				R = () => {
					const e = Object(h.a)(),
						a = Object(r.e)(b.X),
						t = Object(U.a)(),
						l = () => {
							e((() => e => ({
								...d.defaults(e),
								source: "powerups_landing_page",
								action: "click",
								noun: "community"
							}))())
						};
					return t ? s.a.createElement("section", {
						className: Object(o.a)(G.a.communitiesContainer, {
							[G.a.isNightMode]: a
						})
					}, s.a.createElement("div", {
						className: G.a.communitiesContent
					}, z.map(e => s.a.createElement(L.a, {
						className: G.a.community,
						key: e,
						to: `r/${e}`,
						target: D.c.BLANK,
						rel: D.b,
						onClick: l
					}, s.a.createElement("div", {
						className: G.a.communityIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/powerups/communities-placeholder.png)`
						}
					}), s.a.createElement("div", {
						className: G.a.communityName
					}, "r/", e))))) : null
				};
			var X = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				V = t("./src/reddit/pages/Powerups/FaqSection.m.less"),
				J = t.n(V);
			const {
				fbt: Z
			} = t("./node_modules/fbt/lib/FbtPublic.js"), K = [{
				prompt: () => Z._("How will my community know when Powerups are enabled?", null, {
					hk: "Q0fGk"
				}),
				answer: function() {
					return Z._("When Powerups are enabled, a dedicated Powerups tab (on mobile) or a module in the right side menu (on web) will be added to your community where your members will see information about Powerups. They can learn about what features Powerups unlock (such as GIFs, emojis, and achievements) and how Powerups work. Some communities have used an announcement or sticky post about enabling the feature where they told members what perks they could unlock. We recommend doing the same.", null, {
						hk: "1jO63"
					})
				}
			}, {
				prompt: () => Z._("What kind of moderator tools and permissions do Powerups have?", null, {
					hk: "3Rrxks"
				}),
				answer: function() {
					return s.a.createElement(s.a.Fragment, null, Z._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), s.a.createElement("br", null), s.a.createElement("br", null), Z._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), s.a.createElement("ul", null, s.a.createElement("li", null, "• ", Z._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), s.a.createElement("li", null, "• ", Z._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), s.a.createElement("li", null, "• ", Z._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), s.a.createElement("li", null, "• ", Z._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => Z._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return s.a.createElement(s.a.Fragment, null, Z._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), s.a.createElement("br", null), s.a.createElement("br", null), Z._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
						hk: "3JSZJc"
					}))
				}
			}, {
				prompt: () => Z._("Which communities can enable Powerups?", null, {
					hk: "4zVdMW"
				}),
				answer: function() {
					return Z._("Safe for Work (SFW) communities with 1,000 members or more can enable Powerups and join the open beta. Also, if you’re a community that already has Special Memberships enabled, Powerups won’t work for you.", null, {
						hk: "12qOw5"
					})
				}
			}, {
				prompt: () => Z._("Can I disable Powerups after I’ve turned them on for my community?", null, {
					hk: "2SpQyV"
				}),
				answer: function() {
					return Z._("No, because subscriptions from your community members help unlock Powerup perks, moderators can’t disable the feature. So before you enable Powerups, be absolutely sure it’s right for you and your community.", null, {
						hk: "4zJrwH"
					})
				}
			}, {
				prompt: () => Z._("Can I get a preview of Powerups?", null, {
					hk: "cTFsH"
				}),
				answer: function() {
					return Z._("Not in your community, but if you’d like to see Powerups in action, check out some of the communities that have successfully powered up such as r/thebachelor, r/tiktokcringe, and r/python.", null, {
						hk: "2u4guo"
					})
				}
			}], $ = ({
				openModal: e,
				modSubredditsInfo: a
			}) => s.a.createElement("div", {
				className: J.a.faqSection
			}, s.a.createElement("div", {
				className: Object(o.a)(J.a.faqSectionContent, J.a.contentWrapper)
			}, s.a.createElement(ee, null), s.a.createElement(ae, null), s.a.createElement(te, null), s.a.createElement("h2", {
				className: J.a.faqHeading
			}, Z._("Questions about Powerups", null, {
				hk: "nzxYw"
			})), s.a.createElement("div", {
				className: J.a.faqs
			}, K.map(({
				prompt: e,
				answer: a
			}, t) => s.a.createElement(X.a, {
				defaultClosed: !0,
				question: e(),
				key: t
			}, a()))), s.a.createElement("h3", {
				className: J.a.faqMoreQuestionsHeading
			}, Z._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), s.a.createElement(u.q, {
				className: J.a.fullFaqsButton,
				priority: u.b.Secondary,
				href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
				kind: u.a.ExternalLink,
				target: "_blank"
			}, Z._("View Full FAQs", null, {
				hk: "1eOLlL"
			})), s.a.createElement("h2", {
				className: J.a.faqTryOutHeading
			}, Z._("Try out Powerups today", null, {
				hk: "17RjMt"
			})), s.a.createElement("h3", {
				className: J.a.faqTryOutSubheading
			}, Z._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
				hk: "3062Vv"
			})), s.a.createElement(u.h, {
				onClick: e,
				disabled: !(null == a ? void 0 : a.length),
				priority: u.b.Primary,
				className: J.a.ctaLetsDoThisButton
			}, Z._("Let's Do This!", null, {
				hk: "6CnFH"
			})), s.a.createElement(ne, null))), ee = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(o.a)(J.a.faqQuestionMark, J.a.faqQuestionMarkWithBolt)
			}), s.a.createElement("div", {
				className: J.a.circleFaqYellowWithBolt
			}, s.a.createElement("img", {
				alt: "Powerup bolt",
				className: J.a.boltInCircleFaqYellow,
				src: `${n.a.assetPath}/img/powerups/bolt.png`
			}))), ae = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: J.a.circleFaqCyanSmall
			}), s.a.createElement("div", {
				className: J.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: J.a.circleFaqYellowSmall
			}), s.a.createElement("div", {
				className: J.a.circleFaqCyanBig
			}), s.a.createElement("div", {
				className: J.a.circleFaqOrange
			}), s.a.createElement("div", {
				className: J.a.circleFaqYellowHollow
			})), te = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(o.a)(J.a.faqQuestionMark, J.a.faqQuestionMarkTopLeft)
			}), s.a.createElement("div", {
				className: Object(o.a)(J.a.faqQuestionMark, J.a.faqQuestionMarkTopRight)
			}), s.a.createElement("div", {
				className: Object(o.a)(J.a.faqQuestionMark, J.a.faqQuestionMarkLeft)
			}), s.a.createElement("div", {
				className: Object(o.a)(J.a.faqQuestionMark, J.a.faqQuestionMarkBottomRight)
			})), ne = () => {
				const e = Object(r.e)(b.X);
				return s.a.createElement("div", {
					className: J.a.ctaButtonCirlcesAndBolt
				}, s.a.createElement("div", {
					className: J.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: J.a.circleFaqCtaYellowBig
				}, s.a.createElement("img", {
					alt: "Powerup bolt",
					className: J.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), s.a.createElement("div", {
					className: J.a.circleFaqCtaCyanHollow
				}))
			};
			var le = t("./src/reddit/pages/Powerups/PerksSection.m.less"),
				se = t.n(le);
			const {
				fbt: re
			} = t("./node_modules/fbt/lib/FbtPublic.js"), oe = [{
				title: "Achievements",
				description: "Recognize members' contributions and skills.",
				imageName: "ACHIEVEMENT_FLAIRS_v3"
			}, {
				title: "Gifs in Comments",
				description: "When simple words won't do, let members use GIFs too.",
				imageName: "COMMENTS_WITH_GIFS_v3"
			}, {
				title: "Custom Emojis",
				description: "Create and use emojis exclusive to your community.",
				imageName: "CUSTOM_EMOJIS_v3"
			}, {
				title: "HD Video",
				description: "Upload and watch in greater resolution.",
				imageName: "HD_VIDEO_v3"
			}, {
				title: "Hero Status",
				description: "Reward members who give back to the community with hero badges and instant access to perks.",
				imageName: "HERO_STATUS_v3"
			}], ce = ({
				title: e,
				description: a,
				imageName: t
			}) => s.a.createElement("div", {
				className: se.a.perkCell
			}, s.a.createElement("div", {
				className: se.a.perkImageBackgroundCircle
			}, s.a.createElement("img", {
				alt: `Powerups perk ${e}`,
				className: se.a.perkImage,
				src: `${n.a.assetPath}/img/powerups/${t}.png`
			})), s.a.createElement("h3", {
				className: se.a.perkTitle
			}, re._("{perkName}", [re._param("perkName", e)], {
				hk: "qThF1"
			})), s.a.createElement("h4", {
				className: se.a.perkDescription
			}, re._("{perkDescription}", [re._param("perkDescription", a)], {
				hk: "2Uanfp"
			}))), ie = () => {
				const e = Object(r.e)(b.X);
				return s.a.createElement("div", {
					className: Object(o.a)(se.a.perksSection, {
						[se.a.isNightmodeOn]: e
					})
				}, s.a.createElement("img", {
					alt: "Powerups Bolt",
					className: se.a.perksSectionBoltImage,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				}), s.a.createElement("h2", {
					className: se.a.perksSectionTitle
				}, re._("Let's check out those perks!", null, {
					hk: "jugDp"
				})), s.a.createElement("div", {
					className: Object(o.a)(se.a.perksSectionGrid, se.a.contentWrapper)
				}, oe.map(({
					title: e,
					description: a,
					imageName: t
				}) => s.a.createElement(ce, {
					key: e,
					title: e,
					description: a,
					imageName: t
				}))))
			};
			var me = t("./src/reddit/pages/Powerups/index.m.less"),
				ue = t.n(me);
			const {
				fbt: de
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(h.a)(),
					a = Object(r.e)(v),
					t = Object(r.e)(b.X),
					[i, m] = Object(l.useState)(!1);
				Object(l.useEffect)(() => {
					e((() => e => ({
						...d.defaults(e),
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: {
							pageType: "powerups_landing_page"
						}
					}))())
				}, [e]);
				const p = () => {
						e((() => e => ({
							...d.defaults(e),
							source: "powerups_landing_page",
							action: "click",
							noun: "open_signup_modal"
						}))()), m(!0)
					},
					g = () => m(!1);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: ue.a.headingSection
				}, s.a.createElement("div", {
					className: Object(o.a)(ue.a.background, ue.a.contentWrapper)
				}, s.a.createElement("div", {
					className: ue.a.diagonalLayoutSecondary
				}), s.a.createElement("div", {
					className: ue.a.diagonalLayoutPrimary
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleDotted),
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.animatedCircle, ue.a.circleStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleOrangeFull, ue.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleYellowSmall, ue.a.top, ue.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleYellowBig, ue.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleYellowHollow, ue.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleYellowSmall, ue.a.bottom, ue.a.animatedCircle)
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleOrangeHollow, ue.a.animatedCircle)
				})), s.a.createElement("div", {
					className: Object(o.a)(ue.a.contentWrapper, ue.a.headingContent)
				}, s.a.createElement("div", {
					className: ue.a.headingText
				}, s.a.createElement("h1", {
					className: Object(o.a)(ue.a.heading, {
						[ue.a.isNightmodeOn]: t
					})
				}, s.a.createElement(B.a, {
					className: ue.a.snoo
				}), "Powerups"), s.a.createElement("h2", {
					className: ue.a.subheading
				}, de._("Come together to level up the whole community", null, {
					hk: "3C0qLA"
				})), s.a.createElement("p", {
					className: Object(o.a)(ue.a.description, ue.a.bodyText)
				}, de._("Harness the power of your community to unlock special perks and advanced features.", null, {
					hk: "1NgNS2"
				})), s.a.createElement("div", {
					className: Object(o.a)(ue.a.modWarning, ue.a.bodyText)
				}, s.a.createElement("div", {
					className: ue.a.modWarningTop
				}, s.a.createElement(W.a, {
					name: "mod",
					className: ue.a.modWarningIcon
				})), de._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [de._param("=Only moderators with theManage Settings permission can turn on Powerups.", s.a.createElement("div", null, de._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [de._param("=Manage Settings", s.a.createElement("span", {
					className: ue.a.modWarningItalic
				}, de._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), de._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", s.a.createElement("div", {
					className: ue.a.modWarningFooter
				}, de._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), s.a.createElement(u.h, {
					onClick: p,
					disabled: !(null == a ? void 0 : a.length),
					priority: u.b.Primary,
					className: ue.a.ctaButton
				}, de._("Turn on Powerups", null, {
					hk: "4E97KH"
				}))), s.a.createElement("div", {
					className: ue.a.headingArt
				}, s.a.createElement("div", {
					className: ue.a.powerupsMarketingImageContainer
				}, s.a.createElement("picture", {
					className: ue.a.powerupsMarketingImage
				}, s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), s.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), s.a.createElement("img", {
					alt: "Powerup heroes",
					className: ue.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})))))), s.a.createElement(R, null), s.a.createElement("div", {
					className: ue.a.pioneerSection
				}, s.a.createElement("div", {
					className: Object(o.a)(ue.a.contentWrapper, ue.a.powerupsPioneerContent)
				}, s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circlePioneersCyanHollow)
				}), s.a.createElement("h2", {
					className: ue.a.pioneerHeading
				}, de._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), s.a.createElement("h3", {
					className: ue.a.pioneerSubheading
				}, de._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))), s.a.createElement("div", {
					className: ue.a.powerupStepsSection
				}, s.a.createElement("div", {
					className: Object(o.a)(ue.a.powerupStepsSectionContent, ue.a.contentWrapper)
				}, s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleStepsYellowFull)
				}), s.a.createElement("div", {
					className: Object(o.a)(ue.a.circle, ue.a.circleStepsStriped),
					style: {
						backgroundImage: t ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: ue.a.powerupStep
				}, s.a.createElement("div", {
					className: ue.a.powerupStepCounter
				}, "1"), s.a.createElement("div", {
					className: ue.a.powerupStepName
				}, de._("Turn on powerups", null, {
					hk: "q0dHV"
				})), s.a.createElement("div", {
					className: ue.a.powerupStepDescription
				}, de._("Just tap that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "oZMHo"
				}))), s.a.createElement("div", {
					className: ue.a.powerupStep
				}, s.a.createElement("div", {
					className: ue.a.powerupStepCounter
				}, "2"), s.a.createElement("div", {
					className: ue.a.powerupStepName
				}, de._("Rally the community", null, {
					hk: "4m8BDG"
				})), s.a.createElement("div", {
					className: ue.a.powerupStepDescription
				}, de._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}))), s.a.createElement("div", {
					className: ue.a.powerupStep
				}, s.a.createElement("div", {
					className: ue.a.powerupStepCounter
				}, "3"), s.a.createElement("div", {
					className: ue.a.powerupStepName
				}, de._("Unlock perks", null, {
					hk: "20u0vD"
				})), s.a.createElement("div", {
					className: ue.a.powerupStepDescription
				}, de._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))), s.a.createElement(ie, null), s.a.createElement($, {
					openModal: p,
					modSubredditsInfo: a
				}), s.a.createElement(c.a, {
					className: ue.a.footer
				}), i && s.a.createElement(T, {
					withOverlay: !0,
					closeModal: g,
					onOverlayClick: g,
					className: ue.a.modalBody,
					overlayClassName: ue.a.modalOverlay
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Powerups.11fef34a57179bebfcb7.js.map