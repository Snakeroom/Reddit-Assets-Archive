// https://www.redditstatic.com/desktop2x/CrowdControlModal.6a0247a3143b15cc475e.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrowdControlModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, a, s) {
				for (var o = -1, l = r(n((t - e) / (a || 1)), 0), i = Array(l); l--;) i[s ? l : ++o] = e, e += a;
				return i
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, o) {
					return o && "number" != typeof o && a(t, n, o) && (n = o = void 0), t = s(t), void 0 === n ? (n = t, t = 0) : n = s(n), o = void 0 === o ? t < n ? 1 : -1 : s(o), r(t, n, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_createRange.js")();
			e.exports = r
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return r(e) + t
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = function() {
					var e = 1,
						t = new WeakMap,
						n = function(r, a) {
							return "number" == typeof r || "string" == typeof r ? a ? "idx-" + a : "val-" + r : t.has(r) ? "uid" + t.get(r) : (t.set(r, e++), n(r))
						};
					return n
				},
				s = (a(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: a()
					}
				}),
				o = s(),
				l = r.createContext(s()),
				i = function() {
					return r.useState((e = r.useContext(l), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || o) + function(e) {
							return e.value++
						}(t),
						gen: function(e) {
							return n + t.uid(e)
						}
					}));
					var e, t, n
				},
				d = function() {
					return i()[0].uid
				},
				c = function() {
					return i()[0].gen
				}
		},
		"./src/graphql/operations/UpdateCrowdControlLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"e403278013c8"}')
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(o.b, {
				className: Object(s.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CrowdControlModal/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				LargeButtons: "_1LG2nI5FmX44TN7E0wI7PN",
				largeButtons: "_1LG2nI5FmX44TN7E0wI7PN",
				errorText: "_15bTNMdoLh356K3WVZK5l8"
			}
		},
		"./src/reddit/components/CrowdControlModal/Header/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_4nP_z4In5h8NzSTyV-nGK",
				title: "_3eG2s62qQX3Yz-lmqQ33qa"
			}
		},
		"./src/reddit/components/CrowdControlModal/Main/index.m.less": function(e, t, n) {
			e.exports = {
				CrowdControlComments: "lMr8rOiOydwXCYIviXkVc",
				crowdControlComments: "lMr8rOiOydwXCYIviXkVc"
			}
		},
		"./src/reddit/components/CrowdControlModal/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_3cQTe5M3KMOyPek1-sz4-"
			}
		},
		"./src/reddit/components/CrowdControlModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/components/CrowdControlModal/Footer/index.m.less"),
				x = n.n(p);
			var b = e => s.a.createElement(m.f, {
					className: x.a.LargeButtons
				}, !1 === e.success && s.a.createElement("p", {
					className: x.a.errorText
				}, "Something went wrong. Try again in a bit."), s.a.createElement(m.a, {
					onClick: e.onCloseClicked
				}, r.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), s.a.createElement(m.q, {
					onClick: e.onSubmit,
					disabled: e.disabled
				}, e.pending ? s.a.createElement(u.a, {
					sizePx: 12
				}) : e.success ? r.fbt._("Applied", null, {
					hk: "2DhH2f"
				}) : r.fbt._("Apply", null, {
					hk: "1571hs"
				}))),
				h = n("./src/reddit/components/CrowdControlModal/Header/index.m.less"),
				C = n.n(h);
			var f = e => s.a.createElement(m.h, {
					className: C.a.header
				}, s.a.createElement(m.p, {
					className: C.a.title
				}, r.fbt._("Adjust Crowd Control on this Post", null, {
					hk: "4d5ltK"
				})), s.a.createElement("button", {
					onClick: e.onCloseClicked
				}, s.a.createElement(m.b, null))),
				v = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/reddit/components/MiniPost/index.tsx"),
				w = n("./src/reddit/components/Settings/shared/Widgets.tsx");
			const E = {
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
			var _ = n("./src/reddit/components/CrowdControlModal/Main/index.m.less"),
				k = n.n(_);

			function N(e) {
				const {
					post: t,
					tickValue: n,
					subredditCrowdControl: a,
					subredditUrl: o,
					onCrowdControlLevelUpdate: l
				} = e;
				return s.a.createElement(m.k, {
					className: k.a.main
				}, s.a.createElement(m.m, null, t && s.a.createElement(g.a, {
					postId: t.id,
					showSubreddit: !0,
					crowdControlPreview: !0
				})), s.a.createElement(w.i, {
					direction: "column",
					inModal: !0,
					ticks: E,
					min: 0,
					max: Object.keys(E).length - 1,
					step: 1,
					value: n,
					onChange: e => l(e.target.value, "crowdControlLevel"),
					label: r.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: r.fbt._("{subText}", [r.fbt._param("subText", E[n].subText)], {
						hk: "3ZFhAV"
					})
				}), void 0 !== a && s.a.createElement(m.c, null, r.fbt._("Community level Crowd Control is set to {subredditCrowdControl} .", [r.fbt._param("subredditCrowdControl", s.a.createElement("strong", null, E[a].text))], {
					hk: "3E3xPV"
				}), " ", r.fbt._("{=Edit}", [r.fbt._param("=Edit", s.a.createElement(v.a, {
					to: `${o}about/edit?page=safety`
				}, r.fbt._("Edit", null, {
					hk: "3qJOzI"
				})))], {
					hk: "cbCjB"
				})))
			}
			var y = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/endpoints/crowdControl/index.ts"),
				S = n("./src/graphql/operations/UpdateCrowdControlLevel.json"),
				j = n("./src/lib/makeGqlRequest/index.ts");
			const T = (e, t, n) => Object(j.a)(e, {
				...S,
				variables: {
					postId: t,
					level: n
				}
			});
			var I = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/actions/modal.ts"),
				M = n("./src/reddit/actions/toaster.ts"),
				F = n("./src/reddit/components/CrowdControlModal/index.m.less"),
				R = n.n(F);
			const P = Object(l.c)({
					post: I.g,
					subredditCrowdControl: I.O,
					subredditUrl: I.Q
				}),
				D = Object(o.b)(P, e => ({
					onClose: () => e(Object(L.f)()),
					showSuccessToast: () => e(Object(M.f)({
						text: r.fbt._("Crowd control settings saved!", null, {
							hk: "1r4rS3"
						})
					}))
				})),
				B = async (e, t) => {
					const n = await Object(O.b)(e, t);
					if (n && n.ok) {
						const e = n.body.data.postInfoById;
						return {
							crowdControlLevelInfo: e && e.moderationInfo && e.moderationInfo.crowdControl,
							initialCrowdControlLevel: e && e.crowdControlLevel
						}
					}
				};
			class A extends s.a.Component {
				constructor(e) {
					super(e), this.onCrowdControlLevelUpdate = (e, t, n = !0) => {
						const r = E[e].key;
						this.setState({
							currentCrowdControlLevel: r
						})
					}, this.onCloseClicked = () => {
						this.props.onClose()
					}, this.onFormSubmit = async () => {
						const {
							props: {
								gqlContext: e,
								post: t,
								onClose: n,
								showSuccessToast: r
							},
							state: {
								currentCrowdControlLevel: a
							}
						} = this;
						if (!t || !a) return;
						this.setState({
							pending: !0
						});
						const s = await T(e(), t.id, a);
						if (s) {
							if (s.ok) return r(), void n();
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
					t && B(e(), t.id).then(e => {
						if (e) {
							const {
								initialCrowdControlLevel: t,
								crowdControlLevelInfo: n
							} = e;
							this.setState({
								crowdControlLevelInfo: n,
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
							subredditUrl: n
						},
						state: {
							crowdControlLevelInfo: r,
							currentCrowdControlLevel: a,
							initialCrowdControlLevel: o,
							pending: l,
							success: i
						},
						onCloseClicked: d,
						onFormSubmit: c,
						onCrowdControlLevelUpdate: u
					} = this;
					let p;
					return a && (p = Object.entries(E).filter(e => e[1].key === a)[0][0]), s.a.createElement(m.d, {
						className: R.a.body
					}, e && s.a.createElement(s.a.Fragment, null, s.a.createElement(f, {
						onCloseClicked: d
					}), r && p && s.a.createElement(N, {
						post: e,
						crowdControlLevelInfo: r,
						tickValue: p,
						subredditCrowdControl: t,
						subredditUrl: n,
						onCrowdControlLevelUpdate: u
					}), s.a.createElement(b, {
						pending: l,
						success: i,
						disabled: o === a,
						onSubmit: c,
						onCloseClicked: d
					})))
				}
			}
			const G = Object(d.b)(D(Object(i.c)(A)));
			t.default = c.a.wrapped(Object(y.a)(D(G)), "Component", R.a)
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				C = n.n(h);
			const f = Object(l.a)(e => e, x.D, x.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(b.L)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				v = Object(o.b)(f, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class g extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: n,
							post: r
						} = this.props;
						n ? window.open(r.permalink) : t(r), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: n,
							subredditOrProfile: r
						} = this.props;
						e.stopPropagation(), t && r && (e.preventDefault(), window.open(r.url)), n && n()
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
						showSubreddit: n = !1,
						subredditOrProfile: a,
						subredditSameLine: o,
						crowdControlPreview: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(C.a.container, e, l ? C.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, s.a.createElement("div", {
						className: C.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, s.a.createElement(u.a, {
						post: t
					})), s.a.createElement("div", {
						className: C.a.postDetails
					}, s.a.createElement("p", {
						className: C.a.title,
						title: t.title
					}, t.title), s.a.createElement("div", {
						className: Object(i.a)(C.a.subAndMeta, {
							[C.a.isSingleLine]: o
						})
					}, n && a && a.displayText && s.a.createElement(m.a, {
						className: C.a.SubredditLink,
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), o && s.a.createElement("div", {
						className: C.a.separator
					}), !l && s.a.createElement("div", null, s.a.createElement("span", {
						className: C.a.meta
					}, r.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [r.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), s.a.createElement("span", {
						className: C.a.meta
					}, r.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [r.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), s.a.createElement("span", {
						className: C.a.meta
					}, Object(c.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = v(g)
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				i = n.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: r,
					text: o,
					tooltipContentClass: l,
					...c
				} = e;
				return a.a.createElement("div", d({}, c, {
					className: Object(s.a)(i.a.container, n)
				}), o ? a.a.createElement("div", {
					className: Object(s.a)(i.a.tooltip, l, r ? i.a.below : i.a.above)
				}, o) : null, t)
			}, "HoverTooltip", i.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return z
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return se
			})), n.d(t, "o", (function() {
				return oe
			})), n.d(t, "i", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return xe
			})), n.d(t, "f", (function() {
				return be
			})), n.d(t, "a", (function() {
				return he
			})), n.d(t, "d", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return ke
			})), n.d(t, "c", (function() {
				return Ne
			})), n.d(t, "e", (function() {
				return ye
			})), n.d(t, "g", (function() {
				return Oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/controls/FormFields/index.tsx"),
				C = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				g = n.n(v);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = C.a.span("Wrapper", g.a),
				_ = C.a.select("Inner", g.a),
				k = C.a.wrapped(f.b, "Caret", g.a);

			function N({
				className: e,
				innerClassName: t,
				...n
			}) {
				const r = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return a.a.createElement(E, {
					className: e
				}, a.a.createElement(_, w({
					className: t
				}, n)), a.a.createElement(k, w({
					isSubreddit: !0
				}, r)))
			}
			var y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				j = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				L = n.n(I),
				M = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/layout/row/Inline/index.tsx"),
				R = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				A = n.n(B);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(c.a)(x.a),
				W = C.a.wrapped(j.a, "Circle", A.a),
				V = C.a.h3("Label", A.a),
				z = C.a.wrapped(O.c, "Subtext", A.a),
				U = C.a.wrapped(u.a, "HoverTooltip", A.a),
				Q = C.a.div("ControlContainer", A.a),
				q = C.a.div("TextContainer", A.a),
				J = C.a.div("ActionContainer", A.a),
				K = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: r,
					isNightModeOn: s,
					disabled: o,
					indent: l,
					last: d,
					...c
				}) => a.a.createElement("div", G({}, c, {
					className: Object(i.a)(A.a.Wrapper, e, {
						[A.a.mColumn]: "column" === t,
						[A.a.mDisabled]: !!o,
						[A.a.mIndent]: !!l,
						[A.a.mLast]: !!d,
						[A.a.isCreateCommunity]: !!n,
						[A.a.inModal]: !!r,
						[A.a.isNightModeOn]: !!s
					})
				})),
				X = C.a.a("Link", A.a),
				Y = C.a.wrapped(X, "SubtextLink", A.a),
				Z = C.a.wrapped(T.a, "LinkIcon", A.a),
				$ = C.a.button("LinkButton", A.a),
				ee = C.a.wrapped(S.a, "ArrowRight", A.a),
				te = e => a.a.createElement(K, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(q, {
					className: e.textContainerClassName
				}, a.a.createElement(V, null, e.label, e.isRequired && a.a.createElement(W, null)), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, e.children)),
				ne = C.a.div("StyledFlair", A.a),
				re = C.a.wrapped(ne, "SpoilerFlair", A.a),
				ae = C.a.wrapped(ne, "NSFWFlair", A.a),
				se = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case R.f.Spoiler:
							return a.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return a.a.createElement(K, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(q, null, a.a.createElement(F.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(V, null, e.label))), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, a.a.createElement(Q, null, e.tooltip && a.a.createElement(U, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(y.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				le = C.a.input("RangeSliderInput", A.a),
				ie = C.a.div("RangeSlider", A.a),
				de = C.a.div("Ticks", A.a),
				ce = C.a.div("TickText", A.a),
				me = C.a.div("PreSubText", A.a),
				ue = Object(l.c)({
					isNightModeOn: D.W
				}),
				pe = Object(s.b)(ue)(e => a.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, a.a.createElement(q, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(F.a, null, a.a.createElement(V, null, e.label)), a.a.createElement(z, null, " ", a.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(J, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(ie, null, a.a.createElement(le, {
					style: {
						background: "linear-gradient(to right, " + L()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange
				}), a.a.createElement(de, null, Object.keys(e.ticks).map((t, n) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				xe = e => a.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(q, null, a.a.createElement(F.a, null, a.a.createElement(V, null, e.label)), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, a.a.createElement(Q, null, a.a.createElement(M.l, {
					onClick: e.onClick
				}, e.actionText)))),
				be = e => a.a.createElement(K, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(q, null, a.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, a.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				he = e => a.a.createElement(K, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(q, null, a.a.createElement($, {
					onClick: e.onClick
				}, e.label), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, a.a.createElement($, {
					onClick: e.onClick
				}, a.a.createElement(ee, null)))),
				Ce = C.a.div("DropdownWrapper", A.a),
				fe = C.a.wrapped(b.b, "DropdownRow", A.a),
				ve = C.a.span("Row", A.a),
				ge = C.a.wrapped(f.b, "DropdownTriangle", A.a),
				we = C.a.div("DescriptionsRow", A.a),
				Ee = Object(l.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				_e = Object(s.b)(Ee, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(K, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(q, null, a.a.createElement(V, null, e.label), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, (e => a.a.createElement(Ce, {
					onClick: e.openDropdown
				}, a.a.createElement(ve, {
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(ge, null), a.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => a.a.createElement(fe, {
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && a.a.createElement(we, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				ke = ({
					disabled: e,
					last: t,
					onChange: n,
					...s
				}) => {
					const o = Object(r.useCallback)(e => n(e.target.value), [n]);
					return a.a.createElement(K, {
						disabled: e
					}, a.a.createElement(q, null, a.a.createElement(V, null, s.label), a.a.createElement(z, null, s.subtext)), a.a.createElement("div", {
						className: A.a.Wrapper__LineBreak
					}), a.a.createElement(K, {
						last: t,
						indent: !0,
						disabled: e
					}, a.a.createElement(N, {
						className: "redditStyle",
						disabled: e || s.inputDisabled,
						onChange: o,
						value: s.selected
					}, s.items.map(({
						value: e,
						text: t
					}) => a.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				Ne = e => a.a.createElement(K, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(q, null, a.a.createElement(V, null, e.label), a.a.createElement(z, null, e.subtext)), a.a.createElement(J, null, e.children)),
				ye = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(h.a, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && a.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Oe = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), a.a.createElement("div", {
					className: A.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && a.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), e.warning && e.warning, !!e.actionLink && a.a.createElement("div", {
					className: A.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "n", (function() {
				return i
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "j", (function() {
				return w
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(a);
			const o = r.a.section("FormPage", s.a),
				l = r.a.h1("HomePageTitle", s.a),
				i = r.a.button("HomePageBreadcrumb", s.a),
				d = r.a.div("HomePageGroup", s.a),
				c = r.a.h1("FormPageTitle", s.a),
				m = r.a.div("FormPageSection", s.a),
				u = r.a.div("FormGroup", s.a),
				p = r.a.h2("FormGroupTitle", s.a),
				x = r.a.div("FormElement", s.a),
				b = r.a.div("FormGroupDescription", s.a),
				h = r.a.div("FormItem", s.a),
				C = r.a.h3("FormElementTitle", s.a),
				f = r.a.div("FormElementDescription", s.a),
				v = r.a.div("FormElementError", s.a),
				g = r.a.div("FormElementSubGroup", s.a),
				w = r.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const m = r.a.wrapped(a.a, "ModalInput", c.a),
				u = r.a.input("Input", c.a),
				p = r.a.wrapped(i.a, "RadioOn", c.a),
				x = r.a.wrapped(l.a, "RadioOff", c.a),
				b = r.a.wrapped(s.a, "Checkbox", c.a),
				h = r.a.wrapped(o.a, "CheckboxSelected", c.a),
				C = r.a.textarea("Textarea", c.a),
				f = r.a.label("StyledLabel", c.a),
				v = r.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				s = n.n(a);
			const o = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", s.a);
			t.a = o
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				x = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(x);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
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
					}, n = Object(l.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(i.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(l.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(l.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(c.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(l.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(C, h({
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
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(a),
				o = n("./node_modules/raf/index.js"),
				l = n.n(o),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				b = n("./src/higherOrderComponents/asModal/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = n.n(f);
			var g = Object(b.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: v.a.wrapper
					}, d.a.createElement(C.a, {
						className: v.a.titleRow
					}, n), d.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), d.a.createElement(C.a, {
						className: v.a.buttonRow
					}, d.a.createElement(h.i, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				w = n("./src/reddit/controls/ErrorText/index.m.less"),
				E = n.n(w);
			const _ = Object(m.c)({
				activeModalId: x.a
			});
			class k extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					l()(() => {
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
						className: n,
						errorModalBody: a,
						errorModalTitle: s = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: l,
						textHasOverflowed: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, n)
					}, d.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, o), t === l && d.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: s
					}, a || e))
				}
			}
			const N = Object(c.b)(_, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(k),
				y = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(N, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				O = e => d.a.createElement(y, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = N
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/ErrorText/index.tsx"),
				i = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = n("./src/reddit/controls/FormFields/index.m.less"),
				m = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", m.a),
				x = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						className: o,
						...l
					} = e, i = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(m.a.inputWrapper, o, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: x
					}, a.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, l)), e.label && a.a.createElement("label", {
						className: Object(s.a)(m.a.label, {
							[m.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				h = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: l,
						redditStyle: i,
						...d
					} = e, c = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(m.a.inputMovingLabelWrapper, l, {
							[m.a.mIsInvalid]: o,
							[m.a.mIsRedditStyle]: i
						}),
						onClick: x
					}, a.a.createElement(p, u({
						innerRef: r
					}, d)), e.label && a.a.createElement("label", {
						className: Object(s.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				C = e => a.a.createElement("div", {
					className: Object(s.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(i.a, {
					className: m.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: f.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: f.REMOVE,
							value: n,
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
						label: n,
						placeholder: r,
						errors: s = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(b, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!s[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(d.b, {
						className: m.a.trash
					})), !!s[o] && a.a.createElement(l.b, {
						className: m.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: o,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const i = !(!!r && n.length >= r) && !l;
					return a.a.createElement("div", {
						className: Object(s.a)(m.a.multiInputWrapper, e)
					}, t && i && a.a.createElement(C, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && i && a.a.createElement(C, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(l.a.loadingIcon, t, {
					[l.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(s);
			t.a = r.a.wrapped(a.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = n.n(l);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(s.a)();
				return a.a.createElement("i", {
					className: `${Object(o.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", s({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				l = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(l.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, a.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, a.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = n.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(s.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrowdControlModal.6a0247a3143b15cc475e.js.map