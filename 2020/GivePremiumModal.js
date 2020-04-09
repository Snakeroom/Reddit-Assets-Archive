// https://www.redditstatic.com/desktop2x/GivePremiumModal.265296dab7d677223f82.js
// Retrieved at 4/9/2020, 2:40:09 PM by Reddit Dataminer v1.0.0
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
				c = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				r = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = n("./src/reddit/components/CoinBalance/index.m.less"),
				d = n.n(l);
			t.a = e => c.a.createElement("div", {
				className: Object(a.a)(d.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(i.a)(s.fbt._("Coin balance:: :coin:{coinBalance}", [s.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "3rsL0j"
			}), {
				":coin:": c.a.createElement(r.a, null)
			}), " ", c.a.createElement("a", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/GivePremiumModal/index.m.less"),
				r = n.n(i),
				l = n("./src/app/strings/index.ts"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/helpers/trackers/givePremium.ts"),
				g = n("./src/lib/constants/index.ts"),
				O = n("./src/lib/makeActionCreator/index.ts"),
				v = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				k = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				j = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var C = async (e, t, n, s, o, c, a) => {
				const i = {
					recipient: s,
					months: n,
					is_anonymous: o,
					message: c,
					correlation_id: a
				};
				return Object(y.b)(Object(k.a)(e, [f.a]), {
					method: g.bb.POST,
					endpoint: "".concat(e.apiUrl, "/api/v2/gold/give_premium"),
					data: i
				}).then(e => e.ok ? Object.assign({}, e) : e.error && e.error.type ? e : Object.assign({}, e, {
					error: Object(j.a)(e)
				}))
			}, E = n("./src/reddit/helpers/correlationIdTracker.ts"), w = n("./src/reddit/models/Toast/index.ts"), _ = n("./src/reddit/selectors/premium.ts"), I = n("./src/reddit/selectors/user.ts"), M = n("./src/reddit/actions/gold/constants.ts");
			Object(O.a)(M.x), Object(O.a)(M.z), Object(O.a)(M.y), Object(O.a)(M.B);
			const N = Object(O.a)(M.w),
				S = Object(O.a)(M.v),
				D = e => async (t, n) => {
					await t(S(e));
					const s = Object(_.a)(n());
					if (s) {
						const o = Object(I.O)(n()),
							c = ((e, t, n) => {
								switch (!0) {
									case e && e.error && e.error.type && e.error.type === g.D.AUTHENTICATION_ERROR:
										return Object(l.a)(n, "error.authentication");
									case e && e.error && e.error.type && e.error.type === g.D.INVALID_PREMIUM_AMOUNT:
										return Object(l.a)(n, "gold.givePremiumToUserModal.invalidPremiumPackage");
									default:
										return t
								}
							})(e, s, o);
						t(Object(v.e)({
							kind: w.b.Error,
							duration: v.a,
							text: c
						}))
					}
				}, P = Object(O.a)(M.A), T = e => async (t, n) => {
					const s = n(),
						o = Object(_.d)(s);
					t(P(e));
					const c = Object(I.O)(s);
					t(Object(v.e)({
						kind: w.b.SuccessCommunity,
						text: Object(l.a)(c, "gold.givePremiumToUserModal.success", {
							user: "u/".concat(o)
						})
					}))
				};
			var B = n("./src/reddit/actions/gold/modals.ts"),
				L = n("./src/reddit/components/CoinBalance/index.tsx"),
				A = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				G = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				R = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = n("./src/reddit/controls/TextButton/index.tsx"),
				W = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				U = n("./src/reddit/models/Gold/Premium/index.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = 10,
				X = Object(a.c)({
					coinBalance: I.d,
					isEmployee: I.D,
					isPending: _.b,
					language: I.O,
					recipientName: _.d
				}),
				J = Object(c.b)(X, e => ({
					closeModal: () => e(Object(B.b)()),
					onGivePremium: (t, n, s, o, c, a) => {
						e(((e, t, n, s, o) => async (c, a, i) => {
							let {
								apiContext: r
							} = i;
							c(N());
							try {
								const a = await C(r(), o, t, e, n, s, Object(E.c)(E.a.GiftPremiumFlow));
								if (a.error) await c(D(a));
								else {
									const e = a.body;
									await c(T(e)), Object(E.b)(E.a.GiftPremiumFlow)
								}
							} catch (l) {
								await c(D(l))
							}
						})(t, n, s, o ? c : "", a))
					}
				}));
			class V extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						includeMessage: !1,
						isAnonymous: !0,
						message: "",
						messageTypeEventSent: !1,
						selectedPackage: U.a.PREMIUM_1_MONTH
					}, this.handleEscapeKey = e => {
						const {
							closeModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					}, this.onGivePremium = () => {
						const {
							language: e,
							onGivePremium: t,
							recipientName: n,
							sendEvent: s
						} = this.props, {
							includeMessage: o,
							isAnonymous: c,
							message: a,
							selectedPackage: i
						} = this.state;
						s(Object(b.clickConfirmEvent)()), t(n, i.monthsOfPremium, c, o, a, e)
					}, this.onClickClose = () => {
						const {
							closeModal: e,
							sendEvent: t
						} = this.props;
						e(), t(Object(b.clickCloseModalEvent)())
					}, this.onClickOption = e => {
						const {
							sendEvent: t
						} = this.props, n = e.value;
						this.setState({
							selectedPackage: n
						}), t(Object(b.selectPremiumPackageEvent)(n))
					}, this.handleToggleAnonymous = () => {
						const {
							sendEvent: e
						} = this.props, {
							isAnonymous: t
						} = this.state, n = t ? "uncheck" : "check";
						this.setState({
							isAnonymous: !t
						}), e(Object(b.triggerAnonymousEvent)(n))
					}, this.handleToggleIncludeMessage = () => {
						this.setState({
							includeMessage: !this.state.includeMessage
						})
					}, this.handleClickMessageInput = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.clickMessageInputEvent)())
					}, this.handleMessageInput = e => {
						const {
							sendEvent: t
						} = this.props;
						this.setState({
							includeMessage: !0,
							message: e.target.value
						}), this.state.messageTypeEventSent || (t(Object(b.typeMessageInputEvent)()), this.setState({
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
						isAnonymous: Object(x.k)()
					}), e(Object(b.viewGivePremiumModalEvent)())
				}
				componentWillUnmount() {
					Object(x.J)(this.state.isAnonymous), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				getDropdownMenuItems() {
					const {
						coinBalance: e,
						isEmployee: t
					} = this.props;
					return Object(U.c)(e, t).map(e => ({
						displayText: Object(U.d)(e),
						value: e
					}))
				}
				render() {
					const {
						className: e,
						coinBalance: t,
						isPending: n,
						language: s,
						recipientName: c
					} = this.props, {
						includeMessage: a,
						isAnonymous: i,
						message: d,
						selectedPackage: h
					} = this.state, x = Object(U.d)(h), b = a ? [r.a.messageInputOpen] : "";
					return o.a.createElement(A.c, {
						className: e
					}, o.a.createElement(A.g, null, o.a.createElement(W.a, null, o.a.createElement(A.n, null, o.a.createElement(u.c, null, "Give Premium")), o.a.createElement(F.a, {
						onClick: this.onClickClose
					}, o.a.createElement(A.b, null)))), o.a.createElement("div", {
						className: r.a.modalMain
					}, o.a.createElement("span", {
						className: r.a.description
					}, Object(l.a)(s, "gold.givePremiumToUserModal.givePremiumToUser", {
						user: "u/".concat(c)
					})), o.a.createElement(G.b, {
						className: r.a.dropdownSelector,
						displayText: x,
						options: this.getDropdownMenuItems(),
						onSelect: this.onClickOption
					}), o.a.createElement("div", {
						className: Object(m.a)(r.a.menuContent, b)
					}, o.a.createElement("div", null, o.a.createElement(K.a, {
						className: r.a.checkbox,
						isSelected: i,
						text: Object(p.c)("Make my gift anonymous"),
						onClick: this.handleToggleAnonymous
					})), o.a.createElement("div", null, o.a.createElement(K.a, {
						className: r.a.checkbox,
						isSelected: a,
						text: Object(p.c)("Add a message"),
						onClick: this.handleToggleIncludeMessage
					})), o.a.createElement(A.q, {
						className: Object(m.a)(r.a.textArea, b),
						"data-redditstyle": !0,
						value: d,
						maxLength: 2048,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleMessageInput,
						placeholder: Object(p.c)("Type here...")
					}))), o.a.createElement(A.e, null, o.a.createElement(W.a, {
						className: r.a.coinCountSection
					}, o.a.createElement(L.a, {
						className: r.a.coinCount,
						coinBalance: t
					}), o.a.createElement("div", {
						className: r.a.actions
					}, o.a.createElement(A.a, {
						onClick: this.onClickClose
					}, o.a.createElement(u.c, null, "Cancel")), o.a.createElement(A.o, {
						className: r.a.confirmButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onGivePremium
					}, n ? o.a.createElement(R.a, {
						className: r.a.loadingIcon,
						sizePx: H
					}) : o.a.createElement(u.c, null, "Confirm"))))))
				}
			}
			const Q = Object(d.a)(Object(h.c)(V));
			t.default = J(e => o.a.createElement(Q, z({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeModal
			})))
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				r = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(r);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(c.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
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
			var g = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			class O extends a.a.Component {
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
					}, n = Object(i.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(r.a, b({}, t, {
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
						className: Object(i.a)(x.a.text, e.textClassName)
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
						className: Object(i.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(d.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, n = g(e, ["className"]);
				const s = Object(i.a)(x.a.row, t, {
					[x.a.mIsInteractive]: !n.noHover,
					[x.a.mIsSelected]: n.isSelected,
					[x.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(O, b({
					className: s
				}, n))
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
				c = n("./node_modules/react-dom/index.js"),
				a = n.n(c),
				i = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = n.n(i),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/icons/svgs/Dropdown/index.tsx");
			const p = e => {
				e.preventDefault()
			};
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = o.a.createRef(), this.menuItems = o.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						const t = a.a.findDOMNode(this);
						t && (t.contains(e.target) || this.setState({
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
							const n = this.menuItems.current.getElementsByClassName(r.a.menuOption);
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
							const t = this.menuItems.current.getElementsByClassName(r.a.menuOption);
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
					const e = this.menuItems.current.getElementsByClassName(r.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n
					} = this.props;
					return e.map((e, s) => o.a.createElement(d.b, {
						key: s + e.displayText,
						className: Object(l.a)(r.a.menuOption, {
							[r.a.topics]: n
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
						isTopicsStyle: c,
						menuItemsClassName: a,
						name: i,
						isSaving: d
					} = this.props, {
						isOpen: h
					} = this.state;
					return o.a.createElement("div", {
						id: this.props.id,
						className: Object(l.a)(r.a.dropdownMenu, t, {
							[r.a.topics]: c
						})
					}, o.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(l.a)(e, r.a.selector, {
							[r.a.compact]: s
						}, {
							[r.a.topics]: c
						}),
						name: i,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, o.a.createElement("span", {
						className: r.a.selectorContent,
						tabIndex: -1
					}, n), d ? o.a.createElement(m.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : o.a.createElement(u.b, {
						className: r.a.caretDown
					})), o.a.createElement("div", {
						className: Object(l.a)(r.a.menuItems, a, {
							[r.a.topics]: c
						}),
						onMouseDown: p,
						ref: this.menuItems
					}, h && this.getDropdownMenuItems()))
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
				c = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(c);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function c(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, s) => (s % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : ":".concat(n, ":") in t ? e.push(t[":".concat(n, ":")]) : e.push(":".concat(n, ":")), e), []).map((e, t) => o.a.createElement(o.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "clickGivePremiumEvent", (function() {
				return a
			})), n.d(t, "viewGivePremiumModalEvent", (function() {
				return i
			})), n.d(t, "selectPremiumPackageEvent", (function() {
				return r
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return l
			})), n.d(t, "clickMessageInputEvent", (function() {
				return d
			})), n.d(t, "typeMessageInputEvent", (function() {
				return m
			})), n.d(t, "clickConfirmEvent", (function() {
				return u
			})), n.d(t, "clickCloseModalEvent", (function() {
				return p
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts");
			const c = e => Object.assign({}, s.defaults(e), {
					correlationId: Object(o.c)(o.a.GiftPremiumFlow),
					screen: s.screen(e),
					subreddit: s.subreddit(e)
				}),
				a = () => e => Object.assign({}, c(e), {
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				i = () => e => Object.assign({}, c(e), {
					source: "give_premium",
					action: "view",
					noun: "modal"
				}),
				r = e => t => Object.assign({}, c(t), {
					source: "give_premium",
					action: "select",
					noun: "premium_".concat(e.monthsOfPremium)
				}),
				l = e => t => Object.assign({}, c(t), {
					source: "give_premium",
					action: e,
					noun: "anonymous"
				}),
				d = () => e => Object.assign({}, c(e), {
					source: "give_premium",
					action: "click",
					noun: "message_input"
				}),
				m = () => e => Object.assign({}, c(e), {
					source: "give_premium",
					action: "type",
					noun: "message_input"
				}),
				u = () => e => Object.assign({}, c(e), {
					source: "give_premium",
					action: "click",
					noun: "confirm"
				}),
				p = () => e => Object.assign({}, c(e), {
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
				c = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				r = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(a.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || c.a.gold
				}
			}), "CoinIcon", r.a);
			t.a = l
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
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = n.n(a);
			const r = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = r
		}
	}
]);
//# sourceMappingURL=GivePremiumModal.265296dab7d677223f82.js.map