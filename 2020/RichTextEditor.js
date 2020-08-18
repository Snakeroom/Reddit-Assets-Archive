// https://www.redditstatic.com/desktop2x/RichTextEditor.cc9cd2f305c9d62c3874.js
// Retrieved at 8/18/2020, 1:00:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor"], {
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(d.a),
				l = Object(a.a)(d.b),
				m = Object(a.a)(d.c),
				u = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const a = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: "".concat(r.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
							})
						}(s(), a);
						if (e.ok) {
							const n = e.body;
							a && !n.specialMemberships && (n.specialMemberships = {}), t(c(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = "https://".concat(r.pointsDocsBaseUrl, "v1.json?web"),
							n = await Object(s.b)({
								endpoint: t,
								method: o.db.GET
							});
						n.ok && n.body && e(m(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "f", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				a = n("./src/reddit/endpoints/economics/specialMembership.ts"),
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
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				x = n("./src/reddit/selectors/economics.ts"),
				g = n("./src/reddit/selectors/products.ts"),
				C = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				E = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function w(e) {
				return !!e && "removeBadge" === e.type
			}

			function _(e) {
				if (!w(e)) return e
			}
			const v = () => async (e, t, n) => {
				let {
					apiContext: o
				} = n;
				if (!t().user.account) return;
				await e(Object(C.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					r = Object.keys(s);
				if (r.length) {
					const t = await Object(a.e)(o(), r);
					t.ok && e(Object(E.g)(t.body))
				}
			}, O = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				const i = o().user.account,
					a = o().economics.subredditPremium[e],
					c = !a || a.status !== f.a.Fetched || t;
				if (i && c) {
					const t = await Object(d.a)(r(), e, i.id);
					n(Object(E.i)(t))
				}
			}, y = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const i = n(),
					a = i.user.account,
					d = Object(x.f)(i, e.subredditId),
					l = Object.keys(d).map(e => d[e]).filter(Boolean);
				if (a && e.badge) {
					let n, o;
					n = e.placement === p.a.First ? d[h.a.Loyalty] : e.placement === p.a.Second ? d[h.a.Achievement] : d[h.a.Cosmetic], t(Object(E.a)(Object.assign(Object.assign({}, e), {
						badge: _(e.badge),
						currentAppliedBadges: l,
						userId: a.id
					}))), w(e.badge) && n ? o = await Object(c.a)(s(), e.subredditId, n.id, !1) : w(e.badge) || (o = await Object(c.a)(s(), e.subredditId, e.badge.id)), o && !o.ok && (t(Object(E.a)(Object.assign(Object.assign({}, e), {
						badge: n,
						currentAppliedBadges: l,
						userId: a.id
					}))), Object(r.a)(t, o.error))
				}
			}, k = (e, t) => async (n, o, s) => {
				let {
					apiContext: r
				} = s;
				await n(O(e, !0));
				const i = o().economics.subredditPremium[e];
				if (i && i.status === f.a.Fetched) {
					const o = i.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(y({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(E.d)(h.c.MyBadges)))
				}
			}, T = e => async (t, n, o) => {
				let {
					apiContext: a
				} = o;
				const d = n().user.account,
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (d && (c || l)) {
					const [n, o] = await Promise.all([Object(i.b)(a(), e), u(a(), e, d.id)]);
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
			}, M = (e, t, n) => async (o, s, r) => {
				let {
					apiContext: i
				} = r;
				if (await o(O(e, !0)), n && t) {
					const n = s(),
						r = Object(x.f)(n, e),
						i = Object(g.a)(n, t);
					if (!r[Object(h.d)(i.placement)] && i) {
						const t = Object(x.m)(n, {
							subredditId: e,
							badge: i
						});
						t && await o(y({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(E.c)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}, R = e => async (t, n, o) => {
				let {
					apiContext: s
				} = o;
				const {
					wallet: r
				} = await Object(a.c)(s(), e);
				t(Object(E.f)({
					wallet: r
				})), await t(O(e.subredditId, !0))
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
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

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
				} = e, i = c(e, ["breakOut", "depth", "isEditing"]);
				return s.a.createElement("div", d({
					className: Object(r.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: l(n, o)
					}
				}, i))
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = n.n(c);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.div("FormFooterWrapper", l.a), p = i.a.wrapped(a.f, "SubmitButton", l.a), h = i.a.wrapped(d.a, "LoadingIcon", l.a), b = i.a.wrapped(a.i, "CancelButton", l.a), f = i.a.div("ButtonWrapper", l.a), x = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: n = !0,
					children: o,
					className: i,
					submitButtonText: a,
					canSubmit: d,
					onSubmit: c,
					onCancel: g
				} = e;
				return s.a.createElement(u, {
					className: Object(r.a)(i, {
						[l.a.pending]: t
					})
				}, s.a.createElement(f, null, s.a.createElement(p, {
					type: "submit",
					disabled: !d,
					onClick: c,
					onMouseDown: x
				}, t ? s.a.createElement(h, {
					sizePx: 10
				}) : a), n && s.a.createElement(b, {
					type: "reset",
					disabled: t,
					onClick: g,
					onMouseDown: x
				}, m._("Cancel", null, {
					hk: "2TSLl5"
				}))), o)
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
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
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return de
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-dom/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				m = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				u = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = n("./src/reddit/controls/ErrorText/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/Help/index.tsx"),
				C = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				E = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				w = n("./src/lib/fastdom/index.ts"),
				_ = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				v = n.n(_),
				O = n("./src/lib/lessComponent.tsx");
			const y = 310,
				k = O.a.div("Container", v.a);
			class T extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < y ? "compact" : "full";
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
					return r.a.createElement(k, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var M = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 208 128"
				}, r.a.createElement("rect", {
					width: "198",
					height: "118",
					x: "5",
					y: "5",
					ry: "10",
					stroke: "currentColor",
					strokeWidth: "10",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
				})),
				R = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				j = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				S = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				B = n.n(S);
			const I = O.a.wrapped(x.a, "LoadingIcon", B.a),
				F = O.a.div("Wrapper", B.a),
				P = O.a.wrapped(M, "MarkdownModeIcon", B.a),
				A = O.a.wrapped(R.a, "Button", B.a);
			var D = e => {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return r.a.createElement(F, null, r.a.createElement(A, {
						"aria-label": t,
						setRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick
					}, e.isConverting && r.a.createElement(I, {
						sizePx: 12
					}), r.a.createElement(j.a, {
						text: t
					}), !e.isConverting && r.a.createElement(P, null)))
				},
				W = n("./src/lib/classNames/index.ts"),
				H = n("./src/reddit/constants/keycodes.ts"),
				N = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				L = n("./src/reddit/constants/componentSizes.ts"),
				z = n("./src/reddit/constants/componentTestIds.ts"),
				U = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/editorContent.ts"),
				K = n("./src/reddit/actions/modal.ts"),
				X = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Z = n("./src/reddit/models/PostCreationForm/index.ts"),
				Q = n("./src/reddit/models/PostDraft/index.ts"),
				G = n("./src/reddit/models/User/index.ts"),
				J = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				Y = n.n(J);
			const $ = O.a.button("SwitchModeButton", Y.a),
				ee = O.a.wrapped(x.a, "LoadingIcon", Y.a),
				te = O.a.div("CommentHeader", Y.a),
				ne = O.a.span("FormHeaderText", Y.a),
				oe = O.a.button("HelpButton", Y.a),
				se = O.a.wrapped(g.a, "HelpIcon", Y.a),
				re = O.a.wrapped(X.a, "ResizableAutosizeTextarea", Y.a),
				ie = O.a.wrapped(E.a, "FormFooter", Y.a),
				ae = O.a.wrapped(b.a, "CurrentUserIcon", Y.a),
				de = e => r.a.createElement(oe, {
					className: e.className,
					onClick: e.onClick
				}, r.a.createElement(se, null)),
				ce = 8,
				le = 16,
				me = O.a.div("Wrapper", Y.a),
				ue = O.a.div("FormWrapper", Y.a),
				pe = Object(a.b)(() => Object(d.c)({
					activeModalId: U.a,
					userName: e => e.user.account ? Object(G.e)(e.user.account) : "",
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					draft: q.i,
					isConverting: (e, t) => Object(V.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(K.i)(Object(N.a)(t.draftKey))),
					helpModalToggled: () => e(Object(K.i)(h.b))
				}));
			class he extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < L.c,
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
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === Q.c.edit, this.onCancel = () => {
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
						(t || n) && o === H.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Z.h.MARKDOWN,
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
						initialText: s
					} = e;
					this.state = {
						text: s || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === Q.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "3d8gJY"
						})
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
					const e = Object(i.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + ce + le + L.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: s,
						disableAutofocus: i,
						depth: a,
						draft: d,
						draftKey: b,
						draftType: x,
						errorMsgs: g,
						pending: E,
						modalSeen: w,
						submitButtonText: _,
						isCommentBoxDesignEnabled: v,
						isExpanded: O,
						isTopLevelComment: y,
						onSwitchMode: k,
						userName: M
					} = this.props, {
						cancelModalText: R,
						showError: j,
						text: S,
						breakOut: B,
						wrapperHeight: I
					} = this.state, F = Object(N.a)(b), P = d.draftType === Q.c.edit;
					return r.a.createElement(me, {
						"data-test-id": z.b,
						className: Object(W.a)(s, {
							[Y.a.isTopLevelComment]: y,
							[Y.a.mExpanded]: O,
							[Y.a.mRedesign]: v
						}),
						ref: this.setWrapperRef,
						style: {
							height: B ? I : void 0
						}
					}, !v && y && r.a.createElement(te, null, r.a.createElement(ne, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", r.a.createElement(l.a, {
						author: M,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, M))], {
						hk: "4pMWAk"
					}))), r.a.createElement(C.a, {
						breakOut: B,
						depth: a,
						isEditing: P
					}, v && r.a.createElement("div", {
						className: Y.a.userIcon
					}, r.a.createElement(ae, null)), r.a.createElement(ue, {
						className: Object(W.a)({
							[Y.a.pending]: E,
							[Y.a.focused]: d.hasFocus
						})
					}, r.a.createElement(re, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !i,
						disabled: E,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: v ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: S
					}), (!v || O) && r.a.createElement(ie, {
						cancelButtonEnabled: x !== Q.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: E,
						submitButtonText: _,
						canSubmit: this.userHasEnteredText()
					}, r.a.createElement(T, null, e => "compact" === e ? r.a.createElement(D, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => k(Z.h.RICH_TEXT, S, b),
						isConverting: this.props.isConverting
					}) : r.a.createElement("div", null, r.a.createElement($, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => k(Z.h.RICH_TEXT, S, b)
					}, "Switch to Fancy Pants Editor", this.props.isConverting && r.a.createElement(ee, {
						sizePx: 12
					})))), r.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), j && Object(f.c)(g), e === F && r.a.createElement(p.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: R,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && r.a.createElement(h.a, null), e === c.qb && r.a.createElement(u.a, {
						onSubmit: this.onSubmit,
						modalSeen: w,
						withOverlay: !0
					}), r.a.createElement(m.a, {
						editKey: b,
						hasValue: !!S
					}))
				}
			}
			t.b = pe(he)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class d extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						d.blockers.delete(e), d.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", d.navigationBlocker))
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
					d.blockers.add(e), a || (window.addEventListener("beforeunload", d.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? o.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : o.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return window.confirm(e) ? void 0 : o.fbt._("Are you sure you want to leave?", null, {
							hk: "1Ua5kc"
						})
					}))
				}
				render() {
					return null
				}
			}
			d.blockers = new Set, d.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(d)
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
				mRedesign: "fbWRDwlX43TjfA8zsjnFx",
				MarkdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				markdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				SectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				sectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				ToolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				toolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				FormWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				formWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				isTopLevelComment: "aUM8DQ_Nz5wL0EJc_wte6",
				isRedesign: "_1kxci6CC2SNpUlvzABIQGP",
				MarkdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				markdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				FormHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				formHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				tooltipTextWrapper: "k-vjguq_GjpAA4aCWemKB"
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				a = n.n(i),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const f = e => Object.assign(Object.assign({
					source: "toxicity_modal"
				}, b.defaults(e)), {
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				x = e => t => Object.assign({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e
				}, f(t)),
				g = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e
				}, f(t)),
				C = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e
				}, f(t)),
				E = e => t => Object.assign({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e
				}, f(t));
			var w = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(c.qb))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class O extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(x(this.state.correlationId))
				}
				render() {
					return s.a.createElement(m.d, null, s.a.createElement(m.h, null, s.a.createElement(w.a, null, s.a.createElement(m.p, null, _._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(m.b, null)))), s.a.createElement(m.k, null, s.a.createElement(m.o, null, _._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(m.f, null, s.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, _._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(m.q, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, _._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(d.a)(v(Object(u.c)(O)))
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
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				m = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				h = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				f = n("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				x = n.n(f);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = u.a.div("RequestBox", x.a);
			var E = () => i.a.createElement(C, null, i.a.createElement(h.a, {
					className: x.a.commentIcon
				}), i.a.createElement("div", {
					className: x.a.commentText
				}, g._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(p.a, {
					className: x.a.requestButton,
					eventSource: b.b.Comment
				})),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./node_modules/lodash/noop.js"),
				v = n.n(_),
				O = n("./src/lib/classNames/index.ts"),
				y = n("./src/lib/fastdom/index.ts"),
				k = n("./src/lib/memoizeByReference/index.ts"),
				T = n("./src/reddit/components/AuthorLink/index.tsx"),
				M = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = n("./src/reddit/components/RichTextEditor/index.tsx"),
				j = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				S = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				B = n("./src/reddit/components/OverflowMenu/index.tsx"),
				I = n("./src/reddit/components/CollapseIntoOverflow/index.m.less"),
				F = n.n(I);
			const P = 33,
				A = e => e.preventDefault(),
				D = e => "Comment--Overflow-Dropdown__".concat(e),
				W = e => e.reduce((e, t) => (Array.isArray(t) ? e += t.length : t && e++, e), 0);
			class H extends i.a.Component {
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
									r = this.breakpoints[o + 1] + (s ? P : 0);
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
					const t = Array.isArray(e.children) ? W(e.children) : 1;
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
						shouldShowOverflow: a
					} = this.state, d = i.a.Children.toArray(e).filter(Boolean);
					return i.a.createElement("div", {
						className: Object(O.a)(F.a.outerWrapper, t),
						ref: e => this.container = e
					}, i.a.createElement("div", {
						className: F.a.innerWrapper
					}, d.map((e, t) => i.a.createElement("span", {
						className: t > r ? F.a.hidden : void 0,
						key: t,
						ref: e => this.registerBreakpoint(e, t)
					}, e)), a && i.a.createElement("div", {
						className: F.a.overflowMenuWrapper,
						key: "overflowMenuWrapper"
					}, s && s(), i.a.createElement(B.b, {
						className: F.a.overflowMenu,
						dropdownId: D(n),
						isFixed: !1,
						handleMouseDown: A,
						onClick: o
					}, i.a.createElement("div", {
						className: F.a.row
					}, d.map((e, t) => i.a.createElement("span", {
						className: t <= r ? F.a.hidden : void 0,
						key: t
					}, e)))))))
				}
			}
			var N = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				L = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/icons/svgs/Smile/index.tsx")),
				z = n("./src/reddit/selectors/economics.ts"),
				U = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				q = n("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				V = n.n(q);
			const K = Object(d.c)({
				emotes: (e, t) => {
					let {
						subredditId: n
					} = t;
					const o = Object(z.b)(e, n);
					if (o) {
						const e = o.reduce((e, t) => Object.assign(Object.assign({}, e), t.emotes), {});
						return Object.keys(e).slice(0, 3).map(t => e[t])
					}
					return []
				}
			});
			var X = Object(a.b)(K)((function(e) {
					const {
						controlsState: t,
						emotes: n,
						onEmoteButtonClick: o
					} = e;
					return i.a.createElement(U.a, {
						Icon: () => i.a.createElement(L.a, {
							className: V.a.smile
						}),
						tooltip: w.fbt._("Add Emote", null, {
							hk: "3dXLr8"
						}),
						enabled: t.emote.isEnabled,
						onClick: o
					}, i.a.createElement("div", {
						className: Object(O.a)(V.a.emotes, {
							[V.a.emoteMask]: n.length > 1
						})
					}, n.map(e => i.a.createElement("img", {
						className: V.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))
				})),
				Z = n("./src/reddit/icons/svgs/Gif/index.tsx"),
				Q = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				G = n("./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less"),
				J = n.n(G);
			const Y = Object(Q.f)(Z.a);
			var $ = function(e) {
					const {
						controlsState: t,
						onGifButtonClick: n,
						userCanUseGifs: o
					} = e, s = t.giphy.isEnabled;
					return i.a.createElement(U.a, {
						Icon: Y,
						className: s && o ? J.a.rainbow : "",
						tooltip: w.fbt._("Add GIF", null, {
							hk: "3uH3vO"
						}),
						disabledTooltip: w.fbt._("Limit 1 GIF / comment", null, {
							hk: "7T6gq"
						}),
						enabled: s,
						onClick: n
					})
				},
				ee = n("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				te = n.n(ee);
			const ne = u.a.div("SectionSpacer", te.a);
			var oe = e => {
					const {
						className: t,
						destSubreddit: n,
						editorKey: o,
						editorState: s,
						onChange: r,
						onEmoteButtonClick: a,
						onGifButtonClick: d,
						onOverflowMenuClick: c,
						readOnly: l,
						trackOnClick: m,
						onLinkButtonClick: u,
						userCanUseGifs: p
					} = e, h = Object(S.a)(s);
					l && Object(S.b)(h);
					const b = n && a,
						f = d && i.a.createElement($, {
							controlsState: h,
							onGifButtonClick: d,
							userCanUseGifs: p
						});
					return i.a.createElement(H, {
						className: t,
						oveflowMenuDropdownId: o,
						onOverflowMenuClick: c
					}, d && p && f, b && i.a.createElement(X, {
						controlsState: h,
						subredditId: n && n.id,
						onEmoteButtonClick: a
					}), d && !p && f, (b || d) && i.a.createElement(ne, null), Object(N.g)(N.f, h, s, r, m), i.a.createElement(N.a, {
						controlsState: h,
						trackOnClick: m,
						onLinkButtonClick: u
					}), Object(N.g)(N.h, h, s, r, m), i.a.createElement(ne, null), Object(N.g)(N.e, h, s, r, m), i.a.createElement(ne, null), i.a.createElement(N.d, {
						controlsState: h,
						editorState: s,
						trackOnClick: m,
						onChange: r
					}))
				},
				se = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				re = n("./src/reddit/constants/componentSizes.ts"),
				ie = n("./src/reddit/constants/componentTestIds.ts"),
				ae = n("./src/reddit/controls/ErrorText/index.tsx"),
				de = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				ce = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				le = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				me = n("./src/reddit/models/PostCreationForm/index.ts"),
				ue = n("./src/reddit/models/PostDraft/index.ts"),
				pe = n("./src/reddit/actions/modal.ts"),
				he = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				be = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				fe = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				xe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ge = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Ce = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Ee = n("./src/reddit/models/Subreddit/index.ts"),
				we = n("./src/reddit/selectors/activeModalId.ts"),
				_e = n("./src/reddit/selectors/comments.ts"),
				ve = n("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Oe = n.n(ve);
			const ye = 16,
				ke = u.a.div("FormWrapper", Oe.a),
				Te = u.a.div("CommentHeader", Oe.a),
				Me = u.a.wrapped(ce.a, "FormFooter", Oe.a),
				Re = u.a.div("MarkdownButtonWrapper", Oe.a),
				je = u.a.wrapped(se.a, "MarkdownButton", Oe.a),
				Se = u.a.wrapped(ne, "SectionSpacer", Oe.a),
				Be = u.a.div("ToolbarWrapper", Oe.a),
				Ie = u.a.span("FormHeaderText", Oe.a),
				Fe = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: n,
						isCommentBoxDesignEnabled: o,
						onSubmit: s,
						onCancel: r,
						pending: a,
						submitButtonText: d
					} = e;
					return e => {
						const {
							editorState: c,
							onMarkdownButtonClick: l
						} = e, m = c.getCurrentContent(), u = !!m.getPlainText().trim() || m.getBlockMap().some(e => !!e && Object(j.t)(e.getType()));
						return i.a.createElement(Me, {
							cancelButtonEnabled: t,
							className: Object(O.a)({
								[Oe.a.mRedesign]: o
							}),
							onSubmit: s,
							onCancel: r,
							pending: a,
							submitButtonText: d,
							canSubmit: u
						}, i.a.createElement(Be, null, i.a.createElement(oe, e), i.a.createElement(Se, null), i.a.createElement(Re, null, i.a.createElement(je, {
							draftKey: n,
							onClick: l
						}))))
					}
				},
				Pe = Object(a.b)(() => Object(d.c)({
					activeModalId: we.a,
					destSubreddit: (e, t) => {
						const n = Object(ge.p)(e, t);
						return n ? {
							name: n.name,
							isProfile: n.type === Ee.d.User,
							id: n.id
						} : void 0
					},
					draft: _e.i,
					userCanUseGifs: (e, t) => {
						const n = Object(ge.p)(e, t);
						return Object(z.t)(e, n ? n.id : void 0, t.parentCommentId)
					}
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(pe.i)(Object(le.a)(t.draftKey)))
				}));
			class Ae extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(k.a)((e, t, n, o, s) => Fe({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBoxDesignEnabled: s,
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
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < re.c,
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
						return fe.a.hasContent(e)
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
						this.editor && this.props.draftType === ue.c.replyToPost && this.setState({
							rteState: fe.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === ue.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: me.h.RICH_TEXT,
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
						mediaMetadata: s,
						rtJson: r
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: n === ue.c.edit ? w.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : w.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : fe.a.createInitial(r, s),
						formHeight: void 0,
						hasChanged: !1,
						showError: o
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: fe.a.createInitial()
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
					return this.editorDomElement.getBoundingClientRect().height + ye
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: n,
						depth: o,
						destSubreddit: s,
						draft: r,
						draftKey: a,
						draftType: d,
						errorMsgs: l,
						isCommentBoxDesignEnabled: m,
						isExpanded: u,
						modalSeen: p,
						pending: h,
						submitButtonText: b,
						isTopLevelComment: f,
						userCanUseGifs: x,
						userName: g
					} = this.props, {
						cancelModalText: C,
						breakOut: E,
						formHeight: _,
						rteState: y
					} = this.state, k = Object(le.a)(a), j = r.draftType === ue.c.edit, S = d !== ue.c.replyToPost;
					return i.a.createElement(ke, {
						className: Object(O.a)(n, {
							[Oe.a.isTopLevelComment]: f,
							[Oe.a.isRedesign]: m
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: E ? _ : void 0
						}
					}, !m && f && i.a.createElement(Te, null, i.a.createElement(Ie, null, w.fbt._("Comment as {authorLink}", [w.fbt._param("authorLink", i.a.createElement(T.a, {
						author: g,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, g))], {
						hk: "4pMWAk"
					}))), i.a.createElement(de.a, {
						breakOut: E,
						depth: o,
						isEditing: j
					}, i.a.createElement(R.a, {
						userCanUseGifs: x,
						dataTestId: ie.c,
						destSubreddit: s,
						editorType: Ce.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: m,
						isExpanded: u,
						rteState: y,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: m ? w.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : w.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						readOnly: h,
						trackToolbarClick: v.a,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(S, a, h, b, m)
					})), this.state.showError ? Object(ae.c)(l) : null, e === k && i.a.createElement(M.a, {
						actionText: w.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: w.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: C,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: v.a
					}), e === c.qb && i.a.createElement(be.a, {
						onSubmit: this.onSubmit,
						modalSeen: p,
						withOverlay: !0
					}), i.a.createElement(he.a, {
						editKey: a,
						hasValue: fe.a.hasContent(y)
					}))
				}
			}
			var De = Object(xe.t)()(Pe(Ae)),
				We = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				He = n("./src/reddit/models/User/index.ts"),
				Ne = n("./src/reddit/selectors/experiments/commentBox.ts"),
				Le = n("./src/reddit/selectors/subreddit.ts");
			const ze = Object(d.c)({
					activeModalId: we.a,
					contributorRequestPending: e => Object(Le.h)(e, b.e.Comment),
					isCommentBoxDesignEnabled: Ne.a,
					userName: e => e.user.account ? Object(He.e)(e.user.account) : "",
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					hasError: _e.w,
					errorMsgs: _e.J,
					draft: _e.i,
					disableAutofocus: _e.f,
					showContributorRequestFlow: e => Object(Le.q)(e, b.e.Comment)
				}),
				Ue = Object(a.b)(ze, (e, t) => ({
					onMount: () => e(c.I(t.draftKey)),
					onCancel: () => {
						t.draftType === ue.c.edit ? e(c.U({
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
				}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					onSubmit: n => {
						t.dispatchSubmit(n, e.draft.commentMode)
					}
				}));
			t.default = Ue(class extends i.a.Component {
				constructor(e) {
					super(e), this.getInstanceRef = e => this.formInstanceRef = e, this.onCancel = () => {
						this.props.onCancel()
					}, this.onSwitchMode = async (e, t, n) => {
						await this.props.onSwitchMode(e, t, n), this.formInstanceRef && this.formInstanceRef.focus()
					}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onEditorFocus = () => {
						const {
							isCommentBoxDesignEnabled: e,
							onFocus: t
						} = this.props;
						e ? this.setState(e => e.isExpanded ? null : {
							isExpanded: !0
						}, t) : t()
					}, this.modalSeen = () => {
						this.setState({
							showWarningModal: !1
						})
					};
					const t = e.draft ? e.draft.text : e.initialText || "";
					this.state = {
						isExpanded: !e.isCommentBoxDesignEnabled || !!t,
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
							modalSeen: this.modalSeen,
							onCancel: e.onCancel,
							onEditorResize: this.onEditorResize,
							onFocus: this.onEditorFocus,
							onFocusChanged: e.onFocusChanged,
							onMount: e.onMount,
							onSubmit: e.onSubmit,
							onUnmount: e.onUnmount,
							parentCommentId: e.parentCommentId,
							pending: e.pending,
							rtJson: t,
							mediaMetadata: e.mediaMetadata,
							isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
							isExpanded: this.state.isExpanded,
							isTopLevelComment: e.isTopLevelComment,
							submitButtonText: e.submitButtonText,
							userName: e.userName,
							initialText: e.draft ? e.draft.text : e.initialText || "",
							onSwitchMode: this.onSwitchMode,
							showWarningModal: this.state.showWarningModal
						};
					return e.contributorRequestPending ? i.a.createElement(We.a, null) : e.showContributorRequestFlow ? i.a.createElement(E, null) : e.draft.commentMode === me.h.RICH_TEXT ? i.a.createElement(De, n) : i.a.createElement(m.b, n)
				}
			})
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				x = n.n(f);
			const g = Object(a.c)({
				restrictions: b.o
			});
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(p.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return r.a.createElement(u.f, {
						className: Object(d.a)(this.props.smallButton ? null : x.a.RequestButton, this.props.className),
						onClick: this.onRequest
					}, this.props.eventSource === h.b.Comment ? o.fbt._("Request to comment", null, {
						hk: "3KqraC"
					}) : o.fbt._("Request to post", null, {
						hk: "3rSHPr"
					}))
				}
			}
			t.a = Object(i.b)(g, e => ({
				openContributorRequestModal: () => e(Object(c.i)(m.a.CONTRIBUTOR_REQUEST))
			}))(Object(l.c)(C))
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
				return E
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				d = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				x = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				g = n.n(x),
				C = n("./src/lib/lessComponent.tsx");
			const E = "Markdown_Help__Modal",
				w = C.a.wrapped(b.a, "Section", g.a),
				_ = C.a.div("Container", g.a),
				v = C.a.table("Table", g.a),
				O = C.a.p("P", g.a);
			class y extends r.a.Component {
				render() {
					return r.a.createElement(d.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: "Markdown Help"
					}), r.a.createElement(_, null, r.a.createElement(v, {
						className: g.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(c.s, null, r.a.createElement(c.j, null, "Type this:")), r.a.createElement(c.s, null, r.a.createElement(c.j, null, "to get this:"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "*italics*")), r.a.createElement(c.p, null, r.a.createElement(c.f, null, "italics"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "**bold**")), r.a.createElement(c.p, null, r.a.createElement(c.b, null, "bold"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(c.p, null, r.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "* item 1"), r.a.createElement(c.j, null, "* item 2"), r.a.createElement(c.j, null, "* item 3")), r.a.createElement(c.p, null, r.a.createElement(c.v, null, r.a.createElement(c.g, null, "item 1"), r.a.createElement(c.g, null, "item 2"), r.a.createElement(c.g, null, "item 3")))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "> quoted text")), r.a.createElement(c.p, null, r.a.createElement(c.c, null, "quoted text"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "~~strikethrough~~")), r.a.createElement(c.p, null, r.a.createElement(c.d, null, "strikethrough"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "super^script")), r.a.createElement(c.p, null, "super", r.a.createElement(c.m, null, "script"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, ">!spoilers!<")), r.a.createElement(c.p, null, r.a.createElement(l.a, null, "spoilers")))), r.a.createElement(O, null, "Check the", r.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, " commenting wiki page "), "for more help")), r.a.createElement(w, null, r.a.createElement(f.a, null, r.a.createElement(h.f, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const k = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(E))
			}))(y);
			t.a = Object(u.a)(Object(m.c)(k))
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				c = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				u = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = n("./src/reddit/models/PostCreationForm/index.ts"),
				f = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/editorContent.ts"),
				g = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				C = n.n(g),
				E = n("./src/lib/lessComponent.tsx");
			const w = E.a.wrapped(h.a, "LoadingIcon", C.a),
				_ = E.a.span("ModeDescription", C.a),
				v = E.a.div("ModeWrapper", C.a),
				O = E.a.button("SwitchModeButton", C.a),
				y = E.a.wrapped(d.a, "MarkdownHelpButton", C.a),
				k = E.a.div("Toolbar", C.a),
				T = Object(i.c)({
					activeModalId: f.a,
					isConverting: e => Object(x.a)(e)
				}),
				M = Object(r.b)(T, (e, t) => ({
					onChange: n => {
						e(Object(a.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(a.y)(l.b)),
					switchToRTEModalToggled: () => e(Object(a.y)(m.a.SWITCH_TO_RTE_MODAL_ID))
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
						isFocused: i
					} = this.state;
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(c.a, {
						className: o,
						isFocused: i
					}, s.a.createElement(k, null, s.a.createElement(v, null, s.a.createElement(_, null, "Markdown"), s.a.createElement(y, {
						onClick: this.props.helpModalToggled
					})), s.a.createElement(O, {
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
					})), this.props.activeModalId === l.b && s.a.createElement(l.a, null), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && s.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			t.a = M(R)
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
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				u = n.n(m),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(d.f, "PrimaryButton", u.a),
				b = p.a.wrapped(i.o, "ModalText", u.a);
			class f extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return s.a.createElement(i.d, null, s.a.createElement(i.h, null, s.a.createElement(l.a, null, s.a.createElement(i.p, null, this.props.titleText), s.a.createElement(c.a, {
						onClick: this.props.onClose
					}, s.a.createElement(i.b, null)))), s.a.createElement(i.k, null, s.a.createElement(b, null, this.props.bodyText)), s.a.createElement(i.f, null, s.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, this.props.secondaryButtonText), s.a.createElement(h, {
						onClick: this.props.onPrimaryAction
					}, this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(f)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const d = {
					title: () => s.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => s.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => s.fbt._("Load draft", null, {
						hk: "1gZRcm"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				c = {
					title: () => s.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => s.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => s.fbt._("Manage drafts", null, {
						hk: "1nFlZw"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => s.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => s.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => s.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				m = {
					[o.LOAD_DRAFT_MODAL_ID]: d,
					[o.MAX_DRAFTS_MODAL_ID]: c,
					[o.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class u extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						modalId: e
					} = this.props, t = m[e];
					return i.a.createElement(a.a, {
						bodyText: t.body(),
						secondaryButtonText: t.cancel(),
						primaryButtonText: t.confirm(),
						titleText: t.title(),
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					})
				}
			}
			t.b = u
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/Governance/Proposal/async.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/models/PostCreationForm/index.ts"),
				b = n("./src/reddit/models/PostRequirements/index.ts"),
				f = n("./src/reddit/selectors/platform.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				g = n("./src/reddit/actions/postCreation/editing.ts"),
				C = n("./src/reddit/actions/postCreation/editorContent.ts"),
				E = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/memoizeByReference/index.ts"),
				v = n("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const O = Object(_.a)((e, t) => {
				const n = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(v.g)(t),
					i = ((e, t, n) => {
						if (!t) return null;
						let s = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? s = o.fbt._("Videos are not allowed in {subreddit name}", [o.fbt._param("subreddit name", "r/".concat(n))], {
							hk: "4DBrcv"
						}) : !e.image && !e.gifvideo || t.images || (s = o.fbt._("Images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", "r/".concat(n))], {
							hk: "27ju8Q"
						})) : s = o.fbt._("Videos and images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", "r/".concat(n))], {
							hk: "2GGFeK"
						}), s || null
					})(r, s, n);
				return i ? [i] : (e => {
					const t = [];
					return e.image > w.S && t.push(o.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > w.W && t.push(o.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var y = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				k = n("./src/reddit/components/RichTextEditor/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				R = n("./src/reddit/controls/ErrorText/index.tsx"),
				j = n("./src/reddit/helpers/richTextEditor/index.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = n("./src/reddit/components/PostEditForm/index.m.less"),
				P = n.n(F),
				A = n("./src/lib/lessComponent.tsx");
			const D = A.a.div("BottomRow", P.a),
				W = A.a.div("FormContent", P.a),
				H = A.a.wrapped(B.f, "SubmitButton", P.a),
				N = A.a.wrapped(I.a, "LoadingIcon", P.a),
				L = Object(M.t)(),
				z = Object(l.c)({
					destSubreddit: x.g,
					editorMode: x.h,
					errorMessages: x.i,
					hasError: x.j,
					markdownDraft: x.k,
					pending: x.Q,
					postRequirements: x.eb,
					rteDraft: x.l,
					subreddit: M.q,
					uploads: e => e.uploads,
					user: S.i,
					isCommentsPage: f.g
				}),
				U = Object(d.b)(z, (e, t) => ({
					onCancel: t => e(g.b(t)),
					onSubmitDraft: t => e(g.c(t)),
					onSuccess: t => e(Object(c.b)(t)),
					onToggleEditorMode: (t, n) => e(C.d(h.g.POST_EDITING, t, n))
				}));
			class q extends a.a.Component {
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
							destSubreddit: t
						} = this.props, {
							rteState: n
						} = this.state;
						return n.isBound && e === h.h.RICH_TEXT ? O(t, n.editorState.getCurrentContent()) : []
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
						return Object.assign(Object.assign({
							post: e
						}, this.getTextPostContent()), {
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
				UNSAFE_componentWillReceiveProps(e) {
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
						editorMode: e,
						errorMessages: t,
						hasError: n,
						isCommentsPage: s,
						pending: i,
						post: d,
						postRequirements: c,
						uploads: l
					} = this.props, {
						markdownBody: p,
						markdownPostDraftChanged: f,
						richtextPostDraftChanged: x,
						rteState: g
					} = this.state, C = c && c.bodyRestrictionPolicy === b.a.Required ? o.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : o.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), w = this.getMediaValidationErrors(), _ = [...t, ...w];
					n && !_.length && _.push(o.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const v = !T.a.isAllMediaUploaded(g, l);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(W, null, e === h.h.RICH_TEXT ? a.a.createElement(k.a, {
						allowMediaUploads: !0,
						className: Object(m.a)(P.a.Editor, {
							[P.a.isPending]: !!i
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: j.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: g,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!i,
						rteRef: this.setRteRef,
						trackToolbarClick: r.a,
						placeholderText: C
					}) : a.a.createElement(y.a, {
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!i,
						value: p,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: C
					}), a.a.createElement(D, null, a.a.createElement(B.n, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(H, {
						disabled: !!i || !!w.length || !this.hasChanged() || v,
						onClick: this.onSubmit
					}, i ? a.a.createElement(N, {
						sizePx: 10
					}) : o.fbt._("save", null, {
						hk: "1RZ7vw"
					}))), a.a.createElement(R.a, {
						className: P.a.errorMessages,
						messages: _
					}), a.a.createElement(E.a, {
						editKey: d.id,
						hasValue: !(!f && !x),
						isPostEdit: !0
					})), a.a.createElement(u.a, {
						postId: d.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = L(U(q))
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				m = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = d.a.wrapped(c.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: u.o,
					subreddit: m.f
				}));
			t.a = f(e => {
				let {
					restrictions: t,
					subreddit: n
				} = e;
				if (!n) return null;
				const s = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", l.d[t]()), o.fbt._param("displayName", n.name), o.fbt._param("action", l.c[s]()), o.fbt._param("=browse the community", r.a.createElement("a", {
						href: "".concat(n.url)
					}, o.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: o.fbt._("Request to {restrictions} is pending...", [o.fbt._param("restrictions", l.d[t]())], {
						hk: "1tQuSr"
					})
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
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
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
						className: Object(a.a)(c.a.editorWrapper, t),
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
					return s.a.createElement(i.a, l({
						className: Object(a.a)(c.a.textareaAutosize, {
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
						i = m(e, ["className", "initialHeight", "innerRef", "onEditorResize"]),
						{
							isResized: a
						} = this.state;
					return s.a.createElement(u, {
						className: t,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: n
					}, s.a.createElement(p, l({}, i, {
						children: !0,
						isFullHeight: !!a,
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
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/UserIcon.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const m = Object(i.c)({
					currentUser: a.i,
					isNightMode: a.S,
					shouldHideNSFW: a.z
				}),
				u = Object(r.b)(m);
			t.a = u(e => {
				const {
					currentUser: t
				} = e, n = l(e, ["currentUser"]);
				return s.a.createElement(d.a, c({}, n, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				}))
			})
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
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.on,
				className: Object(r.a)(a.a.toggleSwitch, e.className, {
					[a.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
					[a.a.mDisabled]: e.disabled
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
				className: a.a.toggleDisplay
			}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
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
				i = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(o.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				a = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				d = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(i.a)(e, {
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

			function l(e, t) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
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

			function u(e, t) {
				return Object(i.a)(Object(s.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(d.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign(Object.assign({}, e), {
							body: t
						})
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(i.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/orders"),
					method: "post",
					data: Object.assign(Object.assign({}, t), {
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					})
				});
				if (!n.ok) throw new Error("Error fetching provisional membership: ".concat(Object(a.b)(n.error)));
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				a = n("./src/reddit/endpoints/governance/community.ts"),
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
					m = Object(a.a)(e, {
						subredditId: t
					}),
					u = Object(d.b)(e, t),
					p = Object(i.c)(e, t, n),
					[h, b, f, x] = await Promise.all([l, m, u, p]);
				if (h.ok ? o.collections = h.body : o.errors.collections = h.error, b.ok) {
					const e = b.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return f.ok ? o.products = f.body : o.errors.products = f.error, x.ok ? (s()(o.badges, x.body.badges), o.userOwnedBadges = x.body.userOwnedBadges) : o.errors.userBadges = x.error, o
			}
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
			const s = e => t => Object.assign(Object.assign({}, o.defaults(t)), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.subreddit(t)
				}),
				r = e => t => Object.assign(Object.assign({}, o.defaults(t)), {
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
				i = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
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
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.H, i.G, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.r
				}), e => e === s.y.Enabled)
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
							i = Date.now();
						let a = !1;
						return s.forEach(e => {
							const t = r[e];
							t && t.type === n && t.endsAt > i && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=RichTextEditor.cc9cd2f305c9d62c3874.js.map