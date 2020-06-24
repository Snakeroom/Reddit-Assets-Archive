// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ChatSettings.32d7db1f68ebbea21691.js
// Retrieved at 6/24/2020, 4:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-ChatSettings"], {
		"./src/reddit/components/ModHub/ChatSettings/FormPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_30AE9xRvd4PQWXY5uFMqK",
				section: "_2RvezD_5s3cAu_5iBrKkjh",
				sectionTitle: "IzHmsRbwwhgwvP-Hwl44X",
				line: "tQYRKtCNMQmfwMXzolzrU",
				sectionBodyRow: "_2SDWTtXfZyyJpQdZ_DKBj2",
				SettingsIcon: "_2v80L23IgYZQ2rgeIgvGY9",
				settingsIcon: "_2v80L23IgYZQ2rgeIgvGY9"
			}
		},
		"./src/reddit/components/ModHub/ChatSettings/index.m.less": function(e, t, s) {
			e.exports = {
				welcomeMessageHelpLink: "_1fgwAncSrL3HHA4wHj0RO7",
				container: "_20uV4r-XRorKWAs9M3VK54",
				topBar: "_3ylhGhcPtHHZluAsgFvSqp",
				contentContainer: "_2CUNjBoLeCjI9WgZWEB8Zx",
				formBody: "y0rInsl7cacVfv6zL2Lyg",
				toggleSetting: "_3GUvZqYYfe48eKxwYn7H0Q",
				sectionLegend: "_3XEvU7yIfmDgKL7GiPBkM2",
				loadingIcon: "_1POrXTV5EKVs2RJjGRPIRx"
			}
		},
		"./src/reddit/components/ModHub/ChatSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/debounce.js"),
				o = s.n(a),
				i = s("./node_modules/lodash/isEqual.js"),
				r = s.n(i),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				g = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/pages/chatSettings.ts"),
				u = s("./src/reddit/components/BlockNavigation/index.tsx"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./node_modules/lodash/times.js"),
				S = s.n(b),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				x = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				_ = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				E = s("./src/reddit/components/ModHub/ChatSettings/FormPlaceholder/index.m.less"),
				L = s.n(E);
			const N = v.a.wrapped(_.a, "SettingsIcon", L.a),
				j = e => {
					let {
						subredditName: t
					} = e;
					return l.a.createElement(C.c, {
						text: n.fbt._("No chat settings in r/{subredditName}", [n.fbt._param("subredditName", t)], {
							hk: "268tZg"
						})
					}, l.a.createElement(N, null))
				};
			var O = e => {
					let {
						isLoading: t
					} = e;
					return l.a.createElement("div", {
						className: Object(f.a)(L.a.container, Object(x.a)({
							isLoading: !1
						}))
					}, l.a.createElement("div", {
						className: L.a.section
					}, l.a.createElement("div", {
						className: Object(f.a)(L.a.sectionTitle, Object(x.b)({
							isLoading: t
						}))
					}), l.a.createElement("div", {
						className: L.a.line
					}), S()(5).map(e => l.a.createElement("div", {
						key: e,
						className: Object(f.a)(L.a.sectionBodyRow, Object(x.b)({
							isLoading: t
						}))
					}))))
				},
				k = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/logs/console.ts")),
				w = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				y = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/components/ModHub/ChatSettings/index.m.less"),
				M = s.n(U);
			const H = v.a.wrapped(w.o, "toggleSetting", M.a);
			var P = e => {
					let {
						controlState: t,
						controlState: {
							state: s,
							isEditable: a,
							title: o,
							description: i,
							descriptionUrl: r
						},
						onChange: d
					} = e;
					return l.a.createElement(H, {
						on: s,
						forceOn: !0,
						disabled: !a,
						onClick: () => d(Object.assign({}, t, {
							state: !s
						})),
						label: o,
						subtext: i && l.a.createElement("span", null, i, r && l.a.createElement(y.a, {
							className: M.a.welcomeMessageHelpLink,
							isSponsored: !1,
							source: null,
							href: r,
							rel: "noopener noreferrer",
							target: "_blank"
						}, n.fbt._("Learn more.", null, {
							hk: "180L0O"
						})))
					})
				},
				I = s("./src/reddit/models/ChatSettingsPage/index.ts");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = class extends l.a.Component {
					get groupSettings() {
						const e = {},
							t = [];
						return this.props.formState.forEach(s => {
							const {
								groupName: n
							} = s;
							n ? (e[n] = e[n] || [], e[n].push(s)) : t.push(s)
						}), {
							groupSettings: e,
							otherSettings: t
						}
					}
					buildControls(e) {
						if (e && e.length) {
							const {
								isLoading: t,
								onChange: s
							} = this.props;
							return l.a.createElement(l.a.Fragment, null, e.map((e, n) => ((e, t) => {
								switch (e.controlState.settingType) {
									case I.a.Toggle:
										return l.a.createElement(P, B({
											key: "settings-control-".concat(t)
										}, e));
									default:
										return Object(k.a)("Undefined settings control type: ".concat(e.controlState.settingType)), null
								}
							})({
								controlState: e,
								isLoading: t,
								onChange: s
							}, n)))
						}
						return null
					}
					render() {
						const {
							groupSettings: e,
							otherSettings: t
						} = this.groupSettings;
						return l.a.createElement(l.a.Fragment, null, Object.keys(e).map((t, s) => l.a.createElement("fieldset", {
							key: "settings-group-".concat(s)
						}, l.a.createElement("legend", {
							className: M.a.sectionLegend
						}, t), this.buildControls(e[t]))), this.buildControls(t))
					}
				},
				D = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				T = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				K = s("./src/reddit/selectors/activeModalId.ts"),
				Y = s("./src/reddit/selectors/chatSettingsPage.ts"),
				Z = s("./src/reddit/selectors/platform.ts");
			const W = "chat-settings-discard-confirmation",
				Q = Object(g.c)({
					allowNavigationCallback: Z.a,
					isDiscardModalOpen: Object(K.b)(W),
					isLoading: Y.b,
					settings: Y.a
				}),
				X = Object(c.b)(Q, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						closeAllModals: () => e(Object(m.f)()),
						toggleModal: t => e(Object(m.i)(t)),
						onSave: (t, n) => e(Object(h.f)(s, t, n))
					}
				});
			class z extends l.a.Component {
				constructor(e) {
					super(e), this.formBodyRef = l.a.createRef(), this.isUnmounted = !1, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.updateHasUnsavedChanges = o()(() => {
						this.setState(e => {
							const {
								formState: t,
								initialFormState: s
							} = e, n = !r()(t, s);
							return !s.length && t.length ? {
								initialFormState: t,
								hasUnsavedChanges: !1
							} : n !== e.hasUnsavedChanges ? {
								hasUnsavedChanges: n,
								initialFormState: s
							} : null
						})
					}, 200, {
						maxWait: 500
					}), this.onSaveClick = async () => {
						const {
							initialFormState: e,
							formState: t
						} = this.state, {
							settings: s
						} = this.props;
						if (!s) return;
						this.setState({
							isSavePending: !0
						});
						const n = t || s,
							a = await this.props.onSave(e, n);
						this.isUnmounted || this.setState({
							formState: a || e,
							initialFormState: a || e,
							hasJustSaved: !0,
							isSavePending: !1
						})
					}, this.onFormFieldBlur = () => {
						this.updateHasUnsavedChanges(), this.updateHasUnsavedChanges.flush()
					}, this.onDiscardUnsavedChangesConfirmed = () => {
						this.performPendingNavigationIfNeeded()
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.onFormStateChange = e => {
						const t = [...this.state.formState];
						t.forEach((s, n) => {
							if (s.settingId === e.settingId) return t[n] = e
						}), this.setState({
							formState: t,
							hasJustSaved: !1
						})
					};
					const t = e.settings || [];
					this.state = {
						isLoaded: !e.isLoading,
						formState: t,
						hasJustSaved: !1,
						hasUnsavedChanges: !1,
						initialFormState: t,
						isSavePending: !1
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				componentDidUpdate(e, t) {
					const {
						settings: s
					} = this.props;
					s && !this.state.isLoaded && this.setState({
						isLoaded: !0,
						formState: s
					}), this.updateHasUnsavedChanges()
				}
				render() {
					const {
						state: e
					} = this, {
						isLoading: t,
						subredditName: s
					} = this.props, {
						isLoaded: a,
						hasUnsavedChanges: o
					} = e;
					return l.a.createElement("div", {
						className: M.a.container
					}, l.a.createElement(D.c, {
						className: M.a.topBar
					}, l.a.createElement(R.f, {
						disabled: t || !o,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? n.fbt._("Saved", null, {
						hk: "38ZPdi"
					}) : e.isSavePending ? l.a.createElement(T.a, {
						className: M.a.loadingIcon,
						sizePx: 10
					}) : n.fbt._("Save changes", null, {
						hk: "TTPsK"
					}))), l.a.createElement(D.a, {
						className: M.a.contentContainer
					}, l.a.createElement(D.b, null, n.fbt._("Chat settings", null, {
						hk: "174Drb"
					})), a ? l.a.createElement("div", {
						className: M.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, this.state.formState && this.state.formState.length ? l.a.createElement(F, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					}) : l.a.createElement(j, {
						subredditName: s
					})) : l.a.createElement(O, {
						isLoading: t
					})), l.a.createElement(u.a, {
						blockOnBeforeUnload: !0,
						dialogId: W,
						enabled: o
					}), this.props.isDiscardModalOpen && l.a.createElement(p.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: n.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: n.fbt._("You have made some changes to post requirements, do you wish to discard the changes?", null, {
							hk: "g8FA6"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.default = X(Object(A.c)(z))
		}
	}
]);
//# sourceMappingURL=reddit-components-ModHub-ChatSettings.32d7db1f68ebbea21691.js.map