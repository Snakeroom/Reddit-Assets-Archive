// https://www.redditstatic.com/desktop2x/reddit-components-CrisisFlow-CrisisFlowPage.1551045c39ae067b86d8.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CrisisFlow-CrisisFlowPage"], {
		"./src/reddit/components/CrisisFlow/CrisisFlowPage.m.less": function(e, t, n) {
			e.exports = {
				CrisisPageWrapper: "_3DiIChhu2HloT1jXInJKzz",
				crisisPageWrapper: "_3DiIChhu2HloT1jXInJKzz",
				CrisisImageContainer: "m1zfY_oFVTxzuLhxEhDej",
				crisisImageContainer: "m1zfY_oFVTxzuLhxEhDej",
				CrisisTitle: "_3-wxV12XGTk0ERED7mHDgf",
				crisisTitle: "_3-wxV12XGTk0ERED7mHDgf",
				CrisisDescription: "_1pEDw_vE5UFOHdZxJ_Rrsv",
				crisisDescription: "_1pEDw_vE5UFOHdZxJ_Rrsv"
			}
		},
		"./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/ApiContext.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/components/CrisisFlow/CrisisFooter/index.m.less"),
				d = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = 10;

			function p(e) {
				const {
					thankYouControls: t,
					onCloseReportFlow: n,
					onCrisisFlowSubmit: s
				} = e;
				return i.a.createElement("div", {
					className: d.a.CrisisFooter
				}, t ? null : i.a.createElement(o.p, {
					className: d.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank"
				}, u._("Other Options", null, {
					hk: "1RadlV"
				})), i.a.createElement(o.l, {
					className: d.a.CrisisButton,
					"data-redditstyle": !0,
					onClick: t ? n : s
				}, e.pending ? i.a.createElement(l.a, {
					className: d.a.loadingIcon,
					sizePx: m
				}) : t ? u._("Ok", null, {
					hk: "3Pp8M4"
				}) : u._("Yes", null, {
					hk: "12gtn"
				})))
			}
			var C = n("./src/reddit/controls/Link/index.tsx"),
				h = n("./src/config.ts"),
				x = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/components/CrisisFlow/CrisisFlowPage.m.less"),
				f = n.n(g),
				_ = n("./src/reddit/components/CrisisFlow/CrisisMainPage/index.m.less"),
				w = n.n(_);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = x.a.div("CrisisContent", w.a), E = x.a.div("CrisisImageContainer", f.a), b = x.a.img("CrisisImage", w.a), L = x.a.h2("CrisisTitle", f.a), v = x.a.p("CrisisDescription", f.a);
			var S = e => i.a.createElement(y, null, i.a.createElement(E, null, i.a.createElement(b, {
					src: `${h.a.assetPath}/img/crisis-line-icon.png`
				})), i.a.createElement(L, null, k._("Would you like Reddit to reach out to {username} ?", [k._param("username", i.a.createElement("span", null, "u/", e.username))], {
					hk: "3RFVlj"
				})), i.a.createElement(v, null, k._("We’ve partnered with {=Crisis Text Line} to provide redditors with support from trained Crisis Counselors, and will reach out (confidentially) to let {username} know that there are people who are here for them.", [k._param("=Crisis Text Line", i.a.createElement(C.a, {
					href: "https://www.crisistextline.org/",
					target: "_blank"
				}, k._("Crisis Text Line", null, {
					hk: "4ih1Mk"
				}))), k._param("username", i.a.createElement("strong", null, "u/", e.username))], {
					hk: "3eDxpt"
				}))),
				P = n("./src/reddit/icons/svgs/ArrowHeadsRight/index.tsx"),
				N = n("./src/reddit/icons/svgs/ChatBubbles/index.tsx"),
				B = n("./src/reddit/icons/svgs/Person/index.tsx"),
				R = n("./src/reddit/icons/svgs/TickCircled/index.tsx"),
				j = n("./src/reddit/components/CrisisFlow/CrisisThankYouPage/index.m.less"),
				T = n.n(j);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = x.a.div("CrisisImageContainer", f.a), F = x.a.h2("CrisisTitle", f.a), D = x.a.p("CrisisDescription", f.a), z = x.a.div("CrisisOtherActions", T.a), A = x.a.h4("CrisisOtherActionsTitle", T.a), q = x.a.div("CrisisLinkIconContainer", T.a), M = x.a.div("CrisisLinkText", T.a), W = x.a.h3("CrisisLinkTitle", T.a), U = x.a.p("CrisisLinkDescription", T.a);
			var Y = e => i.a.createElement("div", {
					className: T.a.CrisisThankYouPage
				}, i.a.createElement(I, null, i.a.createElement(R.a, {
					className: T.a.CrisisTickImage
				})), i.a.createElement(F, null, O._("Thanks for caring about your fellow redditor", null, {
					hk: "1ePh84"
				})), i.a.createElement(D, null, O._("We’ve reached out to {username} . By letting us know, you’ve helped connect them to people who are there to listen and provide support.", [O._param("username", i.a.createElement("span", null, "u/", e.username))], {
					hk: "3X1mGY"
				})), i.a.createElement(z, null, i.a.createElement(A, null, O._("Other things you can do", null, {
					hk: "4oCunD"
				})), i.a.createElement(C.a, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					className: T.a.CrisisLink
				}, i.a.createElement(q, null, i.a.createElement(N.a, null)), i.a.createElement(M, null, i.a.createElement(W, null, O._("Learn how to help someone in crisis", null, {
					hk: "3HohFx"
				})), i.a.createElement(U, null, O._("Get advice on what you can say and how to be supportive.", null, {
					hk: "1NHS5d"
				}))), i.a.createElement(P.a, {
					className: T.a.CrisisLinkArrow
				})), i.a.createElement(C.a, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/how-do-i-get-myself-support-after-helping-someone",
					target: "_blank",
					className: T.a.CrisisLink
				}, i.a.createElement(q, null, i.a.createElement(B.a, null)), i.a.createElement(M, null, i.a.createElement(W, null, O._("Get yourself support", null, {
					hk: "kTT0U"
				})), i.a.createElement(U, null, O._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
					hk: "37R4JZ"
				}))), i.a.createElement(P.a, {
					className: T.a.CrisisLinkArrow
				})))),
				V = n("./src/reddit/actions/reportFlow/index.ts"),
				H = n("./src/reddit/endpoints/post/report.ts");
			const K = {
					usernamesInputTitle: "Username",
					reasonTextToShow: "Someone is considering suicide or serious self-harm.",
					canSpecifyUsernames: !0,
					reasonAsParam: "someone-is-considering-suicide-or-serious-self-harm.",
					reasonText: "Someone is considering suicide or serious self-harm.",
					requestCrisisSupport: !0,
					oneUsername: !0
				},
				Q = x.a.div("CrisisPageWrapper", f.a),
				Z = Object(r.b)(null, (e, {
					timestamp: t
				}) => ({
					onReportPostOrComment: (n, s, i) => {
						e(Object(V.a)({
							id: n,
							reportFlowPayload: s,
							timestamp: t
						}, i))
					}
				}));
			class J extends i.a.Component {
				constructor(e) {
					super(e), this.onCrisisFlowSubmit = () => {
						const {
							props: e
						} = this;
						if (e.thingId) {
							const t = {
								rule: "self harm",
								kind: "siteRule"
							};
							e.onReportPostOrComment(e.thingId, t, K)
						} else {
							const t = {
								reason: K,
								usernames: [this.props.username]
							};
							e.fromUserProfile ? Object(H.c)(e.apiContext(), t, !1) : e.fromReportPage && e.iframed && Object(H.c)(e.apiContext(), t, !0)
						}
						e.postMessage && e.postMessage({
							type: "ctlSuccess"
						}), e.onSubmit && e.onSubmit(), this.setState({
							showThankYouPage: !0
						})
					}, this.state = {
						showThankYouPage: !1,
						requestProcessing: !1
					}
				}
				render() {
					const {
						state: e,
						props: t,
						onCrisisFlowSubmit: n
					} = this;
					return i.a.createElement(Q, null, e.showThankYouPage ? i.a.createElement(Y, {
						username: t.username
					}) : i.a.createElement(S, {
						username: t.username
					}), i.a.createElement(p, {
						onCrisisFlowSubmit: n,
						onCloseReportFlow: t.onCloseReportFlow,
						pending: e.requestProcessing,
						thankYouControls: e.showThankYouPage
					}))
				}
			}
			t.default = Object(a.b)(Z(J))
		},
		"./src/reddit/components/CrisisFlow/CrisisFooter/index.m.less": function(e, t, n) {
			e.exports = {
				CrisisFooter: "_37a3s3drhTgLh9pdl6-WdV",
				crisisFooter: "_37a3s3drhTgLh9pdl6-WdV",
				CrisisButton: "_1z3B1Qm-DlnvpQIjGbKG1-",
				crisisButton: "_1z3B1Qm-DlnvpQIjGbKG1-",
				loadingIcon: "yUcZw-e4qHTfpzRIqATwy"
			}
		},
		"./src/reddit/components/CrisisFlow/CrisisMainPage/index.m.less": function(e, t, n) {
			e.exports = {
				CrisisContent: "_1QY1yRoQf_tx16yAuk6NMY",
				crisisContent: "_1QY1yRoQf_tx16yAuk6NMY",
				CrisisImage: "_1fgwHz4v15LiHwaUCzThXy",
				crisisImage: "_1fgwHz4v15LiHwaUCzThXy"
			}
		},
		"./src/reddit/components/CrisisFlow/CrisisThankYouPage/index.m.less": function(e, t, n) {
			e.exports = {
				CrisisThankYouPage: "_688Hr2zBkJbQrSCsY4lPV",
				crisisThankYouPage: "_688Hr2zBkJbQrSCsY4lPV",
				CrisisTickImage: "_2rGRNzQwYEoq5Scmn1KYSR",
				crisisTickImage: "_2rGRNzQwYEoq5Scmn1KYSR",
				CrisisOtherActions: "_2EbzeOoJ3khfZZEBpLfRb3",
				crisisOtherActions: "_2EbzeOoJ3khfZZEBpLfRb3",
				CrisisOtherActionsTitle: "_1JbF6nzZoQI_yWeL_qWRvd",
				crisisOtherActionsTitle: "_1JbF6nzZoQI_yWeL_qWRvd",
				CrisisLink: "_3xGARx0FjK_Pev7m1SsChj",
				crisisLink: "_3xGARx0FjK_Pev7m1SsChj",
				CrisisLinkIconContainer: "_2MWAIsyjF-hlLauJ1Ngzo6",
				crisisLinkIconContainer: "_2MWAIsyjF-hlLauJ1Ngzo6",
				CrisisLinkText: "_3vNK9NiDscPdn6F0iPjVx9",
				crisisLinkText: "_3vNK9NiDscPdn6F0iPjVx9",
				CrisisLinkTitle: "_1uCD7ziCMwbTn7rJ9MY9VV",
				crisisLinkTitle: "_1uCD7ziCMwbTn7rJ9MY9VV",
				CrisisLinkDescription: "VXeC1Ri61ieOzZr9L6K_7",
				crisisLinkDescription: "VXeC1Ri61ieOzZr9L6K_7",
				CrisisLinkArrow: "hI3TA0IprEUWqsVjESu_z",
				crisisLinkArrow: "hI3TA0IprEUWqsVjESu_z"
			}
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "j", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/Button/index.m.less"),
				l = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, C;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(C || (C = {}));
			const h = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: s,
						iconPosition: a = p.C,
						isFullWidth: o = !1,
						isSquare: h = !1,
						children: _,
						className: w,
						kind: k = C.Button,
						priority: y = m.Primary,
						redditStyle: E,
						size: b = u.S,
						text: L,
						textClassName: v,
						...S
					} = e, P = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: s,
						isFullWidth: i,
						isSquare: a,
						priority: o,
						size: c,
						text: d
					}) => Object(r.a)(e, l.a.Button, o && l.a[o], c && l.a[c], {
						[l.a.isFullWidth]: i,
						[l.a.isIconOnly]: !!s && !d,
						[l.a.isSquare]: a,
						[l.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: w,
						children: _,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: o,
						isSquare: h,
						priority: y,
						redditStyle: E,
						size: b,
						text: L
					}), N = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: o,
						textClassName: c
					}) => !n && t ? i.a.createElement("span", {
						className: c
					}, t) : i.a.createElement(i.a.Fragment, null, n && (a === p.C || a === p.L) && i.a.createElement(n, {
						className: Object(r.a)(l.a.Icon, s, {
							[l.a.isLeft]: a === p.L
						}),
						isFilled: o === m.Primary
					}), t && i.a.createElement("span", {
						className: Object(r.a)(l.a.Text, c)
					}, t), e && e, n && a === p.R && i.a.createElement(n, {
						className: Object(r.a)(l.a.Icon, s, l.a.isRight),
						isFilled: o === m.Primary
					})))({
						children: _,
						text: L,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: y,
						textClassName: v
					});
					return k === C.InternalLink && (e => "to" in e)(S) ? i.a.createElement(x, c({}, d, S, {
						className: P
					}), N) : k === C.ExternalLink && (e => "href" in e)(S) ? i.a.createElement(g, c({}, d, S, {
						className: P
					}), N) : i.a.createElement(f, c({}, d, S, {
						className: P
					}), N)
				},
				x = e => i.a.createElement(a.a, e),
				g = e => i.a.createElement("a", e),
				f = e => i.a.createElement("button", e),
				_ = e => i.a.createElement(h, c({
					kind: C.ExternalLink,
					priority: m.Primary
				}, e)),
				w = e => i.a.createElement(h, c({
					kind: C.InternalLink,
					priority: m.Primary
				}, e)),
				k = e => i.a.createElement(h, c({
					kind: C.Button,
					priority: m.Primary
				}, e)),
				y = e => i.a.createElement(h, c({
					kind: C.ExternalLink,
					priority: m.Secondary
				}, e)),
				E = e => i.a.createElement(h, c({
					kind: C.InternalLink,
					priority: m.Secondary
				}, e)),
				b = e => i.a.createElement(h, c({
					kind: C.Button,
					priority: m.Secondary
				}, e)),
				L = e => i.a.createElement(h, c({
					kind: C.InternalLink,
					priority: m.Plain
				}, e)),
				v = e => i.a.createElement(h, c({
					kind: C.Button,
					priority: m.Plain
				}, e)),
				S = ({
					className: e,
					...t
				}) => i.a.createElement(h, c({
					kind: C.Button,
					priority: m.Primary,
					className: Object(r.a)(e, l.a.DangerButtonColors)
				}, t)),
				P = ({
					className: e,
					...t
				}) => i.a.createElement(h, c({
					kind: C.Button,
					className: Object(r.a)(e, l.a.GoldButtonColors)
				}, t)),
				N = ({
					className: e,
					...t
				}) => i.a.createElement(h, c({
					kind: C.Button,
					className: Object(r.a)(e, l.a.PremiumButtonColors)
				}, t)),
				B = ({
					className: e,
					...t
				}) => i.a.createElement(h, c({
					kind: C.Button,
					className: Object(r.a)(e, l.a.ChatButton)
				}, t)),
				R = ({
					className: e,
					...t
				}) => i.a.createElement(h, c({
					kind: C.Button,
					className: Object(r.a)(e, l.a.InlineTextButton)
				}, t)),
				j = ({
					className: e,
					...t
				}) => i.a.createElement(h, c({
					kind: C.Button,
					className: Object(r.a)(e, l.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.t = h
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/path/index.ts"),
				l = n("./src/reddit/controls/InternalLink/index.m.less"),
				c = n.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: n,
				replace: s,
				to: l,
				...u
			}) {
				return n ? i.a.createElement("span", {
					className: Object(a.a)(c.a.disabledLink, t)
				}, e) : ("string" == typeof l && (l = Object(o.b)(l)), i.a.createElement(r.a, d({
					className: t,
					to: l
				}, u), e))
			}
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Link/index.m.less"),
				r = n.n(i);
			t.a = s.a.a("link", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => i.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			}));
			var s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/helpers/reportPage/index.ts"),
				d = n("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(r.a)(e, {
				...d,
				variables: t
			});
			var m;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(m || (m = {}));
			const p = (e, t) => Object(i.a)(Object(a.a)(e, [o.a]), {
					method: s.jb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: C(t)
				}),
				C = e => {
					const t = {
							thing_id: e.id,
							api_type: "json",
							...e.timestamp && {
								live_stream_relative_report_time_sec: e.timestamp.toString()
							}
						},
						{
							reportFlowPayload: n
						} = e;
					switch (n.customText && (t.custom_text = n.customText), n.kind) {
						case m.Other:
							return {
								...t, reason: "other", other_reason: n.rule
							};
						case m.Rule:
							return {
								...t, reason: n.rule, rule_reason: n.rule
							};
						case m.SiteRule:
						case m.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: n.rule
							}
					}
				},
				h = (e, t, n) => Object(i.a)(Object(a.a)(e, [o.a]), {
					method: s.jb.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: x(t, n)
				}),
				x = (e, t) => {
					const n = {
						...Object(c.b)(e),
						api_type: "json"
					};
					return t && (n.from_help_desk = !0), n
				}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./src/reddit/models/RulesSequence/index.ts");
			const i = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				r = "(?:https?://)",
				a = `^${r}${i}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				o = `^${r}${i}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				l = `^${r}${i}/message/messages/(\\w+)(?:/.*)?`,
				c = `^${r}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				d = `^${r}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${r}${i}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				m = `(?:${o}|${a}|${l}|${c}|${d}|${u})`,
				p = `(?:(?:${r}?${i}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				C = `(?:(?:${r}?${i}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				h = e => {
					const t = new RegExp(a),
						n = new RegExp(o),
						s = new RegExp(l),
						i = new RegExp(u),
						r = new RegExp(c),
						m = new RegExp(d);
					let h, x, g;
					if (e.thingUrl) {
						const a = e.thingUrl.trim();
						if (t.test(a)) {
							const e = t.exec(a);
							e && e.length > 1 && (h = "t1_" + e[1])
						} else if (n.test(a) || i.test(a)) {
							const e = n.exec(a) || i.exec(a);
							e && e.length > 1 && (h = "t3_" + e[1])
						} else if (s.test(a)) {
							const e = s.exec(a);
							e && e.length > 1 && (h = "t4_" + e[1])
						} else if (m.test(a)) {
							const e = m.exec(a);
							e && e.length > 2 && (x = e[1], g = e[2])
						} else if (r.test(a)) {
							const e = r.exec(a);
							e && e.length > 1 && (x = e[1])
						}
					}
					const f = new RegExp(p),
						_ = new RegExp(C),
						w = [];
					let k;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (_.test(t)) {
							const e = _.exec(t);
							e && e.length > 1 && (k = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let a = 0; a < e.usernames.length; a++) {
							const t = e.usernames[a].trim();
							if (f.test(t)) {
								const e = f.exec(t);
								e && e.length > 1 && w.push(e[1])
							}
						}
					const {
						reason: y
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: y.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: x,
						modmail_msg_id: g,
						sr_name: k,
						thing_id: h,
						usernames: w.length ? w.join(",") : void 0
					}
				},
				x = (e, t) => {
					const n = new s.a;
					return g(n, e, t, 0), n
				},
				g = (e, t, n, s) => {
					for (let i = 0; i < t.length; i++) {
						const r = t[i];
						e.update(i, s);
						const a = e.getSequence().length;
						if (r.reasonAsParam === n) return;
						if (r.nextStepReasons && r.nextStepReasons.length && (g(e, r.nextStepReasons, n, s + 1), e.getSequence().length > a)) return;
						e.cut(s - 1)
					}
				}
		},
		"./src/reddit/icons/svgs/ArrowHeadsRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				width: "7",
				height: "12",
				viewBox: "0 0 7 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M0.21967 11.7803C-0.0732233 11.4874 -0.0732233 11.0126 0.21967 10.7197L4.68934 6.25L0.21967 1.78033C-0.0732233 1.48744 -0.0732233 1.01256 0.21967 0.71967C0.512563 0.426777 0.987437 0.426777 1.28033 0.71967L6.28033 5.71967C6.57322 6.01256 6.57322 6.48744 6.28033 6.78033L1.28033 11.7803C0.987437 12.0732 0.512563 12.0732 0.21967 11.7803Z",
				fill: "#D3D6DA"
			}))
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/icons/svgs/Person/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				width: "22",
				height: "24",
				viewBox: "0 0 22 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.6816 0C9.46749 0 8.3031 0.482306 7.44459 1.34082C6.58608 2.19932 6.10377 3.36371 6.10377 4.57783V7.08038C6.10377 8.29449 6.58608 9.45888 7.44459 10.3174C8.3031 11.1759 9.46749 11.6582 10.6816 11.6582C11.8957 11.6582 13.0601 11.1759 13.9186 10.3174C14.7771 9.45888 15.2594 8.29449 15.2594 7.08038V4.57783C15.2594 3.36371 14.7771 2.19933 13.9186 1.34082C13.0601 0.482306 11.8957 0 10.6816 0ZM8.73939 2.63562C9.2545 2.12052 9.95313 1.83113 10.6816 1.83113C11.4101 1.83113 12.1087 2.12052 12.6238 2.63562C13.1389 3.15073 13.4283 3.84936 13.4283 4.57783V7.08038C13.4283 7.80885 13.1389 8.50748 12.6238 9.02258C12.1087 9.53769 11.4101 9.82707 10.6816 9.82707C9.95313 9.82707 9.2545 9.53769 8.73939 9.02258C8.22429 8.50748 7.9349 7.80885 7.9349 7.08038V4.57783C7.9349 3.84936 8.22429 3.15073 8.73939 2.63562Z",
				fill: "#1A1A1B"
			}), i.a.createElement("path", {
				d: "M5.79858 13.6236C4.2607 13.6236 2.78581 14.2345 1.69837 15.322C0.610921 16.4094 0 17.8843 0 19.4222V23.0844C0 23.5901 0.409913 24 0.915566 24C1.42122 24 1.83113 23.5901 1.83113 23.0844V19.4222C1.83113 18.3699 2.24913 17.3608 2.99317 16.6168C3.73721 15.8727 4.74635 15.4547 5.79858 15.4547H15.5646C16.6169 15.4547 17.626 15.8727 18.37 16.6168C19.1141 17.3608 19.5321 18.3699 19.5321 19.4222V23.0844C19.5321 23.5901 19.942 24 20.4476 24C20.9533 24 21.3632 23.5901 21.3632 23.0844V19.4222C21.3632 17.8843 20.7523 16.4094 19.6648 15.322C18.5774 14.2345 17.1025 13.6236 15.5646 13.6236H5.79858Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/icons/svgs/TickCircled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				width: "64",
				height: "64",
				viewBox: "0 0 64 64",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "32",
				fill: "#46D160",
				fillOpacity: "0.2"
			}), i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M50.4967 21.6638L47.1391 18.3038C46.6879 17.8526 46.0783 17.6006 45.4423 17.6006C44.8039 17.6006 44.1943 17.8526 43.7455 18.3038L26.9599 35.087L20.2567 28.3838C19.3207 27.4454 17.8015 27.4454 16.8631 28.3838L13.5031 31.7438C12.5647 32.6822 12.5647 34.2014 13.5031 35.1374L25.2631 46.8974C25.7335 47.3654 26.3455 47.6006 26.9599 47.6006C27.5743 47.6006 28.1887 47.3654 28.6567 46.8974L50.4967 25.0574C51.4351 24.119 51.4351 22.6022 50.4967 21.6638Z",
				fill: "#46D160"
			}))
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const n = this.sequence.slice(0, t);
					n.push(e), this.sequence = n
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CrisisFlow-CrisisFlowPage.1551045c39ae067b86d8.js.map