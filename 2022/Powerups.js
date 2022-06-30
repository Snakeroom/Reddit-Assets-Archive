// https://www.redditstatic.com/desktop2x/Powerups.e1ddb03b4f7dd0c6b0c0.js
// Retrieved at 6/30/2022, 10:00:07 AM by Reddit Dataminer v1.0.0
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
		"./node_modules/lodash/_baseSampleSize.js": function(e, a, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				l = t("./node_modules/lodash/_shuffleSelf.js"),
				s = t("./node_modules/lodash/values.js");
			e.exports = function(e, a) {
				var t = s(e);
				return l(t, n(a, 0, t.length))
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
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, a, t) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return m
			}));
			var n = t("./src/lib/classNames/index.ts"),
				l = t("./node_modules/react/index.js"),
				s = t.n(l),
				r = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				o = t("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = t.n(o);
			const {
				fbt: i
			} = t("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: a,
					highContrast: t,
					onClick: l
				} = e;
				return s.a.createElement("button", {
					onClick: l,
					className: Object(n.a)(c.a.closeButton, {
						[c.a.highContrast]: t
					}, a),
					"aria-label": i._("Close", null, {
						hk: "3Qarlp"
					})
				}, s.a.createElement(r.b, {
					className: c.a.closeIcon
				}))
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
				href: "https://www.redditinc.com/"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.redditinc.com/careers"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), l.a.createElement("li", {
				className: r.a.linkItem
			}, l.a.createElement("a", {
				className: r.a.link,
				href: "https://www.redditinc.com/press"
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
		"./src/reddit/components/PowerupsApplyToSubredditModal/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_34518MI1VDo3Wz0_Xa3Z1P",
				headerImageContainer: "_1pNTDzAv0XIYM8n74MQSZx",
				headerImage: "_1duv15GiLSc0teaTXqkqNf",
				body: "_1ZR7TpwgCz8wNeL_oebrX4",
				titleContainer: "_3rgc6zSaBdUf2eFdDqhj90",
				titleText: "_3MN__SdTbOrpk54arRlREP",
				subtitleText: "_1c9lw-Z0I-H7CuseiqDXvF",
				radioContainer: "Or4j6xxpmPEZrR6y9IWyd",
				radioOption: "_30jR2lUqq4yOfmDJPuvldx",
				ctaButton: "_2f8qc0vhWHmBjL6enjpbh",
				active: "_1f2qr208-lkmbvoXg3chJ6"
			}
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return i
			}));
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				r = t("./src/reddit/controls/Button/index.tsx"),
				o = t("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = t("./node_modules/fbt/lib/FbtPublic.js"), i = e => {
				let {
					className: a,
					onClick: t,
					disabled: n
				} = e;
				const i = Object(s.e)(o.t);
				return l.a.createElement(r.t, {
					priority: r.c.Primary,
					className: a,
					onClick: t,
					isFullWidth: !0,
					disabled: n
				}, (() => i ? c._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : c._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, a, t) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return n
			})), t.d(a, "a", (function() {
				return d
			}));
			var n, l = t("./src/config.ts"),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./node_modules/react/index.js"),
				o = t.n(r),
				c = t("./node_modules/react-redux/es/index.js"),
				i = t("./src/reddit/selectors/user.ts"),
				m = t("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = t.n(m);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(n || (n = {}));
			const d = e => {
				let {
					space: a
				} = e;
				const t = Object(c.e)(i.db),
					r = a === n.MODAL;
				return o.a.createElement("div", {
					className: Object(s.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r
					})
				}, o.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), o.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), o.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${l.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${l.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), o.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${l.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), o.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), o.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
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
				headerImageContainer: "_29KrxpIQaoPJPUxEtm4B8Q",
				headerImage: "_1ghZ6lkmdRVBj30xcXSN_I",
				body: "_2DKUhe0A1QXWcxFCdX_XKW",
				footer: "oq2jQ1_NJTwSNJW5cihhn",
				titleContainer: "_3Z_APi5dTftxEdjJSGvM9",
				titleText: "_3CvPXzsDdnIWv4x_vCmnXn",
				subtitleText: "_2fkQCeEu-WrnnBt_ySOlUC",
				errorContainer: "_3WoB_AHR25QdUcmAz-qOwT",
				errorIcon: "_1gDcc-buz_eRI3WojAJCCa",
				errorText: "_3xziQ12Hb_yVRuFJtSe3T4",
				successText: "V9PocUNQDrlJqgU42fd-V",
				successButton: "j-tk8OKGHvjv3YMR3rzqz",
				active: "_1IEgxz5Ly3km_iF_vCIzlF"
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
			a.a = e => {
				let {
					center: a,
					className: t,
					sizePx: n = 10
				} = e;
				return l.a.createElement("div", {
					className: Object(s.a)(o.a.loadingIcon, t, {
						[o.a.mCentered]: a
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return l
			}));
			var n = t("./node_modules/react/index.js");

			function l(e) {
				Object(n.useEffect)(() => {
					e()
				}, [e])
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
				ctaButtonCirclesAndBolt: "_1_yREmGPLRc5VJ_KfaTzId",
				circleFaqCtaStriped: "_3Ep0mXOVeFCAEUPNiqMTHk",
				circleFaqCtaYellowBig: "_2XXZXCJGJnUh8IZjYnGdhw",
				boltInCircleFaqCtaYellow: "_2QKl-Y6l1LDaYfROn1chi6",
				circleFaqCtaCyanHollow: "_1hu7wVhww6y-rSj9PuoeEr"
			}
		},
		"./src/reddit/pages/Powerups/FaqSection.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return b
			})), t.d(a, "a", (function() {
				return f
			}));
			var n = t("./src/config.ts"),
				l = t("./node_modules/react/index.js"),
				s = t.n(l),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				i = t("./src/reddit/controls/Button/index.tsx"),
				m = t("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				u = t("./src/reddit/selectors/user.ts"),
				d = t("./src/reddit/pages/Powerups/FaqSection.m.less"),
				p = t.n(d);
			const {
				fbt: h
			} = t("./node_modules/fbt/lib/FbtPublic.js"), g = [{
				prompt: () => h._("How will my community know when Powerups are enabled?", null, {
					hk: "Q0fGk"
				}),
				answer: function() {
					return h._("When Powerups are enabled, a dedicated Powerups tab (on mobile) or a module in the right side menu (on web) will be added to your community where your members will see information about Powerups. They can learn about what features Powerups unlock (such as GIFs, emojis, and achievements) and how Powerups work. Some communities have used an announcement or sticky post about enabling the feature where they told members what perks they could unlock. We recommend doing the same.", null, {
						hk: "1jO63"
					})
				}
			}, {
				prompt: () => h._("What kind of moderator tools and permissions do Powerups have?", null, {
					hk: "3Rrxks"
				}),
				answer: function() {
					return s.a.createElement(s.a.Fragment, null, h._("We've built Powerups with feedback from moderators and added a few different controls that let you customize how you want Powerups to work in your community.", null, {
						hk: "4beNqr"
					}), s.a.createElement("br", null), s.a.createElement("br", null), h._("Mods of communities that have Powerups enabled can:", null, {
						hk: "3JWLHJ"
					}), s.a.createElement("ul", null, s.a.createElement("li", null, "• ", h._("Access all Powerups perks", null, {
						hk: "4iqCkq"
					})), s.a.createElement("li", null, "• ", h._("Can upload up to 20 custom emoji images (.png, .jpeg, .jpg, .heic are all supported)", null, {
						hk: "150yOT"
					})), s.a.createElement("li", null, "• ", h._("Can turn off GIFs", null, {
						hk: "2ulUhF"
					})), s.a.createElement("li", null, "• ", h._("Manage video controls and permissions. So, if videos aren't allowed in your community, then HD video won't be unlocked along with the other perks", null, {
						hk: "lAGuc"
					}))))
				}
			}, {
				prompt: () => h._("What happens if my community doesn’t unlock Powerups?", null, {
					hk: "qZaeO"
				}),
				answer: function() {
					return s.a.createElement(s.a.Fragment, null, h._("To unlock Powerups perks, communities need 25 powerups. If your community doesn’t get to 25 powerups, then the perks will remain locked for the majority of the community. (But those who have contributed a powerup unlock perks for themselves right away.)", null, {
						hk: "1SvUvT"
					}), s.a.createElement("br", null), s.a.createElement("br", null), h._("However, getting to 25 is easier than you may think. All Reddit Premium members can apply the monthly powerup that comes with their subscription to your community, and members who don’t have Reddit Premium can purchase powerups on the web. (Sorry, this isn’t available on mobile yet.)", null, {
						hk: "3JSZJc"
					}))
				}
			}, {
				prompt: () => h._("Which communities can enable Powerups?", null, {
					hk: "4zVdMW"
				}),
				answer: function() {
					return h._("Safe for Work (SFW) communities with 1,000 members or more can enable Powerups and join the open beta. Also, if you’re a community that already has Special Memberships enabled, Powerups won’t work for you.", null, {
						hk: "12qOw5"
					})
				}
			}, {
				prompt: () => h._("Can I disable Powerups after I’ve turned them on for my community?", null, {
					hk: "2SpQyV"
				}),
				answer: function() {
					return h._("No, because subscriptions from your community members help unlock Powerup perks, moderators can’t disable the feature. So before you enable Powerups, be absolutely sure it’s right for you and your community.", null, {
						hk: "4zJrwH"
					})
				}
			}, {
				prompt: () => h._("Can I get a preview of Powerups?", null, {
					hk: "cTFsH"
				}),
				answer: function() {
					return h._("Not in your community, but if you’d like to see Powerups in action, check out some of the communities that have successfully powered up such as r/thebachelor, r/tiktokcringe, and r/python.", null, {
						hk: "2u4guo"
					})
				}
			}], b = e => {
				let {
					openModal: a,
					modSubredditsInfo: t
				} = e;
				return Object(r.e)(m.b) ? s.a.createElement("div", {
					className: p.a.faqSection
				}, s.a.createElement("div", {
					className: Object(o.a)(p.a.faqSectionContent, p.a.contentWrapper)
				}, s.a.createElement(w, null), s.a.createElement(_, null), s.a.createElement(k, null), s.a.createElement("h2", {
					className: p.a.faqHeading
				}, h._("Questions about Powerups", null, {
					hk: "nzxYw"
				})), s.a.createElement("div", {
					className: p.a.faqs
				}, g.map((e, a) => {
					let {
						prompt: t,
						answer: n
					} = e;
					return s.a.createElement(c.a, {
						defaultClosed: !0,
						question: t(),
						key: a
					}, n())
				})), s.a.createElement("h3", {
					className: p.a.faqMoreQuestionsHeading
				}, h._("Have more questions? We've got answers.", null, {
					hk: "3Entyj"
				})), s.a.createElement(i.t, {
					className: p.a.fullFaqsButton,
					priority: i.c.Secondary,
					href: "https://mods.reddithelp.com/hc/en-us/articles/4403699823629",
					kind: i.b.ExternalLink,
					target: "_blank"
				}, h._("View Full FAQs", null, {
					hk: "1eOLlL"
				})), s.a.createElement("h2", {
					className: p.a.faqTryOutHeading
				}, h._("Try out Powerups today", null, {
					hk: "17RjMt"
				})), s.a.createElement("h3", {
					className: p.a.faqTryOutSubheading
				}, h._("Ok, you've made it to the bottom of the page. What do you think? Are Powerups for your community?", null, {
					hk: "3062Vv"
				})), s.a.createElement(i.k, {
					onClick: a,
					disabled: !(null == t ? void 0 : t.length),
					priority: i.c.Primary,
					className: p.a.ctaLetsDoThisButton
				}, h._("Let's Do This!", null, {
					hk: "6CnFH"
				})), s.a.createElement(E, null))) : null
			}, w = e => {
				let {
					hideBolt: a
				} = e;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(o.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkWithBolt)
				}), s.a.createElement("div", {
					className: p.a.circleFaqYellowWithBolt
				}, !a && s.a.createElement("img", {
					alt: "Powerup bolt",
					className: p.a.boltInCircleFaqYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})))
			}, _ = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: p.a.circleFaqCyanSmall
			}), s.a.createElement("div", {
				className: p.a.circleFaqDotted,
				style: {
					backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
				}
			}), s.a.createElement("div", {
				className: p.a.circleFaqYellowSmall
			}), s.a.createElement("div", {
				className: p.a.circleFaqCyanBig
			}), s.a.createElement("div", {
				className: p.a.circleFaqOrange
			}), s.a.createElement("div", {
				className: p.a.circleFaqYellowHollow
			})), k = () => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(o.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkTopLeft)
			}), s.a.createElement("div", {
				className: Object(o.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkTopRight)
			}), s.a.createElement("div", {
				className: Object(o.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkLeft)
			}), s.a.createElement("div", {
				className: Object(o.a)(p.a.faqQuestionMark, p.a.faqQuestionMarkBottomRight)
			})), f = e => {
				let {
					hideBolt: a
				} = e;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(w, {
					hideBolt: a
				}), s.a.createElement(_, null), s.a.createElement(k, null))
			}, E = () => {
				const e = Object(r.e)(u.db);
				return s.a.createElement("div", {
					className: p.a.ctaButtonCirclesAndBolt
				}, s.a.createElement("div", {
					className: p.a.circleFaqCtaStriped,
					style: {
						backgroundImage: e ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: p.a.circleFaqCtaYellowBig
				}, s.a.createElement("img", {
					alt: "Powerup bolt",
					className: p.a.boltInCircleFaqCtaYellow,
					src: `${n.a.assetPath}/img/powerups/bolt.png`
				})), s.a.createElement("div", {
					className: p.a.circleFaqCtaCyanHollow
				}))
			}
		},
		"./src/reddit/pages/Powerups/HeadingSection.m.less": function(e, a, t) {
			e.exports = {
				contentWrapper: "FIkrXGGm6_yR7jVsi9YbD",
				animatedCircle: "_3XbS54EqzA2cTpCg9Sh5Ya",
				animateTransformX: "e0zYrGJDducQDaejxfXn9",
				bodyText: "CkIU8OEGXvN26TDGW5g2l",
				headingSection: "_2wgjBcQ3TpkXrp1kfnbKd-",
				headingContent: "_3_uly-IS81U5ig_2SODw1D",
				headingArt: "EIx4Y06ZrIhzvAZF4-0F-",
				headingText: "_93_Y4zmf5c30W0HwwKqWa",
				powerupsMarketingImageContainer: "_3GgEDOY6yCBrLu_DNhqEeN",
				powerupsMarketingImage: "_34O94Eh4GC8JUzaaTCZEcV",
				fallbackStaticImage: "fJUgRxC1hjS7od7cM-AWG",
				heading: "_2ze91944nQz0QAKIZGezm1",
				isNightmodeOn: "_1vuvl6ciKFMtjfQMDK6tyJ",
				powerupsLogo: "_1GeGuxuBWvNj5ZEIhQe5Xu",
				subheading: "_1js-Rmth_fVU-2FRbz_buf",
				description: "_1Vomcyk98IXfFgKwavGRqR",
				modWarning: "_2R9jUuTk8pjdgMfUW3KGpW",
				modWarningItalic: "_30FZ3NbPXSW3xK8YdIxT7l",
				modWarningFooter: "_3c7w8IQ7W6GZDhj3bmG34k",
				modWarningTop: "_2jryBH7GCOxOk_BRmoKbl9",
				modWarningIcon: "h8gk_KoA-_B5hbqivR7iY",
				powerupsHeadingImg: "_1K6Xmpf_UORE99sukHFDlE",
				ctaButton: "_3Ix_Voar1gEgFjy_e6LL9t",
				active: "_3DvbQU8L4yzwJjWsQujq84",
				circleOrangeFull: "_2VO8WEMqJPJowNCcJBBUk5",
				circleOrangeHollow: "_2zPZykL1KGJSo9YRJ3Y5dy",
				circleYellowSmall: "_28ppeUvr7bkFdx0sEQ3jv",
				top: "_1TuT17eGP0VqaHpKMTgTSG",
				bottom: "_1hiOTBsV4AVUH-GFOhq476",
				circleYellowBig: "_M-WPg1FMisyW-utzS3Ky",
				circleYellowHollow: "_2ZPIUmdE7CWl0P15F7Ej3U",
				circleDotted: "JxUPDbdQY7focspcQwZOP",
				circleStriped: "PShhYr_qgqfqiPtBDWf6P",
				background: "fpMKjjygkCTJBHvcZrK-Y",
				diagonalLayoutPrimary: "_2CJH4bU4IBYt-xcRd43jsE",
				diagonalLayoutSecondary: "_1s2L_LvE9KboJlIJ_pVY7_"
			}
		},
		"./src/reddit/pages/Powerups/HeadingSection.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return w
			})), t.d(a, "a", (function() {
				return _
			}));
			var n = t("./src/config.ts"),
				l = t("./src/lib/classNames/index.ts"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				o = t("./node_modules/react-redux/es/index.js"),
				c = t("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				i = t("./src/reddit/controls/Button/index.tsx"),
				m = t("./src/reddit/icons/fonts/index.tsx");
			var u = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 437 96",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("circle", {
					fill: "#ff4500",
					cx: "48",
					cy: "48",
					r: "48"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
				}), r.a.createElement("path", {
					fill: "#fff",
					d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M144.182,27.8a14.469,14.469,0,0,1,6.317,5.71,16.7,16.7,0,0,1,2.19,8.659,17.514,17.514,0,0,1-2.24,8.928,15.51,15.51,0,0,1-6.318,6.031,19.81,19.81,0,0,1-9.4,2.156h-6.165V75.454H117.515V25.793h16.913A22.1,22.1,0,0,1,144.182,27.8ZM134.159,49.545a8.731,8.731,0,0,0,4.076-.909,6.562,6.562,0,0,0,2.7-2.51,7.005,7.005,0,0,0,.943-3.622,6.126,6.126,0,0,0-2.173-5.021,8.96,8.96,0,0,0-5.947-1.852h-5.188V49.545Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M162.611,73.5a18.725,18.725,0,0,1-6.957-6.772,18.466,18.466,0,0,1-.068-18.648,18.732,18.732,0,0,1,6.873-6.856,18.939,18.939,0,0,1,9.737-2.561,19.255,19.255,0,0,1,9.619,2.477,18.582,18.582,0,0,1,6.957,6.755,18.592,18.592,0,0,1,0,18.833,18.725,18.725,0,0,1-6.957,6.772,19.738,19.738,0,0,1-19.2,0Zm14.15-7.9a9.237,9.237,0,0,0,3.269-3.522,10.013,10.013,0,0,0,1.2-4.817,9.687,9.687,0,0,0-1.213-4.8,9.2,9.2,0,0,0-3.285-3.437,8.761,8.761,0,0,0-9.063,0A9.067,9.067,0,0,0,164.4,52.46a9.712,9.712,0,0,0-1.2,4.767,10.069,10.069,0,0,0,1.2,4.851,9.235,9.235,0,0,0,3.268,3.522,8.628,8.628,0,0,0,9.1,0Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M211.413,75.454h-8.76L191.939,39.2h10.478l4.077,16.879,1.516,6.5h.135l1.752-4.11,6.873-17.756h3.942l6.94,17.756,1.786,4.11h.168l1.483-6.5L235.1,39.2h10.478L234.829,75.454H226.1l-3.167-7.042-3.976-9.77h-.27l-4.076,9.77Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M280.75,60.765H256.357a9.363,9.363,0,0,0,3.454,4.969,9.772,9.772,0,0,0,5.913,1.8,16.431,16.431,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.234,17.234,0,0,1-5.222,2.256,25.447,25.447,0,0,1-6.637.843,20.941,20.941,0,0,1-10.141-2.358,16.568,16.568,0,0,1-6.705-6.571,19.379,19.379,0,0,1-2.358-9.635,19.506,19.506,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.607,15.607,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,280.75,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.006,7.006,0,0,0-5.105-1.887,7.871,7.871,0,0,0-5.374,1.9,9.213,9.213,0,0,0-2.88,5.105Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M310.331,38.882a5.377,5.377,0,0,1,1.651.522L307.7,49.579a5.714,5.714,0,0,0-1.263-.388,8.242,8.242,0,0,0-1.735-.185,8.073,8.073,0,0,0-3.622.876,7.362,7.362,0,0,0-2.915,2.628,7.721,7.721,0,0,0-1.145,4.312V75.454H286.376V39.2H296.72v5.087h.2a15.107,15.107,0,0,1,4.582-4.025,12.459,12.459,0,0,1,6.368-1.6A13.094,13.094,0,0,1,310.331,38.882Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M337.183,39.2H347.83V75.487H337.554V70.7h-.27a11.147,11.147,0,0,1-4.548,3.892,14.319,14.319,0,0,1-6.368,1.431,11.771,11.771,0,0,1-6.351-1.667,10.919,10.919,0,0,1-4.11-4.632,15.381,15.381,0,0,1-1.432-6.773V39.2h10.647V60.6a7.068,7.068,0,0,0,1.516,4.885,5.333,5.333,0,0,0,4.177,1.685,6.3,6.3,0,0,0,4.582-1.735,6.52,6.52,0,0,0,1.786-4.9Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M390.685,67.217a16.49,16.49,0,0,1-6.132,6.5,16.168,16.168,0,0,1-8.389,2.274,14.7,14.7,0,0,1-5.862-1.145,14.106,14.106,0,0,1-4.683-3.269h-.27V89.705L354.7,89.6V39.2H364.81V43.48h.2a13.564,13.564,0,0,1,4.717-3.571,14.524,14.524,0,0,1,6.1-1.246A16.811,16.811,0,0,1,384.3,40.9a16.611,16.611,0,0,1,6.3,6.486,20.1,20.1,0,0,1,2.375,9.972A20.38,20.38,0,0,1,390.685,67.217ZM378.421,65.6a8.348,8.348,0,0,0,3.134-3.4,10.608,10.608,0,0,0,1.112-4.9,10.382,10.382,0,0,0-1.129-4.885,8.293,8.293,0,0,0-3.133-3.352,8.746,8.746,0,0,0-4.566-1.2,8.587,8.587,0,0,0-4.514,1.2,8.316,8.316,0,0,0-3.117,3.352,11.289,11.289,0,0,0,0,9.838,8.427,8.427,0,0,0,3.117,3.369,8.7,8.7,0,0,0,4.514,1.246A8.863,8.863,0,0,0,378.421,65.6Z"
				}), r.a.createElement("path", {
					fill: "#ff4500",
					d: "M404.128,74.848a16.616,16.616,0,0,1-5.273-3.2,13.586,13.586,0,0,1-3.419-4.682l8.557-3.571a8.694,8.694,0,0,0,2.662,2.981,6.466,6.466,0,0,0,3.874,1.264,5.111,5.111,0,0,0,2.157-.421,3.225,3.225,0,0,0,1.364-1.1,2.434,2.434,0,0,0,.455-1.381q0-1.516-1.971-2.426a29.107,29.107,0,0,0-5.1-1.684q-.776-.236-.944-.27a15.971,15.971,0,0,1-7.109-3.891,9.118,9.118,0,0,1-2.661-6.755,10.092,10.092,0,0,1,1.684-5.728,11.182,11.182,0,0,1,4.633-3.924,15.245,15.245,0,0,1,6.62-1.4,16.8,16.8,0,0,1,5.947,1.044,14.949,14.949,0,0,1,4.8,2.864,11.088,11.088,0,0,1,2.931,4.043l-8.153,3.437a8.4,8.4,0,0,0-1.954-2.14,4.906,4.906,0,0,0-3.167-1.027,4.176,4.176,0,0,0-2.645.825,2.493,2.493,0,0,0-1.061,2.038,2.332,2.332,0,0,0,.977,1.887,8.267,8.267,0,0,0,2.408,1.28q1.432.505,3.959,1.18a28.275,28.275,0,0,1,4.515,1.617,11.527,11.527,0,0,1,3.959,3.167,8.512,8.512,0,0,1,1.836,5.66,10.081,10.081,0,0,1-1.836,5.946,12.192,12.192,0,0,1-4.953,4.06,15.983,15.983,0,0,1-6.822,1.449A17.448,17.448,0,0,1,404.128,74.848Z"
				})),
				d = t("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				p = t("./src/reddit/selectors/user.ts"),
				h = t("./src/reddit/pages/Powerups/HeadingSection.m.less"),
				g = t.n(h);
			const {
				fbt: b
			} = t("./node_modules/fbt/lib/FbtPublic.js"), w = e => {
				let {
					openModal: a
				} = e;
				const t = Object(o.e)(p.db),
					s = Object(o.e)(d.b),
					h = Object(o.e)(p.Q),
					w = s ? b._("Come together to level up the whole community", null, {
						hk: "n9eu8"
					}) : b._("Level up the whole community", null, {
						hk: "2kiP2p"
					}),
					k = s ? b._("Harness the power of your community to unlock special perks and advanced features.", null, {
						hk: "1VpJiW"
					}) : b._("Come together to unlock special perks and advanced features.", null, {
						hk: "1WTTiK"
					}),
					f = s ? r.a.createElement(i.k, {
						onClick: a,
						priority: i.c.Primary,
						className: g.a.ctaButton
					}, b._("Turn on Powerups", null, {
						hk: "4E97KH"
					})) : r.a.createElement(c.a, {
						onClick: a,
						className: g.a.ctaButton,
						disabled: !h
					});
				return r.a.createElement("div", {
					className: g.a.headingSection
				}, r.a.createElement(_, {
					isNightmodeOn: t
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.contentWrapper, g.a.headingContent)
				}, r.a.createElement("div", {
					className: g.a.headingText
				}, r.a.createElement("h1", {
					className: Object(l.a)(g.a.heading, {
						[g.a.isNightmodeOn]: t
					})
				}, r.a.createElement(u, {
					className: g.a.powerupsLogo
				})), r.a.createElement("h2", {
					className: g.a.subheading
				}, w), r.a.createElement("p", {
					className: Object(l.a)(g.a.description, g.a.bodyText)
				}, k), s && r.a.createElement("div", {
					className: Object(l.a)(g.a.modWarning, g.a.bodyText)
				}, r.a.createElement("div", {
					className: g.a.modWarningTop
				}, r.a.createElement(m.a, {
					name: "mod",
					className: g.a.modWarningIcon
				})), b._("{=Only moderators with theManage Settings permission can turn on Powerups.}{=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.}", [b._param("=Only moderators with theManage Settings permission can turn on Powerups.", r.a.createElement("div", null, b._("Only moderators with the {=Manage Settings} permission can turn on Powerups.", [b._param("=Manage Settings", r.a.createElement("span", {
					className: g.a.modWarningItalic
				}, b._("Manage Settings", null, {
					hk: "4AauR"
				})))], {
					hk: "1sKKo7"
				}))), b._param("=Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", r.a.createElement("div", {
					className: g.a.modWarningFooter
				}, b._("Heads up—Only Safe for Work (SFW) communities with 1,000 members or more can enable Powerups.", null, {
					hk: "2euXqd"
				})))], {
					hk: "2FL5at"
				})), f), r.a.createElement("div", {
					className: g.a.headingArt
				}, r.a.createElement("div", {
					className: g.a.powerupsMarketingImageContainer
				}, r.a.createElement("picture", {
					className: g.a.powerupsMarketingImage
				}, r.a.createElement("source", {
					media: "(prefers-reduced-motion: reduce)",
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`,
					type: "image/png"
				}), r.a.createElement("source", {
					srcSet: `${n.a.assetPath}/img/powerups/powerups-rangers.webp`,
					type: "image/webp"
				}), r.a.createElement("img", {
					alt: b._("Powerups heroes", null, {
						hk: "3kHkNJ"
					}),
					className: g.a.fallbackStaticImage,
					src: `${n.a.assetPath}/img/powerups/powerups-rangers-static.png`
				}))))))
			}, _ = e => {
				let {
					isNightmodeOn: a,
					accentDiagonalCustomStyles: t
				} = e;
				return r.a.createElement("div", {
					className: Object(l.a)(g.a.background, g.a.contentWrapper)
				}, r.a.createElement("div", {
					className: g.a.diagonalLayoutSecondary,
					style: t
				}), r.a.createElement("div", {
					className: g.a.diagonalLayoutPrimary
				}), r.a.createElement("div", {
					className: g.a.circleDotted,
					style: {
						backgroundImage: `url(${n.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.animatedCircle, g.a.circleStriped),
					style: {
						backgroundImage: a ? `url(${n.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${n.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.circleOrangeFull, g.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.circleYellowSmall, g.a.top, g.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.circleYellowBig, g.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.circleYellowHollow, g.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.circleYellowSmall, g.a.bottom, g.a.animatedCircle)
				}), r.a.createElement("div", {
					className: Object(l.a)(g.a.circleOrangeHollow, g.a.animatedCircle)
				}))
			}
		},
		"./src/reddit/pages/Powerups/PerksSection.m.less": function(e, a, t) {
			e.exports = {
				perksSection: "_3xuSQMWvGF1ioIFvw3OAPd",
				isModPageVersion: "DJ1YbWxaJfDsxO1eUBbzd",
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
		"./src/reddit/pages/Powerups/PioneerSection.m.less": function(e, a, t) {
			e.exports = {
				pioneerSection: "_1AigALJ5_8_L9txj_NGgWt",
				circlePioneersCyanHollow: "_35z4rVyFyuGXStJc6gIzNh",
				powerupsPioneerContent: "_2g0PmzpLmWDpovuHZHG4H9",
				pioneerHeading: "_6LXOwukSdbSDn2ZEyyDLB",
				pioneerSubheading: "_28NRKjRCfnWkTFUGOWrsjn"
			}
		},
		"./src/reddit/pages/Powerups/PowerupStepsSection.m.less": function(e, a, t) {
			e.exports = {
				powerupStepsSection: "_1TArHcaReJQG2z4aYfFp8-",
				powerupStepsSectionContent: "_1d4po5OwyWpQkeDBOwNueP",
				circleStepsStriped: "_297lQDQNvSeahRlOa71Jx7",
				circleStepsYellowFull: "_3vq1Ue0dCQMOZVNHAiVTKX",
				powerupStep: "_1TJkcDtR_BEkm69vBbuvB7",
				powerupStepCounter: "_2lX0KnXpcHmaQaAqa0uMUg",
				powerupStepName: "_3CeRVGs8TJia7_SlnHlTcV",
				powerupStepDescription: "_3mUYyFSS149RszcS7hVfVT"
			}
		},
		"./src/reddit/pages/Powerups/index.m.less": function(e, a, t) {
			e.exports = {
				circle: "_1TvCFkzk-ajL6WvX-MoueU",
				footer: "_3W_fhNmXtO7pxVqENULN1r",
				modalBody: "_3H2XNRlTGeYM2CgAzJwzr",
				modalOverlay: "_3c_5_fSPEeIEoDBXAVgAZ3"
			}
		},
		"./src/reddit/pages/Powerups/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				r = t("./src/reddit/components/MarketingPageFooter/index.tsx"),
				o = t("./src/config.ts"),
				c = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/lib/intlList/index.ts"),
				m = t("./src/reddit/actions/gold/powerups.ts"),
				u = t("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = t("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"),
				p = t("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				h = t("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				g = t("./src/reddit/controls/RadioInput/index.tsx"),
				b = t("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				w = t("./src/reddit/hooks/usePreloadModal.ts"),
				_ = t("./src/reddit/hooks/useThunkDispatch.ts"),
				k = t("./node_modules/lodash/sampleSize.js"),
				f = t.n(k),
				E = t("./node_modules/react-router-dom/esm/react-router-dom.js"),
				N = t("./src/lib/classNames/index.ts"),
				v = t("./src/lib/opener/index.ts"),
				y = t("./src/reddit/hooks/useIsClient.ts"),
				P = t("./src/reddit/hooks/useTracking.ts"),
				S = t("./src/reddit/selectors/telemetry.ts");
			var x = t("./src/reddit/selectors/user.ts"),
				C = t("./src/reddit/pages/Powerups/Communities.m.less"),
				O = t.n(C);
			const j = f()(["wallstreetbets", "pennystocks", "tiktokcringe", "lgbt", "python", "unexpected", "chloe", "pewdiepiesubmissions", "roastme", "jacksepticeye", "thebachelor", "taylorswift", "bigbrother", "belowdeck", "blackpink"], 3),
				I = () => {
					const e = Object(P.a)(),
						a = Object(s.e)(x.db),
						t = Object(y.a)(),
						n = () => {
							e((() => e => ({
								...S.n(e),
								source: "powerups_landing_page",
								action: "click",
								noun: "community"
							}))())
						};
					return t ? l.a.createElement("section", {
						className: Object(N.a)(O.a.communitiesContainer, {
							[O.a.isNightMode]: a
						})
					}, l.a.createElement("div", {
						className: O.a.communitiesContent
					}, j.map(e => l.a.createElement(E.a, {
						className: O.a.community,
						key: e,
						to: `r/${e}`,
						target: v.d.BLANK,
						rel: v.c,
						onClick: n
					}, l.a.createElement("div", {
						className: O.a.communityIcon,
						style: {
							backgroundImage: `url(${o.a.assetPath}/img/powerups/communities-placeholder.png)`
						}
					}), l.a.createElement("div", {
						className: O.a.communityName
					}, "r/", e))))) : null
				};
			var F = t("./src/reddit/selectors/gold/powerups/index.ts"),
				M = t("./src/reddit/components/PowerupsApplyToSubredditModal/index.m.less"),
				T = t.n(M);
			const {
				fbt: q
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var B = Object(c.a)(e => {
					let {
						closeModal: a
					} = e;
					var t;
					const r = Object(_.a)(),
						c = Object(s.e)(F.r),
						[k, f] = Object(n.useState)((null === (t = c[0]) || void 0 === t ? void 0 : t.displayText) || "");
					Object(w.a)(d.a);
					const E = c.length ? q._("{=Come together to unlock special perks and advanced features.}", [q._param("=Come together to unlock special perks and advanced features.", l.a.createElement("div", null, q._("Come together to unlock special perks and advanced features.", null, {
						hk: "LTvLr"
					})))], {
						hk: "1Tbjpa"
					}) : q._("You are not subscribed to any communities that have Powerups enabled. Consider joining {listOfSubreddits}.", [q._param("listOfSubreddits", (e => Object(i.c)(e.map(e => `r/${e}`), i.a.OR, i.b.COMMA))([...j]))], {
						hk: "3i5kXR"
					});
					return l.a.createElement("div", {
						className: T.a.container,
						"data-testid": "powerups-signup-modal"
					}, l.a.createElement("div", {
						className: T.a.body
					}, l.a.createElement("div", {
						className: T.a.headerImageContainer
					}, l.a.createElement("img", {
						className: T.a.headerImage,
						alt: q._("Powerup heroes", null, {
							hk: "3MjoLQ"
						}),
						src: `${o.a.assetPath}/img/powerups/powerups-rangers-static.png`
					})), l.a.createElement("div", {
						className: T.a.titleContainer
					}, l.a.createElement("h1", {
						className: T.a.titleText
					}, q._("{=Power up}{=your communities}", [q._param("=Power up", l.a.createElement("div", null, q._("Power up", null, {
						hk: "Jrn2T"
					}))), q._param("=your communities", l.a.createElement("div", null, q._("your communities", null, {
						hk: "4EPQY"
					})))], {
						hk: "chRD1"
					})), l.a.createElement("h2", {
						className: T.a.subtitleText
					}, E)), l.a.createElement("div", {
						className: T.a.radioContainer
					}, l.a.createElement(g.a, {
						name: "subreddit",
						value: k,
						onChange: e => f(e)
					}, c.map(e => {
						let {
							id: a,
							displayText: t
						} = e;
						const n = k === t;
						return l.a.createElement(b.a, {
							className: T.a.radioOption,
							key: a,
							selected: n,
							showButton: !0,
							value: t
						}, t)
					}))), l.a.createElement(p.a, {
						onClick: async () => {
							var e;
							const t = null === (e = c.find(e => e.displayText === k)) || void 0 === e ? void 0 : e.id;
							t && (r(Object(m.g)("powerups_apply_form", t)), a())
						},
						className: T.a.ctaButton,
						disabled: !c.length
					})), l.a.createElement(u.a, {
						onClick: a,
						highContrast: !0
					}), l.a.createElement(h.a, {
						space: h.b.MODAL
					}))
				}),
				A = (t("./node_modules/core-js/modules/web.dom.iterable.js"), t("./src/reddit/controls/Button/index.tsx")),
				H = t("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				W = t("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				D = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				L = t("./src/reddit/components/PowerupsSignUpModal/MultiSubredditForm.m.less"),
				Y = t.n(L);
			const {
				fbt: R
			} = t("./node_modules/fbt/lib/FbtPublic.js"), Q = e => {
				const {
					onChange: a,
					subredditIdsSelected: t,
					subredditsInfo: n,
					wasSuccessful: s,
					allEnabled: r
				} = e, o = n.filter(e => !e.hasPowerups), c = n.filter(e => e.hasPowerups), i = o.length === t.length;
				return l.a.createElement("div", {
					className: Y.a.container
				}, l.a.createElement("div", {
					className: Y.a.checkboxList
				}, c.map(e => {
					let {
						id: a,
						displayText: t
					} = e;
					return l.a.createElement(D.a, {
						className: Object(N.a)(Y.a.checkbox, Y.a.disabled),
						key: a,
						isSelected: !0,
						onClick: () => {},
						text: t,
						disabled: !0
					})
				}), o.map(e => {
					let {
						id: n,
						displayText: r
					} = e;
					const o = t.includes(n);
					return l.a.createElement(D.a, {
						className: Object(N.a)(Y.a.checkbox, {
							[Y.a.disabled]: s
						}),
						key: n,
						isSelected: o,
						onClick: () => ((e, n) => {
							const l = n ? [...t, e] : t.filter(a => a !== e);
							a(l)
						})(n, !o),
						text: r,
						disabled: s
					})
				})), !s && !r && l.a.createElement(A.t, {
					className: Y.a.selectAllButton,
					onClick: () => {
						a(i ? [] : o.map(e => {
							let {
								id: a
							} = e;
							return a
						}))
					},
					priority: A.c.Secondary,
					isFullWidth: !0
				}, i ? R._("Deselect all", null, {
					hk: "46i6br"
				}) : R._("Select all", null, {
					hk: "2Eo4n2"
				})))
			};
			var V = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				G = t("./src/reddit/components/PowerupsSignUpModal/signupButton.m.less"),
				Z = t.n(G);
			const {
				fbt: z
			} = t("./node_modules/fbt/lib/FbtPublic.js"), J = e => {
				let {
					className: a,
					disabled: t,
					onClick: n,
					isLoading: s,
					wasError: r
				} = e;
				const o = r ? z._("Try again", null, {
					hk: "1cKOSe"
				}) : z._("Turn on Powerups", null, {
					hk: "AuDZE"
				});
				return l.a.createElement(A.k, {
					className: Object(N.a)(a, Z.a.button, {
						[Z.a.loading]: s
					}),
					disabled: t || s,
					onClick: n,
					priority: A.c.Primary,
					isFullWidth: !0
				}, s ? l.a.createElement(V.a, {
					sizePx: 12,
					center: !0
				}) : o)
			};
			var U = t("./src/reddit/components/PowerupsSignUpModal/index.m.less"),
				X = t.n(U);
			const {
				fbt: K
			} = t("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(c.a)(e => {
				let {
					closeModal: a
				} = e;
				var t;
				const r = Object(_.a)(),
					c = Object(P.a)(),
					i = Object(s.e)(W.a),
					d = null !== (t = 1 === (null == i ? void 0 : i.length)) && void 0 !== t && t,
					p = null == i ? void 0 : i.every(e => {
						let {
							hasPowerups: a
						} = e;
						return a
					}),
					[g, b] = Object(n.useState)(i && d ? [i[0].id] : []),
					[w, k] = Object(n.useState)(!1),
					[f, E] = Object(n.useState)(!1),
					[N, v] = Object(n.useState)(!1);
				if (!(null == i ? void 0 : i.length)) return a(), null;
				const y = async e => {
					try {
						return await r(Object(m.a)(e)), {
							success: !0
						}
					} catch (a) {
						return {
							success: !1,
							error: a.message
						}
					}
				}, x = f || p ? K._("{=[r/community]}{=has Powerups}", [K._param("=[r/community]", l.a.createElement("div", null, K._("{r/community}", [K._param("r/community", i[0].displayText)], {
					hk: "1TzAG8"
				}))), K._param("=has Powerups", l.a.createElement("div", null, K._("has Powerups", null, {
					hk: "2zYYns"
				})))], {
					hk: "2bu88V"
				}) : K._("{=Power up}{=[r/community]}", [K._param("=Power up", l.a.createElement("div", null, K._("Power up", null, {
					hk: "3qh4XT"
				}))), K._param("=[r/community]", l.a.createElement("div", null, K._("{r/community}", [K._param("r/community", i[0].displayText)], {
					hk: "2Pz0Sn"
				})))], {
					hk: "p9zKt"
				}), C = f || p ? K._("{=Your communities}{=have Powerups}", [K._param("=Your communities", l.a.createElement("div", null, K._("Your communities", null, {
					hk: "3ySkxw"
				}))), K._param("=have Powerups", l.a.createElement("div", null, K._("have Powerups", null, {
					hk: "4rHX2f"
				})))], {
					hk: "E4Lct"
				}) : K._("{=Power up}{=your communities}", [K._param("=Power up", l.a.createElement("div", null, K._("Power up", null, {
					hk: "Jrn2T"
				}))), K._param("=your communities", l.a.createElement("div", null, K._("your communities", null, {
					hk: "4EPQY"
				})))], {
					hk: "1K9FOM"
				}), O = d ? x : C, j = w || f || N ? K._("{=Hold tight! It can take up to 5 minutes for}{=Powerups to appear in yourcommunity.}", [K._param("=Hold tight! It can take up to 5 minutes for", l.a.createElement("div", null, K._("Hold tight! It can take up to 5 minutes for", null, {
					hk: "1cFoaI"
				}))), K._param("=Powerups to appear in yourcommunity.", l.a.createElement("div", null, K._({
					"*": "Powerups to appear in your communities.",
					_1: "Powerups to appear in your community."
				}, [K._plural(i.length)], {
					hk: "1ky0qH"
				})))], {
					hk: "4tvqU7"
				}) : K._("{=Harness the power of yourcommunity to}{=unlock special perks and advanced features.}", [K._param("=Harness the power of yourcommunity to", l.a.createElement("div", null, K._({
					"*": "Harness the power of your communities to",
					_1: "Harness the power of your community to"
				}, [K._plural(i.length)], {
					hk: "2rOtDZ"
				}))), K._param("=unlock special perks and advanced features.", l.a.createElement("div", null, K._("unlock special perks and advanced features.", null, {
					hk: "2Xj3Tx"
				})))], {
					hk: "2cx1IK"
				});
				return l.a.createElement("div", {
					className: X.a.container,
					"data-testid": "powerups-signup-modal"
				}, l.a.createElement("div", {
					className: X.a.body
				}, l.a.createElement("div", {
					className: X.a.headerImageContainer
				}, l.a.createElement("img", {
					className: X.a.headerImage,
					alt: "Powerup heroes",
					src: `${o.a.assetPath}/img/powerups/powerups-rangers-static.png`
				})), l.a.createElement("div", {
					className: X.a.titleContainer
				}, l.a.createElement("h1", {
					className: X.a.titleText
				}, O), l.a.createElement("h2", {
					className: X.a.subtitleText
				}, j)), !d && l.a.createElement(Q, {
					onChange: b,
					subredditIdsSelected: g,
					subredditsInfo: i,
					wasSuccessful: f,
					allEnabled: p
				}), N && l.a.createElement("div", {
					className: X.a.errorContainer
				}, l.a.createElement(H.a, {
					className: X.a.errorIcon
				}), l.a.createElement("span", {
					className: X.a.errorText
				}, K._("Something went wrong.", null, {
					hk: "N6RFp"
				}))), !f && !p && l.a.createElement(J, {
					disabled: 0 === g.length,
					onClick: async () => {
						c((e => a => ({
							...S.n(a),
							source: "powerups_apply_form",
							action: "click",
							noun: "turn_on_powerups",
							powerups: {
								subredditIds: e.join(",")
							}
						}))(g)), k(!0);
						const e = (await Promise.all(g.map(y))).every(e => {
							let {
								success: a
							} = e;
							return a
						});
						E(e), v(!e), k(!1)
					},
					isLoading: w,
					wasError: N
				}), (f || p) && d && l.a.createElement(l.a.Fragment, null, l.a.createElement("p", {
					className: X.a.successText
				}, K._("Let your community know about Powerups with a pinned post", null, {
					hk: "3bII20"
				})), l.a.createElement(A.t, {
					className: X.a.successButton,
					to: `/${i[0].displayText}/submit`,
					kind: A.b.InternalLink,
					priority: A.c.Primary,
					isFullWidth: !0
				}, K._("Spread the word", null, {
					hk: "1f68Nj"
				}))), l.a.createElement("footer", {
					className: X.a.footer
				}, K._("Heads up—once you turn on Powerups you can’t turn it off.", null, {
					hk: "3YQxrF"
				}))), l.a.createElement(u.a, {
					onClick: a,
					highContrast: !0
				}), l.a.createElement(h.a, {
					space: h.b.MODAL
				}))
			});
			var ee = t("./src/reddit/pages/Powerups/FaqSection.tsx"),
				ae = t("./src/reddit/pages/Powerups/HeadingSection.tsx"),
				te = t("./node_modules/fbt/lib/FbtPublic.js"),
				ne = t("./src/reddit/pages/Powerups/PerksSection.m.less"),
				le = t.n(ne);
			const se = [{
					title: te.fbt._("Achievements", null, {
						hk: "2sAFRa"
					}),
					description: te.fbt._("Recognize members' contributions and skills.", null, {
						hk: "2ueVeZ"
					}),
					imageName: "ACHIEVEMENT_FLAIRS_v3",
					imageAlt: te.fbt._("Powerups perk Achievements", null, {
						hk: "OT6Cc"
					}).toString()
				}, {
					title: te.fbt._("Custom Emojis", null, {
						hk: "3bRZHS"
					}),
					description: te.fbt._("Create and use emojis exclusive to your community.", null, {
						hk: "4wDc2h"
					}),
					imageName: "CUSTOM_EMOJIS_v3",
					imageAlt: te.fbt._("Powerups perk Custom Emojis", null, {
						hk: "SdKcQ"
					}).toString()
				}, {
					title: te.fbt._("HD Video", null, {
						hk: "20Gh7k"
					}),
					description: te.fbt._("Upload and watch in greater resolution.", null, {
						hk: "SewZA"
					}),
					imageName: "HD_VIDEO_v3",
					imageAlt: te.fbt._("Powerups perk HD Video", null, {
						hk: "4uRAxP"
					}).toString()
				}, {
					title: te.fbt._("Hero Status", null, {
						hk: "3raGK1"
					}),
					description: te.fbt._("Reward members who give back to the community with hero badges and instant access to perks.", null, {
						hk: "43EB2T"
					}),
					imageName: "HERO_STATUS_v3",
					imageAlt: te.fbt._("Powerups perk Hero Status", null, {
						hk: "11Egfw"
					}).toString()
				}, {
					title: te.fbt._("More to come...", null, {
						hk: "14pcFR"
					}),
					description: "",
					imageName: "MORE_v3",
					imageAlt: te.fbt._("Powerups more to come", null, {
						hk: "3HZmec"
					}).toString()
				}],
				re = te.fbt._("Powerups Bolt", null, {
					hk: "4wk1W"
				}).toString(),
				oe = e => {
					let {
						title: a,
						description: t,
						imageName: n,
						imageAlt: s
					} = e;
					return l.a.createElement("div", {
						className: le.a.perkCell
					}, l.a.createElement("div", {
						className: le.a.perkImageBackgroundCircle
					}, l.a.createElement("img", {
						alt: s,
						className: le.a.perkImage,
						src: `${o.a.assetPath}/img/powerups/${n}.png`
					})), l.a.createElement("h3", {
						className: le.a.perkTitle
					}, a), l.a.createElement("h4", {
						className: le.a.perkDescription
					}, t))
				},
				ce = () => {
					const e = Object(s.e)(x.db),
						a = Object(s.e)(W.b);
					return l.a.createElement("div", {
						className: Object(N.a)(le.a.perksSection, {
							[le.a.isNightmodeOn]: e,
							[le.a.isModPageVersion]: a
						})
					}, l.a.createElement("img", {
						alt: re,
						className: le.a.perksSectionBoltImage,
						src: `${o.a.assetPath}/img/powerups/bolt.png`
					}), l.a.createElement("h2", {
						className: le.a.perksSectionTitle
					}, te.fbt._("Let's check out those perks!", null, {
						hk: "jugDp"
					})), l.a.createElement("div", {
						className: Object(N.a)(le.a.perksSectionGrid, le.a.contentWrapper)
					}, se.map(e => {
						let {
							title: a,
							description: t,
							imageName: n,
							imageAlt: s
						} = e;
						return l.a.createElement(oe, {
							key: a,
							title: a,
							description: t,
							imageName: n,
							imageAlt: s
						})
					})))
				};
			var ie = t("./src/reddit/pages/Powerups/PioneerSection.m.less"),
				me = t.n(ie);
			const {
				fbt: ue
			} = t("./node_modules/fbt/lib/FbtPublic.js"), de = () => {
				return Object(s.e)(W.b) ? l.a.createElement("div", {
					className: me.a.pioneerSection
				}, l.a.createElement("div", {
					className: Object(N.a)(me.a.contentWrapper, me.a.powerupsPioneerContent)
				}, l.a.createElement("div", {
					className: me.a.circlePioneersCyanHollow
				}), l.a.createElement("h2", {
					className: me.a.pioneerHeading
				}, ue._("Be a Powerups pioneer", null, {
					hk: "2P7QON"
				})), l.a.createElement("h3", {
					className: me.a.pioneerSubheading
				}, ue._("Be one of the first communities to turn on Powerups and have an influence on what perks and advanced features we create next.", null, {
					hk: "2wFnM6"
				})))) : null
			};
			var pe = t("./src/reddit/pages/Powerups/PowerupStepsSection.m.less"),
				he = t.n(pe);
			const {
				fbt: ge
			} = t("./node_modules/fbt/lib/FbtPublic.js"), be = () => {
				const e = Object(s.e)(x.db);
				return Object(s.e)(W.b) ? l.a.createElement("div", {
					className: he.a.powerupStepsSection
				}, l.a.createElement("div", {
					className: Object(N.a)(he.a.powerupStepsSectionContent, he.a.contentWrapper)
				}, l.a.createElement("div", {
					className: he.a.circleStepsStriped,
					style: {
						backgroundImage: e ? `url(${o.a.assetPath}/img/powerups/linecircle-orange.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), l.a.createElement("div", {
					className: he.a.powerupStep
				}, l.a.createElement("div", {
					className: he.a.powerupStepCounter
				}, "1"), l.a.createElement("div", {
					className: he.a.powerupStepName
				}, ge._("Turn on powerups", null, {
					hk: "q0dHV"
				})), l.a.createElement("div", {
					className: he.a.powerupStepDescription
				}, ge._("Just click that big Turn on Powerups button and add Powerups to your community.", null, {
					hk: "1da6DP"
				}))), l.a.createElement("div", {
					className: he.a.powerupStep
				}, l.a.createElement("div", {
					className: he.a.powerupStepCounter
				}, "2"), l.a.createElement("div", {
					className: he.a.powerupStepName
				}, ge._("Rally the community", null, {
					hk: "4m8BDG"
				})), l.a.createElement("div", {
					className: he.a.powerupStepDescription
				}, ge._("Spread the word! You only need 25 powerups to give perks to the whole community.", null, {
					hk: "4eSNsf"
				}), l.a.createElement("div", {
					className: he.a.circleStepsYellowFull
				}))), l.a.createElement("div", {
					className: he.a.powerupStep
				}, l.a.createElement("div", {
					className: he.a.powerupStepCounter
				}, "3"), l.a.createElement("div", {
					className: he.a.powerupStepName
				}, ge._("Unlock perks", null, {
					hk: "20u0vD"
				})), l.a.createElement("div", {
					className: he.a.powerupStepDescription
				}, ge._("Once your community is powered up, the perks are unlocked for everyone to use.", null, {
					hk: "3Fs5Gm"
				}))))) : null
			};
			var we = t("./src/reddit/pages/Powerups/index.m.less"),
				_e = t.n(we);
			a.default = () => {
				const e = Object(P.a)(),
					a = Object(s.e)(W.a),
					t = Object(s.e)(W.b),
					[o, c] = Object(n.useState)(!1),
					[i, m] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					e((() => e => ({
						...S.n(e),
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: {
							pageType: "powerups_landing_page"
						}
					}))())
				}, [e]);
				const u = () => {
						e((() => e => ({
							...S.n(e),
							source: "powerups_landing_page",
							action: "click",
							noun: "apply"
						}))()), t ? c(!0) : m(!0)
					},
					d = () => c(!1),
					p = () => m(!1);
				return l.a.createElement(l.a.Fragment, null, l.a.createElement(ae.b, {
					openModal: u
				}), l.a.createElement(I, null), l.a.createElement(de, null), l.a.createElement(be, null), l.a.createElement(ce, null), l.a.createElement(ee.b, {
					openModal: u,
					modSubredditsInfo: a
				}), l.a.createElement(r.a, {
					className: _e.a.footer
				}), t && o && l.a.createElement($, {
					withOverlay: !0,
					closeModal: d,
					onOverlayClick: d,
					className: _e.a.modalBody,
					overlayClassName: _e.a.modalOverlay
				}), !t && i && l.a.createElement(B, {
					withOverlay: !0,
					closeModal: p,
					onOverlayClick: p
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Powerups.e1ddb03b4f7dd0c6b0c0.js.map