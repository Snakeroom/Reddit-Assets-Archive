// https://www.redditstatic.com/desktop2x/FramedModal.01eeee6c757e7b409cb6.js
// Retrieved at 4/14/2020, 2:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var a = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return a(e) + t
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var l = e => r.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (s[a[r]] = e[a[r]])
				}
				return s
			};
			const x = e => t => {
					const {
						className: s,
						disabled: a,
						redditStyle: o,
						"data-redditstyle": i
					} = t, l = h(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const a = !(!t && !s);
						let r = "";
						return r = e ? a ? m.a.mDisabledRedditStyle : m.a.mDisabled : a ? m.a.mActiveRedditStyle : m.a.mActive
					})(a, o, i);
					return r.a.createElement(e, u({
						className: Object(n.a)(m.a.Checkbox, c, s)
					}, l))
				},
				p = x(c.a),
				f = x(l);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? p : o.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(n.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
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
			s.d(t, "a", (function() {
				return M
			})), s.d(t, "c", (function() {
				return N
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				n = s.n(r),
				o = s("./node_modules/raf/index.js"),
				i = s.n(o),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				d = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = s.n(C);
			var v = Object(p.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: b.a.wrapper
					}, c.a.createElement(g.a, {
						className: b.a.titleRow
					}, s), c.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), c.a.createElement(g.a, {
						className: b.a.buttonRow
					}, c.a.createElement(f.f, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(y);
			const w = Object(m.c)({
				activeModalId: x.a
			});
			class O extends c.a.Component {
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
						errorModalTitle: n = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: l
					} = this.state;
					return c.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, s)
					}, c.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), l && c.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && c.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: n
					}, r || e))
				}
			}
			const _ = Object(d.b)(w, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(O),
				M = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: a,
						fallbackMessage: r,
						messages: n = []
					} = e, o = n.length ? n : r ? [r] : [];
					return o.length ? c.a.createElement("div", {
						className: t
					}, o.map((e, t) => c.a.createElement(_, {
						className: s,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				N = e => c.a.createElement(M, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
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
				return l
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(o);
			const l = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/pages/FramedModalPage/index.m.less": function(e, t, s) {
			e.exports = {
				fullScreen: "_1pL8RMJmuOdTXSiyWiJOca"
			}
		},
		"./src/reddit/pages/FramedModalPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(a),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/messageIframeParent/index.ts"),
				c = s("./src/reddit/pages/FramedModalPage/index.m.less"),
				d = s.n(c),
				m = s("./src/reddit/components/Economics/Support/PaymentTooltip/index.tsx"),
				u = s("./src/reddit/models/Payments/index.ts");
			const h = "ti",
				x = "tt";
			var p = function(e) {
				const t = e.params;
				let s;
				const a = t[h],
					r = t[x];
				return a && r && (s = {
					id: a,
					type: "link" === r ? u.a.Post : "comment" === r ? u.a.Comment : u.a.Profile
				}), o.a.createElement(m.b, {
					subredditId: t.r,
					targetName: t.u,
					content: s,
					position: m.a.Modal,
					onClose: t => {
						t && e.postMessage({
							type: "tip-success.economy",
							data: {
								amount: t
							}
						}), e.onClose()
					}
				})
			};
			const f = /.*\.reddit\.(com|local)$|.*staging\.snooguts\.net$/,
				g = "framedmodal",
				C = {
					PARENT_ORIGIN: "_o"
				},
				b = {
					SUPPORT: "support"
				};
			class v extends o.a.Component {
				constructor(e) {
					if (super(e), this.element = null, this.iframeWidth = null, this.iframeHeight = null, this.modalType = e.match.params.type, this.modalType !== b.SUPPORT) throw new Error("Unknown modal page type: " + e.match.params.type);
					this.queryParams = r()([...Object(i.a)(this.props.location.search)]);
					const t = this.queryParams[C.PARENT_ORIGIN];
					if (!f.test(t)) throw new Error("Invalid parent origin: " + t);
					this.parentOrigin = t
				}
				postMessage(e) {
					Object(l.a)(e, g, this.parentOrigin)
				}
				render() {
					return o.a.createElement("div", {
						className: d.a.fullScreen,
						ref: e => this.setElement(e)
					}, this.modalType === b.SUPPORT && o.a.createElement(p, {
						params: this.queryParams,
						onClose: () => this.postMessage({
							type: "close"
						}),
						postMessage: e => this.postMessage(e)
					}))
				}
				componentDidMount() {
					this.postMessage({
						type: "loaded"
					}), this.maybeResize()
				}
				componentDidUpdate() {
					this.maybeResize()
				}
				setElement(e) {
					this.element = e, new MutationObserver(() => {
						this.maybeResize()
					}).observe(e, {
						attributes: !0,
						childList: !0,
						subtree: !0
					})
				}
				maybeResize() {
					const e = this.element && this.element.firstElementChild;
					if (!e) return;
					const t = e.offsetWidth,
						s = e.offsetHeight;
					t && s && (this.iframeWidth !== t || this.iframeHeight !== s) && (this.iframeWidth = t, this.iframeHeight = s, this.postMessage({
						type: "resize",
						data: {
							width: t,
							height: s
						}
					}))
				}
			}
			t.default = v
		}
	}
]);
//# sourceMappingURL=FramedModal.01eeee6c757e7b409cb6.js.map