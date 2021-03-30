// https://www.redditstatic.com/desktop2x/GivePremiumModal.a3a13cb3786b4a95db85.js
// Retrieved at 3/30/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GivePremiumModal", "givePremiumTrackers"], {
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, n) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = n("./src/reddit/components/CoinBalance/index.m.less"),
				d = n.n(l);
			t.a = e => r.a.createElement("div", {
				className: Object(a.a)(d.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(s.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [s.fbt._param("Coin icon placeholder", ":coin:"), s.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": r.a.createElement(i.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, s.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/GivePremiumModal/index.m.less": function(e, t, n) {
			e.exports = {
				modalMain: "_1i9zV0TbJTAKzbt477tdYQ",
				description: "_2KKTUV_OO23NSJFDKs1lam",
				coinCountSection: "_2olO3cu-WrR3BDp-0eBsx2",
				coinCount: "-GjESeFHZSzyMF-BegTIc",
				actions: "_3jiy680fcnUNus6WNE-yZF",
				confirmButton: "Un4sP3nC4NkqrM31FL9Lv",
				loadingIcon: "_3C2Xuevw2WKoSRGbKwRmsB",
				dropdownSelector: "_2b7lX6zyXFLjEcbAVKTwk",
				menuContent: "_3TuLBtfC7me8kga8JIgEaW",
				messageInputOpen: "_3epVS9ApLOyQuS2g_g-u6L",
				checkbox: "_2uI8j5XcyTX7xgSCFH29It",
				textArea: "OM89692cvh4ofhcKbb6G1"
			}
		},
		"./src/reddit/components/GivePremiumModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/GivePremiumModal/index.m.less"),
				l = n.n(i),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				h = n("./src/reddit/helpers/trackers/givePremium.ts"),
				x = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				E = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/omitHeaders/index.ts"),
				k = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var O = async (e, t, n, s, o, r) => {
				const a = {
					recipient: n,
					months: t,
					is_anonymous: s,
					message: o,
					correlation_id: r
				};
				return Object(f.a)(Object(g.a)(e, [k.a]), {
					method: x.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/give_premium`,
					data: a
				}).then(e => e.ok ? {
					...e
				} : e.error && e.error.type ? e : {
					...e,
					error: Object(C.a)(e)
				})
			}, v = n("./src/reddit/helpers/correlationIdTracker.ts"), _ = n("./src/reddit/models/Toast/index.ts"), y = n("./src/reddit/selectors/premium.ts"), w = n("./src/reddit/actions/gold/constants.ts");
			Object(b.a)(w.z), Object(b.a)(w.B), Object(b.a)(w.A), Object(b.a)(w.D);
			const I = Object(b.a)(w.y),
				j = Object(b.a)(w.x),
				N = e => async (t, n) => {
					await t(j(e));
					const o = Object(y.a)(n());
					if (o) {
						const n = ((e, t) => {
							switch (!0) {
								case e && e.error && e.error.type && e.error.type === x.E.AUTHENTICATION_ERROR:
									return s.fbt._("There was an authentication error", null, {
										hk: "12YR0w"
									});
								case e && e.error && e.error.type && e.error.type === x.E.INVALID_PREMIUM_AMOUNT:
									return s.fbt._("That Premium gift amount is invalid.", null, {
										hk: "3XzSbH"
									});
								default:
									return t
							}
						})(e, o);
						t(Object(E.f)({
							kind: _.b.Error,
							duration: E.a,
							text: n
						}))
					}
				}, S = Object(b.a)(w.C), D = e => async (t, n) => {
					const o = n(),
						r = Object(y.d)(o);
					t(S(e));
					const a = s.fbt._("Success! You’ve given Premium to {recipient username}!", [s.fbt._param("recipient username", `u/${r}`)], {
						hk: "3cBrLk"
					});
					t(Object(E.f)({
						kind: _.b.SuccessCommunity,
						text: a
					}))
				};
			var M = n("./src/reddit/actions/gold/modals.ts"),
				T = n("./src/reddit/components/CoinBalance/index.tsx"),
				P = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				R = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				L = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				A = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				B = n("./src/reddit/controls/TextButton/index.tsx"),
				K = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				G = n("./src/reddit/models/Gold/Premium/index.ts"),
				F = n("./src/reddit/selectors/user.ts");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const W = 10,
				X = Object(c.c)({
					coinBalance: F.d,
					isEmployee: F.G,
					isPending: y.b,
					recipientName: y.d
				}),
				z = Object(a.b)(X, e => ({
					closeModal: () => e(Object(M.b)()),
					onGivePremium: (t, n, s, o, r) => {
						e(((e, t, n, s) => async (o, r, {
							apiContext: a
						}) => {
							o(I());
							try {
								const r = await O(a(), t, e, n, s, Object(v.c)(v.a.GiftPremiumFlow));
								if (r.error) await o(N(r));
								else {
									const e = r.body;
									await o(D(e)), Object(v.b)(v.a.GiftPremiumFlow)
								}
							} catch (c) {
								await o(N(c))
							}
						})(t, n, s, o ? r : ""))
					}
				}));
			class H extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						includeMessage: !1,
						isAnonymous: !0,
						message: "",
						messageTypeEventSent: !1,
						selectedPackage: G.a.PREMIUM_1_MONTH
					}, this.handleEscapeKey = e => {
						const {
							closeModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					}, this.onGivePremium = () => {
						const {
							onGivePremium: e,
							recipientName: t,
							sendEvent: n
						} = this.props, {
							includeMessage: s,
							isAnonymous: o,
							message: r,
							selectedPackage: a
						} = this.state;
						n(Object(h.clickConfirmEvent)()), e(t, a.monthsOfPremium, o, s, r)
					}, this.onClickClose = () => {
						const {
							closeModal: e,
							sendEvent: t
						} = this.props;
						e(), t(Object(h.clickCloseModalEvent)())
					}, this.onClickOption = e => {
						const {
							sendEvent: t
						} = this.props, n = e.value;
						this.setState({
							selectedPackage: n
						}), t(Object(h.selectPremiumPackageEvent)(n))
					}, this.handleToggleAnonymous = () => {
						const {
							sendEvent: e
						} = this.props, {
							isAnonymous: t
						} = this.state, n = t ? "uncheck" : "check";
						this.setState({
							isAnonymous: !t
						}), e(Object(h.triggerAnonymousEvent)(n))
					}, this.handleToggleIncludeMessage = () => {
						this.setState({
							includeMessage: !this.state.includeMessage
						})
					}, this.handleClickMessageInput = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(h.clickMessageInputEvent)())
					}, this.handleMessageInput = e => {
						const {
							sendEvent: t
						} = this.props;
						this.setState({
							includeMessage: !0,
							message: e.target.value
						}), this.state.messageTypeEventSent || (t(Object(h.typeMessageInputEvent)()), this.setState({
							messageTypeEventSent: !0
						}))
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						sendEvent: e
					} = this.props;
					this.setState({
						isAnonymous: Object(p.n)()
					}), e(Object(h.viewGivePremiumModalEvent)())
				}
				componentWillUnmount() {
					Object(p.fb)(this.state.isAnonymous), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				getDropdownMenuItems() {
					const {
						coinBalance: e,
						isEmployee: t
					} = this.props;
					return Object(G.e)(e, t).map(e => ({
						displayText: Object(G.f)(e),
						value: e
					}))
				}
				render() {
					const {
						className: e,
						coinBalance: t,
						isPending: n,
						recipientName: o
					} = this.props, {
						includeMessage: a,
						isAnonymous: c,
						message: i,
						selectedPackage: d
					} = this.state, u = Object(G.f)(d), p = a ? [l.a.messageInputOpen] : "";
					return r.a.createElement(P.d, {
						className: e
					}, r.a.createElement(P.h, null, r.a.createElement(K.a, null, r.a.createElement(P.p, null, s.fbt._("Give Premium", null, {
						hk: "4APAYj"
					})), r.a.createElement(B.a, {
						onClick: this.onClickClose
					}, r.a.createElement(P.b, null)))), r.a.createElement("div", {
						className: l.a.modalMain
					}, r.a.createElement("span", {
						className: l.a.description
					}, s.fbt._("Use coins to give Premium to {recipient username}:", [s.fbt._param("recipient username", `u/${o}`)], {
						hk: "1cRm3J"
					})), r.a.createElement(L.b, {
						className: l.a.dropdownSelector,
						displayText: u,
						options: this.getDropdownMenuItems(),
						onSelect: this.onClickOption
					}), r.a.createElement("div", {
						className: Object(m.a)(l.a.menuContent, p)
					}, r.a.createElement("div", null, r.a.createElement(R.a, {
						className: l.a.checkbox,
						isSelected: c,
						text: s.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})), r.a.createElement("div", null, r.a.createElement(R.a, {
						className: l.a.checkbox,
						isSelected: a,
						text: s.fbt._("Add a message", null, {
							hk: "I4chZ"
						}),
						onClick: this.handleToggleIncludeMessage
					})), r.a.createElement(P.s, {
						className: Object(m.a)(l.a.textArea, p),
						"data-redditstyle": !0,
						value: i,
						maxLength: 2048,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleMessageInput,
						placeholder: s.fbt._("Type here...", null, {
							hk: "1O7V4Q"
						})
					}))), r.a.createElement(P.f, null, r.a.createElement(K.a, {
						className: l.a.coinCountSection
					}, r.a.createElement(T.a, {
						className: l.a.coinCount,
						coinBalance: t
					}), r.a.createElement("div", {
						className: l.a.actions
					}, r.a.createElement(P.a, {
						onClick: this.onClickClose
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(P.q, {
						className: l.a.confirmButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onGivePremium
					}, n ? r.a.createElement(A.a, {
						className: l.a.loadingIcon,
						sizePx: W
					}) : s.fbt._("Confirm", null, {
						hk: "2nHzsu"
					}))))))
				}
			}
			const V = Object(d.a)(Object(u.c)(H));
			t.default = z(e => r.a.createElement(V, U({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeModal
			})))
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(c.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				x = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(c.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(i.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(c.a)(x.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(c.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(d.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(c.a)(x.a.row, e, {
					[x.a.mIsInteractive]: !t.noHover,
					[x.a.mIsSelected]: t.isSelected,
					[x.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(E, b({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				l = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/icons/svgs/Dropdown/index.tsx");
			const p = e => {
				e.preventDefault()
			};
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = o.a.createRef(), this.menuItems = o.a.createRef(), this.containerRef = o.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: s
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), s(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const n = this.menuItems.current.getElementsByClassName(a.a.menuOption);
							for (let s = 0; s < n.length; s++) e.relatedTarget === n[s] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(a.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(a.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n
					} = this.props;
					return e.map((e, s) => o.a.createElement(l.b, {
						key: s + e.displayText,
						className: Object(c.a)(a.a.menuOption, {
							[a.a.topics]: n
						}),
						noIcon: !0,
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isTopicsStyle: r,
						menuItemsClassName: l,
						name: h,
						isSaving: x
					} = this.props, {
						isOpen: b
					} = this.state;
					return o.a.createElement(i.b.Consumer, null, ({
						[i.a.Icons]: E
					}) => o.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(c.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: r
						})
					}, o.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(c.a)(e, a.a.selector, {
							[a.a.compact]: s
						}, {
							[a.a.topics]: r
						}),
						name: h,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, o.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, n), x ? o.a.createElement(d.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : E ? o.a.createElement(m.a, {
						name: "caret_down"
					}) : o.a.createElement(u.b, {
						className: a.a.caretDown
					})), o.a.createElement("div", {
						className: Object(c.a)(a.a.menuItems, l, {
							[a.a.topics]: r
						}),
						onMouseDown: p,
						ref: this.menuItems
					}, b && this.getDropdownMenuItems())))
				}
			}
			t.b = h
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, s) => (s % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => o.a.createElement(o.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return e;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "clickGivePremiumEvent", (function() {
				return c
			})), n.d(t, "viewGivePremiumModalEvent", (function() {
				return i
			})), n.d(t, "selectPremiumPackageEvent", (function() {
				return l
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return d
			})), n.d(t, "clickMessageInputEvent", (function() {
				return m
			})), n.d(t, "typeMessageInputEvent", (function() {
				return u
			})), n.d(t, "clickConfirmEvent", (function() {
				return p
			})), n.d(t, "clickCloseModalEvent", (function() {
				return h
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/gild.ts");
			const a = e => ({
					...s.defaults(e),
					correlationId: Object(r.b)(e) || Object(o.d)(o.a.GiftPremiumFlow, !1),
					screen: s.screen(e),
					subreddit: s.subreddit(e)
				}),
				c = () => e => ({
					...a(e),
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				i = () => e => ({
					...a(e),
					source: "give_premium",
					action: "view",
					noun: "modal"
				}),
				l = e => t => ({
					...a(t),
					source: "give_premium",
					action: "select",
					noun: `premium_${e.monthsOfPremium}`
				}),
				d = e => t => ({
					...a(t),
					source: "give_premium",
					action: e,
					noun: "anonymous"
				}),
				m = () => e => ({
					...a(e),
					source: "give_premium",
					action: "click",
					noun: "message_input"
				}),
				u = () => e => ({
					...a(e),
					source: "give_premium",
					action: "type",
					noun: "message_input"
				}),
				p = () => e => ({
					...a(e),
					source: "give_premium",
					action: "click",
					noun: "confirm"
				}),
				h = () => e => ({
					...a(e),
					source: "give_premium",
					action: "click",
					noun: "close"
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(l);
			const m = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(c.a)();
				return o.a.createElement("i", {
					className: Object(r.a)(e.className, Object(i.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || a.b.gold
					}
				})
			}, "CoinIcon", d.a);
			t.a = m
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return o.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", i.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GivePremiumModal.a3a13cb3786b4a95db85.js.map