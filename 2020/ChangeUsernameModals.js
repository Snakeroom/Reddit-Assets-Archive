// https://www.redditstatic.com/desktop2x/ChangeUsernameModals.a2c74ced5700eede1889.js
// Retrieved at 5/14/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChangeUsernameModals"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, a) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/chat/controls/Svg/index.m.less"),
				c = a.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: a,
						active: n,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[c.a.disable]: a,
						[c.a.active]: n,
						[c.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", c.a)
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(r.a, o({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/reddit/components/ChangeUsernameModals/index.m.less": function(e, t, a) {
			e.exports = {
				"m-responsive": "_2TX0oNXYIP0FjSIjUWOmna",
				mResponsive: "_2TX0oNXYIP0FjSIjUWOmna"
			}
		},
		"./src/reddit/components/ChangeUsernameModals/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/actions/changeUsername.ts"),
				d = a("./src/reddit/actions/modal.ts"),
				m = a("./src/reddit/actions/toaster.ts"),
				u = a("./node_modules/lodash/debounce.js"),
				p = a.n(u),
				h = a("./src/higherOrderComponents/asModal/index.tsx"),
				g = a("./src/reddit/components/EmailCollection/Input/index.tsx"),
				A = a("./src/lib/constants/index.ts"),
				v = a("./src/lib/lessComponent.tsx"),
				C = a("./src/chat/icons/svgs/Refresh/index.tsx"),
				b = a("./src/reddit/contexts/ApiContext.tsx"),
				f = a("./src/lib/makeApiRequest/index.ts"),
				x = a("./src/lib/omitHeaders/index.ts"),
				O = a("./src/reddit/constants/headers.ts"),
				j = a("./src/reddit/components/Settings/SuggestedUsernames/index.m.less"),
				E = a.n(j);
			const U = v.a.wrapped(C.a, "refreshIcon", E.a),
				y = v.a.button("refreshButton", E.a),
				M = e => e > 3 ? 3 : e;
			var k = Object(b.b)(e => {
					const {
						apiContext: t,
						onSuggestedUsernameClick: a
					} = e, [o, i] = Object(s.useState)([0, 0]), [c, l] = Object(s.useState)([]), [d, m] = Object(s.useState)(!1), [u, p] = Object(s.useState)(!1), h = Object(s.useCallback)(async () => {
						m(!0), setTimeout(() => {
							m(!1)
						}, 10 * A.Cb);
						const e = await (e => Object(f.b)(Object(x.a)(e, [O.a]), {
							endpoint: "".concat(e.apiUrl, "/api/v1/generate_username.json"),
							method: A.ab.GET
						}))(t());
						if (e.ok && e.body) {
							const {
								usernames: t
							} = e.body;
							if (t && t.length) {
								const e = o[1],
									a = M(t.length);
								p(!1), l([...c, ...t]), i([e, e + a]), t.length > a && m(!1)
							} else p(!0)
						} else p(!0)
					}, [t, p, m, l, i, c, o]), g = Object(s.useCallback)(() => {
						const e = o[1],
							t = c.length - e;
						if (t > 0) {
							const a = M(t);
							i([e, e + a])
						} else h()
					}, [h, i, c, o]);
					return Object(s.useEffect)(() => {
						h()
					}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: E.a.refreshContainer
					}, n.fbt._("Can’t think of one? Use one of these:", null, {
						hk: "23kfek"
					}), r.a.createElement(y, {
						disabled: d,
						onClick: g
					}, r.a.createElement(U, null))), r.a.createElement("ul", {
						className: E.a.suggestedUsernames
					}, !u && c.slice(...o).map(e => r.a.createElement("li", {
						className: E.a.suggestedUsername,
						key: e,
						onClick: () => a(e)
					}, e)), u && r.a.createElement("li", {
						className: E.a.suggestedUsername
					}, n.fbt._("Please try again later.", null, {
						hk: "2abDxH"
					}))))
				}),
				w = a("./src/reddit/components/TrackingHelper/index.tsx"),
				N = a("./src/reddit/controls/Button/index.tsx"),
				B = a("./src/reddit/endpoints/usernameAvailable/index.ts"),
				S = a("./src/reddit/helpers/trackers/emailCollection.ts"),
				Q = a("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				I = a("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				D = a.n(I),
				T = a("./src/reddit/components/Settings/accountModals.m.less"),
				R = a.n(T);
			const P = 500,
				L = 20,
				K = 3,
				J = "popup",
				H = () => n.fbt._("Great name! It's not taken, so it's all yours.", null, {
					hk: "42rpS"
				}),
				Y = () => n.fbt._("Sorry, this username is taken. Try another.", null, {
					hk: "2HkykK"
				}),
				V = () => n.fbt._("Username must be between 3 and 20 characters.", null, {
					hk: "1V72yV"
				}),
				F = () => n.fbt._("Sorry, something went wrong. Try again later.", null, {
					hk: "48Ga9f"
				}),
				_ = {
					error: null,
					state: null
				},
				z = {
					error: null,
					state: g.a.Valid
				};
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.state = _, this.checkUsername = async e => e.length < K || e.length > L ? {
						error: V(),
						state: g.a.Invalid
					} : e === this.props.initialUsername ? z : await this.validateUsername(e), this.validateUsername = async e => {
						const {
							apiContext: t
						} = this.props, a = t(), n = await Object(B.a)(a, {
							username: e
						});
						return n.ok ? !0 === n.body ? z : {
							error: Y(),
							state: g.a.Invalid
						} : n.error && n.error.fields && n.error.fields[0] ? {
							error: n.error.fields[0].msg,
							state: g.a.Invalid
						} : {
							error: F(),
							state: g.a.Invalid
						}
					}, this.callCheckUsername = async e => {
						const {
							error: t,
							state: a
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: a
						})
					}, this.debounceCheckUsername = p()(this.callCheckUsername, P), this.handleContinue = async () => {
						const {
							username: e
						} = this.props, {
							error: t,
							state: a
						} = await this.checkUsername(e);
						this.setState({
							error: t,
							state: a
						}), a === g.a.Valid && this.props.onContinue()
					}, this.updateUsernameField = async e => {
						const t = e.currentTarget.value;
						this.props.onUsernameChange(t), this.debounceCheckUsername(t)
					}, this.onSuggestedUsernameClickHandler = e => {
						this.props.onUsernameChange(e), this.setState(z)
					}
				}
				async componentDidMount() {
					const {
						initialUsername: e,
						username: t
					} = this.props;
					t !== e && this.callCheckUsername(t), this.props.shouldSendEvents && this.props.sendEvent(Object(S.f)(J))
				}
				render() {
					const {
						isResponsive: e,
						username: t
					} = this.props, {
						error: a,
						state: s
					} = this.state, o = s === g.a.Valid;
					return r.a.createElement(Q.a, {
						bodyClassName: R.a.changeUsernameModalBody,
						className: Object(c.a)(R.a.changeUsernameModalContainer, {
							[R.a["m-responsive"]]: e
						}),
						title: this.props.title
					}, r.a.createElement(g.b, {
						className: Object(c.a)(R.a.input, R.a.usernameInput),
						errorMessage: a || void 0,
						onChange: this.updateUsernameField,
						spellCheck: !1,
						successMessage: o && H() || void 0,
						value: t,
						validityState: s || void 0
					}), r.a.createElement(k, {
						onSuggestedUsernameClick: this.onSuggestedUsernameClickHandler
					}), r.a.createElement("div", {
						className: D.a.buttonWrapper
					}, r.a.createElement(N.f, {
						className: Object(c.a)(D.a.commonBtn, D.a.primaryBtn),
						disabled: !o,
						onClick: this.handleContinue
					}, n.fbt._("Continue", null, {
						hk: "3a8GoU"
					}))))
				}
			}
			var q = Object(h.a)(Object(b.b)(Object(w.c)(Z))),
				W = e => r.a.createElement("svg", {
					className: e.className,
					fill: "none",
					viewBox: "0 0 22 33",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M11.5892 0.108026C8.08052 0.108026 4.66647 1.24605 1.8595 3.35127C1.52801 3.58772 1.25301 3.89466 1.05426 4.25005C0.855522 4.60543 0.737974 5.00043 0.710066 5.40665C0.682158 5.81287 0.744583 6.22023 0.892855 6.59946C1.04113 6.97868 1.27157 7.32035 1.56761 7.59992L1.7622 7.79451C2.24701 8.21875 2.86933 8.4526 3.51355 8.4526C4.15778 8.4526 4.7801 8.21875 5.26491 7.79451C6.88036 6.49442 8.86893 5.74445 10.9406 5.65397C13.5352 5.65397 14.9946 6.85397 14.9946 8.57289C14.9946 10.2918 13.9244 11.6215 11.5568 12.9837C9.57432 13.9788 8.03569 15.6794 7.24328 17.7513C6.98395 18.2114 6.81859 18.7186 6.7568 19.2432C6.74223 19.8498 6.91502 20.4462 7.25162 20.9511C7.58823 21.456 8.07229 21.8449 8.63788 22.0648C9.00788 22.218 9.40496 22.2953 9.80544 22.2918C10.6092 22.2897 11.3836 21.9892 11.9784 21.4486C12.3266 21.049 12.5716 20.5702 12.6919 20.054L12.919 19.2432C13.2108 17.6864 14.0865 16.8432 16.6163 15.5459C18.1368 14.9535 19.4381 13.9073 20.3434 12.5495C21.2486 11.1917 21.7138 9.58811 21.6757 7.95667C21.6757 3.41613 18.1081 0.108026 11.5892 0.108026Z",
					fill: "#FF585B"
				}), r.a.createElement("path", {
					d: "M9.99999 32.2163C9.57316 32.2187 9.15004 32.1369 8.75489 31.9755C8.35974 31.8141 8.00034 31.5763 7.69729 31.2757C7.41081 30.9605 7.18045 30.5985 7.01621 30.2055C6.85002 29.8155 6.76188 29.3968 6.75675 28.973C6.7687 28.1143 7.10464 27.2918 7.69729 26.6703C8.00573 26.375 8.36945 26.1436 8.76756 25.9892C9.35819 25.7409 10.0092 25.673 10.6383 25.7942C11.2675 25.9154 11.8466 26.2203 12.3027 26.6703C12.8953 27.2918 13.2313 28.1143 13.2432 28.973C13.2381 29.3968 13.15 29.8155 12.9838 30.2055C12.8195 30.5985 12.5892 30.9605 12.3027 31.2757C11.9996 31.5763 11.6402 31.8141 11.2451 31.9755C10.8499 32.1369 10.4268 32.2187 9.99999 32.2163Z",
					fill: "#FF585B"
				})),
				X = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 41 55",
					enableBackground: "new 0 0 41 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("image", {
					id: "image0",
					width: "41",
					height: "55",
					x: "0",
					y: "0",
					href: "data:image/png;base64,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 NDQ6NDArMDA6MDCOM4QYAAAAAElFTkSuQmCC"
				}));
			var G = Object(h.a)(e => r.a.createElement(Q.a, {
					bodyClassName: R.a.confirmModalBody,
					className: Object(c.a)(R.a.confirmModalContainer, {
						[R.a["m-responsive"]]: e.isResponsive
					}),
					description: e.description,
					descriptionClassName: Object(c.a)(R.a.confirmModalDescription, {
						[R.a.saveDescription]: e.isSaveConfirm
					}),
					headerClassName: R.a.confirmModalHeader,
					icon: e.isSecondConfirm ? r.a.createElement(W, null) : r.a.createElement(X, null),
					iconClassName: Object(c.a)(R.a.confirmModalIcon, {
						[R.a.questionIcon]: e.isSecondConfirm
					})
				}, r.a.createElement("div", {
					className: D.a.username
				}, r.a.createElement("span", {
					className: D.a.usernamePrefix
				}, "u/"), e.username), r.a.createElement("div", {
					className: D.a.buttonWrapper
				}, r.a.createElement(N.f, {
					className: Object(c.a)(D.a.commonBtn, D.a.primaryBtn),
					disabled: e.isSaveConfirm && e.isSaving,
					onClick: e.onPrimaryButtonClick
				}, e.primaryButtonText()), r.a.createElement(N.n, {
					className: Object(c.a)(D.a.commonBtn, D.a.secondaryBtn),
					disabled: e.isSecondConfirm && e.isSaving,
					onClick: e.onSecondaryButtonClick
				}, e.secondaryButtonText())))),
				$ = a("./src/reddit/components/Settings/modalIds.ts");
			var ee = a("./src/reddit/models/Toast/index.ts"),
				te = a("./src/reddit/selectors/activeModalId.ts"),
				ae = a("./src/reddit/selectors/responsiveSettings.ts"),
				ne = a("./src/reddit/components/ChangeUsernameModals/index.m.less"),
				se = a.n(ne);
			const re = Object(i.c)({
					changeUsernameModalOpen: Object(te.b)($.b),
					confirmSaveUsernameModalOpen: Object(te.b)($.d),
					interceptActionModalOpen: Object(te.b)($.e),
					isResponsiveSettingsEnabled: ae.a,
					secondConfirmKeepUsernameModalOpen: Object(te.b)($.f)
				}),
				oe = Object(o.b)(re, e => ({
					confirmChangeUsername: () => {
						e(Object(d.g)($.e)), e(Object(d.h)($.b))
					},
					confirmKeepUsername: () => {
						e(Object(d.g)($.e)), e(Object(d.h)($.f))
					},
					continueChangeUsername: () => {
						e(Object(d.g)($.b)), e(Object(d.h)($.d))
					},
					goBack: () => {
						e(Object(d.g)($.d)), e(Object(d.h)($.b))
					},
					saveUsernameError: t => {
						let a = "";
						t && t.fields && t.fields.length && (a = t.fields.map(e => e.msg).join(", ")), e(Object(m.e)({
							duration: m.a,
							kind: ee.b.Error,
							text: a || n.fbt._("Sorry, something went wrong. Try again later.", null, {
								hk: "3HcWgL"
							})
						}))
					},
					saveUsernameSuccess: t => {
						e(Object(d.f)()), e(Object(m.e)({
							kind: ee.b.SuccessCommunityGreen,
							text: n.fbt._("Nice name, u/{username}. May it serve you well.", [n.fbt._param("username", t)], {
								hk: "3TWtHg"
							})
						})), e(Object(l.e)(t))
					}
				})),
				ie = () => n.fbt._("Change Username", null, {
					hk: "1nRhNE"
				}),
				ce = () => n.fbt._("Keep Username", null, {
					hk: "4hDTRV"
				}),
				le = () => n.fbt._("Save Username", null, {
					hk: "2Ufmnc"
				}),
				de = () => n.fbt._("Saving Username", null, {
					hk: "deHEB"
				}),
				me = () => n.fbt._("Go Back", null, {
					hk: "3hUBIW"
				});
			t.default = Object(b.b)(oe(e => {
				let {
					apiContext: t,
					changeUsernameModalOpen: a,
					confirmChangeUsername: o,
					confirmKeepUsername: i,
					confirmSaveUsernameModalOpen: l,
					continueChangeUsername: d,
					goBack: m,
					interceptActionModalOpen: u,
					isResponsiveSettingsEnabled: p,
					saveUsernameError: h,
					saveUsernameSuccess: g,
					secondConfirmKeepUsernameModalOpen: v,
					username: C
				} = e;
				const b = Object(c.a)({
						[se.a["m-responsive"]]: p
					}),
					[j, E] = Object(s.useState)(C || ""),
					[U, y] = Object(s.useState)(!1),
					M = Object(s.useCallback)(e => {
						E(e)
					}, [E]),
					k = Object(s.useCallback)(async () => {
						y(!0);
						const e = await ((e, t) => Object(f.b)(Object(x.a)(e, [O.a]), {
							method: A.ab.POST,
							endpoint: "".concat(e.apiUrl, "/api/update_name"),
							data: {
								api_type: "json",
								new_name: t
							},
							type: "form"
						}))(t(), j);
						e.ok ? g(j) : h(e.error), y(!1)
					}, [t, y, h, g, j]);
				return r.a.createElement(s.Fragment, null, u && r.a.createElement(G, {
					description: n.fbt._("Before continuing, confirm that you want to keep this as your Reddit username.", null, {
						hk: "RW6LH"
					}),
					isResponsive: p,
					onPrimaryButtonClick: o,
					onSecondaryButtonClick: i,
					overlayClassName: b,
					primaryButtonText: ie,
					secondaryButtonText: ce,
					username: j,
					withOverlay: !0
				}), v && r.a.createElement(G, {
					description: n.fbt._("Ok, just to confirm your confirmation… Are you absolutely sure? This will be your name forever.", null, {
						hk: "1Ana2M"
					}),
					isResponsive: p,
					isSecondConfirm: !0,
					onPrimaryButtonClick: () => {
						k()
					},
					onSecondaryButtonClick: o,
					overlayClassName: b,
					primaryButtonText: U ? de : ce,
					secondaryButtonText: ie,
					username: j,
					withOverlay: !0
				}), a && r.a.createElement(q, {
					initialUsername: C || "",
					isResponsive: p,
					onContinue: d,
					onUsernameChange: M,
					overlayClassName: b,
					title: n.fbt._("Change username", null, {
						hk: "1XHZYQ"
					}),
					username: j,
					withOverlay: !0
				}), l && r.a.createElement(G, {
					description: n.fbt._("Are you sure? This will be your username forever.", null, {
						hk: "3wH10R"
					}),
					isResponsive: p,
					isSaveConfirm: !0,
					isSaving: U,
					onPrimaryButtonClick: () => {
						k()
					},
					onSecondaryButtonClick: m,
					overlayClassName: b,
					primaryButtonText: U ? de : le,
					secondaryButtonText: me,
					username: j,
					withOverlay: !0
				}))
			}))
		},
		"./src/reddit/components/ChangeUsernameTooltip/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/EmailCollection/Input/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/EmailCollection/Input/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				i = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				c = a("./src/reddit/components/EmailCollection/Input/index.m.less"),
				l = a.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m, u = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]])
				}
				return a
			};
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(m || (m = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: a,
					successMessage: n,
					validityState: c
				} = e, p = u(e, ["className", "errorMessage", "successMessage", "validityState"]), h = c === m.Valid, g = c === m.Invalid;
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.container, h && l.a.valid, g && l.a.invalid, t)
				}, s.a.createElement("input", d({}, p, {
					className: l.a.input
				})), h && s.a.createElement("div", {
					className: l.a.icon
				}, s.a.createElement(o.a, null)), g && s.a.createElement("div", {
					className: l.a.icon
				}, s.a.createElement(i.a, null)), g && a && s.a.createElement("p", {
					className: l.a.error
				}, a), h && n && s.a.createElement("p", {
					className: l.a.success
				}, n))
			}
		},
		"./src/reddit/components/Settings/ModalContainer/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Settings/ModalContainer/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Close/index.tsx"),
				i = a("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				c = a.n(i);
			t.a = e => {
				const {
					bodyClassName: t,
					children: a,
					className: n,
					description: i,
					descriptionClassName: l,
					headerClassName: d,
					icon: m,
					iconClassName: u,
					onClose: p,
					title: h
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.container, n)
				}, p && s.a.createElement("button", {
					className: c.a.closeButton,
					onClick: p
				}, s.a.createElement(o.a, {
					className: c.a.closeIcon
				})), s.a.createElement("div", {
					className: Object(r.a)(c.a.header, d)
				}, m && s.a.createElement("div", {
					className: Object(r.a)(c.a.icon, u)
				}, m), s.a.createElement("h2", {
					className: c.a.title
				}, h)), i && s.a.createElement("p", {
					className: Object(r.a)(c.a.description, l)
				}, i), s.a.createElement("div", {
					className: Object(r.a)(c.a.body, t)
				}, a))
			}
		},
		"./src/reddit/components/Settings/SuggestedUsernames/index.m.less": function(e, t, a) {
			e.exports = {
				suggestedUsernames: "_1E2kAa0tJoEy_JkCDssPe3",
				suggestedUsername: "YfJBUmZCRoeR0KkYmxUA5",
				refreshContainer: "_2IjK-L5x_zM-2yHDk5Kkym",
				refreshButton: "_1Z5t703wkMd44jwxPP0cIw",
				refreshIcon: "_27lXx2em8b5a9bWaBDnNke"
			}
		},
		"./src/reddit/components/Settings/accountModals.m.less": function(e, t, a) {
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
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
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
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, a) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Warning/index.m.less"),
				i = a.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.warning, e.className),
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
//# sourceMappingURL=ChangeUsernameModals.a2c74ced5700eede1889.js.map