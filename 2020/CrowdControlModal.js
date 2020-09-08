// https://www.redditstatic.com/desktop2x/CrowdControlModal.9295664637efa192c978.js
// Retrieved at 9/8/2020, 12:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrowdControlModal"], {
		"./src/graphql/operations/UpdateCrowdControlLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"e403278013c8"}')
		},
		"./src/reddit/components/CrowdControlModal/Footer/index.m.less": function(e, t, o) {
			e.exports = {
				LargeButtons: "_1LG2nI5FmX44TN7E0wI7PN",
				largeButtons: "_1LG2nI5FmX44TN7E0wI7PN",
				errorText: "_15bTNMdoLh356K3WVZK5l8"
			}
		},
		"./src/reddit/components/CrowdControlModal/Header/index.m.less": function(e, t, o) {
			e.exports = {
				header: "_4nP_z4In5h8NzSTyV-nGK",
				title: "_3eG2s62qQX3Yz-lmqQ33qa"
			}
		},
		"./src/reddit/components/CrowdControlModal/Main/index.m.less": function(e, t, o) {
			e.exports = {
				CrowdControlComments: "lMr8rOiOydwXCYIviXkVc",
				crowdControlComments: "lMr8rOiOydwXCYIviXkVc"
			}
		},
		"./src/reddit/components/CrowdControlModal/index.m.less": function(e, t, o) {
			e.exports = {
				body: "_3cQTe5M3KMOyPek1-sz4-"
			}
		},
		"./src/reddit/components/CrowdControlModal/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				l = o("./src/reddit/components/TrackingHelper/index.tsx"),
				d = o("./src/reddit/contexts/ApiContext.tsx"),
				c = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = o("./src/reddit/components/CrowdControlModal/Footer/index.m.less"),
				p = o.n(C);
			var b = e => r.a.createElement(m.f, {
					className: p.a.LargeButtons
				}, !1 === e.success && r.a.createElement("p", {
					className: p.a.errorText
				}, "Something went wrong. Try again in a bit."), r.a.createElement(m.a, {
					onClick: e.onCloseClicked
				}, n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), r.a.createElement(m.q, {
					onClick: e.onSubmit,
					disabled: e.disabled
				}, e.pending ? r.a.createElement(u.a, {
					sizePx: 12
				}) : e.success ? n.fbt._("Applied", null, {
					hk: "2DhH2f"
				}) : n.fbt._("Apply", null, {
					hk: "1571hs"
				}))),
				w = o("./src/reddit/components/CrowdControlModal/Header/index.m.less"),
				x = o.n(w);
			var h = e => r.a.createElement(m.h, {
					className: x.a.header
				}, r.a.createElement(m.p, {
					className: x.a.title
				}, n.fbt._("Adjust Crowd Control on this Post", null, {
					hk: "4d5ltK"
				})), r.a.createElement("button", {
					onClick: e.onCloseClicked
				}, r.a.createElement(m.b, null))),
				k = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = o("./src/reddit/components/MiniPost/index.tsx"),
				f = o("./src/reddit/components/Settings/shared/Widgets.tsx");
			const _ = {
				0: {
					key: "OFF",
					text: "Off",
					color: "#787C7E",
					subText: "Use Crowd Control to automatically collapse comments from users you’re not sure about."
				},
				1: {
					key: "LENIENT",
					text: "Lenient",
					color: "#46D160",
					subText: "Comments from users who have negative karma in your community are automatically collapsed."
				},
				2: {
					key: "MEDIUM",
					text: "Moderate",
					color: "#FFB000",
					subText: "Comments from new users and users with negative karma in your community are automatically collapsed."
				},
				3: {
					key: "STRICT",
					text: "Strict",
					color: "#FF4500",
					subText: "Comments from users who haven’t joined your community, new users, and users with negative karma in your community are automatically collapsed."
				}
			};
			var L = o("./src/reddit/components/CrowdControlModal/Main/index.m.less"),
				E = o.n(L);

			function g(e) {
				const {
					post: t,
					tickValue: o,
					subredditCrowdControl: s,
					subredditUrl: a,
					onCrowdControlLevelUpdate: i
				} = e;
				return r.a.createElement(m.k, {
					className: E.a.main
				}, r.a.createElement(m.m, null, t && r.a.createElement(v.a, {
					postId: t.id,
					showSubreddit: !0,
					crowdControlPreview: !0
				})), r.a.createElement(f.i, {
					direction: "column",
					inModal: !0,
					ticks: _,
					min: 0,
					max: Object.keys(_).length - 1,
					step: 1,
					value: o,
					onChange: e => i(e.target.value, "crowdControlLevel"),
					label: n.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: n.fbt._("{subText}", [n.fbt._param("subText", _[o].subText)], {
						hk: "3ZFhAV"
					})
				}), void 0 !== s && r.a.createElement(m.c, null, n.fbt._("Community level Crowd Control is set to {subredditCrowdControl} .", [n.fbt._param("subredditCrowdControl", r.a.createElement("strong", null, _[s].text))], {
					hk: "3E3xPV"
				}), " ", n.fbt._("{=Edit}", [n.fbt._param("=Edit", r.a.createElement(k.a, {
					to: "".concat(a, "about/edit?page=safety")
				}, n.fbt._("Edit", null, {
					hk: "3qJOzI"
				})))], {
					hk: "cbCjB"
				})))
			}
			var N = o("./src/higherOrderComponents/asModal/index.tsx"),
				j = o("./src/reddit/endpoints/crowdControl/index.ts"),
				y = o("./src/graphql/operations/UpdateCrowdControlLevel.json"),
				O = o("./src/lib/makeGqlRequest/index.ts");
			const S = (e, t, o) => Object(O.a)(e, Object.assign(Object.assign({}, y), {
				variables: {
					postId: t,
					level: o
				}
			}));
			var M = o("./src/reddit/selectors/posts.ts"),
				T = o("./src/reddit/actions/modal.ts"),
				I = o("./src/reddit/actions/toaster.ts"),
				P = o("./src/reddit/components/CrowdControlModal/index.m.less"),
				A = o.n(P);
			const U = Object(i.c)({
					post: M.g,
					subredditCrowdControl: M.Z,
					subredditUrl: M.bb
				}),
				F = Object(a.b)(U, e => ({
					onClose: () => e(Object(T.f)()),
					showSuccessToast: () => e(Object(I.e)({
						text: n.fbt._("Crowd control settings saved!", null, {
							hk: "1r4rS3"
						})
					}))
				})),
				D = async (e, t) => {
					const o = await Object(j.b)(e, t);
					if (o && o.ok) {
						const e = o.body.data.postInfoById;
						return {
							crowdControlLevelInfo: e && e.moderationInfo && e.moderationInfo.crowdControl,
							initialCrowdControlLevel: e && e.crowdControlLevel
						}
					}
				};
			class q extends r.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.onCrowdControlLevelUpdate = function(e, o) {
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						const n = _[e].key;
						t.setState({
							currentCrowdControlLevel: n
						})
					}, this.onCloseClicked = () => {
						this.props.onClose()
					}, this.onFormSubmit = async () => {
						const {
							props: {
								gqlContext: e,
								post: t,
								onClose: o,
								showSuccessToast: n
							},
							state: {
								currentCrowdControlLevel: s
							}
						} = this;
						if (!t || !s) return;
						this.setState({
							pending: !0
						});
						const r = await S(e(), t.id, s);
						if (r) {
							if (r.ok) return n(), void o();
							this.setState({
								success: !1,
								pending: !1
							})
						}
					}, this.state = {
						pending: !1
					}
				}
				componentDidMount() {
					const {
						gqlContext: e,
						post: t
					} = this.props;
					t && D(e(), t.id).then(e => {
						if (e) {
							const {
								initialCrowdControlLevel: t,
								crowdControlLevelInfo: o
							} = e;
							this.setState({
								crowdControlLevelInfo: o,
								initialCrowdControlLevel: t,
								currentCrowdControlLevel: t
							})
						}
					})
				}
				render() {
					const {
						props: {
							post: e,
							subredditCrowdControl: t,
							subredditUrl: o
						},
						state: {
							crowdControlLevelInfo: n,
							currentCrowdControlLevel: s,
							initialCrowdControlLevel: a,
							pending: i,
							success: l
						},
						onCloseClicked: d,
						onFormSubmit: c,
						onCrowdControlLevelUpdate: u
					} = this;
					let C;
					return s && (C = Object.entries(_).filter(e => e[1].key === s)[0][0]), r.a.createElement(m.d, {
						className: A.a.body
					}, e && r.a.createElement(r.a.Fragment, null, r.a.createElement(h, {
						onCloseClicked: d
					}), n && C && r.a.createElement(g, {
						post: e,
						crowdControlLevelInfo: n,
						tickValue: C,
						subredditCrowdControl: t,
						subredditUrl: o,
						onCrowdControlLevelUpdate: u
					}), r.a.createElement(b, {
						pending: i,
						success: l,
						disabled: a === s,
						onSubmit: c,
						onCloseClicked: d
					})))
				}
			}
			const B = Object(d.b)(F(Object(l.c)(q)));
			t.default = c.a.wrapped(Object(N.a)(F(B)), "Component", A.a)
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				l = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/prettyPrintNumber/index.ts"),
				c = o("./src/lib/timeAgo/index.ts"),
				m = o("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = o("./src/reddit/components/Thumbnail/index.tsx"),
				C = o("./src/reddit/helpers/overlay/index.ts"),
				p = o("./src/reddit/selectors/posts.ts"),
				b = o("./src/reddit/selectors/subreddit.ts"),
				w = o("./src/reddit/components/MiniPost/index.m.less"),
				x = o.n(w);
			const h = Object(i.a)(e => e, p.N, p.d, (e, t, o) => {
					return {
						crosspost: o,
						post: t,
						subredditOrProfile: Object(b.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(a.b)(h, (e, t) => ({
					openLightbox: t => e(Object(C.a)(t.permalink))
				}));
			class v extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: o,
							post: n
						} = this.props;
						o ? window.open(n.permalink) : t(n), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: o,
							subredditOrProfile: n
						} = this.props;
						e.stopPropagation(), t && n && (e.preventDefault(), window.open(n.url)), o && o()
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
						showSubreddit: o = !1,
						subredditOrProfile: s,
						subredditSameLine: a,
						crowdControlPreview: i
					} = this.props;
					return r.a.createElement("div", {
						className: Object(l.a)(x.a.container, e, i ? x.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: x.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(u.a, {
						post: t
					})), r.a.createElement("div", {
						className: x.a.postDetails
					}, r.a.createElement("p", {
						className: x.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(l.a)(x.a.subAndMeta, {
							[x.a.isSingleLine]: a
						})
					}, o && s && s.displayText && r.a.createElement(m.a, {
						className: x.a.SubredditLink,
						to: s.url,
						onClick: this.onClickSubreddit
					}, s.displayText), a && r.a.createElement("div", {
						className: x.a.separator
					}), !i && r.a.createElement("div", null, r.a.createElement("span", {
						className: x.a.meta
					}, n.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [n.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: x.a.meta
					}, n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: x.a.meta
					}, Object(c.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = k(v)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, o) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = o("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = o.n(s);
			const a = o("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = a
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrowdControlModal.9295664637efa192c978.js.map