// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal~MembershipPaywallPage.0579e4ccf1d1089da5be.js
// Retrieved at 3/9/2020, 12:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal~MembershipPaywallPage"], {
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/config.ts"),
				c = s("./src/reddit/selectors/gov.ts");
			const d = Object(i.c)({
				tokenSymbol: c.p
			});
			t.a = Object(a.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return n.a.createElement("img", {
					className: e.className,
					src: "".concat(o.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/usernameAvailable.ts"),
				m = s("./src/reddit/constants/colors.ts"),
				p = s("./src/reddit/controls/FormFields/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				x = s("./src/reddit/icons/svgs/Info/index.tsx"),
				g = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				v = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				E = s.n(v);
			const C = 2,
				w = 20;
			var N;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(N || (N = {}));
			class j extends i.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > C && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > C) {
							switch (this.props.usernameAvailability[e]) {
								case u.b.Available:
									return N.Invalid;
								case u.b.Error:
									return N.Error;
								case u.b.Unavailable:
									return N.Valid;
								default:
									return N.Searching
							}
						}
						return N.Empty
					}, this.state = {
						username: e.initialUsername || ""
					}, e.initialUsername && e.onCheckUsername(e.initialUsername)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === N.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return i.a.createElement("div", {
						className: Object(l.a)(E.a.container, this.props.className)
					}, i.a.createElement(p.c, {
						redditStyle: !0,
						className: E.a.input,
						label: Object(b.c)("username"),
						max: w,
						style: {
							borderColor: y(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case N.Error:
								return i.a.createElement(x.a, {
									className: E.a.icon,
									style: {
										fill: m.a.notice
									}
								});
							case N.Invalid:
								return i.a.createElement(g.a, {
									className: E.a.icon,
									style: {
										fill: m.a.warning
									}
								});
							case N.Searching:
								return i.a.createElement("div", {
									className: E.a.loadingIcon
								}, i.a.createElement(h.a, {
									sizePx: 8
								}));
							case N.Valid:
								return i.a.createElement(f.a, {
									className: E.a.icon
								});
							default:
								return null
						}
					}(e), i.a.createElement("div", {
						className: E.a.message,
						style: {
							color: y(e)
						}
					}, function(e, t) {
						switch (t) {
							case N.Error:
								return Object(d.a)(e, "gov.searchNameError");
							case N.Invalid:
								return Object(d.a)(e, "gov.searchNameInvalid");
							default:
								return ""
						}
					}(this.props.language, e)))
				}
			}

			function y(e) {
				switch (e) {
					case N.Error:
						return m.a.notice;
					case N.Invalid:
						return m.a.warning
				}
			}
			const O = Object(c.c)({
				language: e => e.user.language,
				usernameAvailability: e => e.users.nameAvailable
			});
			t.a = Object(o.b)(O, e => ({
				onCheckUsername: n()(t => e(Object(u.f)({
					username: t
				})), 250)
			}))(j)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/uniqueId.js"),
				n = s.n(r),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				E = s.n(v);
			var C = Object(f.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: E.a.wrapper
					}, c.a.createElement(g.a, {
						className: E.a.titleRow
					}, s), c.a.createElement("div", {
						className: E.a.detailsContainer
					}, t), c.a.createElement(g.a, {
						className: E.a.buttonRow
					}, c.a.createElement(x.f, {
						className: E.a.confirmButton,
						onClick: e.onConfirmed
					}, b.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				w = s("./src/reddit/controls/ErrorText/index.m.less"),
				N = s.n(w);
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return _
			}));
			const j = Object(l.c)({
				activeModalId: h.a
			});
			class y extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(n()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: r,
						errorModalTitle: n = Object(p.c)("Error"),
						moreText: a = Object(p.c)("More")
					} = this.props, {
						modalId: i,
						textHasOverflowed: o
					} = this.state;
					return c.a.createElement("div", {
						className: Object(u.a)(N.a.wrapper, s)
					}, c.a.createElement("span", {
						className: N.a.description,
						ref: this.spanRef
					}, e), o && c.a.createElement("span", {
						className: N.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && c.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: n
					}, r || e))
				}
			}
			const O = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(y),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: r,
						fallbackMessage: n,
						messages: a = []
					} = e, i = a.length ? a : n ? [n] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(O, {
						className: s,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				_ = e => c.a.createElement(I, {
					fallbackMessage: Object(p.c)("Something went wrong"),
					messages: e
				});
			t.b = O
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = s("./src/reddit/controls/FormFields/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const h = i.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: s,
						inputRef: r,
						className: i
					} = e, o = p(e, ["label", "children", "inputRef", "className"]), c = void 0 !== e.value && "" !== e.value;
					return n.a.createElement("div", {
						className: Object(a.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, n.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, o)), e.label && n.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: s,
						inputRef: r,
						className: i,
						redditStyle: o
					} = e, c = p(e, ["label", "children", "inputRef", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return n.a.createElement("div", {
						className: Object(a.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsRedditStyle]: o
						}),
						onClick: b
					}, n.a.createElement(h, m({
						innerRef: r
					}, c)), e.label && n.a.createElement("label", {
						className: Object(a.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => n.a.createElement("div", {
					className: Object(a.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", n.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: r,
						errors: a = []
					} = this.props;
					return e.map((e, i) => n.a.createElement(f, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!a[i],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, i),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, n.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, n.a.createElement(d.b, {
						className: u.a.trash
					})), !!a[i] && n.a.createElement(o.b, {
						className: u.a.errorText
					}, a[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: r,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && s.length >= r) && !o;
					return n.a.createElement("div", {
						className: Object(a.a)(u.a.multiInputWrapper, e)
					}, t && c && n.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && c && n.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var r, n = s("./src/config.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case r.Ethereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function o(e, t, s) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = s("./node_modules/bignumber.js/bignumber.js"),
				n = s("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const s = new r.BigNumber(e),
					n = new r.BigNumber(t);
				return s.dividedBy(n).decimalPlaces(2).toString()
			}

			function i(e, t) {
				return Object(n.b)(parseInt(a(e, t), 10))
			}

			function o(e, t) {
				const s = new r.BigNumber(e),
					n = new r.BigNumber(t);
				return s.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = s.n(i);
			const c = e => n.a.createElement("svg", {
				className: Object(a.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const o = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => o.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				l = e => o.has((Object(a.e)(e) || "").toLowerCase()) || c.has((Object(a.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: i.G,
					experimentName: r.ab
				}) === r.hb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "p", (function() {
				return E
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "k", (function() {
				return w
			})), s.d(t, "l", (function() {
				return N
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "r", (function() {
				return T
			}));
			var r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/endpoints/governance/crypto.ts"),
				a = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				o = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = j(e, {
						subredditId: s
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const s = w(e, t);
					if (s) return s.mainHeader
				},
				p = (e, t) => {
					const s = w(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				h = (e, t) => {
					const s = w(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : d
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					if (Object(i.b)(e)) {
						const t = Object(o.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = a.d.spPolls(e) || a.d.spKarmaPoints(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return s && !e
					}
					return s
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const s = Object(r.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				C = (e, t) => {
					const s = I(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				w = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				N = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const s = N(e, t);
					return s && s.walletProvider
				},
				y = (e, t) => {
					const s = j(e, t),
						r = N(e, t);
					return s && s.provider || r && r.provider
				},
				O = (e, t) => {
					const s = y(e, t);
					return s === n.a.Ethereum || s === n.a.Rinkeby
				},
				I = (e, t) => {
					const s = j(e, t),
						r = y(e, t);
					if (s && !s.inTransition && r === n.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const a = s && s.extra && s.extra.contracts,
						i = a && a.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				_ = (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = j(e, {
						subredditId: s
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const s = N(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceTransferPointsModal~MembershipPaywallPage.0579e4ccf1d1089da5be.js.map