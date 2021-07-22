// https://www.redditstatic.com/desktop2x/Powerups.b06b02761f6972aa7d00.js
// Retrieved at 7/22/2021, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Powerups"], {
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
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				i = t("./src/reddit/icons/svgs/ChevronUp/index.tsx");
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
						className: Object(o.a)(e, s.a.collapsibleFAQ)
					}, n.a.createElement("button", {
						className: s.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, n.a.createElement("span", {
						className: s.a.buttonContent,
						tabIndex: -1
					}, a, l ? n.a.createElement(i.a, {
						className: s.a.collapseIcon
					}) : n.a.createElement(c.a, {
						className: s.a.collapseIcon
					}))), n.a.createElement("div", {
						className: Object(o.a)(s.a.collapsibleAnswer, r)
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
				o = t("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: Object(o.a)(e.className, s.a.marketingPageFooter)
			}, n.a.createElement("div", {
				className: Object(o.a)(e.className, s.a.marketingPageFooterInner)
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
				className: Object(o.a)(s.a.linkCol, s.a.linkBoldCol)
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
			}))), n.a.createElement("li", {
				className: s.a.linkItem
			}, n.a.createElement("a", {
				className: s.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), n.a.createElement("div", {
				className: Object(o.a)(s.a.linkCol, s.a.linkBoldCol)
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
			var l = t("./node_modules/react/index.js"),
				n = t.n(l),
				r = t("./src/lib/classNames/index.ts"),
				s = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = t.n(s);
			a.a = ({
				center: e,
				className: a,
				sizePx: t = 10
			}) => n.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, a, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${t}px`
				}
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			var l = t("./node_modules/react-redux/es/index.js");

			function n() {
				return Object(l.d)()
			}
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
				circlePioneersYellowFull: "_3l9V-gimktuoaY23BsoQbj",
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
			var l = t("./src/config.ts"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
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
				k = t("./src/reddit/featureFlags/subredditPoints.ts"),
				_ = t("./src/reddit/selectors/moderatorPermissions.ts"),
				b = t("./src/reddit/selectors/user.ts"),
				E = t("./src/reddit/selectors/gold/powerups/index.ts");
			const N = e => {
				const a = Object(_.a)(e);
				if (!a) return null;
				const t = Object(b.G)(e),
					l = [];
				for (const n of a) {
					const a = e.subreddits.models[n];
					if (!a) return null;
					const r = Object(E.f)(e, {
						subredditId: n
					});
					k.b.has(a.name) || a.isNSFW || a.subscribers < 1e3 && !t || l.push({
						id: n,
						displayText: a.displayText,
						hasPowerups: r
					})
				}
				return l
			};
			var v = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				y = t("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				f = t.n(y);
			const {
				fbt: P
			} = t("./node_modules/fbt/lib/FbtPublic.js"), S = e => {
				const {
					onChange: a,
					subredditIdsSelected: t,
					subredditsInfo: l,
					wasSuccessful: n,
					allEnabled: s
				} = e, c = l.filter(e => !e.hasPowerups), i = l.filter(e => e.hasPowerups), m = c.length === t.length;
				return r.a.createElement("div", {
					className: f.a.container
				}, r.a.createElement("div", {
					className: f.a.checkboxList
				}, i.map(({
					id: e,
					displayText: a
				}) => r.a.createElement(v.a, {
					className: Object(o.a)(f.a.checkbox, f.a.disabled),
					key: e,
					isSelected: !0,
					onClick: () => {},
					text: a,
					disabled: !0
				})), c.map(({
					id: e,
					displayText: l
				}) => {
					const s = t.includes(e);
					return r.a.createElement(v.a, {
						className: Object(o.a)(f.a.checkbox, {
							[f.a.disabled]: n
						}),
						key: e,
						isSelected: s,
						onClick: () => ((e, l) => {
							const n = l ? [...t, e] : t.filter(a => a !== e);
							a(n)
						})(e, !s),
						text: l,
						disabled: n
					})
				})), !n && !s && r.a.createElement(u.q, {
					className: f.a.selectAllButton,
					onClick: () => {
						a(m ? [] : c.map(({
							id: e
						}) => e))
					},
					priority: u.b.Secondary,
					isFullWidth: !0
				}, m ? P._("Deselect all", null, {
					hk: "46i6br"
				}) : P._("Select all", null, {
					hk: "2Eo4n2"
				})))
			};
			var x = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = t("./src/reddit/components/PowerupsSignUpModal/signupButton.m.less"),
				O = t.n(C);
			const {
				fbt: F
			} = t("./node_modules/fbt/lib/FbtPublic.js"), I = ({
				className: e,
				disabled: a,
				onClick: t,
				isLoading: l,
				wasError: n
			}) => {
				const s = n ? F._("Try again", null, {
					hk: "1cKOSe"
				}) : F._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return r.a.createElement(u.h, {
					className: Object(o.a)(e, O.a.button, {
						[O.a.loading]: l
					}),
					disabled: a || l,
					onClick: t,
					priority: u.b.Primary,
					isFullWidth: !0
				}, l ? r.a.createElement(x.a, {
					sizePx: 12,
					center: !0
				}) : s)
			};
			var j = t("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				q = t.n(j);
			const {
				fbt: M
			} = t("./node_modules/fbt/lib/FbtPublic.js"), T = Object(i.a)(({
				closeModal: e
			}) => {
				var a;
				const t = Object(p.a)(),
					l = Object(h.a)(),
					o = Object(s.e)(N),
					c = null !== (a = 1 === (null == o ? void 0 : o.length)) && void 0 !== a && a,
					i = null == o ? void 0 : o.every(({
						hasPowerups: e
					}) => e),
					[k, _] = Object(n.useState)(o && c ? [o[0].id] : []),
					[b, E] = Object(n.useState)(!1),
					[v, y] = Object(n.useState)(!1),
					[f, P] = Object(n.useState)(!1);
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
				}, C = v || i ? M._("{=[r/community]}{=has Powerups}", [M._param("=[r/community]", r.a.createElement("div", null, M._("{r/community}", [M._param("r/community", o[0].displayText)], {
					hk: "1TzAG8"
				}))), M._param("=has Powerups", r.a.createElement("div", null, M._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : M._("{=Power up}{=[r/community]}", [M._param("=Power up", r.a.createElement("div", null, M._("Power up", null, {
					hk: "3qh4XT"
				}))), M._param("=[r/community]", r.a.createElement("div", null, M._("{r/community}", [M._param("r/community", o[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), O = v || i ? M._("{=Your communities}{=have Powerups}", [M._param("=Your communities", r.a.createElement("div", null, M._("Your communities", null, {
					hk: "3ySkxw"
				}))), M._param("=have Powerups", r.a.createElement("div", null, M._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : M._("{=Power up}{=your communities}", [M._param("=Power up", r.a.createElement("div", null, M._("Power up", null, {
					hk: "Jrn2T"
				}))), M._param("=your communities", r.a.createElement("div", null, M._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), F = c ? C : O, j = b || v || f ? M._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [M._param("=Hold tight! It can take up to 5 minutes for", r.a.createElement("div", null, M._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), M._param("=Powerups to appear in yourcommunity.", r.a.createElement("div", null, M._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [M._plural(o.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : M._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [M._param("=Harness the power of yourcommunity to", r.a.createElement("div", null, M._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [M._plural(o.length)], {
					hk: "2rOtDZ"
				}))), M._param("=unlock special perks and advanced features.", r.a.createElement("div", null, M._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return r.a.createElement("div", {
					className: q.a.container,
					"data-testid": "powerups-signup-modal"
				}, r.a.createElement(H, null), r.a.createElement("button", {
					className: q.a.closeButton,
					onClick: e
				}, r.a.createElement(g.a, {
					className: q.a.closeIcon
				})), r.a.createElement("div", {
					className: q.a.body
				}, r.a.createElement("div", {
					className: q.a.titleContainer
				}, r.a.createElement("h1", {
					className: q.a.titleText
				}, F), r.a.createElement("h2", {
					className: q.a.subtitleText
				}, j)), !c && r.a.createElement(S, {
					onChange: _,
					subredditIdsSelected: k,
					subredditsInfo: o,
					wasSuccessful: v,
					allEnabled: i
				}), f && r.a.createElement("div", {
					className: q.a.errorContainer
				}, r.a.createElement(w.a, {
					className: q.a.errorIcon
				}), r.a.createElement("span", {
					className: q.a.errorText
				}, M._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !v && !i && r.a.createElement(I, {
					disabled: 0 === k.length,
					onClick: async () => {
						l((e => a => ({
							...d.defaults(a),
							source: "powerups_signup_form",
							action: "click",
							noun: "turn_on_powerups",
							powerups: {
								subredditIds: e.join(",")
							}
						}))(k)), E(!0);
						const e = (await Promise.all(k.map(x))).every(({
							success: e
						}) => e);
						y(e), P(!e), E(!1)
					},
					isLoading: b,
					wasError: f
				}), (v || i) && c && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: q.a.successText
				}, M._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), r.a.createElement(u.q, {
					className: q.a.successButton,
					to: `/${o[0].displayText}/submit`,
					kind: u.a.InternalLink,
					priority: u.b.Primary,
					isFullWidth: !0
				}, M._("Spread the word", null, {
					hk: "1f68Nj"
				}))), r.a.createElement("footer", {
					className: q.a.footer
				}, M._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))))
			}), H = () => r.a.createElement("div", {
				className: q.a.background
			}, r.a.createElement("div", {
				className: q.a.diagonalLayoutSecondary
			}), r.a.createElement("div", {
				className: q.a.diagonalLayoutPrimary
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.lineCircle),
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/powerups/linecircle.png)`
				}
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleOrangeHollow)
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.dotCircle1),
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleGreenFilled)
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleGreenHollow)
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.circleYellowHollow)
			}), r.a.createElement("div", {
				className: Object(o.a)(q.a.circle, q.a.dotCircle2),
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: q.a.headerImageContainer
			}, r.a.createElement("img", {
				className: q.a.headerImage,
				alt: "Powerup heroes",
				src: `${l.a.assetPath}/img/powerups/powerups-rangers-static.png`
			})));
			var W = t("./src/reddit/icons/fonts/index.tsx"),
				B = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Y = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				A = t("./src/reddit/pages/Powerups/FaqSection.m.less"),
				L = t.n(A);
			const {
				fbt: D
			} = t("./node_modules/fbt/lib/FbtPublic.js"), U = [{
				prompt: () => D._("How will my community know when Powerups are enabled?", null, {
					hk: "Q0fGk"
				}),
				answer: function() {
					return D._("When Powerups are enabled, a dedicated Powerups tab (on mobile) or a module in the right side menu (on web) will be added to your community where your members will see information about Powerups. They can learn about what features Powerups unlock (such as GIFs, emojis, and achievements) and how Powerups work. Some communities have used an announcement or sticky post about enabling the feature where they told members what perks they could unlock. We recommend doing the same.", null, {
						hk: "1jO63"
					})
				}
			}, {
				prompt: () => D._("What kind of moderator tools and permissions do Powerups have?", null, {
					hk: "3Rrxks"
				}),
				answer: function() {
					return r.a.createElement(r.a.Fragment, null, D._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), r.a.createElement("br", null), r.a.createElement("br", null), D._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), r.a.createElement("ul", null, r.a.createElement("li", null, "• ", D._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), r.a.createElement("li", null, "• ", D._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), r.a.createElement("li", null, "• ", D._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), r.a.createElement("li", null, "• ", D._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => D._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return r.a.createElement(r.a.Fragment, null, D._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), r.a.createElement("br", null), r.a.createElement("br", null), D._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
						hk: "3JSZJc"
					}))
				}
			}, {
				prompt: () => D._("Which communities can enable Powerups?", null, {
					hk: "4zVdMW"
				}),
				answer: function() {
					return D._("Safe for Work (SFW) communities with 1,000 members or more can enable Powerups and join the open beta. Also, if you’re a community that already has Special Memberships enabled, Powerups won’t work for you.", null, {
						hk: "12qOw5"
					})
				}
			}, {
				prompt: () => D._("Can I disable Powerups after I’ve turned them on for my community?", null, {
					hk: "2SpQyV"
				}),
				answer: function() {
					return D._("No, because subscriptions from your community members help unlock Powerup perks, moderators can’t disable the feature. So before you enable Powerups, be absolutely sure it’s right for you and your community.", null, {
						hk: "4zJrwH"
					})
				}
			}, {
				prompt: () => D._("Can I get a preview of Powerups?", null, {
					hk: "cTFsH"
				}),
				answer: function() {
					return D._("Not in your community, but if you’d like to see Powerups in action, check out some of the communities that have successfully powered up such as r/thebachelor, r/tiktokcringe, and r/python.", null, {
						hk: "2u4guo"
					})
				}
			}], G = ({
				openModal: e,
				modSubredditsInfo: a
			}) => r.a.createElement("div", {
				className: L.a.faqSection
			}, r.a.createElement("div", {
				className: Object(o.a)(L.a.faqSectionContent, L.a.contentWrapper)
			}, r.a.createElement(Q, null), r.a.createElement(R, null), r.a.createElement(z, null), r.a.createElement("h2", {
				className: L.a.faqHeading
			}, D._("Questions about Powerups", null, {
				hk: "nzxYw"
			})), r.a.createElement("div", {
				className: L.a.faqs
			}, U.map(({
				prompt: e,
				answer: a
			}, t) => r.a.createElement(Y.a, {
				defaultClosed: !0,
				question: e(),
				key: t
			}, a()))), r.a.createElement("h3", {
				className: L.a.faqMoreQuestionsHeading
			}, D._("Have more questions? We've got answers.", null, {
				hk: "3Entyj"
			})), r.a.createElement(u.q, {
				className: L.a.fullFaqsButton,
				priority: u.b.Secondary,
				href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
				kind: u.a.ExternalLink,
				target: "_blank"
			}, D._("View Full FAQs", null, {
				hk: "1eOLlL"
			})), r.a.createElement("h2", {
				className: L.a.faqTryOutHeading
			}, D._("Try out Powerups today", null, {
				hk: "17RjMt"
			})), r.a.createElement("h3", {
				className: L.a.faqTryOutSubheading
			}, D._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
				hk: "3062Vv"
			})), r.a.createElement(u.h, {
				onClick: e,
				disabled: !(null == a ? void 0 : a.length),
				priority: u.b.Primary,
				className: L.a.ctaLetsDoThisButton
			}, D._("Let's Do This!", null, {
				hk: "6CnFH"
			})), r.a.createElement(X, null))), Q = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(o.a)(L.a.faqQuestionMark, L.a.faqQuestionMarkWithBolt)
			}), r.a.createElement("div", {
				className: L.a.circleFaqYellowWithBolt
			}, r.a.createElement("img", {
				alt: "Powerup bolt",
				className: L.a.boltInCircleFaqYellow,
				src: `${l.a.assetPath}/img/powerups/bolt.png`
			}))), R = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: L.a.circleFaqCyanSmall
			}), r.a.createElement("div", {
				className: L.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), r.a.createElement("div", {
				className: L.a.circleFaqYellowSmall
			}), r.a.createElement("div", {
				className: L.a.circleFaqCyanBig
			}), r.a.createElement("div", {
				className: L.a.circleFaqOrange
			}), r.a.createElement("div", {
				className: L.a.circleFaqYellowHollow
			})), z = () => r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
				className: Object(o.a)(L.a.faqQuestionMark, L.a.faqQuestionMarkTopLeft)
			}), r.a.createElement("div", {
				className: Object(o.a)(L.a.faqQuestionMark, L.a.faqQuestionMarkTopRight)
			}), r.a.createElement("div", {
				className: Object(o.a)(L.a.faqQuestionMark, L.a.faqQuestionMarkLeft)
			}), r.a.createElement("div", {
				className: Object(o.a)(L.a.faqQuestionMark, L.a.faqQuestionMarkBottomRight)
			})), X = () => r.a.createElement("div", {
				className: L.a.ctaButtonCirlcesAndBolt
			}, r.a.createElement("div", {
				className: L.a.circleFaqCtaStriped,
				style: {
					backgroundImage: `url(${l.a.assetPath}/img/powerups/linecircle.png)`
				}
			}), r.a.createElement("div", {
				className: L.a.circleFaqCtaYellowBig
			}, r.a.createElement("img", {
				alt: "Powerup bolt",
				className: L.a.boltInCircleFaqCtaYellow,
				src: `${l.a.assetPath}/img/powerups/bolt.png`
			})), r.a.createElement("div", {
				className: L.a.circleFaqCtaCyanHollow
			}));
			var V = t("./src/reddit/pages/Powerups/index.m.less"),
				J = t.n(V),
				Z = t("./src/reddit/pages/Powerups/PerksSection.m.less"),
				K = t.n(Z);
			const {
				fbt: $
			} = t("./node_modules/fbt/lib/FbtPublic.js"), ee = [{
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
			}], ae = ({
				title: e,
				description: a,
				imageName: t
			}) => r.a.createElement("div", {
				className: K.a.perkCell
			}, r.a.createElement("div", {
				className: K.a.perkImageBackgroundCircle
			}, r.a.createElement("img", {
				alt: `Powerups perk ${e}`,
				className: K.a.perkImage,
				src: `${l.a.assetPath}/img/powerups/${t}.png`
			})), r.a.createElement("h3", {
				className: K.a.perkTitle
			}, $._("{perkName}", [$._param("perkName", e)], {
				hk: "qThF1"
			})), r.a.createElement("h4", {
				className: K.a.perkDescription
			}, $._("{perkDescription}", [$._param("perkDescription", a)], {
				hk: "2Uanfp"
			}))), te = () => {
				const e = !!Object(s.e)(b.V);
				return r.a.createElement("div", {
					className: Object(o.a)(K.a.perksSection, {
						[K.a.isNightmodeOn]: e
					})
				}, r.a.createElement("img", {
					alt: "Powerups Bolt",
					className: K.a.perksSectionBoltImage,
					src: `${l.a.assetPath}/img/powerups/bolt.png`
				}), r.a.createElement("h2", {
					className: K.a.perksSectionTitle
				}, $._("Let's check out those perks!", null, {
					hk: "jugDp"
				})), r.a.createElement("div", {
					className: Object(o.a)(K.a.perksSectionGrid, K.a.contentWrapper)
				}, ee.map(({
					title: e,
					description: a,
					imageName: t
				}) => r.a.createElement(ae, {
					key: e,
					title: e,
					description: a,
					imageName: t
				}))))
			}, {
				fbt: le
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.default = () => {
				const e = Object(h.a)(),
					a = Object(s.e)(N),
					[t, i] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
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
				const m = () => {
						e((() => e => ({
							...d.defaults(e),
							source: "powerups_landing_page",
							action: "click",
							noun: "open_signup_modal"
						}))()), i(!0)
					},
					p = () => i(!1);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: J.a.headingSection
				}, r.a.createElement("div", {
					className: Object(o.a)(J.a.background, J.a.contentWrapper)
				}, r.a.createElement("div", {
					className: J.a.diagonalLayoutSecondary
				}), r.a.createElement("div", {
					className: J.a.diagonalLayoutPrimary
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleDotted),
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.animatedCircle, J.a.circleStriped),
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/powerups/linecircle.png)`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleOrangeFull, J.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleYellowSmall, J.a.top, J.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleYellowBig, J.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleYellowHollow, J.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleYellowSmall, J.a.bottom, J.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleOrangeHollow, J.a.animatedCircle)
				})), r.a.createElement("div", {
					className: Object(o.a)(J.a.contentWrapper, J.a.headingContent)
				}, r.a.createElement("div", {
					className: J.a.headingText
				}, r.a.createElement("h1", {
					className: J.a.heading
				}, r.a.createElement(B.a, {
					className: J.a.snoo
				}), "Powerups"), r.a.createElement("h2", {
					className: J.a.subheading
				}, le._("Come together to level up the whole community", null, {
					hk: "3C0qLA"
				})), r.a.createElement("p", {
					className: Object(o.a)(J.a.description, J.a.bodyText)
				}, le._("Harness the power of your community to unlock special perks and advanced features.", null, {
					hk: "1NgNS2"
				})), r.a.createElement("div", {
					className: Object(o.a)(J.a.modWarning, J.a.bodyText)
				}, r.a.createElement("div", {
					className: J.a.modWarningTop
				}, r.a.createElement(W.a, {
					name: "mod",
					className: J.a.modWarningIcon
				})), le._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [le._param("=Only moderators with theManage Settings permission can turn on Powerups.", r.a.createElement("div", null, le._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [le._param("=Manage Settings", r.a.createElement("span", {
					className: J.a.modWarningItalic
				}, le._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), le._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", r.a.createElement("div", {
					className: J.a.modWarningFooter
				}, le._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), r.a.createElement(u.h, {
					onClick: m,
					disabled: !(null == a ? void 0 : a.length),
					priority: u.b.Primary,
					className: J.a.ctaButton
				}, le._("Turn on Powerups", null, {
					hk: "4E97KH"
				}))), r.a.createElement("div", {
					className: J.a.headingArt
				}, r.a.createElement("div", {
					className: J.a.powerupsMarketingImageContainer
				}, r.a.createElement("picture", {
					className: J.a.powerupsMarketingImage
				}, r.a.createElement("source", {
					srcSet: `${l.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), r.a.createElement("source", {
					srcSet: `${l.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), r.a.createElement("img", {
					alt: "Powerup heroes",
					className: J.a.fallbackStaticImage,
					src: `${l.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})))))), r.a.createElement("div", {
					className: J.a.pioneerSection
				}, r.a.createElement("div", {
					className: Object(o.a)(J.a.contentWrapper, J.a.powerupsPioneerContent)
				}, r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circlePioneersYellowFull)
				}), r.a.createElement("h2", {
					className: J.a.pioneerHeading
				}, le._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), r.a.createElement("h3", {
					className: J.a.pioneerSubheading
				}, le._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))), r.a.createElement("div", {
					className: J.a.powerupStepsSection
				}, r.a.createElement("div", {
					className: Object(o.a)(J.a.powerupStepsSectionContent, J.a.contentWrapper)
				}, r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleStepsYellowFull)
				}), r.a.createElement("div", {
					className: Object(o.a)(J.a.circle, J.a.circleStepsStriped),
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/powerups/linecircle.png)`
					}
				}), r.a.createElement("div", {
					className: J.a.powerupStep
				}, r.a.createElement("div", {
					className: J.a.powerupStepCounter
				}, "1"), r.a.createElement("div", {
					className: J.a.powerupStepName
				}, le._("Turn on powerups", null, {
					hk: "q0dHV"
				})), r.a.createElement("div", {
					className: J.a.powerupStepDescription
				}, le._("Just tap that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "oZMHo"
				}))), r.a.createElement("div", {
					className: J.a.powerupStep
				}, r.a.createElement("div", {
					className: J.a.powerupStepCounter
				}, "2"), r.a.createElement("div", {
					className: J.a.powerupStepName
				}, le._("Rally the community", null, {
					hk: "4m8BDG"
				})), r.a.createElement("div", {
					className: J.a.powerupStepDescription
				}, le._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}))), r.a.createElement("div", {
					className: J.a.powerupStep
				}, r.a.createElement("div", {
					className: J.a.powerupStepCounter
				}, "3"), r.a.createElement("div", {
					className: J.a.powerupStepName
				}, le._("Unlock perks", null, {
					hk: "20u0vD"
				})), r.a.createElement("div", {
					className: J.a.powerupStepDescription
				}, le._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))), r.a.createElement(te, null), r.a.createElement(G, {
					openModal: m,
					modSubredditsInfo: a
				}), r.a.createElement(c.a, {
					className: J.a.footer
				}), t && r.a.createElement(T, {
					withOverlay: !0,
					closeModal: p,
					onOverlayClick: p,
					className: J.a.modalBody,
					overlayClassName: J.a.modalOverlay
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Powerups.b06b02761f6972aa7d00.js.map