// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.c3fdb4893ab84696e4db.js
// Retrieved at 5/25/2021, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, s = 0, n = []; ++t < r;) {
					var a = e[t];
					a && (n[s++] = a)
				}
				return n
			}
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t, r, s) {
				const n = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(n)
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/actions/users.ts"),
				n = r("./src/reddit/selectors/user.ts"),
				a = r("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(s.r)()), Object(n.J)(t()) || e(Object(a.h)())
			}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/telemetry/index.ts"),
				n = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/users.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(s.a)(Object(c.b)(r)), e(Object(i.r)({
					forceFetch: !0
				})), await e(Object(a.g)(o.a.SNOOVATAR_MODAL))
			}, m = e => async (t, r) => {
				const i = r();
				Object(s.a)(Object(c.a)(e)(i)), Object(d.J)(i) ? await t(Object(a.h)(o.a.SNOOVATAR_MODAL)) : await t(Object(n.h)())
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				a = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				o = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				m = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return L
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return G
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				o = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/subscription/constants.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				p = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts");
			var v = r("./src/graphql/operations/SubscribedSubreddits.json"),
				x = r("./src/lib/makeGqlRequest/index.ts"),
				g = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var h = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = r("./src/reddit/models/GqlTopLevelField.ts"),
				_ = r("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					r = [],
					s = {},
					n = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const o of a.edges) {
					if (o.node.__typename !== _.c.AvailableRedditor) continue;
					const e = Object(h.a)(o.node.profile);
					s[e.id] = e;
					const {
						isFavorite: r
					} = o.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const o of i.edges) {
					if (o.node.__typename !== I.a.Subreddit) continue;
					const e = Object(C.a)(o.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = o.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: s,
					subreddits: n
				}
			}
			var P = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/profile.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/subscriptions.ts"),
				j = r("./src/reddit/selectors/user.ts");
			const y = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(a.a)(l.c),
				k = Object(a.a)(l.b),
				M = Object(a.a)(l.a),
				U = Object(a.a)(l.h),
				L = (Object(a.a)(l.i), Object(a.a)(l.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(k());
					const n = await (e => Object(x.a)(e, v))(r());
					if (n.ok) {
						const t = O(n.body.data);
						e(S(t))
					} else e(M({
						error: n.error
					}))
				}),
				T = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				B = (e, t, r) => async (a, l, {
					apiContext: v
				}) => {
					let x = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(w.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(E.m)(l(), e.name),
						name: `${n.ac}${e.name}`,
						type: e.type
					});
					if (!Object(j.J)(l())) return a(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void a(Object(c.j)());
					const h = Object(j.i)(l());
					if (h) {
						const t = x.length,
							r = e.length;
						if (x = x.filter(e => !T(h, e)), (e = e.filter(e => !T(h, e))).length !== r || x.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(m.f)(Object(m.e)(e, P.b.Error)))
						}
						if (!e.length && !x.length) return
					}
					if (a(U({
							identifiers: x,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(N.b)(l()),
							userIsSubscriber: t,
							widgetId: r
						})), (await ((e, {
							subredditIds: t,
							subredditNames: r,
							subscribe: s
						}) => Object(p.a)(Object(f.a)(e, [b.a]), {
							method: n.eb.POST,
							endpoint: Object(g.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: r && r.join(",") || void 0,
								api_type: "json"
							}
						}))(v(), {
							subredditNames: x.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						x.filter(e => e.type === u.a.SUBREDDIT).forEach(({
							id: e
						}) => a(Object(o.i)(e, {
							forceLoad: !0,
							fullData: !1
						})));
						const r = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${s.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						a(Object(m.f)({
							text: 1 === e.length && "profile" === e[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "followed" : "unfollowed"), s.fbt._param("communityname", r)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "joined" : "left"), s.fbt._param("communityname", r)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						a(U({
							identifiers: x,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(N.b)(l()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const n = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(m.f)(Object(m.e)(n, P.b.Error)))
					}
				}, F = Object(a.a)(l.f), A = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r(),
						i = Object(w.M)(a, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						v = d.indexOf(e.id),
						x = -1 === l && -1 === v,
						g = a.subreddits.models,
						h = a.profiles.models;
					t(F({
						makeFavorite: x,
						identifier: e,
						subredditModels: g,
						profileModels: h
					}));
					const C = {
							type: e.type,
							name: i.name
						},
						I = () => Object(w.hb)(r(), {
							identifier: C
						});
					(I() || (await t(B([C], !0)), I())) && ((await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						method: n.eb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), o, x)).ok || (t(F({
						makeFavorite: !x,
						identifier: e,
						subredditModels: g,
						profileModels: h
					})), t(Object(m.f)({
						text: y(),
						kind: P.b.Error
					}))))
				}, D = Object(a.a)(l.d), R = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r().multireddits.models,
						i = () => {
							t(Object(m.f)({
								text: y(),
								kind: P.b.Error
							}))
						},
						o = a[e];
					if (!o) return void i();
					const c = !o.isFavorited;
					t(D({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						method: n.eb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(D({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), i())
				}, W = Object(a.a)(l.e), G = e => async (t, r, {
					apiContext: a
				}) => {
					const i = r(),
						o = i.multireddits.models;
					if (!Object(j.J)(i)) return;
					const c = (e = !0) => {
							t(Object(m.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: P.b.Error
							}))
						},
						d = o[e];
					if (!d) return void c();
					const l = !d.isFollowed;
					t(W({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						method: n.eb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(a(), e, l)).ok || (t(W({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: o
					})), c(l))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: n,
				contextId: i,
				priority: o,
				Icon: c,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: f,
				onAddUserToQuickReplyList: b
			}) => {
				return a.a.createElement(d.q, {
					onClick: t => {
						if (f && f(t), e(), p === s.awardNotification) return b();
						n(Object(l.b)(i))
					},
					className: r,
					text: t,
					priority: o,
					Icon: c,
					redditStyle: m,
					isFullWidth: u
				})
			};
			m.displayName = "ChatButton";
			const u = Object(i.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(o.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(o.a)(r))
				}
			}));
			t.b = u(Object(c.c)(m))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/reddit/constants/colors.ts");
			const a = {
				backgroundColor: n.b.overlayReportFlow
			};
			t.b = Object(s.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("CrisisFlow").then(r.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/ImageInput/index.tsx"),
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/svgs/NewPost/index.tsx"),
				d = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				m = r.n(l);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class f extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(d.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: r,
						editButtonClassName: s,
						isLoading: d,
						imageUrl: l
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(m.a.Container, r)
					}, n.a.createElement("label", {
						className: m.a.HitBox
					}, n.a.createElement("span", {
						className: m.a.ImageContainer,
						role: "presentation"
					}, l ? n.a.createElement("img", {
						alt: e,
						className: m.a.Image,
						src: l
					}) : t), n.a.createElement(i.a, {
						className: m.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && n.a.createElement("div", {
						className: Object(a.a)(m.a.EditButton, s)
					}, n.a.createElement(c.a, {
						className: m.a.EditIcon
					}))), d && n.a.createElement(o.a, {
						className: m.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return v
			})), r.d(t, "a", (function() {
				return x
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = r.n(l),
				u = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = u.a.div("Text", m.a),
				b = u.a.div("BottomText", m.a),
				v = e => n.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				h = Object(c.a)(x, [o.a.Click, o.a.Keydown]),
				C = Object(c.a)(v, [o.a.Click, o.a.Keydown]),
				I = Object(a.b)(g);
			t.c = I(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(h, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(C, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/reddit/constants/elementIds.ts"),
				o = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(a.a)(e, t);
				class s extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(o.b)(s)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/config.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = r.n(o);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: o
					} = t, l = s.description ? s.description : s.name;
					return n.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: c.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), o > 1 && n.a.createElement("span", {
						className: c.a.count
					}, `+${Object(i.b)(o-1)}`)), n.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", s.name), d._plural(o)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, r) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return le
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.tsx"),
				o = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = r.n(o),
				d = a.a.div("dynamicTwoCol", c.a),
				l = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				u = r("./node_modules/react-redux/es/index.js"),
				p = r("./node_modules/reselect/es/index.js"),
				f = r("./src/lib/humanizeDate/index.ts"),
				b = r("./src/lib/prettyPrintNumber/index.ts"),
				v = r("./src/lib/timeAgo/index.ts"),
				x = r("./src/reddit/contexts/InsideOverlay.tsx"),
				g = r("./src/reddit/icons/svgs/Cake/index.tsx"),
				h = r("./src/reddit/icons/svgs/Karma/index.tsx"),
				C = r("./src/reddit/icons/svgs/User/index.tsx"),
				I = r("./src/reddit/selectors/profile.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/tooltip.ts"),
				P = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				w = r.n(E);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = a.a.div("Container", w.a),
				y = a.a.div("Body", w.a),
				S = a.a.h5("Title", w.a),
				k = a.a.span("Label", w.a);
			class M extends n.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: r,
						tooltip: s,
						tooltipId: a
					} = this.props, i = a && s ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return n.a.createElement(j, null, n.a.createElement(S, null, r), n.a.createElement(y, null, e, n.a.createElement(k, N({
						key: "label"
					}, i), t)), a && s && n.a.createElement(P.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: s
					}))
				}
			}
			var U = Object(u.b)(null, e => ({
					toggleTooltip: t => e(Object(O.h)({
						tooltipId: t
					}))
				}))(Object(x.b)(M)),
				L = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				T = r.n(L);
			const B = Object(p.a)(I.j, (e, {
					profileName: t
				}) => Object(_.tb)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				F = a.a.div("Container", T.a);

			function A(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var D = Object(u.b)(B)(Object(x.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: r,
						profileCreated: s,
						isOverlay: a,
						commentKarma: i,
						postKarma: o,
						totalKarma: c,
						subscribers: d
					} = e, l = A(a, "karma"), u = A(a, "cakeday"), p = `${m.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[m.fbt._plural(o,"number",Object(b.b)(o,{displayFull:!0}))],{hk:"husfU"})}\n${m.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[m.fbt._plural(i,"number",Object(b.b)(i,{displayFull:!0}))],{hk:"26iPTL"})}\n${m.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[m.fbt._plural(t,"number",Object(b.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${m.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[m.fbt._plural(r,"number",Object(b.b)(r,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return n.a.createElement(F, null, n.a.createElement(U, {
						icon: n.a.createElement(h.a, {
							className: T.a.icon,
							key: "karma"
						}),
						label: Object(b.b)(c, {
							displayFull: !0
						}),
						title: m.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: l,
						tooltip: p
					}), n.a.createElement(U, {
						icon: n.a.createElement(g.a, {
							className: T.a.icon,
							key: "cakeDay"
						}),
						label: Object(f.a)(s, !0),
						title: m.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: u,
						tooltip: Object(v.d)(s)
					}), d > 0 && n.a.createElement(U, {
						icon: n.a.createElement(C.a, {
							className: T.a.icon,
							key: "followers"
						}),
						title: m.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(b.b)(d, {
							displayFull: !0
						})
					}))
				})),
				R = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				W = r.n(R),
				G = r("./src/config.ts"),
				H = r("./src/reddit/controls/InternalLink/index.tsx"),
				K = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				Z = r("./src/reddit/controls/OutboundLink/index.tsx"),
				q = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				z = r("./src/reddit/icons/svgs/Close/index.tsx"),
				V = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				X = r("./src/reddit/icons/svgs/Settings/index.tsx"),
				J = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				Y = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				Q = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				$ = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				ee = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				te = r.n(ee),
				re = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				se = r.n(re);
			var ne = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: r,
					isDeletingBanner: s,
					isDeletingIcon: a,
					isEmployee: i,
					isGold: o,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: l,
					onDeleteBanner: u,
					onDeleteIcon: p,
					profileIcon: f,
					title: b,
					userCreated: v,
					username: x,
					url: g
				}) => n.a.createElement(n.a.Fragment, null, n.a.createElement(Q.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: x,
					isDeletingBanner: !!s,
					onDeleteBanner: u
				}), n.a.createElement("div", {
					className: te.a.SnooIconWrapper
				}, d || !f || c ? n.a.createElement(J.a, {
					iconUrl: f,
					isNSFW: c,
					userName: x,
					isProfileIdCard: !0
				}) : n.a.createElement(Z.b, {
					isSponsored: !1,
					href: f,
					source: null
				}, n.a.createElement(J.a, {
					iconUrl: f,
					isNSFW: c,
					userName: x,
					isProfileIdCard: !0
				})), t && !r && (a ? n.a.createElement(K.a, {
					sizePx: 20,
					className: se.a.loadingIcon
				}) : n.a.createElement(z.a, {
					className: se.a.closeIcon,
					onClick: p
				}))), !t && d && n.a.createElement(H.a, {
					to: "/settings/profile",
					className: te.a.settingsLink
				}, n.a.createElement(X.a, {
					className: se.a.settingsIcon
				})), b && n.a.createElement("h4", {
					className: te.a.userTitle
				}, b), n.a.createElement($.a, {
					className: te.a.userName,
					username: x,
					userCreated: v,
					url: g
				}), i && n.a.createElement(q.a, {
					className: te.a.adminIcon,
					title: m.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), o && n.a.createElement("a", {
					title: m.fbt._("{username} has Reddit Premium", [m.fbt._param("username", x)], {
						hk: "3Fylv"
					}),
					href: `${G.a.redditUrl}/premium`
				}, n.a.createElement(V.a, {
					className: te.a.premiumIcon
				})), d && n.a.createElement(Y.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: l
				})),
				ae = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var ie = ({
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: r,
				isDefaultIcon: s,
				isDeletingBanner: a,
				isDeletingIcon: i,
				isEmployee: o,
				isGold: c,
				isNSFW: d,
				isOwnProfile: l,
				onClickSnoovatar: m,
				onDeleteBanner: u,
				onDeleteIcon: p,
				prefersReducedAnimations: f,
				profileIcon: b,
				snoovatarUrl: v,
				title: x,
				userCreated: g,
				username: h,
				url: C
			}) => v ? n.a.createElement(ae.a, {
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: r,
				isDeletingBanner: a,
				isEmployee: o,
				isGold: c,
				isNSFW: d,
				isOwnProfile: l,
				onClickSnoovatar: m,
				onDeleteBanner: u,
				prefersReducedAnimations: f,
				snoovatarUrl: v,
				title: x,
				userCreated: g,
				username: h,
				url: C
			}) : n.a.createElement(ne, {
				bannerBackgroundImage: e,
				editMode: r,
				isDefaultIcon: s,
				isDeletingBanner: a,
				isDeletingIcon: i,
				isEmployee: o,
				isGold: c,
				isNSFW: d,
				isOwnProfile: l,
				onClickSnoovatar: m,
				onDeleteBanner: u,
				onDeleteIcon: p,
				profileIcon: b,
				title: x,
				userCreated: g,
				username: h,
				url: C
			});
			const oe = a.a.wrapped(i.b, "Widget", W.a),
				ce = a.a.div("Description", W.a),
				de = a.a.wrapped(d, "Actions", W.a);
			class le extends n.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? n.a.createElement(l.a, {
						topAwardIcon: t,
						recentAwardings: e,
						username: r
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						className: s,
						footer: a,
						isEmployee: i,
						isGold: o,
						isNSFW: c,
						isOverlay: d,
						isOwnProfile: l,
						profileIcon: m,
						publicDescription: u,
						snoovatarUrl: p,
						title: f,
						url: b,
						userCreated: v,
						username: x,
						isDefaultIcon: g,
						isDeletingIcon: h,
						isDeletingBanner: C,
						onClickSnoovatar: I,
						onDeleteIcon: _,
						onDeleteBanner: O,
						prefersReducedAnimations: P,
						editMode: E
					} = this.props;
					return n.a.createElement(oe, {
						className: s
					}, n.a.createElement(ie, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: E,
						isDefaultIcon: g,
						isDeletingBanner: C,
						isDeletingIcon: h,
						isEmployee: i,
						isGold: o,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: I,
						onDeleteBanner: O,
						onDeleteIcon: _,
						prefersReducedAnimations: P,
						profileIcon: m,
						title: f,
						userCreated: v,
						username: x,
						url: b,
						snoovatarUrl: p
					}), n.a.createElement(ce, null, u), n.a.createElement(D, {
						profileName: x,
						isOverlay: d
					}), this.renderAwardedLastMonth(), n.a.createElement(de, null, e), a)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./src/reddit/models/Image/index.tsx"),
				o = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(i.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: n,
						isNSFW: i,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? a.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === d ? a.a.createElement(o.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : i && n ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./src/reddit/models/Image/index.tsx"),
				o = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = r.n(m);
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(i.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: r,
						isNSFW: n,
						isProfileIdCard: i,
						userName: l
					} = this.props, {
						isUpdating: m
					} = this.state, p = a.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: n,
						userName: l
					});
					return t && Object(d.e)(t) === l ? a.a.createElement(o.a, {
						altText: s.fbt._("{userName} avatar image", [s.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: i ? u.a.EditButton : void 0,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(l.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = Object(n.c)({
					currentUser: i.i,
					hideNSFWPref: i.B
				}),
				c = Object(s.b)(o, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.z)(t, r))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				isOwnProfile: r,
				onClick: s
			}) {
				return n.a.createElement(i.q, {
					onClick: s,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					})
				}, t ? n.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(o.a, {
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				o = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: s,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return n.a.createElement("div", {
					className: d.a.bannerWrapper
				}, n.a.createElement(o.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), s && e && (c ? n.a.createElement(a.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : n.a.createElement(i.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, r) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: s,
				username: d,
				...l
			}) {
				const m = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${d}`), a.fbt._param("time since account creation", Object(i.d)(s, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${d}`;
				return r ? n.a.createElement(o.a, c({}, l, {
					className: e,
					to: r
				}), m) : n.a.createElement("span", c({}, l, {
					className: e
				}), m)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				m = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				u = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				p = r("./src/reddit/icons/svgs/Settings/index.tsx"),
				f = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const v = Object(b.a)(f.rb);
			var x = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				g = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = r("./node_modules/react-router/esm/react-router.js"),
				C = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				_ = r("./src/reddit/routes/avatar/index.ts"),
				O = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				P = r.n(O);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var w = Object(h.i)(({
					onClick: e,
					username: t,
					location: r
				}) => a.a.createElement(g.a, {
					to: `${_.a}/${t}`
				}, a.a.createElement(C.q, {
					onClick: e,
					className: Object(c.a)(P.a.snoovatarButton, P.a.snoovatarExtraPadding, P.a.compactButtonLayout)
				}, a.a.createElement(I.a, {
					className: P.a.shirtIcon
				}), E._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
					className: P.a.chevronIcon
				})))),
				N = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				y = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				S = r.n(y);
			const k = 25;

			function M(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function U(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const L = M("particleDelay", S.a),
				T = M("particleX", S.a),
				B = M("particleFloat", S.a),
				F = () => {
					const e = U(T),
						t = U(B),
						r = U(L);
					return Object(c.a)(S.a.particle, e, t, r)
				};
			class A extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < k; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: S.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${F()}`
					})
				}
			}
			var D = A,
				R = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				W = r.n(R);
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: f,
				isEmployee: b,
				isGold: g,
				isNSFW: h,
				isOwnProfile: C,
				onClickSnoovatar: I,
				onDeleteBanner: _,
				prefersReducedAnimations: O,
				snoovatarUrl: P,
				title: E,
				userCreated: y,
				username: k,
				url: M
			}) => {
				const U = Object(i.e)(e => !C && !!P && v(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(N.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: h,
					username: k,
					isDeletingBanner: !!f,
					onDeleteBanner: _
				}), a.a.createElement("div", {
					className: S.a.snoovatarContainer
				}, g && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: S.a.topGlow
				}), a.a.createElement("div", {
					className: S.a.bottomGlow
				}), !O && a.a.createElement(D, null)), a.a.createElement("img", {
					className: Object(c.a)(S.a.snoovatar, {
						[S.a.premiumGlow]: g
					}),
					src: P || void 0
				})), !n && C && a.a.createElement(d.a, {
					to: "/settings/profile",
					className: S.a.snoovatarSettingsLink
				}, a.a.createElement(p.a, {
					className: W.a.settingsIcon
				})), a.a.createElement("h1", {
					className: S.a.snoovatarUserTitle
				}, E || k, b && a.a.createElement(l.a, {
					className: S.a.snoovatarAdminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), g && a.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", k)], {
						hk: "3Fylv"
					}),
					href: `${o.a.redditUrl}/premium`
				}, a.a.createElement(u.a, {
					className: S.a.snoovatarPremiumIcon
				})), h && a.a.createElement(m.a, {
					className: S.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				})), a.a.createElement(j.a, {
					className: S.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: k,
					userCreated: y,
					url: M
				}), (C || !r && !!P) && a.a.createElement(x.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: C,
					onClick: I
				}), U && a.a.createElement(w, {
					username: k
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, r) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/snoovatar.ts"),
				c = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/components/ChatButton/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/constants/posts.ts"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/selectors/gold/awardIcon.ts"),
				b = r("./src/reddit/selectors/platform.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/tooltip.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/selectors/userPrefs.ts"),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./node_modules/lodash/compact.js"),
				O = r.n(_),
				P = r("./src/config.ts"),
				E = r("./src/lib/classNames/index.ts"),
				w = r("./src/lib/loadableAction/index.ts"),
				N = r("./src/reddit/actions/gold/modals.ts"),
				j = r("./src/reddit/actions/modal.ts"),
				y = r("./src/reddit/actions/profile/index.ts"),
				S = r("./src/reddit/components/CrisisFlow/index.tsx"),
				k = r("./src/higherOrderComponents/makeAsync.tsx"),
				M = r("./src/lib/loadWithRetries/index.ts");
			var U = Object(k.a)({
					getComponent: () => Object(M.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				L = r("./src/reddit/constants/modals.ts"),
				T = r("./src/reddit/helpers/correlationIdTracker.ts"),
				B = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				F = r("./src/reddit/models/Gold/Premium/index.ts"),
				A = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				D = r("./src/reddit/selectors/premium.ts"),
				R = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				W = r.n(R);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(i.c)({
					areModeratedSubredditsPending: v.a,
					coinsToSpend: h.d,
					givePremiumModalIsOpen: D.c,
					hasFetchedModerators: v.k,
					isEmployee: h.G,
					isLoggedIn: h.J,
					profile: v.j,
					crisisFlowEnabled: A.b
				}),
				K = ({
					isLoading: e,
					...t
				}) => n.a.createElement("div", G({}, t, {
					className: Object(E.a)(W.a.Shimmer, Object(B.b)({
						isLoading: e
					}))
				}));
			class Z extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(T.d)(T.a.GiftPremiumFlow));
						const {
							clickGivePremiumEvent: s
						} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(s())
					}, this.onOpenCrisisModal = () => {
						this.setState({
							showCrisisModal: !0
						})
					}, this.onCloseCrisisModal = () => {
						this.setState({
							showCrisisModal: !1
						})
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: r,
							hasSubreddit: s,
							isEmployee: n,
							isLoggedIn: a,
							isModerator: i,
							isOwnProfile: o,
							profileName: c,
							profile: d,
							crisisFlowEnabled: l,
							userAcceptsPms: m
						} = this.props, u = a && Object(F.d)(r, n).length && !o || n, p = O()([(o || i) && s ? {
							text: I.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${c}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !o && m ? {
							text: I.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${P.a.redditUrl}/message/compose/?to=${c}`
						} : void 0, !o && t ? {
							text: I.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${P.a.redditUrl}/user/${c}/snoo`
						} : void 0, !o && l ? {
							text: I.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !o && d ? {
							text: I.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${P.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${d.id}`
						} : void 0, a && d && !d.isQuarantined ? {
							onClick: e,
							text: I.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0]);
						return u && p.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: I.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), p
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(({
							expanded: e
						}) => ({
							expanded: !e
						}))
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, r = this.makeMenuItems();
					if (0 === r.length) return null;
					const s = (t ? r : []).map(e => e.url ? e.isInternalLink ? n.a.createElement(p.q, {
						kind: p.a.InternalLink,
						priority: p.b.Plain,
						size: p.c.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: W.a.menuItem
					}, e.text) : n.a.createElement(p.q, {
						kind: p.a.ExternalLink,
						priority: p.b.Plain,
						size: p.c.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: W.a.menuItem
					}, e.text) : n.a.createElement(p.q, {
						priority: p.b.Plain,
						size: p.c.XS,
						className: W.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (s.unshift(n.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-1"
					}, n.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), s.unshift(n.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-2"
					}, n.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const a = t ? I.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : I.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return n.a.createElement("div", {
						className: W.a.container
					}, s, n.a.createElement("div", {
						className: W.a.expandContainer
					}, n.a.createElement(p.o, {
						className: W.a.expandButton,
						onClick: this.moreOptionsToggled
					}, a)), e && n.a.createElement(U, null), this.state.showCrisisModal && n.a.createElement(S.b, {
						withOverlay: !0,
						overlayCustomStyles: S.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var q = Object(a.b)(H, (e, {
					profileName: t
				}) => ({
					addToMultiClicked: () => {
						e(Object(w.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), r.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(j.h)(L.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					onClickGivePremium: r => e(Object(N.e)({
						correlationId: r,
						profileName: t
					})),
					onModeratorsRequested: () => e(Object(y.b)(t))
				}))(Z),
				z = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				V = r.n(z);
			const {
				fbt: X
			} = r("./node_modules/fbt/lib/FbtPublic.js"), J = Object(i.c)({
				account: h.i,
				activeTooltipId: g.a,
				currentUserHasSubreddit: h.f,
				hideNSFWPref: h.B,
				isModerator: v.f,
				prefersReducedAnimations: C.c,
				profile: v.j,
				profileAboutInfo: v.h,
				topAwardIcon: (e, {
					profileName: t
				}) => Object(f.e)(e, {
					userName: t,
					minSize: 32
				}),
				structuredStyle: (e, t) => Object(x.m)(e, Object(v.m)(e, t.profileName)),
				userHasSubreddit: (e, {
					profileName: t
				}) => Object(h.nb)(e, {
					userName: t
				}),
				user: (e, {
					profileName: t
				}) => Object(h.mb)(e, {
					userName: t
				}),
				page: b.b
			}), Y = ({
				username: e,
				currentUserHasSubreddit: t
			}) => n.a.createElement("div", {
				className: V.a.actionItem
			}, n.a.createElement(p.k, {
				className: V.a.button,
				to: t ? `/user/${e}/submit` : "/submit"
			}, X._("New Post", null, {
				hk: "2VCZwF"
			}))), Q = ({
				profileName: e,
				onToggleFollow: t,
				userIsSubscriber: r
			}) => n.a.createElement("div", {
				className: V.a.actionItem
			}, r ? n.a.createElement(p.l, {
				className: V.a.button,
				onClick: () => t(e, r)
			}, X._("Unfollow", null, {
				hk: "1nM1SO"
			})) : n.a.createElement(p.i, {
				className: V.a.button,
				onClick: () => t(e, r)
			}, X._("Follow", null, {
				hk: "OPQuq"
			}))), $ = ({
				userId: e
			}) => n.a.createElement("div", {
				className: V.a.actionItem
			}, n.a.createElement(d.b, {
				contextId: e,
				className: V.a.button,
				userId: e,
				text: X._("Chat", null, {
					hk: "UKkIW"
				})
			}));
			t.default = Object(a.b)(J, e => ({
				onToggleFollow: (t, r) => e(Object(c.d)([{
					name: t,
					type: u.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(o.b)("profile_overview"))
			}))(Object(m.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: r,
					hideNSFWPref: s,
					isModerator: a,
					isOverlay: i,
					isSubmissionPage: o,
					onClickSnoovatar: c,
					onToggleFollow: d,
					profile: m,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: f,
					topAwardIcon: b,
					userHasSubreddit: v,
					user: x,
					page: g,
					prefersReducedAnimations: h
				} = e;
				if (!x) return null;
				const {
					accountIcon: C,
					awardedLastMonth: I,
					created: _,
					id: O,
					isEmployee: P,
					isGold: E,
					prefShowSnoovatar: w,
					snoovatarFullBodyAsset: N,
					username: j
				} = x, y = !!t && t.id === O, S = !(!t || !t.snoovatarFullBodyAsset), k = f && f.bannerBackgroundImage, M = !!m && m.isNSFW, U = M && s, L = !(!u || !u.userIsSubscriber), T = `/user/${j}/`, B = g && g.url === T, F = !u || u.acceptChats, A = !u || u.acceptPms;
				return n.a.createElement(l.a, {
					isEmployee: P,
					isGold: E,
					isNSFW: M,
					isOverlay: i,
					isOwnProfile: y,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: B ? null : T,
					userCreated: _,
					username: j,
					recentAwardings: I,
					currentUserHasSnoovatar: S,
					prefersReducedAnimations: !!h,
					snoovatarUrl: N,
					topAwardIcon: b,
					actions: n.a.createElement(n.a.Fragment, null, y && !o && Y({
						username: j,
						currentUserHasSubreddit: r
					}), !y && v && Q({
						profileName: j,
						onToggleFollow: d,
						userIsSubscriber: L
					}), !!t && !y && F && $({
						userId: O
					})),
					footer: n.a.createElement(q, {
						hasSubreddit: v,
						isModerator: a,
						isOwnProfile: y,
						allowViewSnoovatar: w,
						profileName: j,
						sendEvent: p,
						userAcceptsPms: A
					}),
					onClickSnoovatar: c,
					profileIcon: C,
					bannerBackgroundImage: U ? void 0 : k
				})
			}))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/SEOTitle/index.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(o);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => n.a.createElement("div", t, n.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			class a extends n.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, a = r || s;
					return n.a.createElement("div", {
						className: e.className
					}, r && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), !a && n.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = r.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => n.a.createElement("div", {
				className: Object(a.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = r.n(n);
			const i = ({
					isLoading: e
				}) => Object(s.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				o = e => Object(s.a)(a.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				n = r("./src/reddit/selectors/avatarMarketing.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				o = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.defaults(t)
					};
					return Object(n.a)(t) && Object.assign(r, i), r
				},
				c = e => ({
					...a.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: a.snoovatarActiveForBuilderEvent(e)
				}),
				d = e => ({
					...a.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: a.snoovatarActiveForBuilderEvent(e)
				}),
				l = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...a.defaults(e),
					...i
				})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = r.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = r.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/NewPost/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 19 19"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.55 2.58716L16.413 4.45018C16.9354 4.97264 16.9354 5.82198 16.413 6.34445L14.7732 7.98419C14.6857 8.07171 14.5714 8.11547 14.458 8.11547C14.3436 8.11547 14.2293 8.07171 14.1418 7.98419L11.0159 4.85832C10.8418 4.68417 10.8418 4.40105 11.0159 4.2269L12.6557 2.58716C13.1781 2.0647 14.0275 2.0647 14.55 2.58716ZM9.7531 5.48975C9.92725 5.31559 10.2104 5.31559 10.3845 5.48975L13.5104 8.61561C13.6845 8.78977 13.6845 9.07288 13.5104 9.24703L5.8806 16.8768C5.79665 16.9608 5.68322 17.0072 5.56533 17.0072H2.43947C2.19208 17.0072 1.99292 16.808 1.99292 16.5607V13.4348C1.99292 13.3169 2.03936 13.2035 2.12331 13.1195L9.7531 5.48975Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), n.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#EC0623"
			}), n.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = function({
				className: e
			}) {
				return n.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, r) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				a = (e, t = !1) => {
					const r = [];
					for (const s in n) {
						const a = n[s];
						(a.priceInCoins <= e || t) && r.push(a)
					}
					return r
				},
				i = e => s.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [s.fbt._plural(e.monthsOfPremium, "number of months"), s.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				o = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/constants/modals.ts");
			const o = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var r;
				switch (t.type) {
					case n.o:
						const {
							avatarMarketingEvent: s
						} = t.payload;
						return s ? function(e) {
							const {
								startsAt: t,
								endsAt: r,
								webAssetUrls: s
							} = e, n = t && new Date(t) <= new Date, a = !!r && new Date(r) < new Date, i = s || null;
							return {
								active: !!n && !a && !!i,
								assetUrls: i
							}
						}(s) : o;
					case a.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === i.a.SNOOVATAR_MODAL ? o : e;
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: c
			})
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/actions/pages/avatar.ts");
			const i = "/avatar",
				o = [i, `${i}/:username`, `${i}/:username/:avatarId`],
				c = {
					action: a.a,
					chunk: n.p.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!r.m[t]
						},
						importAsync: () => r.e("Avatar").then(r.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return r(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: n.Gb.AVATAR
					},
					path: o
				};
			t.b = c
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/avatar/index.ts"),
				i = r("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(n.a)({
				features: {
					avatar: a.a
				}
			});
			const o = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				c = Object(s.a)(i.a, e => {
					var t, r;
					const s = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing;
					return (null == s ? void 0 : s.active) ? s.assetUrls && s.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const i = e => s.b.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: s.g
				}),
				o = e => s.d.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: s.j
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(s.ob)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => t => {
				const r = Object(n.c)(t, {
					experimentEligibilitySelector: n.a,
					experimentName: e
				});
				return !(!r || Object(s.Gd)(r))
			}
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			const s = e => !!e.givePremium.givePremiumModalAccountName,
				n = e => e.givePremium.givePremiumModalAccountName,
				a = e => e.givePremium.api.error || "",
				i = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.c3fdb4893ab84696e4db.js.map