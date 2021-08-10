// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ChatSettings.e52a9ef1f50a7ab16c5d.js
// Retrieved at 8/10/2021, 6:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-ChatSettings"], {
		"./src/reddit/components/ModHub/ChatSettings/AccessDisabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1AXwtRo5csnVZ0TFBa4HHd"
			}
		},
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
				loadingIcon: "_1POrXTV5EKVs2RJjGRPIRx",
				modAccessBanner: "_3ISR6CN21VNsb1Xe7g5eYL"
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
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				g = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/pages/chatSettings.ts"),
				u = s("./src/reddit/components/BlockNavigation/index.tsx"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				f = s("./src/reddit/constants/colors.ts"),
				S = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				v = s("./src/reddit/components/ModHub/ChatSettings/AccessDisabledBanner/index.m.less"),
				C = s.n(v);
			var x = e => c.a.createElement(b.a, {
					className: e.className,
					color: f.b.quarantine,
					icon: c.a.createElement(S.a, {
						className: C.a.icon
					}),
					title: n.fbt._("Chat mod permissions required", null, {
						hk: "AFact"
					}),
					subtitle: n.fbt._('This page requires "chat config" or "chat operator" moderator permissions to modify settings', null, {
						hk: "3ELZle"
					})
				}),
				_ = s("./node_modules/lodash/times.js"),
				E = s.n(_),
				N = s("./src/lib/classNames/index.ts"),
				L = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				j = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/components/ModHub/ChatSettings/FormPlaceholder/index.m.less"),
				w = s.n(O);
			const y = ({
				subredditName: e
			}) => c.a.createElement(L.c, {
				text: n.fbt._("No chat settings in r/{subredditName}", [n.fbt._param("subredditName", e)], {
					hk: "268tZg"
				})
			}, c.a.createElement(k.a, {
				name: "settings",
				className: w.a.SettingsIcon
			}));
			var B = ({
					isLoading: e
				}) => c.a.createElement("div", {
					className: Object(N.a)(w.a.container, Object(j.a)({
						isLoading: !1
					}))
				}, c.a.createElement("div", {
					className: w.a.section
				}, c.a.createElement("div", {
					className: Object(N.a)(w.a.sectionTitle, Object(j.b)({
						isLoading: e
					}))
				}), c.a.createElement("div", {
					className: w.a.line
				}), E()(5).map(t => c.a.createElement("div", {
					key: t,
					className: Object(N.a)(w.a.sectionBodyRow, Object(j.b)({
						isLoading: e
					}))
				})))),
				M = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/logs/console.ts")),
				H = s("./src/lib/lessComponent.tsx"),
				I = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				U = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				P = s("./src/reddit/components/ModHub/ChatSettings/index.m.less"),
				A = s.n(P);
			const F = H.a.wrapped(I.o, "toggleSetting", A.a);
			var D = ({
					controlState: e,
					controlState: {
						state: t,
						isEditable: s,
						title: a,
						description: o,
						descriptionUrl: i
					},
					onChange: r
				}) => c.a.createElement(F, {
					on: t,
					forceOn: !0,
					disabled: !s,
					onClick: () => r({
						...e,
						state: !t
					}),
					label: a,
					subtext: o && c.a.createElement("span", null, o, i && c.a.createElement(U.a, {
						className: A.a.welcomeMessageHelpLink,
						href: i,
						rel: "noopener noreferrer",
						target: "_blank"
					}, n.fbt._("Learn more.", null, {
						hk: "180L0O"
					})))
				}),
				R = s("./src/reddit/models/ChatSettingsPage/index.ts");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = (e, t) => {
				switch (e.controlState.settingType) {
					case R.a.Toggle:
						return c.a.createElement(D, T({
							key: `settings-control-${t}`
						}, e));
					default:
						return Object(M.a)(`Undefined settings control type: ${e.controlState.settingType}`), null
				}
			};
			class Z extends c.a.Component {
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
						return c.a.createElement(c.a.Fragment, null, e.map((e, n) => K({
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
					return c.a.createElement(c.a.Fragment, null, Object.keys(e).map((t, s) => c.a.createElement("fieldset", {
						key: `settings-group-${s}`
					}, c.a.createElement("legend", {
						className: A.a.sectionLegend
					}, t), this.buildControls(e[t]))), this.buildControls(t))
				}
			}
			var Y = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/controls/Button/index.tsx"),
				q = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				Q = s("./src/reddit/selectors/activeModalId.ts"),
				V = s("./src/reddit/selectors/chat.ts"),
				z = s("./src/reddit/selectors/chatSettingsPage.ts"),
				G = s("./src/reddit/selectors/platform.ts");
			const J = "chat-settings-discard-confirmation",
				$ = Object(m.c)({
					allowNavigationCallback: G.a,
					isDiscardModalOpen: Object(Q.b)(J),
					isLoading: z.b,
					settings: z.a,
					isChatModerator: (e, {
						subredditId: t
					}) => {
						const s = {
							subredditId: t
						};
						return Object(V.c)(e, s)
					}
				}),
				ee = Object(l.b)($, (e, {
					subredditId: t
				}) => ({
					closeAllModals: () => e(Object(g.f)()),
					toggleModal: t => e(Object(g.i)(t)),
					onSave: (s, n) => e(Object(h.f)(t, s, n))
				}));
			class te extends c.a.Component {
				constructor(e) {
					super(e), this.formBodyRef = c.a.createRef(), this.isUnmounted = !1, this.resetPendingNavigation = () => {
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
						subredditName: s,
						isChatModerator: a
					} = this.props, {
						isLoaded: o,
						hasUnsavedChanges: i
					} = e;
					return c.a.createElement("div", {
						className: A.a.container
					}, c.a.createElement(Y.c, {
						className: A.a.topBar
					}, c.a.createElement(X.i, {
						disabled: t || !i,
						onClick: this.onSaveClick
					}, e.hasJustSaved ? n.fbt._("Saved", null, {
						hk: "38ZPdi"
					}) : e.isSavePending ? c.a.createElement(q.a, {
						className: A.a.loadingIcon,
						sizePx: 10
					}) : n.fbt._("Save changes", null, {
						hk: "TTPsK"
					}))), c.a.createElement(Y.a, {
						className: A.a.contentContainer
					}, c.a.createElement(Y.b, null, n.fbt._("Chat settings", null, {
						hk: "174Drb"
					})), !a && c.a.createElement(x, {
						className: A.a.modAccessBanner
					}), o ? c.a.createElement("div", {
						className: A.a.formBody,
						onBlur: this.onFormFieldBlur,
						ref: this.formBodyRef
					}, this.state.formState && this.state.formState.length ? c.a.createElement(Z, {
						formState: this.state.formState,
						isLoading: t,
						onChange: this.onFormStateChange
					}) : c.a.createElement(y, {
						subredditName: s
					})) : c.a.createElement(B, {
						isLoading: t
					})), c.a.createElement(u.a, {
						blockOnBeforeUnload: !0,
						dialogId: J,
						enabled: i
					}), this.props.isDiscardModalOpen && c.a.createElement(p.a, {
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
			t.default = ee(Object(W.c)(te))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-ChatSettings.e52a9ef1f50a7ab16c5d.js.map