// https://www.redditstatic.com/desktop2x/CrowdControlModal.2953c46c1d5b8cd79502.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrowdControlModal"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, o, a) {
				for (var s = -1, l = r(n((t - e) / (o || 1)), 0), i = Array(l); l--;) i[a ? l : ++s] = e, e += o;
				return i
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, s) {
					return s && "number" != typeof s && o(t, n, s) && (n = s = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), s = void 0 === s ? t < n ? 1 : -1 : a(s), r(t, n, s, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_createRange.js")();
			e.exports = r
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
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
				o = function() {
					var e = 1,
						t = new WeakMap,
						n = function(r, o) {
							return "number" == typeof r || "string" == typeof r ? o ? "idx-" + o : "val-" + r : t.has(r) ? "uid" + t.get(r) : (t.set(r, e++), n(r))
						};
					return n
				},
				a = (o(), function(e) {
					return void 0 === e && (e = ""), {
						value: 1,
						prefix: e,
						uid: o()
					}
				}),
				s = a(),
				l = r.createContext(a()),
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
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(s.b, {
				className: Object(a.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
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
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/components/CrowdControlModal/Footer/index.m.less"),
				C = n.n(p);
			var b = e => a.a.createElement(m.g, {
					className: C.a.LargeButtons
				}, !1 === e.success && a.a.createElement("p", {
					className: C.a.errorText
				}, "Something went wrong. Try again in a bit."), a.a.createElement(m.a, {
					onClick: e.onCloseClicked
				}, r.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})), a.a.createElement(m.r, {
					onClick: e.onSubmit,
					disabled: e.disabled
				}, e.pending ? a.a.createElement(u.a, {
					sizePx: 12
				}) : e.success ? r.fbt._("Applied", null, {
					hk: "2DhH2f"
				}) : r.fbt._("Apply", null, {
					hk: "1571hs"
				}))),
				x = n("./src/reddit/components/CrowdControlModal/Header/index.m.less"),
				h = n.n(x);
			var f = e => a.a.createElement(m.i, {
					className: h.a.header
				}, a.a.createElement(m.q, {
					className: h.a.title
				}, r.fbt._("Adjust Crowd Control on this Post", null, {
					hk: "4d5ltK"
				})), a.a.createElement("button", {
					onClick: e.onCloseClicked
				}, a.a.createElement(m.b, null))),
				v = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = n("./src/reddit/components/MiniPost/index.tsx"),
				w = n("./src/reddit/components/Settings/shared/Widgets.tsx");
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
			var g = n("./src/reddit/components/CrowdControlModal/Main/index.m.less"),
				k = n.n(g);

			function N(e) {
				const {
					post: t,
					isCrowdControlFilterEnabled: n,
					tickValue: o,
					subredditCrowdControl: s,
					subredditUrl: l,
					onCrowdControlLevelUpdate: i,
					toggleCrowdControlFilter: d
				} = e;
				return a.a.createElement(m.l, {
					className: k.a.main
				}, a.a.createElement(m.n, null, t && a.a.createElement(E.a, {
					postId: t.id,
					showSubreddit: !0,
					crowdControlPreview: !0
				})), a.a.createElement(w.j, {
					direction: "column",
					inModal: !0,
					ticks: _,
					min: 0,
					max: Object.keys(_).length - 1,
					step: 1,
					value: o,
					onChange: e => i(e.target.value, "crowdControlLevel"),
					label: r.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: r.fbt._("{subText}", [r.fbt._param("subText", _[o].subText)], {
						hk: "3ZFhAV"
					})
				}), a.a.createElement(w.p, {
					className: k.a.filterToggle,
					on: n,
					onClick: d,
					label: r.fbt._("Hold comments for review", null, {
						hk: "40X05F"
					}),
					subtext: r.fbt._("Crowd controlled comments on this post will be held for review in mod queue", null, {
						hk: "2n2KSo"
					})
				}), void 0 !== s && a.a.createElement(m.d, null, r.fbt._("Community level Crowd Control is set to {subredditCrowdControl} .", [r.fbt._param("subredditCrowdControl", a.a.createElement("strong", null, _[s].text))], {
					hk: "3E3xPV"
				}), " ", r.fbt._("{=Edit}", [r.fbt._param("=Edit", a.a.createElement(v.a, {
					to: `${l}about/edit?page=safety`
				}, r.fbt._("Edit", null, {
					hk: "3qJOzI"
				})))], {
					hk: "cbCjB"
				})))
			}
			var y = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/endpoints/crowdControl/index.ts"),
				S = n("./src/lib/makeGqlRequest/index.ts"),
				j = n("./src/redditGQL/operations/UpdateCrowdControlFilter.json"),
				T = n("./src/redditGQL/operations/UpdateCrowdControlLevel.json");
			const I = (e, t, n) => Object(S.a)(e, {
					...T,
					variables: {
						postId: t,
						level: n
					}
				}),
				F = (e, t, n) => Object(S.a)(e, {
					...j,
					variables: {
						postId: t,
						isEnabled: n
					}
				});
			var L = n("./src/reddit/selectors/posts.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				R = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/components/CrowdControlModal/index.m.less"),
				D = n.n(P);
			const B = Object(l.c)({
					post: L.g,
					subredditCrowdControl: L.T,
					subredditUrl: L.V
				}),
				G = Object(s.b)(B, e => ({
					onClose: () => e(Object(M.f)()),
					showSuccessToast: () => e(Object(R.f)({
						text: r.fbt._("Crowd control settings saved!", null, {
							hk: "1r4rS3"
						})
					}))
				})),
				H = async (e, t) => {
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
			class W extends a.a.Component {
				constructor(e) {
					super(e), this.onCrowdControlLevelUpdate = (e, t, n = !0) => {
						const r = _[e].key;
						this.setState({
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
								currentCrowdControlLevel: o,
								currentCrowdControlFilter: a,
								initialCrowdControlFilter: s,
								initialCrowdControlLevel: l
							}
						} = this;
						if (!t) return;
						this.setState({
							pending: !0
						});
						const i = [];
						o && o !== l && i.push(I(e(), t.id, o)), a !== s && i.push(F(e(), t.id, a)), (await Promise.all(i)).every(e => null == e ? void 0 : e.ok) ? (r(), n()) : this.setState({
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
					t && H(e(), t.id).then(e => {
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
							currentCrowdControlLevel: o,
							currentCrowdControlFilter: s,
							initialCrowdControlFilter: l,
							initialCrowdControlLevel: i,
							pending: d,
							success: c
						},
						onCloseClicked: u,
						onFormSubmit: p,
						onCrowdControlLevelUpdate: C,
						toggleCrowdControlFilter: x
					} = this;
					let h;
					return o && (h = Object.entries(_).filter(e => e[1].key === o)[0][0]), a.a.createElement(m.e, {
						className: D.a.body
					}, e && a.a.createElement(a.a.Fragment, null, a.a.createElement(f, {
						onCloseClicked: u
					}), r && h && a.a.createElement(N, {
						post: e,
						crowdControlLevelInfo: r,
						tickValue: h,
						subredditCrowdControl: t,
						subredditUrl: n,
						onCrowdControlLevelUpdate: C,
						isCrowdControlFilterEnabled: s || !1,
						toggleCrowdControlFilter: x
					}), a.a.createElement(b, {
						pending: d,
						success: c,
						disabled: i === o && l === s,
						onSubmit: p,
						onCloseClicked: u
					})))
				}
			}
			const A = Object(d.b)(G(Object(i.c)(W)));
			t.default = c.a.wrapped(Object(y.a)(G(A)), "Component", D.a)
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/components/MiniPost/index.m.less"),
				h = n.n(x);
			const f = Object(l.a)(e => e, C.H, C.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(b.I)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				v = Object(s.b)(f, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class E extends a.a.PureComponent {
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
						subredditOrProfile: o,
						subredditSameLine: s,
						crowdControlPreview: l
					} = this.props;
					return a.a.createElement("div", {
						className: Object(i.a)(h.a.container, e, l ? h.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: h.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(u.a, {
						post: t
					})), a.a.createElement("div", {
						className: h.a.postDetails
					}, a.a.createElement("p", {
						className: h.a.title,
						title: t.title
					}, t.title), a.a.createElement("div", {
						className: Object(i.a)(h.a.subAndMeta, {
							[h.a.isSingleLine]: s
						})
					}, n && o && o.displayText && a.a.createElement(m.a, {
						className: h.a.SubredditLink,
						to: o.url,
						onClick: this.onClickSubreddit
					}, o.displayText), s && a.a.createElement("div", {
						className: h.a.separator
					}), !l && a.a.createElement("div", null, a.a.createElement("span", {
						className: h.a.meta
					}, r.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [r.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), a.a.createElement("span", {
						className: h.a.meta
					}, r.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [r.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), a.a.createElement("span", {
						className: h.a.meta
					}, Object(c.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = v(E)
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
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", d({}, c, {
					className: Object(a.a)(i.a.container, n)
				}), s ? o.a.createElement("div", {
					className: Object(a.a)(i.a.tooltip, l, r ? i.a.below : i.a.above)
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
				return V
			})), n.d(t, "k", (function() {
				return J
			})), n.d(t, "o", (function() {
				return X
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ae
			})), n.d(t, "p", (function() {
				return se
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return Ce
			})), n.d(t, "g", (function() {
				return be
			})), n.d(t, "a", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return fe
			})), n.d(t, "i", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return Ee
			})), n.d(t, "e", (function() {
				return we
			})), n.d(t, "h", (function() {
				return _e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				l = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				C = n("./src/reddit/controls/Dropdown/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/Select/index.m.less"),
				E = n.n(v);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = h.a.span("Wrapper", E.a),
				g = h.a.select("Inner", E.a),
				k = h.a.wrapped(f.b, "Caret", E.a);

			function N({
				className: e,
				innerClassName: t,
				...n
			}) {
				const r = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return o.a.createElement(_, {
					className: e
				}, o.a.createElement(g, w({
					className: t
				}, n)), o.a.createElement(k, w({
					isSubreddit: !0
				}, r)))
			}
			var y = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				O = n("./src/reddit/controls/Typography/index.tsx"),
				S = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				j = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				T = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				I = n("./node_modules/lodash/range.js"),
				F = n.n(I),
				L = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/layout/row/Inline/index.tsx"),
				R = n("./src/reddit/models/Flair/index.ts"),
				P = n("./src/reddit/selectors/tooltip.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				G = n.n(B);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(c.a)(C.a),
				A = h.a.wrapped(j.a, "Circle", G.a),
				Q = h.a.h3("Label", G.a),
				V = h.a.wrapped(O.c, "Subtext", G.a),
				U = h.a.wrapped(u.a, "HoverTooltip", G.a),
				q = h.a.div("ControlContainer", G.a),
				z = h.a.div("TextContainer", G.a),
				K = h.a.div("ActionContainer", G.a),
				J = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: r,
					isNightModeOn: a,
					disabled: s,
					indent: l,
					last: d,
					...c
				}) => o.a.createElement("div", H({}, c, {
					className: Object(i.a)(G.a.Wrapper, e, {
						[G.a.mColumn]: "column" === t,
						[G.a.mDisabled]: !!s,
						[G.a.mIndent]: !!l,
						[G.a.mLast]: !!d,
						[G.a.isCreateCommunity]: !!n,
						[G.a.inModal]: !!r,
						[G.a.isNightModeOn]: !!a
					})
				})),
				Y = h.a.a("Link", G.a),
				X = h.a.wrapped(Y, "SubtextLink", G.a),
				Z = h.a.wrapped(T.a, "LinkIcon", G.a),
				$ = h.a.button("LinkButton", G.a),
				ee = h.a.wrapped(S.a, "ArrowRight", G.a),
				te = e => o.a.createElement(J, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, o.a.createElement(z, {
					className: e.textContainerClassName
				}, o.a.createElement(Q, null, e.label, e.isRequired && o.a.createElement(A, null)), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, e.children)),
				ne = h.a.div("StyledFlair", G.a),
				re = h.a.wrapped(ne, "SpoilerFlair", G.a),
				oe = h.a.wrapped(ne, "NSFWFlair", G.a),
				ae = e => {
					switch (e.flair) {
						case R.f.Nsfw:
							return o.a.createElement(oe, null, "NSFW");
						case R.f.Spoiler:
							return o.a.createElement(re, null, "SPOILER");
						default:
							return null
					}
				},
				se = e => {
					const t = Object(s.a)();
					return o.a.createElement(J, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, o.a.createElement(z, null, o.a.createElement(M.a, null, o.a.createElement("label", {
						htmlFor: t
					}, o.a.createElement(Q, null, e.label))), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, o.a.createElement(q, null, e.tooltip && o.a.createElement(U, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), o.a.createElement(y.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				le = h.a.input("RangeSliderInput", G.a),
				ie = h.a.div("RangeSlider", G.a),
				de = h.a.div("Ticks", G.a),
				ce = h.a.div("TickText", G.a),
				me = h.a.div("PreSubText", G.a),
				ue = Object(l.c)({
					isNightModeOn: D.X
				}),
				pe = Object(a.b)(ue)(e => o.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, o.a.createElement(z, {
					style: {
						flex: 5
					}
				}, !e.inModal && o.a.createElement(M.a, null, o.a.createElement(Q, null, e.label)), !e.hideSubtext && o.a.createElement(V, null, " ", o.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), o.a.createElement(K, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, o.a.createElement(ie, null, o.a.createElement(le, {
					style: {
						background: "linear-gradient(to right, " + F()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
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
				}), o.a.createElement(de, null, Object.keys(e.ticks).map((t, n) => o.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				Ce = e => o.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, o.a.createElement(z, null, o.a.createElement(M.a, null, o.a.createElement(Q, null, e.label)), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, o.a.createElement(q, null, o.a.createElement(L.n, {
					onClick: e.onClick
				}, e.actionText)))),
				be = e => o.a.createElement(J, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, o.a.createElement(z, null, o.a.createElement(Y, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, o.a.createElement(Z, null)), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, o.a.createElement(Y, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, o.a.createElement(ee, null)))),
				xe = e => o.a.createElement(J, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, o.a.createElement(z, null, o.a.createElement($, {
					onClick: e.onClick,
					className: Object(i.a)({
						[G.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, !!e.hintText && o.a.createElement("div", {
					className: G.a.ActionHintText
				}, e.hintText), o.a.createElement($, {
					onClick: e.onClick,
					className: Object(i.a)({
						[G.a.NoColor]: e.color && "none" === e.color
					})
				}, o.a.createElement(ee, {
					className: Object(i.a)({
						[G.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				he = Object(l.c)({
					isOpen: (e, t) => Object(P.b)(t.id)(e)
				}),
				fe = Object(a.b)(he, (e, t) => ({
					openDropdown: () => {
						e(Object(d.h)({
							tooltipId: t.id
						}))
					}
				}))(e => o.a.createElement(J, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, o.a.createElement(z, null, o.a.createElement(Q, null, e.label), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, (e => o.a.createElement("div", {
					className: G.a.DropdownWrapper,
					onClick: e.openDropdown
				}, o.a.createElement("span", {
					className: G.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), o.a.createElement(f.b, {
					className: G.a.DropdownTriangle
				}), o.a.createElement(W, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, n) => o.a.createElement(b.b, {
					className: G.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && o.a.createElement("div", {
					className: G.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				ve = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: a,
					...s
				}) => {
					const l = Object(r.useCallback)(e => a(e.target.value), [a]),
						{
							items: i
						} = s;
					return o.a.createElement(J, {
						disabled: e
					}, o.a.createElement(z, null, o.a.createElement("label", {
						htmlFor: s.id
					}, o.a.createElement(Q, {
						className: s.labelClassname
					}, s.label)), o.a.createElement(V, null, s.subtext)), o.a.createElement("div", {
						className: G.a.Wrapper__LineBreak
					}), o.a.createElement(J, {
						last: t,
						indent: !0,
						disabled: e
					}, o.a.createElement(N, {
						id: s.id,
						className: "redditStyle",
						disabled: e || s.inputDisabled,
						onChange: l,
						value: s.selected
					}, i.map(({
						value: e,
						displayName: t
					}) => o.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				Ee = e => o.a.createElement(J, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, o.a.createElement(z, null, o.a.createElement(Q, null, e.label), o.a.createElement(V, null, e.subtext)), o.a.createElement(K, null, e.children)),
				we = e => o.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && o.a.createElement("span", {
					className: G.a.tag
				}, "r/"), o.a.createElement(x.a, {
					className: e.isCreateCommunity ? G.a.input : void 0,
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && o.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				_e = e => o.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, o.a.createElement(p.i, {
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
				}), o.a.createElement("div", {
					className: G.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && o.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && o.a.createElement("div", {
					className: G.a.ActionLinkContainer
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
				return C
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return w
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(o);
			const s = r.a.section("FormPage", a.a),
				l = r.a.h1("HomePageTitle", a.a),
				i = r.a.button("HomePageBreadcrumb", a.a),
				d = r.a.div("HomePageGroup", a.a),
				c = r.a.h1("FormPageTitle", a.a),
				m = r.a.div("FormPageSection", a.a),
				u = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				C = r.a.div("FormElement", a.a),
				b = r.a.div("FormGroupDescription", a.a),
				x = r.a.div("FormItem", a.a),
				h = r.a.h3("FormElementTitle", a.a),
				f = r.a.div("FormElementDescription", a.a),
				v = r.a.div("FormElementError", a.a),
				E = r.a.div("FormElementSubGroup", a.a),
				w = r.a.li("FormListItem", a.a)
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
				return C
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return v
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				s = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const m = r.a.wrapped(o.a, "ModalInput", c.a),
				u = r.a.input("Input", c.a),
				p = r.a.wrapped(i.a, "RadioOn", c.a),
				C = r.a.wrapped(l.a, "RadioOff", c.a),
				b = r.a.wrapped(a.a, "Checkbox", c.a),
				x = r.a.wrapped(s.a, "CheckboxSelected", c.a),
				h = r.a.textarea("Textarea", c.a),
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
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = n.n(o);
			const s = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", a.a);
			t.a = s
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				C = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(C);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
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
					return e.href ? s.a.createElement(i.a, x({}, t, {
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
						className: Object(l.a)(b.a.text, e.textClassName)
					}, e.displayText)) : s.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? s.a.createElement("div", null, e.children) : s.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && s.a.createElement("span", {
						className: Object(l.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && s.a.createElement(c.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && s.a.createElement(d.a, {
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
				return s.a.createElement(h, x({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
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
				return E
			})), n.d(t, "c", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(o),
				s = n("./node_modules/raf/index.js"),
				l = n.n(s),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(C);
			var x = Object(m.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: b.a.buttonRow
					}, d.a.createElement(u.k, {
						className: b.a.confirmButton,
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
						modalId: `ErrorTextModal--${a()()}`,
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
						errorModalTitle: o = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = r.fbt._("More", null, {
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
					}, a), l && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: o,
						messages: a = []
					} = e, s = a.length ? a : o ? [o] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(v, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(E, {
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
				return b
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
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
				C = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						className: s,
						...l
					} = e, i = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(a.a)(m.a.inputWrapper, s, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: C
					}, o.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: r
					}, l)), e.label && o.a.createElement("label", {
						className: Object(a.a)(m.a.label, {
							[m.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: s,
						className: l,
						redditStyle: i,
						...d
					} = e, c = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(a.a)(m.a.inputMovingLabelWrapper, l, {
							[m.a.mIsInvalid]: s,
							[m.a.mIsRedditStyle]: i
						}),
						onClick: C
					}, o.a.createElement(p, u({
						innerRef: r
					}, d)), e.label && o.a.createElement("label", {
						className: Object(a.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				h = e => o.a.createElement("div", {
					className: Object(a.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(i.a, {
					className: m.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class v extends o.a.Component {
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
						errors: a = []
					} = this.props;
					return e.map((e, s) => o.a.createElement(b, {
						inputRef: e => this.setInputRef(e, s),
						isInvalid: !!a[s],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, s),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(s)
					}, o.a.createElement(d.b, {
						className: m.a.trash
					})), !!a[s] && o.a.createElement(l.b, {
						className: m.a.errorText
					}, a[s])))
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
					return o.a.createElement("div", {
						className: Object(a.a)(m.a.multiInputWrapper, e)
					}, t && i && o.a.createElement(h, {
						onClick: this.addValue,
						text: s
					}), this.renderFields(), !t && i && o.a.createElement(h, {
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
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				l = n.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(l.a.loadingIcon, t, {
					[l.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
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
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				s = n.n(a);
			t.a = r.a.wrapped(o.a, "unstyledInternalLink", s.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/redditGQL/operations/UpdateCrowdControlFilter.json": function(e) {
			e.exports = JSON.parse('{"id":"8d7cddda8fe5"}')
		},
		"./src/redditGQL/operations/UpdateCrowdControlLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"e403278013c8"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrowdControlModal.2953c46c1d5b8cd79502.js.map