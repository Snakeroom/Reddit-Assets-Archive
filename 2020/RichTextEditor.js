// https://www.redditstatic.com/desktop2x/RichTextEditor.f4f2d7a1c214806948eb.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor"], {
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			var r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/me/constants.ts");
			const i = Object(r.a)(a.a);
			n.d(t, "a", (function() {
				return d
			}));
			const d = () => async (e, t, n) => {
				let {
					apiContext: r
				} = n;
				const a = t().user.account,
					d = !t().economics.me.fetched;
				if (a && d) {
					const t = await
					function(e) {
						return Object(s.a)(e, {
							method: "get",
							endpoint: "".concat(o.a.metaUrl, "/users/me")
						})
					}(r());
					t.ok && e(i(t.body))
				}
			}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				d = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts"),
				l = n("./src/config.ts"),
				m = n("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t, n) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: "".concat(l.a.metaUrl, "/products/").concat(t, "?owners=").concat(n) + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				h = n("./src/reddit/models/Badge/managementPage.ts"),
				b = n("./src/reddit/models/Product/index.ts"),
				g = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				x = n("./src/reddit/selectors/economics.ts"),
				f = n("./src/reddit/selectors/products.ts"),
				C = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				E = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function w(e) {
				return !!e && "removeBadge" === e.type
			}

			function O(e) {
				if (!w(e)) return e
			}
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "c", (function() {
				return k
			}));
			const v = () => async (e, t, n) => {
				let {
					apiContext: o
				} = n;
				if (!t().user.account) return;
				await e(Object(C.a)());
				const s = t().economics.me.data.specialMemberships || {},
					r = Object.keys(s);
				if (r.length) {
					const t = await Object(i.d)(o(), r);
					t.ok && e(Object(E.f)(t.body))
				}
			}, y = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				const a = o().user.account,
					i = o().economics.subredditPremium[e],
					c = !i || i.status !== g.a.Fetched || t;
				if (a && c) {
					const t = await Object(d.a)(r(), e, a.id);
					n(Object(E.h)(t))
				}
			}, M = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const a = n(),
					i = a.user.account,
					d = Object(x.f)(a, e.subredditId),
					l = Object.keys(d).map(e => d[e]).filter(Boolean);
				if (i && e.badge) {
					let n, o;
					n = e.placement === p.a.First ? d[h.a.Loyalty] : e.placement === p.a.Second ? d[h.a.Achievement] : d[h.a.Cosmetic], t(Object(E.a)(Object.assign({}, e, {
						badge: O(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), w(e.badge) && n ? o = await Object(c.a)(s(), e.subredditId, n.id, !1) : w(e.badge) || (o = await Object(c.a)(s(), e.subredditId, e.badge.id)), o && !o.ok && (t(Object(E.a)(Object.assign({}, e, {
						badge: n,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, o.error))
				}
			}, T = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				await n(y(e, !0));
				const a = o().economics.subredditPremium[e];
				if (a && a.status === g.a.Fetched) {
					const o = a.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(M({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(E.d)(h.c.MyBadges)))
				}
			}, j = e => async (t, n, o) => {
				let {
					apiContext: i
				} = o;
				const d = n().user.account,
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (d && (c || l)) {
					const [n, o] = await Promise.all([Object(a.b)(i(), e), u(i(), e, d.id)]);
					if (!o.ok) return void Object(r.a)(t, o.error);
					const c = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(o.body, e => {
						e.type === b.a.EmotesPack ? c.emotes.push(e) : e.type === b.a.Giphy && c.giphy.push(e)
					}), t(Object(E.e)({
						subredditId: e,
						products: c
					}))
				}
			}, k = (e, t, n) => async (o, s, r) => {
				let {
					apiContext: a
				} = r;
				if (await o(y(e, !0)), n && t) {
					const n = s(),
						r = Object(x.f)(n, e),
						a = Object(f.a)(n, t);
					if (!r[Object(h.d)(a.placement)] && a) {
						const t = Object(x.o)(n, {
							subredditId: e,
							badge: a
						});
						t && await o(M({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(E.c)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/components/CollapseIntoOverflow/index.m.less": function(e, t, n) {
			e.exports = {
				hidden: "_2x_bJPl7Q970NCRxOS36QB",
				innerWrapper: "_3oLr47tuKGv2mNpavCZ2X0",
				outerWrapper: "_1wi_3uF8fUynqe5reIop-G",
				overflowMenu: "_2aOuodBenLHlceR3j0AlIM",
				overflowMenuWrapper: "_3nQ7w1VIzZvzFawddOYgBC",
				row: "_2IirhjIkZ7hgWGtpr087xZ"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				i = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const l = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				var {
					breakOut: t,
					depth: n,
					isEditing: o
				} = e, a = c(e, ["breakOut", "depth", "isEditing"]);
				return s.a.createElement("div", d({
					className: Object(r.a)({
						[i.a.breakout]: t
					}),
					style: {
						left: l(n, o)
					}
				}, a))
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/i18n/components.tsx"),
				l = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				m = n.n(l);
			const u = a.a.div("FormFooterWrapper", m.a),
				p = a.a.wrapped(i.f, "SubmitButton", m.a),
				h = a.a.wrapped(d.a, "LoadingIcon", m.a),
				b = a.a.wrapped(i.i, "CancelButton", m.a),
				g = a.a.div("ButtonWrapper", m.a),
				x = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: n = !0,
					children: o,
					className: a,
					submitButtonText: i,
					canSubmit: d,
					onSubmit: l,
					onCancel: f
				} = e;
				return s.a.createElement(u, {
					className: Object(r.a)(a, {
						[m.a.pending]: t
					})
				}, s.a.createElement(g, null, s.a.createElement(p, {
					type: "submit",
					disabled: !d,
					onClick: l,
					onMouseDown: x
				}, t ? s.a.createElement(h, {
					sizePx: 10
				}) : i), n && s.a.createElement(b, {
					type: "reset",
					disabled: t,
					onClick: f,
					onMouseDown: x
				}, s.a.createElement(c.c, null, "cancel"))), o)
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2DZnviMjaD88Udr-5V3j38",
				loadingIcon: "_2DZnviMjaD88Udr-5V3j38",
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-dom/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				m = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				u = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/i18n/utils.ts"),
				f = n("./src/reddit/icons/svgs/Help/index.tsx"),
				C = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				E = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				w = n("./src/lib/fastdom/index.ts"),
				O = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				v = n.n(O),
				y = n("./src/lib/lessComponent.tsx");
			const M = 310,
				T = y.a.div("Container", v.a);
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < M ? "compact" : "full";
						n !== this.state.toolbarType && w.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					w.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return s.a.createElement(T, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var k = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 208 128"
				}, s.a.createElement("rect", {
					width: "198",
					height: "118",
					x: "5",
					y: "5",
					ry: "10",
					stroke: "currentColor",
					strokeWidth: "10",
					fill: "none"
				}), s.a.createElement("path", {
					d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
				})),
				R = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				_ = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				S = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				B = n.n(S);
			const I = Object(d.d)("comment.switchToRTE"),
				F = y.a.wrapped(g.a, "LoadingIcon", B.a),
				P = y.a.div("Wrapper", B.a),
				A = y.a.wrapped(k, "MarkdownModeIcon", B.a),
				D = y.a.wrapped(R.a, "Button", B.a);
			var H = e => {
					const t = I(e.language);
					return s.a.createElement(P, null, s.a.createElement(D, {
						"aria-label": t,
						setRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick
					}, e.isConverting && s.a.createElement(F, {
						sizePx: 12
					}), s.a.createElement(_.a, {
						text: t
					}), !e.isConverting && s.a.createElement(A, null)))
				},
				N = n("./src/lib/classNames/index.ts"),
				W = n("./src/reddit/constants/keycodes.ts"),
				L = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				z = n("./src/reddit/components/CommentCreation/translations.ts"),
				U = n("./src/reddit/constants/componentSizes.ts"),
				q = n("./src/reddit/constants/componentTestIds.ts"),
				V = n("./src/reddit/selectors/activeModalId.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/editorContent.ts"),
				Z = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				G = n("./src/reddit/models/PostCreationForm/index.ts"),
				J = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/User/index.ts"),
				$ = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ee = n.n($);
			n.d(t, "a", (function() {
				return ie
			}));
			const te = y.a.button("SwitchModeButton", ee.a),
				ne = y.a.wrapped(g.a, "LoadingIcon", ee.a),
				oe = y.a.div("CommentHeader", ee.a),
				se = y.a.span("FormHeaderText", ee.a),
				re = y.a.button("HelpButton", ee.a),
				ae = y.a.wrapped(f.a, "HelpIcon", ee.a),
				ie = e => s.a.createElement(re, {
					className: e.className,
					onClick: e.onClick
				}, s.a.createElement(ae, null)),
				de = 8,
				ce = 16,
				le = y.a.div("Wrapper", ee.a),
				me = y.a.div("FormWrapper", ee.a),
				ue = Object(a.b)(() => Object(i.c)({
					activeModalId: V.a,
					userName: e => e.user.account ? Object(Y.f)(e.user.account) : "",
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					draft: K.i,
					isConverting: (e, t) => Object(X.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(Z.i)(Object(L.a)(t.draftKey))),
					helpModalToggled: () => e(Object(Z.i)(h.b))
				}));
			class pe extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < U.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || w.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							w.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === J.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === W.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: G.h.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						draftType: t,
						hasError: n,
						initialText: o,
						language: s
					} = e;
					this.state = {
						text: o || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === J.c.edit ? Object(d.a)(s, "comment.confirmCancellation.edit") : Object(d.a)(s, "comment.confirmCancellation.creation")
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), w.a.read(this.detectBreakout), w.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(r.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + de + ce + U.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: o,
						disableAutofocus: r,
						depth: a,
						draft: i,
						draftKey: d,
						draftType: g,
						errorMsgs: f,
						pending: w,
						language: O,
						modalSeen: v,
						submitButtonText: y,
						isTopLevelComment: M,
						onSwitchMode: T,
						userName: k
					} = this.props, {
						cancelModalText: R,
						showError: _,
						text: S,
						breakOut: B,
						wrapperHeight: I
					} = this.state, F = Object(L.a)(d), P = i.draftType === J.c.edit;
					return s.a.createElement(le, {
						"data-test-id": q.b,
						className: Object(N.a)(o, {
							[ee.a.isTopLevelComment]: M
						}),
						ref: this.setWrapperRef,
						style: {
							height: B ? I : void 0
						}
					}, M && s.a.createElement(oe, null, s.a.createElement(se, null, "Comment as"), s.a.createElement(l.a, {
						author: k,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, k)), s.a.createElement(C.a, {
						breakOut: B,
						depth: a,
						isEditing: P
					}, s.a.createElement(me, {
						className: Object(N.a)({
							[ee.a.pending]: w,
							[ee.a.focused]: i.hasFocus
						})
					}, s.a.createElement(Q.a, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !r,
						disabled: w,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: Object(x.c)("What are your thoughts?"),
						value: S
					}), s.a.createElement(E.a, {
						cancelButtonEnabled: g !== J.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: w,
						submitButtonText: y,
						canSubmit: this.userHasEnteredText()
					}, s.a.createElement(j, null, e => "compact" === e ? s.a.createElement(H, {
						language: O,
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => T(G.h.RICH_TEXT, S, d),
						isConverting: this.props.isConverting
					}) : s.a.createElement("div", null, s.a.createElement(te, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => T(G.h.RICH_TEXT, S, d)
					}, "Switch to Fancy Pants Editor", this.props.isConverting && s.a.createElement(ne, {
						sizePx: 12
					})))), s.a.createElement(ie, {
						onClick: this.props.helpModalToggled
					})))), _ && Object(b.c)(f), e === F && s.a.createElement(p.a, {
						actionText: Object(z.a)(O),
						cancelActionText: Object(z.b)(O),
						modalText: R,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && s.a.createElement(h.a, {
						language: O
					}), e === c.qb && s.a.createElement(u.a, {
						onSubmit: this.onSubmit,
						modalSeen: v,
						withOverlay: !0
					}), s.a.createElement(m.a, {
						language: O,
						editKey: d,
						hasValue: !!S
					}))
				}
			}
			t.b = ue(pe)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router/esm/react-router.js"),
				a = n("./src/app/strings/index.ts");
			let i = null;
			class d extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						d.blockers.delete(e), d.blockers.size || (i && i(), i = null, window.removeEventListener("beforeunload", d.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					d.blockers.add(e), i || (window.addEventListener("beforeunload", d.navigationBlocker), i = this.props.history.block(() => {
						const e = this.props.isPostEdit ? Object(a.a)(this.props.language, "posts.confirmNavigation") : Object(a.a)(this.props.language, "comment.confirmNavigation");
						return window.confirm(e) ? void 0 : "Are you sure you want to leave?"
					}))
				}
				render() {
					return null
				}
			}
			d.blockers = new Set, d.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(r.i)(d)
		},
		"./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				RequestBox: "_2dVm83ugs7xhdLU8UptoxO",
				requestBox: "_2dVm83ugs7xhdLU8UptoxO",
				commentIcon: "_3-cqJ5aJH2EZKxhqY43T9D",
				commentText: "_2o9LnZvm1HYNaUjzmMO8E5",
				requestButton: "_3OvdD2phTivi0gnXR8NPl-"
			}
		},
		"./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				CommentHeader: "_2kZkQ13N-kvhDEJOBd1S1I",
				commentHeader: "_2kZkQ13N-kvhDEJOBd1S1I",
				FormFooter: "RQTXfVRnnTF5ont3w58rx",
				formFooter: "RQTXfVRnnTF5ont3w58rx",
				MarkdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				markdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				SectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				sectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				ToolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				toolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				FormWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				formWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				isTopLevelComment: "aUM8DQ_Nz5wL0EJc_wte6",
				MarkdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				markdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				FormHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				formHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ"
			}
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				d = n.n(i),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const g = e => Object.assign({
					source: "toxicity_modal"
				}, b.defaults(e), {
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				x = e => t => Object.assign({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e
				}, g(t)),
				f = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e
				}, g(t)),
				C = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e
				}, g(t)),
				E = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e
				}, g(t));
			var w = n("./src/reddit/i18n/components.tsx"),
				O = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const v = Object(a.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(c.qb))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: d()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(x(this.state.correlationId))
				}
				render() {
					return r.a.createElement(m.c, null, r.a.createElement(m.g, null, r.a.createElement(O.a, null, r.a.createElement(m.n, null, r.a.createElement(w.c, null, "Are you sure you want to post that?")), r.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.closeModal()
						}
					}, r.a.createElement(m.b, null)))), r.a.createElement(m.j, null, r.a.createElement(m.m, null, r.a.createElement(w.c, null, "A reminder from the mods: Please follow community rules when commenting."))), r.a.createElement(m.e, null, r.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, r.a.createElement(w.c, null, "Go back and edit")), r.a.createElement(m.o, {
						onClick: () => {
							this.props.sendEvent(f(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, r.a.createElement(w.c, null, "Comment"))))
				}
			}
			t.a = Object(o.a)(v(Object(u.c)(y)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => "Comment-cancelModal__".concat(e)
		},
		"./src/reddit/components/CommentCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				m = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				h = n("./src/reddit/i18n/utils.ts"),
				b = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				f = n.n(x);
			const C = u.a.div("RequestBox", f.a);
			var E = () => a.a.createElement(C, null, a.a.createElement(b.a, {
					className: f.a.commentIcon
				}), a.a.createElement("div", {
					className: f.a.commentText
				}, Object(h.c)("Only approved users can comment in this community.")), a.a.createElement(p.a, {
					className: f.a.requestButton,
					eventSource: g.b.Comment
				})),
				w = n("./node_modules/lodash/noop.js"),
				O = n.n(w),
				v = n("./src/lib/classNames/index.ts"),
				y = n("./src/lib/fastdom/index.ts"),
				M = n("./src/lib/memoizeByReference/index.ts"),
				T = n("./src/reddit/components/AuthorLink/index.tsx"),
				j = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				k = n("./src/reddit/actions/users.ts"),
				R = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/icons/svgs/Close/index.tsx")),
				_ = n("./src/reddit/controls/HelpfulTooltip/index.m.less"),
				S = n.n(_);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				},
				F = e => {
					const {
						className: t,
						children: n,
						text: o
					} = e, s = I(e, ["className", "children", "text"]);
					return a.a.createElement("div", B({
						className: Object(v.a)(S.a.helpfulTooltip, t)
					}, s), o ? a.a.createElement("div", {
						className: S.a.tooltip
					}, o, a.a.createElement("div", {
						className: S.a.iconWrapper
					}, a.a.createElement(R.a, {
						className: S.a.close
					}))) : null, n)
				};
			class P extends a.a.Component {
				componentDidUpdate() {
					const {
						onMarkdownModeFtuUxViewed: e,
						shouldShowFtuMessage: t
					} = this.props;
					t && e()
				}
				render() {
					const {
						onClick: e,
						shouldShowFtuMessage: t
					} = this.props;
					return t && a.a.createElement(F, {
						onClick: e,
						text: this.props.text
					})
				}
			}
			var A = Object(i.b)(null, e => ({
					onMarkdownModeFtuUxViewed: () => e(Object(k.q)({
						commentForm: {
							markdownModeNotification: !0
						}
					}))
				}))(P),
				D = n("./src/reddit/components/RichTextEditor/index.tsx"),
				H = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				N = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				W = n("./src/reddit/components/OverflowMenu/index.tsx"),
				L = n("./src/reddit/components/CollapseIntoOverflow/index.m.less"),
				z = n.n(L);
			const U = 33,
				q = e => e.preventDefault(),
				V = e => "Comment--Overflow-Dropdown__".concat(e),
				K = e => e.reduce((e, t) => (Array.isArray(t) ? e += t.length : t && e++, e), 0);
			class X extends a.a.Component {
				constructor(e) {
					super(e), this.updateCurrentBreakpoint = () => {
						y.a.read(() => {
							if (!this.container) return;
							const {
								indexOfCurrentBreakpoint: e,
								totalNumCollapsibleItems: t
							} = this.state, n = this.container.clientWidth;
							let o = this.breakpoints.findIndex((e, o) => {
								const s = o + 1 < t - 1,
									r = this.breakpoints[o + 1] + (s ? U : 0);
								return n < r
							});
							o < 0 && (o = t - 1), o !== e && y.a.write(() => {
								this.setState({
									indexOfCurrentBreakpoint: o,
									shouldShowOverflow: o < t - 1
								})
							})
						})
					};
					const t = Array.isArray(e.children) ? K(e.children) : 1;
					this.state = {
						indexOfCurrentBreakpoint: t - 1,
						shouldShowOverflow: !1,
						totalNumCollapsibleItems: t
					}, this.breakpoints = []
				}
				componentDidMount() {
					window.addEventListener("resize", this.updateCurrentBreakpoint)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.updateCurrentBreakpoint)
				}
				registerBreakpoint(e, t) {
					y.a.read(() => {
						if (e && e.clientWidth) {
							const n = e.clientWidth;
							this.breakpoints[t] = 0 === t ? n : this.breakpoints[t - 1] + n, this.breakpoints[this.state.totalNumCollapsibleItems - 1] && this.updateCurrentBreakpoint()
						}
					})
				}
				render() {
					const {
						children: e,
						className: t,
						oveflowMenuDropdownId: n,
						onOverflowMenuClick: o,
						renderOverflowMenuTooltip: s
					} = this.props, {
						indexOfCurrentBreakpoint: r,
						shouldShowOverflow: i
					} = this.state, d = a.a.Children.toArray(e).filter(Boolean);
					return a.a.createElement("div", {
						className: Object(v.a)(z.a.outerWrapper, t),
						ref: e => this.container = e
					}, a.a.createElement("div", {
						className: z.a.innerWrapper
					}, d.map((e, t) => a.a.createElement("span", {
						className: t > r ? z.a.hidden : void 0,
						key: t,
						ref: e => this.registerBreakpoint(e, t)
					}, e)), i && a.a.createElement("div", {
						className: z.a.overflowMenuWrapper,
						key: "overflowMenuWrapper"
					}, s && s(), a.a.createElement(W.b, {
						className: z.a.overflowMenu,
						dropdownId: V(n),
						isFixed: !1,
						handleMouseDown: q,
						onClick: o
					}, a.a.createElement("div", {
						className: z.a.row
					}, d.map((e, t) => a.a.createElement("span", {
						className: t <= r ? z.a.hidden : void 0,
						key: t
					}, e)))))))
				}
			}
			var Z = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Q = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/icons/svgs/Smile/index.tsx")),
				G = n("./src/reddit/selectors/economics.ts"),
				J = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Y = n("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				$ = n.n(Y);
			const ee = Object(d.c)({
				emotes: (e, t) => {
					let {
						subredditId: n
					} = t;
					const o = Object(G.c)(e, n);
					if (o) {
						const e = o.reduce((e, t) => Object.assign({}, e, t.emotes), {});
						return Object.keys(e).slice(0, 3).map(t => e[t])
					}
					return []
				}
			});
			var te = Object(i.b)(ee)((function(e) {
					const {
						controlsState: t,
						emotes: n,
						onEmoteButtonClick: o
					} = e;
					return a.a.createElement(J.a, {
						Icon: () => a.a.createElement(Q.a, {
							className: $.a.smile
						}),
						tooltip: Object(h.c)("Add Emote"),
						enabled: t.emote.isEnabled,
						onClick: o
					}, a.a.createElement("div", {
						className: Object(v.a)($.a.emotes, {
							[$.a.emoteMask]: n.length > 1
						})
					}, n.map(e => a.a.createElement("img", {
						className: $.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))
				})),
				ne = n("./src/reddit/icons/svgs/Gif/index.tsx"),
				oe = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				se = n("./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less"),
				re = n.n(se);
			const ae = Object(oe.f)(ne.a);
			var ie = function(e) {
					const {
						controlsState: t,
						onGifButtonClick: n,
						userCanUseGifs: o
					} = e, s = t.giphy.isEnabled;
					return a.a.createElement(J.a, {
						Icon: ae,
						className: s && o ? re.a.rainbow : "",
						tooltip: Object(h.c)("Add GIF"),
						disabledTooltip: Object(h.c)("Limit 1 GIF / comment"),
						enabled: s,
						onClick: n
					})
				},
				de = n("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				ce = n.n(de);
			const le = u.a.div("SectionSpacer", ce.a);
			var me = e => {
					const {
						className: t,
						destSubreddit: n,
						editorKey: o,
						editorState: s,
						language: r,
						onChange: i,
						onEmoteButtonClick: d,
						onGifButtonClick: c,
						onOverflowMenuClick: l,
						readOnly: m,
						trackOnClick: u,
						onLinkButtonClick: p,
						userCanUseGifs: h
					} = e, b = Object(N.a)(s);
					m && Object(N.b)(b);
					const g = n && d,
						x = c && a.a.createElement(ie, {
							controlsState: b,
							onGifButtonClick: c,
							userCanUseGifs: h
						});
					return a.a.createElement(X, {
						className: t,
						oveflowMenuDropdownId: o,
						onOverflowMenuClick: l
					}, c && h && x, g && a.a.createElement(te, {
						controlsState: b,
						subredditId: n && n.id,
						onEmoteButtonClick: d
					}), c && !h && x, (g || c) && a.a.createElement(le, null), Object(Z.g)(Z.f, b, s, i, u, r), a.a.createElement(Z.a, {
						language: r,
						controlsState: b,
						trackOnClick: u,
						onLinkButtonClick: p
					}), Object(Z.g)(Z.h, b, s, i, u, r), a.a.createElement(le, null), Object(Z.g)(Z.e, b, s, i, u, r), a.a.createElement(le, null), a.a.createElement(Z.d, {
						language: r,
						controlsState: b,
						editorState: s,
						trackOnClick: u,
						onChange: i
					}))
				},
				ue = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				pe = n("./src/reddit/constants/componentSizes.ts"),
				he = n("./src/reddit/constants/componentTestIds.ts"),
				be = n("./src/reddit/controls/ErrorText/index.tsx"),
				ge = n("./src/reddit/i18n/components.tsx"),
				xe = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				fe = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				Ce = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				Ee = n("./src/reddit/components/CommentCreation/translations.ts"),
				we = n("./src/app/strings/index.ts"),
				Oe = n("./src/reddit/models/PostCreationForm/index.ts"),
				ve = n("./src/reddit/models/PostDraft/index.ts"),
				ye = n("./src/reddit/actions/modal.ts"),
				Me = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				Te = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				je = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				ke = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Re = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				_e = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Se = n("./src/reddit/models/Subreddit/index.ts"),
				Be = n("./src/reddit/selectors/activeModalId.ts"),
				Ie = n("./src/reddit/selectors/comments.ts"),
				Fe = n("./src/reddit/selectors/user.ts"),
				Pe = n("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Ae = n.n(Pe);
			const De = Object(we.d)("comment.dontDigFancyPants"),
				He = 16,
				Ne = u.a.div("FormWrapper", Ae.a),
				We = u.a.div("CommentHeader", Ae.a),
				Le = u.a.wrapped(fe.a, "FormFooter", Ae.a),
				ze = u.a.div("MarkdownButtonWrapper", Ae.a),
				Ue = u.a.wrapped(ue.a, "MarkdownButton", Ae.a),
				qe = u.a.wrapped(le, "SectionSpacer", Ae.a),
				Ve = u.a.div("ToolbarWrapper", Ae.a),
				Ke = u.a.span("FormHeaderText", Ae.a),
				Xe = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: n,
						onSubmit: o,
						onCancel: s,
						pending: r,
						submitButtonText: i
					} = e;
					return e => {
						const {
							language: d,
							editorState: c,
							onFtuTooltipClick: l,
							onMarkdownButtonClick: m,
							shouldShowFtuMessage: u
						} = e, p = c.getCurrentContent(), h = !!p.getPlainText().trim() || p.getBlockMap().some(e => !!e && Object(H.t)(e.getType()));
						return a.a.createElement(Le, {
							cancelButtonEnabled: t,
							onSubmit: o,
							onCancel: s,
							pending: r,
							submitButtonText: i,
							canSubmit: h
						}, a.a.createElement(Ve, null, a.a.createElement(me, e), a.a.createElement(qe, null), a.a.createElement(ze, null, a.a.createElement(A, {
							onClick: l,
							shouldShowFtuMessage: !!u,
							text: De(d)
						}), a.a.createElement(Ue, {
							draftKey: n,
							language: d,
							onClick: m,
							shouldHideTooltip: u
						}))))
					}
				},
				Ze = Object(i.b)(() => Object(d.c)({
					activeModalId: Be.a,
					destSubreddit: (e, t) => {
						const n = Object(Re.o)(e, t);
						return n ? {
							name: n.name,
							isProfile: n.type === Se.c.User,
							id: n.id
						} : void 0
					},
					draft: Ie.i,
					hasViewedMarkdownModeFtuUx: Fe.e,
					userCanUseGifs: (e, t) => {
						const n = Object(Re.o)(e, t);
						return Object(G.x)(e, n ? n.id : void 0, t.parentCommentId)
					}
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ye.i)(Object(Ce.a)(t.draftKey)))
				}));
			class Qe extends a.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(M.a)((e, t, n, o) => Xe({
						cancelButtonEnabled: e,
						draftKey: t,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: n,
						submitButtonText: o
					})), this.focus = () => {
						this.editor && this.editor.focus()
					}, this.setEditorWrapperRef = e => {
						this.editorWrapperElement = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setRTEComponentRef = e => this.editor = e, this.setRTEDomElementRef = e => {
						this.editorDomElement = e
					}, this.detectBreakout = () => {
						if (!this.editorWrapperElement || !this.editorWrapperElement.parentElement || this.props.isTopLevelComment) return;
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < pe.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.formHeight || y.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return je.a.hasContent(e)
					}, this.handleBlur = () => this.props.onFocusChanged(!1), this.handleFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleChange = (e, t) => {
						const {
							onChange: n
						} = this.props;
						n && n({
							rteState: e
						}), t && this.setState({
							hasChanged: !0
						}), this.setState(() => ({
							showError: !1,
							rteState: e
						}), () => {
							y.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === ve.c.replyToPost && this.setState({
							rteState: je.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === ve.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: Oe.h.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					};
					const {
						draft: t,
						draftType: n,
						hasError: o,
						language: s,
						mediaMetadata: r,
						rtJson: a
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: n === ve.c.edit ? Object(we.a)(s, "comment.confirmCancellation.edit") : Object(we.a)(s, "comment.confirmCancellation.creation"),
						rteState: !a && t && t.rteState ? t.rteState : je.a.createInitial(a, r),
						formHeight: void 0,
						hasChanged: !1,
						showError: o
					}
				}
				componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: je.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), y.a.read(this.detectBreakout), y.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + He
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: n,
						depth: o,
						destSubreddit: s,
						draft: r,
						draftKey: i,
						draftType: d,
						errorMsgs: l,
						hasViewedMarkdownModeFtuUx: m,
						language: u,
						modalSeen: p,
						pending: h,
						submitButtonText: b,
						isTopLevelComment: g,
						userCanUseGifs: x,
						userName: f
					} = this.props, {
						cancelModalText: C,
						breakOut: E,
						formHeight: w,
						rteState: y
					} = this.state, M = Object(Ce.a)(i), k = r.draftType === ve.c.edit, R = d !== ve.c.replyToPost;
					return a.a.createElement(Ne, {
						className: Object(v.a)(n, {
							[Ae.a.isTopLevelComment]: g
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: E ? w : void 0
						}
					}, g && a.a.createElement(We, null, a.a.createElement(Ke, null, a.a.createElement(ge.c, null, "Comment as")), a.a.createElement(T.a, {
						author: f,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, f)), a.a.createElement(xe.a, {
						breakOut: E,
						depth: o,
						isEditing: k
					}, a.a.createElement(D.a, {
						userCanUseGifs: x,
						dataTestId: he.c,
						destSubreddit: s,
						editorType: _e.a.Comment,
						enableFtuMessage: !m,
						initialHeight: this.props.initialHeight,
						rteState: y,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						language: u,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: "What are your thoughts?",
						readOnly: h,
						trackToolbarClick: O.a,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(R, i, h, b)
					})), this.state.showError ? Object(be.c)(l) : null, e === M && a.a.createElement(j.a, {
						actionText: Object(Ee.a)(u),
						cancelActionText: Object(Ee.b)(u),
						modalText: C,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: O.a
					}), e === c.qb && a.a.createElement(Te.a, {
						onSubmit: this.onSubmit,
						modalSeen: p,
						withOverlay: !0
					}), a.a.createElement(Me.a, {
						language: u,
						editKey: i,
						hasValue: je.a.hasContent(y)
					}))
				}
			}
			var Ge = Object(ke.t)()(Ze(Qe)),
				Je = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				Ye = n("./src/reddit/models/User/index.ts"),
				$e = n("./src/reddit/selectors/subreddit.ts");
			const et = Object(d.c)({
					activeModalId: Be.a,
					contributorRequestPending: e => Object($e.h)(e, g.e.Comment),
					language: Fe.O,
					userName: e => e.user.account ? Object(Ye.f)(e.user.account) : "",
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					hasError: Ie.w,
					errorMsgs: Ie.I,
					draft: Ie.i,
					disableAutofocus: Ie.f,
					showContributorRequestFlow: e => Object($e.q)(e, g.e.Comment)
				}),
				tt = Object(i.b)(et, (e, t) => ({
					onMount: () => e(c.I(t.draftKey)),
					onCancel: () => {
						t.draftType === ve.c.edit ? e(c.U({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(c.O({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: n => e(c.fb(t.draftKey, n)),
					onFocus: s()(() => e((e, n) => Object(l.e)(n(), t.draftType))),
					onFocusChanged: n => e(c.W({
						hasFocus: n,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, n, o) => e(c.P(t, n, o)),
					dispatchSubmit: (n, o) => {
						e(t.submitAction(n, o))
					}
				}), (e, t, n) => Object.assign({}, e, t, n, {
					onSubmit: n => {
						t.dispatchSubmit(n, e.draft.commentMode)
					}
				}));
			t.default = tt(class extends a.a.Component {
				constructor(e) {
					super(e), this.getInstanceRef = e => this.formInstanceRef = e, this.onCancel = () => {
						this.props.onCancel()
					}, this.onSwitchMode = async (e, t, n) => {
						await this.props.onSwitchMode(e, t, n), this.formInstanceRef && this.formInstanceRef.focus()
					}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.modalSeen = () => {
						this.setState({
							showWarningModal: !1
						})
					}, this.state = {
						showWarningModal: !0
					}
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n && this.setState({
						showWarningModal: !0
					})
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.draft) return null;
					const t = e && e.draft && e.draft.rtJson || e.rtJson || void 0,
						n = {
							autofocus: e.autofocus || !1,
							className: e.className,
							depth: e.depth,
							disableAutofocus: e.disableAutofocus,
							draftKey: e.draftKey,
							draftType: e.draftType,
							editorElementRef: e.editorElementRef,
							errorMsgs: e.errorMsgs,
							initialHeight: this.state.editorHeight,
							instanceRef: this.getInstanceRef,
							hasError: e.hasError,
							language: e.language,
							modalSeen: this.modalSeen,
							onCancel: e.onCancel,
							onEditorResize: this.onEditorResize,
							onFocus: e.onFocus,
							onFocusChanged: e.onFocusChanged,
							onMount: e.onMount,
							onSubmit: e.onSubmit,
							onUnmount: e.onUnmount,
							parentCommentId: e.parentCommentId,
							pending: e.pending,
							rtJson: t,
							mediaMetadata: e.mediaMetadata,
							isTopLevelComment: e.isTopLevelComment,
							submitButtonText: e.submitButtonText,
							userName: e.userName,
							initialText: e.draft ? e.draft.text : e.initialText || "",
							onSwitchMode: this.onSwitchMode,
							showWarningModal: this.state.showWarningModal
						};
					return e.contributorRequestPending ? a.a.createElement(Je.a, null) : e.showContributorRequestFlow ? a.a.createElement(E, null) : e.draft.commentMode === Oe.h.RICH_TEXT ? a.a.createElement(Ge, n) : a.a.createElement(m.b, n)
				}
			})
		},
		"./src/reddit/components/CommentCreation/translations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/app/strings/index.ts");
			const s = Object(o.d)("comment.keep"),
				r = Object(o.d)("postCreation.discard.button");
			Object(o.d)("comment.confirmCancellation.creation")
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				p = n("./src/reddit/i18n/utils.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				x = n.n(g);
			const f = Object(a.c)({
				restrictions: b.o
			});
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(u.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return s.a.createElement(m.f, {
						className: Object(i.a)(this.props.smallButton ? null : x.a.RequestButton, this.props.className),
						onClick: this.onRequest
					}, this.props.eventSource === h.b.Comment ? Object(p.c)("Request to comment") : Object(p.c)("Request to post"))
				}
			}
			t.a = Object(r.b)(f, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST))
			}))(Object(c.c)(C))
		},
		"./src/reddit/components/ContributorRequestFlow/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_33axOHPa8DzNnTmwzen-wO",
				requestButton: "_33axOHPa8DzNnTmwzen-wO"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				i = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				x = n.n(g),
				f = n("./src/lib/lessComponent.tsx");
			const C = "Markdown_Help__Modal",
				E = f.a.wrapped(h.a, "Section", x.a),
				w = f.a.div("Container", x.a),
				O = f.a.table("Table", x.a),
				v = f.a.p("P", x.a);
			class y extends s.a.Component {
				render() {
					return s.a.createElement(i.a, null, s.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: "Markdown Help"
					}), s.a.createElement(w, null, s.a.createElement(O, {
						className: x.a.helpTable
					}, s.a.createElement("tr", null, s.a.createElement(d.s, null, s.a.createElement(d.j, null, "Type this:")), s.a.createElement(d.s, null, s.a.createElement(d.j, null, "to get this:"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "*italics*")), s.a.createElement(d.p, null, s.a.createElement(d.f, null, "italics"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "**bold**")), s.a.createElement(d.p, null, s.a.createElement(d.b, null, "bold"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), s.a.createElement(d.p, null, s.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "* item 1"), s.a.createElement(d.j, null, "* item 2"), s.a.createElement(d.j, null, "* item 3")), s.a.createElement(d.p, null, s.a.createElement(d.v, null, s.a.createElement(d.g, null, "item 1"), s.a.createElement(d.g, null, "item 2"), s.a.createElement(d.g, null, "item 3")))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "> quoted text")), s.a.createElement(d.p, null, s.a.createElement(d.c, null, "quoted text"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "~~strikethrough~~")), s.a.createElement(d.p, null, s.a.createElement(d.d, null, "strikethrough"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "super^script")), s.a.createElement(d.p, null, "super", s.a.createElement(d.m, null, "script"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, ">!spoilers!<")), s.a.createElement(d.p, null, s.a.createElement(c.a, null, "spoilers")))), s.a.createElement(v, null, "Check the", s.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, " commenting wiki page "), "for more help")), s.a.createElement(E, null, s.a.createElement(b.a, null, s.a.createElement(p.f, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, "Close"))))
				}
			}
			const M = Object(r.b)(null, (e, t) => ({
				closeModal: () => e(Object(u.i)(C))
			}))(y);
			t.a = Object(m.a)(Object(l.c)(M))
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				c = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				u = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/editorContent.ts"),
				f = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				C = n.n(f),
				E = n("./src/lib/lessComponent.tsx");
			const w = E.a.wrapped(h.a, "LoadingIcon", C.a),
				O = E.a.span("ModeDescription", C.a),
				v = E.a.div("ModeWrapper", C.a),
				y = E.a.button("SwitchModeButton", C.a),
				M = E.a.wrapped(d.a, "MarkdownHelpButton", C.a),
				T = E.a.div("Toolbar", C.a),
				j = Object(a.c)({
					activeModalId: g.a,
					isConverting: e => Object(x.a)(e)
				}),
				k = Object(r.b)(j, (e, t) => ({
					onChange: n => {
						e(Object(i.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(i.y)(l.b)),
					switchToRTEModalToggled: () => e(Object(i.y)(m.c))
				}));
			class R extends s.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === p.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(b.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(b.h.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: o,
						value: r
					} = this.props, {
						isFocused: a
					} = this.state;
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(c.a, {
						className: o,
						isFocused: a
					}, s.a.createElement(T, null, s.a.createElement(v, null, s.a.createElement(O, null, "Markdown"), s.a.createElement(M, {
						onClick: this.props.helpModalToggled
					})), s.a.createElement(y, {
						onClick: this.handleSwitchModeClick
					}, t && s.a.createElement(w, {
						sizePx: 12
					}), "Switch to Fancy Pants Editor")), s.a.createElement(u.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: r
					})), this.props.activeModalId === l.b && s.a.createElement(l.a, {
						language: this.props.language
					}), this.props.activeModalId === m.c && s.a.createElement(m.d, {
						modalId: m.c,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			t.a = k(R)
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				u = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(d.f, "PrimaryButton", u.a),
				b = p.a.wrapped(a.m, "ModalText", u.a);
			class g extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === i.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return s.a.createElement(a.c, null, s.a.createElement(a.g, null, s.a.createElement(l.a, null, s.a.createElement(a.n, null, this.props.titleText), s.a.createElement(c.a, {
						onClick: this.props.onClose
					}, s.a.createElement(a.b, null)))), s.a.createElement(a.j, null, s.a.createElement(b, null, this.props.bodyText)), s.a.createElement(a.e, null, s.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, this.props.secondaryButtonText), s.a.createElement(h, {
						onClick: this.props.onPrimaryAction
					}, this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/app/strings/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = "POST_CREATION__LOAD_DRAFT_MODAL_ID",
				u = "POST_CREATION__MAX_DRAFTS_MODAL_ID",
				p = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID",
				h = (e, t) => "postCreation.prompt.".concat(e, ".").concat(t),
				b = {
					body: h("default", "body"),
					cancel: "postCreation.cancel",
					confirm: h("default", "confirm"),
					title: h("default", "title")
				},
				g = Object.assign({}, b, {
					body: h("loadDraft", "body"),
					confirm: h("loadDraft", "confirm"),
					title: h("loadDraft", "title")
				}),
				x = Object.assign({}, b, {
					body: h("maxDrafts", "body"),
					confirm: h("maxDrafts", "confirm"),
					title: h("maxDrafts", "title")
				}),
				f = Object.assign({}, b, {
					body: h("switchToRTE", "body"),
					confirm: h("switchToRTE", "confirm"),
					title: h("switchToRTE", "title")
				}),
				C = {
					[m]: g,
					[u]: x,
					[p]: f
				},
				E = Object(a.c)({
					language: d.O
				}),
				w = Object(r.b)(E),
				O = (e, t) => ({
					bodyText: Object(i.a)(e, t.body),
					secondaryButtonText: Object(i.a)(e, t.cancel),
					primaryButtonText: Object(i.a)(e, t.confirm),
					titleText: Object(i.a)(e, t.title)
				});
			class v extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						language: e,
						modalId: t
					} = this.props;
					return s.a.createElement(c.a, l({}, O(e, C[t]), {
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					}))
				}
			}
			t.d = w(v)
		},
		"./src/reddit/components/PostEditForm/index.m.less": function(e, t, n) {
			e.exports = {
				BottomRow: "_2tvWRsxtXPamngfOz-62jr",
				bottomRow: "_2tvWRsxtXPamngfOz-62jr",
				errorMessages: "_19V2_W_A8aXNszBqWTITiK",
				Editor: "_8uW3gzV8WqahKv77o2EFu",
				editor: "_8uW3gzV8WqahKv77o2EFu",
				isPending: "_2UWKes5OMhB-Rz2iVtBdKZ",
				FormContent: "_2ISPYodbQ3VsImJAFvLFDJ",
				formContent: "_2ISPYodbQ3VsImJAFvLFDJ",
				SubmitButton: "_1N8wF0OCvBu6gW4b4cpHhE",
				submitButton: "_1N8wF0OCvBu6gW4b4cpHhE",
				LoadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d",
				loadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d"
			}
		},
		"./src/reddit/components/PostEditForm/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/reddit/i18n/components.tsx"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/app/strings/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/models/PostCreationForm/index.ts"),
				b = n("./src/reddit/models/PostRequirements/index.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				x = n("./src/reddit/actions/postCreation/editing.ts"),
				f = n("./src/reddit/actions/postCreation/editorContent.ts"),
				C = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				E = n("./src/lib/constants/index.ts"),
				w = n("./src/lib/memoizeByReference/index.ts"),
				O = n("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const v = Object(w.a)((e, t, n) => {
				const o = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(O.g)(t),
					a = ((e, t, n, o) => {
						if (!t) return null;
						let s = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? s = "postCreation.mediaInput.videosAreNotAllowed" : !e.image && !e.gifvideo || t.images || (s = "postCreation.mediaInput.imagesAreNotAllowed") : s = "postCreation.mediaInput.mediaAreNotAllowed", s ? Object(m.a)(o, s, {
							subredditName: n
						}) : null
					})(r, s, o, n);
				return a ? [a] : ((e, t) => {
					const n = [];
					return e.image > E.T && n.push(Object(m.a)(t, "postCreation.mediaInput.imagesLimitExceeded")), e.video + e.gifvideo > E.X && n.push(Object(m.a)(t, "postCreation.mediaInput.videosLimitExceeded")), n
				})(r, n)
			});
			var y = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				M = n("./src/reddit/components/RichTextEditor/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/controls/ErrorText/index.tsx"),
				R = n("./src/reddit/helpers/richTextEditor/index.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = n("./src/reddit/components/PostEditForm/index.m.less"),
				F = n.n(I),
				P = n("./src/lib/lessComponent.tsx");
			const A = Object(m.d)("postCreation.rtfPlaceholderOptional"),
				D = Object(m.d)("postCreation.rtfPlaceholderRequired"),
				H = P.a.div("BottomRow", F.a),
				N = P.a.div("FormContent", F.a),
				W = P.a.wrapped(S.f, "SubmitButton", F.a),
				L = P.a.wrapped(B.a, "LoadingIcon", F.a),
				z = Object(j.t)(),
				U = Object(l.c)({
					destSubreddit: g.g,
					editorMode: g.h,
					errorMessages: g.i,
					hasError: g.j,
					language: _.O,
					markdownDraft: g.k,
					pending: g.P,
					postRequirements: g.db,
					rteDraft: g.l,
					subreddit: j.q,
					uploads: e => e.uploads,
					user: _.i
				}),
				q = Object(i.b)(U, (e, t) => ({
					onCancel: t => e(x.b(t)),
					onSubmitDraft: t => e(x.c(t)),
					onSuccess: t => e(Object(d.b)(t)),
					onToggleEditorMode: (t, n) => e(f.d(h.g.POST_EDITING, t, n))
				}));
			class V extends a.a.Component {
				constructor(e) {
					super(e), this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onMarkdownPostChange = e => {
						const {
							markdownBody: t
						} = this.state, n = this.state.markdownPostDraftChanged || t.trim() !== e.trim();
						this.setState({
							markdownBody: e,
							markdownPostDraftChanged: n
						})
					}, this.onRichPostChange = (e, t) => {
						this.setState({
							rteState: e,
							richtextPostDraftChanged: this.state.richtextPostDraftChanged || t
						})
					}, this.haveMarkdownPostDraft = () => !!(this.state.markdownBody || "").trim(), this.haveDraft = () => this.props.editorMode === h.h.RICH_TEXT ? this.haveRichPostDraft() : this.haveMarkdownPostDraft(), this.onSubmit = () => {
						const e = this.buildPostSubmission();
						e && this.props.onSubmitDraft(e)
					}, this.onToggleEditorMode = async (e, t) => {
						this.setState({
							markdownPostDraftChanged: !1,
							richtextPostDraftChanged: !1
						}), await this.props.onToggleEditorMode(e, t), e === h.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.getMediaValidationErrors = () => {
						const {
							editorMode: e,
							destSubreddit: t,
							language: n
						} = this.props, {
							rteState: o
						} = this.state;
						return o.isBound && e === h.h.RICH_TEXT ? v(t, o.editorState.getCurrentContent(), n) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: n,
							rteState: o
						} = this.state;
						return e === h.h.RICH_TEXT ? T.a.toRichTextJSON(o, t) : {
							markdown: n
						}
					}, this.buildPostSubmission = () => {
						const {
							post: e
						} = this.props;
						return Object.assign({
							post: e
						}, this.getTextPostContent(), {
							validate_on_submit: !0
						})
					}, this.cancelEdit = () => {
						this.props.onCancel(this.props.post.id)
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e, this.state = {
						markdownBody: e.markdownDraft,
						markdownPostDraftChanged: !1,
						richtextPostDraftChanged: !1,
						rteState: e.rteDraft
					}
				}
				componentDidMount() {
					Object(p.d)(p.a.PostComposer)
				}
				componentWillUnmount() {
					Object(p.b)(p.a.PostComposer), this.cancelEdit()
				}
				componentWillReceiveProps(e) {
					e.rteDraft !== this.props.rteDraft && this.setState({
						rteState: e.rteDraft,
						richtextPostDraftChanged: !0
					}), e.markdownDraft !== this.props.markdownDraft && this.setState({
						markdownBody: e.markdownDraft,
						markdownPostDraftChanged: !0
					})
				}
				haveRichPostDraft() {
					const {
						rteState: e
					} = this.state;
					return T.a.hasContent(e)
				}
				hasChanged() {
					const {
						editorMode: e
					} = this.props, {
						markdownPostDraftChanged: t,
						richtextPostDraftChanged: n
					} = this.state;
					return e === h.h.RICH_TEXT ? !!n : e === h.h.MARKDOWN && !!t
				}
				render() {
					const {
						language: e,
						pending: t,
						editorMode: n,
						errorMessages: o,
						hasError: r,
						post: i,
						postRequirements: d,
						uploads: l
					} = this.props, {
						markdownBody: p,
						markdownPostDraftChanged: g,
						richtextPostDraftChanged: x,
						rteState: f
					} = this.state, E = d && d.bodyRestrictionPolicy === b.a.Required ? D(e) : A(e), w = this.getMediaValidationErrors(), O = [...o, ...w];
					r && !O.length && O.push(Object(m.a)(e, "error.type.generic"));
					const v = !T.a.isAllMediaUploaded(f, l);
					return a.a.createElement(N, null, n === h.h.RICH_TEXT ? a.a.createElement(M.a, {
						allowMediaUploads: !0,
						className: Object(u.a)(F.a.Editor, {
							[F.a.isPending]: !!t
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: R.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: f,
						language: e,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!t,
						rteRef: this.setRteRef,
						trackToolbarClick: s.a,
						placeholderText: E
					}) : a.a.createElement(y.a, {
						language: e,
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!t,
						value: p,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: E
					}), a.a.createElement(H, null, a.a.createElement(S.n, {
						disabled: !!t,
						onClick: this.cancelEdit
					}, a.a.createElement(c.c, null, "cancel")), a.a.createElement(W, {
						disabled: !!t || !!w.length || !this.hasChanged() || v,
						onClick: this.onSubmit
					}, t ? a.a.createElement(L, {
						sizePx: 10
					}) : Object(m.a)(e, "posts.save"))), a.a.createElement(k.a, {
						className: F.a.errorMessages,
						messages: O
					}), a.a.createElement(C.a, {
						editKey: i.id,
						language: e,
						hasValue: !(!g && !x),
						isPostEdit: !0
					}))
				}
			}
			t.default = z(q(V))
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				m = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = i.a.wrapped(d.a, "Banner", h.a),
				g = Object(r.b)(() => Object(a.c)({
					restrictions: u.o,
					subreddit: m.f
				}));
			t.a = g(e => {
				let {
					restrictions: t,
					subreddit: n
				} = e;
				if (!n) return null;
				const o = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return s.a.createElement(b, {
					subtitle: s.a.createElement("span", {
						className: h.a.Subtitle
					}, Object(c.c)("Your request to ".concat(Object(c.b)("restrictions", l.d[t]), " in r/").concat(Object(c.b)("displayName", n.name), " was sent and is pending. In the meantime, you can ").concat(Object(c.b)("action", l.c[o]), " a post and ")), s.a.createElement("a", {
						href: "".concat(n.url)
					}, Object(c.c)("browse the community"))),
					title: Object(c.c)("Request to ".concat(Object(c.b)("restrictions", l.d[t]), " is pending..."))
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const u = e => {
					let {
						className: t,
						children: n,
						editorWrapperRef: o,
						initialHeight: r
					} = e;
					return s.a.createElement("div", {
						className: Object(i.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: o
					}, n)
				},
				p = e => {
					var {
						isFullHeight: t,
						textAreaRef: n
					} = e, o = m(e, ["isFullHeight", "textAreaRef"]);
					return s.a.createElement(a.a, l({
						className: Object(i.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: n
					}, o))
				};
			class h extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const e = this.props,
						{
							className: t,
							initialHeight: n,
							innerRef: o,
							onEditorResize: r
						} = e,
						a = m(e, ["className", "initialHeight", "innerRef", "onEditorResize"]),
						{
							isResized: i
						} = this.state;
					return s.a.createElement(u, {
						className: t,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: n
					}, s.a.createElement(p, l({}, a, {
						children: !0,
						isFullHeight: !!i,
						textAreaRef: o
					})))
				}
			}
			t.a = h
		},
		"./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less": function(e, t, n) {
			e.exports = {
				SectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				sectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less": function(e, t, n) {
			e.exports = {
				emote: "_3D93rMnM8022kmI5JTG4fb",
				emotes: "_2nE7oF1_HdWt-s31zYmYB6",
				emoteMask: "_26-n7Hn4ggLG2AJ7kmR8i6",
				smile: "kZEfwKUF_b6N-MPjQuYFA"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less": function(e, t, n) {
			e.exports = {
				rainbow: "_3o1yVY7yuN_Xzqg5RaAFp8",
				rainbowFade: "_3XlVOBsaD4vQFIAVPEpLFD"
			}
		},
		"./src/reddit/controls/HelpfulTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jhMYYIyWfC22MBJXfjc_j",
				close: "Ox8QhMwI_pG4DcRAicFqa",
				tooltip: "_3ks0MaOGG46svtYF11UgzA",
				fadeIn: "G_Qeda7XitCcKYjxHAP-D",
				helpfulTooltip: "_3bxQwDiY1JejDtESIEAiwn"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.on,
				className: Object(r.a)(i.a.toggleSwitch, e.className, {
					[i.a.mActive]: e.on && !e.disabled,
					[i.a.mDisabled]: e.disabled
				}),
				style: e.on && !e.disabled && e.activeColorOverride ? {
					backgroundColor: e.activeColorOverride
				} : void 0,
				id: e.id,
				role: "switch",
				tabIndex: e.tabIndex,
				type: "button",
				onClick: () => !e.disabled && e.onToggle && e.onToggle()
			}, s.a.createElement("div", {
				className: i.a.toggleDisplay
			}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				a = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(o.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function c(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.trial ? "trial_membership" : "membership",
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function m(e, t) {
				return Object(a.a)(Object(s.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(i.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign({}, e, {
							body: t
						})
					}
					return e
				})
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				d = n("./src/reddit/endpoints/governance/products/badges.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const o = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(c.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					m = Object(i.a)(e, {
						subredditId: t
					}),
					u = Object(d.b)(e, t),
					p = Object(a.c)(e, t, n),
					[h, b, g, x] = await Promise.all([l, m, u, p]);
				if (h.ok ? o.collections = h.body : o.errors.collections = h.error, b.ok) {
					const e = b.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return g.ok ? o.products = g.body : o.errors.products = g.error, x.ok ? (s()(o.badges, x.body.badges), o.userOwnedBadges = x.body.userOwnedBadges) : o.errors.userBadges = x.error, o
			}
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			}));
			const m = (e, t) => Object(c.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => Object.assign({}, o.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.subreddit(t)
				}),
				r = e => t => Object.assign({}, o.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), s.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), s.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("rightAligned", r.a)
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				r = (e, t) => {
					let {
						productId: n
					} = t;
					const o = e.products.models[n];
					if (o) {
						const t = o.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							a = Date.now();
						let i = !1;
						return s.forEach(e => {
							const t = r[e];
							t && t.type === n && t.endsAt > a && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=RichTextEditor.f4f2d7a1c214806948eb.js.map