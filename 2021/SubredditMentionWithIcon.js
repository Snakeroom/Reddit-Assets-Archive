// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.f90987276691371b7dc7.js
// Retrieved at 3/11/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"4787b154b63b"}')
		},
		"./src/graphql/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"208de0847dac"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return u
			}));
			const n = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				i = 1e3,
				r = 100 * i,
				o = 10 * r,
				c = 100 * o,
				a = 10 * c,
				d = 100 * a,
				l = 51;

			function u(e, t) {
				return (null == t ? void 0 : t.displayFull) ? n(e.toString()) : e >= d - l ? `${Math.floor(e/a)}b` : e >= a - l && e < d - l ? `${(e/a).toFixed(1)}b` : e >= c - l && e < a - l ? `${Math.floor(e/o)}m` : e >= o - l && e < c - l ? `${(e/o).toFixed(1)}m` : e >= r - l && e < o - l ? `${Math.floor(e/i)}k` : e >= i && e < r - l ? (null == t ? void 0 : t.roundDown) ? `${b(e,i)}k` : `${(e/i).toFixed(1)}k` : String(e)
			}
			const b = (e, t, s = 1) => {
				const n = Math.pow(10, s);
				return (Math.floor(e / (t / n)) / n).toFixed(s)
			}
		},
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "SUBREDDIT_MENTION_LOADED",
				i = "SUBREDDIT__MODEL_SUCCEEDED",
				r = "SUBREDDIT__MODEL_PENDING",
				o = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/graphql/operations/SubredditTopContent.json"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const a = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(a),
				b = Object(n.a)(d),
				m = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const a = e.toLowerCase(),
						d = s(),
						{
							api: l,
							topContent: p
						} = d.subreddits;
					if (l.topContent.pending[a] || p[a]) return;
					t(u({
						subredditName: a
					})), t(Object(i.z)());
					const h = await ((e, t) => Object(o.a)(e, {
						...r,
						variables: t
					}))(n.gqlContext(), {
						subredditName: a
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(c.c)(e);
							s && t(b({
								...s,
								subredditName: a
							}))
						}
					} else t(m({
						subredditName: a,
						error: h.error
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "h", (function() {
				return o
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				i = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				r = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "b", (function() {
				return q
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./src/reddit/actions/login.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var h = s("./src/graphql/operations/SubscribedSubreddits.json"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/models/GqlTopLevelField.ts"),
				I = s("./src/reddit/models/User/index.ts");

			function E(e) {
				const t = [],
					s = [],
					n = {},
					i = {},
					{
						followedRedditorsInfo: r
					} = e.identity;
				for (const c of r.edges) {
					if (c.node.__typename !== I.c.AvailableRedditor) continue;
					const e = Object(O.a)(c.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = c.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const c of o.edges) {
					if (c.node.__typename !== _.a.Subreddit) continue;
					const e = Object(C.a)(c.node);
					i[e.id] = e;
					const {
						isFavorite: t
					} = c.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: n,
					subreddits: i
				}
			}
			var S = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/subscriptions.ts"),
				y = s("./src/reddit/selectors/user.ts");
			const N = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(r.a)(d.c),
				k = Object(r.a)(d.b),
				L = Object(r.a)(d.a),
				P = Object(r.a)(d.h),
				w = (Object(r.a)(d.i), Object(r.a)(d.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(k());
					const i = await (e => Object(f.a)(e, h))(s());
					if (i.ok) {
						const t = E(i.body.data);
						e(T(t))
					} else e(L({
						error: i.error
					}))
				}),
				D = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				M = (e, t, s) => async (r, d, {
					apiContext: h
				}) => {
					let f = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(v.m)(d(), e.name),
						name: `${i.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(y.K)(d())) return r(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void r(Object(c.j)());
					const O = Object(y.j)(d());
					if (O) {
						const t = f.length,
							s = e.length;
						if (f = f.filter(e => !D(O, e)), (e = e.filter(e => !D(O, e))).length !== s || f.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							r(Object(l.e)(Object(l.d)(e, S.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					if (r(P({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(g.b)(d()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: n
						}) => Object(b.a)(Object(m.a)(e, [p.a]), {
							method: i.cb.POST,
							endpoint: Object(x.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: n ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(h(), {
							subredditNames: f.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : `${n.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						r(Object(l.e)({
							text: 1 === e.length && "profile" === e[0].type ? n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "followed" : "unfollowed"), n.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "joined" : "left"), n.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						r(P({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(g.b)(d()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const i = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						r(Object(l.e)(Object(l.d)(i, S.b.Error)))
					}
				}, B = Object(r.a)(d.f), R = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						o = Object(j.L)(r, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const c = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						a = r.subscriptions.favoriteSubredditOrder || [],
						d = r.subscriptions.favoriteProfileOrder || [],
						h = a.indexOf(e.id),
						f = d.indexOf(e.id),
						x = -1 === h && -1 === f,
						O = r.subreddits.models,
						C = r.profiles.models;
					t(B({
						makeFavorite: x,
						identifier: e,
						subredditModels: O,
						profileModels: C
					}));
					const _ = {
							type: e.type,
							name: o.name
						},
						I = () => Object(j.gb)(s(), {
							identifier: _
						});
					(I() || (await t(M([_], !0)), I())) && ((await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(n(), c, x)).ok || (t(B({
						makeFavorite: !x,
						identifier: e,
						subredditModels: O,
						profileModels: C
					})), t(Object(l.e)({
						text: N(),
						kind: S.b.Error
					}))))
				}, U = Object(r.a)(d.d), F = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().multireddits.models,
						o = () => {
							t(Object(l.e)({
								text: N(),
								kind: S.b.Error
							}))
						},
						c = r[e];
					if (!c) return void o();
					const a = !c.isFavorited;
					t(U({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: r
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, a)).ok || (t(U({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: r
					})), o())
				}, A = Object(r.a)(d.e), q = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = o.multireddits.models;
					if (!Object(y.K)(o)) return;
					const a = (e = !0) => {
							t(Object(l.e)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: S.b.Error
							}))
						},
						d = c[e];
					if (!d) return void a();
					const u = !d.isFollowed;
					t(A({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(r(), e, u)).ok || (t(A({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: c
					})), a(u))
				}
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/fastdom/index.ts"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(p);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = {
					height: 200,
					width: 200
				},
				O = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				C = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o,
						onClick: c,
						...a
					} = e;
					return r.a.createElement("div", f({
						onClick: c,
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": o && o[i] ? o[i] : Object(b.a)(e).body
						}
					}, a), t)
				}),
				_ = Object(c.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				I = Object(a.a)(C, [n.a.Click, n.a.Keydown]),
				E = Object(o.b)(_);
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						u.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let i = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									i = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									i = n.left > t.width;
									break;
								case "right":
									i = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									i = n.top > t.height
							}
							this.setState({
								position: i ? this.props.defaultTooltipPosition : O(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: n
					} = this.getPositions(e);
					return r.a.createElement(I, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = E(S)
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less": function(e, t, s) {
			e.exports = {
				subredditTitle: "_2761hyuG6eerLCkC4Hm6fp",
				subredditContent: "_1yRTv-8W3ocQQRhv7Ah1my",
				subredditBody: "_13sLg8Q6o27ohhPDs1AFHk",
				subredditMeta: "_1gX6BuEOgKVnefuNoaJz6g",
				subredditContainer: "_17Xq6uVgiU_LWy9TZF-Ce6",
				hideBottomBorder: "_2OYNSEwlUAl9-L9Jqc8JQ2",
				subredditBodyWrapper: "_3UfPUGAphIA0o2VTisU4sa",
				thumbnailOverride: "XWNN6HDjsQTetUd60uvL1",
				iconContainer: "_3GwBEEg8fYkZyZev8v3aQb",
				subredditDescriptionContainer: "_39jJr2GgsD9SJcks2BNgoa"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/MetaData/index.tsx"),
				x = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				O = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				I = s.n(_);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(c.c)({
				subreddit: C.T,
				subredditAboutInfo: C.x
			}), v = Object(r.b)(S);
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: i,
							sendEvent: r
						} = this.props;
						e && t && !this.hasFiredViewEvent && (r(Object(x.r)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(O.c)(n) : Object(x.n)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(O.e)(n) : Object(x.q)(t, n, i) : s ? Object(O.d)(n) : Object(x.p)(t, n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				render() {
					const {
						shouldHideBottomBorder: e,
						shouldShowDescription: t,
						shouldShowActiveUsers: s,
						subreddit: n,
						subredditAboutInfo: r
					} = this.props;
					if (!n || !r) return null;
					const c = r.publicDescription || "",
						l = n.subscribers,
						p = Object(d.b)(l),
						x = Object(d.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(a.a)(I.a.subredditContainer, {
							[I.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: I.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(u.b, {
						subredditOrProfile: n,
						className: I.a.iconContainer
					}))), i.a.createElement("div", {
						className: I.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: I.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: I.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), i.a.createElement("div", null, i.a.createElement(m.a, {
						identifier: {
							name: n.name,
							type: h.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), i.a.createElement("div", {
						className: I.a.subredditMeta
					}, E._({
						"*": "{number} members",
						_1: "1 member"
					}, [E._plural(l, "number", p)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: I.a.subredditMeta
					}, i.a.createElement(f.c, null), E._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [E._plural(r.accountsActive, "number", x)], {
						hk: "1oCA5j"
					})), t && c && i.a.createElement(o.a, {
						className: I.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = v(Object(p.c)(j))
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/react/index.js");
			const n = e => new Promise((t, s) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = s, n.src = e
			})
		},
		"./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "kvsTXoIM6XzLx6P8wKYwK",
				mainBody: "_1lx-VnyEwPA6T0UuOGngGR",
				thumbnailContainer: "_3OqREAp9OE_zJmrpsPoP8-",
				thumbnail: "HkggM0RcKqzxvXlnDs1Hp",
				title: "_31ZvI0YYPQqdCfsFiRCuD6",
				meta: "_1j95b_tunN22YmyIjR6Q41",
				flatlist: "_15Vns6HB5orCZFgiAscLcY",
				flatlistExpando: "_25H3rpML960krz0Mbzl6iF",
				flatlistSeparator: "_3krAdM_66EO_kYkGilOlTV",
				flatlistItemOne: "_3foTXl_McAaS9WeFsRti50",
				flatlistItemTwo: "_2CzmfK4YHPgRLM5WPRsAeQ"
			}
		},
		"./src/reddit/components/SubredditMention/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_262Sb0L-bDqEXxbgcwzY6n",
				title: "_3kuzB_OWMCt-jT_VuaNYZs",
				thumbnailContainer: "_23Xusgw_T_Ae2cUwtQnN-d",
				postDetails: "_1qtVMIr7syVGCvOYo57Fki",
				meta: "PptFc6VyiGyDlRCKotcQ2"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/graphql/operations/SubredditsWithAboutInfo.json"),
				x = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/subredditMention.ts");
			const S = Object(m.a)(p.d),
				v = Object(m.a)(p.c),
				j = Object(m.a)(p.b),
				g = Object(m.a)(p.a),
				y = e => async (t, s, {
					gqlContext: n
				}) => {
					const i = s(),
						r = Object(E.c)(i, {
							subredditName: e
						}),
						o = !!Object(I.A)(i, {
							subredditName: e
						}) && !!Object(I.x)(i, {
							subredditName: e
						}) || !!Object(I.db)(i, {
							subredditName: e
						}),
						c = Object(E.d)(i, {
							subredditName: e
						}),
						a = x.d.subredditMentionD2xExperiment(i);
					if (r || o && !c || !a) return;
					let d = !1;
					t(j({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, {
							...f,
							variables: t
						}))(n(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, i = n.subredditsInfoByNames[0];
							if (Object(_.h)(i)) {
								const e = Object(C.f)(i);
								t(S({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(C.a)(i),
									s = Object(O.a)(i);
								t(S({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(v({
								subredditName: e
							})), d = !0
						}
					} catch (l) {
						d = !1
					}
					d || t(g({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var N = s("./src/reddit/actions/subredditTopContent.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/components/ContentTooltip/index.tsx"),
				L = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				P = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/helpers/overlay/index.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				F = s.n(U);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = Object(a.a)(e => e, R.D, R.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(I.L)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class H extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickSubreddit = e => {
						const {
							subredditOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: s = !1,
						subredditOrProfile: n
					} = this.props;
					return o.a.createElement("div", {
						className: Object(P.a)(F.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: F.a.postDetails
					}, o.a.createElement("p", {
						className: F.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(D.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: F.a.meta
					}, A._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [A._plural(t.numComments, "number of comments", Object(w.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: F.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(M.a, {
						post: t
					})))
				}
			}
			var V = Object(c.b)(q, (e, t) => ({
					openLightbox: t => e(Object(B.a)(t.permalink))
				}))(H),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				W = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				z = s.n(W);
			const Q = Object(G.t)(),
				Z = Object(a.c)({
					isFakeSubreddit: G.x
				});
			var $ = Q(Object(c.b)(Z)(({
					className: e,
					showSubreddit: t,
					...s
				}) => {
					const n = Object(K.a)(s);
					return o.a.createElement("div", {
						className: Object(P.a)(F.a.container, e)
					}, o.a.createElement("div", {
						className: z.a.mainBody
					}, o.a.createElement("div", {
						className: z.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(P.a)(z.a.title, n)
					}), t && o.a.createElement("div", {
						className: Object(P.a)(z.a.meta, n)
					})), o.a.createElement("div", {
						className: z.a.flatlist
					}, o.a.createElement("div", {
						className: Object(P.a)(z.a.flatlistExpando, n)
					}), o.a.createElement("div", {
						className: z.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(P.a)(z.a.flatlistItemOne, n)
					}), o.a.createElement("div", {
						className: Object(P.a)(z.a.flatlistItemTwo, n)
					}))), o.a.createElement("div", {
						className: z.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(P.a)(z.a.thumbnail, n)
					}))))
				})),
				J = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				Y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				ee = s("./src/reddit/icons/svgs/Top/index.tsx"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				ne = s.n(se);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), re = e => `subreddit-mention-${e}`, oe = Object(a.c)({
				haveError: E.d,
				hideNSFWPref: te.C,
				isEmployee: te.H,
				isPending: E.c,
				postIds: E.f,
				subreddit: I.a,
				subredditAboutInfo: I.x
			}), ce = Object(c.b)(oe, (e, {
				subredditName: t,
				isHoverable: s
			}) => ({
				subredditDataRequested: t => e(y(t)),
				showTooltip: s => {
					e(Object(T.f)({
						tooltipId: s
					})), e(Object(N.d)(t))
				},
				onHideTooltip: () => e(Object(T.i)())
			})), ae = 600;
			class de extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = re(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object(X.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object(X.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object(X.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), u.G), this.loadSubredditData = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							isPending: s,
							haveError: n
						} = this.props;
						if (!(!!e && !!t || n || s || this.isRequestedOnceAlready) && this.subredditMentionElement && this.subredditMentionElement.current) {
							const e = this.subredditMentionElement.current,
								t = window.scrollY + window.innerHeight,
								s = window.scrollY,
								n = e.getBoundingClientRect().top + window.scrollY;
							(n < s ? s - n : n - t) < ae && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
						}
					}, this.handleOnClick = () => {
						const {
							sendEvent: e,
							rtJsonElementProps: t,
							subredditName: s
						} = this.props;
						e(Object(X.a)({
							...t,
							subredditName: s
						}))
					}, this.subredditMentionElement = o.a.createRef(), this.state = {
						uniqueId: "",
						isHoverable: !!this.props.isHoverable
					}
				}
				componentDidMount() {
					this.loadSubredditData(), this.setState({
						uniqueId: l()()
					}), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleScroll)
				}
				componentWillUnmount() {
					window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleScroll)
				}
				renderDefault() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						ref: this.subredditMentionElement,
						onClick: this.handleOnClick
					}, o.a.createElement(J.a, {
						href: `/r/${e}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(J.b, {
						subredditOrProfile: void 0
					})), `r/${e}`))
				}
				render() {
					const {
						hideNSFWPref: e,
						isEmployee: t,
						isHoverable: s,
						postIds: n,
						onHideTooltip: i,
						subreddit: r,
						subredditAboutInfo: c,
						subredditName: a
					} = this.props;
					if (!r || !c || Object(_.i)(r)) return this.renderDefault();
					const {
						uniqueId: d
					} = this.state, l = Object(b.a)(this.props.subredditName, u.P.TOP), m = r.isNSFW && e || r.type === _.e.EmployeesOnly && !t || r.type === _.e.Private && !c.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: re(d),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(J.a, {
						href: `/r/${a}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(J.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${a}`), s && !p && o.a.createElement(k.a, {
						defaultTooltipPosition: "right",
						tooltipId: re(d),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: ne.a.hovercardStyle
					}, o.a.createElement(L.a, {
						subredditId: r.id,
						subredditName: a,
						shouldHideBottomBorder: !0,
						shouldShowActiveUsers: !0,
						shouldShowDescription: !1,
						shouldUseSubredditMentionEvents: !0,
						listingKey: l,
						position: 0
					}), o.a.createElement("div", {
						className: ne.a.topPostsTitle
					}, o.a.createElement(ee.a, {
						className: ne.a.top
					}), ie._("Top posts of the last week", null, {
						hk: "37poFw"
					})), n.length > 0 ? n.map(e => o.a.createElement(V, {
						containerOnClick: this.onClickPost,
						key: e,
						postId: e,
						thumbnailOnClick: this.onClickPost
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement($, {
						isLoading: !0
					}), o.a.createElement($, {
						isLoading: !0
					}), o.a.createElement($, {
						isLoading: !0
					})))))
				}
			}
			t.default = ce(Object(Y.c)(de))
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
				i = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(i);
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = o
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				h = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = h.a.wrapped(l.a, "Checkmark", p.a),
				O = ({
					isFilled: e,
					...t
				}) => i.a.createElement(x, t),
				C = h.a.wrapped(u.a, "Plus", p.a),
				_ = ({
					isFilled: e,
					...t
				}) => i.a.createElement(C, t),
				I = h.a.div("ButtonSpacer", p.a);
			class E extends i.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = ({
						[c.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: o,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: C,
							..._
						} = this.props, I = this.state.isHovered, E = Object(b.a)({
							type: s.type,
							key: I ? "unsubscribe" : "subscribed"
						});
						return i.a.createElement(a.q, f({
							className: t,
							priority: _.shouldReverseColor ? a.b.Primary : a.b.Secondary,
							Icon: u || !u && !I ? e ? e => i.a.createElement(d.a, f({
								name: "checkmark"
							}, e)) : O : void 0,
							text: !u && E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: m || (u ? a.c.XS : a.c.S)
						}, _))
					}, this.renderSubscribeButton = ({
						[c.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: o,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: x,
							onSubscriptionsRequested: O,
							...C
						} = this.props, I = Object(b.a)({
							type: s.type,
							key: "subscribe"
						});
						return i.a.createElement(a.q, f({
							className: t,
							priority: C.shouldReverseColor ? a.b.Secondary : a.b.Primary,
							Icon: e ? e => i.a.createElement(d.a, f({
								name: "add"
							}, e)) : _,
							size: m || (u ? a.c.XS : a.c.S),
							text: !u && I,
							onClick: this.onClick
						}, C, {
							id: `subscribe-button-${o}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? i.a.createElement(c.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : i.a.createElement(I, null) : i.a.createElement(c.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(o.a)(Object(r.c)(E))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => r[i({
					type: e
				})][t]()
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return V
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				b = s("./src/reddit/icons/fonts/Link/index.tsx"),
				m = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				p = s("./src/reddit/icons/fonts/Text/index.tsx"),
				h = s("./src/reddit/icons/fonts/Video/index.tsx"),
				f = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				x = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				O = s("./src/reddit/constants/elementClassNames.ts"),
				C = s("./src/reddit/controls/ContentType/index.m.less"),
				_ = s.n(C);
			const I = e => Object(o.a)(_.a.contentTypeIcon, e.className),
				E = e => r.a.createElement(b.a, {
					className: Object(o.a)(O.a, I(e))
				});

			function S(e) {
				const t = I(e);
				switch (e.type) {
					case "gifvideo":
						return r.a.createElement(u.a, {
							className: t
						});
					case "image":
						return r.a.createElement(m.a, {
							className: t
						});
					case "meta":
						return r.a.createElement(x.a, {
							className: t
						});
					case "rtjson":
					case "text":
						return r.a.createElement(p.a, {
							className: t
						});
					case "video":
						return r.a.createElement(h.a, {
							className: t
						});
					case "gallery":
						return r.a.createElement(f.a, {
							className: t
						});
					default:
						return r.a.createElement(E, e)
				}
			}
			var v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Theme/index.ts"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/reddit/components/Thumbnail/index.m.less"),
				L = s.n(k);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => e.placeholderImage || Object(T.a)(e).placeholderImage,
				D = e => e.placeholderImage ? "cover" : Object(T.a)(e).placeholderImagePosition,
				M = a.a.span("LinkText", L.a),
				B = ({
					className: e,
					onClick: t,
					children: s
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(o.a)(L.a.linkIcon, e)
				}, s),
				R = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(L.a.hiddenImage, e.className)
				}),
				U = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(L.a.thumbnail, L.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(T.a)(e).button : Object(T.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(B, {
						className: e.linkIconClassName
					}, r.a.createElement(g.a, {
						className: Object(o.a)(L.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && r.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(R, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				F = e => e.isOutbound ? Object(T.a)(e).button : e.placeholderImage ? "transparent" : Object(T.a)(e).line,
				A = e => {
					const t = w(e),
						s = t && {
							background: Object(N.g)(Object(T.a)(e).placeholder, t, D(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(L.a.thumbnail, L.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: F(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(S, {
						className: Object(o.a)(e.contentTypeClassName, L.a.contentType, {
							[L.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(B, {
						className: e.linkIconClassName
					}, r.a.createElement(g.a, {
						className: Object(o.a)(L.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && r.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)))
				},
				q = e => r.a.createElement(U, P({}, e, {
					className: Object(o.a)(L.a.blurredThumbnail, e.className)
				})),
				H = Object(c.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: c,
						forceShowNSFW: a,
						isMeta: d,
						linkIconClassName: l,
						linkTextClassName: u,
						outboundLinkIconClassName: b,
						post: m,
						redditStyle: p,
						removeLink: h,
						showContentType: f,
						templatePlaceholderImage: x,
						text: O,
						theme: C,
						usePreview: _
					} = e, I = Object(j.a)(), E = !C.subredditContext.shouldShowNSFWContent && (m.isNSFW || !(!c || !c.isNSFW)) && !a, S = w({
						placeholderImage: x,
						redditStyle: p,
						theme: C
					}), g = V(e), N = K(m, t, S, E, O, C, g, d, f, h, p, l, u, b, i, I), T = Object(y.D)(m);
					return Object(n.a)(T) && !h && T.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(L.a.container, _ ? L.a.usePreview : "", s)
					}, r.a.createElement(v.b, {
						href: Object(y.D)(m),
						isSponsored: m.isSponsored,
						postId: m.id,
						source: m.source
					}, N)) : r.a.createElement("div", {
						className: Object(o.a)(L.a.container, _ ? L.a.usePreview : "", s)
					}, N)
				}),
				V = ({
					crosspost: e,
					post: t,
					url: s,
					usePreview: n
				}) => {
					if (s) return s;
					const {
						preview: i,
						media: r,
						thumbnail: o
					} = e || t;
					return n && i ? i.url : t.isSponsored && i && "default" === o.url ? i.url : G(r) ? r.scrubberThumbSource : o.url
				},
				G = e => !!e && e.type === y.o.LIVEVIDEO,
				K = (e, t, s, i, c, a, l, u, b, m, p, h, f, x, O, C) => {
					const _ = e.source && !e.isSponsored || !1;
					if (Object(n.a)(l)) {
						const s = G(e.media),
							n = s ? {
								errorSrc: d.U
							} : {},
							u = Object(o.a)(t, {
								[L.a.verticallyCenterThumbnail]: s
							});
						return i ? r.a.createElement(q, P({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: _ && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: x,
							redditStyle: p,
							text: c,
							theme: a,
							isInIcons2020: C
						})) : r.a.createElement(U, P({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: _ && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: x,
							redditStyle: p,
							text: c,
							theme: a,
							isInIcons2020: C
						}))
					}
					return r.a.createElement(A, {
						className: t,
						contentTypeClassName: O,
						placeholderImage: s,
						isMeta: u,
						isOutbound: _ && !m,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: x,
						redditStyle: p,
						showContentType: b,
						text: c,
						theme: a,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData,
						isInIcons2020: C
					})
				};
			t.a = H
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(a);
			const l = o.a.span("metaText", d.a),
				u = e => r.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...i
				}) => {
					const o = Object(c.b)(t),
						a = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						d = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? a : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, i, d)
				},
				m = e => r.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(c.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(i);
			const o = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				c = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "E", (function() {
				return v
			})), s.d(t, "F", (function() {
				return j
			})), s.d(t, "M", (function() {
				return y
			})), s.d(t, "B", (function() {
				return N
			})), s.d(t, "C", (function() {
				return T
			})), s.d(t, "D", (function() {
				return k
			})), s.d(t, "i", (function() {
				return L
			})), s.d(t, "w", (function() {
				return P
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "L", (function() {
				return D
			})), s.d(t, "K", (function() {
				return M
			})), s.d(t, "I", (function() {
				return B
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "z", (function() {
				return F
			})), s.d(t, "A", (function() {
				return A
			})), s.d(t, "N", (function() {
				return q
			})), s.d(t, "J", (function() {
				return H
			})), s.d(t, "t", (function() {
				return V
			})), s.d(t, "H", (function() {
				return G
			})), s.d(t, "d", (function() {
				return K
			})), s.d(t, "c", (function() {
				return W
			})), s.d(t, "b", (function() {
				return z
			})), s.d(t, "f", (function() {
				return Q
			})), s.d(t, "e", (function() {
				return Z
			})), s.d(t, "s", (function() {
				return Y
			})), s.d(t, "m", (function() {
				return X
			})), s.d(t, "r", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "l", (function() {
				return se
			})), s.d(t, "n", (function() {
				return ne
			})), s.d(t, "p", (function() {
				return ie
			})), s.d(t, "q", (function() {
				return re
			})), s.d(t, "o", (function() {
				return oe
			})), s.d(t, "j", (function() {
				return ce
			})), s.d(t, "u", (function() {
				return ae
			})), s.d(t, "G", (function() {
				return de
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/models/Widgets/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				p = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const h = "discovery_unit",
				f = (e, t, s) => ({
					...b.defaults(e),
					source: h,
					screen: b.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && s ? Object(i.a)(t.title, {
							subredditName: s.name
						}) : t.title,
						name: t.unitName
					}
				}),
				x = (e, t, s) => ({
					...f(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				O = (e, t) => {
					Object(p.a)(C(t)(e))
				},
				C = (e, t) => s => x(s, e, t),
				_ = (e, t, s, n) => "unitName" in t ? f(e, t, n) : ((e, t, s) => ({
					...b.defaults(e),
					source: "search",
					screen: b.screen(e),
					search: s ? {
						...b.search(e, s),
						structureType: b.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				I = (e, t, s, i, r) => ({
					..._(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: b.post(e, s)
				}),
				E = ({
					post: e,
					rawQuery: t,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? b.StructureType.PromotedTrend : b.StructureType.Trending
				});
			var S;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(S || (S = {}));
			const v = (e, t, s) => {
					Object(p.a)(g(e, t, s, o.c.CLICK))
				},
				j = (e, t, s) => {
					Object(p.a)(g(e, t, s, o.c.VIEW))
				},
				g = (e, t, s, n) => {
					const i = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...b.defaults(e),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: E(t),
						discoveryUnit: s === S.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: b.actionInfo(e, {
							paneName: s,
							position: i
						}),
						search: {
							originPageType: e.platform.currentPage ? b.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: b.StructureType.Trending,
							queryId: n === o.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				y = (e, t, s, n, i, r, c) => {
					Object(p.a)({
						...b.defaults(e),
						...Object(a.e)(e, s, n, i, r, t),
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				N = (e, t, s, n) => {
					Object(p.a)(I(e, t, s, n))
				},
				T = (e, t, s, n) => i => I(i, e, t, s, n),
				k = (e, t, s, i) => {
					const r = _(e, t, i);
					Object(p.a)({
						...r,
						...Object(m.b)(e, s),
						action: "view",
						noun: n.ITEM_SUBREDDIT
					})
				},
				L = (e, t) => {
					Object(p.a)({
						...f(e, t),
						source: h,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				P = (e, t, s, n) => {
					Object(p.a)(w(t, s, n)(e))
				},
				w = (e, t, s, i) => r => {
					return {
						..._(r, e, s, i),
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: b.post(r, t)
					}
				},
				D = (e, t, s, n) => i => r => Object(a.e)(r, i, e, t, s, n),
				M = (e, t, s, n) => i => r => Object(a.d)(r, e, t, void 0, s, i, n),
				B = (e, t, s, n) => i => r => ({
					...Object(a.e)(r, i, e, t, s, n),
					noun: "ad"
				}),
				R = (e, t) => s => i => ({
					...e ? f(i, e, t) : {},
					source: h,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: b.post(i, s)
				}),
				U = (e, t, s, n) => {
					Object(p.a)(F(t, s, n)(e))
				},
				F = (e, t, s, n) => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						c = r ? Object(m.b)(i, r) : void 0;
					return {
						..._(i, e, s, n),
						...c,
						source: h,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.post(i, t)
					}
				},
				A = (e, t, s) => n => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						c = r ? Object(m.b)(i, r) : void 0;
					return {
						..._(i, e, void 0, s),
						...c,
						source: h,
						action: o.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: b.post(i, t)
					}
				},
				q = (e, t, s) => {
					const n = _(e, t);
					Object(p.a)({
						...n,
						...Object(m.b)(e, s),
						source: "search",
						action: o.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				H = (e, t, s, n, i, r) => {
					Object(p.a)({
						...b.defaults(e),
						...Object(a.d)(e, t, s, n, i, void 0, r)
					})
				},
				V = (e, t, s) => {
					const n = _(e, t);
					Object(p.a)({
						...n,
						...Object(m.b)(e, s),
						source: h,
						action: o.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				G = (e, t) => s => {
					const n = Object(l.j)(t);
					return {
						...f(s, e, t),
						...Object(m.b)(s, n),
						source: h,
						action: o.c.CLICK,
						noun: "title_subreddit"
					}
				},
				K = (e, t) => s => ({
					...f(s, e, t),
					action: "status",
					actionInfo: b.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				W = (e, t, s) => n => ({
					...f(n, e, s),
					action: "status",
					actionInfo: b.actionInfo(n, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				z = (e, t) => s => ({
					...f(s, e, t),
					action: "click",
					noun: "close"
				}),
				Q = (e, t, s) => n => ({
					..._(n, e, t, s),
					action: "click",
					noun: "scroll"
				}),
				Z = (e, t) => s => ({
					...f(s, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				$ = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				J = (e, t, s) => b.actionInfo(e, {
					position: s
				}),
				Y = (e, t, s) => {
					const n = $();
					return e => ({
						...x(e, n),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t)
					})
				},
				X = (e, t, s) => {
					const n = $();
					return e => ({
						...I(e, n, t),
						actionInfo: J(e, 0, s)
					})
				},
				ee = (e, t, s) => {
					const i = $();
					return e => ({
						...f(e, i),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				te = (e, t, s) => {
					const i = $();
					return e => ({
						...f(e, i),
						actionInfo: J(e, 0, s),
						post: b.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				se = (e, t, s, i) => {
					const r = $();
					return e => ({
						...f(e, r),
						actionInfo: J(e, 0, i),
						subreddit: b.subredditById(e, s) || null,
						post: b.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				ne = (e, t, s) => {
					const i = $();
					return e => ({
						...f(e, i),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				ie = (e, t, s, i) => {
					const r = $();
					return e => ({
						...f(e, r),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						post: i ? b.post(e, i) : null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				re = (e, t, s, i) => {
					const r = $();
					return e => ({
						...f(e, r),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						post: i ? b.post(e, i) : null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				oe = (e, t, s) => {
					const i = $();
					return e => ({
						...f(e, i),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, s) => {
					const i = $();
					return e => ({
						...f(e, i),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				ae = (e, t) => s => ({
					...f(s, e),
					...t && Object(m.b)(s, t),
					source: h,
					action: o.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...f(t, e),
					source: h,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, s) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				a = s.n(c);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(o.b)(t?"gif_post":"gif",e.isFilled)} ${e.className}`
				})
			}, "GifIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, s) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Link/index.m.less"),
				a = s.n(c);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(o.b)(t?"link_post":"link",e.isFilled)} ${e.className}`
				})
			}, "LinkIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(o.b)(t?"external_link":"outboundLink",e.isFilled)} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				a = s.n(c);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(o.b)(t?"image_post":"photos",e.isFilled)} ${e.className}`
				})
			}, "PhotoIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Text/index.m.less"),
				a = s.n(c);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(o.b)(t?"text_post":"text",e.isFilled)} ${e.className}`
				})
			}, "TextIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, s) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/Video/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Video/index.m.less"),
				c = s.n(o);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: `${Object(r.b)("video",e.isFilled)} ${e.className}`
			}), "VideoIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, i.a.createElement("g", {
				stroke: "none"
			}, i.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, i.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.f90987276691371b7dc7.js.map