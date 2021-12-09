// https://www.redditstatic.com/desktop2x/ChangeUsernameModals.e4e5fb378d7f7dc4585a.js
// Retrieved at 12/9/2021, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChangeUsernameModals"], {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(c);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return a.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: s,
						[i.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", i.a)
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(r.a, o({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M16.375 10A6.375 6.375 0 1 1 10 3.625h3.274L11.6 5.02l.8.96 3-2.5a.625.625 0 0 0 0-.96l-3-2.5-.8.96 1.674 1.4H10A7.625 7.625 0 1 0 17.625 10Zm-2.351-7L14 3.02v-.04Z"
			}))
		},
		"./src/reddit/components/ChangeUsernameModals/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/interceptedAction.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./node_modules/lodash/debounce.js"),
				h = n.n(p),
				b = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/components/EmailCollection/Input/index.tsx"),
				g = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/lessComponent.tsx"),
				f = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				E = n("./src/reddit/contexts/ApiContext.tsx"),
				O = n("./src/lib/makeApiRequest/index.ts"),
				v = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/components/Settings/SuggestedUsernames/index.m.less"),
				N = n.n(j);
			const U = _.a.wrapped(f.a, "refreshIcon", N.a),
				k = _.a.button("refreshButton", N.a),
				S = e => e > 3 ? 3 : e;
			var y = Object(E.b)(e => {
					const {
						apiContext: t,
						onSuggestedUsernameClick: n
					} = e, [o, c] = Object(a.useState)([0, 0]), [i, l] = Object(a.useState)([]), [d, m] = Object(a.useState)(!1), u = Object(a.useCallback)(async () => {
						m(!0), setTimeout(() => {
							m(!1)
						}, 10 * g.Rb);
						const e = await (e => Object(O.a)(Object(v.a)(e, [x.a]), {
							endpoint: `${e.apiUrl}/api/v1/generate_username.json`,
							method: g.jb.GET
						}))(t());
						if (e.ok && e.body) {
							const {
								usernames: t
							} = e.body;
							if (t && t.length) {
								const e = o[1],
									n = S(t.length);
								l([...i, ...t]), c([e, e + n]), t.length > n && m(!1)
							} else {
								const e = S(i.length);
								c([0, e])
							}
						} else {
							const e = S(i.length);
							c([0, e])
						}
					}, [t, m, l, c, i, o]), p = Object(a.useCallback)(() => {
						const e = o[1],
							t = i.length - e;
						if (t > 0) {
							const n = S(t);
							c([e, e + n])
						} else u()
					}, [u, c, i, o]);
					return Object(a.useEffect)(() => {
						u()
					}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: N.a.refreshContainer
					}, s.fbt._("Can’t think of one? Use one of these:", null, {
						hk: "23kfek"
					}), r.a.createElement(k, {
						disabled: d,
						onClick: p
					}, r.a.createElement(U, null))), r.a.createElement("ul", {
						className: N.a.suggestedUsernames
					}, i.slice(...o).map(e => r.a.createElement("li", {
						className: N.a.suggestedUsername,
						key: e,
						onClick: () => n(e)
					}, e))))
				}),
				M = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/reddit/endpoints/usernameAvailable/index.ts"),
				I = n("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				A = n("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				B = n.n(A),
				w = n("./src/reddit/components/Settings/accountModals.m.less"),
				R = n.n(w);
			const L = 500,
				H = 20,
				D = 3,
				P = () => s.fbt._("Great name! It's not taken, so it's all yours.", null, {
					hk: "42rpS"
				}),
				K = () => s.fbt._("Sorry, this username is taken. Try another.", null, {
					hk: "2HkykK"
				}),
				W = () => s.fbt._("Username must be between 3 and 20 characters.", null, {
					hk: "1V72yV"
				}),
				G = () => s.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "48Ga9f"
				}),
				F = {
					error: null,
					state: null
				},
				V = {
					error: null,
					state: C.a.Valid
				};
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.state = F, this.checkUsername = async e => e.length < D || e.length > H ? {
						error: W(),
						state: C.a.Invalid
					} : e === this.props.initialUsername ? V : await this.validateUsername(e), this.validateUsername = async e => {
						const {
							apiContext: t
						} = this.props, n = t(), s = await Object(T.a)(n, {
							username: e
						});
						return s.ok ? !0 === s.body ? V : {
							error: K(),
							state: C.a.Invalid
						} : s.error && s.error.fields && s.error.fields[0] ? {
							error: s.error.fields[0].msg,
							state: C.a.Invalid
						} : {
							error: G(),
							state: C.a.Invalid
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
					}, this.debounceCheckUsername = h()(this.callCheckUsername, L), this.handleContinue = async () => {
						const {
							username: e
						} = this.props, {
							error: t,
							state: n
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: n
						}), n === C.a.Valid && this.props.onContinue()
					}, this.updateUsernameField = async e => {
						const t = e.currentTarget.value;
						this.props.onUsernameChange(t), this.debounceCheckUsername(t)
					}, this.onSuggestedUsernameClickHandler = e => {
						this.props.onUsernameChange(e), this.setState(V), this.props.onSelect()
					}, this.onCloseModal = () => {
						this.props.onUsernameChange(this.props.initialUsername), this.props.onClose(), this.setState(F)
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
						username: n
					} = this.props, {
						error: a,
						state: o
					} = this.state, c = o === C.a.Valid, i = n === e;
					return r.a.createElement(I.a, {
						bodyClassName: R.a.changeUsernameModalBody,
						className: Object(b.a)(R.a.changeUsernameModalContainer, {
							[R.a["m-responsive"]]: t
						}),
						onClose: this.onCloseModal,
						title: this.props.title
					}, r.a.createElement(C.b, {
						className: Object(b.a)(R.a.input, R.a.usernameInput),
						errorMessage: a || void 0,
						onChange: this.updateUsernameField,
						spellCheck: !1,
						successMessage: c && !i && P() || void 0,
						value: n,
						validityState: o || void 0
					}), r.a.createElement(y, {
						onSuggestedUsernameClick: this.onSuggestedUsernameClickHandler
					}), r.a.createElement("div", {
						className: B.a.buttonWrapper
					}, r.a.createElement(M.l, {
						className: Object(b.a)(B.a.commonBtn, B.a.primaryBtn),
						disabled: !c,
						onClick: this.handleContinue
					}, s.fbt._("Continue", null, {
						hk: "3a8GoU"
					}))))
				}
			}
			var J = Object(E.b)(X),
				Z = n("./src/reddit/icons/svgs/Question/index.tsx"),
				q = n("./src/reddit/icons/svgs/SnooSuperhero/index.tsx");
			var Y = e => (Object(a.useEffect)(e.onView, []), r.a.createElement(I.a, {
					bodyClassName: R.a.confirmModalBody,
					className: Object(b.a)(R.a.confirmModalContainer, {
						[R.a["m-responsive"]]: e.isResponsive
					}),
					description: e.description,
					descriptionClassName: Object(b.a)(R.a.confirmModalDescription, {
						[R.a.saveDescription]: e.isSaveConfirm
					}),
					headerClassName: R.a.confirmModalHeader,
					icon: e.isSecondConfirm ? r.a.createElement(Z.a, null) : r.a.createElement(q.a, null),
					iconClassName: Object(b.a)(R.a.confirmModalIcon, {
						[R.a.questionIcon]: e.isSecondConfirm
					}),
					onClose: e.onClose
				}, r.a.createElement("div", {
					className: B.a.username
				}, r.a.createElement("span", {
					className: B.a.usernamePrefix
				}, "u/"), e.username), r.a.createElement("div", {
					className: B.a.buttonWrapper
				}, r.a.createElement(M.l, {
					className: Object(b.a)(B.a.commonBtn, B.a.primaryBtn),
					disabled: e.isSaving,
					onClick: e.onPrimaryButtonClick
				}, e.primaryButtonText()), r.a.createElement(M.r, {
					className: Object(b.a)(B.a.commonBtn, B.a.secondaryBtn),
					disabled: e.isSaving,
					onClick: e.onSecondaryButtonClick
				}, e.secondaryButtonText())))),
				z = n("./src/reddit/components/Settings/modalIds.ts");
			var Q = n("./src/reddit/helpers/trackers/changeUsername.ts"),
				$ = n("./src/reddit/hooks/useTracking.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/activeModalId.ts");
			const ne = () => s.fbt._("Change Username", null, {
					hk: "1nRhNE"
				}),
				se = () => s.fbt._("Keep Username", null, {
					hk: "4hDTRV"
				}),
				ae = () => s.fbt._("Save Username", null, {
					hk: "2Ufmnc"
				}),
				re = () => s.fbt._("Saving Username", null, {
					hk: "deHEB"
				}),
				oe = () => s.fbt._("Go Back", null, {
					hk: "3hUBIW"
				}),
				ce = e => s.fbt._("Nice name, u/{username}. May it serve you well.", [s.fbt._param("username", e)], {
					hk: "3TWtHg"
				}),
				ie = e => e && e.fields && e.fields.length ? e.fields.map(({
					msg: e
				}) => e).join(", ") : (() => s.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "3HcWgL"
				}))(),
				le = Object(c.c)({
					changeUsernameModalOpen: Object(te.b)(z.b),
					confirmSaveUsernameModalOpen: Object(te.b)(z.d),
					interceptActionModalOpen: Object(te.b)(z.e),
					secondConfirmKeepUsernameModalOpen: Object(te.b)(z.g)
				}),
				de = Object(o.b)(le, e => ({
					closeModal: () => {
						e(Object(m.f)()), e(Object(d.d)())
					},
					confirmChangeUsername: () => {
						e(Object(m.h)(z.b))
					},
					confirmKeepUsername: () => {
						e(Object(m.h)(z.g))
					},
					continueChangeUsername: () => {
						e(Object(m.h)(z.d))
					},
					goBack: () => {
						e(Object(m.h)(z.b))
					},
					saveUsernameError: t => {
						e(Object(u.f)({
							duration: u.a,
							kind: ee.b.Error,
							text: t
						}))
					},
					saveUsernameSuccess: (t, n) => {
						e(Object(m.f)()), e(Object(u.f)({
							kind: ee.b.SuccessCommunityGreen,
							text: ce(t)
						})), e(Object(l.e)(t, n))
					}
				}));
			t.default = Object(i.a)(Object(E.b)(de(({
				apiContext: e,
				changeUsernameModalOpen: t,
				closeModal: n,
				confirmChangeUsername: o,
				confirmKeepUsername: c,
				confirmSaveUsernameModalOpen: i,
				continueChangeUsername: l,
				goBack: d,
				interceptActionModalOpen: m,
				isResponsiveSettingsEnabled: u,
				saveUsernameError: p,
				saveUsernameSuccess: h,
				secondConfirmKeepUsernameModalOpen: b,
				username: C
			}) => {
				const [_, f] = Object(a.useState)(C || ""), [E, j] = Object(a.useState)(!1), N = Object($.a)(), U = Object(a.useCallback)(async () => {
					j(!0);
					const t = await ((e, t) => Object(O.a)(Object(v.a)(e, [x.a]), {
						method: g.jb.POST,
						endpoint: `${e.apiUrl}/api/update_name`,
						data: {
							api_type: "json",
							new_name: t
						},
						type: "form"
					}))(e(), _);
					t.ok ? (h(_, C), N(Object(Q.j)())) : p(ie(t.error)), j(!1)
				}, [e, C, N, p, h, _]);
				return r.a.createElement(a.Fragment, null, m && r.a.createElement(Y, {
					description: s.fbt._("Before continuing, confirm that you want to keep this as your Reddit username.", null, {
						hk: "14rKrO"
					}),
					isResponsive: u,
					onPrimaryButtonClick: () => {
						o(), N(Object(Q.d)(Q.a, "change"))
					},
					onSecondaryButtonClick: () => {
						c(), N(Object(Q.d)(Q.a, "keep"))
					},
					onView: () => {
						N(Object(Q.h)(Q.a, !0))
					},
					primaryButtonText: ne,
					secondaryButtonText: se,
					username: _
				}), b && r.a.createElement(Y, {
					description: s.fbt._("Ok, just to confirm your confirmation… Are you absolutely sure? This will be your name forever.", null, {
						hk: "4lvkUG"
					}),
					isResponsive: u,
					isSaving: E,
					isSecondConfirm: !0,
					onClose: n,
					onPrimaryButtonClick: () => {
						U(), N(Object(Q.c)("keep"))
					},
					onSecondaryButtonClick: () => {
						o(), N(Object(Q.c)("change"))
					},
					onView: () => {
						N(Object(Q.g)())
					},
					primaryButtonText: E ? re : se,
					secondaryButtonText: ne,
					username: _
				}), t && r.a.createElement(J, {
					initialUsername: C || "",
					isResponsive: u,
					onClose: n,
					onContinue: () => {
						l(), N(Object(Q.e)())
					},
					onSelect: () => {
						N(Object(Q.f)())
					},
					onUsernameChange: f,
					onView: () => {
						N(Object(Q.i)())
					},
					title: s.fbt._("Change username", null, {
						hk: "17XB7v"
					}),
					username: _
				}), i && r.a.createElement(Y, {
					description: s.fbt._("Are you sure? This will be your username forever.", null, {
						hk: "3JACTO"
					}),
					isResponsive: u,
					isSaveConfirm: !0,
					isSaving: E,
					onClose: n,
					onPrimaryButtonClick: () => {
						U(), N(Object(Q.c)("save"))
					},
					onSecondaryButtonClick: () => {
						d(), N(Object(Q.c)("go_back"))
					},
					onView: () => {
						N(Object(Q.g)())
					},
					primaryButtonText: E ? re : ae,
					secondaryButtonText: oe,
					username: _
				}))
			})))
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
				return s
			}));
			var s, a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				i = n("./src/reddit/icons/svgs/Warning/index.tsx"),
				l = n("./src/reddit/components/EmailCollection/Input/index.m.less"),
				d = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(s || (s = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: n,
					successMessage: a,
					validityState: l,
					...u
				} = e, p = l === s.Valid, h = l === s.Invalid;
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, p && d.a.valid, h && d.a.invalid, t)
				}, r.a.createElement("input", m({}, u, {
					className: d.a.input
				})), p && r.a.createElement("div", {
					className: d.a.icon
				}, r.a.createElement(c.a, null)), h && r.a.createElement("div", {
					className: d.a.icon
				}, r.a.createElement(i.a, null)), h && n && r.a.createElement("p", {
					className: d.a.error
				}, n), p && a && r.a.createElement("p", {
					className: d.a.success
				}, a))
			}
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				i = n.n(c);
			t.a = e => {
				const {
					bodyClassName: t,
					children: n,
					className: s,
					description: c,
					descriptionClassName: l,
					headerClassName: d,
					icon: m,
					iconClassName: u,
					onClose: p,
					title: h
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(i.a.container, s)
				}, p && a.a.createElement("button", {
					className: i.a.closeButton,
					onClick: p
				}, a.a.createElement(o.a, {
					className: i.a.closeIcon
				})), a.a.createElement("div", {
					className: Object(r.a)(i.a.header, d)
				}, m && a.a.createElement("div", {
					className: Object(r.a)(i.a.icon, u)
				}, m), a.a.createElement("h2", {
					className: i.a.title
				}, h)), c && a.a.createElement("p", {
					className: Object(r.a)(i.a.description, l)
				}, c), a.a.createElement("div", {
					className: Object(r.a)(i.a.body, t)
				}, n))
			}
		},
		"./src/reddit/components/Settings/SuggestedUsernames/index.m.less": function(e, t, n) {
			e.exports = {
				suggestedUsernames: "_1E2kAa0tJoEy_JkCDssPe3",
				suggestedUsername: "YfJBUmZCRoeR0KkYmxUA5",
				refreshContainer: "_2IjK-L5x_zM-2yHDk5Kkym",
				refreshButton: "_1Z5t703wkMd44jwxPP0cIw",
				refreshIcon: "_27lXx2em8b5a9bWaBDnNke"
			}
		},
		"./src/reddit/components/Settings/accountModals.m.less": function(e, t, n) {
			e.exports = {
				buttonWrapper: "_3bwuX1FpzX5u_wA4guPMPr",
				input: "RrqK6usE8PEMhLL7FD-iE",
				checkboxLabel: "OBgeR3lNas33iO_RB1buN",
				primaryBtn: "_1ZuJ4cYdwXBjhOxsWSpt_J",
				toggle: "brX0v5qpkg7KN-bOajuQ7",
				description: "hfVDp17HN3YB0M-CBz_f7",
				"m-responsive": "_1RdzLLJTzHMuKTT451B8mz",
				mResponsive: "_1RdzLLJTzHMuKTT451B8mz",
				changeUsernameModalContainer: "_9hmSLlBvZA-2tPAVajB6F",
				confirmModalContainer: "ZdQ8dYkTCSltA50W7-IE3",
				changeUsernameModalBody: "_1Yly3HtP1iwII2uUEMTTKL",
				confirmModalBody: "_1yaWiT2tGW8c-WyQ2DxiNY",
				confirmModalHeader: "_19OEdjo2DQZ1GMEXsY7vZ3",
				confirmModalDescription: "JB3thd-iYucgTQHskJ_6g",
				saveDescription: "_3Yj6lPp8gZJ6YcXvbva9hO",
				confirmModalIcon: "_2nFUIwSqAux1OcismY38n4",
				questionIcon: "pg0_xOJ41KOzSjQt9g3FB",
				usernameInput: "_1Ti06LupexmG0XRXRqTBZQ"
			}
		},
		"./src/reddit/helpers/trackers/changeUsername.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "j", (function() {
				return j
			}));
			var s, a, r = n("./src/reddit/actions/comment/constants.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/actions.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/routes/postCreation/constants.ts"),
				m = n("./src/reddit/selectors/interceptedAction.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CHANGE_USERNAME_INITIAL = "change_username_initial", e.CHANGE_USERNAME_CONFIRMATION = "change_username_confirmation", e.CHANGE_USERNAME_INPUT = "change_username_input", e.CHANGE_USERNAME_SUCCESS = "change_username_success"
			}(s || (s = {})),
			function(e) {
				e.COMMENT = "comment", e.CUSTOM_FEED = "custom_feed", e.POST = "post", e.PROFILE = "profile", e.UNKNOWN = "unknown"
			}(a || (a = {}));
			const p = "popup",
				h = "tooltip",
				b = e => {
					if (!e) return a.UNKNOWN;
					switch (e.type) {
						case r.q:
						case r.k:
							return a.COMMENT;
						case o.c:
							if (e.payload === i.a.MULTIREDDIT_ADD_SUBREDDIT || e.payload === i.a.MULTIREDDIT_CREATE) return a.CUSTOM_FEED;
							break;
						case c.a: {
							const t = C(e);
							if (t.startsWith("/user/")) return a.PROFILE;
							if (t.includes(d.b)) return a.POST;
							break
						}
					}
					return a.UNKNOWN
				},
				C = e => e.payload.args && "string" == typeof e.payload.args[0] && e.payload.args[0] || "",
				g = (e, t) => n => ({
					...Object(u.o)(n),
					action: l.c.VIEW,
					actionInfo: Object(u.d)(n, {
						reason: t ? b(Object(m.a)(n)) : void 0
					}),
					noun: s.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				_ = (e, t) => n => ({
					...Object(u.o)(n),
					action: l.c.CLICK,
					noun: s.CHANGE_USERNAME_INITIAL,
					popup: {
						buttonText: t
					},
					source: e
				}),
				f = () => e => ({
					...Object(u.o)(e),
					action: l.c.VIEW,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: p
				}),
				E = e => t => ({
					...Object(u.o)(t),
					action: l.c.CLICK,
					noun: s.CHANGE_USERNAME_CONFIRMATION,
					source: p,
					popup: {
						buttonText: e
					}
				}),
				O = () => e => ({
					...Object(u.o)(e),
					action: l.c.VIEW,
					noun: s.CHANGE_USERNAME_INPUT,
					source: p
				}),
				v = () => e => ({
					...Object(u.o)(e),
					action: l.c.CLICK,
					noun: s.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: p
				}),
				x = () => e => ({
					...Object(u.o)(e),
					action: l.c.SELECT,
					noun: s.CHANGE_USERNAME_INPUT,
					source: p
				}),
				j = () => e => ({
					...Object(u.o)(e),
					action: l.c.VIEW,
					noun: s.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChangeUsernameModals.e4e5fb378d7f7dc4585a.js.map