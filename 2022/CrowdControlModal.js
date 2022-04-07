// https://www.redditstatic.com/desktop2x/CrowdControlModal.e6be95fd870e870aa853.js
// Retrieved at 4/7/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrowdControlModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, a, o) {
				for (var s = -1, l = r(n((t - e) / (a || 1)), 0), i = Array(l); l--;) i[o ? l : ++s] = e, e += a;
				return i
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, s) {
					return s && "number" != typeof s && a(t, n, s) && (n = s = void 0), t = o(t), void 0 === n ? (n = t, t = 0) : n = o(n), s = void 0 === s ? t < n ? 1 : -1 : o(s), r(t, n, s, e)
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
				o = (a(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: a()
					}
				}),
				s = o(),
				l = r.createContext(o()),
				i = function() {
					return r.useState((e = r.useContext(l), {
						uid: n = function(e) {
							return e ? e.prefix : ""
						}(t = e || s) + function(e) {
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(s.b, {
				className: Object(o.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
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
				crowdControlComments: "lMr8rOiOydwXCYIviXkVc",
				filterToggle: "Kzl8hS9CxDRRwWqlXkrVA"
			}
		},
		"./src/reddit/components/CrowdControlModal/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_3cQTe5M3KMOyPek1-sz4-"
			}
		},
		"./src/reddit/components/CrowdControlModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "CrowdControlModal", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/components/CrowdControlModal/Footer/index.m.less"),
				x = n.n(p);
			var C = e => o.a.createElement(m.g, {
					className: x.a.LargeButtons
				}, !1 === e.success && o.a.createElement("p", {
					className: x.a.errorText
				}, "Something went wrong. Try again in a bit."), o.a.createElement(m.a, {
					onClick: e.onCloseClicked
				}, r.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), o.a.createElement(m.r, {
					onClick: e.onSubmit,
					disabled: e.disabled
				}, e.pending ? o.a.createElement(u.a, {
					sizePx: 12
				}) : e.success ? r.fbt._("Applied", null, {
					hk: "2DhH2f"
				}) : r.fbt._("Apply", null, {
					hk: "1571hs"
				}))),
				b = n("./src/reddit/components/CrowdControlModal/Header/index.m.less"),
				h = n.n(b);
			var f = e => o.a.createElement(m.i, {
					className: h.a.header
				}, o.a.createElement(m.q, {
					className: h.a.title
				}, r.fbt._("Adjust Crowd Control on this Post", null, {
					hk: "4d5ltK"
				})), o.a.createElement("button", {
					onClick: e.onCloseClicked
				}, o.a.createElement(m.b, null))),
				v = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = n("./src/reddit/components/MiniPost/index.tsx"),
				g = n("./src/reddit/components/Settings/shared/Widgets.tsx");
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
					isCrowdControlFilterEnabled: n,
					tickValue: a,
					subredditCrowdControl: s,
					subredditUrl: l,
					onCrowdControlLevelUpdate: i,
					toggleCrowdControlFilter: d
				} = e;
				return o.a.createElement(m.l, {
					className: k.a.main
				}, o.a.createElement(m.n, null, t && o.a.createElement(w.a, {
					postId: t.id,
					showSubreddit: !0,
					crowdControlPreview: !0
				})), o.a.createElement(g.j, {
					direction: "column",
					inModal: !0,
					ticks: E,
					min: 0,
					max: Object.keys(E).length - 1,
					step: 1,
					value: a,
					onChange: e => i(e.target.value, "crowdControlLevel"),
					label: r.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: r.fbt._("{subText}", [r.fbt._param("subText", E[a].subText)], {
						hk: "3ZFhAV"
					})
				}), o.a.createElement(g.p, {
					className: k.a.filterToggle,
					on: n,
					onClick: d,
					label: r.fbt._("Hold comments for review", null, {
						hk: "40X05F"
					}),
					subtext: r.fbt._("Crowd controlled comments on this post will be held for review in mod queue", null, {
						hk: "2n2KSo"
					})
				}), void 0 !== s && o.a.createElement(m.d, null, r.fbt._("Community level Crowd Control is set to {subredditCrowdControl} .", [r.fbt._param("subredditCrowdControl", o.a.createElement("strong", null, E[s].text))], {
					hk: "3E3xPV"
				}), " ", r.fbt._("{=Edit}", [r.fbt._param("=Edit", o.a.createElement(v.a, {
					to: `${l}about/edit?page=safety`
				}, r.fbt._("Edit", null, {
					hk: "3qJOzI"
				})))], {
					hk: "cbCjB"
				})))
			}
			var y = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/endpoints/crowdControl/index.ts"),
				j = n("./src/lib/makeGqlRequest/index.ts"),
				S = n("./src/redditGQL/operations/UpdateCrowdControlFilter.json"),
				T = n("./src/redditGQL/operations/UpdateCrowdControlLevel.json");
			const L = (e, t, n) => Object(j.a)(e, {
					...T,
					variables: {
						postId: t,
						level: n
					}
				}),
				I = (e, t, n) => Object(j.a)(e, {
					...S,
					variables: {
						postId: t,
						isEnabled: n
					}
				});
			var F = n("./src/reddit/selectors/posts.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/components/CrowdControlModal/index.m.less"),
				D = n.n(P);
			const B = Object(l.c)({
					post: F.g,
					subredditCrowdControl: F.T,
					subredditUrl: F.V
				}),
				A = Object(s.b)(B, e => ({
					onClose: () => e(Object(M.f)()),
					showSuccessToast: () => e(Object(R.f)({
						text: r.fbt._("Crowd control settings saved!", null, {
							hk: "1r4rS3"
						})
					}))
				})),
				G = async (e, t) => {
					const n = await Object(O.a)(e, t);
					if (n && n.ok) {
						const e = n.body.data.postInfoById;
						return {
							crowdControlLevelInfo: e && e.moderationInfo && e.moderationInfo.crowdControl,
							initialCrowdControlLevel: e && e.crowdControlLevel,
							isCrowdControlFilterEnabled: e.isCrowdControlFilterEnabled
						}
					}
				};
			class H extends o.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.onCrowdControlLevelUpdate = function(e, n) {
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
						const r = E[e].key;
						t.setState({
							currentCrowdControlLevel: r
						})
					}, this.toggleCrowdControlFilter = () => this.setState({
						currentCrowdControlFilter: !this.state.currentCrowdControlFilter
					}), this.onCloseClicked = () => {
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
								currentCrowdControlLevel: a,
								currentCrowdControlFilter: o,
								initialCrowdControlFilter: s,
								initialCrowdControlLevel: l
							}
						} = this;
						if (!t) return;
						this.setState({
							pending: !0
						});
						const i = [];
						a && a !== l && i.push(L(e(), t.id, a)), o !== s && i.push(I(e(), t.id, o)), (await Promise.all(i)).every(e => null == e ? void 0 : e.ok) ? (r(), n()) : this.setState({
							success: !1,
							pending: !1
						})
					}, this.state = {
						pending: !1
					}
				}
				componentDidMount() {
					const {
						gqlContext: e,
						post: t
					} = this.props;
					t && G(e(), t.id).then(e => {
						if (e) {
							const {
								initialCrowdControlLevel: t,
								crowdControlLevelInfo: n,
								isCrowdControlFilterEnabled: r
							} = e;
							this.setState({
								crowdControlLevelInfo: n,
								initialCrowdControlLevel: t,
								currentCrowdControlLevel: t,
								initialCrowdControlFilter: r,
								currentCrowdControlFilter: r
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
							currentCrowdControlFilter: s,
							initialCrowdControlFilter: l,
							initialCrowdControlLevel: i,
							pending: d,
							success: c
						},
						onCloseClicked: u,
						onFormSubmit: p,
						onCrowdControlLevelUpdate: x,
						toggleCrowdControlFilter: b
					} = this;
					let h;
					return a && (h = Object.entries(E).filter(e => e[1].key === a)[0][0]), o.a.createElement(m.e, {
						className: D.a.body
					}, e && o.a.createElement(o.a.Fragment, null, o.a.createElement(f, {
						onCloseClicked: u
					}), r && h && o.a.createElement(N, {
						post: e,
						crowdControlLevelInfo: r,
						tickValue: h,
						subredditCrowdControl: t,
						subredditUrl: n,
						onCrowdControlLevelUpdate: x,
						isCrowdControlFilterEnabled: s || !1,
						toggleCrowdControlFilter: b
					}), o.a.createElement(C, {
						pending: d,
						success: c,
						disabled: i === a && l === s,
						onSubmit: p,
						onCloseClicked: u
					})))
				}
			}
			const W = Object(d.b)(A(Object(i.c)(H)));
			t.default = c.a.wrapped(Object(y.a)(A(W)), "Component", D.a)
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
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/MiniPost/index.m.less"),
				h = n.n(b);
			const f = Object(l.a)(e => e, x.G, x.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(C.K)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				v = Object(s.b)(f, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class w extends o.a.PureComponent {
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
						subredditSameLine: s,
						crowdControlPreview: l
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(h.a.container, e, l ? h.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: h.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(u.a, {
						post: t
					})), o.a.createElement("div", {
						className: h.a.postDetails
					}, o.a.createElement("p", {
						className: h.a.title,
						title: t.title
					}, t.title), o.a.createElement("div", {
						className: Object(i.a)(h.a.subAndMeta, {
							[h.a.isSingleLine]: s
						})
					}, n && a && a.displayText && o.a.createElement(m.a, {
						className: h.a.SubredditLink,
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), s && o.a.createElement("div", {
						className: h.a.separator
					}), !l && o.a.createElement("div", null, o.a.createElement("span", {
						className: h.a.meta
					}, r.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [r.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), o.a.createElement("span", {
						className: h.a.meta
					}, r.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [r.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), o.a.createElement("span", {
						className: h.a.meta
					}, Object(c.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = v(w)
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
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
			t.a = s.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: r,
					text: s,
					tooltipContentClass: l,
					...c
				} = e;
				return a.a.createElement("div", d({}, c, {
					className: Object(o.a)(i.a.container, n)
				}), s ? a.a.createElement("div", {
					className: Object(o.a)(i.a.tooltip, l, r ? i.a.below : i.a.above)
				}, s) : null, t)
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
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				ActionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				actionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
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
				NoColor: "mI7WmWMma8pZnlYRHtE56",
				noColor: "mI7WmWMma8pZnlYRHtE56",
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
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				input: "_14_SnmD6g3FrozcKjTpqoH",
				tag: "_1GQzFyg5xYq94euL74ZaeJ"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return K
			})), n.d(t, "k", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return J
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "p", (function() {
				return se
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return xe
			})), n.d(t, "g", (function() {
				return Ce
			})), n.d(t, "a", (function() {
				return be
			})), n.d(t, "d", (function() {
				return fe
			})), n.d(t, "i", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return we
			})), n.d(t, "e", (function() {
				return ge
			})), n.d(t, "h", (function() {
				return Ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				w = n.n(v);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = h.a.span("Wrapper", w.a),
				_ = h.a.select("Inner", w.a),
				k = h.a.wrapped(f.b, "Caret", w.a);

			function N(e) {
				let {
					className: t,
					innerClassName: n,
					...r
				} = e;
				const o = r.disabled ? {
					"data-disabled": r.disabled
				} : {};
				return a.a.createElement(E, {
					className: t
				}, a.a.createElement(_, g({
					className: n
				}, r)), a.a.createElement(k, g({
					isSubreddit: !0
				}, o)))
			}
			var y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				j = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				S = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				L = n("./node_modules/lodash/range.js"),
				I = n.n(L),
				F = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
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
				W = h.a.wrapped(S.a, "Circle", A.a),
				V = h.a.h3("Label", A.a),
				K = h.a.wrapped(O.c, "Subtext", A.a),
				Q = h.a.wrapped(u.a, "HoverTooltip", A.a),
				U = h.a.div("ControlContainer", A.a),
				z = h.a.div("TextContainer", A.a),
				q = h.a.div("ActionContainer", A.a),
				Y = e => {
					let {
						className: t,
						direction: n,
						isCreateCommunity: r,
						inModal: o,
						isNightModeOn: s,
						disabled: l,
						indent: d,
						last: c,
						...m
					} = e;
					return a.a.createElement("div", G({}, m, {
						className: Object(i.a)(A.a.Wrapper, t, {
							[A.a.mColumn]: "column" === n,
							[A.a.mDisabled]: !!l,
							[A.a.mIndent]: !!d,
							[A.a.mLast]: !!c,
							[A.a.isCreateCommunity]: !!r,
							[A.a.inModal]: !!o,
							[A.a.isNightModeOn]: !!s
						})
					}))
				},
				X = h.a.a("Link", A.a),
				J = h.a.wrapped(X, "SubtextLink", A.a),
				Z = h.a.wrapped(T.a, "LinkIcon", A.a),
				$ = h.a.button("LinkButton", A.a),
				ee = h.a.wrapped(j.a, "ArrowRight", A.a),
				te = e => a.a.createElement(Y, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(z, {
					className: e.textContainerClassName
				}, a.a.createElement(V, null, e.label, e.isRequired && a.a.createElement(W, null)), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, e.children)),
				ne = h.a.div("StyledFlair", A.a),
				re = h.a.wrapped(ne, "SpoilerFlair", A.a),
				ae = h.a.wrapped(ne, "NSFWFlair", A.a),
				oe = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case R.f.Spoiler:
							return a.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				se = e => {
					const t = Object(s.a)();
					return a.a.createElement(Y, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(z, null, a.a.createElement(M.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(V, null, e.label))), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, a.a.createElement(U, null, e.tooltip && a.a.createElement(Q, {
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
				le = h.a.input("RangeSliderInput", A.a),
				ie = h.a.div("RangeSlider", A.a),
				de = h.a.div("Ticks", A.a),
				ce = h.a.div("TickText", A.a),
				me = h.a.div("PreSubText", A.a),
				ue = Object(l.c)({
					isNightModeOn: D.db
				}),
				pe = Object(o.b)(ue)(e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, a.a.createElement(z, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(M.a, null, a.a.createElement(V, null, e.label)), !e.hideSubtext && a.a.createElement(K, null, " ", a.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(q, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(ie, null, a.a.createElement(le, {
					style: {
						background: "linear-gradient(to right, " + I()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange,
					disabled: e.disabled
				}), a.a.createElement(de, null, Object.keys(e.ticks).map((t, n) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				xe = e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(M.a, null, a.a.createElement(V, null, e.label)), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, a.a.createElement(U, null, a.a.createElement(F.o, {
					onClick: e.onClick
				}, e.actionText)))),
				Ce = e => a.a.createElement(Y, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, a.a.createElement(X, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				be = e => a.a.createElement(Y, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(z, null, a.a.createElement($, {
					onClick: e.onClick,
					className: Object(i.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, !!e.hintText && a.a.createElement("div", {
					className: A.a.ActionHintText
				}, e.hintText), a.a.createElement($, {
					onClick: e.onClick,
					className: Object(i.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				}, a.a.createElement(ee, {
					className: Object(i.a)({
						[A.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(l.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				fe = Object(o.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Y, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(V, null, e.label), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, (e => a.a.createElement("div", {
					className: A.a.DropdownWrapper,
					onClick: e.openDropdown
				}, a.a.createElement("span", {
					className: A.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(f.b, {
					className: A.a.DropdownTriangle
				}), a.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => a.a.createElement(C.b, {
					className: A.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && a.a.createElement("div", {
					className: A.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				ve = e => {
					let {
						disabled: t,
						last: n,
						onClick: o,
						onChange: s,
						...l
					} = e;
					const i = Object(r.useCallback)(e => s(e.target.value), [s]),
						{
							items: d
						} = l;
					return a.a.createElement(Y, {
						disabled: t
					}, a.a.createElement(z, null, a.a.createElement("label", {
						htmlFor: l.id
					}, a.a.createElement(V, {
						className: l.labelClassname
					}, l.label)), a.a.createElement(K, null, l.subtext)), a.a.createElement("div", {
						className: A.a.Wrapper__LineBreak
					}), a.a.createElement(Y, {
						last: n,
						indent: !0,
						disabled: t
					}, a.a.createElement(N, {
						id: l.id,
						className: "redditStyle",
						disabled: t || l.inputDisabled,
						onChange: i,
						value: l.selected
					}, d.map(e => {
						let {
							value: t,
							displayName: n
						} = e;
						return a.a.createElement("option", {
							key: t,
							value: t
						}, n)
					}))))
				},
				we = e => a.a.createElement(Y, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(z, null, a.a.createElement(V, null, e.label), a.a.createElement(K, null, e.subtext)), a.a.createElement(q, null, e.children)),
				ge = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && a.a.createElement("span", {
					className: A.a.tag
				}, "r/"), a.a.createElement(b.a, {
					className: e.isCreateCommunity ? A.a.input : void 0,
					disabled: !!e.disabled,
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
				Ee = e => a.a.createElement(te, {
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
				}), !!e.actionLink && a.a.createElement("div", {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return s
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
				return C
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "j", (function() {
				return g
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(a);
			const s = r.a.section("FormPage", o.a),
				l = r.a.h1("HomePageTitle", o.a),
				i = r.a.button("HomePageBreadcrumb", o.a),
				d = r.a.div("HomePageGroup", o.a),
				c = r.a.h1("FormPageTitle", o.a),
				m = r.a.div("FormPageSection", o.a),
				u = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				x = r.a.div("FormElement", o.a),
				C = r.a.div("FormGroupDescription", o.a),
				b = r.a.div("FormItem", o.a),
				h = r.a.h3("FormElementTitle", o.a),
				f = r.a.div("FormElementDescription", o.a),
				v = r.a.div("FormElementError", o.a),
				w = r.a.div("FormElementSubGroup", o.a),
				g = r.a.li("FormListItem", o.a)
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
				return C
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				s = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const m = r.a.wrapped(a.a, "ModalInput", c.a),
				u = r.a.input("Input", c.a),
				p = r.a.wrapped(i.a, "RadioOn", c.a),
				x = r.a.wrapped(l.a, "RadioOff", c.a),
				C = r.a.wrapped(o.a, "Checkbox", c.a),
				b = r.a.wrapped(s.a, "CheckboxSelected", c.a),
				h = r.a.textarea("Textarea", c.a),
				f = r.a.label("StyledLabel", c.a),
				v = r.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				x = n("./src/reddit/controls/Dropdown/row.m.less"),
				C = n.n(x);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends s.a.Component {
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
					}, n = Object(l.a)(C.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? s.a.createElement(i.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && s.a.createElement("span", {
						className: n
					}, e.children), s.a.createElement("span", {
						className: Object(l.a)(C.a.text, e.textClassName)
					}, e.displayText)) : s.a.createElement(m.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? s.a.createElement("div", null, e.children) : s.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && s.a.createElement("span", {
						className: Object(l.a)(C.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && s.a.createElement(c.a, {
						className: C.a.checkmark
					}), e.showDropdownTriangle && s.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const r = Object(l.a)(C.a.row, t, {
					[C.a.mIsInteractive]: !n.noHover,
					[C.a.mIsSelected]: n.isSelected,
					[C.a.topics]: n.isTopicsStyle
				});
				return s.a.createElement(h, b({
					className: r
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
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
				return w
			})), n.d(t, "c", (function() {
				return g
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				o = n.n(a),
				s = n("./node_modules/raf/index.js"),
				l = n.n(s),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = n.n(x);
			var b = Object(m.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: C.a.wrapper
					}, d.a.createElement(p.a, {
						className: C.a.titleRow
					}, n), d.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: C.a.buttonRow
					}, d.a.createElement(u.l, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				h = n("./src/reddit/controls/ErrorText/index.m.less"),
				f = n.n(h);
			class v extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
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
						className: t,
						errorModalBody: n,
						errorModalTitle: a = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: s,
						isModalOpen: l
					} = this.state;
					return d.a.createElement("div", {
						className: Object(c.a)(f.a.wrapper, t)
					}, d.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), s && d.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, o), l && d.a.createElement(b, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const w = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: a,
						messages: o = []
					} = e, s = o.length ? o : a ? [a] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(v, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				g = e => d.a.createElement(w, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = v
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
				return C
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
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
			const p = s.a.input("input", m.a),
				x = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				C = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						className: s,
						isInvalid: l,
						...i
					} = e;
					const d = void 0 !== i.value && "" !== i.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputWrapper, s, {
							[m.a.mIsInvalid]: l
						}),
						onClick: x
					}, a.a.createElement(p, u({
						"aria-invalid": l,
						innerRef: r
					}, i)), t && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, t), n)
				},
				b = e => {
					let {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: s,
						className: l,
						redditStyle: i,
						...d
					} = e;
					const c = void 0 !== d.value && "" !== d.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputMovingLabelWrapper, l, {
							[m.a.mIsInvalid]: s,
							[m.a.mIsRedditStyle]: i
						}),
						onClick: x
					}, a.a.createElement(p, u({
						innerRef: r
					}, d)), t && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, t), n)
				},
				h = e => a.a.createElement("div", {
					className: Object(o.a)(m.a.addValueButton, e.className),
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
						errors: o = []
					} = this.props;
					return e.map((e, s) => a.a.createElement(C, {
						inputRef: e => this.setInputRef(e, s),
						isInvalid: !!o[s],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, s),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(s)
					}, a.a.createElement(d.b, {
						className: m.a.trash
					})), !!o[s] && a.a.createElement(l.b, {
						className: m.a.errorText
					}, o[s])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: s,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const i = !(!!r && n.length >= r) && !l;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.multiInputWrapper, e)
					}, t && i && a.a.createElement(h, {
						onClick: this.addValue,
						text: s
					}), this.renderFields(), !t && i && a.a.createElement(h, {
						onClick: this.addValue,
						text: s
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = n.n(s);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(l.a.loadingIcon, n, {
						[l.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
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
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				s = n.n(o);
			t.a = r.a.wrapped(a.a, "unstyledInternalLink", s.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				l = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(l.a.circle, e.className),
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				l = n.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...r
				} = e;
				return a.a.createElement("svg", i({
					className: Object(o.a)(l.a.dropdown, {
						[l.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), a.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), a.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
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
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = n.n(s);
			const i = e => a.a.createElement("svg", {
				className: Object(o.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/redditGQL/operations/UpdateCrowdControlFilter.json": function(e) {
			e.exports = JSON.parse('{"id":"8d7cddda8fe5"}')
		},
		"./src/redditGQL/operations/UpdateCrowdControlLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"e403278013c8"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrowdControlModal.e6be95fd870e870aa853.js.map