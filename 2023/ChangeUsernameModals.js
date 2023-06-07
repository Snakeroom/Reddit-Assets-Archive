// https://www.redditstatic.com/desktop2x/ChangeUsernameModals.93b17acae8f945319747.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
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
						active: s,
						hover: r
					} = e;
				return a.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: s,
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(o.a, r({}, e, {
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
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/interceptedAction.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/components/Settings/ChangeUsernameModal.tsx"),
				h = n("./src/lib/classNames/index.ts"),
				A = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/svgs/Question/index.tsx"),
				g = n("./src/reddit/icons/svgs/SnooSuperhero/index.tsx"),
				b = n("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				f = n("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				E = n.n(f),
				v = n("./src/reddit/components/Settings/accountModals.m.less"),
				x = n.n(v);
			var O = e => (Object(a.useEffect)(e.onView, []), o.a.createElement(b.a, {
					bodyClassName: x.a.confirmModalBody,
					className: Object(h.a)(x.a.confirmModalContainer, {
						[x.a["m-responsive"]]: e.isResponsive
					}),
					description: e.description,
					descriptionClassName: Object(h.a)(x.a.confirmModalDescription, {
						[x.a.saveDescription]: e.isSaveConfirm
					}),
					headerClassName: x.a.confirmModalHeader,
					icon: e.isSecondConfirm ? o.a.createElement(C.a, null) : o.a.createElement(g.a, null),
					iconClassName: Object(h.a)(x.a.confirmModalIcon, {
						[x.a.questionIcon]: e.isSecondConfirm
					}),
					onClose: e.onClose
				}, o.a.createElement("div", {
					className: E.a.username
				}, o.a.createElement("span", {
					className: E.a.usernamePrefix
				}, "u/"), e.username), o.a.createElement("div", {
					className: E.a.buttonWrapper
				}, o.a.createElement(A.l, {
					className: Object(h.a)(E.a.commonBtn, E.a.primaryBtn),
					disabled: e.isSaving,
					onClick: e.onPrimaryButtonClick
				}, e.primaryButtonText()), o.a.createElement(A.r, {
					className: Object(h.a)(E.a.commonBtn, E.a.secondaryBtn),
					disabled: e.isSaving,
					onClick: e.onSecondaryButtonClick
				}, e.secondaryButtonText())))),
				U = n("./src/reddit/components/Settings/modalIds.ts"),
				N = n("./src/reddit/contexts/ApiContext.tsx"),
				j = n("./src/reddit/endpoints/user/updateUsername.ts"),
				M = n("./src/reddit/helpers/trackers/changeUsername.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/activeModalId.ts");
			const y = () => s.fbt._("Change Username", null, {
					hk: "1nRhNE"
				}),
				B = () => s.fbt._("Keep Username", null, {
					hk: "4hDTRV"
				}),
				I = () => s.fbt._("Save Username", null, {
					hk: "2Ufmnc"
				}),
				T = () => s.fbt._("Saving Username", null, {
					hk: "deHEB"
				}),
				_ = () => s.fbt._("Go Back", null, {
					hk: "3hUBIW"
				}),
				D = e => s.fbt._("Nice name, u/{username}. May it serve you well.", [s.fbt._param("username", e)], {
					hk: "3TWtHg"
				}),
				R = e => e && e.fields && e.fields.length ? e.fields.map(e => {
					let {
						msg: t
					} = e;
					return t
				}).join(", ") : (() => s.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "3HcWgL"
				}))(),
				Q = Object(c.c)({
					changeUsernameModalOpen: Object(w.b)(U.b),
					confirmSaveUsernameModalOpen: Object(w.b)(U.d),
					interceptActionModalOpen: Object(w.b)(U.e),
					secondConfirmKeepUsernameModalOpen: Object(w.b)(U.g)
				}),
				L = Object(r.b)(Q, e => ({
					closeModal: () => {
						e(Object(m.f)()), e(Object(d.d)())
					},
					confirmChangeUsername: () => {
						e(Object(m.h)(U.b))
					},
					confirmKeepUsername: () => {
						e(Object(m.h)(U.g))
					},
					continueChangeUsername: () => {
						e(Object(m.h)(U.d))
					},
					goBack: () => {
						e(Object(m.h)(U.b))
					},
					saveUsernameError: t => {
						e(Object(u.f)({
							duration: u.a,
							kind: S.b.Error,
							text: t
						}))
					},
					saveUsernameSuccess: (t, n) => {
						e(Object(m.f)()), e(Object(u.f)({
							kind: S.b.SuccessCommunityGreen,
							text: D(t)
						})), e(Object(l.finishChangeUsernameFlow)(t, n))
					}
				}));
			t.default = Object(i.a)(Object(N.b)(L(e => {
				let {
					apiContext: t,
					changeUsernameModalOpen: n,
					closeModal: r,
					confirmChangeUsername: c,
					confirmKeepUsername: i,
					confirmSaveUsernameModalOpen: l,
					continueChangeUsername: d,
					goBack: m,
					interceptActionModalOpen: u,
					isResponsiveSettingsEnabled: h,
					saveUsernameError: A,
					saveUsernameSuccess: C,
					secondConfirmKeepUsernameModalOpen: g,
					username: b
				} = e;
				const [f, E] = Object(a.useState)(b || ""), [v, x] = Object(a.useState)(!1), U = Object(k.a)(), N = Object(a.useCallback)(async () => {
					x(!0);
					const e = await Object(j.a)(t(), f);
					e.ok ? (C(f, b), U(Object(M.j)())) : A(R(e.error)), x(!1)
				}, [t, b, U, A, C, f]);
				return o.a.createElement(a.Fragment, null, u && o.a.createElement(O, {
					description: s.fbt._("Before continuing, confirm that you want to keep this as your Reddit username.", null, {
						hk: "14rKrO"
					}),
					isResponsive: h,
					onPrimaryButtonClick: () => {
						c(), U(Object(M.d)(M.a, "change"))
					},
					onSecondaryButtonClick: () => {
						i(), U(Object(M.d)(M.a, "keep"))
					},
					onView: () => {
						U(Object(M.h)(M.a, !0))
					},
					primaryButtonText: y,
					secondaryButtonText: B,
					username: f
				}), g && o.a.createElement(O, {
					description: s.fbt._("Ok, just to confirm your confirmation… Are you absolutely sure? This will be your name forever.", null, {
						hk: "4lvkUG"
					}),
					isResponsive: h,
					isSaving: v,
					isSecondConfirm: !0,
					onClose: r,
					onPrimaryButtonClick: () => {
						N(), U(Object(M.c)("keep"))
					},
					onSecondaryButtonClick: () => {
						c(), U(Object(M.c)("change"))
					},
					onView: () => {
						U(Object(M.g)())
					},
					primaryButtonText: v ? T : B,
					secondaryButtonText: y,
					username: f
				}), n && o.a.createElement(p.a, {
					initialUsername: b || "",
					isResponsive: h,
					onClose: r,
					onContinue: () => {
						d(), U(Object(M.e)())
					},
					onSelect: () => {
						U(Object(M.f)())
					},
					onUsernameChange: E,
					onView: () => {
						U(Object(M.i)())
					},
					title: s.fbt._("Change username", null, {
						hk: "17XB7v"
					}),
					username: f
				}), l && o.a.createElement(O, {
					description: s.fbt._("Are you sure? This will be your username forever.", null, {
						hk: "3JACTO"
					}),
					isResponsive: h,
					isSaveConfirm: !0,
					isSaving: v,
					onClose: r,
					onPrimaryButtonClick: () => {
						N(), U(Object(M.c)("save"))
					},
					onSecondaryButtonClick: () => {
						m(), U(Object(M.c)("go_back"))
					},
					onView: () => {
						U(Object(M.g)())
					},
					primaryButtonText: v ? T : I,
					secondaryButtonText: _,
					username: f
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
				o = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, p && d.a.valid, h && d.a.invalid, t)
				}, o.a.createElement("input", m({}, u, {
					className: d.a.input
				})), p && o.a.createElement("div", {
					className: d.a.icon
				}, o.a.createElement(c.a, null)), h && o.a.createElement("div", {
					className: d.a.icon
				}, o.a.createElement(i.a, null)), h && n && o.a.createElement("p", {
					className: d.a.error
				}, n), p && a && o.a.createElement("p", {
					className: d.a.success
				}, a))
			}
		},
		"./src/reddit/components/Settings/ChangeUsernameModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/debounce.js"),
				o = n.n(a),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/EmailCollection/Input/index.tsx"),
				d = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				p = n("./src/reddit/contexts/ApiContext.tsx"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				A = n("./src/lib/omitHeaders/index.ts"),
				C = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/components/Settings/SuggestedUsernames/index.m.less"),
				b = n.n(g);
			const f = m.a.wrapped(u.a, "refreshIcon", b.a),
				E = m.a.button("refreshButton", b.a),
				v = e => e > 3 ? 3 : e;
			var x = Object(p.b)(e => {
					const {
						apiContext: t,
						isOneTapSession: n,
						onSuggestedUsernameClick: a
					} = e, [o, l] = Object(r.useState)([0, 0]), [m, u] = Object(r.useState)([]), [p, g] = Object(r.useState)(!1), x = Object(r.useCallback)(async () => {
						g(!0), setTimeout(() => {
							g(!1)
						}, 10 * d.Wb);
						const e = await (e => Object(h.a)(Object(A.a)(e, [C.a]), {
							endpoint: `${e.apiUrl}/api/v1/generate_username.json`,
							method: d.ob.GET
						}))(t());
						if (e.ok && e.body) {
							const {
								usernames: t
							} = e.body;
							if (t && t.length) {
								const e = o[1],
									n = v(t.length);
								u([...m, ...t]), l([e, e + n]), t.length > n && g(!1)
							} else {
								const e = v(m.length);
								l([0, e])
							}
						} else {
							const e = v(m.length);
							l([0, e])
						}
					}, [t, g, u, l, m, o]), O = Object(r.useCallback)(() => {
						const e = o[1],
							t = m.length - e;
						if (t > 0) {
							const n = v(t);
							l([e, e + n])
						} else x()
					}, [x, l, m, o]);
					return Object(r.useEffect)(() => {
						x()
					}, []), c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: Object(i.a)(b.a.refreshContainer, {
							[b.a["m-onetap"]]: n
						})
					}, n ? s.fbt._("Need inspiration? Here’s some available usernames:", null, {
						hk: "2yXDBw"
					}) : s.fbt._("Can’t think of one? Use one of these:", null, {
						hk: "23kfek"
					}), c.a.createElement(E, {
						disabled: p,
						onClick: O
					}, c.a.createElement(f, null))), c.a.createElement("ul", {
						className: b.a.suggestedUsernames
					}, m.slice(...o).map(e => c.a.createElement("li", {
						className: Object(i.a)(b.a.suggestedUsername, {
							[b.a["m-onetap"]]: n
						}),
						key: e,
						onClick: () => a(e)
					}, e))))
				}),
				O = n("./src/reddit/controls/Button/index.tsx"),
				U = n("./src/reddit/endpoints/usernameAvailable/index.ts"),
				N = n("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				j = n("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				M = n.n(j),
				k = n("./src/reddit/components/Settings/accountModals.m.less"),
				S = n.n(k);
			const w = 500,
				y = 20,
				B = 3,
				I = () => s.fbt._("Great name! It's not taken, so it's all yours.", null, {
					hk: "42rpS"
				}),
				T = () => s.fbt._("Sorry, this username is taken. Try another.", null, {
					hk: "2HkykK"
				}),
				_ = () => s.fbt._("Username must be between 3 and 20 characters.", null, {
					hk: "1V72yV"
				}),
				D = () => s.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "48Ga9f"
				}),
				R = {
					error: null,
					state: null
				},
				Q = {
					error: null,
					state: l.a.Valid
				};
			class L extends c.a.Component {
				constructor() {
					super(...arguments), this.state = R, this.checkUsername = async e => e.length < B || e.length > y ? {
						error: _(),
						state: l.a.Invalid
					} : e === this.props.initialUsername ? Q : await this.validateUsername(e), this.validateUsername = async e => {
						const {
							apiContext: t
						} = this.props, n = t(), s = await Object(U.a)(n, {
							username: e
						});
						return s.ok ? !0 === s.body ? Q : {
							error: T(),
							state: l.a.Invalid
						} : s.error && s.error.fields && s.error.fields[0] ? {
							error: s.error.fields[0].msg,
							state: l.a.Invalid
						} : {
							error: D(),
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
					}, this.debounceCheckUsername = o()(this.callCheckUsername, w), this.handleContinue = async () => {
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
						this.props.onUsernameChange(e), this.setState(Q), this.props.onSelect()
					}, this.onCloseModal = () => {
						this.props.onUsernameChange(this.props.initialUsername), this.props.onClose(), this.setState(R)
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
						title: a,
						username: o
					} = this.props, {
						error: r,
						state: d
					} = this.state, m = d === l.a.Valid, u = o === e;
					return c.a.createElement(N.a, {
						bodyClassName: S.a.changeUsernameModalBody,
						className: Object(i.a)(S.a.changeUsernameModalContainer, {
							[S.a["m-responsive"]]: t,
							[S.a["m-onetap"]]: n
						}),
						onClose: n ? void 0 : this.onCloseModal,
						title: n ? s.fbt._("Create your username", null, {
							hk: "3AYLKI"
						}) : a,
						description: n ? s.fbt._("Reddit is anonymous, so your username is what you’ll go by here. Choose wisely—because once you get a name, you can’t change it.", null, {
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
						successMessage: m && !u && I() || void 0,
						value: o,
						validityState: d || void 0
					}), c.a.createElement(x, {
						isOneTapSession: n,
						onSuggestedUsernameClick: this.onSuggestedUsernameClickHandler
					}), c.a.createElement("div", {
						className: Object(i.a)(M.a.buttonWrapper, {
							[S.a.buttonWrapper]: n
						})
					}, c.a.createElement(O.l, {
						className: Object(i.a)(M.a.commonBtn, M.a.primaryBtn, {
							[S.a.oneTapSessionBtn]: n
						}),
						disabled: !m,
						onClick: this.handleContinue
					}, s.fbt._("Continue", null, {
						hk: "3a8GoU"
					}))))
				}
			}
			t.a = Object(p.b)(L)
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
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Close/index.tsx"),
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
					title: h,
					titleClassName: A
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.container, s)
				}, p && a.a.createElement("button", {
					className: i.a.closeButton,
					onClick: p
				}, a.a.createElement(r.a, {
					className: i.a.closeIcon
				})), a.a.createElement("div", {
					className: Object(o.a)(i.a.header, d)
				}, m && a.a.createElement("div", {
					className: Object(o.a)(i.a.icon, u)
				}, m), a.a.createElement("h2", {
					className: Object(o.a)(i.a.title, A)
				}, h)), c && a.a.createElement("p", {
					className: Object(o.a)(i.a.description, l)
				}, c), a.a.createElement("div", {
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
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts");
			const c = (e, t) => Object(a.a)(Object(o.a)(e, [r.a]), {
				method: s.ob.POST,
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
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "j", (function() {
				return U
			}));
			var s, a, o = n("./src/reddit/actions/comment/constants.ts"),
				r = n("./src/reddit/actions/modal.ts"),
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
				A = e => {
					if (!e) return a.UNKNOWN;
					switch (e.type) {
						case o.s:
						case o.m:
							return a.COMMENT;
						case r.c:
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
						reason: t ? A(Object(m.a)(n)) : void 0
					}),
					noun: s.CHANGE_USERNAME_INITIAL,
					source: e
				}),
				b = (e, t) => n => ({
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
				v = () => e => ({
					...Object(u.o)(e),
					action: l.c.VIEW,
					noun: s.CHANGE_USERNAME_INPUT,
					source: p
				}),
				x = () => e => ({
					...Object(u.o)(e),
					action: l.c.CLICK,
					noun: s.CHANGE_USERNAME_INPUT,
					popup: {
						buttonText: "next"
					},
					source: p
				}),
				O = () => e => ({
					...Object(u.o)(e),
					action: l.c.SELECT,
					noun: s.CHANGE_USERNAME_INPUT,
					source: p
				}),
				U = () => e => ({
					...Object(u.o)(e),
					action: l.c.VIEW,
					noun: s.CHANGE_USERNAME_SUCCESS,
					source: "toast"
				})
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Question/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				fill: "none",
				viewBox: "0 0 22 33",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M11.5892 0.108026C8.08052 0.108026 4.66647 1.24605 1.8595 3.35127C1.52801 3.58772 1.25301 3.89466 1.05426 4.25005C0.855522 4.60543 0.737974 5.00043 0.710066 5.40665C0.682158 5.81287 0.744583 6.22023 0.892855 6.59946C1.04113 6.97868 1.27157 7.32035 1.56761 7.59992L1.7622 7.79451C2.24701 8.21875 2.86933 8.4526 3.51355 8.4526C4.15778 8.4526 4.7801 8.21875 5.26491 7.79451C6.88036 6.49442 8.86893 5.74445 10.9406 5.65397C13.5352 5.65397 14.9946 6.85397 14.9946 8.57289C14.9946 10.2918 13.9244 11.6215 11.5568 12.9837C9.57432 13.9788 8.03569 15.6794 7.24328 17.7513C6.98395 18.2114 6.81859 18.7186 6.7568 19.2432C6.74223 19.8498 6.91502 20.4462 7.25162 20.9511C7.58823 21.456 8.07229 21.8449 8.63788 22.0648C9.00788 22.218 9.40496 22.2953 9.80544 22.2918C10.6092 22.2897 11.3836 21.9892 11.9784 21.4486C12.3266 21.049 12.5716 20.5702 12.6919 20.054L12.919 19.2432C13.2108 17.6864 14.0865 16.8432 16.6163 15.5459C18.1368 14.9535 19.4381 13.9073 20.3434 12.5495C21.2486 11.1917 21.7138 9.58811 21.6757 7.95667C21.6757 3.41613 18.1081 0.108026 11.5892 0.108026Z",
				fill: "#FF585B"
			}), a.a.createElement("path", {
				d: "M9.99999 32.2163C9.57316 32.2187 9.15004 32.1369 8.75489 31.9755C8.35974 31.8141 8.00034 31.5763 7.69729 31.2757C7.41081 30.9605 7.18045 30.5985 7.01621 30.2055C6.85002 29.8155 6.76188 29.3968 6.75675 28.973C6.7687 28.1143 7.10464 27.2918 7.69729 26.6703C8.00573 26.375 8.36945 26.1436 8.76756 25.9892C9.35819 25.7409 10.0092 25.673 10.6383 25.7942C11.2675 25.9154 11.8466 26.2203 12.3027 26.6703C12.8953 27.2918 13.2313 28.1143 13.2432 28.973C13.2381 29.3968 13.15 29.8155 12.9838 30.2055C12.8195 30.5985 12.5892 30.9605 12.3027 31.2757C11.9996 31.5763 11.6402 31.8141 11.2451 31.9755C10.8499 32.1369 10.4268 32.2187 9.99999 32.2163Z",
				fill: "#FF585B"
			}))
		},
		"./src/reddit/icons/svgs/SnooSuperhero/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 41 55",
				enableBackground: "new 0 0 41 55",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("image", {
				id: "image0",
				width: "41",
				height: "55",
				x: "0",
				y: "0",
				href: "data:image/png;base64,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 NDQ6NDArMDA6MDCOM4QYAAAAAElFTkSuQmCC"
			}))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Warning/index.m.less"),
				c = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(c.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), a.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChangeUsernameModals.93b17acae8f945319747.js.map