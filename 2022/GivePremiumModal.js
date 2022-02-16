// https://www.redditstatic.com/desktop2x/GivePremiumModal.29f4a787012c82f2a1cf.js
// Retrieved at 2/16/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
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
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				r = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = n("./src/reddit/components/CoinBalance/index.m.less"),
				d = n.n(l);
			t.a = e => i.a.createElement("div", {
				className: Object(a.a)(d.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(s.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [s.fbt._param("Coin icon placeholder", ":coin:"), s.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": i.a.createElement(r.a, null)
			}), " ", i.a.createElement("a", {
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
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/components/GivePremiumModal/index.m.less"),
				l = n.n(r),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				h = n("./src/reddit/helpers/trackers/givePremium.ts"),
				b = n("./src/lib/constants/index.ts"),
				x = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/lib/makeApiRequest/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				C = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var k = async (e, t, n, s, o, i) => {
				const a = {
					recipient: n,
					months: t,
					is_anonymous: s,
					message: o,
					correlation_id: i
				};
				return Object(E.a)(Object(O.a)(e, [g.a]), {
					method: b.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/give_premium`,
					data: a
				}).then(e => e.ok ? {
					...e
				} : e.error && e.error.type ? e : {
					...e,
					error: Object(C.a)(e)
				})
			}, v = n("./src/reddit/helpers/correlationIdTracker.ts"), _ = n("./src/reddit/models/Toast/index.ts"), y = n("./src/reddit/selectors/premium.ts"), I = n("./src/reddit/actions/gold/constants.ts");
			Object(x.a)(I.y), Object(x.a)(I.A), Object(x.a)(I.z), Object(x.a)(I.C);
			const N = Object(x.a)(I.x),
				j = Object(x.a)(I.w),
				S = e => async (t, n) => {
					await t(j(e));
					const o = Object(y.a)(n());
					if (o) {
						const n = ((e, t) => {
							switch (!0) {
								case e && e.error && e.error.type && e.error.type === b.I.AUTHENTICATION_ERROR:
									return s.fbt._("There was an authentication error", null, {
										hk: "12YR0w"
									});
								case e && e.error && e.error.type && e.error.type === b.I.INVALID_PREMIUM_AMOUNT:
									return s.fbt._("That Premium gift amount is invalid.", null, {
										hk: "3XzSbH"
									});
								default:
									return t
							}
						})(e, o);
						t(Object(f.f)({
							kind: _.b.Error,
							duration: f.a,
							text: n
						}))
					}
				}, w = Object(x.a)(I.B), M = e => async (t, n) => {
					const o = n(),
						i = Object(y.d)(o);
					t(w(e));
					const a = s.fbt._("Success! You’ve given Premium to {recipient username}!", [s.fbt._param("recipient username", `u/${i}`)], {
						hk: "3cBrLk"
					});
					t(Object(f.f)({
						kind: _.b.SuccessCommunity,
						text: a
					}))
				};
			var T = n("./src/reddit/actions/gold/modals.ts"),
				P = n("./src/reddit/components/CoinBalance/index.tsx"),
				D = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				R = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				A = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				B = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				L = n("./src/reddit/controls/TextButton/index.tsx"),
				F = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				U = n("./src/reddit/models/Gold/Premium/index.ts"),
				G = n("./src/reddit/selectors/user.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const W = 10,
				H = Object(c.c)({
					coinBalance: G.e,
					isEmployee: G.H,
					isPending: y.b,
					recipientName: y.d
				}),
				V = Object(a.b)(H, e => ({
					closeModal: () => e(Object(T.b)()),
					onGivePremium: (t, n, s, o, i) => {
						e(((e, t, n, s) => async (o, i, {
							apiContext: a
						}) => {
							o(N());
							try {
								const i = await k(a(), t, e, n, s, Object(v.c)(v.a.GiftPremiumFlow));
								if (i.error) await o(S(i));
								else {
									const e = i.body;
									await o(M(e)), Object(v.b)(v.a.GiftPremiumFlow)
								}
							} catch (c) {
								await o(S(c))
							}
						})(t, n, s, o ? i : ""))
					}
				}));
			class X extends i.a.PureComponent {
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
							onGivePremium: e,
							recipientName: t,
							sendEvent: n
						} = this.props, {
							includeMessage: s,
							isAnonymous: o,
							message: i,
							selectedPackage: a
						} = this.state;
						n(Object(h.clickConfirmEvent)()), e(t, a.monthsOfPremium, o, s, i)
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
						isAnonymous: Object(p.q)()
					}), e(Object(h.viewGivePremiumModalEvent)())
				}
				componentWillUnmount() {
					Object(p.zb)(this.state.isAnonymous), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				getDropdownMenuItems() {
					const {
						coinBalance: e,
						isEmployee: t
					} = this.props;
					return Object(U.d)(e, t).map(e => ({
						displayText: Object(U.e)(e),
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
						message: r,
						selectedPackage: d
					} = this.state, u = Object(U.e)(d), p = a ? [l.a.messageInputOpen] : "";
					return i.a.createElement(D.e, {
						className: e
					}, i.a.createElement(D.i, null, i.a.createElement(F.a, null, i.a.createElement(D.q, null, s.fbt._("Give Premium", null, {
						hk: "4APAYj"
					})), i.a.createElement(L.a, {
						onClick: this.onClickClose
					}, i.a.createElement(D.b, null)))), i.a.createElement("div", {
						className: l.a.modalMain
					}, i.a.createElement("span", {
						className: l.a.description
					}, s.fbt._("Use coins to give Premium to {recipient username}:", [s.fbt._param("recipient username", `u/${o}`)], {
						hk: "1cRm3J"
					})), i.a.createElement(A.b, {
						className: l.a.dropdownSelector,
						displayText: u,
						options: this.getDropdownMenuItems(),
						onSelect: this.onClickOption
					}), i.a.createElement("div", {
						className: Object(m.a)(l.a.menuContent, p)
					}, i.a.createElement("div", null, i.a.createElement(R.a, {
						className: l.a.checkbox,
						isSelected: c,
						text: s.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})), i.a.createElement("div", null, i.a.createElement(R.a, {
						className: l.a.checkbox,
						isSelected: a,
						text: s.fbt._("Add a message", null, {
							hk: "I4chZ"
						}),
						onClick: this.handleToggleIncludeMessage
					})), i.a.createElement(D.t, {
						className: Object(m.a)(l.a.textArea, p),
						"data-redditstyle": !0,
						value: r,
						maxLength: 2048,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleMessageInput,
						placeholder: s.fbt._("Type here...", null, {
							hk: "1O7V4Q"
						})
					}))), i.a.createElement(D.g, null, i.a.createElement(F.a, {
						className: l.a.coinCountSection
					}, i.a.createElement(P.a, {
						className: l.a.coinCount,
						coinBalance: t
					}), i.a.createElement("div", {
						className: l.a.actions
					}, i.a.createElement(D.a, {
						onClick: this.onClickClose
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(D.r, {
						className: l.a.confirmButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onGivePremium
					}, n ? i.a.createElement(B.a, {
						className: l.a.loadingIcon,
						sizePx: W
					}) : s.fbt._("Confirm", null, {
						hk: "2nHzsu"
					}))))))
				}
			}
			const z = Object(d.a)(Object(u.c)(X));
			t.default = V(e => i.a.createElement(z, K({}, e, {
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				r = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(r);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(i.a)(l.a.checkboxLabel, e.className),
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
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				modNotes: "_19418fPEhBETWYOoZDCwE0",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				isModNotesStyle: "_3X4Y2xTs4XH5VgeZ7w-cv5",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/Dropdown/Row.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx");
			const m = e => {
				e.preventDefault()
			};
			class u extends o.a.Component {
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
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
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
						isTopicsStyle: n,
						menuOptionClassName: s,
						isModNotesStyle: i
					} = this.props;
					return e.map((e, l) => o.a.createElement(r.b, {
						key: l + e.displayText,
						className: Object(c.a)(a.a.menuOption, s, {
							[a.a.topics]: n,
							[a.a.modNotes]: i
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isModNotesStyle: i,
						isTopicsStyle: n
					}, i ? o.a.createElement("span", {
						className: a.a.modNotes
					}, e.icon && e.icon, e.displayText) : o.a.createElement(o.a.Fragment, null, e.icon && e.icon, e.displayText)))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isModNotesStyle: i,
						isTopicsStyle: r,
						menuItemsClassName: u,
						name: p,
						isSaving: h,
						buttonIcon: b,
						disabled: x
					} = this.props, {
						isOpen: f
					} = this.state;
					return o.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(c.a)(a.a.dropdownMenu, t, {
							[a.a.topics]: r
						})
					}, o.a.createElement("button", {
						onClick: x ? void 0 : this.handleDropdownClick,
						className: Object(c.a)(e, a.a.selector, {
							[a.a.compact]: s
						}, {
							[a.a.topics]: r
						}, {
							[a.a.modNotes]: i
						}, {
							[a.a.disabled]: x
						}),
						name: p,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: x ? void 0 : this.handleDropdownBlur,
						onKeyDown: x ? void 0 : this.handleDropdownKeyDown
					}, o.a.createElement("span", {
						className: a.a.selectorContent,
						tabIndex: -1
					}, b && o.a.createElement("span", {
						className: Object(c.a)(a.a.buttonIcon, {
							[a.a.isModNotesStyle]: i
						})
					}, b), n), x ? null : h ? o.a.createElement(l.a, {
						sizePx: 8,
						className: a.a.loadingIcon
					}) : o.a.createElement(d.a, {
						name: "caret_down"
					})), o.a.createElement("div", {
						className: Object(c.a)(a.a.menuItems, u, {
							[a.a.topics]: r,
							[a.a.isClosed]: !f && i,
							[a.a.isModNotesStyle]: i
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, !x && f && this.getDropdownMenuItems()))
				}
			}
			t.b = u
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function i(e, t) {
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
							case s.I.NO_STRIPE_SUBSCRIPTION:
							case s.I.USER_DOESNT_EXIST:
							case s.I.USER_REQUIRED_ERROR:
							case s.I.VALIDATION_ERROR:
								return e;
							case s.I.NO_USER:
							case s.I.NO_TEXT:
							case s.I.NO_URL:
								return s.I.VALIDATION_ERROR;
							case s.I.CREDIT_CARD_FAILURE:
							case s.I.CREDIT_CARD_FAILURE_GENERIC:
								return s.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.I.VALIDATION_ERROR
				},
				i = e => {
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
						error: i(e)
					} : e
				};
			t.a = i
		},
		"./src/reddit/helpers/trackers/givePremium.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "clickGivePremiumEvent", (function() {
				return c
			})), n.d(t, "viewGivePremiumModalEvent", (function() {
				return r
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
				i = n("./src/reddit/selectors/gild.ts");
			const a = e => ({
					...s.o(e),
					correlationId: Object(i.b)(e) || Object(o.e)(o.a.GiftPremiumFlow, !1),
					screen: s.bb(e),
					subreddit: s.jb(e)
				}),
				c = () => e => ({
					...a(e),
					source: "profile",
					action: "click",
					noun: "give_premium"
				}),
				r = () => e => ({
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(r);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(i.a)(e.className, Object(c.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GivePremiumModal.29f4a787012c82f2a1cf.js.map