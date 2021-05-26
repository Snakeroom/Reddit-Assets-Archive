// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.fbcab477c5333d305d57.js
// Retrieved at 5/26/2021, 5:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++t < r;) {
					var a = e[t];
					a && (s[n++] = a)
				}
				return s
			}
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t, r, n) {
				const s = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(s)
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/actions/users.ts"),
				s = r("./src/reddit/selectors/user.ts"),
				a = r("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(n.r)()), Object(s.K)(t()) || e(Object(a.h)())
			}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/users.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(n.a)(Object(c.b)(r)), e(Object(o.r)({
					forceFetch: !0
				})), await e(Object(a.g)(i.a.SNOOVATAR_MODAL))
			}, m = e => async (t, r) => {
				const o = r();
				Object(n.a)(Object(c.a)(e)(o)), Object(d.K)(o) ? await t(Object(a.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(s.h)())
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				a = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				m = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return F
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return G
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./src/reddit/actions/gold/powerups.ts"),
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
				I = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = r("./src/reddit/models/GqlTopLevelField.ts"),
				O = r("./src/reddit/models/User/index.ts");

			function C(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== O.c.AvailableRedditor) continue;
					const e = Object(h.a)(i.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = i.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== _.a.Subreddit) continue;
					const e = Object(I.a)(i.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: n,
					subreddits: s
				}
			}
			var P = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/profile.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/subscriptions.ts"),
				y = r("./src/reddit/selectors/user.ts");
			const N = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				S = Object(a.a)(l.c),
				k = Object(a.a)(l.b),
				U = Object(a.a)(l.a),
				M = Object(a.a)(l.h),
				F = (Object(a.a)(l.i), Object(a.a)(l.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(k());
					const s = await (e => Object(x.a)(e, v))(r());
					if (s.ok) {
						const t = C(s.body.data);
						e(S(t))
					} else e(U({
						error: s.error
					}))
				}),
				T = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				A = (e, t, r) => async (a, l, {
					apiContext: v
				}) => {
					let x = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(E.m)(l(), e.name),
						name: `${s.ac}${e.name}`,
						type: e.type
					});
					if (!Object(y.K)(l())) return a(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void a(Object(c.j)());
					const h = Object(y.j)(l());
					if (h) {
						const t = x.length,
							r = e.length;
						if (x = x.filter(e => !T(h, e)), (e = e.filter(e => !T(h, e))).length !== r || x.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(m.f)(Object(m.e)(e, P.b.Error)))
						}
						if (!e.length && !x.length) return
					}
					if (a(M({
							identifiers: x,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(w.b)(l()),
							userIsSubscriber: t,
							widgetId: r
						})), (await ((e, {
							subredditIds: t,
							subredditNames: r,
							subscribe: n
						}) => Object(p.a)(Object(f.a)(e, [b.a]), {
							method: s.eb.POST,
							endpoint: Object(g.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: n ? "sub" : "unsub",
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
						}) => a(Object(i.i)(e, {
							forceLoad: !0,
							fullData: !1
						})));
						const r = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : `${n.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						a(Object(m.f)({
							text: 1 === e.length && "profile" === e[0].type ? n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "followed" : "unfollowed"), n.fbt._param("communityname", r)], {
								hk: "1hY5KX"
							}) : n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "joined" : "left"), n.fbt._param("communityname", r)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						a(M({
							identifiers: x,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(w.b)(l()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(m.f)(Object(m.e)(s, P.b.Error)))
					}
				}, B = Object(a.a)(l.f), L = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r(),
						o = Object(j.M)(a, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						v = d.indexOf(e.id),
						x = -1 === l && -1 === v,
						g = a.subreddits.models,
						h = a.profiles.models;
					t(B({
						makeFavorite: x,
						identifier: e,
						subredditModels: g,
						profileModels: h
					}));
					const I = {
							type: e.type,
							name: o.name
						},
						_ = () => Object(j.hb)(r(), {
							identifier: I
						});
					(_() || (await t(A([I], !0)), _())) && ((await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						method: s.eb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(n(), i, x)).ok || (t(B({
						makeFavorite: !x,
						identifier: e,
						subredditModels: g,
						profileModels: h
					})), t(Object(m.f)({
						text: N(),
						kind: P.b.Error
					}))))
				}, D = Object(a.a)(l.d), R = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r().multireddits.models,
						o = () => {
							t(Object(m.f)({
								text: N(),
								kind: P.b.Error
							}))
						},
						i = a[e];
					if (!i) return void o();
					const c = !i.isFavorited;
					t(D({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						method: s.eb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, c)).ok || (t(D({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), o())
				}, W = Object(a.a)(l.e), G = e => async (t, r, {
					apiContext: a
				}) => {
					const o = r(),
						i = o.multireddits.models;
					if (!Object(y.K)(o)) return;
					const c = (e = !0) => {
							t(Object(m.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: P.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const l = !d.isFollowed;
					t(W({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, r) => Object(p.a)(Object(f.a)(e, [b.a]), {
						method: s.eb.POST,
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
						multiredditsModelsState: i
					})), c(l))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: s,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: f,
				onAddUserToQuickReplyList: b
			}) => {
				return a.a.createElement(d.q, {
					onClick: t => {
						if (f && f(t), e(), p === n.awardNotification) return b();
						s(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: m,
					isFullWidth: u
				})
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(r))
				}
			}));
			t.b = u(Object(c.c)(m))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/constants/colors.ts");
			const a = {
				backgroundColor: s.b.overlayReportFlow
			};
			t.b = Object(n.a)({
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				m = r.n(l);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class f extends s.a.PureComponent {
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
						editButtonClassName: n,
						isLoading: d,
						imageUrl: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(m.a.Container, r)
					}, s.a.createElement("label", {
						className: m.a.HitBox
					}, s.a.createElement("span", {
						className: m.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: m.a.Image,
						src: l
					}) : t), s.a.createElement(o.a, {
						className: m.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && s.a.createElement("div", {
						className: Object(a.a)(m.a.EditButton, n)
					}, s.a.createElement(c.a, {
						name: "add_media",
						className: m.a.EditIcon
					}))), d && s.a.createElement(i.a, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = r.n(l),
				u = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = u.a.div("Text", m.a),
				b = u.a.div("BottomText", m.a),
				v = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				h = Object(c.a)(x, [i.a.Click, i.a.Keydown]),
				I = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(a.b)(g);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(h, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(I, p({}, e, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/reddit/constants/elementIds.ts"),
				i = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(a.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(n)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: i
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", n.name), d._plural(i)], {
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
				return se
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.tsx"),
				i = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = r.n(i),
				d = a.a.div("dynamicTwoCol", c.a),
				l = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				u = r("./node_modules/react-redux/es/index.js"),
				p = r("./node_modules/reselect/es/index.js"),
				f = r("./src/lib/humanizeDate/index.ts"),
				b = r("./src/lib/prettyPrintNumber/index.ts"),
				v = r("./src/lib/timeAgo/index.ts"),
				x = r("./src/reddit/contexts/InsideOverlay.tsx"),
				g = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/selectors/profile.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/actions/tooltip.ts"),
				O = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				P = r.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = a.a.div("Container", P.a),
				w = a.a.div("Body", P.a),
				y = a.a.h5("Title", P.a),
				N = a.a.span("Label", P.a);
			class S extends s.a.Component {
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
						tooltip: n,
						tooltipId: a
					} = this.props, o = a && n ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return s.a.createElement(j, null, s.a.createElement(y, null, r), s.a.createElement(w, null, e, s.a.createElement(N, E({
						key: "label"
					}, o), t)), a && n && s.a.createElement(O.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: n
					}))
				}
			}
			var k = Object(u.b)(null, e => ({
					toggleTooltip: t => e(Object(_.h)({
						tooltipId: t
					}))
				}))(Object(x.b)(S)),
				U = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				M = r.n(U);
			const F = Object(p.a)(h.j, (e, {
					profileName: t
				}) => Object(I.ub)(e, t), (e, t) => ({
					awardeeKarma: t ? t.awardeeKarma : 0,
					awarderKarma: t ? t.awarderKarma : 0,
					commentKarma: t ? t.commentKarma : 0,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0,
					totalKarma: t ? t.totalKarma || t.postKarma + t.commentKarma : 0
				})),
				T = a.a.div("Container", M.a);

			function A(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			var B = Object(u.b)(F)(Object(x.b)(e => {
					const {
						awardeeKarma: t,
						awarderKarma: r,
						profileCreated: n,
						isOverlay: a,
						commentKarma: o,
						postKarma: i,
						totalKarma: c,
						subscribers: d
					} = e, l = A(a, "karma"), u = A(a, "cakeday"), p = `${m.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[m.fbt._plural(i,"number",Object(b.b)(i,{displayFull:!0}))],{hk:"husfU"})}\n${m.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[m.fbt._plural(o,"number",Object(b.b)(o,{displayFull:!0}))],{hk:"26iPTL"})}\n${m.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[m.fbt._plural(t,"number",Object(b.b)(t,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${m.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[m.fbt._plural(r,"number",Object(b.b)(r,{displayFull:!0}))],{hk:"2F1chz"})}`;
					return s.a.createElement(T, null, s.a.createElement(k, {
						icon: s.a.createElement(g.a, {
							name: "karma",
							isFilled: !0,
							className: M.a.icon,
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
					}), s.a.createElement(k, {
						icon: s.a.createElement(g.a, {
							name: "cake",
							isFilled: !0,
							className: M.a.icon,
							key: "cakeDay"
						}),
						label: Object(f.a)(n, !0),
						title: m.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: u,
						tooltip: Object(v.d)(n)
					}), d > 0 && s.a.createElement(k, {
						icon: s.a.createElement(g.a, {
							name: "user",
							isFilled: !0,
							className: M.a.icon,
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
				L = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				D = r.n(L),
				R = r("./src/config.ts"),
				W = r("./src/reddit/controls/InternalLink/index.tsx"),
				G = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				K = r("./src/reddit/controls/OutboundLink/index.tsx"),
				H = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				q = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				z = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				Z = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				X = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				V = r.n(X),
				Y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				Q = r.n(Y);
			var J = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: r,
					isDeletingBanner: n,
					isDeletingIcon: a,
					isEmployee: o,
					isGold: i,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: l,
					onDeleteBanner: u,
					onDeleteIcon: p,
					profileIcon: f,
					title: b,
					userCreated: v,
					username: x,
					url: h
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(z.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: x,
					isDeletingBanner: !!n,
					onDeleteBanner: u
				}), s.a.createElement("div", {
					className: V.a.SnooIconWrapper
				}, d || !f || c ? s.a.createElement(H.a, {
					iconUrl: f,
					isNSFW: c,
					userName: x,
					isProfileIdCard: !0
				}) : s.a.createElement(K.b, {
					isSponsored: !1,
					href: f,
					source: null
				}, s.a.createElement(H.a, {
					iconUrl: f,
					isNSFW: c,
					userName: x,
					isProfileIdCard: !0
				})), t && !r && (a ? s.a.createElement(G.a, {
					sizePx: 20,
					className: Q.a.loadingIcon
				}) : s.a.createElement(g.a, {
					name: "close",
					className: Q.a.closeIcon,
					onClick: p
				}))), !t && d && s.a.createElement(W.a, {
					to: "/settings/profile",
					className: V.a.settingsLink
				}, s.a.createElement(g.a, {
					name: "settings",
					className: Q.a.settingsIcon
				})), b && s.a.createElement("h4", {
					className: V.a.userTitle
				}, b), s.a.createElement(Z.a, {
					className: V.a.userName,
					username: x,
					userCreated: v,
					url: h
				}), o && s.a.createElement(g.a, {
					name: "admin",
					isFilled: !0,
					className: V.a.adminIcon,
					title: m.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: m.fbt._("{username} has Reddit Premium", [m.fbt._param("username", x)], {
						hk: "3Fylv"
					}),
					href: `${R.a.redditUrl}/premium`
				}, s.a.createElement(g.a, {
					name: "premium",
					isFilled: !0,
					className: V.a.premiumIcon
				})), d && s.a.createElement(q.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: l
				})),
				$ = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var ee = ({
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: r,
				isDefaultIcon: n,
				isDeletingBanner: a,
				isDeletingIcon: o,
				isEmployee: i,
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
				url: I
			}) => v ? s.a.createElement($.a, {
				bannerBackgroundImage: e,
				currentUserHasSnoovatar: t,
				editMode: r,
				isDeletingBanner: a,
				isEmployee: i,
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
				url: I
			}) : s.a.createElement(J, {
				bannerBackgroundImage: e,
				editMode: r,
				isDefaultIcon: n,
				isDeletingBanner: a,
				isDeletingIcon: o,
				isEmployee: i,
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
				url: I
			});
			const te = a.a.wrapped(o.b, "Widget", D.a),
				re = a.a.div("Description", D.a),
				ne = a.a.wrapped(d, "Actions", D.a);
			class se extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(l.a, {
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
						className: n,
						footer: a,
						isEmployee: o,
						isGold: i,
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
						isDeletingBanner: I,
						onClickSnoovatar: _,
						onDeleteIcon: O,
						onDeleteBanner: C,
						prefersReducedAnimations: P,
						editMode: E
					} = this.props;
					return s.a.createElement(te, {
						className: n
					}, s.a.createElement(ee, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: E,
						isDefaultIcon: g,
						isDeletingBanner: I,
						isDeletingIcon: h,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: _,
						onDeleteBanner: C,
						onDeleteIcon: O,
						prefersReducedAnimations: P,
						profileIcon: m,
						title: f,
						userCreated: v,
						username: x,
						url: b,
						snoovatarUrl: p
					}), s.a.createElement(re, null, u), s.a.createElement(B, {
						profileName: x,
						isOverlay: d
					}), this.renderAwardedLastMonth(), s.a.createElement(ne, null, e), a)
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
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
						hideNSFWPref: s,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? a.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === d ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && s ? null : u
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
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
						const r = await Object(o.e)(e);
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
						isNSFW: s,
						isProfileIdCard: o,
						userName: l
					} = this.props, {
						isUpdating: m
					} = this.state, p = a.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: l
					});
					return t && Object(d.e)(t) === l ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: o ? u.a.EditButton : void 0,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(l.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.j,
					hideNSFWPref: o.C
				}),
				c = Object(n.b)(i, e => ({
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
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
				onClick: n
			}) {
				return s.a.createElement(o.q, {
					onClick: n,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && r,
						[l.a.compactButtonLayout]: e
					})
				}, t ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : r ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: n,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), n && e && (c ? s.a.createElement(a.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : s.a.createElement(o.a, {
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
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/timeAgo/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: d,
				...l
			}) {
				const m = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${d}`), a.fbt._param("time since account creation", Object(o.d)(n, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${d}`;
				return r ? s.a.createElement(i.a, c({}, l, {
					className: e,
					to: r
				}), m) : s.a.createElement("span", c({}, l, {
					className: e
				}), m)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				u = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				p = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				f = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const v = Object(b.a)(f.qb);
			var x = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				g = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = r("./node_modules/react-router/esm/react-router.js"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				_ = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				O = r("./src/reddit/routes/avatar/index.ts"),
				C = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				P = r.n(C);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var j = Object(h.i)(({
					onClick: e,
					username: t,
					location: r
				}) => a.a.createElement(g.a, {
					to: `${O.a}/${t}`
				}, a.a.createElement(I.q, {
					onClick: e,
					className: Object(c.a)(P.a.snoovatarButton, P.a.snoovatarExtraPadding, P.a.compactButtonLayout)
				}, a.a.createElement(_.a, {
					className: P.a.shirtIcon
				}), E._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
					className: P.a.chevronIcon
				})))),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				N = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				S = r.n(N);
			const k = 25;

			function U(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function M(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const F = U("particleDelay", S.a),
				T = U("particleX", S.a),
				A = U("particleFloat", S.a),
				B = () => {
					const e = M(T),
						t = M(A),
						r = M(F);
					return Object(c.a)(S.a.particle, e, t, r)
				};
			class L extends a.a.Component {
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
						className: `${B()}`
					})
				}
			}
			var D = L,
				R = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				W = r.n(R);
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: s,
				isDeletingBanner: f,
				isEmployee: b,
				isGold: g,
				isNSFW: h,
				isOwnProfile: I,
				onClickSnoovatar: _,
				onDeleteBanner: O,
				prefersReducedAnimations: C,
				snoovatarUrl: P,
				title: E,
				userCreated: N,
				username: k,
				url: U
			}) => {
				const M = Object(o.e)(e => !I && !!P && v(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(w.a, {
					bannerBackgroundImage: e,
					editMode: !!s,
					isNSFW: h,
					username: k,
					isDeletingBanner: !!f,
					onDeleteBanner: O
				}), a.a.createElement("div", {
					className: S.a.snoovatarContainer
				}, g && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: S.a.topGlow
				}), a.a.createElement("div", {
					className: S.a.bottomGlow
				}), !C && a.a.createElement(D, null)), a.a.createElement("img", {
					className: Object(c.a)(S.a.snoovatar, {
						[S.a.premiumGlow]: g
					}),
					src: P || void 0
				})), !s && I && a.a.createElement(d.a, {
					to: "/settings/profile",
					className: S.a.snoovatarSettingsLink
				}, a.a.createElement(l.a, {
					name: "settings",
					className: W.a.settingsIcon
				})), a.a.createElement("h1", {
					className: S.a.snoovatarUserTitle
				}, E || k, b && a.a.createElement(m.a, {
					className: S.a.snoovatarAdminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), g && a.a.createElement("a", {
					title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", k)], {
						hk: "3Fylv"
					}),
					href: `${i.a.redditUrl}/premium`
				}, a.a.createElement(p.a, {
					className: S.a.snoovatarPremiumIcon
				})), h && a.a.createElement(u.a, {
					className: S.a.snoovatarNsfwIcon,
					title: n.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				})), a.a.createElement(y.a, {
					className: S.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: k,
					userCreated: N,
					url: U
				}), (I || !r && !!P) && a.a.createElement(x.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: I,
					onClick: _
				}), M && a.a.createElement(j, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatar.ts"),
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
				I = r("./src/reddit/selectors/userPrefs.ts"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./node_modules/lodash/compact.js"),
				C = r.n(O),
				P = r("./src/config.ts"),
				E = r("./src/lib/classNames/index.ts"),
				j = r("./src/lib/loadableAction/index.ts"),
				w = r("./src/reddit/actions/gold/modals.ts"),
				y = r("./src/reddit/actions/modal.ts"),
				N = r("./src/reddit/actions/profile/index.ts"),
				S = r("./src/reddit/components/CrisisFlow/index.tsx"),
				k = r("./src/higherOrderComponents/makeAsync.tsx"),
				U = r("./src/lib/loadWithRetries/index.ts");
			var M = Object(k.a)({
					getComponent: () => Object(U.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				F = r("./src/reddit/constants/modals.ts"),
				T = r("./src/reddit/helpers/correlationIdTracker.ts"),
				A = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				B = r("./src/reddit/models/Gold/Premium/index.ts"),
				L = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				D = r("./src/reddit/selectors/premium.ts"),
				R = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				W = r.n(R);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(o.c)({
					areModeratedSubredditsPending: v.a,
					coinsToSpend: h.d,
					givePremiumModalIsOpen: D.c,
					hasFetchedModerators: v.k,
					isEmployee: h.H,
					isLoggedIn: h.K,
					profile: v.j,
					crisisFlowEnabled: L.b
				}),
				H = ({
					isLoading: e,
					...t
				}) => s.a.createElement("div", G({}, t, {
					className: Object(E.a)(W.a.Shimmer, Object(A.b)({
						isLoading: e
					}))
				}));
			class q extends s.a.Component {
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
							clickGivePremiumEvent: n
						} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(n())
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
							hasSubreddit: n,
							isEmployee: s,
							isLoggedIn: a,
							isModerator: o,
							isOwnProfile: i,
							profileName: c,
							profile: d,
							crisisFlowEnabled: l,
							userAcceptsPms: m
						} = this.props, u = a && Object(B.d)(r, s).length && !i || s, p = C()([(i || o) && n ? {
							text: _.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${c}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !i && m ? {
							text: _.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${P.a.redditUrl}/message/compose/?to=${c}`
						} : void 0, !i && t ? {
							text: _.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${P.a.redditUrl}/user/${c}/snoo`
						} : void 0, !i && l ? {
							text: _.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !i && d ? {
							text: _.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${P.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${d.id}`
						} : void 0, a && d && !d.isQuarantined ? {
							onClick: e,
							text: _.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0]);
						return u && p.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: _.fbt._("Give Premium", null, {
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
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(p.q, {
						kind: p.a.InternalLink,
						priority: p.b.Plain,
						size: p.c.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: W.a.menuItem
					}, e.text) : s.a.createElement(p.q, {
						kind: p.a.ExternalLink,
						priority: p.b.Plain,
						size: p.c.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: W.a.menuItem
					}, e.text) : s.a.createElement(p.q, {
						priority: p.b.Plain,
						size: p.c.XS,
						className: W.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(s.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-1"
					}, s.a.createElement(H, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(s.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-2"
					}, s.a.createElement(H, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const a = t ? _.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : _.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: W.a.container
					}, n, s.a.createElement("div", {
						className: W.a.expandContainer
					}, s.a.createElement(p.o, {
						className: W.a.expandButton,
						onClick: this.moreOptionsToggled
					}, a)), e && s.a.createElement(M, null), this.state.showCrisisModal && s.a.createElement(S.b, {
						withOverlay: !0,
						overlayCustomStyles: S.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var z = Object(a.b)(K, (e, {
					profileName: t
				}) => ({
					addToMultiClicked: () => {
						e(Object(j.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), r.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(y.h)(F.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					onClickGivePremium: r => e(Object(w.e)({
						correlationId: r,
						profileName: t
					})),
					onModeratorsRequested: () => e(Object(N.b)(t))
				}))(q),
				Z = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				X = r.n(Z);
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Y = Object(o.c)({
				account: h.j,
				activeTooltipId: g.a,
				currentUserHasSubreddit: h.g,
				hideNSFWPref: h.C,
				isModerator: v.f,
				prefersReducedAnimations: I.c,
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
				}) => Object(h.ob)(e, {
					userName: t
				}),
				user: (e, {
					profileName: t
				}) => Object(h.nb)(e, {
					userName: t
				}),
				page: b.b
			}), Q = ({
				username: e,
				currentUserHasSubreddit: t
			}) => s.a.createElement("div", {
				className: X.a.actionItem
			}, s.a.createElement(p.k, {
				className: X.a.button,
				to: t ? `/user/${e}/submit` : "/submit"
			}, V._("New Post", null, {
				hk: "2VCZwF"
			}))), J = ({
				profileName: e,
				onToggleFollow: t,
				userIsSubscriber: r
			}) => s.a.createElement("div", {
				className: X.a.actionItem
			}, r ? s.a.createElement(p.l, {
				className: X.a.button,
				onClick: () => t(e, r)
			}, V._("Unfollow", null, {
				hk: "1nM1SO"
			})) : s.a.createElement(p.i, {
				className: X.a.button,
				onClick: () => t(e, r)
			}, V._("Follow", null, {
				hk: "OPQuq"
			}))), $ = ({
				userId: e
			}) => s.a.createElement("div", {
				className: X.a.actionItem
			}, s.a.createElement(d.b, {
				contextId: e,
				className: X.a.button,
				userId: e,
				text: V._("Chat", null, {
					hk: "UKkIW"
				})
			}));
			t.default = Object(a.b)(Y, e => ({
				onToggleFollow: (t, r) => e(Object(c.d)([{
					name: t,
					type: u.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(i.b)("profile_overview"))
			}))(Object(m.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: r,
					hideNSFWPref: n,
					isModerator: a,
					isOverlay: o,
					isSubmissionPage: i,
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
					accountIcon: I,
					awardedLastMonth: _,
					created: O,
					id: C,
					isEmployee: P,
					isGold: E,
					prefShowSnoovatar: j,
					snoovatarFullBodyAsset: w,
					username: y
				} = x, N = !!t && t.id === C, S = !(!t || !t.snoovatarFullBodyAsset), k = f && f.bannerBackgroundImage, U = !!m && m.isNSFW, M = U && n, F = !(!u || !u.userIsSubscriber), T = `/user/${y}/`, A = g && g.url === T, B = !u || u.acceptChats, L = !u || u.acceptPms;
				return s.a.createElement(l.a, {
					isEmployee: P,
					isGold: E,
					isNSFW: U,
					isOverlay: o,
					isOwnProfile: N,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: A ? null : T,
					userCreated: O,
					username: y,
					recentAwardings: _,
					currentUserHasSnoovatar: S,
					prefersReducedAnimations: !!h,
					snoovatarUrl: w,
					topAwardIcon: b,
					actions: s.a.createElement(s.a.Fragment, null, N && !i && Q({
						username: y,
						currentUserHasSubreddit: r
					}), !N && v && J({
						profileName: y,
						onToggleFollow: d,
						userIsSubscriber: F
					}), !!t && !N && B && $({
						userId: C
					})),
					footer: s.a.createElement(z, {
						hasSubreddit: v,
						isModerator: a,
						isOwnProfile: N,
						allowViewSnoovatar: j,
						profileName: y,
						sendEvent: p,
						userAcceptsPms: L
					}),
					onClickSnoovatar: c,
					profileIcon: I,
					bannerBackgroundImage: M ? void 0 : k
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
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
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), !a && s.a.createElement("input", {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
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
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = r.n(s);
			const o = ({
					isLoading: e
				}) => Object(n.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/avatarMarketing.ts"),
				a = r("./src/reddit/selectors/telemetry.ts");
			const o = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				i = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...a.defaults(t)
					};
					return Object(s.a)(t) && Object.assign(r, o), r
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
					...o
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, r) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
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
					for (const n in s) {
						const a = s[n];
						(a.priceInCoins <= e || t) && r.push(a)
					}
					return r
				},
				o = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var r;
				switch (t.type) {
					case s.o:
						const {
							avatarMarketingEvent: n
						} = t.payload;
						return n ? function(e) {
							const {
								startsAt: t,
								endsAt: r,
								webAssetUrls: n
							} = e, s = t && new Date(t) <= new Date, a = !!r && new Date(r) < new Date, o = n || null;
							return {
								active: !!s && !a && !!o,
								assetUrls: o
							}
						}(n) : i;
					case a.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === o.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				marketing: c
			})
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/actions/pages/avatar.ts");
			const o = "/avatar",
				i = [o, `${o}/:username`, `${o}/:username/:avatarId`],
				c = {
					action: a.a,
					chunk: s.p.AVATAR,
					component: Object(n.a)({
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
						name: s.Gb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/avatar/index.ts"),
				o = r("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(s.a)({
				features: {
					avatar: a.a
				}
			});
			const i = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				c = Object(n.a)(o.a, e => {
					var t, r;
					const n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing;
					return (null == n ? void 0 : n.active) ? n.assetUrls && n.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => n.b.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.K,
					experimentName: n.g
				}),
				i = e => n.d.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.K,
					experimentName: n.j
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(n.nb)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => t => {
				const r = Object(s.c)(t, {
					experimentEligibilitySelector: s.a,
					experimentName: e
				});
				return !(!r || Object(n.Ed)(r))
			}
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				a = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.fbcab477c5333d305d57.js.map