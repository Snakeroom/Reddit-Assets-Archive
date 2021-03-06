// https://www.redditstatic.com/desktop2x/CrisisFlow.d10957f67f2b707f489e.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrisisFlow", "reddit-components-CrisisFlow-CrisisFlowPage"], {
		"./src/reddit/components/CrisisFlow/CrisisFlowPage.m.less": function(e, s, t) {
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
		"./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var i = t("./node_modules/react/index.js"),
				r = t.n(i),
				n = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/reddit/contexts/ApiContext.tsx"),
				a = t("./src/reddit/controls/Button/index.tsx"),
				l = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = t("./src/reddit/components/CrisisFlow/CrisisFooter/index.m.less"),
				d = t.n(c);
			const {
				fbt: C
			} = t("./node_modules/fbt/lib/FbtPublic.js"), u = 10;

			function m(e) {
				const {
					thankYouControls: s,
					onCloseReportFlow: t,
					onCrisisFlowSubmit: i
				} = e;
				return r.a.createElement("div", {
					className: d.a.CrisisFooter
				}, s ? null : r.a.createElement(a.m, {
					className: d.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank"
				}, C._("Other Options", null, {
					hk: "1RadlV"
				})), r.a.createElement(a.i, {
					className: d.a.CrisisButton,
					"data-redditstyle": !0,
					onClick: s ? t : i
				}, e.pending ? r.a.createElement(l.a, {
					className: d.a.loadingIcon,
					sizePx: u
				}) : s ? C._("Ok", null, {
					hk: "3Pp8M4"
				}) : C._("Yes", null, {
					hk: "12gtn"
				})))
			}
			var p = t("./src/reddit/controls/Link/index.tsx"),
				h = t("./src/config.ts"),
				w = t("./src/lib/lessComponent.tsx"),
				g = t("./src/reddit/components/CrisisFlow/CrisisFlowPage.m.less"),
				x = t.n(g),
				f = t("./src/reddit/components/CrisisFlow/CrisisMainPage/index.m.less"),
				_ = t.n(f);
			const {
				fbt: E
			} = t("./node_modules/fbt/lib/FbtPublic.js"), k = w.a.div("CrisisContent", _.a), v = w.a.div("CrisisImageContainer", x.a), b = w.a.img("CrisisImage", _.a), L = w.a.h2("CrisisTitle", x.a), F = w.a.p("CrisisDescription", x.a);
			var P = e => r.a.createElement(k, null, r.a.createElement(v, null, r.a.createElement(b, {
					src: "".concat(h.a.assetPath, "/img/crisis-line-icon.png")
				})), r.a.createElement(L, null, E._("Would you like Reddit to reach out to {username} ?", [E._param("username", r.a.createElement("span", null, "u/", e.username))], {
					hk: "3RFVlj"
				})), r.a.createElement(F, null, E._("We’ve partnered with {ctl} to provide redditors with support from trained Crisis Counselors, and will reach out (confidentially) to let {username} know that there are people who are here for them.", [E._param("ctl", r.a.createElement(p.a, {
					href: "https://www.crisistextline.org/",
					target: "_blank"
				}, "Crisis Text Line")), E._param("username", r.a.createElement("strong", null, "u/", e.username))], {
					hk: "srFNa"
				}))),
				T = t("./src/reddit/icons/svgs/ArrowHeadsRight/index.tsx"),
				R = t("./src/reddit/icons/svgs/ChatBubbles/index.tsx"),
				y = t("./src/reddit/icons/svgs/Person/index.tsx"),
				A = t("./src/reddit/icons/svgs/TickCircled/index.tsx"),
				D = t("./src/reddit/components/CrisisFlow/CrisisThankYouPage/index.m.less"),
				j = t.n(D);
			const {
				fbt: I
			} = t("./node_modules/fbt/lib/FbtPublic.js"), O = w.a.div("CrisisImageContainer", x.a), N = w.a.h2("CrisisTitle", x.a), V = w.a.p("CrisisDescription", x.a), z = w.a.div("CrisisOtherActions", j.a), S = w.a.h4("CrisisOtherActionsTitle", j.a), H = w.a.div("CrisisLinkIconContainer", j.a), Y = w.a.div("CrisisLinkText", j.a), M = w.a.h3("CrisisLinkTitle", j.a), W = w.a.p("CrisisLinkDescription", j.a);
			var B = e => r.a.createElement("div", {
					className: j.a.CrisisThankYouPage
				}, r.a.createElement(O, null, r.a.createElement(A.a, {
					className: j.a.CrisisTickImage
				})), r.a.createElement(N, null, I._("Thanks for caring about your fellow redditor", null, {
					hk: "1ePh84"
				})), r.a.createElement(V, null, I._("We’ve reached out to {username} . By letting us know, you’ve helped connect them to people who are there to listen and provide support.", [I._param("username", r.a.createElement("span", null, "u/", e.username))], {
					hk: "3X1mGY"
				})), r.a.createElement(z, null, r.a.createElement(S, null, I._("Other things you can do", null, {
					hk: "4oCunD"
				})), r.a.createElement(p.a, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					className: j.a.CrisisLink
				}, r.a.createElement(H, null, r.a.createElement(R.a, null)), r.a.createElement(Y, null, r.a.createElement(M, null, I._("Learn how to help someone in crisis", null, {
					hk: "3HohFx"
				})), r.a.createElement(W, null, I._("Get advice on what you can say and how to be supportive.", null, {
					hk: "1NHS5d"
				}))), r.a.createElement(T.a, {
					className: j.a.CrisisLinkArrow
				})), r.a.createElement(p.a, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/how-do-i-get-myself-support-after-helping-someone",
					target: "_blank",
					className: j.a.CrisisLink
				}, r.a.createElement(H, null, r.a.createElement(y.a, null)), r.a.createElement(Y, null, r.a.createElement(M, null, I._("Get yourself support", null, {
					hk: "kTT0U"
				})), r.a.createElement(W, null, I._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
					hk: "37R4JZ"
				}))), r.a.createElement(T.a, {
					className: j.a.CrisisLinkArrow
				})))),
				G = t("./src/reddit/actions/reportFlow.ts"),
				K = t("./src/reddit/endpoints/post/index.tsx");
			const Z = {
					usernamesInputTitle: "Username",
					reasonTextToShow: "Someone is considering suicide or serious self-harm.",
					canSpecifyUsernames: !0,
					reasonAsParam: "someone-is-considering-suicide-or-serious-self-harm.",
					reasonText: "Someone is considering suicide or serious self-harm.",
					requestCrisisSupport: !0,
					oneUsername: !0
				},
				q = w.a.div("CrisisPageWrapper", x.a),
				U = Object(n.b)(null, (e, s) => {
					let {
						timestamp: t
					} = s;
					return {
						onReportPostOrComment: (s, i, r) => {
							e(Object(G.h)({
								id: s,
								reportFlowPayload: i,
								timestamp: t
							}, r))
						}
					}
				});
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.onCrisisFlowSubmit = () => {
						const {
							props: e
						} = this;
						if (e.thingId) {
							const s = {
								rule: "self harm",
								kind: "siteRule"
							};
							e.onReportPostOrComment(e.thingId, s, Z)
						} else {
							const s = {
								reason: Z,
								usernames: [this.props.username]
							};
							e.fromUserProfile ? Object(K.o)(e.apiContext(), s, !1) : e.fromReportPage && e.iframed && Object(K.o)(e.apiContext(), s, !0)
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
						props: s,
						onCrisisFlowSubmit: t
					} = this;
					return r.a.createElement(q, null, e.showThankYouPage ? r.a.createElement(B, {
						username: s.username
					}) : r.a.createElement(P, {
						username: s.username
					}), r.a.createElement(m, {
						onCrisisFlowSubmit: t,
						onCloseReportFlow: s.onCloseReportFlow,
						pending: e.requestProcessing,
						thankYouControls: e.showThankYouPage
					}))
				}
			}
			s.default = Object(o.b)(U(Q))
		},
		"./src/reddit/components/CrisisFlow/CrisisFooter/index.m.less": function(e, s, t) {
			e.exports = {
				CrisisFooter: "_37a3s3drhTgLh9pdl6-WdV",
				crisisFooter: "_37a3s3drhTgLh9pdl6-WdV",
				CrisisButton: "_1z3B1Qm-DlnvpQIjGbKG1-",
				crisisButton: "_1z3B1Qm-DlnvpQIjGbKG1-",
				loadingIcon: "yUcZw-e4qHTfpzRIqATwy"
			}
		},
		"./src/reddit/components/CrisisFlow/CrisisMainPage/index.m.less": function(e, s, t) {
			e.exports = {
				CrisisContent: "_1QY1yRoQf_tx16yAuk6NMY",
				crisisContent: "_1QY1yRoQf_tx16yAuk6NMY",
				CrisisImage: "_1fgwHz4v15LiHwaUCzThXy",
				crisisImage: "_1fgwHz4v15LiHwaUCzThXy"
			}
		},
		"./src/reddit/components/CrisisFlow/CrisisThankYouPage/index.m.less": function(e, s, t) {
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
		"./src/reddit/components/CrisisFlow/_CrisisFlow.m.less": function(e, s, t) {
			e.exports = {
				Wrapper: "_26WybLHECnYPDgxRHgyjb5",
				wrapper: "_26WybLHECnYPDgxRHgyjb5",
				Component: "_3ewQ4qGp3uD69DWsgwx2rf",
				component: "_3ewQ4qGp3uD69DWsgwx2rf",
				CloseWrapper: "fSghm8X6VAASE0rdNsHuu",
				closeWrapper: "fSghm8X6VAASE0rdNsHuu",
				Close: "_3uL4G0VfRGDb9CgwKeHmT0",
				close: "_3uL4G0VfRGDb9CgwKeHmT0"
			}
		},
		"./src/reddit/components/CrisisFlow/_CrisisFlow.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var i = t("./node_modules/react/index.js"),
				r = t.n(i),
				n = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				a = t("./src/reddit/contexts/ApiContext.tsx"),
				l = t("./src/higherOrderComponents/asModal/index.tsx"),
				c = t("./src/lib/lessComponent.tsx"),
				d = t("./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"),
				C = t("./src/reddit/icons/svgs/Close/index.tsx"),
				u = t("./src/reddit/components/CrisisFlow/_CrisisFlow.m.less"),
				m = t.n(u);
			const p = c.a.div("Wrapper", m.a),
				h = c.a.div("CloseWrapper", m.a),
				w = c.a.wrapped(C.a, "Close", m.a),
				g = Object(o.c)({
					reportedPending: e => e.reportFlow.api.pending,
					reportedSuccess: e => e.reportFlow.api.success
				}),
				x = Object(n.b)(g);
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.props.onCloseCrisisModal()
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return r.a.createElement(p, null, r.a.createElement(h, {
						onClick: this.props.onCloseCrisisModal
					}, r.a.createElement(w, null)), r.a.createElement(d.default, {
						onCloseReportFlow: this.props.onCloseCrisisModal,
						username: this.props.username,
						fromUserProfile: this.props.fromUserProfile,
						fromReportPage: this.props.fromReportPage,
						onSubmit: this.props.onSubmit
					}))
				}
			}
			const _ = Object(a.b)(x(f));
			s.default = c.a.wrapped(Object(l.a)(_), "Component", m.a)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return a
			})), t.d(s, "b", (function() {
				return l
			}));
			var i = t("./node_modules/react/index.js"),
				r = t.n(i);

			function n() {
				return (n = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				a = Object(i.createContext)(o);

			function l(e) {
				return s => r.a.createElement(a.Consumer, null, t => {
					let {
						apiContext: i,
						gqlContext: o
					} = t;
					return r.a.createElement(e, n({
						apiContext: i,
						gqlContext: o
					}, s))
				})
			}
		},
		"./src/reddit/controls/Link/index.m.less": function(e, s, t) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, s, t) {
			"use strict";
			var i = t("./src/lib/lessComponent.tsx"),
				r = t("./src/reddit/controls/Link/index.m.less"),
				n = t.n(r);
			s.a = i.a.a("link", n.a)
		},
		"./src/reddit/icons/svgs/ArrowHeadsRight/index.tsx": function(e, s, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				r = t.n(i);
			s.a = e => r.a.createElement("svg", {
				className: e.className,
				width: "7",
				height: "12",
				viewBox: "0 0 7 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M0.21967 11.7803C-0.0732233 11.4874 -0.0732233 11.0126 0.21967 10.7197L4.68934 6.25L0.21967 1.78033C-0.0732233 1.48744 -0.0732233 1.01256 0.21967 0.71967C0.512563 0.426777 0.987437 0.426777 1.28033 0.71967L6.28033 5.71967C6.57322 6.01256 6.57322 6.48744 6.28033 6.78033L1.28033 11.7803C0.987437 12.0732 0.512563 12.0732 0.21967 11.7803Z",
				fill: "#D3D6DA"
			}))
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, s, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				r = t.n(i);
			s.a = e => r.a.createElement("svg", {
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/icons/svgs/Person/index.tsx": function(e, s, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				r = t.n(i);
			s.a = e => r.a.createElement("svg", {
				className: e.className,
				width: "22",
				height: "24",
				viewBox: "0 0 22 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.6816 0C9.46749 0 8.3031 0.482306 7.44459 1.34082C6.58608 2.19932 6.10377 3.36371 6.10377 4.57783V7.08038C6.10377 8.29449 6.58608 9.45888 7.44459 10.3174C8.3031 11.1759 9.46749 11.6582 10.6816 11.6582C11.8957 11.6582 13.0601 11.1759 13.9186 10.3174C14.7771 9.45888 15.2594 8.29449 15.2594 7.08038V4.57783C15.2594 3.36371 14.7771 2.19933 13.9186 1.34082C13.0601 0.482306 11.8957 0 10.6816 0ZM8.73939 2.63562C9.2545 2.12052 9.95313 1.83113 10.6816 1.83113C11.4101 1.83113 12.1087 2.12052 12.6238 2.63562C13.1389 3.15073 13.4283 3.84936 13.4283 4.57783V7.08038C13.4283 7.80885 13.1389 8.50748 12.6238 9.02258C12.1087 9.53769 11.4101 9.82707 10.6816 9.82707C9.95313 9.82707 9.2545 9.53769 8.73939 9.02258C8.22429 8.50748 7.9349 7.80885 7.9349 7.08038V4.57783C7.9349 3.84936 8.22429 3.15073 8.73939 2.63562Z",
				fill: "#1A1A1B"
			}), r.a.createElement("path", {
				d: "M5.79858 13.6236C4.2607 13.6236 2.78581 14.2345 1.69837 15.322C0.610921 16.4094 0 17.8843 0 19.4222V23.0844C0 23.5901 0.409913 24 0.915566 24C1.42122 24 1.83113 23.5901 1.83113 23.0844V19.4222C1.83113 18.3699 2.24913 17.3608 2.99317 16.6168C3.73721 15.8727 4.74635 15.4547 5.79858 15.4547H15.5646C16.6169 15.4547 17.626 15.8727 18.37 16.6168C19.1141 17.3608 19.5321 18.3699 19.5321 19.4222V23.0844C19.5321 23.5901 19.942 24 20.4476 24C20.9533 24 21.3632 23.5901 21.3632 23.0844V19.4222C21.3632 17.8843 20.7523 16.4094 19.6648 15.322C18.5774 14.2345 17.1025 13.6236 15.5646 13.6236H5.79858Z",
				fill: "#1A1A1B"
			}))
		},
		"./src/reddit/icons/svgs/TickCircled/index.tsx": function(e, s, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				r = t.n(i);
			s.a = e => r.a.createElement("svg", {
				className: e.className,
				width: "64",
				height: "64",
				viewBox: "0 0 64 64",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("circle", {
				cx: "32",
				cy: "32",
				r: "32",
				fill: "#46D160",
				fillOpacity: "0.2"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M50.4967 21.6638L47.1391 18.3038C46.6879 17.8526 46.0783 17.6006 45.4423 17.6006C44.8039 17.6006 44.1943 17.8526 43.7455 18.3038L26.9599 35.087L20.2567 28.3838C19.3207 27.4454 17.8015 27.4454 16.8631 28.3838L13.5031 31.7438C12.5647 32.6822 12.5647 34.2014 13.5031 35.1374L25.2631 46.8974C25.7335 47.3654 26.3455 47.6006 26.9599 47.6006C27.5743 47.6006 28.1887 47.3654 28.6567 46.8974L50.4967 25.0574C51.4351 24.119 51.4351 22.6022 50.4967 21.6638Z",
				fill: "#46D160"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrisisFlow.d10957f67f2b707f489e.js.map