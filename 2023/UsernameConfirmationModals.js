// https://www.redditstatic.com/desktop2x/UsernameConfirmationModals.27ae64f876fb90bb99a8.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UsernameConfirmationModals"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(c);
			t.a = r.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: r
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!r
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", i.a)
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(o.a, r({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M16.375 10A6.375 6.375 0 1 1 10 3.625h3.274L11.6 5.02l.8.96 3-2.5a.625.625 0 0 0 0-.96l-3-2.5-.8.96 1.674 1.4H10A7.625 7.625 0 1 0 17.625 10Zm-2.351-7L14 3.02v-.04Z"
			}))
		},
		"./src/reddit/components/ChangeUsernameTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2-ldLIsQN5O_ifhbTuAc_g",
				closeWrapper: "_2rTvRcuKpM60TWFtmch-9c",
				container: "_14TDRVDZJj2YqAP-N0a4kj",
				topLine: "k_Oo03XySnmf-UMMOirS-",
				title: "_3pcdqdRWruf7eepiLXw4CB",
				username: "_1G1CITYgxpC6TIO7TGwhG3",
				usernamePrefix: "_1Tq29ay6ogsCeK60Ouhv_q",
				buttonWrapper: "lvHFLjGg76LoUfNXv4eik",
				commonBtn: "_2c8uIH6hCLT9iEVO5N8-9o",
				primaryBtn: "qUwq87ZWjStAxoxwoPOJA",
				secondaryBtn: "MnLwM5PL1ET2BmK5lLIvR"
			}
		},
		"./src/reddit/components/EmailCollection/Input/index.m.less": function(e, t, n) {
			e.exports = {
				container: "M73o_fEhhOMc2JuxLwwPR",
				valid: "_3dfVIk-FM3_3QxLpXlw4Ax",
				input: "_203UbdiXH6Cj6YZENbPam9",
				icon: "_1vHLOIwSJKsFawBZraDyzT",
				invalid: "_2WganpuBTSPhSySiCLFd_j",
				error: "_3NWIeF4tDMa1pNRs_ZFVE5",
				success: "_1TX1trRHZhQtSbH6eCqoeE"
			}
		},
		"./src/reddit/components/EmailCollection/Input/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var a, s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				i = n("./src/reddit/icons/svgs/Warning/index.tsx"),
				l = n("./src/reddit/components/EmailCollection/Input/index.m.less"),
				d = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(a || (a = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: n,
					successMessage: s,
					validityState: l,
					...u
				} = e, p = l === a.Valid, b = l === a.Invalid;
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, p && d.a.valid, b && d.a.invalid, t)
				}, o.a.createElement("input", m({}, u, {
					className: d.a.input
				})), p && o.a.createElement("div", {
					className: d.a.icon
				}, o.a.createElement(c.a, null)), b && o.a.createElement("div", {
					className: d.a.icon
				}, o.a.createElement(i.a, null)), b && n && o.a.createElement("p", {
					className: d.a.error
				}, n), p && s && o.a.createElement("p", {
					className: d.a.success
				}, s))
			}
		},
		"./src/reddit/components/Onboarding/UsernameConfirmationModals/modalSwitcher.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/replaceHistory.ts"),
				m = n("./src/reddit/actions/changeUsername.ts"),
				u = n("./src/reddit/actions/interceptedAction.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/lib/classNames/index.ts"),
				f = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				g = n("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Link/index.tsx"),
				E = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				N = n("./src/reddit/components/Onboarding/UsernameConfirmationModals/index.m.less"),
				v = n.n(N);
			const x = Object(O.b)("help_fill"),
				j = e => {
					let {
						isResponsive: t,
						onPrimaryButtonClick: n,
						onSecondaryButtonClick: r,
						onView: c,
						username: i
					} = e;
					return Object(s.useEffect)(c, []), o.a.createElement(g.a, {
						bodyClassName: v.a.confirmModalBody,
						className: Object(h.a)(v.a.confirmContainer, {
							[v.a.mResponsive]: t
						}),
						description: a.fbt._("If you decide to keep it, this will be your username forever.", null, {
							hk: "1BEFK3"
						}),
						descriptionClassName: v.a.confirmModalDescription,
						headerClassName: v.a.confirmModalHeader,
						title: a.fbt._("Before continuing, confirm you want to keep this username", null, {
							hk: "1VTCiF"
						}),
						titleClassName: v.a.confirmModalTitle
					}, o.a.createElement("div", {
						className: v.a.usernameWrapper
					}, o.a.createElement("span", null, "u/", i)), o.a.createElement("div", {
						className: Object(h.a)(v.a.buttonWrapper)
					}, o.a.createElement(C.a, {
						className: Object(h.a)(v.a.commonBtn, v.a.primaryBtn),
						kind: C.b.Button,
						onClick: n,
						priority: C.c.Primary
					}, B()), o.a.createElement(C.a, {
						className: Object(h.a)(v.a.commonBtn, v.a.secondaryBtn),
						kind: C.b.Button,
						onClick: r,
						priority: C.c.Plain
					}, M())))
				},
				k = e => {
					let {
						isResponsive: t,
						isSaving: n,
						onPrimaryButtonClick: r,
						onSecondaryButtonClick: c,
						onView: i,
						username: l
					} = e;
					return Object(s.useEffect)(i, []), o.a.createElement(g.a, {
						bodyClassName: v.a.confirmModalBody,
						className: Object(h.a)(v.a.confirmContainer, {
							[v.a.mResponsive]: t
						}),
						description: a.fbt._("This will be your username forever. So be sure there's no turning back after this!", null, {
							hk: "41pNxS"
						}),
						descriptionClassName: v.a.confirmModalDescription,
						headerClassName: v.a.confirmModalHeader,
						title: a.fbt._("Keep {username}?", [a.fbt._param("username", l)], {
							hk: "1aYccZ"
						}),
						titleClassName: v.a.confirmModalTitle
					}, o.a.createElement("div", {
						className: Object(h.a)(v.a.buttonWrapper)
					}, o.a.createElement(C.a, {
						className: Object(h.a)(v.a.commonBtn, v.a.primaryBtn),
						disabled: n,
						kind: C.b.Button,
						onClick: r,
						priority: C.c.Primary
					}, T()), o.a.createElement(C.a, {
						className: Object(h.a)(v.a.commonBtn, v.a.secondaryBtn),
						disabled: n,
						kind: C.b.Button,
						onClick: c,
						priority: C.c.Plain
					}, w())))
				},
				y = e => {
					let {
						isNameEditable: t,
						isResponsive: n,
						onPrimaryButtonClick: r,
						onSecondaryButtonClick: c,
						onTooltipView: i,
						onView: l,
						username: d
					} = e;
					Object(s.useEffect)(l, []);
					const m = Object(E.a)({
							placement: "top"
						}),
						u = Object(s.useCallback)(e => {
							const t = {
									...m.popperProps,
									style: {
										...m.popperProps.style,
										textAlign: "center",
										width: "325px"
									}
								},
								n = {
									...m.arrowProps,
									style: {
										...m.arrowProps.style,
										borderTop: "3px solid #000"
									}
								};
							return o.a.createElement(s.Fragment, null, a.fbt._("Welcome back, {userName}!", [a.fbt._param("userName", e)], {
								hk: "OV5z1"
							}), o.a.createElement("span", {
								className: v.a.questionWrapper,
								onMouseEnter: () => {
									m.show(), i && i()
								},
								onMouseLeave: m.hide,
								ref: m.target.ref
							}, o.a.createElement(x, {
								className: v.a.questionIcon
							}), o.a.createElement(f.a, {
								arrowProps: n,
								popperProps: t,
								visible: m.visible
							}, a.fbt._("Don’t recognize this username? Your username might have been autogenerated if you did not confirm it within 30 days of creating this account.", null, {
								hk: "351WNw"
							}))))
						}, [i, m]);
					return o.a.createElement(g.a, {
						bodyClassName: v.a.confirmModalBody,
						className: Object(h.a)(v.a.confirmContainer, {
							[v.a.mResponsive]: n
						}),
						description: a.fbt._("You’re logged in through a {=connected Google account}. If you have a different Reddit account you’d like to use, log in using your username and password.", [a.fbt._param("=connected Google account", o.a.createElement(_.a, {
							target: "_blank",
							href: "https://reddit.zendesk.com/hc/en-us/categories/200073949-Reddit-101"
						}, a.fbt._("connected Google account", null, {
							hk: "1VgtZm"
						})))], {
							hk: "2rCbSh"
						}),
						descriptionClassName: v.a.confirmModalDescription,
						headerClassName: v.a.confirmModalHeader,
						title: t ? a.fbt._("Welcome back!", null, {
							hk: "45FAYP"
						}) : u(d),
						titleClassName: v.a.welcomeBackModalTitle
					}, o.a.createElement("div", {
						className: Object(h.a)(v.a.buttonWrapper, v.a.withTopBorder)
					}, o.a.createElement(C.a, {
						className: Object(h.a)(v.a.commonBtn, v.a.primaryBtn),
						kind: C.b.Button,
						onClick: r,
						priority: C.c.Primary
					}, t ? S() : U(d)), o.a.createElement(C.a, {
						className: Object(h.a)(v.a.commonBtn, v.a.secondaryBtn),
						kind: C.b.Button,
						onClick: c,
						priority: C.c.Plain
					}, I())))
				},
				M = () => a.fbt._("Change username", null, {
					hk: "3l2BGo"
				}),
				S = () => a.fbt._("Continue", null, {
					hk: "1zlSIC"
				}),
				U = e => a.fbt._("Continue as {username}", [a.fbt._param("username", e)], {
					hk: "2vmCbf"
				}),
				w = () => a.fbt._("Go Back", null, {
					hk: "3hUBIW"
				}),
				B = () => a.fbt._("Keep this Name", null, {
					hk: "jsI7k"
				}),
				T = () => a.fbt._("Yes, Keep this Name", null, {
					hk: "4iElQQ"
				}),
				I = () => a.fbt._("Log in to a different account", null, {
					hk: "2BmtHB"
				});
			var A = n("./src/reddit/components/Settings/ChangeUsernameModal.tsx"),
				R = n("./src/reddit/components/Settings/modalIds.ts"),
				L = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/contexts/ApiContext.tsx"),
				H = n("./src/reddit/endpoints/user/updateUsername.ts"),
				D = n("./src/reddit/helpers/trackers/changeUsername.ts"),
				K = n("./src/reddit/helpers/trackers/onboarding.ts"),
				W = n("./src/reddit/hooks/useTracking.ts"),
				F = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/activeModalId.ts");
			const G = e => e && e.fields && e.fields.length ? e.fields.map(e => {
					let {
						msg: t
					} = e;
					return t
				}).join(", ") : (() => a.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "3HcWgL"
				}))(),
				q = Object(c.c)({
					changeUsernameModalOpen: Object(V.b)(R.b),
					confirmSaveUsernameModalOpen: Object(V.b)(R.d),
					interceptActionModalOpen: Object(V.b)(R.e),
					welcomeBackModalOpen: Object(V.b)(R.r)
				}),
				z = Object(r.b)(q, (e, t) => ({
					closeModal: () => {
						e(Object(p.f)()), e(Object(u.d)())
					},
					confirmChangeUsername: () => {
						e(Object(p.h)(R.b))
					},
					continueChangeUsername: () => {
						e(Object(p.h)(R.d))
					},
					continueKeepUsername: () => {
						e(Object(p.h)(R.d))
					},
					goBack: () => {
						e(Object(p.h)(R.e))
					},
					logOutAndOpenLoginModal: () => {
						const e = Object(l.a)(window.location.href, {
							[L.z]: !0
						});
						Object(d.a)(e, []), t.logoutUser()
					},
					openInterceptActionModal: () => {
						e(Object(p.h)(R.e))
					},
					saveUsernameError: t => {
						e(Object(b.f)({
							duration: b.a,
							kind: F.b.Error,
							text: t
						}))
					},
					saveUsernameSuccess: (t, n) => {
						e(Object(m.finishChangeUsernameFlow)(t, n)), e(Object(p.h)(R.p)), setTimeout(() => {
							e(Object(p.g)(R.p))
						}, b.a)
					}
				})),
				X = Object(i.a)(Object(P.b)(z(e => {
					let {
						apiContext: t,
						changeUsernameModalOpen: n,
						closeModal: r,
						confirmChangeUsername: c,
						confirmSaveUsernameModalOpen: i,
						continueChangeUsername: l,
						continueKeepUsername: d,
						goBack: m,
						interceptActionModalOpen: u,
						isNameEditable: p,
						isOneTapSession: b,
						isResponsiveSettingsEnabled: h,
						logOutAndOpenLoginModal: f,
						openInterceptActionModal: g,
						saveUsernameError: C,
						saveUsernameSuccess: _,
						username: E,
						welcomeBackModalOpen: O
					} = e;
					const [N, v] = Object(s.useState)(E || ""), [x, M] = Object(s.useState)(!1), S = Object(W.a)(), U = Object(s.useCallback)(async () => {
						M(!0);
						const e = await Object(H.a)(t(), N);
						e.ok ? (S(Object(D.j)()), _(N, E)) : (C(G(e.error)), M(!1))
					}, [t, E, S, C, _, N]);
					return o.a.createElement(s.Fragment, null, O && o.a.createElement(y, {
						isNameEditable: p,
						isResponsive: h,
						onPrimaryButtonClick: () => {
							p ? g() : r(), S(Object(K.e)(K.a.CONTINUE))
						},
						onSecondaryButtonClick: () => {
							f(), S(Object(K.e)(K.a.LOGIN_ANOTHER_ACCOUNT))
						},
						onTooltipView: () => S(Object(K.M)()),
						onView: () => {
							S(Object(K.f)())
						},
						username: N
					}), u && o.a.createElement(j, {
						isResponsive: h,
						onPrimaryButtonClick: () => {
							d(), S(Object(K.I)(K.b.KEEP_USERNAME))
						},
						onSecondaryButtonClick: () => {
							c(), S(Object(K.I)(K.b.CHANGE_USERNAME))
						},
						onView: () => S(Object(K.J)()),
						username: N
					}), i && o.a.createElement(k, {
						isResponsive: h,
						isSaving: x,
						onPrimaryButtonClick: () => {
							U(), S(Object(K.K)(K.c.YES_KEEP_USERNAME))
						},
						onSecondaryButtonClick: () => {
							m(), S(Object(K.K)(K.c.GO_BACK))
						},
						onView: () => S(Object(K.L)()),
						username: N
					}), n && o.a.createElement(A.a, {
						initialUsername: E || "",
						isResponsive: h,
						onClose: r,
						onContinue: () => {
							l(), S(Object(D.e)())
						},
						isOneTapSession: b,
						onSelect: () => S(Object(D.f)()),
						onUsernameChange: v,
						onView: () => S(Object(D.i)()),
						title: a.fbt._("Change username", null, {
							hk: "17XB7v"
						}),
						username: N
					}))
				})));
			t.default = X
		},
		"./src/reddit/components/Settings/ChangeUsernameModal.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/EmailCollection/Input/index.tsx"),
				d = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				p = n("./src/reddit/contexts/ApiContext.tsx"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/components/Settings/SuggestedUsernames/index.m.less"),
				C = n.n(g);
			const _ = m.a.wrapped(u.a, "refreshIcon", C.a),
				E = m.a.button("refreshButton", C.a),
				O = e => e > 3 ? 3 : e;
			var N = Object(p.b)(e => {
					const {
						apiContext: t,
						isOneTapSession: n,
						onSuggestedUsernameClick: s
					} = e, [o, l] = Object(r.useState)([0, 0]), [m, u] = Object(r.useState)([]), [p, g] = Object(r.useState)(!1), N = Object(r.useCallback)(async () => {
						g(!0), setTimeout(() => {
							g(!1)
						}, 10 * d.Xb);
						const e = await (e => Object(b.a)(Object(h.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/generate_username.json`,
							method: d.ob.GET
						}))(t());
						if (e.ok && e.body) {
							const {
								usernames: t
							} = e.body;
							if (t && t.length) {
								const e = o[1],
									n = O(t.length);
								u([...m, ...t]), l([e, e + n]), t.length > n && g(!1)
							} else {
								const e = O(m.length);
								l([0, e])
							}
						} else {
							const e = O(m.length);
							l([0, e])
						}
					}, [t, g, u, l, m, o]), v = Object(r.useCallback)(() => {
						const e = o[1],
							t = m.length - e;
						if (t > 0) {
							const n = O(t);
							l([e, e + n])
						} else N()
					}, [N, l, m, o]);
					return Object(r.useEffect)(() => {
						N()
					}, []), c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: Object(i.a)(C.a.refreshContainer, {
							[C.a["m-onetap"]]: n
						})
					}, n ? a.fbt._("Need inspiration? Here’s some available usernames:", null, {
						hk: "2yXDBw"
					}) : a.fbt._("Can’t think of one? Use one of these:", null, {
						hk: "23kfek"
					}), c.a.createElement(E, {
						disabled: p,
						onClick: v
					}, c.a.createElement(_, null))), c.a.createElement("ul", {
						className: C.a.suggestedUsernames
					}, m.slice(...o).map(e => c.a.createElement("li", {
						className: Object(i.a)(C.a.suggestedUsername, {
							[C.a["m-onetap"]]: n
						}),
						key: e,
						onClick: () => s(e)
					}, e))))
				}),
				v = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/endpoints/usernameAvailable/index.ts"),
				j = n("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				k = n("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				y = n.n(k),
				M = n("./src/reddit/components/Settings/accountModals.m.less"),
				S = n.n(M);
			const U = 500,
				w = 20,
				B = 3,
				T = () => a.fbt._("Great name! It's not taken, so it's all yours.", null, {
					hk: "42rpS"
				}),
				I = () => a.fbt._("Sorry, this username is taken. Try another.", null, {
					hk: "2HkykK"
				}),
				A = () => a.fbt._("Username must be between 3 and 20 characters.", null, {
					hk: "1V72yV"
				}),
				R = () => a.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "48Ga9f"
				}),
				L = {
					error: null,
					state: null
				},
				P = {
					error: null,
					state: l.a.Valid
				};
			class H extends c.a.Component {
				constructor() {
					super(...arguments), this.state = L, this.checkUsername = async e => e.length < B || e.length > w ? {
						error: A(),
						state: l.a.Invalid
					} : e === this.props.initialUsername ? P : await this.validateUsername(e), this.validateUsername = async e => {
						const {
							apiContext: t
						} = this.props, n = t(), a = await Object(x.a)(n, {
							username: e
						});
						return a.ok ? !0 === a.body ? P : {
							error: I(),
							state: l.a.Invalid
						} : a.error && a.error.fields && a.error.fields[0] ? {
							error: a.error.fields[0].msg,
							state: l.a.Invalid
						} : {
							error: R(),
							state: l.a.Invalid
						}
					}, this.callCheckUsername = async e => {
						const {
							error: t,
							state: n
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: n
						})
					}, this.debounceCheckUsername = o()(this.callCheckUsername, U), this.handleContinue = async () => {
						const {
							username: e
						} = this.props, {
							error: t,
							state: n
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: n
						}), n === l.a.Valid && this.props.onContinue()
					}, this.updateUsernameField = async e => {
						const t = e.currentTarget.value;
						this.props.onUsernameChange(t), this.debounceCheckUsername(t)
					}, this.onSuggestedUsernameClickHandler = e => {
						this.props.onUsernameChange(e), this.setState(P), this.props.onSelect()
					}, this.onCloseModal = () => {
						this.props.onUsernameChange(this.props.initialUsername), this.props.onClose(), this.setState(L)
					}
				}
				componentDidMount() {
					const {
						username: e
					} = this.props;
					this.callCheckUsername(e), this.props.onView()
				}
				render() {
					const {
						initialUsername: e,
						isResponsive: t,
						isOneTapSession: n,
						title: s,
						username: o
					} = this.props, {
						error: r,
						state: d
					} = this.state, m = d === l.a.Valid, u = o === e;
					return c.a.createElement(j.a, {
						bodyClassName: S.a.changeUsernameModalBody,
						className: Object(i.a)(S.a.changeUsernameModalContainer, {
							[S.a["m-responsive"]]: t,
							[S.a["m-onetap"]]: n
						}),
						onClose: n ? void 0 : this.onCloseModal,
						title: n ? a.fbt._("Create your username", null, {
							hk: "3AYLKI"
						}) : s,
						description: n ? a.fbt._("Reddit is anonymous, so your username is what you’ll go by here. Choose wisely—because once you get a name, you can’t change it.", null, {
							hk: "DwpIM"
						}) : void 0,
						descriptionClassName: n ? S.a.oneTapSessionModalDesc : void 0
					}, c.a.createElement(l.b, {
						className: Object(i.a)(S.a.input, S.a.usernameInput, {
							[S.a["m-input"]]: n
						}),
						errorMessage: r || void 0,
						onChange: this.updateUsernameField,
						spellCheck: !1,
						successMessage: m && !u && T() || void 0,
						value: o,
						validityState: d || void 0
					}), c.a.createElement(N, {
						isOneTapSession: n,
						onSuggestedUsernameClick: this.onSuggestedUsernameClickHandler
					}), c.a.createElement("div", {
						className: Object(i.a)(y.a.buttonWrapper, {
							[S.a.buttonWrapper]: n
						})
					}, c.a.createElement(v.l, {
						className: Object(i.a)(y.a.commonBtn, y.a.primaryBtn, {
							[S.a.oneTapSessionBtn]: n
						}),
						disabled: !m,
						onClick: this.handleContinue
					}, a.fbt._("Continue", null, {
						hk: "3a8GoU"
					}))))
				}
			}
			t.a = Object(p.b)(H)
		},
		"./src/reddit/components/Settings/ModalContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1AaXuuXcppN6z3lyjemnkL",
				closeButton: "_2n58ofMJPg93rBexzKK_eC",
				closeIcon: "_1-aRvaXjqzrU9zAXYkO31N",
				header: "_3A-cwt8Ht4zvde70Pjy__E",
				icon: "_1x_pYy_fmCQxsGD3ovvgfw",
				title: "_19eT5Znm4YIntTUHAcYrX3",
				description: "veTQ6x5JgIlwMg7Auj1Sd",
				body: "iTEI6v2GvrdU6pwBMDd_j"
			}
		},
		"./src/reddit/components/Settings/ModalContainer/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				i = n.n(c);
			t.a = e => {
				const {
					bodyClassName: t,
					children: n,
					className: a,
					description: c,
					descriptionClassName: l,
					headerClassName: d,
					icon: m,
					iconClassName: u,
					onClose: p,
					title: b,
					titleClassName: h
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.container, a)
				}, p && s.a.createElement("button", {
					className: i.a.closeButton,
					onClick: p
				}, s.a.createElement(r.a, {
					className: i.a.closeIcon
				})), s.a.createElement("div", {
					className: Object(o.a)(i.a.header, d)
				}, m && s.a.createElement("div", {
					className: Object(o.a)(i.a.icon, u)
				}, m), s.a.createElement("h2", {
					className: Object(o.a)(i.a.title, h)
				}, b)), c && s.a.createElement("p", {
					className: Object(o.a)(i.a.description, l)
				}, c), s.a.createElement("div", {
					className: Object(o.a)(i.a.body, t)
				}, n))
			}
		},
		"./src/reddit/components/Settings/SuggestedUsernames/index.m.less": function(e, t, n) {
			e.exports = {
				suggestedUsernames: "_1E2kAa0tJoEy_JkCDssPe3",
				suggestedUsername: "YfJBUmZCRoeR0KkYmxUA5",
				"m-onetap": "_Ke5dc1Swy7sLfE4lbPlL",
				mOnetap: "_Ke5dc1Swy7sLfE4lbPlL",
				refreshContainer: "_2IjK-L5x_zM-2yHDk5Kkym",
				refreshButton: "_1Z5t703wkMd44jwxPP0cIw",
				refreshIcon: "_27lXx2em8b5a9bWaBDnNke"
			}
		},
		"./src/reddit/components/Settings/accountModals.m.less": function(e, t, n) {
			e.exports = {
				buttonWrapper: "_3bwuX1FpzX5u_wA4guPMPr",
				oneTapSessionBtn: "_1QLPcfcbQzhg3-aBUAj_8y",
				input: "RrqK6usE8PEMhLL7FD-iE",
				checkboxLabel: "OBgeR3lNas33iO_RB1buN",
				primaryBtn: "_1ZuJ4cYdwXBjhOxsWSpt_J",
				toggle: "brX0v5qpkg7KN-bOajuQ7",
				description: "hfVDp17HN3YB0M-CBz_f7",
				"m-responsive": "_1RdzLLJTzHMuKTT451B8mz",
				mResponsive: "_1RdzLLJTzHMuKTT451B8mz",
				changeUsernameModalContainer: "_9hmSLlBvZA-2tPAVajB6F",
				confirmModalContainer: "ZdQ8dYkTCSltA50W7-IE3",
				"m-onetap": "_3wFXdZQtKsn7b-AVzJAEnm",
				mOnetap: "_3wFXdZQtKsn7b-AVzJAEnm",
				changeUsernameModalBody: "_1Yly3HtP1iwII2uUEMTTKL",
				confirmModalBody: "_1yaWiT2tGW8c-WyQ2DxiNY",
				confirmModalHeader: "_19OEdjo2DQZ1GMEXsY7vZ3",
				confirmModalDescription: "JB3thd-iYucgTQHskJ_6g",
				oneTapSessionModalDesc: "_22IqvkHuX5GDYijASUVvJo",
				saveDescription: "_3Yj6lPp8gZJ6YcXvbva9hO",
				confirmModalIcon: "_2nFUIwSqAux1OcismY38n4",
				questionIcon: "pg0_xOJ41KOzSjQt9g3FB",
				usernameInput: "_1Ti06LupexmG0XRXRqTBZQ"
			}
		},
		"./src/reddit/endpoints/user/updateUsername.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts");
			const c = (e, t) => Object(s.a)(Object(o.a)(e, [r.a]), {
				method: a.ob.POST,
				endpoint: `${e.apiUrl}/api/update_name`,
				data: {
					api_type: "json",
					new_name: t
				},
				type: "form"
			})
		},
		"./src/reddit/helpers/trackers/changeUsername.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			}));
			var a, s, o = n("./src/reddit/actions/comment/constants.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/actions.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/routes/postCreation/constants.ts"),
				m = n("./src/reddit/selectors/interceptedAction.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CHANGE_USERNAME_INITIAL = "change_username_initial", e.CHANGE_USERNAME_CONFIRMATION = "change_username_confirmation", e.CHANGE_USERNAME_INPUT = "change_username_input", e.CHANGE_USERNAME_SUCCESS = "change_username_success"
			}(a || (a = {})),
			function(e) {
				e.COMMENT = "comment", e.CUSTOM_FEED = "custom_feed", e.POST = "post", e.PROFILE = "profile", e.UNKNOWN = "unknown"
			}(s || (s = {}));
			const p = "popup",
				b = "tooltip",
				h = e => {
					if (!e) return s.UNKNOWN;
					switch (e.type) {
						case o.s:
						case o.m:
							return s.COMMENT;
						case r.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return s.CUSTOM_FEED;
							break;
						case c.a: {
							const t = f(e);
							if (t.startsWith("/user/")) return s.PROFILE;
							if (t.includes(d.b)) return s.POST;
							break
						}
					}
					return s.UNKNOWN
				},
				f = e => e.payload.args && "string" == typeof e.payload.args[0] && e.payload.args[0] || "",
				g = (e, t) => n => ({
					...Object(u.q)(n),
					action: l.c.VIEW,
					actionInfo: Object(u.d)(n, {
						reason: t ? h(Object(m.a)(n)) : void 0
					}),
					noun: a.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				C = (e, t) => n => ({
					...Object(u.q)(n),
					action: l.c.CLICK,
					noun: a.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: t
					},
					source: e
				}),
				_ = () => e => ({
					...Object(u.q)(e),
					action: l.c.VIEW,
					noun: a.CHANGE_USERNAME_CONFIRMATION,
					source: p
				}),
				E = e => t => ({
					...Object(u.q)(t),
					action: l.c.CLICK,
					noun: a.CHANGE_USERNAME_CONFIRMATION,
					source: p,
					popup: {
						buttonText: e
					}
				}),
				O = () => e => ({
					...Object(u.q)(e),
					action: l.c.VIEW,
					noun: a.CHANGE_USERNAME_INPUT,
					source: p
				}),
				N = () => e => ({
					...Object(u.q)(e),
					action: l.c.CLICK,
					noun: a.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: p
				}),
				v = () => e => ({
					...Object(u.q)(e),
					action: l.c.SELECT,
					noun: a.CHANGE_USERNAME_INPUT,
					source: p
				}),
				x = () => e => ({
					...Object(u.q)(e),
					action: l.c.VIEW,
					noun: a.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Warning/index.m.less"),
				c = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(c.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), s.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UsernameConfirmationModals.27ae64f876fb90bb99a8.js.map