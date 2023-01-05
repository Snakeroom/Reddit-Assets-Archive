// https://www.redditstatic.com/desktop2x/ChatOverlayReport.493368c7bd7a2099aa1e.js
// Retrieved at 1/5/2023, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatOverlayReport"], {
		"./src/chat/components/OverlayReport/CrisisFlow/CrisisFlowPage.m.less": function(e, t, s) {
			e.exports = {
				CrisisImageContainer: "_1jedP13tFPRbYsPxo0Nbb3",
				crisisImageContainer: "_1jedP13tFPRbYsPxo0Nbb3",
				CrisisTitle: "Dzz1fZ48sqTbgUkvuMv84",
				crisisTitle: "Dzz1fZ48sqTbgUkvuMv84",
				CrisisDescription: "_2SIWbVQuUgsUM-DlBO9xZf",
				crisisDescription: "_2SIWbVQuUgsUM-DlBO9xZf"
			}
		},
		"./src/chat/components/OverlayReport/CrisisFlow/CrisisFooter/index.m.less": function(e, t, s) {
			e.exports = {
				CrisisFooter: "_3Z3vbP1wWpHbWO9Ko3n22M",
				crisisFooter: "_3Z3vbP1wWpHbWO9Ko3n22M",
				CrisisButton: "pP4Lx3MhDiofmbwfuYS1E",
				crisisButton: "pP4Lx3MhDiofmbwfuYS1E",
				CrisisSubmitButton: "duisU_OiRQJnoxwLXudLY",
				crisisSubmitButton: "duisU_OiRQJnoxwLXudLY",
				loadingIcon: "mtJmm5XSiTh0xY63I1T13"
			}
		},
		"./src/chat/components/OverlayReport/CrisisFlow/CrisisMainPage/index.m.less": function(e, t, s) {
			e.exports = {
				CrisisContent: "Spgzxp_6aeYsWtIYEbC_e",
				crisisContent: "Spgzxp_6aeYsWtIYEbC_e",
				CrisisImage: "_3G9amWxY_igmo603ORUC-5",
				crisisImage: "_3G9amWxY_igmo603ORUC-5"
			}
		},
		"./src/chat/components/OverlayReport/CrisisFlow/CrisisThankYouPage/index.m.less": function(e, t, s) {
			e.exports = {
				CrisisThankYouPage: "_1BxouoKVNB49er01KYdWXo",
				crisisThankYouPage: "_1BxouoKVNB49er01KYdWXo",
				CrisisTickImage: "qe6v6uRSjnOgxZ72CA4e3",
				crisisTickImage: "qe6v6uRSjnOgxZ72CA4e3",
				CrisisOtherActions: "_2Q2h46fJEIxRF9-jMt0bMc",
				crisisOtherActions: "_2Q2h46fJEIxRF9-jMt0bMc",
				CrisisOtherActionsTitle: "_1EXzGHqccN-199-RcpXYKB",
				crisisOtherActionsTitle: "_1EXzGHqccN-199-RcpXYKB",
				CrisisLink: "_1Sa-TEzRj-VFV0_k270f5n",
				crisisLink: "_1Sa-TEzRj-VFV0_k270f5n",
				CrisisLinkIconContainer: "Tc89QjKjsGfM1LSKslou",
				crisisLinkIconContainer: "Tc89QjKjsGfM1LSKslou",
				CrisisLinkText: "_2X561KLZQ4SmehjLU4qneD",
				crisisLinkText: "_2X561KLZQ4SmehjLU4qneD",
				CrisisLinkTitle: "_3Gu-WXaXNep7dsrNeWW6z9",
				crisisLinkTitle: "_3Gu-WXaXNep7dsrNeWW6z9",
				CrisisLinkDescription: "_2tmRIQysjdGR-3809PgRir",
				crisisLinkDescription: "_2tmRIQysjdGR-3809PgRir",
				CrisisLinkArrow: "SFTZVQ4Xf6dmgZ8_M9Yp6",
				crisisLinkArrow: "SFTZVQ4Xf6dmgZ8_M9Yp6"
			}
		},
		"./src/chat/components/OverlayReport/FormBuilder/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "chat-components-OverlayReport-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~chat-components-OverlayReport-FormBuilder~reddit-components-FormBuilder"), s.e("chat-components-OverlayReport-FormBuilder")]).then(s.bind(null, "./src/chat/components/OverlayReport/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/chat/components/OverlayReport/FormBuilder/index.tsx"
				}
			})
		},
		"./src/chat/components/OverlayReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportLoaderWrapper: "_19m8sEzbvjItitsmTuQ8JP",
				reportLoaderWrapper: "_19m8sEzbvjItitsmTuQ8JP",
				LoadingIcon: "_3dey9NyTU-utAKmWvKM2o5",
				loadingIcon: "_3dey9NyTU-utAKmWvKM2o5"
			}
		},
		"./src/chat/components/OverlayReport/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/get.js"),
				i = s.n(n),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/reportFlow/index.ts"),
				C = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/contexts/ApiContext.tsx"),
				_ = s("./src/reddit/models/ReportFlow/index.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/chat/actions/tracking.ts"),
				R = s("./src/chat/actions/user.ts"),
				I = s("./src/chat/components/OverlayReport/CrisisFlow/CrisisFlowPage.m.less"),
				T = s.n(I),
				w = s("./src/chat/components/OverlayReport/CrisisFlow/CrisisMainPage/index.m.less"),
				g = s.n(w);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.div("CrisisContent", g.a), S = u.a.div("CrisisImageContainer", T.a), N = u.a.img("CrisisImage", g.a), L = u.a.h2("CrisisTitle", T.a), v = u.a.p("CrisisDescription", T.a);
			var F = e => l.a.createElement(b, null, l.a.createElement(S, null, l.a.createElement(N, {
				src: `${r.a.assetPath}/img/crisis-line-icon.png`
			})), l.a.createElement(L, null, A._("Would you like Reddit to reach out to {username} ?", [A._param("username", l.a.createElement("span", null, "u/", e.username))], {
				hk: "3RFVlj"
			})), l.a.createElement(v, null, A._("We’ve partnered with {=Crisis Text Line} to provide redditors with support from trained Crisis Counselors, and will reach out (confidentially) to let {username} know that there are people who are here for them.", [A._param("=Crisis Text Line", l.a.createElement("a", {
				href: "https://www.crisistextline.org/",
				target: "_blank",
				rel: "noopener noreferrer"
			}, A._("Crisis Text Line", null, {
				hk: "4ih1Mk"
			}))), A._param("username", l.a.createElement("strong", null, "u/", e.username))], {
				hk: "3eDxpt"
			})));
			var M = e => l.a.createElement("svg", {
				className: e.className,
				width: "7",
				height: "12",
				viewBox: "0 0 7 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M0.21967 11.7803C-0.0732233 11.4874 -0.0732233 11.0126 0.21967 10.7197L4.68934 6.25L0.21967 1.78033C-0.0732233 1.48744 -0.0732233 1.01256 0.21967 0.71967C0.512563 0.426777 0.987437 0.426777 1.28033 0.71967L6.28033 5.71967C6.57322 6.01256 6.57322 6.48744 6.28033 6.78033L1.28033 11.7803C0.987437 12.0732 0.512563 12.0732 0.21967 11.7803Z",
				fill: "#D3D6DA"
			}));
			var f = e => l.a.createElement("svg", {
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z",
				fill: "#1A1A1B"
			}));
			var k = e => l.a.createElement("svg", {
				className: e.className,
				width: "22",
				height: "24",
				viewBox: "0 0 22 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.6816 0C9.46749 0 8.3031 0.482306 7.44459 1.34082C6.58608 2.19932 6.10377 3.36371 6.10377 4.57783V7.08038C6.10377 8.29449 6.58608 9.45888 7.44459 10.3174C8.3031 11.1759 9.46749 11.6582 10.6816 11.6582C11.8957 11.6582 13.0601 11.1759 13.9186 10.3174C14.7771 9.45888 15.2594 8.29449 15.2594 7.08038V4.57783C15.2594 3.36371 14.7771 2.19933 13.9186 1.34082C13.0601 0.482306 11.8957 0 10.6816 0ZM8.73939 2.63562C9.2545 2.12052 9.95313 1.83113 10.6816 1.83113C11.4101 1.83113 12.1087 2.12052 12.6238 2.63562C13.1389 3.15073 13.4283 3.84936 13.4283 4.57783V7.08038C13.4283 7.80885 13.1389 8.50748 12.6238 9.02258C12.1087 9.53769 11.4101 9.82707 10.6816 9.82707C9.95313 9.82707 9.2545 9.53769 8.73939 9.02258C8.22429 8.50748 7.9349 7.80885 7.9349 7.08038V4.57783C7.9349 3.84936 8.22429 3.15073 8.73939 2.63562Z",
				fill: "#1A1A1B"
			}), l.a.createElement("path", {
				d: "M5.79858 13.6236C4.2607 13.6236 2.78581 14.2345 1.69837 15.322C0.610921 16.4094 0 17.8843 0 19.4222V23.0844C0 23.5901 0.409913 24 0.915566 24C1.42122 24 1.83113 23.5901 1.83113 23.0844V19.4222C1.83113 18.3699 2.24913 17.3608 2.99317 16.6168C3.73721 15.8727 4.74635 15.4547 5.79858 15.4547H15.5646C16.6169 15.4547 17.626 15.8727 18.37 16.6168C19.1141 17.3608 19.5321 18.3699 19.5321 19.4222V23.0844C19.5321 23.5901 19.942 24 20.4476 24C20.9533 24 21.3632 23.5901 21.3632 23.0844V19.4222C21.3632 17.8843 20.7523 16.4094 19.6648 15.322C18.5774 14.2345 17.1025 13.6236 15.5646 13.6236H5.79858Z",
				fill: "#1A1A1B"
			}));
			var P = e => l.a.createElement("svg", {
					className: e.className,
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, l.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "32",
					fill: "#46D160",
					"fill-opacity": "0.2"
				}), l.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M50.4967 21.6638L47.1391 18.3038C46.6879 17.8526 46.0783 17.6006 45.4423 17.6006C44.8039 17.6006 44.1943 17.8526 43.7455 18.3038L26.9599 35.087L20.2567 28.3838C19.3207 27.4454 17.8015 27.4454 16.8631 28.3838L13.5031 31.7438C12.5647 32.6822 12.5647 34.2014 13.5031 35.1374L25.2631 46.8974C25.7335 47.3654 26.3455 47.6006 26.9599 47.6006C27.5743 47.6006 28.1887 47.3654 28.6567 46.8974L50.4967 25.0574C51.4351 24.119 51.4351 22.6022 50.4967 21.6638Z",
					fill: "#46D160"
				})),
				x = s("./src/chat/components/OverlayReport/CrisisFlow/CrisisThankYouPage/index.m.less"),
				y = s.n(x);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = u.a.div("CrisisImageContainer", T.a), D = u.a.h2("CrisisTitle", T.a), H = u.a.p("CrisisDescription", T.a), U = u.a.div("CrisisOtherActions", y.a), Y = u.a.h4("CrisisOtherActionsTitle", y.a), V = u.a.div("CrisisLinkIconContainer", y.a), G = u.a.div("CrisisLinkText", y.a), W = u.a.h3("CrisisLinkTitle", y.a), K = u.a.p("CrisisLinkDescription", y.a);
			var Z = e => l.a.createElement("div", {
				className: y.a.CrisisThankYouPage
			}, l.a.createElement(j, null, l.a.createElement(P, {
				className: y.a.CrisisTickImage
			})), l.a.createElement(D, null, B._("Thanks for caring about your fellow redditor", null, {
				hk: "1ePh84"
			})), l.a.createElement(H, null, B._("We’ve reached out to {username} . By letting us know, you’ve helped connect them to people who are there to listen and provide support.", [B._param("username", l.a.createElement("span", null, "u/", e.username))], {
				hk: "3X1mGY"
			})), l.a.createElement(U, null, l.a.createElement(Y, null, B._("Other things you can do", null, {
				hk: "4oCunD"
			})), l.a.createElement("a", {
				href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
				target: "_blank",
				rel: "noopener noreferrer",
				className: y.a.CrisisLink
			}, l.a.createElement(V, null, l.a.createElement(f, null)), l.a.createElement(G, null, l.a.createElement(W, null, B._("Learn how to help someone in crisis", null, {
				hk: "3HohFx"
			})), l.a.createElement(K, null, B._("Get advice on what you can say and how to be supportive.", null, {
				hk: "1NHS5d"
			}))), l.a.createElement(M, {
				className: y.a.CrisisLinkArrow
			})), l.a.createElement("a", {
				href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/how-do-i-get-myself-support-after-helping-someone",
				target: "_blank",
				rel: "noopener noreferrer",
				className: y.a.CrisisLink
			}, l.a.createElement(V, null, l.a.createElement(k, null)), l.a.createElement(G, null, l.a.createElement(W, null, B._("Get yourself support", null, {
				hk: "kTT0U"
			})), l.a.createElement(K, null, B._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
				hk: "37R4JZ"
			}))), l.a.createElement(M, {
				className: y.a.CrisisLinkArrow
			}))));
			class X extends l.a.Component {
				render() {
					const {
						props: e
					} = this;
					return l.a.createElement(a.Fragment, null, e.ctlSubmitted ? l.a.createElement(Z, {
						username: e.username
					}) : l.a.createElement(F, {
						username: e.username
					}))
				}
			}
			var Q = X,
				z = s("./src/chat/components/OverlayReport/CrisisFlow/CrisisFooter/index.m.less"),
				q = s.n(z);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function $(e) {
				const {
					thankYouControls: t,
					onCloseReportFlow: s,
					onCrisisFlowSubmit: r
				} = e;
				return l.a.createElement("div", {
					className: q.a.CrisisFooter
				}, t ? null : l.a.createElement("a", {
					className: q.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					rel: "noopener noreferrer"
				}, J._("Other Options", null, {
					hk: "1RadlV"
				})), l.a.createElement("button", {
					className: q.a.CrisisSubmitButton,
					"data-redditstyle": !0,
					onClick: t ? s : r
				}, t ? J._("Ok", null, {
					hk: "3Pp8M4"
				}) : J._("Yes", null, {
					hk: "12gtn"
				})))
			}
			var ee = s("./src/chat/components/OverlayReport/FormBuilder/async.tsx"),
				te = s("./src/chat/endpoints/messages/index.tsx"),
				se = s("./src/lib/makeGqlRequest/index.ts"),
				re = s("./src/redditGQL/operations/ReportForm.json");
			var oe = s("./src/chat/routes/chat.ts"),
				ne = s("./src/chat/selectors/channels.ts"),
				ie = s("./src/chat/selectors/messages.ts"),
				ae = s("./src/chat/selectors/theme.ts"),
				le = s("./src/chat/selectors/user.ts"),
				ce = s("./src/chat/components/OverlayReport/index.m.less"),
				de = s.n(ce);
			const me = u.a.div("ReportLoaderWrapper", de.a),
				ue = u.a.img("LoadingIcon", de.a),
				pe = "2.0",
				Ce = Object(m.c)({
					user: (e, t) => t.attr === oe.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === oe.a.Invite || t.attr === oe.a.Message ? Object(ie.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(ne.F)(e),
					currentUserId: (e, t) => Object(le.a)(e),
					container: e => e && e.container && e.container.size,
					isNightMode: e => Object(ae.b)(e)
				}),
				he = Object(c.b)(Ce, (e, t) => {
					let {
						timestamp: s
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(p.b)())
						},
						onChannelBlock: t => {
							e(R.m(t)), e(O.ab(t)), e(O.bb(t))
						},
						showFailToast: () => e(Object(C.f)({
							kind: E.b.Error,
							text: o.fbt._("Something went wrong!", null, {
								hk: "ysFuv"
							})
						})),
						onCancel: () => e(Object(d.a)()),
						submitReportMessage: (t, s) => e(Object(O.db)(t, s))
					}
				}),
				_e = async (e, t, s) => {
					var r;
					const o = await ((e, t) => {
						let {
							itemId: s,
							formVersion: r,
							hostAppName: o
						} = t;
						return Object(se.a)(e, {
							...re,
							variables: {
								itemId: s,
								hostAppName: o,
								formVersion: r
							}
						})
					})(e, {
						itemId: t,
						formVersion: s
					});
					if (o && o.ok) {
						const e = null === (r = o.body.data.reportForm) || void 0 === r ? void 0 : r.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Ee extends l.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCancel) return this.props.onCancel()
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: s,
								showFailToast: r,
								message: o,
								submitReportMessage: n
							}
						} = this;
						if (!o || !o.sender) return;
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: a,
							ruleType: l
						} = e, c = {
							fromHelpDesk: !1,
							senderRedditorId: o.sender.userId,
							sendbirdId: String(o.messageId),
							channelUrl: o.channelSendbirdUrl
						};
						"site" === l && (c.siteRule = i()(t, a.ref).value || i()(t, a.ref));
						(await (() => Object(te.c)(s(), {
							input: c
						}))()).ok || r(), c.siteRule && n(o.messageId, c.siteRule)
					}, this.onCrisisFlowSubmit = async () => {
						const {
							props: {
								gqlContext: e,
								showFailToast: t,
								message: s,
								submitReportMessage: r
							}
						} = this;
						if (!s || !s.sender) return;
						const o = {
							fromHelpDesk: !1,
							senderRedditorId: s.sender.userId,
							sendbirdId: String(s.messageId),
							channelUrl: s.channelSendbirdUrl,
							siteRule: _.b.SELF_HARM
						};
						this.setState({
							showCrisisFlowThankYouPage: !0
						}), (await (() => Object(te.c)(e(), {
							input: o
						}))()).ok || t(), r(s.messageId, _.b.SELF_HARM)
					}, this.state = {
						ctlFlowOpened: !1,
						hasLoaded: !1,
						showCrisisFlowThankYouPage: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					if (!this.props.message) return;
					const e = `CHAT_${this.props.message.channelId}_${this.props.message.messageId}`;
					_e(this.props.gqlContext(), e, pe).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					var e, t;
					const {
						props: {
							message: s,
							onChannelBlock: n,
							isNightMode: i
						},
						state: {
							formComponent: a,
							formState: c,
							ctlFlowOpened: d,
							hasLoaded: m,
							showCrisisFlowThankYouPage: u
						}
					} = this, p = null === (e = null == s ? void 0 : s.sender) || void 0 === e ? void 0 : e.nickname, C = null === (t = null == s ? void 0 : s.sender) || void 0 === t ? void 0 : t.userId;
					return d && p ? l.a.createElement(l.a.Fragment, null, l.a.createElement(Q, {
						username: p,
						ctlSubmitted: u
					}), l.a.createElement($, {
						onCrisisFlowSubmit: this.onCrisisFlowSubmit,
						onCloseReportFlow: this.handleReportFlowClose,
						thankYouControls: u
					})) : a && c && m && C ? l.a.createElement(ee.a, {
						formComponent: a,
						formState: c,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: o.fbt._("Submit a Report", null, {
							hk: "4dDhsH"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => n(C),
						variant: this.props.container
					}) : l.a.createElement(me, null, l.a.createElement(ue, {
						src: i ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: o.fbt._("Loading", null, {
							hk: "2PZiVz"
						})
					}))
				}
			}
			t.default = Object(h.b)(he(Ee))
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/loadableAction/index.ts");
			const o = Object(r.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(r.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			var r, o, n;
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(r || (r = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(o || (o = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(n || (n = {}));
			const i = new Set(Object.values(n))
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatOverlayReport.493368c7bd7a2099aa1e.js.map