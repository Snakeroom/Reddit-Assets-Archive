// https://www.redditstatic.com/desktop2x/ModToMemberShareModal.bd31c10df5789e05ab65.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModToMemberShareModal"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement(i.b, {
				className: Object(o.a)(e.className, d.a.container, e.text.length > e.maxChars ? d.a.mOverflow : null)
			}, "".concat(e.maxChars - e.text.length, " ").concat(Object(a.c)("Characters")))
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				subAndMeta: "_3GMQrxl5pvXDUEFvUjr9Qh",
				isSingleLine: "dZATEZTPQCHPtvhujPV0L",
				separator: "_2q6RJ3jSwGkeuWcg6aU-nY",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/Thumbnail/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/MiniPost/index.m.less"),
				C = s.n(g);
			const _ = Object(i.a)(e => e, h.M, h.c, x.O, (e, t, s, n) => {
					return {
						crosspost: s,
						language: n,
						post: t,
						subredditOrProfile: Object(b.J)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				f = Object(o.b)(_, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class S extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: s,
							post: n
						} = this.props;
						s ? window.open(n.permalink) : t(n), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: s,
							subredditOrProfile: n
						} = this.props;
						e.stopPropagation(), t && n && (e.preventDefault(), window.open(n.url)), s && s()
					}, this.onClickThumbnail = e => {
						const {
							thumbnailOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: s = !1,
						subredditOrProfile: n,
						subredditSameLine: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(c.a)(C.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: C.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(u.a, {
						post: t
					})), r.a.createElement("div", {
						className: C.a.postDetails
					}, r.a.createElement("p", {
						className: C.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(c.a)(C.a.subAndMeta, {
							[C.a.isSingleLine]: o
						})
					}, s && n && n.displayText && r.a.createElement(l.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o && r.a.createElement("div", {
						className: C.a.separator
					}), r.a.createElement("div", null, r.a.createElement("span", {
						className: C.a.meta
					}, Object(a.b)(this.props.language, "posts.points.noun", t.score, {
						count: Object(d.b)(t.score)
					})), r.a.createElement("span", {
						className: C.a.meta
					}, Object(a.b)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(d.b)(t.numComments)
					})), r.a.createElement("span", {
						className: C.a.meta
					}, Object(m.d)(this.props.language, t.created / 1e3, !0, !0))))))
				}
			}
			t.a = f(S)
		},
		"./src/reddit/components/ModToMemberShareModal/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_3kHK0evAij3Gwe-QUiRQY",
				header: "_25Fp8pQrFkPheG2NMSftIH",
				textarea: "_1IVyoNiz6BjraYKxawDr0c",
				title: "_32veevIKacdM-v4b_--fiE",
				main: "_105VJJNx9nyZg1Y79dSDj",
				miniPost: "_3-LSILrw3UKn0tvwuGnQc",
				errorText: "_3kfOpP7BPVHhdAj9rgHJWu"
			}
		},
		"./src/reddit/components/ModToMemberShareModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				l = s("./src/reddit/components/MiniPost/index.tsx"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/ApiContext.tsx"),
				b = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				C = s("./src/lib/omitHeaders/index.ts"),
				_ = s("./src/reddit/constants/headers.ts"),
				f = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = (e, t, s) => Object(g.b)(Object(C.a)(e, [_.a]), {
					endpoint: Object(f.a)("".concat(e.apiUrl, "/api/mod_link_share")),
					method: x.cb.POST,
					data: {
						link_id: t,
						message: s
					}
				}),
				E = s("./src/reddit/i18n/components.tsx"),
				k = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				N = s("./src/reddit/components/ModToMemberShareModal/index.m.less"),
				F = s.n(N);
			const v = 400,
				T = Object(i.c)({
					post: O.y,
					subreddit: O.z
				}),
				P = Object(o.b)(T, (e, t) => ({
					onClose: () => e(Object(c.f)()),
					showSuccessToast: () => e(Object(d.e)({
						text: Object(k.c)("Messages sent!")
					}))
				}));
			class M extends r.a.Component {
				constructor(e) {
					super(e), this.event = (e, t) => {
						this.props.sendEvent(s => Object.assign({
							source: "mod_to_member_share",
							action: e,
							noun: t,
							post: Object(j.post)(s, this.props.post.id),
							subreddit: Object(j.subreddit)(s)
						}, Object(j.defaults)(s)))
					}, this.onCloseClicked = () => {
						this.props.onClose(), this.event("click", "dismiss")
					}, this.onMessageFocus = () => {
						this.state.sentInputClicked || this.event("click", "input")
					}, this.onMessageChange = e => {
						this.state.sentTypingStarted || this.event("type", "input"), this.setState({
							message: e.target.value,
							sentTypingStarted: !0
						})
					}, this.onFormSubmit = async () => {
						const {
							props: {
								apiContext: e,
								onClose: t,
								post: s,
								showSuccessToast: n
							},
							state: {
								message: r,
								sentFormSubmit: o
							}
						} = this;
						o || this.event("click", "send"), this.setState({
							pending: !0,
							sentFormSubmit: !0
						});
						const i = await S(e(), s.id, r);
						this.setState({
							pending: !1,
							success: i.ok
						}, () => {
							i.ok && (t(), n())
						})
					};
					const {
						subreddit: t
					} = this.props;
					this.state = {
						message: Object(k.c)("Check out this post in ".concat(t && t.displayText || "", ", we think you'll enjoy it.")),
						sentTypingStarted: !1,
						sentInputClicked: !1,
						sentFormSubmit: !1
					}
				}
				render() {
					const {
						props: {
							post: e,
							subreddit: t
						},
						state: {
							message: s,
							pending: n,
							success: o
						}
					} = this;
					if (e && t) return r.a.createElement(u.c, {
						className: F.a.body
					}, r.a.createElement(u.g, {
						className: F.a.header
					}, r.a.createElement(u.n, {
						className: F.a.title
					}, r.a.createElement(E.c, null, "Send message with link")), r.a.createElement("button", {
						onClick: this.onCloseClicked
					}, r.a.createElement(u.b, null))), r.a.createElement(u.j, {
						className: F.a.main
					}, r.a.createElement(l.a, {
						className: F.a.miniPost,
						openLinksNewTab: !0,
						postId: e.id,
						showSubreddit: !0,
						subredditSameLine: !0
					}), r.a.createElement(u.q, {
						className: F.a.textarea,
						maxLength: v,
						onChange: this.onMessageChange,
						onFocus: this.onMessageFocus,
						required: !0,
						value: s
					}), r.a.createElement(m.a, {
						text: s,
						maxChars: v
					})), r.a.createElement(u.e, null, !1 === o && r.a.createElement("p", {
						className: F.a.errorText
					}, "Something went wrong. Try again in a bit."), r.a.createElement(u.a, {
						onClick: this.onCloseClicked
					}, r.a.createElement(E.c, null, "Cancel")), r.a.createElement(u.o, {
						onClick: this.onFormSubmit
					}, n ? r.a.createElement(b.a, {
						sizePx: 12
					}) : o ? r.a.createElement(E.c, null, "Sent!") : r.a.createElement(E.c, null, "Send Messages"))))
				}
			}
			t.default = Object(a.a)(Object(h.b)(P(Object(p.b)(M))))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return i
			})), s.d(t, "p", (function() {
				return a
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "l", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "j", (function() {
				return S
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(r);
			const i = n.a.section("FormPage", o.a),
				a = n.a.h1("HomePageTitle", o.a),
				c = n.a.button("HomePageBreadcrumb", o.a),
				d = n.a.div("HomePageGroup", o.a),
				m = n.a.h1("FormPageTitle", o.a),
				l = n.a.div("FormPageSection", o.a),
				u = n.a.div("FormGroup", o.a),
				p = n.a.h2("FormGroupTitle", o.a),
				h = n.a.div("FormElement", o.a),
				b = n.a.div("FormGroupDescription", o.a),
				x = n.a.div("FormItem", o.a),
				g = n.a.h3("FormElementTitle", o.a),
				C = n.a.div("FormElementDescription", o.a),
				_ = n.a.div("FormElementError", o.a),
				f = n.a.div("FormElementSubGroup", o.a),
				S = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = s.n(r);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", o.a);
			t.a = i
		}
	}
]);
//# sourceMappingURL=ModToMemberShareModal.bd31c10df5789e05ab65.js.map