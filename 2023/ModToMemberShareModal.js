// https://www.redditstatic.com/desktop2x/ModToMemberShareModal.36cb09d03cd21bd3dac7.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
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
				a = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(i.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				crowdControlPreview: "_1R-_n2amB7t3lRrMWDZFYz",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				SubredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subAndMeta: "_3GMQrxl5pvXDUEFvUjr9Qh",
				isSingleLine: "dZATEZTPQCHPtvhujPV0L",
				separator: "_2q6RJ3jSwGkeuWcg6aU-nY",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/Thumbnail/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/MiniPost/index.m.less"),
				x = s.n(_);
			const g = Object(a.a)(e => e, b.F, b.d, (e, t, s) => {
					return {
						crosspost: s,
						post: t,
						subredditOrProfile: Object(h.Q)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				C = Object(i.b)(g, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class f extends o.a.PureComponent {
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
						subredditOrProfile: r,
						subredditSameLine: i,
						crowdControlPreview: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(c.a)(x.a.container, e, a ? x.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: x.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(u.b, {
						post: t
					})), o.a.createElement("div", {
						className: x.a.postDetails
					}, o.a.createElement("p", {
						className: x.a.title,
						title: t.title
					}, t.title), o.a.createElement("div", {
						className: Object(c.a)(x.a.subAndMeta, {
							[x.a.isSingleLine]: i
						})
					}, s && r && r.displayText && o.a.createElement(l.a, {
						className: x.a.SubredditLink,
						to: r.url,
						onClick: this.onClickSubreddit
					}, r.displayText), i && o.a.createElement("div", {
						className: x.a.separator
					}), !a && o.a.createElement("div", null, o.a.createElement("span", {
						className: x.a.meta
					}, n.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [n.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), o.a.createElement("span", {
						className: x.a.meta
					}, n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), o.a.createElement("span", {
						className: x.a.meta
					}, Object(m.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = C(f)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = s("./src/reddit/components/MiniPost/index.tsx"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/ApiContext.tsx"),
				_ = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				C = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts"),
				k = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = (e, t, s) => Object(g.a)(Object(C.a)(e, [f.a]), {
					endpoint: Object(k.a)(`${e.apiUrl}/api/mod_link_share`),
					method: x.pb.POST,
					data: {
						link_id: t,
						message: s
					}
				}),
				E = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				P = s("./src/reddit/components/ModToMemberShareModal/index.m.less"),
				F = s.n(P);
			const O = 400,
				v = Object(a.c)({
					post: E.u,
					subreddit: E.v
				}),
				T = Object(i.b)(v, (e, t) => ({
					onClose: () => e(Object(d.f)()),
					showSuccessToast: () => e(Object(m.f)({
						text: n.fbt._("Messages sent!", null, {
							hk: "187c4y"
						})
					}))
				}));
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.event = (e, t) => {
						this.props.sendEvent(s => ({
							source: "mod_to_member_share",
							action: e,
							noun: t,
							post: Object(N.K)(s, this.props.post.id),
							subreddit: Object(N.lb)(s),
							...Object(N.o)(s)
						}))
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
						message: n.fbt._("Check out this post in {subredditName}, we think you'll enjoy it.", [n.fbt._param("subredditName", t && t.displayText || "")], {
							hk: "1ANrCd"
						}),
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
							pending: r,
							success: i
						}
					} = this;
					if (e && t) return o.a.createElement(p.e, {
						className: F.a.body
					}, o.a.createElement(p.i, {
						className: F.a.header
					}, o.a.createElement(p.q, {
						className: F.a.title
					}, n.fbt._("Send message with link", null, {
						hk: "mnEN"
					})), o.a.createElement("button", {
						onClick: this.onCloseClicked
					}, o.a.createElement(p.b, null))), o.a.createElement(p.l, {
						className: F.a.main
					}, o.a.createElement(u.a, {
						className: F.a.miniPost,
						openLinksNewTab: !0,
						postId: e.id,
						showSubreddit: !0,
						subredditSameLine: !0
					}), o.a.createElement(p.t, {
						className: F.a.textarea,
						maxLength: O,
						onChange: this.onMessageChange,
						onFocus: this.onMessageFocus,
						required: !0,
						value: s
					}), o.a.createElement(l.a, {
						text: s,
						maxChars: O
					})), o.a.createElement(p.g, null, !1 === i && o.a.createElement("p", {
						className: F.a.errorText
					}, "Something went wrong. Try again in a bit."), o.a.createElement(p.a, {
						onClick: this.onCloseClicked
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(p.r, {
						onClick: this.onFormSubmit
					}, r ? o.a.createElement(_.a, {
						sizePx: 12
					}) : i ? n.fbt._("Sent!", null, {
						hk: "RsTsH"
					}) : n.fbt._("Send Messages", null, {
						hk: "2bo7KN"
					}))))
				}
			}
			t.default = Object(c.a)(Object(h.b)(T(Object(b.c)(j))))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
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
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "j", (function() {
				return k
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
				b = n.a.div("FormElement", o.a),
				h = n.a.div("FormGroupDescription", o.a),
				_ = n.a.div("FormItem", o.a),
				x = n.a.h3("FormElementTitle", o.a),
				g = n.a.div("FormElementDescription", o.a),
				C = n.a.div("FormElementError", o.a),
				f = n.a.div("FormElementSubGroup", o.a),
				k = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(i);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n = 10
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModToMemberShareModal.36cb09d03cd21bd3dac7.js.map